---
title: "Web Server"
date: 2026-02-08T00:00:00
author: "Aaron Elmquist"
draft: false
tags: ["learning", "server", "networking"]
---

## Introduction

This web server is the second project in my 2026 programming series, following the [echo server]({{< ref "echo-server" >}}).
The goal here was to implement a simple HTTP/1.1 protocol on top of TCP.
The server was limited to the GET method to limit the scope of the exercise.
The code for this exercise can be found [here](https://github.com/elmq0022/web-server).

## The HTTP/1.1 Protocol

The HTTP/1.1 protocol is an application level protocol built on top of TCP.
The protocol is described succinctly on [MDN - Anatomy of an HTTP message](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages#anatomy_of_an_http_message).

```
REQUEST
---
METHOD URL VERSION
HEADER ...
...

body
```

```
RESPONSE
---
VERSION STATUS REASON-PHRASE
HEADER ...
...

body
```

The protocol is simply text delivered over TCP in this format where each line is delimited by a carriage return and a new line.
Most programming languages, including Go, represent this in a string as "\r\n".
This protocol is super simple and probably reflects the state of the web and the web browsers of the 1990s.
HTTP has since received a major upgrade in HTTP/2 which includes things like binary framing, multiplexing over a single TCP connection, and header compression, to name a few.
HTTP/3 builds upon QUIC/UDP which reduces connection setup latency and eliminates head-of-line blocking.

## Implementation

### Request Parsing 

Parsing is done on the bytes received as shown [here](https://github.com/elmq0022/web-server/blob/main/internal/requests/request_parser.go) 
The general idea is to first split the header from the body by splitting the request on the blank line.
The first line is split on the spaces to get the METHOD, URL, and VERSION.
The headers are subsequently parsed and added to a map.
While the items are converted to strings, the body is left in bytes.

### Building the Response

Building the response is handled [here](https://github.com/elmq0022/web-server/blob/main/internal/responses/http_responses.go).
The response starts with an empty byte array.
The first line is built by appending byte by byte and ends with a carriage return and a new line.
The header keys are then sorted before appending the header information.
This keeps the order of the headers deterministic.
At this point the blank line is appended.
The body in bytes is then appended.

### Reading Requested Files

The implementation can be found [here](https://github.com/elmq0022/web-server/blob/main/internal/responses/file_response.go).
There's a bit of error handling here which does obfuscate things a bit.
The main idea though is to read the file from disk and return it in the response as bytes.
MIME types for the headers take a deliberate shortcut.
The file type is inferred from the file extension and defaults to an octet-stream if it's not one of the other defined types.

## Potential Improvements

Obviously, the server would benefit from the addition of more HTTP methods.
The response is implemented to load an entire file into a buffer prior to responding.
Streaming the response would be a nice improvement instead of reading the whole file into memory.

## Closing

Overall this is a nice little project to better understand HTTP and how the web works.
Most of my learning here in this project was the HTTP/1.1 protocol itself.
I did read a bit about HTTP/2 and HTTP/3 protocols though I didn't implement them.
I also got to use more of the Go standard library for networking and file handling.

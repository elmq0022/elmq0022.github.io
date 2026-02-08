---
title: "Echo Server"
date: 2026-02-07T00:00:00
author: "Aaron Elmquist"
draft: false
tags: ["goals", "learning", "server", "networking"]
---

## Intro

This echo-server was the first in a series of programming
exercises chosen to increase my systems programming depth.

## TCP With Go's Standard Library

This exercise focused on using
Go's standard library to work with TCP connections.
These basics are required prior to the web server
exercise, as HTTP is a protocol layered on top of
TCP. You can find the code
[here](https://github.com/elmq0022/echo-server/blob/main/main.go).

## Main Function

The main function starts a TCP server on a specific port.
The server loops infinitely listening for TCP connections.
If there's no connection, the loop continues.
If there is a connection, the listener accepts it
and passes it to a handler.

## Handler

The handler is a loop that reads the
bytes from the connection into a buffer. 
The buffer is then written back to the connection.
The loop exits once an EOF error is received.
All the heavy lifting of TCP is abstracted away
by the standard library. 

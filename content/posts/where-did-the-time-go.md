---
title: "Where Did the Time Go?"
date: 2026-02-01T00:00:00
author: "Aaron Elmquist"
draft: false
tags: ["goals", "learning",]
---

## A Tough Realization

Towards the middle of 2025 I looked at a friend and mentor's GitHub commit history.
It was a wall of green.
Not for days or weeks or months but years.
Here I could clearly see the gap between us.
I went to look at my own commit history even though I didn't need to.
It was hard not to feel a little disappointed in myself for all that lost time.

## A New Philosophy

Here's how I'm going to close the gap.

### Focus on Fundamentals
Don't chase frameworks and shiny new technology.
Instead focus on the fundamentals of software engineering.

### Practice Consistently
Becoming a bit better every day is enough.
The small consistent gains will easily outperform my short infrequent bursts.

### Accept Realistic Expectations
I'm doing well, but I know I can do better.
It's time to green up that commit history.

## The Year Ahead (2026)

For 2026 I've put together a plan of progressively more difficult projects.
These projects mostly focus on small academic versions of the systems I use every day.
Completing and documenting these should deepen my understanding of the systems I rely on.

## Project Sequence

- [x] [Echo Server]({{< ref "echo-server" >}})
- [x] [Web Server]({{< ref "web-server" >}})
- [x] [Rate Limiter]({{< ref "rate-limiter" >}})
- [x] Load Balancer
- [x] Redis Like
- [x] NATS Core Like
- [x] Container Runtime
- [ ] Distributed Log w/ Raft
- [ ] Distributed KV Store

## Updates (March 4, 2026)

1. I originally had an uptime monitoring project scheduled, but it would involve a lot of scheduled CRUD programming and doesn't really pique my interest, so I removed it from the list.

2. I had been considering a URL shortener for the capstone, but I'm not really looking forward to that project either, so I'm evaluating other options.

3. I expected this list to take most of the year, but I'm significantly ahead of that pace.

## Updates (March 5, 2026)

1. I started planning Bitcask and considered the architecture.
   It is really designed for very high throughput at the expense of an in-memory index.
   That is fine, but I wasn't looking to build a server component for this.
   The architecture also doesn't really make sense for an embedded database.
   I've decided to go closer to the metal and try writing a program that runs an isolated container similar to Docker.
   Now I'll have the opportunity to really learn namespaces and cgroups.

2. I'm thinking my capstone for the year might be a NATS/JetStream project:
   a durable, pull-based pub/sub system with replay support. I find it interesting,
   and it has several moving pieces.

## Update (March 6, 2026)

I've finalized the project list with projects left.
A container runtime so I can learn how isolation is done.
A distribute log to learn about how consensus drives distributed systems.
The dist KV store is the simplest extension to raft that's useful.

## Update (March 17, 2026)

Adds the container runtime project.
The namespaces, cgroups, rootfs concepts weren't terrible.
The mechanics of the layer extraction and dealing the whiteout layers was
more of a challenge than I was expecting. 

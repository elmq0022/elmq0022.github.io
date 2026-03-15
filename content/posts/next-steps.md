---
title: "The Path"
date: 2026-03-14T00:00:00
author: "Aaron Elmquist"
draft: true
tags: ["go", "golang", "portfolio", "systems",]
---

# Systems Engineer Portfolio Roadmap (Go)

This roadmap focuses on the kinds of systems knowledge used by engineers at infrastructure companies such as:

- Fly.io
- Cloudflare
- Tailscale
- Fastly

The goal is not just coding practice, but demonstrating understanding of:

- networking
- distributed systems
- Linux runtime
- performance
- failure modes

---

# Phase 1 — Network + Protocol Fundamentals

These prove you understand how the internet actually works.

## 1. TCP Echo Server

Concepts learned:

- sockets
- blocking vs non-blocking IO
- connection lifecycle
- concurrency

Upgrade idea:

- epoll/kqueue based server

This teaches high-performance networking.

---

## 2. HTTP/1.1 Server

Build a minimal HTTP server.

Add support for:

- persistent connections
- header parsing
- request pipeline
- routing

This helps understand application protocols.

---

## 3. HTTP Reverse Proxy

Architecture:

client -> proxy -> backend

Features:

- load balancing
- retries
- health checks
- connection pooling

This is essentially a tiny Envoy or nginx.

---

## 4. DNS Server

Implement:

- UDP DNS server
- record lookup
- caching
- TTL expiration

Concepts:

- UDP networking
- protocol parsing
- caching strategies

DNS is foundational infrastructure.

---

# Phase 2 — Core Infrastructure Primitives

These systems demonstrate infrastructure architecture thinking.

---

## 5. Rate Limiter

Implement several algorithms:

- token bucket
- leaky bucket
- sliding window

Discuss tradeoffs and performance.

---

## 6. Load Balancer

Features:

- round robin
- least connections
- consistent hashing

This becomes a basic L7 load balancer.

---

## 7. Redis-like Key Value Store

Features:

- in-memory KV
- expiration
- append-only log
- snapshotting

This is a mini Redis.

---

## 8. Pub/Sub System

A NATS-like messaging system.

Add:

- topic partitions
- message persistence
- consumer offsets

This approaches Kafka-style messaging.

---

# Phase 3 — Linux Runtime Internals

This is where projects begin to resemble real systems engineering work.

---

## 9. Container Runtime

Capabilities:

- image pull
- manifest parsing
- layer extraction
- container start

Add:

- namespaces
- cgroups
- overlayfs
- seccomp

This becomes a simplified version of `runc`.

---

## 10. Process Supervisor

Example capabilities:

- start services
- restart on crash
- collect logs
- health checks

Similar to:

- systemd
- supervisord

Concepts:

- signals
- process lifecycle
- daemonization

---

# Phase 4 — Distributed Systems

Now we move into cluster coordination.

---

## 11. Raft Implementation

Implement:

- leader election
- log replication
- commit index
- heartbeats

Test with:

- node failures
- network partitions
- recovery scenarios

---

## 12. Distributed KV Store

Build on top of Raft.

Architecture:

client
↓
leader node
↓
raft replication
↓
storage engine


Similar to:

- Celery
- Sidekiq
- Faktory

Concepts:

- distributed coordination
- idempotency
- retry semantics

---

# Phase 5 — Performance Engineering

Infrastructure companies care deeply about latency and throughput.

---

## 14. High Performance Log Storage

Build an append-only log system:

append-only log
segment files
index


This is the core of systems like:

- Kafka
- Redpanda
- NATS Jetstream

---

## 15. Memory Cache

Implement:

- LRU cache
- lock-free or sharded structures

Concepts:

- memory locality
- GC pressure
- lock contention

---

# Phase 6 — Networking Mastery

These projects distinguish strong infrastructure engineers.

---

## 16. TCP Proxy

Architecture:

client
↓
proxy
↓
backend pool


Add:

- connection reuse
- circuit breaking
- backpressure

This resembles real production infrastructure.

---

## 17. Service Discovery

Implement:

register service
health checks
client lookup


Similar to:

- Consul
- etcd service registry

---

## 18. Gossip Protocol

Implement a membership protocol such as:

- SWIM

Concepts:

- cluster membership
- failure detection
- decentralized coordination

Used by systems like:

- Cassandra
- Consul
- Serf

---

# Example Portfolio Structure

systems-playground/

tcp-echo/
http-server/
reverse-proxy/
dns-server/

kv-store/
pubsub/
rate-limiter/
load-balancer/

container-runtime/
process-supervisor/

raft/
distributed-kv/

tcp-proxy/
service-discovery/
gossip-cluster/
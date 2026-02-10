---
title: "Rate Limiter"
date: 2026-02-10T00:00:00
author: "Aaron Elmquist"
draft: false
tags: ["learning", "server", "networking"]
---

## Introduction

This project is a look at a few different rate limiting algorithms.
The implementations for these algorithms can be found [here](https://github.com/elmq0022/rate-limiter).

## Approaches

### Token Bucket

The token bucket algorithm starts with a bucket full of tokens.
Each request removes a token from the bucket, and tokens are replenished at a fixed rate.
If the bucket is empty, the request is denied.
This approach handles an initial spike in traffic gracefully before throttling additional requests.

The implementation is O(1).
On each request, calculate the time elapsed since the last request,
add tokens for the elapsed period, and allow the request only if tokens are available.

### Fixed Window

The fixed window algorithm allows a set number of requests within a defined period of time.
Once requests are exhausted, the service is locked out until the next window begins.
An early spike of traffic in the window can exhaust the limit quickly.
This results in locking out requests for the remainder of the period.
This is also an O(1) implementation.

### Sliding Window Log

The sliding window log keeps a log of successful request timestamps.
Timestamps older than the window size are dropped.
A request is allowed if the total number of requests within the window is less than the maximum allowed.
This approach doesn't lock a user out as aggressively after a spike in traffic compared to the fixed window.
However, it's an O(n) algorithm since the log must be scanned on each request,
which makes it less practical for production use at scale.

### Sliding Window Counter

The sliding window counter is similar to the sliding window log but achieves O(1) performance.
It uses two fixed windows and adds a weighted percentage of the prior window's count to the current window's count.
If the current window is exceeded by less than one duration, the current window becomes the prior window.
Otherwise, both windows are reset.

## Potential Improvements

This implementation was done specifically to learn the rate limiting algorithms.
In a production system, the rate limiting should be specific to an IP address or user.
This would require managing a map of rate limiters and a separate process to remove stale rate limiters.

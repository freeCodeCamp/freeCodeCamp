---
title: Ditributed Algorithms
---

## Distributed Algorithms
Distributed algorithms is the study of algorithms that run on more than one processor. The purpose of such algorithms is to utilize parallelization to achieve speedup. Some applications of distributed algorithms would be in multicore processors and clusters of computers.

While studying distributed algorithms in theory, the distributed system is modeled in order to reach an abstract level independent from different implementations and systems. Two common models are message passing model and shared memory model. In message passing, each process (process and processors are usually used interchangeably) communicated via messages that it sends and receives to and from other processes. In the shared memory model, processes communicate by accessing a shared memory.


A distributed algorithm is an algorithm, run on a distributed system, that does not assume the previous existence of a central coordinator.
A distributed system is a collection of processors that do not share memory or a clock. Each processor has its own memory, and the processors communicate via communication networks.

## Parallel vs Distributed:

• In both Parallel and Distributed systems, the events are partially ordered.
• The distinction between Parallel and Distributed is not always very clear.
• In Parallel systems, the primarily issues are
    ~ speed-up and increased data handling capability.
• In Distributed systems the primary issues are
    ~ fault-tolerance,synchronization,scalability,etc.

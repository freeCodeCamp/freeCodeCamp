---
title: Dining Philosophers Problem
---
## Dining Philosophers Problem

In computer science, the dining philosophers problem is an example problem often used in concurrent algorithm design to illustrate synchronization issues and techniques for resolving them. It was originally formulated in 1965 by Edsger Dijkstra as a student exam exercise, presented in terms of computers competing for access to tape drive peripherals. Soon after, Tony Hoare gave the problem its present formulation.

In simple words, the dining philosophers problem is an illustration of how syncronized access to a shared resource can result in creation of a deadlock situation. 

#### Synchronization and Deadlock
**Synchronization** is used to control concurrent access to a shared resource. This is necessary in any situaution where multiple independent actors may be competing for the use of one resource. Since there is only one resource available, we use synchronization to prevent confusion and chaos.

A **Deadlock** is a system state where no progress is possible. This situation can occur when synchronization is enforced, and many processes end up waiting for a shared resource which is being held by some other process. In this case, the processes just keep waiting and execute no further.

#### Problem Statement
Five silent philosophers sit at a round table with bowls of spaghetti. Forks are placed between each pair of adjacent philosophers.

Each philosopher must alternately think and eat. However, a philosopher can only eat spaghetti when they have both left and right forks. Each fork can be held by only one philosopher and so a philosopher can use the fork only if it is not being used by another philosopher. After an individual philosopher finishes eating, they need to put down both forks so that the forks become available to others. A philosopher can take the fork on their right or the one on their left as they become available, but cannot start eating before getting both forks. (**Synchronization**)

Eating is not limited by the remaining amounts of spaghetti or stomach space; an infinite supply and an infinite demand are assumed.

The problem is how to design a discipline of behavior (a concurrent algorithm) such that no philosopher will starve; i.e., each can forever continue to alternate between eating and thinking, assuming that no philosopher can know when others may want to eat or think. (**Deadlock Avoidance**)

Upfront, it may seem that deadlock is not easily possible. To see that a proper solution to this problem is not obvious, consider a proposal in which each philosopher is instructed to behave as follows:
1. think until the left fork is available; when it is, pick it up;
2. think until the right fork is available; when it is, pick it up;
3. when both forks are held, eat for a fixed amount of time;
4. then, put the right fork down;
5. then, put the left fork down;
6. repeat from the beginning.

This attempted solution fails because it allows the system to reach a deadlock state, in which no progress is possible. This is a state in which each philosopher has picked up the fork to the left, and is waiting for the fork to the right to become available, or vice versa. With the given instructions, this state can be reached, and when it is reached, the philosophers will eternally wait for each other to release a fork. (**Deadlock and Starvation**)

There are many solutions possible to prevent Deadlock. If we look closely, one problem in the algorithm above is that all philosophers have equal chance (have the same priority) of acquiring one fork. This prevents anyone from acquiring two forks and the whole system grinds to a halt.

Solutions include:-
1. Priority - Some philosophers are assigned higher priority, so that the chance of acquiring both forks is increased.
2. Preemption (Politeness) - Philosophers relinquish the acquired fork without eating, in case the other fork is not available.
3. Arbitration - A mediator allocates forks ensuring that two forks are given to one person, ibnstaed of one to many.

#### More Information:
https://www.wikiwand.com/en/Dining_philosophers_problem

---
title: Deadlock
---

## Deadlock

### The Deadlock Problem
- A set of blocked processes each holding a resource and waiting to acquire a resource held by another process in the set.
- Example
	- System has 2 disk drives.
	- P 1 and P 2 each hold one disk drive and each needs another one.

#### Bridge Crossing Example
![bridge crossing example](http://www.eenadupratibha.net/pratibha/engineering/images/unit5/1.jpg)

- Trafﬁc only in one direction.
- Each section of a bridge can be viewed as a resource.
- If a deadlock occurs, it can be resolved if one car backs up (preempt resources and rollback).
- Several cars may have to be backed up if a deadlock occurs.
- Starvation is possible.

### Deadlock Characterization
Deadlock can arise if four conditions hold simultaneously.
- **Mutual exclusion** : only one process at a time can use a resource.
- **Hold and wait** : a process holding at least one resource is waiting to acquire additional resources held by other processes.
- **No preemption** : a resource can be released only voluntarily by the process holding it, after that process has completed its task.
- **Circular wait** : there exists a set { P<sub>0</sub>, P<sub>1</sub>, …, P<sub>0</sub> } of waiting processes such that P<sub>0</sub> is waiting for a resource that is held by P<sub>1</sub>, P<sub>1</sub> is waiting for a resource that is held by P<sub>2</sub>, …, P<sub>n –1</sub> is waiting for a resource that is held by P<sub>n</sub>, and P<sub>0</sub> is waiting for a resource that is held by P<sub>0</sub>.

### Methods for Handling Deadlocks
- Ensure that the system will never enter a deadlock state.
- Allow the system to enter a deadlock state and then recover.
- Ignore the problem and pretend that deadlocks never occur in the system; **used by most operating systems, including UNIX**.

### Deadlock Prevention
- **Mutual Exclusion** – It is not required for sharable resources; must hold for nonsharable resources.

- **Hold and Wait** – It must guarantee that whenever a process requests a resource, it does not hold any other resources.
	- Require process to request and be allocated all its resources before it begins execution, or allow process to request resources only when the process has none.
	- Low resource utilization; starvation possible.

- **No Preemption** –
	- If a process that is holding some resources requests another resource that cannot be immediately allocated to it, then all resources currently being held are released.
	- Preempted resources are added to the list of resources for which the process is waiting.
	- Process will be restarted only when it can regain its old resources, as well as the new ones that it is requesting.

- **Circular Wait** – It imposes a total ordering of all resource types, and require that each process requests resources in an increasing order of enumeration.


#### More information :
- [Deadlock](https://en.wikipedia.org/wiki/Deadlock)
- [Operating System | Process Management | Deadlock Introduction](https://www.geeksforgeeks.org/operating-system-process-management-deadlock-introduction/)
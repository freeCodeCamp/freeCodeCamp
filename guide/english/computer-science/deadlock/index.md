---
title: Deadlock
---

## Deadlocks

### The Deadlock Problem

Deadlock is a situation which occurs when a process or thread enters a waiting state because a resource requested is being held by another waiting process, which in turn is waiting for another resource held by another waiting process.
In a deadlock state a process is unable to change its state(waiting) indefinitely because the resources requested by it are being used by another waiting process.
- A set of blocked processes each holding a resource and waiting to acquire a resource held by another process in the set.
- Example:
Let there be 2 processes P1 and P2 and 2 resources R1 and R2. Both P1 and P2 require Both R1 and R2 to complete their tasks. Suppose P1 acquires R1 first. In the mean time P2 acquires R2. Now when P1 requests for R2 it will have to wait (because R2 is being held by P2). Similarly, when P2 requests for R1 it will also have to wait. Neither P1 nor P2 will not be able to change their waiting state since both are holding the resource required by the other process and none will release its resource until their allocated task is over.  Hence the system will be in deadlock. 

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
- Put the system in a situation where the deadlock can be avoided, i.e. Deadlock Avoidance.
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

### Deadlock Avoidance
Provide information to Operating system that which all resources any process will require during its lifetime.
Then at every request the system can decide whether to grant that request or not.
This decision depends upon resources currently available, resources currently allocated to each process and future request and release of resources by each process.
Safe State: state is safe if the system can allocate resources to every process in some order and still avoid deadlock. 
Safe sequence – is an order {P1, P2, … Pn} in which the processes can be allocated resources safely.<br>
NOTE:  
Safe state – No deadlock
Unsafe State - Deadlock may or may not occur 

Conclusion
Do not grant the request immediately
Check whether granting the request will leave the system in safe state or not?
If yes, grant the request otherwise do not grant the request

### Algorithms for deadlock avoidance

#### Resource allocation graph algorithm
<i>Resource Allocation graph</i> - this technique can be  employed when there is single instance of every resource. In resource allocation graph for deadlock avoidance we introduce a third kind of edge called the claim edge which is a dotted line from a process towards a resource meaning that the resource can be requested by the process in future.
When ever  a process requests for a resource the claim edge is changed to request edge and if the resource can be granted the request edge is changed to assignment edge. After this change look for a cycle in the graph. If no cycle exists, then the system is in safe state and the deadlock will not occur else the  system is in unsafe state and deadlock may or may not occur.

#### Banker’s algorithm
<i>Banker's Algorithm</i> - this technique is used when there are multiple instances of a resource. This algorithm requires four data structures to be implemented:
Available – no. of available resources of each type
Max – maximum need of any process for any resource
Allocation – number of resources allocated to each process
Need – (Max – Allocation)

#### More information :
- [Deadlock](https://en.wikipedia.org/wiki/Deadlock)
- [Operating System | Process Management | Deadlock Introduction](https://www.geeksforgeeks.org/operating-system-process-management-deadlock-introduction/)

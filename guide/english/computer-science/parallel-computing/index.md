---
title: Parallel Computing
---
## Parallel Computing

In the simplest sense, parallel computing is the simultaneous use of **multiple compute resources** to solve a computational problem:
  - A problem is broken into discrete parts that can be solved concurrently.
  - Each part is further broken down to a series of instructions.
  - Instructions from each part execute simultaneously on different processors.
  - An overall control/coordination mechanism is employed.

![Parallelism](https://computing.llnl.gov/tutorials/parallel_comp/images/parallelProblem.gif)

### Why Parallelism
- Faster, of course
  - Finish the work earlier - Same work in less time
  - Do more work - More work in the same time

### How to parallelize
- Firstly, break down the computational part into small pieces.
- Then, sssign the small jobs to the parallel running processes.
- But it might become complicated when the small piece of jobs depend upon others.
 
### Writing a Parallel Program
- If you are starting with an existing serial program, debug the serial code completely.
- Identify which parts of the program can be executed concurrently.
  - Requires a thorough understanding of the algorithm.
  - Exploit any parallelism which may exist.
  - May require restructuring of the program and/or algorithm. May require an entirely new algorithm.
- Decompose the program:
  - Task Parallelism
  - Data Parallelism
  - Combination of both
 
### Task (Functional) Parallelism
- Different operations are performed on the same or different data in parallel to fully utilize the resources. 
- Decomposing the problem into different processes which can be distributed to multiple processors for simultaneous execution.
- Good to use when there is not static structure or ﬁxed determination of number of calculations to be performed.

### Data (Domain) Parallelism
- Same operations are performed on different subsets of same data structure.
- Partitioning the problem's data domain and distributing portions to multiple processors for simultaneous execution.
- Good to use for problems where:
  - data is static.
  - domain is ﬁxed but computation within various regions of the domain is dynamic.

### Elements of a Parallel Computer
- Hardware
  - Multiple Processors
  - Multiple Memories 
  - Interconnection Network
- System Software
  - Parallel Operating System
  - Programming Constructs to Express/Orchestrate Concurrency
- Application Software
  - Parallel Algorithms

### Communication Model of Parallel Platforms
- There are two primary forms of data exchange between parallel tasks
  - accessing a shared data space and exchanging messages.
- Platforms that provide a shared data space are called **shared-address-space** machines or **mult iprocessors**. 
- Platforms that support messaging are called **message passing platforms** or **multicomputers**.

### Shared-Address-Space Platforms
- Part (or all) of the memory is accessible to all processors.
- Processors interact by modifying data objects stored in this shared-address-space.
- If the time taken by a processor to access any memory word in the system (global or local) is 
  - identical, then the platform is classiﬁed as a **uniform memory access (UMA)**,
  - not identical, then its classiﬁed as **non-uniform memory access (NUMA)** machine.

![Shared memory](https://computing.llnl.gov/tutorials/parallel_comp/images/sharedMemoryModel.gif) 
 
### Message-Passing Platforms
- These platforms comprise of a set of processors and their own (exclusive) memory.
- Instances of such a view come naturally from clustered workstations and non-shared-addressspace multicomputers.
- Interactions between processes running on different nodes must be accomplished using messages.
- The exchange of messages is used to transfer data, work and to synchronize actions among the processes.
- These platforms are programmed using (variants of) **send** and **receive** primitives.
- Libraries such as **MPI** and **PVM** provide such primitives.

![Message passing](https://computing.llnl.gov/tutorials/parallel_comp/images/msg_pass_model.gif)
 

#### More Information:
- [Parallel Computing on Wikipedia](https://en.wikipedia.org/wiki/Parallel_computing)
- [Introduction to Parallel Computing](https://computing.llnl.gov/tutorials/parallel_comp/)
- [Introduction to Parallel Computing-Book](https://www-users.cs.umn.edu/~karypis/parbook/)

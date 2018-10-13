---
title: Algorithms
---

## Algorithms

In computer science, an algorithm is an unambiguous specification of how to solve a class of problems. Algorithms can perform calculations, data processing and automated reasoning tasks.

An algorithm is an effective method that can be expressed within a finite amount of space and time and in a well-defined formal language for calculating a function. Starting from an initial state and initial input (perhaps empty), the instructions describe a computation that, when executed, proceeds through a finite number of well-defined successive states, eventually producing "output" and terminating at a final ending state. The transition from one state to the next is not necessarily deterministic; some algorithms, known as randomized algorithms, incorporate random input.

There are certain requirements that an algorithm must abide by:
<ol>
  <li>Definiteness: Each step in the process is precisely stated.</li>
  <li>Effective Computability: Each step in the process can be carried out by a computer.</li>
  <li>Finiteness: The program will eventually successfully terminate.</li>
</ol>

Some common types of algorithms include sorting algorithms, search algorithms, and compression algorithms. Classes of algorithms include Graph, Dynamic Programming, Sorting, Searching, Strings, Math, Computational Geometry, Optimization, and Miscellaneous. Although technically not a class of algorithms, Data Structures are often grouped with them. 

### Efficiency

Algorithms are most commonly judged by their efficiency and the amount of computing resources they require to complete their task. A common way to evaluate an algorithm is to look at its time complexity. This shows how the running time of the algorithm grows as the input size grows. Since the algorithms today, have to be operate on large data inputs, it is essential for our algorithms to have a reasonably fast running time .

### Sorting Algorithms

Sorting algorithms come in various flavors depending on your necessity.
Some, very common and widely used are:

### Formalization

Algorithms are essential to the way computers process data. Many computer programs contain algorithms that detail the specific instructions a computer should perform (in a specific order) to carry out a specified task, such as calculating employees' paychecks or printing students' report cards. Thus, an algorithm can be considered to be any sequence of operations that can be simulated by a Turing-complete system. Authors who assert this thesis include Minsky (1967), Savage (1987) and Gurevich (2000):

Minsky: "But we will also maintain, with Turing . . . that any procedure which could "naturally" be called effective, can in fact be realized by a (simple) machine. Although this may seem extreme, the arguments . . . in its favor are hard to refute".

Gurevich: "...Turing's informal argument in favor of his thesis justifies a stronger thesis: every algorithm can be simulated by a Turing machine ... according to Savage [1987], an algorithm is a computational process defined by a Turing machine".

Typically, when an algorithm is associated with processing information, data can be read from an input source, written to an output device and stored for further processing. Stored data are regarded as part of the internal state of the entity performing the algorithm. In practice, the state is stored in one or more data structures.

For some such computational process, the algorithm must be rigorously defined: specified in the way it applies in all possible circumstances that could arise. That is, any conditional steps must be systematically dealt with, case-by-case; the criteria for each case must be clear (and computable).

Because an algorithm is a precise list of precise steps, the order of computation is always crucial to the functioning of the algorithm. Instructions are usually assumed to be listed explicitly, and are described as starting "from the top" and going "down to the bottom", an idea that is described more formally by flow of control.

So far, this discussion of the formalization of an algorithm has assumed the premises of imperative programming. This is the most common conception, and it attempts to describe a task in discrete, "mechanical" means. Unique to this conception of formalized algorithms is the assignment operation, setting the value of a variable. It derives from the intuition of "memory" as a scratchpad. There is an example below of such an assignment.

For some alternate conceptions of what constitutes an algorithm see functional programming and logic programming.
#### Quick Sort

There is no sorting discussion which can finish without quick sort. The basic concept is in the link below.
[Quick Sort](http://me.dt.in.th/page/Quicksort/)

#### Merge Sort
It is the sorting algorithm which relies on the concept how to sorted arrays are merged to give one sorted arrays. Read more about it here-
[Merge Sort](https://www.geeksforgeeks.org/merge-sort/)

freeCodeCamp's curriculum heavily emphasizes creating algorithms. This is because learning algorithms is a good way to practice programming skills. Interviewers most commonly test candidates on algorithms during developer job interviews.

### Further Resources

[Intro to Algorithms | Crash Course: Computer Science](https://www.youtube.com/watch?v=rL8X2mlNHPM)

This video gives an accessible and lively introduction to algorithms focusing on sorting and graph search algorithms. 

[What is an Algorithm and Why Should you Care? | Khan Academy](https://www.youtube.com/watch?v=CvSOaYi89B4)

This video introduces algorithms and briefly discusses some high profile uses of them. 

[15 Sorting Algorithms in 6 Minutes | Timo Bingmann](https://www.youtube.com/watch?v=kPRA0W1kECg)

This video visually demonstrates some popular sorting algorithms that are commonly taught in programming and Computer Science courses.

[Algorithm Visualizer](http://algo-visualizer.jasonpark.me)

This is also a really good open source project that helps you visualize algorithms. 

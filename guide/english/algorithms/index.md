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

There are different approaches used for writing an algorithm depending on the type of problem
<ol>
  <li>Brute force Approach: A straightforward approach to solving a problem,usually directly based on the problem statement and definitions of the concepts involved.</li>
  <li>Divide and Conquer Approach: This approach works by recursively breaking down a problem into two or more sub-problems of the same or realted type,until these become simple enough to be solved directly.</li>
  <li>Decrease and Conquer Approach: This technique works by dividing a given problem into subproblem,finding the solutions to that subproblem,and finally extending solution of subproblem to arrive at the solution of original problem.</li>
  <li>Greedy Technique: Greedy approach solves a given problem by making a local optimal choice at each step which will lead to a globally-optimal solution.</li>
  <li>Backtracking: Backtracking can be defined as technique for solving problems recursively by trying to find a solution incrementally i.e. step by step and by removing those solutions that fail to satisfy the constraints of the problem at any point of time. </li>
  <li>Dynamic Programming: It is a technique for solving a complex problem by breaking it into subproblems in a recursive manner.This technique differs from divide and conquer approach by recording the results of subproblems in a table and uses those table results to arrive at the solution of original problem.</li>

### Efficiency

Algorithms are most commonly judged by their efficiency and the amount of computing resources they require to complete their task. A common way to evaluate an algorithm is to look at its time complexity. This shows how the running time of the algorithm grows as the input size grows. Since the algorithms today, have to operate on large data inputs, it is essential for our algorithms to have a reasonably fast running time.

### Big O
To describe the running time and efficiency of algorithms, the standard language and metric used is called Big O notation and can be denoted as `O(running time)` for example the time taken to search an element using linear search (i.e to find an element by comparing it to all the other elements in an array of size n) is `O(n)`. The notation helps us to understand how fast a particular algorithm is by making sure that it is at least as fast as the denoted run-time. [Big_O - wikipedia](https://en.wikipedia.org/wiki/Big_O_notation)

### Sorting Algorithms

Sorting algorithms come in various flavors depending on your necessity.
Some, very common and widely used are:

#### Quick Sort

There is no sorting discussion which can finish without quick sort.
[Quick Sort](http://me.dt.in.th/page/Quicksort/)

#### Merge Sort
It is the sorting algorithm which relies on the concept how two sorted arrays are merged to give one sorted array. Read more about it here-
[Merge Sort](https://www.geeksforgeeks.org/merge-sort/)


#### Bubble Sort
One of the simplest sorting algorithms there is and one of the easiest to implement. It relies on the comparison of two adjacent numbers in an array and swapping them if one is bigger than the other. Read more about it here - [Bubble Sort](https://www.geeksforgeeks.org/bubble-sort/).

#### Heap Sort
A sorting algorithm that works by first organizing the data to be sorted into a special type of binary tree called a heap. The heap itself has, by definition, the largest value at the top of the tree, so the heap sort algorithm must also reverse the order. Read more about it here - [Heap Sort](https://www.geeksforgeeks.org/heap-sort/).


freeCodeCamp's curriculum heavily emphasizes creating algorithms. This is because learning algorithms is a good way to practice programming skills. Interviewers most commonly test candidates on algorithms during developer job interviews.

### Further Resources

[Intro to Algorithms | Crash Course: Computer Science](https://www.youtube.com/watch?v=rL8X2mlNHPM)

This video gives an accessible and lively introduction to algorithms focusing on sorting and graph search algorithms. 

[What is an Algorithm and Why Should you Care? | Khan Academy](https://www.youtube.com/watch?v=CvSOaYi89B4)

This video introduces algorithms and briefly discusses some high profile uses of them. 

[15 Sorting Algorithms in 6 Minutes | Timo Bingmann](https://www.youtube.com/watch?v=kPRA0W1kECg)

This video demonstrates some popular sorting algorithms that are commonly taught in programming and Computer Science courses.

[How algorithms shape our world | Kevin Slavin](https://www.youtube.com/watch?v=TDaFwnOiKVE)

This is a short video on how algorithms shape our world and their occurence in everyday life.

[Algorithm Visualizer](http://algo-visualizer.jasonpark.me)

This is also a really good open source project that helps you visualize algorithms. 

[Infographic on how Machine Learning Algorithms Work](https://www.boozallen.com/content/dam/boozallen_site/sig/pdf/infographic/how-do-machines-learn.pdf)

This infographic shows you how unsupervised and supervised machine learning algorithms work..

[Visualization of How Algorithms Work](https://visualgo.net/en)

This website has interactive visuals and elaborative explanations(pseudocode) of well known algorithms.

[An entire course on Khanacademy on algorithms](https://www.khanacademy.org/computing/computer-science/algorithms)

This is a good step by step introduction to algorithms.


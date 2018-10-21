---
title: Dynamic Programming
---

# Dynamic Programming

Dynamic Programming works by splitting a problem into several subproblems. While solving these solving these subproblems, which are often overlapping, the algorithim stores the result of subproblem so that it does not have to repeat calculations.

To use Dynamic Programming, the problem must have the following qualities:
* Overlapping Sub-Problems
* Optimal Substructure

## Overlapping Sub-problems

What contrasts dynamic programming from divide-and-conquer is that in the former, sub-problems overlap, while in the latter, they do not. When subproblems overlap, a naive program could end up calculating the same sub-problems over and over again. So, creating a table of values for the different sub-problems could greatly enhance the runtime of the algorithim

## Optimal Substructure

Since dynamic programming splits a problem into smaller subproblems, then, there must be a way to merge the answers of these sub-problems. A widely cited example of a problem that has optimal substructure is the shortest path problem.


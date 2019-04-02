---
title: Embarassingly Parallel Algorithms
---
## Embarassingly Parallel Algorithms

In parallel programming, an embarrassingly parallel algorithm is one that requires no communication or dependency between the processes. Unlike distributed computing problems that need communication between tasks—especially on intermediate results, embarrassingly parallel algorithms are easy to perform on server farms that lack the special infrastructure used in a true supercomputer cluster. Due to the nature of embarrassingly parallel algorithms, they are well suited to large, internet-based distributed platforms, and do not suffer from parallel slowdown. The opposite of embarrassingly parallel problems are inherently serial problems, which cannot be parallelized at all. 
The ideal case of embarrassingly parallel algorithms can be summarized as following: 
*	All the sub-problems or tasks are defined before the computations begin.
*	All the sub-solutions are stored in independent memory locations (variables, array elements).
*	Thus, the computation of the sub-solutions is completely independent. 
*	If the computations require some initial or final communication, then we call it nearly embarrassingly parallel.

Many may wonder the etymology of the term “embarrassingly”. In this case, embarrassingly has nothing to do with embarrassment; in fact, it means an overabundance—here referring to parallelization problems which are “embarrassingly easy”. 

A common example of an embarrassingly parallel problem is 3d video rendering handled by a graphics processing unit, where each frame or pixel can be handled with no interdependency. Some other examples would be protein folding software that can run on any computer with each machine doing a small piece of the work, generation of all subsets, random numbers, and Monte Carlo simulations. 

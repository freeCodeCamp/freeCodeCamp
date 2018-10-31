---
title: NP Completeness
---
## NP Completeness

NP-Complete is a property of certain types of problems. If a problem is NP-Complete, it means that there is no efficient (polynomial) algorithm to find a solution to it quickly. However, if a solution is given to us, we can quickly (in polynomial time) verify that it is correct.

To be more concrete, let us examine a known NP-Complete problem - the subset sum problem. Say we have a set of integers {−7, −3, −2, 5, 8}. We want to find a subset of these integers whose elements sum up to 0. How can we do that?

One way would be to simply enumerate all possible subsets and check if their elements sum up to 0. This would be exponentially complex.

And indeed, there is no better algorithm known, which improves on the exponential time bound. That is why it is classifies as an NP-Complete problem.

There are many such known problems apart from the subset sum problem which are known to be NP-Complete, such as the vertex cover problem, hamiltonian path problem, boolean satisfiability problem, etc. If an efficient algorithm for one is found, it implies that we can design an efficient algorithm for all problems which are NP-Complete.

If you have a problem that can be proved to be NP-complete, you should stop trying to find more efficient algorithms for it and instead use heuristics to solve the problem for most test cases, or solve an approximate version of the problem. Or maybe examine the problem you're solving to see if it can't be simplified to something that isn't NP-Complete.

#### More Information:
https://www.ics.uci.edu/~eppstein/161/960312.html
https://stackoverflow.com/questions/210829/what-is-an-np-complete-in-computer-science



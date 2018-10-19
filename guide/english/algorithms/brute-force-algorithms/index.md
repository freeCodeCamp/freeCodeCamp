---
title: Brute Force Algorithms
---
## Brute Force Algorithms

Brute Force Algorithms refers to a programming style that does not include any shortcuts to improve performance, but instead relies on sheer computing power to try all possibilities until the solution to a problem is found.  People typically use Brute Force Algorithms as a starting point in many algorithmic problems because it's the most intuitive way to code a problem.  It gets you a solution that (if done correctly) works on the first try and from there, you can focus on looking at bottlenecks in the code (places in which the performance may be throttled), unused code or duplicate code.  Moving on to examples...

Example: A classic example is the traveling salesman problem (TSP). Suppose a salesman needs to visit 10 cities across the country. How does one determine the order in which cities should be visited such that the total distance traveled is minimized? The brute force solution is simply to calculate the total distance for every possible route and then select the shortest one. This is not particularly efficient because it is possible to eliminate many possible routes through clever algorithms. 

Another example: 5 digit password, in the worst case scenario would take 10<sup>5</sup> tries to crack.
The time complexity of brute force is <b> O(n*m) </b>. So, if we were to search for a string of 'n' characters in a string of 'm' characters using brute force, it would take us n * m tries.

#### More Information:

<a href="https://en.wikipedia.org/wiki/Brute-force_search"> Wikipedia </a>

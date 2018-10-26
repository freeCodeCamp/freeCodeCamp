---
title: Brute Force Algorithms
---
## Brute Force Algorithms

“Brute force” in algorithms is a short way of saying “exhaustive search”. To perform exhaustive search over some real-world problem with large data set you usually require a lot of processing power, hence the “brute force”.

Brute force algorithms are usually extremely simple, naive approaches to solving the problem in question. They are used in a couple of situations:

1.There’s no solution other than brute force. For example we don’t know how to break the cypher like MD5, SHA, Blowfish and such apart from ciphering all possible text strings and comparing what we got with what we want to decipher. That’s exactly the applied exhaustive search in action.

2.The data set is relatively small and/or it’s a single-run software. In this case there’s no need to waste time developing sophisticated algorithms. Brute force algorithms are usually short and simple to invent. In 2017 if your data set is 1 million rows it’s probably small enough to brute force on typical desktop workstation, except for NP-hard problems, of course.

3.You don’t know about more sophisticated solution and you have deadline to meet. In this case brute force is better than nothing, especially while on small datasets it can perform equally well than the best algo for the same kind of problems. “When in doubt, use brute force” is a working rule of thumb.

Brute Force Algorithms refers to a programming style that does not include any shortcuts to improve performance, but instead relies on sheer computing power to try all possibilities until the solution to a problem is found. 

A classic example is the traveling salesman problem (TSP). Suppose a salesman needs to visit 10 cities across the country. How does one determine the order in which cities should be visited such that the total distance traveled is minimized? The brute force solution is simply to calculate the total distance for every possible route and then select the shortest one. This is not particularly efficient because it is possible to eliminate many possible routes through clever algorithms. 

Another example: 5 digit password, in the worst case scenario would take 10<sup>5</sup> tries to crack.

The time complexity of brute force is <b> O(n*m) </b>. So, if we were to search for a string of 'n' characters in a string of 'm' characters using brute force, it would take us n * m tries.

#### More Information:

<a href="https://en.wikipedia.org/wiki/Brute-force_search"> Wikipedia </a>

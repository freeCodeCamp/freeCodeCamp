---
title: Algorithm Performance
---

In mathematics, big-O notation is a symbolism used to describe and compare the _limiting behavior_ of a function.  

A function's limiting behavior is how the function acts as it approaches a specific value (usually trends towards infinity).

In short, big-O notation is used to describe the growth or decline of a function, usually with respect to another function.

In algorithm design, we usually use big-O notation because we can see how good or bad an algorithm's performance will be.  From a denotative perspective, big-O denotes the runtime in the worst possible case scenario.  However, in many instances, people use it as a synonym for average expected runtime.  

In mathematics, big-O notation is a symbolism used to describe and compare the _limiting behavior_ of a function.  

A function's limiting behavior is how the function acts as it trends towards a particular value and in big-O notation it is usually as it trends towards infinity.  

In short, big-O notation is used to describe the growth or decline of a function, usually with respect to another function.  In programming, big-O notation compares the growth/decline of the runtime in respects to the size of the input.  

NOTE: x^2 is equivalent to x * x or 'x-squared']

For example we say that x = O(x^2) for all x > 1 or in other words, x^2 is an upper bound on x and therefore it grows faster.  
The symbol of a claim like x = O(x^2) for all x > _n_ can be substituted with x <= x^2 for all x > _n_ where _n_ is the minimum number that satisfies the claim, in this case 1.  

Effectively, we say that a function f(x) that is O(g(x)) grows slower than g(x) does.


Comparitively, in computer science and software development we can use big-O notation in order to describe the efficiency of algorithms via its time and space complexity.

**Space Complexity** of an algorithm refers to its memory footprint with respect to the input size.

Specifically when using big-O notation we are describing the efficiency of the algorithm with respect to an input: _n_, usually as _n_ approaches infinity.  
When examining algorithms, we generally want a lower time and space complexity. Time complexity of o(1) is indicative of constant time.

Through the comparison and analysis of algorithms we are able to create more efficient applications.

For algorithm performance we have two main factors:

- **Time**: We need to know how much time it takes to run an algorithm for our data and how it will grow by data size (or in some cases other factors like number of digits and etc).

- **Space**: our memory is finate so we have to know how much free space we need for this algorithm and like time we need to be able to trace its growth.
    
The following 3 notations are mostly used to represent time complexity of algorithms:

1. **Θ Notation**: The theta notation bounds a functions from above and below, so it defines exact behavior. we can say that we have theta notation when worst case and best case are the same.
    >Θ(g(n)) = {f(n): there exist positive constants c1, c2 and n0 such that 0 <= c1*g(n) <= f(n) <= c2*g(n) for all n >= n0}

2. **Big O Notation**: The Big O notation defines an upper bound of an algorithm. For example Insertion Sort takes linear time in best case and quadratic time in worst case. We can safely say that the time complexity of Insertion sort is *O*(*n^2*).
    >O(g(n)) = { f(n): there exist positive constants c and  n0 such that 0 <= f(n) <= cg(n) for all n >= n0}

3. **Ω Notation**: Ω notation provides an lower bound to algorithm. it shows fastest possible answer for that algorithm.
    >Ω (g(n)) = {f(n): there exist positive constants c and n0 such that 0 <= cg(n) <= f(n) for all n >= n0}.

## Examples

As an example, we can examine the time complexity of the <a href='https://github.com/FreeCodeCamp/wiki/blob/master/Algorithms-Bubble-Sort.md#algorithm-bubble-sort' target='_blank' rel='nofollow'>[bubble sort]</a> algorithm and express it using big-O notation.

#### Bubble Sort:
```javascript
    // Function to implement bubble sort
    void bubble_sort(int array<a href='http://bigocheatsheet.com/' target='_blank' rel='nofollow'>], int n)
    {
        // Here n is the number of elements in array
        int temp;
        for(int i = 0; i < n-1; i++)
        {
            // Last i elements are already in place
            for(int j = 0; j < n-i-1; j++)
            {
                if (array[j] > array[j+1])
                {
                    // swap elements at index j and j+1
                    temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
    }
```
Looking at this code, we can see that in the best case scenario where the array is already sorted, the program will only make _n_ comparisons as no swaps will occur.  
Therefore we can say that the best case time complexity of bubble sort is O(_n_).

Examining the worst case scenario where the array is in reverse order, the first iteration will make _n_ comparisons while the next will have to make _n_ - 1 comparisons and so on until only 1 comparison must be made.  
The big-O notation for this case is therefore _n_ * [(_n_ - 1) / 2] which = 0.5*n*^2 - 0.5*n* = O(_n_^2) as the _n_^2 term dominates the function which allows us to ignore the other term in the function.

We can confirm this analysis using this handy big-O cheat sheet</a> that features the big-O time complexity of many commonly used data structures and algorithms

It is very apparent that while for small use cases this time complexity might be alright, at a large scale bubble sort is simply not a good solution for sorting.  
This is the power of big-O notation: it allows developers to easily see the potential bottlenecks of their application, and take steps to make these more scalable.

For more information on why big-O notation and algorithm analysis is important visit this <a href='https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care' target='_blank' rel='nofollow'>video challenge</a>!

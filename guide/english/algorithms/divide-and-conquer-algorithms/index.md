---
title: Divide and Conquer Algorithms
---
## Divide and Conquer Algorithms


Divide and Conquer |  (Introduction)
Like Greedy and Dynamic Programming, Divide and Conquer is an algorithmic paradigm. A typical Divide and Conquer algorithm solves a problem using following three steps.

1. Divide: Break the given problem into subproblems of same type.
2. Conquer: Recursively solve these subproblems.
3. Combine: Appropriately combine the answers.

Following are some standard algorithms that are Divide and Conquer algorithms.

1) Binary Search is a searching algorithm. In each step, the algorithm compares the input element x with the value of the middle element in array. If the values match, return the index of middle. Otherwise, if x is less than the middle element, then the algorithm recurs for left side of middle element, else recurs for right side of middle element.

2) Quicksort is a sorting algorithm. The algorithm picks a pivot element, rearranges the array elements in such a way that all elements smaller than the picked pivot element move to left side of pivot, and all greater elements move to right side. Finally, the algorithm recursively sorts the subarrays on left and right of pivot element.

3) Merge Sort is also a sorting algorithm. The algorithm divides the array in two halves, recursively sorts them and finally merges the two sorted halves.

4) Closest Pair of Points The problem is to find the closest pair of points in a set of points in x-y plane. The problem can be solved in O(n^2) time by calculating distances of every pair of points and comparing the distances to find the minimum. The Divide and Conquer algorithm solves the problem in O(nLogn) time.

5) Strassen’s Algorithm is an efficient algorithm to multiply two matrices. A simple method to multiply two matrices need 3 nested loops and is O(n^3). Strassen’s algorithm multiplies two matrices in O(n^2.8974) time.

6) Cooley–Tukey Fast Fourier Transform (FFT) algorithm is the most common algorithm for FFT. It is a divide and conquer algorithm which works in O(nlogn) time.


7) The Karatsuba algorithm was the first multiplication algorithm asymptotically faster than the quadratic "grade school" algorithm. It reduces the multiplication of two n-digit numbers to at most to n^1.585(which is approximation of log of 3 in base 2) single digit products. It is therefore faster than the classical algorithm, which requires n^2 single-digit products. 

### Karatsuba algorithm for fast multiplication

Given two binary strings that represent value of two integers, find the product of two strings. For example, if the first bit string is “1100” and second bit string is “1010”, output should be 120.
For simplicity, let the length of two strings be same and be n.

A Naive Approach is to follow the process we study in school. One by one take all bits of second number and multiply it with all bits of first number. Finally add all multiplications. This algorithm takes O(n^2) time.
Using Divide and Conquer, we can multiply two integers in less time complexity. We divide the given numbers in two halves. Let the given numbers be X and Y.
For simplicity let us assume that n is even
  X =  Xl*2n/2 + Xr    [Xl and Xr contain leftmost and rightmost n/2 bits of X]
  Y =  Yl*2n/2 + Yr    [Yl and Yr contain leftmost and rightmost n/2 bits of Y]
The product XY can be written as following.

XY = (Xl*2n/2 + Xr)(Yl*2n/2 + Yr)
   = 2n XlYl + 2n/2(XlYr + XrYl) + XrYr
If we take a look at the above formula, there are four multiplications of size n/2, so we basically divided the problem of size n into for sub-problems of size n/2. But that doesn’t help because solution of recurrence T(n) = 4T(n/2) + O(n) is O(n^2). The tricky part of this algorithm is to change the middle two terms to some other form so that only one extra multiplication would be sufficient. The following is tricky expression for middle two terms.

XlYr + XrYl = (Xl + Xr)(Yl + Yr) - XlYl- XrYr
So the final value of XY becomes

XY = 2n XlYl + 2n/2 * [(Xl + Xr)(Yl + Yr) - XlYl - XrYr] + XrYr
With above trick, the recurrence becomes T(n) = 3T(n/2) + O(n) and solution of this recurrence is O(n1.59).

What if the lengths of input strings are different and are not even? To handle the different length case, we append 0’s in the beginning. To handle odd length, we put floor(n/2) bits in left half and ceil(n/2) bits in right half. So the expression for XY changes to following.

XY = 22ceil(n/2) XlYl + 2ceil(n/2) * [(Xl + Xr)(Yl + Yr) - XlYl - XrYr] + XrYr
The above algorithm is called Karatsuba algorithm and it can be used for any base.


### Divide and Conquer (D & C) vs Dynamic Programming (DP)

Both paradigms (D & C and DP) divide the given problem into subproblems and solve subproblems. How to choose one of them for a given problem? Divide and Conquer should be used when same subproblems are not evaluated many times. Otherwise Dynamic Programming or Memoization should be used.

For example, Binary Search is a Divide and Conquer algorithm, we never evaluate the same subproblems again. On the other hand, for calculating nth Fibonacci number, Dynamic Programming should be preferred.

"""
Problem: The maximum subarray problem is the task of finding the
contiguous subarray within a one-dimensional array of numbers
(containing at least one positive number) which has the largest sum.

Solution:
The recurrence relation that we solve at each step is the following -

Let S[i] = be the max value contigous subsequence till the ith element
of the array.

Then S[i] = max(A[i], A[i] + S[i - 1])
At each step, we have two options
1) We add the ith element to the sum till the i-1th elem
2) We start a new array starting at i

We take a max of both these options and accordingly build up the array.
"""
def max_value_contigous_subsequence(arr):
    A = [arr[0]] + [0] * (len(arr) - 1)
    max_to_here = arr[0]
    for i in range(1, len(arr)):
        A[i] = max(arr[i], arr[i] + A[i-1])
        max_to_here = max(max_to_here, A[i])
    return max_to_here

if __name__ == "__main__":
    x = [-2, -3, 4, -1, -2, 1, 5, -3]
    y = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    z = [-1, 3, -5, 4, 6, -1, 2, -7, 13, -3]
    print map(max_value_contigous_subsequence, [x, y, z])

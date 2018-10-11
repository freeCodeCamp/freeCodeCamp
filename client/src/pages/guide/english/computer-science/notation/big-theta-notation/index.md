---
title: Big Theta Notation
---
## Big Theta Notation

Big Omega tells us the lower bound of the runtime of a function, and Big O tells us the upper bound. Often times, they are different and we can't put a guarantee on the runtime - it will vary between the two bounds and the inputs. But what happens when they're the same? Then we can give a **theta** (Θ) bound - our function will run in that time, no matter what input we give it. In general, we always want to give a theta bound if possible because it is the most accurate and tightest bound. If we can't give a theta bound, the next best thing is the tightest O bound possible. 


Take, for example, a function that searches an array for the value 0:
```python
def containsZero(arr): #assume normal array of length n with no edge cases
  for num x in arr:
    if x == 0:
       return true
  return false
```

1. What's the best case? Well, if the array we give it has 0 as the first value, it will take constant time: Ω (1)
2. What's the worst case? If the array doesn't contain 0, we will have iterated through the whole array: O(n)

We've given it an omega and O bound, so what about theta? We can't give it one! Depending on the array we give it, the runtime will be somewhere in between constant and linear. 

Let's change our code a bit.
```python
def printNums(arr): #assume normal array of length n with no edge cases
  for num x in arr:
    print(x)
```
Can you think of a best case and worst case??
I can't! No matter what array we give it, we have to iterate through every value in the array. So the function will take AT LEAST n time (Ω(n)), but we also know it won't take any longer than n time (O(n)). What does this mean? Our function will take **exactly** n time: Θ(n).

If the bounds are confusing, think about it like this. We have 2 numbers, x and y. We are given that x <= y and that y <= x. If x is less than or equal to y, and y is less than or equal to x, then x has to equal y!

If you're familiar with linked lists, test yourself and think about the runtimes for each of these functions!
1. get
2. remove
3. add 

Things get even more interesting when you consider a doubly linked list!
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation
https://stackoverflow.com/questions/10376740/what-exactly-does-big-%D3%A8-notation-represent
https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/


---
title: Range Method
---
# Range Function
If you do need to iterate over a sequence of numbers, the built-in function range() comes in handy. It generates arithmetic progressions:

#### Example Usage
 ```py
for i in range(5):
    print(i)
 ```
 
 #### Output
 ```
0
1
2
3
4
 ```
 
#### Example with optional additional arguments
The first argument, *start*, is the starting number of the sequence.

The second argument, *stop*, means to generate numbers up to, but not including this number.

The third argument, *step*, is the amount to increment by. In other words, it's the difference between each number in the sequence. It defaults to 1 if step is not specified.

 ```py
for i in range(3, 12, 2):
    print(i)
 ```
 
 #### Output
 ```
3
5
7
9
11
 ```
 
 #### Notes
 In Python 2, there are 2 functions for going through a range of numbers: range() and xrange().
 Out of these functions, xrange() is the "lazy" function, meaning it generates numbers as necessary instead of actually creating
 a list of numbers and iterating through them. range(), on the other hand, makes an entire list of numbers and iterates through
 this list. This makes it a strain on the memory in the case of really long lists.
 
 In Python 3, the range() function mimics xrange() as the "lazy" variant, and xrange() itself has been removed.

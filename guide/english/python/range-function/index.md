---
title: Range Method
---
# Range Function
If you need to iterate over a sequence of numbers, the built-in function range() comes in handy. It generates arithmetic progressions:

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
 ```py
 # A range function call.
range(start, stop, step)
 ```
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

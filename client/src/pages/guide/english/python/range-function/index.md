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
The first argument, *start* includes the number at which to start the progression. 
The second argument, *stop* is the same as in the example above, and the progression stops before this number. 
The third argument, *step* is for when you want to generate numbers, but at a step greater than one.
 ```py
for i in range(3,12,2):
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

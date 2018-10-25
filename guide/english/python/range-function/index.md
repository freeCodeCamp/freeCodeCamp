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

 #### Changes in Python 3
In Python 3, by default the range function will not generate a list of integers when assigned to a variable. Instead, the user must manually convert it to a list.

#### Example usage in Python 3
 ```py
numbers = list(range(1, 10))
print(numbers)
 ```
 
#### Output
 ```
[1, 2, 3, 4, 5, 6, 7, 8, 9]
 ```

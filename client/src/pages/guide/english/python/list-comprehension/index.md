---
title: List Comprehension
---

## List Comprehension

List Comprehension is a way of looping through a list to produce a new list based on some conditions. It can be confusing at first but once you are acclimated to the syntax it is very powerful and quick.

The first step in learning how to use list comprehension is to look at the traditional way of looping through a list. The following is a simple example that returns a new list of even numbers.

```Python
# Example list for demonstration
some_list = [1, 2, 5, 7, 8, 10]

# Empty list that will be populate with a loop
even_list = []

for number in some_list:
  if number % 2 == 0:
    even_list.append(number)

# even_list now equals [2, 8, 10]
```

First a list is created with some numbers. You then create an empty list that will hold your results from the loop. In the loop you check to see if each number is divisible by 2 and if so you add it the the even_list. This took 5 lines of code not including comments and white space which isn't much in this example.

Now for the list comprehension example. 

```Python
# Example list for demonstration
some_list = [1, 2, 5, 7, 8, 10]

# List Comprehension
even_list = [number for number in some_list if number % 2 == 0]

# even_list now equals [2, 8, 10]
```

What the list comprehension does is it adds an element from a list to a new list if some condition is met. This example list comprehension says that for every number (the variable of the for loop) in some_list, if that number is divisible by 2 (the number is even) then return that number to be added to the new list (even_list).

The same list is produced but in this case it only took 2 lines of code. The List Comprehension allows for the 3 lines of the for loop plus the 1 line of creating an empty list to be condensed into a single line. Not only is this much neater but it is much faster in most cases. This example is pretty simple and easy to read so list comprehension is a good choice. There are cases where list comprehension makes readability very bad so you have to weigh your options when choosing to use list comprehension.

Further documentation of this can be seen on the official Python website under data structures:
https://docs.python.org/2.7/tutorial/datastructures.html

Also a good resourse is Python for Beginners: 
http://www.pythonforbeginners.com/basics/list-comprehensions-in-python

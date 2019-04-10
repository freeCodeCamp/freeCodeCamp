---
title: List Comprehension
---

## List Comprehension

List Comprehension is a way of looping through a list to produce a new list based on some conditions. It can be confusing at first but once you are acclimated to the syntax it is very powerful and quick.

The first step in learning how to use list comprehension is to look at the traditional way of looping through a list. The following is a simple example that returns a new list of even numbers.

```python
# Example list for demonstration
some_list = [1, 2, 5, 7, 8, 10]

# Empty list that will be populated with a loop
even_list = []

for number in some_list:
  if number % 2 == 0:
    even_list.append(number)

# even_list now equals [2, 8, 10]
```

First a list is created with some numbers. You then create an empty list that will hold your results from the loop. In the loop you check to see if each number is divisible by 2 and if so you add it the the even_list. This took 5 lines of code not including comments and white space which isn't much in this example.

Now for the list comprehension example. 

```python
# Example list for demonstration
some_list = [1, 2, 5, 7, 8, 10]

# List Comprehension
even_list = [number for number in some_list if number % 2 == 0]

# even_list now equals [2, 8, 10]
```

Another example, with the same two steps:
The following will create a list of numbers that correspond to the numbers in ```my_starting_list``` multiplied by 7.

```py
my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8]
my_new_list = []

for item in my_starting_list:
my_new_list.append(item * 7)
```

When this code is run, the final value of  ```my_new_list```  is: 
```[7, 14, 21, 28, 35, 42, 49, 56]```

A developer using list comprehension could achieve the same result using the following list comprehension, which results in the same  ```my_new_list```.

```py
my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8]

my_new_list = [item * 7 for item in my_starting_list]
```

A simple formula to write in a list comprehension way is:

``` my_list = [{operation with input n} for n in {python iterable}]```

Replace ```{operation with input n}``` with however you want to change the item returned from the iterable. The above example uses ```n * 7``` but the operation can be as simple or as complex as necessary. 

Replace ```{python iterable}``` with any iterable. [Sequence types](https://guide.freecodecamp.org/python/sequence-types) will be most common. A list was used in the above example, but tuples and ranges are also common. 

List comprehension adds an element from an existing list to a new list if some condition is met. It is neater, but is also much faster in most cases. In some cases, list comprehension may hinder readability, so the devloper must weigh their options when choosing to use list comprehension.

## Examples of List Comprehension with Conditionals

The flow of control in list comprehensions can be controlled using conditionals. For example:

```py
only_even_list = [i for i in range(13) if i%2==0]
```

This is equivalent to the following loop:

```py
only_even_list = list()
for i in range(13):
  if i%2 == 0:
    only_even_list.append(i)
```

List comprehension can also contain nested if conditions. Consider the following loop:
```py
divisible = list()
for i in range(50):
  if i%2 == 0:
    if i%3 == 0:
      divisible.append(i)
```
Using list comprehension this can be written as:
```py
divisible = [i for i in range(50) if i%2==0 if i%3==0]
```

If-Else statement can also be used along with list comprehension.
```py
list_1 = [i if i%2==0 else i*-1 for i in range(10)]
```

#### More Information:
[Python Data Structures - Lists](https://docs.python.org/2.7/tutorial/datastructures.html)

[Python For Loops](https://guide.freecodecamp.org/python/for-loop-statements)

[Python Lists](https://guide.freecodecamp.org/python/learn-about-python-lists)

[Python For Beginners - List Comprehensions](http://www.pythonforbeginners.com/basics/list-comprehensions-in-python)

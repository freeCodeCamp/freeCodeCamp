---
title: Python List Comprehensions
---
## List Comprehensions

List comprehensions are a simple way to create and populate a list in python. 

Here is an example for-loop that can be replaced with a list comprehension. This code will create a list of numbers that correspond to the numbers in ```my_starting_list``` multiplied by 7.

```
my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8]
my_new_list = []

for item in my_starting_list:
  my_new_list.append(item * 7)
```

When this code is run, the final value of my_new_list is: 
```[7, 14, 21, 28, 35, 42, 49, 56]```

A developer using list comprehensions could achieve the same result using the following list comprehension:

```
my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8]

my_new_list = [item * 7 for item in my_starting_list]
```

When this code is run, the value of my_new_list will be the same as above:
```[7, 14, 21, 28, 35, 42, 49, 56]```

Follow this form to create a list comprehension:

``` my_list = [{operation with input n} for n in {python iterable}]```

Replace ```{operation with input n}``` with however you want to change the item returned from the iterable. The above example uses ```n * 7``` but the operation can be as simple or as complex as necessary. 

Replace ```{python iterable}``` with any iterable. [Sequence types](https://guide.freecodecamp.org/python/sequence-types) will be most common. A list was used in the above example, but tuples and ranges are also common. 

## List Comprehensions with Conditionals

The flow of control in list comprehensions can be controlled using conditionals. For exmaple:

```
only_even_list = [i for i in range(13) if i%2==0]
```

This is equivalent to the following loop:

```
only_even_list = list()
for i in range(13):
    if i%2 == 0:
        only_even_list.append(i)
```

List comprehension can also contain nested if conditions. Consider the following loop:
```
divisible = list()
for i in range(50):
    if i%2 == 0:
        if i%3 == 0:
            divisible.append(i)
```
using list comprehension this can be written as:
```
divisible = [i for i in range(50) if i%2==0 if i%3==0]
```

If-Else statement can also be used along with list comprehension.
```
list_1 = [i if i%2==0 else i*-1 for i in range(10)]
```

#### More Information:
[Python For Loops](https://guide.freecodecamp.org/python/for-loop-statements)

[Python Lists](https://guide.freecodecamp.org/python/learn-about-python-lists)


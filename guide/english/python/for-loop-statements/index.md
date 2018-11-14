---
title: For Loop Statements
---
## For Loop Statements

Python utilizes a for loop to iterate over a list of elements. Unlike C or Java, which use the for loop to change a value in steps and access something such as an array using that value.

For loops iterate over collection based data structures like [lists](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/guide/english/python/lists), tuples, and dictionaries.

The basic syntax is:

```python
for value in list_of_values:
  # use value inside this block
```

In general, you can use anything as the iterator value, where entries of the iterable can be assigned to. E.g. you can unpack tuples from a list of tuples:

```python
list_of_tuples = [(1,2), (3,4)]

for a, b in list_of_tuples:
  print("a:", a, "b:", b)
```
Output:

```python
a: 1 b: 2
a: 3 b: 4
```


On the other hand, you can loop over anything that is iterable. You can call a function or use a list literal.

```python
for person in load_persons():
  print("The name is:", person.name)
```

```python
for character in ["P", "y", "t", "h", "o", "n"]:
  print("Give me a '{}'!".format(character))
```

Output:

```python
Give me a 'P'!
Give me a 'y'!
Give me a 't'!
Give me a 'h'!
Give me a 'o'!
Give me a 'n'!
```

Some ways in which For loops are used: 

**Iterate over the range() function**

```python
for i in range(10):
    print(i)
```
Rather than being a function, range is actually an immutable sequence type.
The output will contain results from lower bound i.e 0 to the upper bound i.e 10 but excluding 10. By default the lower bound or the starting index is set to zero.

Output:

```
>
0
1
2
3
4
5
6
7
8
9
>
```
Additionally, one can specify the lower bound of the sequence and even the step of the sequence by adding a second and a third parameter. 

```python
for i in range(4,10,2): #From 4 to 9 using a step of two
    print(i)
```
Output:

```
>
4
6
8
>
```

**xrange() function**

For the most part, xrange and range are the exact same in terms of functionality. They both provide a way to generate a list of integers for you to use, however you please. The only difference is that range returns a Python list object and xrange returns an xrange object. It means that xrange doesn't actually generate a static list at run-time like range does. It creates the values as you need them with a special technique called yielding. This technique is used with a type of object known as generators.

One more thing to add. In Python 3.x, the xrange function does not exist anymore. The range function now does what xrange does in Python 2.x

**Iterate over values in a list or tuple**

```python
A = ["hello", 1, 65, "thank you", [2, 3]]
for value in A:
    print(value)
```

Output:

```
>
hello
1
65
thank you
[2, 3]
>
```

**Iterate over keys in a dictionary (aka hashmap)**

```python
fruits_to_colors = {"apple": "#ff0000",
                    "lemon": "#ffff00",
                    "orange": "#ffa500"}

for key in fruits_to_colors:
    print(key, fruits_to_colors[key])
```

Output:

```
>
apple #ff0000
lemon #ffff00
orange #ffa500
>
```
**Iterate over two lists of same size in a single loop with the zip() function**

```python 
A = ["a", "b", "c"]
B = ["a", "d", "e"]

for a, b in zip(A, B):
  print a, b, a == b
  
```

Output:
```
>
a a True
b d False
c e False
>
```


**Iterate over a list and get the corresponding index with the enumerate() function**

```python
A = ["this", "is", "something", "fun"]

for index,word in enumerate(A):
    print(index, word)
```

Output:

```
>
0 this
1 is
2 something
3 fun
>
```

A common use case is iterating over a dictionary:

```python
for name, phonenumber in contacts.items():
  print(name, "is reachable under", phonenumber)
```

If you absolutely need to access the current index of your iteration, do **NOT** use `range(len(iterable))`! This is an extremely bad practice and will get you plenty of chuckles from senior Python developers. Use the built in function `enumerate()` instead:

```python
for index, item in enumerate(shopping_basket):
  print("Item", index, "is a", item)
```
**for/else statements**
Python permits you to use else with for loops, the else case is executed when none of the conditions with in the loop body was satisfied. To use the else we have to make use of `break` statement so that we can break out of the loop on a satsfied condition. If we do not break out then the else part will be executed.

```python
week_days = ['Monday','Tuesday','Wednesday','Thursday','Friday']
today = 'Saturday'
for day in week_days:
  if day == today:
    print('today is a week day')
    break
else:
  print('today is not a week day')
```
In the above case the output will be `today is not a week day` since the break within the loop will never be executed.

**Iterate over a list using inline loop function**

We could also iterate inline using python, for example if we need to uppercase all the words in a list from a list we could simply do the following:

```python
A = ["this", "is", "awesome", "shinning", "star"]

UPPERCASE = [word.upper() for word in A]
print (UPPERCASE)
```

Output:
```
>
['THIS', 'IS', 'AWESOME', 'SHINNING', 'STAR']
>
```

#### More Information:

- <a href='https://docs.python.org/2.7/tutorial/controlflow.html#for-statements' target='_blank' rel='nofollow'>Python2 for loop documentation</a>

- <a href='https://docs.python.org/3/tutorial/controlflow.html#for-statements' target='_blank' rel='nofollow'>Python3 for loop documentation</a>



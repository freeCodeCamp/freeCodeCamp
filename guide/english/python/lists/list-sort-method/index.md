---
title: List Sort Method
---
## List Sort Method

Python lists have a built-in ```sort()``` method that modifies the list in-place and a ```sorted()``` built-in function that builds a new sorted list from an iterable.

list.sort(key=…,  reverse=[True/False])

### Parameters

There are two optional parameters to this method
<br><br>
<i>key</i> - The input value for the key parameter should be a function that takes a single argument	and returns a value used for comparisons to sort the items in the list.
<br><br>
<i>reverse=[value]</i>
<br>
<i>value=True</i> : Sorts the items in the list in descending order.
<br>
<i>value=False</i> : Sorts the items in the list in ascending order. This is considered the default value.
<br><br>
Please note that the `sort()` method does not return any value. It modifies the original list.

### Example Usage

```py
a = [4, 2, 5, 3, 1]
a.sort()
print a # prints [1, 2, 3, 4, 5]

b = ['free', 'code', 'camp']
b.sort()
print b # prints ['camp', 'code', 'free']
```

Consider an example with the <b>reverse</b> parameter:

```py
a = [4, 2, 5, 3, 1]

#Sorts the list in descending order
a.sort(reverse=True)

print a # prints [5, 4, 3, 2, 1]
```

If you want to sort the list based on your own function, then use the <b>key</b> parameter. 
<br>Here is an example to sort the strings in the list by length, in ascending order:

```py
a = ["hello", "hi", "hey"]

#The built-in len() function is given as an input to key parameter to sort the strings by length
a.sort(key = len) 

print a # prints ['hi', 'hey', 'hello']
```

Here is another example, where the list contains tuples(name, age). <br>The usage below shows how to sort the list by age, in ascending order:

```py
#Consider the second element in the tuple for sorting
>>> def compareByAge(element):
...     return element[1]

b = [('Adam', 20), ('Rahman', 30), ('Rahul', 25)]

#Sort the list by age
b.sort(key = compareByAge)

#Output
print b # prints [('Adam', 20), ('Rahul', 25), ('Rahman', 30)]
```
You can also use <b>Lambda expression</b> instead of full function to define key. <br>Here is example of sorting strings based on last two characters:
```py
# Our strings can contain any characters and we want to sort them based on last two of them
strings = ["apple_05", "orange_01", "strawberry_03", "pear_04", "banana_02"]

# Take just last two characters as key value
strings.sort(key = lambda x: x[-2:])

# Output
print strings    # Prints ['orange_01', 'banana_02', 'strawberry_03', 'pear_04', 'apple_05']
```

### Sorting Basics

A simple ascending sort is very easy -- just call the sorted() function. It returns a new sorted list:

```python
>>> sorted([5, 2, 3, 1, 4])
[1, 2, 3, 4, 5]
```
You can also use the list.sort() method of a list. It modifies the list in-place (and returns None to avoid confusion). Usually it's less convenient than sorted() - but if you don't need the original list, it's slightly more efficient:

```python
>>> a = [5, 2, 3, 1, 4]
>>> a.sort()
>>> a
[1, 2, 3, 4, 5]
```
Another difference is that the list.sort() method is only defined for lists. In contrast, the sorted() function accepts any iterable:

```python
>>> sorted({1: 'D', 2: 'B', 3: 'B', 4: 'E', 5: 'A'})
[1, 2, 3, 4, 5]
```
#### Implementation Details
 
If one wants to know details about the implementation of the sort function, the algorithm, and the time complexity, etc, refer <a href='http://svn.python.org/projects/python/trunk/Objects/listsort.txt' target='_blank' rel='nofollow'>here</a>. In brief, sort function uses TimSort algorithm, which according to Python Developers, is :-  
>an adaptive, stable, natural mergesort, modestly called
timsort (hey, I earned it <wink>).  It has supernatural performance on many
kinds of partially ordered arrays (less than lg(N!) comparisons needed, and
as few as N-1), yet as fast as Python's previous highly tuned samplesort
hybrid on random arrays.

#### sort() Parameters
By default, sort() doesn't require any extra parameters. However, it has two optional parameters:
 * reverse - If true, the sorted list is reversed (or sorted in Descending order).
 * key - A function that serves as a key for the sort comparison.

#### More Information:
More information about ```sort()``` can be found <a href='https://docs.python.org/3/library/functions.html#sorted' target='_blank' rel='nofollow'>here</a>.

More information about sort() and sorted() can be found <a href='https://docs.python.org/3.6/tutorial/datastructures.html' target='_blank' rel='nofollow'>here</a>.

More information about sort() and sorted() can be found <a href='https://docs.python.org/3.6/tutorial/datastructures.html' target='_blank' rel='nofollow'>here</a>. 

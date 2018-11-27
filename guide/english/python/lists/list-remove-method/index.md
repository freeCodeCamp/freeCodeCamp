---
title: List Remove Method
---
## List Remove Method

The `remove()` method removes the argument given to it from the list.

#### Example Usage

```py
words = ["I", "love", "Python"]
words.remove("I")
print(words)
```
#### Output

```py
["love","Python"]
```

Note that it returns an error if the element to be removed is not found in the list as illustrated in the example below.

```py
kiss = ["keep", "it", "simple", "stupid"]
kiss.remove("complex")
print(kiss)
```

#### Output
```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: list.remove(x): x not in list
```
If there are duplicate elements in the list, the `remove()` function removes the first occurrence of the element. 
```py
numbers=[1,2,3,4,5,1,6]
numbers.remove(1)
print(numbers)
```
#### Output
```py
[2,3,4,5,1,6]
```


#### More Information:
More information about `remove()` can be found <a href='https://docs.python.org/3.6/tutorial/datastructures.html' target='_blank' rel='nofollow'>here</a>



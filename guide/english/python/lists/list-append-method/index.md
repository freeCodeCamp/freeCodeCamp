---
title: List Append Method
---
## List Append Method

There are many methods for lists, you can explore all of them by typing `help(list)` in your python console.
One of them is the append function which, as the name says appends the argument given list.

#### Example Usage

```py
words = ["I", "love", "Python"]
words.append("very much")
print(words)
```
#### Output
```
["I", "love", "Python", "very much"]
```
 As you might have noticed the element `"very much"` is appended to the list.

#### More Information:

The official documentation for `append()` can be found <a href='https://docs.python.org/3.6/tutorial/datastructures.html' target='_blank' rel='nofollow'>here</a>

#### Additional concepts on list.append()
list.append() function is inbuild function and add element in the last index of list always.We cannot add element in between list,to do this we need to use list.insert(position,item).
#### EXAMPLE
```
python
words=[]
for i in range(0,5):
  f=input()
  words.append(f)
print(words)
 #it will add 5 words in list
 ```
#### OUTPUT
```
>
a
b
c
d
e
['a','b','c','d','e']
>
'''

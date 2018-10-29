---
title: Dictionaries
---
## Dictionaries

Let's assume we have a homogeneous list.  We want to count how many times each item occurs in the list.  How can we do that, without using Python's built-in methods such as count or Counter from the Python collections module?  A Google search for "How to count the occurrences of an item in a list?" will return Stack Overflow answers pointing you to the count method and the collections module, but for learning purposes let's try to solve the problem without using these tools.

Here's the list we'll be working with:

```python
ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"]
```

This code, using nested for loops, produces the right answer, storing the answer in the list "count":
```python
count = []
for flavor in ice_cream:
  found = False
  for entry in count:
    if entry[0] == flavor:
      entry[1] += 1
      found = True
  if not found:
      count.append([flavor, 1])

# Print.
for (entry, total) in count:
  print (entry, total)
```

Although this code gives the correct answer, there are two things wrong with it.  First, it is complex.  The more nested loops a program contains, the harder it is to understand, fix, and extend.  Moreover, it is inefficient.  This may not be a problem in this small example, but imagine a list with thousands or millions of items.  Scanning the list of entries each time we make an observation would take a very, very long time, no matter how fast the computer.  This is a topic addressed more fully when studying topics such as big O notation and comparing searching and sorting algorithms.

A better answer is to use another data structure known as a **dictionary** or **map**.  This data structure is an *unordered, mutable* collection of *key / value* pairs.  Think of a dictionary like a phonebook, where the key is the person's name, and the value is the phone number.  Keys in a dictionary form a set, meaning they can only appear once, and they cannot be changed (they are immutable), although the values associated with a key can be changed.  

Dictionaries are created by putting key/value pairs inside of braces.  To get the value associated with a key, you put the key in square brackets.  

Here are some code examples:

```python
ice_cream = {'chocolate' : 3, 'strawberry' : 1}
print (ice_cream)
>> {'chocolate' : 3, 'strawberry' : 1}
print (ice_cream['strawberry'])
>> 1
```

To test whether a key is in a dictionary, use k in d:
```python
ice_cream = {'chocolate' : 3, 'strawberry' : 1}
if 'chocolate' in ice_cream:
    print ('chocolate is in the list')
...

del ice_cream['chocolate']
if 'chocolate' in ice_cream:
    print ('oops: why is chocolate still there?')
```

**Updating and Membership**
To update dictionaries, just assign a value to a key. If the key is already in the dictionary, this changes the value associated with it.

If the key was not present, it is added, along with the value:

```python
ice_cream = {}
ice_cream['chocolate'] = 33
ice_cream['vanilla'] = 999 # oops
print (ice_cream)
>> {'chocolate' : 33, vanilla' : 999}
ice_cream['vanilla'] = 9
print (ice_cream)
>> {'chocolate' : 33, vanilla' : 9}
```
Use *del d[k]*, to remove an entry from a dictionary, where *d* is the dictionary name and *k* is the key being removed. Only entries that are present can be removed; trying to remove one that isn’t there causes an error:

```python
ice_cream = {'chocolate' : 33, vanilla' : 9}
del ice_cream['chocolate']
print (ice_cream)
>> {'vanilla' : 9}
del ice_cream['strawberry']
>> Traceback (most recent call last):
   File "<stdin>", line 5, in <module>
   KeyError: 'strawberry'
```

**Loops**
Since dictionaries are collections (along with lists, tuples, and sets), we’re going to want to loop over their
contents. We do this with a for loop, which assigns each of the keys in the dictionary to the loop variable in turn:

```python
ice_cream = {'chocolate' : 183, 
             'vanilla' : 71,
             'strawberry' : 63, 
             'banana', 1}
for flavor in ice_cream:
  print (flavor, ice_cream[flavor])

>> 'banana' 1
   'vanilla' 71
   'chocolate' 183
   'strawberry' 63
```

As with set elements, Python loops over the entries in the dictionary in an arbitrary order. There is no guarantee that they will be seen alphabetically or in the order, they were added to the dictionary. Notice, by the way, that looping over dictionaries is slightly different from looping over lists. When Python loops over a list, the values in the list are assigned to the loop variable. When it loops over a dictionary, on the other hand, it assigns the keys. Python’s designers chose to do this because:
- looping over the indices of a list isn’t very interesting, since the
program would always get the sequence 0, 1, 2, ...; and
- it’s a lot easier to go from a dictionary key to the associated value
than it is to take the value and find the associated key.

**Dictionary Methods**
Dictionaries are objects, just like lists, tuples and sets.  A few common dictionary methods are:
- *d.clear()* - clear a dictionary
- *d.get(x, 99)* - Returns the value associated with a key, or a default value if the key is not present.
- *d.keys()* - return keys
- *d.items()* - return list of key, value pairs
- *d.values()* - return values as a list, values may not be unique
- *d.update()* - update the dictionary with the contents of another

One common use of items is to loop over the keys and values in a dictionary together:
for (key, value) in dictionary.items():
...do something with the key and value...

This is inefficient for large dictionaries since items() actually constructs a list of (key, value) pairs. A similar method called *iteritems()* hands these pairs back one by one on demand:
for (key, value) in dictionary.iteritems():
...do something with the key and value...


Let's go back to the original example - how do we count the number of items in the ice_cream list using a dictionary?

```python
# Count all the flavors.
ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"]

count = {}
for flavor in ice_cream:
  if flavor in count:
    count[flavor] = count[flavor] + 1
  else:
    count[flavor] = 1

# Print.
for b in count:
  print (b, count[b])
```
To do this, we create a dictionary that is initially empty. Each time we loop through the ice_cream list, we check
to see whether that flavor is already in the count dictionary. If it is, we add one to its count.
If it isn’t, we add the name to the dictionary with the value 1.

We can shorten this program a bit using the method *dict.get()*. This returns either the value associated with a key or some default value that we provide. In this case, we get either the number of times we’ve already seen a flavor or zero, add one to whichever value the method returns, and store that back in the dictionary:

```python
# Count all the flavors.
count = {}
for flavor in ice_cream:
  count[flavor] = count.get(flavor, 0) + 1

# Print.
keys = count.keys()
keys.sort()
for b in keys:
  print (b, count[b])

# Print.
for key in sorted(count):
  print (key, count[key])
```

Note that we're using two separate ways to print the key and the value: one uses Python's sorted method, and the other does not.  

If we wanted to print the flavors in order of frequency, we need to **invert the dictionary**.  This means we need to use the values as keys, and the keys as values.  Since there is no guarantee that the values are unique, we need to take steps to avoid *collisions*. 

The solution is to use some sort of collection, such as a list, to store the inverted dictionary’s values. If we go this route, the inverse of the dictionary shown earlier would be {1:[’a’,’b’,’c’]}. Here’s a program to do what we want:

```python
ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"]

# Count all the flavors.
count = {}
for flavor in ice_cream:
  count[flavor] = count.get(flavor, 0) + 1

# Invert the dictionary.
freq = {}
for (flavor, times) in count.items():
  if times in freq:
    freq[times].append(flavor)
  else:
    freq[times] = [flavor]
  
# Print.
for key in freq:
  for flavor in sorted(freq[key]):
    print (key,":", " ", flavor)
```


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->



---
title: Python defaultdict
---
## Python defaultdict

Dictionary is one of the most used data structures in Python. 
A dictionary is an unordered collection of items and we usually have keys and values stored in a dictionary.
Let us look at a few examples for how the dictionary is usually used. 

```python
# dictionary declaration 1
dict1 = dict()

# dictionary declaration 2
dict2 = {}

# Add items to the dictionary
# The syntax to add and retrieve items is same for either of the two objects we defined above. 
key = "X"
value = "Y"
dict1[key] = value

# The dictionary doesn't have any specific data-type. 
# So, the values can be pretty diverse. 
dict1[key] = dict2
```

Let's now look at some retrieval ways. 

```python
# Since "X" exists in our dictionary, this will retrieve the value
value = dict1[key]

# This key doesn't exist in the dictionary. 
# So, we will get a `KeyError`
value = dict1["random"]
```

### Avoiding KeyError: Use .get function

In case the given key does not exist in the dictionary, Python will throw a `KeyError`. 
There is a simple workaround for this. Let's look at how we can avoid `KeyError` using the 
in-built `.get` function for dictionaries. 

```python
dict_ = {}

# Some random key
random_key = "random"

# The most basic way of doing this is to check if the key 
# exists in the dictionary or not and only retrieve if the 
# key exists. Otherwise not. 
if random_key in dict_:
  print(dict_[random_key])
else:
  print("Key = {} doesn't exist in the dictionary".format(dict_))
```

A lot of times we are ok getting a default value when the key doesn't exist. For e.g. when 
building a counter. There is a better way to get default values from the dictionary in case of 
missing keys rather than relying on standard `if-else`. 

```python

# Let's say we want to build a frequency counter for items in the following array
arr = [1,2,3,1,2,3,4,1,2,1,4,1,2,3,1]

freq = {}

for item in arr:
  # Fetch a value of 0 in case the key doesn't exist. Otherwise, fetch the stored value
  freq[item] = freq.get(item, 0) + 1
```

So, the `get(<key>, <defaultval>)` is a handy operation for retrieving the default value for any given key from the dictionary.
The problem with this method comes when we want to deal with mutable data structures as values e.g. `list` or `set`. 

```python
dict_ = {}

# Some random key
random_key = "random"

dict_[random_key] = dict_.get(random_key, []).append("Hello World!")
print(dict_) # {'random': None}

dict_ = {}
dict_[random_key] = dict_.get(random_key, set()).add("Hello World!")
print(dict_) # {'random': None}
```

Did you see the problem?

The new `set` or the `list` doesn't get assigned to the dictionary's key. We should assign a new `list` or a `set`
to the key in case of missing value and then `append` or `add` respectively. Ley's look at an example for this. 

```python
dict_ = {}
dict_[random_key] = dict_.get(random_key, set())
dict_[random_key].add("Hello World!")
print(dict_) # {'random': set(['Hello World!'])}. Yay!
```

### Avoiding KeyError: Use defaultdict

This works most of the times. However, there is a better way to do this. A more `pythonic` way.  The `defaultdict` is a subclass of the built-in dict class.
The `defaultdict` simply assigns the default value that we specify in case of a missing key. So, the two steps:

```python
dict_[random_key] = dict_.get(random_key, set())
dict_[random_key].add("Hello World!")
```

can now be combined into one single step. For e.g.

```python

from collections import defaultdict

# Yet another random key
random_key = "random_key"

# list defaultdict
list_dict_ = defaultdict(list)

# set defaultdict
set_dict_ = defaultdict(set)

# integer defaultdict
int_dict_ = defaultdict(int)

list_dict_[random_key].append("Hello World!")
set_dict_[random_key].add("Hello World!")
int_dict_[random_key] += 1

"""
  defaultdict(<class 'list'>, {'random_key': ['Hello World!']}) 
  defaultdict(<class 'set'>, {'random_key': {'Hello World!'}}) 
  defaultdict(<class 'int'>, {'random_key': 1})
"""
print(list_dict_, set_dict_, int_dict_)
```

---
<a href='https://docs.python.org/2/library/collections.html' target='_blank' rel='nofollow'>Official Docs</a>

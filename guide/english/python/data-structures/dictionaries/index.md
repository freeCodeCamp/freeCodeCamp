---
title: The Python Dict
---

A Dictionary (a.k.a "dict") in python is a built-in datatype that can be used to store **`key-value`** pairs. This allows you to treat a **`dict`** like it's a *database* to store and organize data.  
  
The special thing about dictionaries is the way they are implemented. It's similar to how a filing cabinet work. By just specifying the **key** which is like a book title, the python interpreter can just go to the location of the key and checks for the content (**value**) of that key.

Dictionaries can use almost any datatypes, like strings, integers etc, as the key of dictionaries. However, values that are not hashable values which is *lists*, *dictionaries* or other mutable types (that are compared by value rather than by object identity) may not be used as keys. 

Numeric types used for keys obey the normal rules for numeric comparison. For example if two numbers compare equal (such as `1` and `1.0`) then they can be used interchangeably to index the same dictionary entry. 
(Note however, that since computers store floating-point numbers as approximations it is usually unwise to use them as dictionary keys.)  

A important requirement of a dictionary is that the keys *must* be *unique*, which mean you can never have a duplicate key in your dictionary.  

## Creating a Empty Dictionary 

To create an empty dictionary just use a pair of braces:  
```python
    >>> teams = {} # Creates a empty dictionary
    >>> type(teams)
    >>> <class 'dict'>
```  
## Creating a Non-Empty Dictionary 

To create a non-empty dictionary with some initial values, place a comma-seperated list of key-value pairs:  
```python
    >>> teams = {'barcelona': 1875, 'chelsea': 1910}
    >>> teams
    {'barcelona': 1875, 'chelsea': 1910}
``` 
## Alternative Ways To Create a Dictionary

You could create a dictionary by using the **`dict()`** method:
```python
    >>> players = dict( [('messi','argentina'), ('ronaldo','portugal'), ('kaka','brazil')] ) # sequence of key-value pair is passed  
    >>> players
    {'ronaldo': 'portugal', 'kaka': 'brazil', 'messi': 'argentina'}
    >>> 
    >>> # If keys are simple strings, it's quite easier to specify pairs using keyword arguments
    ...
    >>> dict( totti = 38, zidane = 43 )
    {'zidane': 43, 'totti': 38}
``` 

Dict comprehensions can be used as well to create dictionaries from arbitrary key and value expressions:  
```python
    >>> {x: x**2 for x in (2, 4, 6)}
    {2: 4, 4: 16, 6: 36}
```

## Adding New Key-Vaule Pair to Existing Dictionary

```python
    >>> teams['santos'] = 1787
    >>> teams
    {'chelsea': 1910, 'barcelona': 1875, 'santos': 1787} # Notice the order - Dictionaries are unordered !
    >>> # extracting value - Just provide the key
    ...
    >>> teams['barcelona']
    1875
```  
## Deleting a Key-Value Pair From a Dictionary

**`del`** operator is used to delete a key-value pair from the dict. In scenarios where a key that's already in use is again used to store values, the old value associated with that key is completely lost. Also, keep in mind that it's an error to extract the value using an non-existent key.
```python
    >>> del teams['santos']
    >>> teams
    {'chelsea': 1910, 'barcelona': 1875}
```  
## Replacing Value of a Key in a Dictionary 

```python
    >>> teams['chelsea'] = 2017 # overwriting    
    >>> teams
    {'chelsea': 2017, 'barcelona': 1875}
```
## Searching for Existing Keys in a Dictionary

The **`in`** keyword can be used to check whether a key exist in the dict or not:  

```python
    >>> 'sanots' in teams
    False    
    >>> 'barcelona' in teams
    True
    >>> 'chelsea' not in teams
    False
```  
## Getting All of the Keys or Values In the Dictionary

**`keys`** is a built-in *method* that can be used to get the keys of a given dictionary. To extract the keys present in a dict as lists:  
```python
    >>> club_names = list(teams.keys())    
    >>> club_names
    ['chelsea', 'barcelona']
```  
**`values`** is a built-in *method* that can be used to get the values of a given dictionary. To extract the values present in a dict as lists:  
```python
    >>> club_names = list(teams.values())    
    >>> club_names
    [1910, 1875]
```  
  
## Looping in Dictionary  
To simply loop over the keys in the dictionary, rather than the keys and values:
```python
    >>> d = {'x': 1, 'y': 2, 'z': 3} 
    >>> for key in d:
    ...     print(key) # do something
    ...
    x
    y
    z
```
**Looping in Dictionary for Python Version 2**

To loop over both keys and values you can use the following: 
```python
    >>> for key, item in d.iteritems():
    ...     print items
    ...
    1
    2
    3
```
**Looping in Dictionary for Python Version 3**

Use **`items()`** instead of **iteeritems()**: 
```python
    >>> for key, item in d.items():
    ...     print(key, items)
    ...
    x 1
    y 2
    z 3
```

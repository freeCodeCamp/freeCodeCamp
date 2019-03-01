---
title: Random
---
## Random

Using ``random`` library allows to randomize integers and lists.


#### Randomize integers between range of 'a' and 'b':

Simply replace a and b variables. This will print a random number between 1 and 10.
```python
import random
a = 1
b = 10
print(random.randint(a,b))
 ```
or just use the numbers instead of variables:
```python
import random
print(random.randint(1,10))
 ```

#### Randomize items in a list

Using ``choice()`` fuction to random select a list item. These can be a mix of different types, such as integers, booleans and strings. This will print random item from the ``list``.
```python
import random
list = ["hello", 2, False, "world", 1337]
print(random.choice(list))
```
More about random library for Python 3 at <a href='https://docs.python.org/3/library/random.html'>python docs.</a>

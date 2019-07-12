---
title: Itertools
---

Itertools is a python module of functions that return generators, objects that only function when iterated over. 
Some examples of itertool functions include but not limited to: chain(), imap(), product(), and compress().

### Iterators terminating on the shortest input sequence:

#### chain()

The `chain()` function takes several iterators as arguments and returns a single iterator that produces the contents of all of them as though they came from one sequence.

```py
import itertools
list(itertools.chain([1, 2], [3, 4]))

# Output
# [1, 2, 3, 4]
```

#### islice()

The `islice()` function returns an iterator which returns selected items from the input iterator, by index. It takes the same arguments as the slice operator for lists: start, stop, and step. Start and stop are optional.

```py
import itertools
list(itertools.islice(count(), 5))

# Output
# [0,1, 2, 3, 4]
```

#### izip()

`izip()` returns an iterator that combines the elements of several iterators into tuples. It works like the built-in function `zip()`, except that it returns an iterator instead of a list.

```py
import itertools
list(izip([1, 2, 3], ['a', 'b', 'c']))

# Output
# [(1, 'a'),(2, 'b'),(3, 'c')]
```
### compress()

It make an iterator that filters elements from data returning only those that have a corresponding element in selectors that evaluates to True. Stops when either the data or selectors iterables has been exhausted.

```py
import itertools
itertools.compress('ABCDEF', [1,0,1,0,1,1]) 

# Output
# A C E F
```

### Combinatoric iterators

#### product()

`product()` returns a Cartesian product, equivalent to a nested for-loop. In comparison, the usual `zip()` function, which returns the convolution.

```py
from itertools import product
list(product([1,2,3],[3,4]))

# Output
# [(1, 3), (1, 4), (2, 3), (2, 4), (3, 3), (3, 4)]

A = [[1,2,3],[3,4,5]]
list(product(*A))

# Output
# [(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5), (3, 3), (3, 4), (3, 5)]

B = [[1,2,3],[3,4,5],[7,8]]
list(product(*B))

# Output
# [(1, 3, 7), (1, 3, 8), (1, 4, 7), (1, 4, 8), (1, 5, 7), (1, 5, 8), (2, 3, 7), (2, 3, 8), (2, 4, 7), (2, 4, 8), (2, 5, 7), (2, 5, 8), (3, 3, 7), (3, 3, 8), (3, 4, 7), (3, 4, 8), (3, 5, 7), (3, 5, 8)]
```

#### More Information
- [Python Itertools Docs](https://docs.python.org/3/library/itertools.html)
- [Hackerrank](https://www.hackerrank.com/challenges/itertools-product/problem)


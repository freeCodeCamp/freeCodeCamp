---
title: Itertools
---

Itertools is a python module of functions that return generators, objects that only function when iterated over. 
Some examples of itertool functions include but not limited to: chain(), imap(), product(), and compress().


### chain()

The chain() function takes several iterators as arguments and returns a single iterator that produces the contents of all of them as though they came from one sequence.

```py
import itertools
list(itertools.chain([1, 2], [3, 4]))

# Output
# [1, 2, 3, 4]
```


### islice()

The islice() function returns an iterator which returns selected items from the input iterator, by index. It takes the same arguments as the slice operator for lists: start, stop, and step. Start and stop are optional.

```py
import itertools
list(itertools.islice(count(), 5))

# Output
# [0,1, 2, 3, 4]
```

### izip()

izip() returns an iterator that combines the elements of several iterators into tuples. It works like the built-in function zip(), except that it returns an iterator instead of a list.

```py
import itertools
list(izip([1, 2, 3], ['a', 'b', 'c']))

# Output
# [(1, 'a'),(2, 'b'),(3, 'c')]
```

Combinatoric iterators:

Iterator	                                           Arguments	                                 Results
product()	                                            p, q, … [repeat=1]	                       cartesian product, equivalent to a nested                                                                                                  for-loop
permutations()	                                      p[, r]	                                   r-length tuples, all possible orderings,                                                                                                  no repeated elements
combinations()	                                      p, r	                                     r-length tuples, in sorted order, no                                                                                                      repeated elements
combinations_with_replacement()	                      p, r	                                     r-length tuples, in sorted order, with                                                                                                    repeated elements
product('ABCD', repeat=2)	 	                                                                     AA AB AC AD BA BB BC BD CA CB CC CD DA DB                                                                                                  DC DD
permutations('ABCD', 2)	 	                                                                       AB AC AD BA BC BD CA CB CD DA DB DC

combinations('ABCD', 2)	 	                                                                       AB AC AD BC BD CD

combinations_with_replacement('ABCD', 2)	 	                                                     AA AB AC AD BB BC BD CC CD DD


Source:https://docs.python.org/3/library/itertools.html
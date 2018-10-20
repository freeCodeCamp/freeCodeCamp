---
title: Generators
---
## Generators
Generators are a special type of function that allows you to return values without ending a function. It does this by using the `yield` keyword. Similar to `return`, the `yield` expression will return a value to the caller. The key difference between the two is that `yield` will suspend the function, allowing for more values to be returned in the future.

Generators are iterable so they can be used cleanly with for loops or anything else that iterates.
```python
def my_generator():
    yield 'hello'
    yield 'world'
    yield '!'

for item in my_generator():
    print(item)

# output:
# hello
# world
# !
```

Like other iterators, generators can be passed to the `next` function to retrieve the next item. When a generator has no more values to yield, a `StopIteration` error is raised.
```python
g = my_generator()
print(next(g))
# 'hello'
print(next(g))
# 'world'
print(next(g))
# '!'
print(next(g))
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# StopIteration
```

Generators are particularly useful when you need to create a large set of values but do not need to keep them all in memory at the same time. For example, if you need to print the first million fibonacci numbers, you would typically return a list of a million values and iterate over the list to print each value. However with a generator, you can return each value one at a time:
```python
def fib(n):
    a = 1
    b = 1
    for i in range(n):
        yield a
        a, b = b, a + b

for x in fib(1000000):
    print(x)
```

### More Information
* [PEP 255](https://www.python.org/dev/peps/pep-0255/)
* [Python Wiki](https://wiki.python.org/moin/Generators)
* [Yield Statement Documentation](https://docs.python.org/2/reference/simple_stmts.html#yield)

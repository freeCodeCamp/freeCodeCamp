---
title: Decorator
---

The decorator is a design pattern that could modify or enhance the interface of a class.

## Decorator in Python3
Here is an example of Decorator implementation in Python3.


```python
class MyText(object):
    def __init__(self, text=''):
        self.text = text

    def __str__(self):
        return 'This is {}'.format(self.text)


class BracketDecorator(object):
    def __init__(self, decoratee):
        self._decoratee = decoratee

    def __str__(self):
        return '({})'.format(self._decoratee)


class QuoteDecorator(object):
    def __init__(self, decoratee):
        self._decoratee = decoratee

    def __str__(self):
        return '\"{}\"'.format(self._decoratee)


print(BracketDecorator(MyText('apple')))
>>> (This is apple)
print(QuoteDecorator(MyText('banana')))
>>> "This is banana"
```

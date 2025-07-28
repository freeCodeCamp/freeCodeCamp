---
id: 6874b7d3b286c538b39d0c25
title: What Are Special Methods and What Are They Used For?
challengeType: 19
dashedName: what-are-special-methods-and-what-are-they-used-for
---

# --description--

Special methods in Python, also known as "magic methods" or "dunder methods", are special Python methods that start and end with double underscores (`__`). The word "dunder" itself comes from double underscores (**d** for double, **under** for underscores).

You've probably used special methods already without knowing it. Every time you write something like `3 + 4`, Python quietly runs `3.__add__(4)` under the hood. That's a special method in action. So while you *can* call special methods directly, you rarely do. Something like `3 + 4` is much clearer and easier to read than calling `3.__add__(4)` yourself.

Apart from `__add__`, `__init__()` is another special method you'll see and use the most, as it's a class initializer. There are also others like `__len__()` and `__str__()`.

Think of special methods as the directors of the activities between a person programming and the Python language interpreter itself.

Remember, you don't need to call special methods directly. Instead, Python automatically calls them when certain actions happen. These operations include:

- **Arithmetic operations like addition, subtraction, multiplication, division, and others**. In addition, `__add__()` is called, `__sub__()` for subtraction, `__mul__()` for multiplication, and `__truediv__()` for division.
    
- **String operations like concatenation, repetition, formatting, and conversion to text**. `__add__()` is called for concatenation, `__mul__()` for repetition, `__format__()` for formatting, `__str__()` and `__repr__()` for text conversion, and so on.
    
- **Comparison operations like equality, less-than, greater-than, and others**. `__eq__()` is called for equality checks, `__lt__()` for less-than, `__gt__()` for greater-than, and so on.
    
- **Iteration operations like making an object iterable and advancing through items**. `__iter__()` is called to return an iterator and  `__next__()` to fetch the next item.
    

Normally, Python data types like strings and numbers already know how to add things, do concatenation, compare for equality, be used in loops, and others.

But when you create your own class, Python won't know how to handle things automatically.

This is where special methods come in — they let you customize Python's built-in behavior.

Let's say you want to get the number of pages in book objects created with the class below, or compare them and get a readable string of the objects. Here's what happens without special methods:

```python
class Book:
   def __init__(self, title, pages):
       self.title = title
       self.pages = pages

book1 = Book("Built Wealth Like a Boss", 420)
book2 = Book("Be Your Own Start", 420)

print(len(book1)) # TypeError: object of type 'Book' has no len()
print(str(book1)) # <__main__.Book object at 0x102ed2900>
print(book1 == book2) # False even though they have the same number of pages
```

In the example:

- `len(book1)` failed because Python doesn't know how to get the length of your book object without `__len__()`
    
- `str(book1)` printed something like `<__main__.Book object at 0x102ed2900>` because that's the default representation when you don't use `__str__()`
    
- `book1 == book2` resulted in `False` because Python just checks if both objects are the same in memory, not by content.
    

Here's how you can define your own `__len__()`, `__str__()`, and `__eq__()` special methods to make working with objects created from the `Book` class easier:

```python
class Book:
   def __init__(self, title, pages):
       self.title = title
       self.pages = pages

   def __len__(self):
       return self.pages

   def __str__(self):
       return f"'{self.title}' has {self.pages} pages"

   def __eq__(self, other):
       return self.pages == other.pages
  
book1 = Book("Built Wealth Like a Boss", 420)
book2 = Book("Be Your Own Start", 420)

print(len(book1)) # 420
print(len(book2)) # 420
print(str(book1)) # 'Built Wealth Like a Boss' has 420 pages
print(str(book2)) # 'Be Your Own Start' has 420 pages
print(book1 == book2) # True
```

Another example is a shopping cart where you do the following:

- Add items to the cart
    
- Remove items from the cart
    
- Get the number of items in the cart
    
- Check what items are in the cart
    
- Check if a specific item is in the cart
    
- Return or display an item at a specific index in the cart
    

While you might have a method that adds items to the cart and removes certain items from the cart, you can create special methods for all the other functionality:

- `__len__()` to get the length of the items in the cart
    
- `__iter__()` to loop through the items in the cart so you can see them
    
- `__contains__()` to check if a specific item is in the cart
    
- `__getitem__()` to return or display an item at a specific index in the cart
    

Here's an example of a `Cart` class with these user-defined methods and special methods:

```python
class Cart:
   def __init__(self):
       self.items = []

   def add(self, item):
       self.items.append(item)

   def remove(self, item):
       if item in self.items:
           self.items.remove(item)
       else:
           print(f'{item} is not in cart')

   def list_items(self):
       return self.items

   def __len__(self):
       return len(self.items)

   def __getitem__(self, index):
       return self.items[index]

   def __contains__(self, item):
       return item in self.items

   def __iter__(self):
       return iter(self.items)
```

And here's how you can use them:

```python
cart = Cart()
cart.add('Laptop')
cart.add('Wireless mouse')
cart.add('Ergo keyboard')
cart.add('Monitor')

for item in cart:
   print(item, end=' ') # Laptop Wireless mouse Ergo keyboard Monitor

print(len(cart)) # 4
print(cart[3]) # Monitor

print('Monitor' in cart) # True
print('banana' in cart) # False

cart.remove('Ergo keyboard')

print(cart.list_items()) # ['Laptop', 'Wireless mouse', 'Monitor']

cart.remove('banana') # banana is not in cart
```

And those are a few ways you'll use special methods in Python in the real-world.

# --questions--

## --text--

Which of these is the special method called during an addition operation?

## --answers--

`__plus__()`

### --feedback--

Look out for what is triggered when you use the `+` operator.

---

`__sum__()`

### --feedback--

Look out for what is triggered when you use the `+` operator.

---

`__add__()`

---

`__concat__()`

### --feedback--

Look out for what is triggered when you use the `+` operator.

## --video-solution--

3

## --text--

How was the word "dunder" derived?

## --answers--

From "dynamic under-the-hood operations"

### --feedback--

Think about how the word "dunder" is related to how dunder methods are written.

---

From shortening "double underscore" (`__`)

---

From the creator of Python's nickname

### --feedback--

Think about how the word "dunder" is related to how dunder methods are written.

---

From "data under" in reference to hidden methods

### --feedback--

Think about how the word "dunder" is related to how dunder methods are written.

## --video-solution--

2

## --text--

Which special method is called when you use the greater-than (`>`) comparison operator?

## --answers--

`__more__()`

### --feedback--

It stands for "greater than" and is triggered by the `>` operator.

---

`__compare__()`

### --feedback--

It stands for "greater than" and is triggered by the `>` operator.

---

`__greater__()`

### --feedback--

It stands for "greater than" and is triggered by the `>` operator.

---

`__gt__()`

## --video-solution--

4

---
title: Methods
---
## Methods

In object oriented programming a function within a class or an object is named a method. Imagine you have a cat object and inside the class there is a funcion named scratch, you can now use the cat's scratch method by calling it in the following way:
```py
cat.scratch(somePerson)
```
## Different kind of methods

There are different types of methods you can define in a class, some of them are listed here.

The constructor, a method that is executed when the object is created:

```py
class Cat:
  def __init__(self, name): // Constructor which recieves a name
    self.name = name
```

Standard methods:
```py
class Cat:
  name = "Bob"
  
  def scratch(self, person): // Standard method, recieves person to scratch
    print(self.name + " scratched " + person)
```

The destructor, a method that is executed when the object is deleted by the garbage collector. 
```py
class Cat:
  name = "Bob"
  def __del__(self):
    print(name + " is no more.")
```

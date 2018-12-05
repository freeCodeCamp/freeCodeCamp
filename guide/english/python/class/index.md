---
title: Class
---
## Class

Classes provide a means of bundling data and functionality together.
Creating a new class creates a new type of object, allowing new instances of that type to be made.
Each class instance can have attributes attached to it for maintaining its state.
Class instances can also have methods (defined by its class) for modifying its state.

Compared with other programming languages, Python’s class mechanism adds classes with a minimum of
new syntax and semantics. It is a mixture of the class mechanisms found in C++.
Python classes provide all the standard features of Object Oriented Programming:
the class inheritance mechanism allows multiple base classes,
a derived class can override any methods of its base class or classes,
and a method can call the method of a base class with the same name.
Objects can contain arbitrary amounts and kinds of data.
As is true for modules, classes partake of the dynamic nature of Python:
they are created at runtime, and can be modified further after creation.

#### Class Definition Syntax :

The simplest form of class definition looks like this:
```python
class ClassName:
    <statement-1>
      #  ...
      #  ...
      #  ...
    <statement-N>
 ```

#### Class Objects:

Class objects support two kinds of operations: attribute references and instantiation.

Attribute references use the standard syntax used for all attribute references in Python: `obj.name`.
Valid attribute names are all the names that were in the class’s namespace when the class object was created.
So, if the class definition looked like this:
```python
class MyClass:
    """ A simple example class """
    i = 12345

    def f(self):
        return 'hello world'
```
Then `MyClass.i` and `MyClass.f` are valid attribute references, returning an integer and a function object, respectively.
Class attributes can also be assigned to, so you can change the value of `MyClass.i` by assignment. `__doc__` is also a valid attribute, returning the docstring belonging to the class: `"A simple example class"`.

Class instantiation uses function notation. Just pretend that the class object is a parameterless function that returns a new instance of the class. For example (assuming the above class):
```python
x = MyClass()
```
Creates a new instance of the class and assigns this object to the local variable x.

The instantiation operation (“calling” a class object) creates an empty object.
Many classes like to create objects with instances customized to a specific initial state.
Therefore a class may define a special method named __init__(), like this:

```python
def __init__(self):
    self.data = []
```
When a class defines an `__init__()` method, class instantiation automatically invokes `__init__()` for the newly-created class instance.
So in this example, a new, initialized instance can be obtained by:
```python
x = MyClass()
```
Of course, the `__init__()` method may have arguments for greater flexibility.
In that case, arguments given to the class instantiation operator are passed on to `__init__()`. For example,
```python
class Complex:
    def __init__(self, realpart, imagpart):
        self.r = realpart
        self.i = imagpart
            # ...

x = Complex(3.0, -4.5)
>>> x.r, x.i
(3.0, -4.5)
```

#### Private Variables in Class:

Every programming language which follows OOPs (Object Oriented Programming) concept has some mechanism of data hiding.In python if some variable needs to be hidden from the outside world we use the concept of private variables by using `__` before he variable name.

for example:
```python
class Foo:
    def __init__(self):
        self.__privatenum = 3011

# Now if we try to access __privatenum outside the class we will get error:
x = Foo()
x.__privatenum  # gives following error : 'Foo' object has no attribute '__privatenum'
```

## Simple class and Object Implementation
```python
class Friend:
    def __init__(self,first,last,state):
        self.fname = first
        self.lname = last
        self.state = state
        self.email = first+"."+state+"@nith.com"
    def show(self):
        return '{} {} {} {}'.format(self.fname,self.lname,self.state,self.email)

fr1 = Friend("Nilesh","Bharti","Bihar")
fr1.show()
```


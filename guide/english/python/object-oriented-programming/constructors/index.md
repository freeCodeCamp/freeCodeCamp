---
title: Constructors
---
## Constructors

A constructor is a special method (function) definition within a class. The constructor method is executed when an object is created, that is if the class has a constructor. If a constructor is not defined, it is automatically defined to be an empty function. In Python, it is only possible to have one constructor, which uses the special name -
```python
__init__(self)
```
and is defined under class variables in the class definition. In Python, we are only allowed to have one constructor, since function overloading is not used in the language. We can define a function with the same name multiple times but Python will use the function which was defined last, we can see it as overriding the previous function.

## Constructor example

Let us define a `Cat` class, which has a tail. The number of legs, fur color and a race are added when an object is created.

```python
class Cat:
  tail = True

  def __init__(self, numLegs, colFur, race):
    self.numberOfLegs = numLegs
    self.colorOfFur = colFur
    self.race = race
```
In this example we are forcing the user to enter information into the class by defining `__init__` to expect 3 parameters.
```python
bob = Cat(4, "gray", "siamese") // Works
print(bob.tail) // True
print(bob.colorOfFur) // gray

bob = Cat() // Does not work
```
Let us define the cat class in a different way to not recieve initial information.
```python
class Cat:
  tail = true

  def __init__(self):
    self.numberOfLegs = 4
    self.colorOfFur = "gray"
    self.race = "siamese"
```
Now the constructor is empty and no parameters are needed, the `self` parameter is always defined since that makes a reference to the object.

```python
bob = Cat() // Works now!

bob = Cat(4, "gray", "siamese") // Does not work now!
```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->



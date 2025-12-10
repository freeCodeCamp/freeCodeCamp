---
id: 68c3ba8940e4df8afa83a723
title: What Is Inheritance and How Does It Promote Code Reuse?
challengeType: 19
dashedName: what-is-inheritance-and-how-does-it-promote-code-reuse
---

# --description--

Inheritance is the next key concept of object-oriented programming (OOP) we'll cover.

Let's take a deeper look at this concept and how it lets you write reusable code.

With inheritance, a subclass (or child class) can use the attributes and methods of a base class (or parent class). This allows you to reuse code, create clear class hierarchies, and customize behavior without rewriting everything. You can customize by extending existing methods or overriding them in the child class.

Here's the basic syntax for inheritance:

```py
class Parent:
    # Parent attributes and methods

class Child(Parent):
    # Child inherits, extends, and/or overrides where necessary
```

For the `Child` class to inherit from the `Parent` class, you have to pass the Parent to the Child.

This style is called single inheritance, since a child class inherits from exactly one parent class.

Here's an example:

```py
class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        return f'{self.name} makes a sound'

class Dog(Animal):
    bark = 'woof! woof!! woof!!!'

jack = Dog('Jack')
print(jack.sound())  # Jack makes a sound
print(jack.bark)  # woof! woof!! woof!!!
```

You can see that we're able to reuse the `self.name` attribute and the `sound()` method from the parent `Animal` class in the child `Dog` class.

Let's override the `sound()` method from the parent `Animal` class in the child `Dog` class so we can have `sound()` use the `bark` class variable:

```py
class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        return f'{self.name} makes a sound.'

class Dog(Animal):
    bark = 'woof! woof!! woof!!!'

    # Override sound() to use bark class variable
    def sound(self):
        return f'{self.name} barks {self.bark}'

jack = Dog('Jack')
print(jack.sound())  # Jack barks woof! woof!! woof!!!
```

If you want to keep the return value of `sound()` and add the bark class variable later, you can extend `sound()` by using the `super()` function:

```py
class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        return f'{self.name} makes a sound'

class Dog(Animal):
    bark = 'woof! woof!! woof!!!'

    # Call Animal.sound(), then append bark
    def sound(self):
        base = super().sound()
        return f'{base}, then {self.name} barks {self.bark}'

jack = Dog('Jack')
print(jack.sound())  # Jack makes a sound, then Jack barks woof! woof!! woof!!!
```

In this example, `base` is the result of calling the `sound()` method from the `Animal` class, and then we append the `Dog` class's specific sound to it. This way, you can extend the functionality of the parent `Animal` class while still keeping its original behavior.

There's also multiple inheritance, where a child class can inherit from more than one parent class.

Here's the basic syntax of multiple inheritance:

```py
class Parent:
    # Attributes and methods for Parent

class Child:
    # Attributes and methods for Child

class GrandChild(Parent, Child):
    # GrandChild inherits from both Parent and Child
    # GrandChild can combine or override behavior from each
```

A simple way to demonstrate multiple inheritance is with a frog, which can both walk on land and swim in water:

```py
class Walker:
    def walk(self):
        return 'I can walk on land'

class Swimmer:
    def swim(self):
        return 'I can swim in water'

# Amphibian inherits from both Walker and Swimmer
class Amphibian(Walker, Swimmer):
    def __init__(self, name):
        self.name = name

    def introduce(self):
        return f"I'm {self.name} the frog. {self.walk()} and {self.swim()}."

frog = Amphibian('Freddy')
print(frog.introduce())
# Output: I'm Freddy the frog. I can walk on land and I can swim in water.
```

# --questions--

## --text--

What is the primary purpose of inheritance in object-oriented programming?

## --answers--

To create identical copies of a parent class.

### --feedback--

Think about how a child class can reuse and extend attributes and methods from a parent class.

---

To allow a child class to reuse and extend attributes/methods from a parent class.

---

To make all methods in a class private.

### --feedback--

Think about how a child class can reuse and extend attributes and methods from a parent class.

---

To prevent code duplication by merging unrelated classes.

### --feedback--

Think about how a child class can reuse and extend attributes and methods from a parent class.

## --video-solution--

2

## --text--

What is multiple inheritance in Python?

## --answers--

A child class inheriting from one parent class.

### --feedback--

Think about the style of inheritance that allows a child to inherit from several classes.

---

A parent class with multiple child classes.

### --feedback--

Think about the style of inheritance that allows a child to inherit from several classes.

---

A child class inheriting from multiple parent classes.

---

A class that cannot inherit at all.

### --feedback--

Think about the style of inheritance that allows a child to inherit from several classes.

## --video-solution--

3

## --text--

How do you make a child class inherit from a parent class in Python?

## --answers--

By calling `Parent.inherit(Child)`.

### --feedback--

The syntax involves parentheses in the class definition.

---

By copying all methods manually.

### --feedback--

The syntax involves parentheses in the class definition.

---

By using the `extends` keyword.

### --feedback--

The syntax involves parentheses in the class definition.

---

By passing the Parent class as an argument to the Child class.

## --video-solution--

4

---
id: 67f4131db7777346b1b3dc6f
title: Object Oriented Programming Quiz
challengeType: 8
dashedName: quiz-object-oriented-programming
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What serves as the blueprint for creating objects?

#### --distractors--

Functions

---

Variables

---

Loops

#### --answer--

Classes

### --question--

#### --text--

Which module does Python use to implement abstract classes?

#### --distractors--

`Time`

---

`xyz`

---

`Random`

#### --answer--

`abc`

### --question--

#### --text--

What defines the data and behaviors of an object?

#### --distractors--

Functions and classes.

---

Variables and loops.

---

Seeders and databases.

#### --answer--

Attributes and methods.

### --question--

#### --text--

What is single inheritance?

#### --distractors--

A child class inheriting attributes and methods from a single function.

---

A child class inheriting attributes and methods from multiple functions.

---

A child class inheriting attributes and methods from multiple classes.

#### --answer--

A child class inheriting attributes and methods from a single class.

### --question--

#### --text--

Which of the following is NOT one of the key principles of object-oriented programming?

#### --distractors--

Encapsulation

---

Inheritance

---

Abstraction

#### --answer--

Don't repeat yourself (DRY)

### --question--

#### --text--

What is the difference between prefixing attributes and methods with a double underscore and single underscore?

#### --distractors--

Single underscore hides the attribute completely, double underscore makes it readable only inside methods.

---

Single underscore means private, double underscore means protected.

---

Single underscore makes them public, double underscore makes them static.

#### --answer--

Single underscore is just a convention for internal use, double underscore triggers name mangling to prevent accidental attribute and method overriding.

### --question--

#### --text--

Which OOP concept lets you hide complex implementation details and only shows the essential features of an object or system?

#### --distractors--

Inheritance

---

Polymorphism

---

Encapsulation

#### --answer--

Abstraction

### --question--

#### --text--

Which decorator do you use to create a setter?

#### --distractors--

`@<property_name>.creator`

---

`@<method_name>.creater`

---

`@<method_name>.creator`

#### --answer--

`@<property_name>.setter`

### --question--

#### --text--

Which OOP concept lets you hide the internal state of the object behind a set of public methods and attributes that act like doors?

#### --distractors--

Polymorphism

---

Abstraction

---

Single inheritance

#### --answer--

Encapsulation

### --question--

#### --text--

What is a getter?

#### --distractors--

A method that updates or changes the value of an attribute.

---

A method that deletes an attribute from an object.

---

A method that creates a new attribute in an object.

#### --answer--

A method that retrieves or returns the value of an attribute.

### --question--

#### --text--

What is a setter?

#### --distractors--

A method that retrieves the value of an attribute.

---

A method that deletes the value of an attribute.

---

A method that deletes an attribute from an object.

#### --answer--

A method that sets or updates the value of an attribute.

### --question--

#### --text--

What lets you delete a value you set and get with a setter and getter?

#### --distractors--

Remover

---

Eraser

---

Delayer

#### --answer--

Deleter

### --question--

#### --text--

What promotes code reuse, provides clear hierarchies, and allows customization of behavior without rewriting everything?

#### --distractors--

DRY

---

WET

---

Abstraction

#### --answer--

Inheritance

### --question--

#### --text--

Which of these is the correct syntax of inheritance?

#### --distractors--

```py
class Parent:
    pass
class Child(InheritParent):
    pass
```

---

```py
class Parent:
    pass
class Child(Inheriter):
    pass
```

---

```py
class Child:
   pass
class Parent(Parent):
   pass
```

#### --answer--

```py
class Parent:
   pass
class Child(Parent):
   pass
```

### --question--

#### --text--

What connects setters and getters?

#### --distractors--

Methods

---

Functions

---

Classes

#### --answer--

Properties

### --question--

#### --text--

What is the process by which Python internally renames an attribute prefixed with a double underscore by adding an underscore and the class name as a prefix?

#### --distractors--

Name Mingling

---

Polymorphism

---

Abstraction

#### --answer--

Name Mangling

### --question--

#### --text--

Which function lets you invoke a method from a parent inside a child class?

#### --distractors--

`constructor()`

---

`__init__()`

---

`property()`

#### --answer--

`super()`

### --question--

#### --text--

Which of the following statements best describes polymorphism in OOP?

#### --distractors--

It allows a class to have multiple constructors with different attributes and methods.

---

It allows a class to inherit attributes and methods from another class.

---

It allows creating objects with the `class` keyword.

#### --answer--

It allows different classes to use the same method name while performing different actions when called.

### --question--

#### --text--

Why does Python mangle the name of an attribute prefixed with double underscores?

#### --distractors--

To make the attribute completely private and inaccessible from outside the class.

---

To improve performance by storing attributes more efficiently.

---

To automatically convert attributes into read-only properties.

#### --answer--

To prevent accidental attribute and method overriding in subclasses when using inheritance.

### --question--

#### --text--

Why are properties used instead of methods for getters and setters?

#### --distractors--

To make code longer and more explicit.

---

To prevent access to the value entirely.

---
To automatically log every value change.

#### --answer--

To allow direct attribute-like access with dot notation for better readability.

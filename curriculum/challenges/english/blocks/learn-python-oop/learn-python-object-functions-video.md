---
id: 697fe3cb32baa3841ab62a63
title: Object Functions
challengeType: 11
videoId: 3Mla2uUDSu8
dashedName: object-functions-learn-python-full-course-for-beginners
---

# --description--

In this video, you will learn how to work with functions inside of classes.

# --questions--

## --text--

Which of the following is the correct way to create a function inside of a class?

## --answers--

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self.function):
        return f"Hello, my name is {self.name} and I am {self.age} years old."
```

---

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."
```

---

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        self.pass
```

---

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    greet = (self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."
```

## --video-solution--

2

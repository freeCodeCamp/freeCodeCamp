---
id: 69ae96dfa9e6da4eb0d5f7f5
title: Using Constructors
challengeType: 11
videoId: CDFRHw4SACU
dashedName: using-constructors
---

# --description--

In this video, you will learn how to work with constructors in classes.

# --questions--

## --text--

Which of the following is the correct way to write a constructor?

## --answers--

```py
class Dog:
    def __init__(self, name):
        name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

---

```py
class Dog:
    def __init__(name):
        self.name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

---

```py
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

---

```py
class Dog:
    def __init__ self, name:
        self.name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

## --video-solution--

3



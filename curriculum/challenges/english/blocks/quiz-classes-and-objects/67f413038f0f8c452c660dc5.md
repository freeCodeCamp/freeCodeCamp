---
id: 67f413038f0f8c452c660dc5
title: Classes and Objects Quiz
challengeType: 8
dashedName: quiz-classes-and-objects
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which of the following is the correct way to define a class?

#### --distractors--

```py
def className(class):
    pass
```

---

```py
self className:
    pass
```

---

```py
class className
    pass
```

#### --answer--

```py
class className:
    pass
```

### --question--

#### --text--

What is the purpose of the special method `__init__`?

#### --distractors--

It sets a shortcut to create an instance of a class.

---

It prevents an object from having duplicate attributes.

---

It sets the value of `self` to the current object.

#### --answer--

It initializes objects' attributes upon instantiation.

### --question--

#### --text--

What is the difference between an instance attribute and a class attribute?

#### --distractors--

Instance attributes define methods that can be accessed from an object; class attributes define methods that can be accessed from a class.

---

Instance attributes are set within the `__init__` method; class attributes are set within the `__class__` method.

---

Instance attributes can be directly accessed from the class; class attributes can be only accessed from an actual instance of the class.

#### --answer--

Instance attributes belong to a specific object; class attributes belong to a class.

### --question--

#### --text--

Which of the following is the correct way to call the `spam` method from the `menu` object?

#### --distractors--

`spam.menu()`

---

`menu[spam]`

---

`spam.menu`

#### --answer--

`menu.spam()`

### --question--

#### --text--

Which of the following special methods is called under the hood when an object is printed to the console?

#### --distractors--

`__print__`

---

`__log__`

---

`__string__`

#### --answer--

`__str__`

### --question--

#### --text--

What is the result of the following code?

```py
class Menu:
    dish_of_the_day = "spam"

print(Menu.dish_of_the_day)
```

#### --distractors--

`None`

---

`AttributeError`

---

`SyntaxError`

#### --answer--

`spam`

### --question--

#### --text--

What does the `self` parameter refer to inside a method?

#### --distractors--

It's a reference to the object initializer.

---

It's a reference to the module where the class is defined.

---

It's a reference to the class being used.

#### --answer--

It's a reference to the instance of the class calling the method.

### --question--

#### --text--

Which of the following correctly creates an instance of a class `Person`?

#### --distractors--

`Person.new()`

---

`new Person()`

---

`new Person`

#### --answer--

`Person()`

### --question--

#### --text--

What will be the result of the following code?

```py
class Dog:
    def __init__(name, age):
        self.name = name
        self.age = age

dog = Dog("Pinky", 3)
print(dog.name)
```

#### --distractors--

`Pinky`

---

`3`

---

`AttributeError`

#### --answer--

`TypeError`

### --question--

#### --text--

Which of the following is the correct way to access the `name` attribute of the `dog` object?

#### --distractors--

`dog().name`

---

`dog.name()`

---

`dog.get('name')`

#### --answer--

`dog.name`

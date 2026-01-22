---
id: 68c3bc4ddb7b469fb7d17c28
title: What Is Polymorphism and How Does It Promote Code Reuse?
challengeType: 19
dashedName: what-is-polymorphism-and-how-does-it-promote-code-reuse
---

# --description--

Polymorphism is the next key concept of object-oriented programming (OOP) we will talk about.

With polymorphism, you have access to an interface where you can interact with many objects of the same kind.

Let's take a deeper look at polymorphism and how it lets you reuse code.

Polymorphism allows methods in different classes to share the same name but perform different tasks. You call the same method name on different objects, and each responds in its own way.

Here's the basic example of polymorphism:

```py
class A:
   def action(self): ...

class B:
   def action(self): ...

class C:
   def action(self): ...

Class().method()  # Works for A, B, or C
```

Here's an example using different animal sounds to depict polymorphism:

```py
class Cat:
   def speak(self):
       return "A cat meow"

class Bird:
   def speak(self):
       return "A bird tweet"
  
class Monkey:
   def speak(self):
       return "A monkey ooh ooh aah aah ooh ooh aah aah"

def animal_sound(animal):
   print(animal.speak())

animal_sound(Cat())
animal_sound(Bird())
animal_sound(Monkey())
```

In this example, `animal_sound()` is a function that takes any object with a `speak()` method. 

When you pass in a `Cat`, `Bird`, or `Monkey`, it calls the `speak()` method of the object and prints the result. Because each class defines `speak()` differently, you get different outputs from the same function. That's polymorphism in action.

Here's another example, this time with instances and an attribute:

```py
class Twitter:
   def __init__(self, content):
       self.content = content

   def post(self):
       return f"🐦 Tweet: '{self.content}' (280 chars max)"

class Instagram:
   def __init__(self, content):
       self.content = content

   def post(self):
       return f"📸 Instagram Post: '{self.content}' + ✨ filters"

class LinkedIn:
   def __init__(self, content):
       self.content = content

   def post(self):
       return f"💼 LinkedIn Article: '{self.content}' (Professional Mode)"

def start(social_media):
   print(social_media.post())  # Calls .post() on any object

# Instances
tweet = Twitter('Just learned Python polymorphism!')
photo = Instagram('Sunset vibes 🌅')
article = LinkedIn('Why OOP matters in 2024')

# The polymorphic calls - same function, different outputs
start(tweet) # 🐦 Tweet: 'Just learned Python polymorphism!' (280 chars max)
start(photo) # 📸 Instagram Post: 'Sunset vibes 🌅' + ✨ filters
start(article) # 💼 LinkedIn Article: 'Why OOP matters in 2024' (Professional Mode)
```

There's also a kind of polymorphism called **inheritance-based polymorphism**.

In inheritance-based polymorphism, a parent class defines a method, and multiple child classes override that method in their own way. You can then call the same method on any child object, and it behaves differently depending on which child class it is.

Here's an example:

```py
class Animal:
   def speak(self):
       return 'Some generic sound'

class Cat(Animal):
   def speak(self):
       return 'A cat meow'

class Dog(Animal):
   def speak(self):
       return 'A dog barks woof woof'

class Monkey(Animal):
   def speak(self):
       return 'A monkey ooh ooh aah aah ooh ooh aah aah'
  
print(Cat().speak()) # A cat meow
print(Dog().speak()) # A dog barks woof woof
print(Monkey().speak()) # A monkey ooh ooh aah aah ooh ooh aah aah
print(Animal().speak()) # Some generic sound
```

You can see that each child class of the parent `Animal` class overrides the `speak()` method to provide its own implementation. So when you call the `speak()` method on an instance of each subclass, it returns the specific sound associated with that animal.

You can also take things further and do the calling in a list, then loop through the list to display what the `speak()` method returns for each:

```py
animals = [Cat(), Dog(), Monkey()]

for animal in animals:
   print(animal.speak())

# Output:
# A cat meow
# A dog barks woof woof
# A monkey ooh ooh aah aah ooh ooh aah aah
```

# --questions--

## --text--

What is polymorphism in object-oriented programming?

## --answers--

When a class cannot have methods with the same name.

### --feedback--

Think about how the word “polymorphism” means “many forms” of the same action.

---

When different classes can use the same method name but implement it differently.

---

When a method must be unique across all classes.

### --feedback--

Think about how the word “polymorphism” means “many forms” of the same action.

---

When a child class deletes a parent class's method.

### --feedback--

Think about how the word “polymorphism” means “many forms” of the same action.

## --video-solution--

2

## --text--

In inheritance-based polymorphism, what must a child class do to provide its own implementation of a method defined in the parent class?

## --answers--

Override the method by redefining it with the same name.

---

Declare the method as `@static`.

### --feedback--

Think about how a child class redefines the method while keeping the same signature.

---

Delete the parent method first.

### --feedback--

Think about how a child class redefines the method while keeping the same signature.

---

Use the `@polymorphic` decorator.

### --feedback--

Think about how a child class redefines the method while keeping the same signature.

## --video-solution--

1

## --text--

What is the key benefit of inheritance-based polymorphism?

## --answers--

It forces all child classes to implement identical behavior.

### --feedback--

Look out for how polymorphism lets you call the same method on different child classes.

---

It prevents child classes from modifying parent methods.

### --feedback--

Look out for how polymorphism lets you call the same method on different child classes.

---

It allows calling the same method name on different child objects, with each executing its own version.

---

It merges all child methods into the parent class.

### --feedback--

Look out for how polymorphism lets you call the same method on different child classes.

## --video-solution--

3

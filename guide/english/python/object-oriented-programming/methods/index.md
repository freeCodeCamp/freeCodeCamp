---
title: Methods
---
## Methods

In object oriented programming a function within a class or an object is named a method. Say we have a cat object and inside the class we have defined a funcion named scratch, we can now use the cat's scratch method by calling it in the following way:
```
cat.scratch(somePerson)
```
## Different kind of methods

There are some different methods we can define in a class, below we will see some of them.

The constructor, a method that is executed when the object is created:

```
class Cat:
  def __init__(self, name): // Constructor which recieves a name
    self.name = name
```

Standard methods:
```
class Cat:
  name = "Bob"
  
  def scratch(self, person): // Standard method, recieves person to scratch
    print(self.name + " scratched " + person)
```

The destructor, a method that is executed when the object is deleted by the garbage collector. 
```
class Cat:
  name = "Bob"
  def __del__(self):
    print(name + " is no more.")
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->



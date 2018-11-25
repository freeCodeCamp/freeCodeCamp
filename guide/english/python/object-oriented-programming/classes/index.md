---
title: Classes
---

## Classes

A Class is a "blueprint" for creating objects.  Writing a class allows the programmer to describe attributes and behaviors common to every instance of this class.  Whenever you create a variable it is assigned a class, sometimes automatically.  For example, ten = 10 creates a variable named "ten" and is automatically assigned the INT class, because 10 is an integer.

If you were to create a class called Person, give it some properties (eyes, ears, etc), and methods (walk, eat, etc) you can use it to create several variables with the same attributes.

greg = Person()
mike = Person()
sally = Person()

Each of those variables are now an instance of the class Person, and have all the properties and methods of the Person class.  But each has it's own separate versions of the properties.  This allows a programmer to use a class as a blueprint, just like the blueprint for a house.  Different houses may have the same basic floorplan based on the blueprint, but the paint, carpet, etc, can all be individualized.

## Create a Class

To define a class, the keyword **class** is used, followed by the name defining the class and a colon. The lines after the definition line (code describing attributes and behaviors/methods) are indented as in a Python function.

For example, to create a class named Person, we can write:

`class Person:
   <code describing attributes and behaviors/methods> `

Class definitions must be executed before they have any effect.

#### More Information:

There is tons of information on classes online.  https://www.w3schools.com/python/python_classes.asp is an easy introduction.

<!-- Please add any articles you think might be helpful to read before writing the article -->
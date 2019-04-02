---
title: Ruby Methods
---

## Introduction

Have you ever heard of programming languages referring to functions? If you've coded in the likes of JavaScript you should be all too familiar with them. Ruby also has functions but we refer to them as Methods. Methods are just bundled blocks of code that are given a name for ease of use and accessibility and are crucial to that DRY (do not repeat yourself) approach in programming.

## Creating and using methods

Methods should always be defined as lowercase (you can separate the words with an underscore if you like) else they may be confused as constants. Methods should also be defined before actually trying to call them, so the rule of thumb would be creating your methods at the beginning of your file and calling them afterward where needed. Always try and avoid single word method names where necessary, you want to be able to know more or less what the method does without having to dig inside.

## Syntax

Methods are quite easy to create, they can be created without the ability to accept parameters, with parameters and even with pre-defined parameters if none is given.

#### Simple method
```
def my_method
  code goes here
end
```

#### Parameter accepting method
```
def my_method (param1, param2)
  param1 + param2
end
```

#### Predefined paramter method (predefined parameters are used when none are given)
```
def my_method (param1 = parameter1, param2 = parameter2)
  parm1 + parm2
end
```

## Return in Methods
The returned value of a method will always be the last evaluated expression in the method. You can, however, use the return keyword to return more than one value if required.

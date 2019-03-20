---
title: Lists
---

# Lists

A list is a data structure that holds variables in a specific order. It can hold any type of variable, and the type is defined when initializing the list. 

A list is similar to an array, but unlike arrays, which must have a fixed size, lists are dynamically sized. This is useful if you do not know the number of variables that will be included, or if additional variables will be added in the future.

## Initializing a list
Lists are initialized using the following format:
`List<type> = new List<type>();`

Here are examples of how lists would be initialized for a few different data types:
`List<int> = new List<int>();`
`List<string> = new List<string>();`
`List<MyCustomPoCo> = new List<MyCustomPoCo>();`

## Adding items to a list
Items can be added to the list using the following syntax.
`List.Add(ItemToAdd)`

For example:
`List.Add(33)`
`List.Add("I am a string.")`

It is also possible to use the object initializer format to initialize a list with a set of data.
```
List<int> = new List<Int> { 11, 22, 33, 44, 55, 66 };
```
```
List<MyClass> myClass = new List<MyClass>
{
    new MyClass(){ Id = 1, Name = "First" },
    new MyClass(){ Id = 2, Name = "Second" },
    new MyClass(){ Id = 3, Name = "Third" },
};
```
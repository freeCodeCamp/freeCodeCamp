---
title: Enumerations
---

# Enumerations

An enumeration is a set of named integer constants that is declared using the `enum` keyword.

## Example
```
enum Gender 
{
  Male,
  Female
}
```
By default, the integer values start at 0 and increase by 1, for each enumeration name i.e. Male = 0, Female = 1 etc. 

These can be overridden by specifying an integer value for any of the enumeration names.

## Example
```
enum Gender 
{
  Male = 1,
  Female
}
```
In this case, the integer values will start at 1 and increase from there.

To use an enum, you can declare a variable of its type and assign a value to it:

`Gender myVar = Gender.Male;`

You can also cast an enumeration name value to its underlying integer value and vice versa:

```
Console.WriteLine($"Male: {(int)Gender.Male}");
Console.WriteLine($"Female: {(int)Gender.Female}");
```

## Output:
```
Male: 1
Female: 2
```

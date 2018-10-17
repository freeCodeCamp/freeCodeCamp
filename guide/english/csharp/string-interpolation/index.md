---
title: String Interpolation
---

# String Interpolation

In C#, typically to concatenate strings you would either use the “+” operator or composite formatting with a method such as String.Format. By composite formatting I am referring to a format string with indexed placeholders (format items) and a list of objects to be used in the placeholders.
##
```
string message = "Hello " + firstName + " " + lastName + "!";

string message2 = string.Format("Hello {0} {1}!", firstName, lastName);
```
With interpolated string expressions, you have a string with contained expressions that are replaced with the expressions’ results. You have to prefix your string literal with a dollar sign ($). The expressions you want included in the string are placed inline enclosed in curly braces. The above message would now look like this:
##
```
string message = $"Hello {firstName} {lastName}!";
```
**Small Bit Of Useful Information**
In string interpolation you have the ability to call functions, properties and ternary operators:

```
int a = 3;
int b = 454;
string result = $"{a}+{b} = {a+b}";
```

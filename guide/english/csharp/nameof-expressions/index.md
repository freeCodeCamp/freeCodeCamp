---
title: nameof Expressions
---

# nameof Expressions

Sometimes you need the string name of a variable, type, or member for things such as raising an exception, logging, or firing property changed events. Prior to C# 6.0, you might use a string literal for such purposes.
##
```
public void ProcessStudent(Student student)
{
    if (student == null) throw new ArgumentNullException("student");
}
```
However, if the student parameter were to be renamed, you would have to remember to also modify the string literal. Now with nameof expressions, you don’t have to use string literals and the compiler will be able to warn you if you are using an incorrect name.
##
```
public void ProcessStudent(Student student)
{
    if (student == null) throw new ArgumentNullException(nameof(student));
}
```
Some examples of where nameof expressions may be useful include:
* Throwing exceptions during parameter validation
* Passing an action name when setting up MVC action links
* Needing to pass the name of a property when firing a property changed event in a class that implements INotifyPropertyChanged
* Passing the name of a property when registering a XAML dependency property
* Including a variable, type, or member name when logging

It should be noted that if you provide nameof with a qualified name, the compiler will generate a string for the rightmost name.

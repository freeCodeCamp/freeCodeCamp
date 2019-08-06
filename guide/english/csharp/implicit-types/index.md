---
title: Implicit Types
---

# Implicit Types

C# supports the use of ***implicit types***, which means that rather than declaring a variable with an explicit type, such as `string` or `int`, you can instead use the `var` keyword to prompt the compiler to determine the variable's type.

As an example, the following two lines of code are functionally equivalent:

```
int i = 5;
var j = 5;
```

Please note that this does not mean that the type of the variable is loosely-typed; using the example above, if a subsequent line of code were to try to assign a string value to `j` an exception will be thrown.

The use of `var` is mainly as a convenience, but there are some situations that you will need to use them; for example, if you want to initialise a variable with an anonymous type, the only way to do this will be to declare it as a `var`.

### Readability

Be aware that while implicit types can be useful, they can also potentially make it harder for other developers to understand your code.  Consider the following line:

```
var thing = MyFunction();
```

It is impossible to determine the type of `thing` at a glance, instead the reader would instead have to look at the implementation of `MyFunction()` to see what it is returning.

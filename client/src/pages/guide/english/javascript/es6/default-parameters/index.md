---
title: Default Parameters
---

## Default Parameters

If you are familiar with other programming languages like Ruby, Python then default parameters isn’t new to you.

Default parameters are parameters which are given by default while declaring a function. But it’s value can be changed when calling the function.

Example

```
let Func = (a, b = 10) => {
 return a + b; 
}
Func(20); // 20 + 10 = 30
```

In the above example, we are passing only one parameter. The function makes use of the default parameter and executes the function.

Consider another example:

```
Func(20, 50); // 20 + 50 = 70
```

In the above example, the function takes two parameters and the second parameter replaces the default parameter.

Consider another example:

```
let NotWorkingFunction = (a = 10, b) => {
 return a + b;
}
NotWorkingFunction(20); // NAN. Not gonna work.
```

When you are calling the function with parameters they get assigned in the order. (i.e) the first value gets assigned to the first parameter and the second value gets assign to the second parameter and so on..

In the above example, the value 20 gets assigned to parameter ‘a’ and ‘b’ is not having any value. So we are not getting any output.

But,

```
NotWorkingFunction(20, 30); // 50;
```

Works fine.

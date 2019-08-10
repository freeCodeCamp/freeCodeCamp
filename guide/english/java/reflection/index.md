---
title: Reflection
---
# Reflection

In Java, reflection is a powerful tool that can be used to do *virtually* anything. This can be considered a 
double-edged sword, as it is at times required, yet, it is often exploited and used innappropriately.
It can, however, be particularly useful, if for whatever reason, a private method or private variable needs to be 
called, a method needs to be hooked or replaced, and so on.
Reasoning for doing this may vary, for example, a developer may not have access to the original source-code for a library
that they are working with and may need to work around this constraint.

# Application

## Assigning a private or protected variable

As previously mentioned, assigning a private or protected variable can be made possible with the use of reflection.

Consider the following class:
```
public class MyClass {
  private String hiddenString = "Hello!";

  public String getHiddenString() {
    return this.hiddenString;
  }
}
```

As we can see, the `hiddenString` object is marked `private`, meaning we cannot directly access it.
It is however, accessible through the `getHiddenString()` method.
This won't allow us to change the value of the variable, we can, however, change it using reflection.

Consider the following code:

```
...
MyClass myObject = new MyClass();
...
```

We have an instance of myObject at this point, so let's mark the private variable as accessible.

```
// Create an instance of the object.
MyClass myObject = new MyClass();

// Obtain a reference to the object's private member field, we know the name of the private variable is 
// 'hiddenString'.
Field hiddenStringField = myObject.getClass().getDeclaredField("hiddenString");
// Mark the field as accessible, this effectively tells the JVM that the field is not private, thus
// we can now access it.
hiddenStringField.setAccessible(true);

// The Java compiler doesn't know we have marked the field as accessible. If we wish to set the value,
// we must do so via reflection. We call the set() method on our field, supplying the target object 
// (myObject) and the target value.
// We have successfully set the value, using reflection!
hiddenStringField.set(myObject, "Hello, World!");

// This will print our newly assigned string, as we have assigned the private variable within our
// myObject instance.
System.out.println(myObject.getHiddenString());
```

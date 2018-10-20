---
title: Checking for Equality
---

# Checking for Equality

In Java, there are two ways to check if two variables are the "same": `==` and `.equals()`. These two methods do not work the same, however.

## The `==` Operator

The basic equality operation in Java, `==` as in `var1 == var2`, checks whether `var1` and `var2` point to the same *object reference*.
That is, if `var1` is the same *instance* of a class in memory as `var2`, then `var1 == var2` is true.

However, if `var1` and `var2` were created as two separate instances of a class (i.e. with the `new` keyword), then `var1 == var2` will be false. Even if both objects happen to contain the exact same properties and values, the `==` comparison would not pass because they are not pointing to the same object in memory.

For primitive variable types, such as `int` and `double`, the `==` operator can always be used to check for equality, as their values are stored directly with the variable (rather than as a reference to another slot in memory).

```java
int var1 = 1;
int var2 = 1;
System.out.println(var1 == var2) // true

MyObject obj1 = new MyObject();
MyObject obj2 = obj1;
MyObject obj3 = new MyObject();

System.out.println(obj1 == obj2) // true
System.out.println(obj1 == obj3) // false
System.out.println(obj2 == obj3) // false
```

## The `.equals()` Method

The built-in `Object` class in Java, which all other classes automatically extend, contains a number of helpful built-in methods. One such method is `equals()`, which takes another object as its argument and returns whether the two objects should be considered "equal" according to the relevant logic for that class.

The 'String' class is one of the most common examples of a class that overrides the 'equals()' method. When comparing two 'String's for equality, you need to use the 'equals()' method, as '==' won't work as you expect.

```java
String s1 = "Bob";
String s2 = "ob";
s2 = "B" + s2; //s2 now is also "Bob"
System.out.println(s1 == s2); //false
System.out.println(s1.equals(s2)); //true
```

When you create a new class in Java, you will often want to override the `equals()` method in order to provide a more meaningful way to compare two objects of the same class. How this method is implemented is completely up to the developer's judgement. 

For example, you may decide that two `Person`s should be considered "equal" if their `name` and `dateOfBirth` are the same. This logic would be implemented in your `Person` class's `equals()` method:

```java
public class Person {
    public String name;
    public Date dateOfBirth;
    
    public boolean equals(Person person) {
        return this.name.equals(person.name) && this.dateOfBirth.equals(person.dateOfBirth);
    }
}
```

Most of the built-in classes in Java, as well as classes provided by popular libraries, will implement the `equals()` method in a meaningful way.

For example, the `java.util.Set` interface specifies that a `Set`'s `equals()` method will return true if "the specified object is also a set, the two sets have the same size, and every member of the specified set is contained in this set".

However, if a class does not override the default `equals()` implementation, the default implementation will apply, which simply uses the `==` operator to compare the two objects.

#### More Information:
- [Oracle Java Docs : Equality Operators](https://docs.oracle.com/javase/specs/jls/se7/html/jls-15.html#jls-15.21)

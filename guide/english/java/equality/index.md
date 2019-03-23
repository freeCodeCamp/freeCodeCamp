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

### Note: a common first time coding error is to use a single equal sign instead of double equal signs.  Using a single = will cause a compile time error.  For example:

```java
int var1 = 4;
int var2 = 4;

if(var1 = var2)
    System.out.println("The variables are equal.");
else
    System.out.println("The variables are not equal.");
```
The `if` statement will cause an error.  It is important to remember that a single equal sign is used for assignment while the double equal sign is used for comparison.
    
    
## The `.equals()` Method

The built-in `Object` class in Java, which all other classes automatically extend, contains a number of helpful built-in methods. One such method is `equals()`, which takes another object as its argument and returns whether the two objects should be considered "equal" according to the relevant logic for that class.

The 'String' class is one of the most common examples of a class that overrides the 'equals()' method. When comparing two 'String's for equality, you need to use the 'equals()' method, as '==' won't work as you expect. Instead of returning 'true' when comparing objects, the '==' operator will continuously return 'false' unless the objects being compared are the *same object*.

```java
String s1 = "Bob";
String s2 = "ob";
s2 = "B" + s2; //s2 now is also "Bob"
System.out.println(s1 == s2); //false
System.out.println(s1.equals(s2)); //true
```

When you create a new class in Java, you will often want to override the `equals()` method in order to provide a more meaningful way to compare two objects of the same class. How this method is implemented is completely up to the developer's judgement. 

For example, you may decide that two `Person` objects should be considered *equal* if their `name` and `dateOfBirth` instance variables are the same. This logic would be implemented in your `Person` class's `equals()` method:

```java
public class Person {
    public String name;
    public Date dateOfBirth;
    //The two lines above are instance attributes of the Person object
    
    public boolean equals(Person person) {
        return this.name.equals(person.name) && this.dateOfBirth.equals(person.dateOfBirth);
        //An edited equals() method can allow for the developer to choose what characteristics of an object should be compared in order to deem them equal
    }
}
```

Most of the built-in classes in Java, as well as classes provided by popular libraries, will implement the `equals()` method in a meaningful way.

For example, the `java.util.Set` interface specifies that a `Set`'s `equals()` method will return true if "the specified object is also a set, the two sets have the same size, and every member of the specified set is contained in this set".

However, if a class does not override the default `equals()` implementation, the default implementation will apply, which simply uses the `==` operator to compare the two objects.

## The `.equalsIgnoreCase()` Method

This built-in function in java is used to compare the equality of 2 strings return true or false depending on the match but this function does not see if the characters are in upper case or in lower case.
Example:

```java
String s1="DEMO for Equality";
String s2="Demo for equality";
System.out.println(s1.equals(s2));      //false
System.out.println(s1.equalsIgnoreCase(s2));    //true
```

## Object Equality

The java `Object` class provides two methods for comparing objects which are `equals(Object obj)` and `hashcode()`. 

As discussed above, the `equals(Object obj)` method indicates if the object passed in argument is equal to the current instance. The default implementation of this method interprets that two objects are equal if and only if the memory address of the objects are same.

The `hashCode()` method returns an integer that represents the memory location of the object and this will be unique for each and every new instance.

However, the default implementation of the methods will have limitations as we cannot compare the custom objects on our own attributes.

Consider the following example for the limitation.

``` java
public static void main (String[]args) {
  Employee emp1 = new Employee(1,"foo");
  Employee emp2 = new Employee(1,"foo");
  System.out.println(emp1.equals(emp2)); //output :- false        
}
```
The example prints `false` because both the employee objects (though they have same attribute `id` which is `1`) are stored in different memory locations. Hence, they are not considered to be equal.

The above limitation can be resolved by overriding the `equals()` method of the `Employee` object.

``` java
@Override
public boolean equals(Object obj) {

  // If the object is null return false.
  if (obj == null) return false;

  // If the object is not an instance of Employee object return false.
  if (!(obj instanceof Employee))
    return false;

  // If the objects are stored in same memory address return true.
  if (obj == this)
    return true;
    
  // If the objects have same employee Id return true. 
  return this.getId() == ((Employee) obj).getId();
}
```

Now, the following example will print `true` as we are comparing the objects on the `id` attribute of the `Employee` object.

``` java
public static void main (String[]args) {
  Employee emp1 = new Employee(1,"foo");
  Employee emp2 = new Employee(1,"foo");
  System.out.println(emp1.equals(emp2)); //output : true        
}
```

#### More Information:
- [Oracle Java Docs : Equality Operators](https://docs.oracle.com/javase/specs/jls/se7/html/jls-15.html#jls-15.21)

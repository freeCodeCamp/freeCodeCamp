---
title: Generics
---

# Generics

Java Generics is a way to conviently use collections and classes for specific data types with out having to cast data back into the original data type. This prevents a lot of headache in the form of compile time and run time bugs. 

Simply put Generics lets you explicitly say that, for example an ArrayList object holds Integers so that when you call the get method you do not need to convert between Object and Integer. Below is an example of how you would have used an ArrayList prior to Generics.

```java
import java.util.ArrayList;

public class Example {
  private ArrayList classNames;
  
  public Example() {
    classNames = new ArrayList();
  }
  
  public void addName(String name) {
    classNames.add(name);
  }
  
  public String getNameAtIndex(int index) {
    return (String) classNames.get(index);
  }
}
```

The main problem with the above is if somehow an Object not of type String got added to the ArrayList then the `getNameAtIndex(int index)` method would result in a runtime error. To solve this we use Generics.

The syntax for Generics is very simple. Below is an example of instantiating an ArrayList.

```java
import java.util.ArrayList;

public class Example {
  private ArrayList<String> classNames;
  
  public Example() {
    classNames = new ArrayList<String>();
  }
  
  public void addName(String name) {
    classNames.add(name);
  }
  
  public String getNameAtIndex(int index) {
    return classNames.get(index);
  }
}
```

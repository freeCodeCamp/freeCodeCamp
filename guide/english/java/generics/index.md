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

The syntax to create your own Generic class would be as follows.

```java
import java.util.ArrayList;

public class Example <T> {
  private ArrayList<T> classNames;

  public Example() {
    classNames = new ArrayList<T>();
  }
  
  public void addName(T name) {
    classNames.add(name);
  }
  
  public T getNameAtIndex(int index) {
    return classNames.get(index);
  }
}
```

Note that inside the angular brackets when naming the class, you can ensure that the Generic type is something that 
you want. For example, if you wanted to make sure the type can be read as a form of String, you would go `<T extends String>`.

Note that the letter `T` is a placeholder, you could make that anything you like, as long as you use the same one 
throughout the class.



Type Erasure in Java Generics

One of the downsides to introducing generics in Java 1.5 was how to ensure backward compatibility (ie) to make sure existing programs continue to work 
and all existing libraries must be able to use generic types.

Erasure, literally means that the type information which is present in the source code is erased from the compiled bytecode.

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class GenericsErasure {
    public static void main(String args[]) {
        List<String> list = new ArrayList<String>();
        list.add("Hello");
        Iterator<String> iter = list.iterator();
        while(iter.hasNext()) {
            String s = iter.next();
            System.out.println(s);
        }
    }
}
```

If you compile this code and then decompile it with a Java decompiler, you will get something like this.
Notice that the decompiled code contains no trace of the type information present in the original source code.

```java
import java.io.PrintStream;
import java.util.*;

public class GenericsErasure
{

    public GenericsErasure()
    {
    }

    public static void main(String args[])
    {
        List list = new ArrayList();
        list.add("Hello");
        String s;
        for(Iterator iter = list.iterator(); iter.hasNext(); System.out.println(s))
            s = (String)iter.next();

    }
} 
```

When you compile some code against a generic type or method, the compiler works out what you really mean (i.e. what the type argument for T is) 
and verifies at compile time that you're doing the right thing, but the emitted code again just talks in terms of java.lang.Object - the compiler generates extra casts where necessary. 
At execution time, a List<String> and a List<Date> are exactly the same the extra type information has been erased by the compiler.
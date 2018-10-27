---
title: Strings
---
# Strings

Strings are sequences of characters. In Java, a `String` is an `Object`. Strings should not be confused with `char` as characters are literally a single value rather than a sequence of characters. You can still use a single value within a String, however, it is preferred to use `char` when you are checking for a single character.

```java
String course = "FCC";
System.out.println(course instanceof Object);
```

Output:
```
true
```

You can create a String Object in the following ways:

1. `String str = "I am a String"; //as a String literal`
1. `String str = "I am a " + "String"; //as a constant expression`
1. `String str = new String("I am a String"); //as a String Object using the constructor`

You might be thinking: What's the difference between the three?

Well, using the `new` keyword guarantees that a new `String` object will be created and a new memory location will be allocated in the `Heap`
memory [(click here to learn more)](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html). String
literals and constant String expressions are cached at compile time. The compiler puts them in the String Literal Pool to prevent duplicates
and improve memory consumption. Object allocation is expensive and this trick increases performance while instantiating Strings. If you use
the same literal again, the JVM uses the same object. Using the contructor like above is almost always a worse choice.

In this code snippet, how many String objects are created?

```java
String str = "This is a string";
String str2 = "This is a string";
String str3 = new String("This is a string");
```

The answer is: **2** String objects are created. `str` and `str2` both refer to the same object. `str3` has the same content but using `new` forced
the creation of a new, distinct, object.

When you create a String literal, the JVM internally checks, what is known as the `String pool`, to see if it can find a similar (content wise)
String object. If it finds it, it returns the same reference. Otherwise, it just goes ahead and creates a new String object in the pool so that
the same check can be performed in the future.

You can test this using the swallow, fast Object comparison `==` and the implemented `equals()`.

```java
System.out.println(str == str2); // This prints 'true'
System.out.println(str == str3); // This prints 'false'
System.out.println(str.equals(str3)); // This prints 'true'
```

Here's another example on how to create a string in Java using the different methods:

```java
public class StringExample{  

   public static void main(String args[]) {  
      String s1 = "java";  // creating string by Java string literal  
      char ch[] = {'s','t','r','i','n','g','s'};  
      String s2 = new String(ch);  // converting char array to string  
      String s3 = new String("example");  // creating Java string by new keyword  
      System.out.println(s1); // prints "java" 
      System.out.println(s2); // prints "strings"
      System.out.println(s3); // prints "example"
   }
}
```

#### Comparing Strings 
If you want to compare the value of two String variables, you can't use `==`. This is due to the fact that this will compare the references of the variables
and not the values that are linked to them. To compare the stored values of the Strings you use the `.equals()` method.

```java
boolean equals(Object obj)
```

It returns true if two objects are equal and false otherwise. 
```java
String str = "Hello world";
String str2 = "Hello world";

System.out.println(str == str2); // This prints true
System.out.println(str.equals(str2)); // This prints true
```
The first comparison is true because "==" looks at the references and they are the same, because the JVM simply returns a reference
to the same `"Hello world"` object created in the String Pool the first time.

The second comparison is true because the variables store the same values. In this case - `"Hello world"`.

We have several inbuilt methods in String. The following is an example of the String Length() method .

```java
public class StringDemo {

   public static void main(String args[]) {
      String palindrome = "Dot saw I was Tod";
      int len = palindrome.length();
      System.out.println( "String Length is : " + len );
   }
}
```
This will result in - `String Length is : 17`

<B>The answer is: 2 </B>   String objects are created.
**Notes**

1. String methods use zero-based indexes, except for the second argument of `substring()`.
2. The String class is final - it's methods can't be overridden.
3. When the String literal is found by JVM, it is added to string literal pool.
4. String class posses a method name `length()`, while arrays have an attribute naming length.
5. In java, string objects are immutable. Immutable simply means unmodifiable or unchangeable. Once string object is created its data or state can't be changed but a new string object is created.


String Length

The "length" of a string is just the number of chars in it. So "hi" is length 2 and "Hello" is length 5. The length() method on a string returns its length, like this:

```java
String a = "Hello";
int len = a.length();  // len is 5
```
#### Other comparison methods which can also be used on the String are :

1. equalsIgnoreCase() :- compares the string without taking into consideration the case sensitivity.

```java
String a = "HELLO";
String b = "hello";
System.out.println(a.equalsIgnoreCase(b));   // It will print true
```

2. compareTo :- compares the value lexicographically and returns an integer.

```java
String a = "Sam";
String b = "Sam";
String c = "Ram";
System.out.println(a.compareTo(b));       // 0
System.out.prinltn(a.compareTo(c));       // 1 since (a>b)
System.out.println(c.compareTo(a));       // -1 since (c<a)
```

#### Splitting Strings  
If you want to split a string into multiple parts it can easily be done through ```.split()``` this creates an array of the split up parts of the string.

Example of using a delimiter (",") to split a string
```java
String text = "Hello, World";
String[] textParts = text.split(",");
System.out.println(textParts[0]);
System.out.println(textParts[1]);
```
The result will be:

```
Hello
World
```
We can also split the string by specifing the start and end index of the characters in the string. We will do this using the Java function called ```.substring()```.

The ```.substring()``` method can be used in two ways. One with only the starting index and one with both the start and end index. Take note that the index starts from 0.
Example:
```java
String text = "Hello,My name is Bob";
System.out.println(text.substring(6));
```
Will produce
```
My Name is Bob
```
To use it with an ending index take note that the actual ending index is -1 of the value passed into the method.
Now using ```.substring()``` with an ending index
Example:
```
String text = "Hello,My name is Bob";
System.out.println(text.substring(6,8));

```
The result will be:
```
My
```
 ** String Is Immutable In Java: **
 String is one of the most used classes in any programming language. We know that String is immutable and final in java and java runtime maintains a String pool that makes it a special class.
 
 Let’s look at some benefits of String immutability, that will help in understanding why String is immutable in java.

1.) String pool is possible only because String is immutable in java, this way Java Runtime saves a lot of java heap space because different String variables can refer to same String variable in the pool. If String would not have been immutable, then String interning would not have been possible because if any variable would have changed the value, it would have been reflected to other variables also.
2) If String is not immutable then it would cause severe security threat to the application. For example, database username, password are passed as String to get database connection and in socket programming host and port details passed as String. Since String is immutable it’s value can’t be changed otherwise any hacker could change the referenced value to cause security issues in the application.
3) Since String is immutable, it is safe for multithreading and a single String instance can be shared across different threads. This avoid the usage of synchronization for thread safety, Strings are implicitly thread safe.
4)Strings are used in java classloader and immutability provides security that correct class is getting loaded by Classloader. For example, think of an instance where you are trying to load java.sql.Connection class but the referenced value is changed to myhacked.Connection class that can do unwanted things to your database.
5)Since String is immutable, its hashcode is cached at the time of creation and it doesn’t need to be calculated again. This makes it a great candidate for key in a Map and it’s processing is fast than other HashMap key objects. This is why String is mostly used Object as HashMap keys.
Above are some of the reasons I could think of that shows benefits of String immutability. It’s a great feature of Java String class and makes it special.
**More Information:**
- [String Documentation](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html)

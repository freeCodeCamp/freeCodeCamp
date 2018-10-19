---
title: StringBuffer and StringBuilder
---
# StringBuffer and StringBuilder

The `StringBuffer` and `StringBuilder` classes are used in the case where a string is to be modified multiple times.

Strings are immutable, but objects of type StringBuffer and StringBuilder can be modified.

StringBuilder and StringBuffer are largely smilar, except that StringBuilder not thread-safe (not synchronized), while StringBuffer is thread-safe.  StringBuilder does perform faster in most scenarios.

an Example of StringBuffer in use:

```java
public class App {

   public static void main(String args[]) {
      StringBuffer buffer = new StringBuffer("This is a test string");
      buffer.append(" buffer");
      System.out.println(buffer);  
   }
}
```

Output:
```
This is a test string buffer.
```
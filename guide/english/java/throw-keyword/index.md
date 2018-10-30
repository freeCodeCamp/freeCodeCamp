---
title: Throw
---

## throw
The Java throw keyword is used to explicitly throw an exception.You can throw either checked or uncheked exception in java by throw keyword. The throw keyword is mainly used to throw custom exception.

throw is used to throw any exception that is of type throwable.

***Example:***
```java
throw new ArithmeticException("/ by zero not permitted");

public int lengthOfString(String name){
  if(name == null){
      throw IllegalArgumentException("Can't find length for null");
  } 
  return name.length();
}

```

##### More resources

[Geeks for Geeks](https://www.geeksforgeeks.org/throw-throws-java/)


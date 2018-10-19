---
title: instanceof Operator
---
# `instanceof` operator

The `instanceof` operator allows you to check the validity of a `IS A` relationship. If at any point of time, we are not sure about this and we want to validate this at runtime, we can do the following:

```java
//assuming vehicle is an instance of Class `Car` the expression inside the 'if' will  return true
if(vehicle instanceof Car){
    //do something if vehicle is a Car
}
```

The `instanceof` operator can also save time while running the program, such as in the following override equals() method:

```java
//assuming this method belongs to class `Car`
@Override
public static boolean equals(Object o) {
    if(!(o instanceof Car) return false;
    //return whether the fields of the two Car objects are all equal
}
```

 **Note**: If you apply the instanceof operator with any variable that has null value, it returns false.

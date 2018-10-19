---
title: Final
---

## final
You use the `final` keyword to make a variable’s reference constant. A constant variable can only be declared and initialized, which means that the final variable’s reference can not be changed once set. A final variable also has special rules about initialization. If you assign a class variable as final, you can only initialize in the declaration statement and the static block, making it constant the throughout the whole program. If it is a instance variable, you can only initialize in the declaration statement, the instance initialization block, and the constructor, making it constant throughout the object. If it is a local variable, you may initialize it anywhere after it is declared but before the method ends, making it constant after it’s initialized for however long the method last. Lastly, if it is a parameter variable then the value that is passed in may not be changed, making it constant for however long the method lasts. The reference and value of a variable are different for objects, but the same for primitive types.

***Example:***
```java
class MyClass {
  public static final double PI = 3.14;
  public static void main(String[] args){
    System.out.println(PI);
  }
}
```
PI is now a constant. Any attempt to assign it a value will cause an error.

-----------------------------------------------------------------------------------------
If you make any method as final, you cannot override it.
```java
class Bike{  
  final void run(){System.out.println("running");}  
}  
     
class Honda extends Bike{  
   void run(){System.out.println("running safely with 100kmph");}  
     
   public static void main(String args[]){  
   Honda honda= new Honda();  
   honda.run();  
   }  
}  
```

Output wil be - 
  Output:Compile Time Error
  
---------------------------------------------------------------------------------------


If you make any class as final, you cannot extend it.
  
```java
final class Bike{}  
  
class Honda1 extends Bike{  
  void run(){System.out.println("running safely with 100kmph");}  
    
  public static void main(String args[]){  
  Honda1 honda= new Honda();  
  honda.run();  
  }  
}
```

Output will be-
 Output:Compile Time Error

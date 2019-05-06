---
title: Final
---

## final
You use the `final` keyword to mark a variable constant, so that it can be assigned only once. So you must initialize a final variable with a value. If its not initialized (when declared, inside Constructor or inside static blocks), compile time error will occur.

***Example:***
```java
class MyClass {
  public static final double PI = 3.14;
  public static void main(String[] args){
    System.out.println(PI);
  }
}
```
PI is now a constant. Any attempt to reassign the value for PI will cause an error.

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

#### More Information:
- [Oracle Java Docs - final variables](https://docs.oracle.com/javase/specs/jls/se7/html/jls-4.html#jls-4.12.4)
 

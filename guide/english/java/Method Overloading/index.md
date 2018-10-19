---
title: Method Overloading
---

<div>

 <h3>
  Method Overloading
 </h3>

 In this short tutorial we are going to see what is Method Overloading and how to implement it in Java<br>

 <strong>So What is method overloading ?</strong> <br>

Its a simple & easy concept. If two functions have same name but different parameters, then this concept is called method overloading.
 <br> 
 Now lets discuss this concept with percpective to Java. In java, there can be as many overloaded methods/functons as you want.
 It means <strong>functions within a class with same name but different parameters or order of parameters</strong>. The <strong>return type does not</strong> include in
 method overloading
 
 Lets see this with an example <br>
 
 ```java
 class A
 {
    int sum(int a, int b)
    {
      return a + b;
    }
    
    int sum(int a, int b, int c)    // Here method is overloading because parameters are different
    {
      return a + b + c;
    }
 }
 ```
 
 Similarly lets see another example
 ```java
 class A
 {
    void print(int a)
    {
      System.out.println(a);
    }
    
    void print(String a)    // This method is overloaded because method with name print already exists but that have a different parameter type
    {
      System.out.println(a);
    }
 }
 ```

 Note that the following is wrong and is not considered method overloading, Instead it will produce compile time error
 ```java
 class A
 {
    int method1(int x)
    {
      return x;
    }
    
    String method1(int x)    // This is not method overloading because only the return type is different but name & parameters are same
    {
      return "Hello" + x;
    }
 }
 ```
 
 But the following is true because parameter type is also different along with return type.
 ```java
 class A
 {
    int method1(int x)
    {
      return x;
    }
    
    String method1(String x)    // This is method overloading
    {
      return x;
    }
 }
 ```
 
 In summary we can say that Method Overloading is valid if:
 <ul>
  <li>Any of parameter type differ</li>
  <li>Order of parameters differ</li>
 </ul>
 But is not valid if
 <ul>
  <li>Only name is different but parameter types are same and also in same order</li>
 </ul>
 
</div>


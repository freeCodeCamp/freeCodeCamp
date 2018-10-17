---
title: Throws
localeTitle: 抛出
---
## 投

Java throws关键字用于声明异常。它向程序员提供了一个信息，即可能会出现异常，因此程序员最好提供异常处理代码，以便保持正常的流程。

**_例：_**

```java
import java.io.IOException; 
 class Testthrows1{ 
  void m()throws IOException{ 
    throw new IOException("device error");//checked exception 
  } 
  void n()throws IOException{ 
    m(); 
  } 
  void p(){ 
   try{ 
    n(); 
   }catch(Exception e){System.out.println("exception handled");} 
  } 
  public static void main(String args[]){ 
   Testthrows1 obj=new Testthrows1(); 
   obj.p(); 
   System.out.println("normal flow..."); 
  } 
 } 

```
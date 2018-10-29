---
title: Throws
localeTitle: Броски
---
## бросает

Ключевое слово Java throw используется для объявления исключения. Он дает информацию программисту о том, что может возникнуть исключение, поэтому программисту лучше предоставить код обработки исключений, чтобы можно было поддерживать нормальный поток.

**_Пример:_**

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
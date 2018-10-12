---
title: Throws
localeTitle: Lança
---
## lança

A palavra-chave throws do Java é usada para declarar uma exceção. Ele fornece uma informação para o programador de que pode ocorrer uma exceção, então é melhor para o programador fornecer o código de tratamento de exceção para que o fluxo normal possa ser mantido.

**_Exemplo:_**

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
---
title: Throws
localeTitle: Arroja
---
## arroja

La palabra clave de lanzamientos de Java se utiliza para declarar una excepción. Proporciona información al programador de que puede ocurrir una excepción, por lo que es mejor que el programador proporcione el código de manejo de excepciones para que se pueda mantener el flujo normal.

**_Ejemplo:_**

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
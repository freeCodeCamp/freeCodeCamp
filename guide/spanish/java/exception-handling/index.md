---
title: Exceptions in Java
localeTitle: Excepciones en Java
---
## ¿Qué es una excepción?

Una excepción es un evento no deseado o inesperado, que ocurre durante la ejecución de un programa, es decir, en tiempo de ejecución, que interrumpe el flujo normal de las instrucciones del programa.

## Error vs excepción

Error: un error indica un problema grave que una aplicación razonable no debería intentar capturar. Excepción: la excepción indica las condiciones que una aplicación razonable podría intentar capturar.

## Jerarquía de excepciones

Todos los tipos de excepción y error son subclases de la clase Throwable, que es la clase base de jerarquía. Una rama está encabezada por excepción. Esta clase se usa para condiciones excepcionales que los programas de usuario deberían capturar. NullPointerException es un ejemplo de dicha excepción. En otra rama, el sistema de tiempo de ejecución de Java (JVM) utiliza los errores para indicar errores relacionados con el entorno de tiempo de ejecución (JRE). StackOverflowError es un ejemplo de dicho error.

## Cómo usar la cláusula try-catch
```
try { 
 // block of code to monitor for errors 
 // the code you think can raise an exception 
 } 
 catch (ExceptionType1 exOb) { 
 // exception handler for ExceptionType1 
 } 
 catch (ExceptionType2 exOb) { 
 // exception handler for ExceptionType2 
 } 
 // optional 
 finally { 
 // block of code to be executed after try block ends 
 } 

```
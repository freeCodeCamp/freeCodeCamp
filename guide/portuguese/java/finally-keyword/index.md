---
title: Finally
localeTitle: Finalmente
---
## finalmente

O bloco finally sempre é executado quando o bloco try é encerrado. Isso garante que o bloco finally seja executado, mesmo que ocorra uma exceção inesperada. Mas, finalmente, é útil para mais do que apenas o tratamento de exceções - ele permite que o programador evite que o código de limpeza seja ignorado acidentalmente por um retorno, continuar ou interromper. Colocar o código de limpeza em um bloco finally é sempre uma boa prática, mesmo quando nenhuma exceção é esperada.

**_Exemplo:_**

```java
try { 
   // Normal execution path 
   throw new EmptyStackException(); 
 } catch (ExampleException ee) { 
   //  deal with the ExampleException 
 } finally { 
   // This optional section is executed upon termination of any of the try or catch blocks above, 
   //  except when System.exit() is called in "try" or "catch" blocks; 
 } 

```
---
title: Exceptions in Java
localeTitle: Exceções em Java
---
## O que é uma exceção?

Uma exceção é um evento indesejado ou inesperado, que ocorre durante a execução de um programa, ou seja, no tempo de execução, que interrompe o fluxo normal das instruções do programa.

## Erro vs exceção

Erro: Um erro indica um problema sério que um aplicativo razoável não deve tentar capturar. Exceção: Exceção indica condições que um aplicativo razoável pode tentar capturar.

## Hierarquia de exceções

Todos os tipos de exceção e erros são subclasses da classe Throwable, que é a classe base da hierarquia.Um branch é liderado por Exception. Essa classe é usada para condições excepcionais que os programas do usuário devem capturar. NullPointerException é um exemplo de uma exceção. Outra ramificação, Erro, é usada pelo Java run-time system (JVM) para indicar erros relacionados ao próprio ambiente de tempo de execução (JRE). StackOverflowError é um exemplo de tal erro.

## Como usar a cláusula try-catch
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
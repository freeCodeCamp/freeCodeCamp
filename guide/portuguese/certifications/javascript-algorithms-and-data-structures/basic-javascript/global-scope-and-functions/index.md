---
title: Global Scope and Functions
localeTitle: Âmbito global e funções
---
## Âmbito global e funções

O escopo de uma variável é sua visibilidade; onde no código está a função disponível? Aqui está uma lista dos diferentes escopos que uma variável pode ter.

*   **Escopo global** : a variável está disponível em todo o código
*   **Escopo local** : Disponível apenas em uma determinada área (como somente dentro da função)
*   **Escopo do bloco** : disponível dentro de uma área _ainda mais específica_ (como uma declaração if)

Sua tarefa é entender como adicionar `var` (e não adicionar) antes de um nome de variável, pode alterar o escopo da variável.

Quando você adiciona `var` antes do nome da variável, seu escopo é determinado por onde é colocado. Igual a:

```javascript
var num1 = 18; // Global scope 
 function fun() { 
  var num2 = 20; // Local (Function) Scope 
  if (true) { 
    var num3 = 22; // Block Scope (within an if-statement) 
  } 
 } 
```

Quando você não faz, este é o resultado:

```javascript
num1 = 18; // Global scope 
 function fun() { 
  num2 = 20; // Global Scope 
  if (true) { 
    num3 = 22; // Global Scope 
  } 
 } 
```

Tudo bem, aqui está a solução básica de código.

```javascript
// Declare your variable here 
 var myGlobal = 10; 
 
 function fun1() { 
  oopsGlobal = 5; 
 
 } 
 
 // Only change code above this line 
 function fun2() { 
  var output = ""; 
  if (typeof myGlobal != "undefined") { 
    output += "myGlobal: " + myGlobal; 
  } 
  if (typeof oopsGlobal != "undefined") { 
    output += " oopsGlobal: " + oopsGlobal; 
  } 
  console.log(output); 
 } 

```
---
title: Global Scope and Functions
localeTitle: Глобальная область и функции
---
## Глобальная область и функции

Объем переменной - ее видимость; где в коде функция доступна? Вот список различных областей, которые может иметь переменная.

*   **Глобальная область** : переменная доступна во всем коде
*   **Локальная область** : доступна только в определенной области (например, только внутри функции)
*   **Область блока** : доступна в _еще более_ определенной области (например, if-statement)

Ваша задача - понять, как добавление `var` (а не добавление) перед именем переменной может изменить область переменной.

Когда вы добавляете `var` перед именем переменной, его область определяется по месту ее размещения. Вот так:

```javascript
var num1 = 18; // Global scope 
 function fun() { 
  var num2 = 20; // Local (Function) Scope 
  if (true) { 
    var num3 = 22; // Block Scope (within an if-statement) 
  } 
 } 
```

Когда вы этого не сделаете, это результат:

```javascript
num1 = 18; // Global scope 
 function fun() { 
  num2 = 20; // Global Scope 
  if (true) { 
    num3 = 22; // Global Scope 
  } 
 } 
```

Хорошо, вот основное решение для кода.

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
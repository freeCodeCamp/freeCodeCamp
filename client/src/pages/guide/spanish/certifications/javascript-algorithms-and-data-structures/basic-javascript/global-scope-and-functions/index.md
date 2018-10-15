---
title: Global Scope and Functions
localeTitle: Ámbito global y funciones
---
## Ámbito global y funciones

El alcance de una variable es su visibilidad; ¿En qué parte del código está disponible la función? Aquí hay una lista de los diferentes ámbitos que puede tener una variable.

*   **Ámbito global** : la variable está disponible en todo el código.
*   **Alcance local** : Disponible solo en un área determinada (como solo dentro de la función)
*   **Ámbito de bloque** : disponible dentro de un área _aún más_ cierta (como una sentencia if)

Su tarea es entender cómo agregar `var` (y no agregar) antes del nombre de una variable, puede cambiar el alcance de la variable.

Cuando agrega `var` antes del nombre de la variable, su alcance está determinado por el lugar donde se coloca. Al igual que:

```javascript
var num1 = 18; // Global scope 
 function fun() { 
  var num2 = 20; // Local (Function) Scope 
  if (true) { 
    var num3 = 22; // Block Scope (within an if-statement) 
  } 
 } 
```

Cuando no lo haces, este es el resultado:

```javascript
num1 = 18; // Global scope 
 function fun() { 
  num2 = 20; // Global Scope 
  if (true) { 
    num3 = 22; // Global Scope 
  } 
 } 
```

Muy bien, aquí está la solución de código básico.

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
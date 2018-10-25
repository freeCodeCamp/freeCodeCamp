---
title: JSON Syntax
localeTitle: JSON sintaxis
---
## Sintaxis de JSON

La sintaxis JSON es un subconjunto de la sintaxis de JavaScript.

### Reglas de sintaxis JSON

*   El objeto JSON es un conjunto desordenado de pares de nombre / valor.
*   Los nombres de los objetos van seguidos de dos puntos (:).
*   Las llaves {} se utilizan para sostener objetos. El objeto comienza con {(corchete izquierdo) y termina con} (tirante derecho).
*   Los datos del objeto JSON se representan como una colección de pares nombre / valor.
*   Cada par de nombre / valor está separado por coma (,)
*   Las abrazaderas cuadradas \[\] se utilizan para mantener matrices.

### Datos JSON - Un nombre y un valor

Los datos JSON se escriben como pares de nombre / valor.

Un par de nombre / valor consiste en un nombre de campo (entre comillas dobles), seguido de dos puntos, seguido de un valor:
```
"handle":"moghya" 
```

*   Los nombres de JSON requieren comillas dobles.

### JSON - Evalúa a los objetos de JavaScript

El formato JSON es casi idéntico a los objetos de JavaScript.

En JSON, las claves deben ser cadenas, escritas con comillas dobles:

*   JSON
```
"handle":"moghya" 
```

*   JavaScript
```
handle:"moghya" 
```

### Valores de JSON

En JSON, los valores deben ser uno de los siguientes tipos de datos:

*   una cuerda
*   un número
*   un objeto (objeto JSON)
*   una matriz
*   un booleano
*   nulo

En JavaScript, los valores pueden ser todos los anteriores, además de cualquier otra expresión válida de JavaScript, incluyendo:

*   Una función
*   una cita
*   indefinido

### JSON usa la sintaxis de JavaScript

Debido a que la sintaxis JSON se deriva de la notación de objetos de JavaScript, se necesita muy poco software adicional para trabajar con JSON dentro de JavaScript.

Con JavaScript puede crear un objeto y asignarle datos, de esta manera:
```
var person = { 
  "name":"Shubham", 
  "age":21, 
  "handle":"moghya", 
  "website":"http://moghya.me/" 
  }; 
```

Puedes acceder a un objeto de JavaScript como este:
```
//returns moghya 
 person.handle; 
```

También se puede acceder de esta manera:
```
//returns http://moghya.me/ 
 person["website"]; 
```

### Arreglos en JSON
```
var team = { 
  "name":"novatoscript", 
  "members" : 
  [ 
    { 
      "name":"Shubham Sawant", 
      "age":21, 
      "handle":"moghya", 
      "website":"http://moghya.me", 
    }, 
    { 
      "name":"Saurabh Banore", 
      "age":21, 
      "handle":"banoresaurabh", 
      "website":"http://banoresaurabh.me/", 
    } 
  ] 
 } 
```

### Ejemplo

¡Un gran ejemplo de JSON está [aquí!](http://moghya.me/js/profile.json) .
---
title: Add New Properties to a JavaScript Object
localeTitle: Agregar nuevas propiedades a un objeto de JavaScript
---
Puedes agregar nuevas propiedades a los objetos JavaScript existentes de la misma manera en que los modificarías.

Hay dos sintaxis diferentes, la notación de puntos y la notación de corchetes. La notación de puntos se prefiere en general por su legibilidad pero las propiedades deben tener un identificador válido.

Aquí se muestra cómo usar la notación de puntos:
```javascript
myDog.bark = "woof-woof"; 
```

Aquí se muestra cómo usar la notación de corchetes:

```javascript
myObject['bark'] = "woof-woof"; 
```

Usando la notación de corchetes, podemos utilizar variables como nombres de las propiedades:

```javascript
var dynamicProperty = "bark"; 
 myObject[dynamicProperty] = "woof-woof"; 

```

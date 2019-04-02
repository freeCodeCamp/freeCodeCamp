---
title: Add New Properties to a JavaScript Object
localeTitle: Agregar nuevas propiedades a un objeto de JavaScript
---
Puede agregar nuevas propiedades a los objetos JavaScript existentes de la misma manera que los modificaría.

Hay dos sintaxis diferentes, notación de puntos y notación de corchetes. La notación de puntos generalmente se prefiere por legibilidad, pero las propiedades deben ser un identificador válido.

Aquí es cómo usar la notación de puntos:
```
myDog.bark = "woof-woof"; 
```

Aquí es cómo usar la notación de soporte:

```javascript
myObject['bark'] = "woof-woof"; 
```

Usando la notación de corchetes, podemos utilizar variables como nombres de propiedades:

```javascript
var dynamicProperty = "bark"; 
 myObject[dynamicProperty] = "woof-woof"; 

```
---
title: Build JavaScript Objects
localeTitle: Construir objetos de JavaScript
---
Los objetos son útiles para almacenar datos de una manera estructurada y se pueden usar para representar objetos del mundo real, como un automóvil o un hotel en una computadora.

Los objetos son similares a las matrices, excepto que, en lugar de utilizar índices para acceder y modificar sus datos, puede acceder a los datos de los objetos a través de lo que se denomina propiedades. Hay dos formas principales para crear objetos: el Objeto Literal y el Constructor.

Usando la forma Literal de objetos, aquí es cómo crearíamos un objeto de muestra:
```
var cat = { 
    name: "Whiskers", 
    legs: 4, 
    tails: 1, 
    enemies: ["Water", "Dogs"] 
 }; 
```

Usando el modo Constructor, aquí se muestra cómo crearíamos un objeto de muestra:
```
var cat = new Object(); 
 cat.name = "Whiskers"; 
 cat.legs = 4; 
 cat.tails = 1; 
 cat.enemies = ["Water", "Dogs"]; 
```

En la forma de Constructor, usamos la `new` palabra clave junto con `Object` (con mayúscula 'O') para crear una nueva instancia de objeto. Luego, usamos la notación de puntos para asignar los nombres de propiedad y los valores del objeto.
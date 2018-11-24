---
title: HTML DOM getElementById Method
localeTitle: HTML DOM getElementById Método
---
El método `getElementById()` devuelve el elemento que tiene el atributo id con el valor especificado. Toma un argumento, que es una cadena que distingue entre mayúsculas y minúsculas del id para el elemento que desea.

Este método es uno de los métodos más comunes en el DOM de HTML y se usa casi cada vez que quiera manipular u obtener información de un elemento de su documento. Aquí hay un ejemplo simple de la sintaxis:

**Contenido HTML:**

```html

<div id="demo"></div> 
```

**Contenido de JavaScript:**

```javascript
document.getElementById("demo"); // Returns the element with id "demo" 
```

Si tiene más de un elemento con el mismo valor de `id` (¡mala práctica!), `getElementById` devolverá el primer elemento encontrado:

```html

<div id="demo">First</div> 
 <div id="demo">Second</div> 
```

```javascript
document.getElementById("demo"); // Returns the element with id "demo" containing 'First' 
```

#### Más información:

[document.getElementById ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

#### Soluciones alternativas:

Una alternativa de uso común para `document.getElementById` es usar un selector jQuery que puede leer más [aquí](https://github.com/freeCodeCamp/guides/tree/master/src/pages/jquery) .
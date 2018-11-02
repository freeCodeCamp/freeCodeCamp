---
title: Override Class Declarations by Styling ID Attributes
localeTitle: Anular declaraciones de clase por atributos de ID de estilo
---
## Anular declaraciones de clase por atributos de ID de estilo

Para comprender la anulación en CSS, primero debe comprender el principio de la prioridad en CSS.

La regla clave a recordar es que el CSS se lee de abajo hacia arriba.

Un ejemplo de esto es:

```html

<style> 
  body { 
    background-color: black; 
    font-family: Arial; 
    color: black; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  } 
 </style> 
 <h1 class="red-text blue-text">Example</h1> 
```

En el ejemplo anterior, el `Example` texto estará en azul porque la última clase agregada fue `blue-text` .

**Es clave recordar que un atributo `id` tendrá prioridad sobre las clases, lo que significa que ocupa el lugar más alto.**

Puede crear un atributo de `id` agregando el `#` antes del nombre de la clase, como a continuación:

```html

<style> 
  #purple-text { 
    color: purple; 
  } 
 </style> 
```

Este es un ejemplo para mostrarle cómo **anular declaraciones de clase mediante atributos de ID de estilo** :

```html

<style> 
  body { 
    background-color: black; 
    font-family: Arial; 
    color: black; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  } 
  #green-color { 
    color: green; 
  } 
 </style> 
 <h1 id="green-color" class="red-text blue-text">Example</h1> 
```

Esto hará que el `Example` texto sea verde porque el atributo `id` siempre tendrá prioridad sobre `class` declaraciones de `class` .
---
title: Give a Background Color to a div Element
localeTitle: Dar un color de fondo a un elemento div
---
## Dar un color de fondo a un elemento div

Puede cambiar el `color` `background` a un elemento `div` (o sección) de una de dos maneras.

**El primer método:**

Crear una `class` en los corchetes de estilo.

```html

<style> 
 .blue-background { 
    background-color: blue; 
  } 
 </style> 
```

Luego puede agregar la `class` a su elemento `div` :

```html

<div class="blue-background"> 
  <p> Example </p> 
 </div> 
```

**El segundo método:**

En lugar de crear una `class` como en el primer método, puede crear una `class` `div` Element en los corchetes de estilo.

Cada elemento `div` tendrá la `class` que creaste y asignaste.

(Esto significa que es una `class` que se repite para cada elemento `div` que crees).

```html

<style> 
  div { 
    background-color: blue; 
  } 
 </style> 

```
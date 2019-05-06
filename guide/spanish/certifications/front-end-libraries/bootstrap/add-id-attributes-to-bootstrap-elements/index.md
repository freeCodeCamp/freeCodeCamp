---
title: Add id Attributes to Bootstrap Elements
localeTitle: Añadir atributos de ID a los elementos Bootstrap
---
## Añadir atributos de ID a los elementos Bootstrap

El último desafío te hizo agregar una clase a los elementos de tu botón, esta vez tienes que agregar id (s) a los div (s) que tienen la clase well.

### Sugerencia 1

Una identificación se declara de la siguiente manera:

```html

<element id="id(s)List"></element> 
```

### Sugerencia 2

Editar las etiquetas div que tienen la clase bien

### Sugerencia 3

Utilice diferentes ID para ambas cajas.

### Sugerencia 4

Dale a la caja de la izquierda la identificación de `left-well` y a la caja de la derecha la identificación de `right-well` .

### Solución

Dado que tiene que agregar ID (s) a ambas cajas y tener ambos con un ID único, la siguiente es la solución:

```html

<div class="container-fluid"> 
  <h3 class="text-primary text-center">jQuery Playground</h3> 
  <div class="row"> 
    <div class="col-xs-6"> 
      <div class="well" id="left-well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
    <div class="col-xs-6"> 
      <div class="well" id="right-well"> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
        <button class="btn btn-default target"></button> 
      </div> 
    </div> 
  </div> 
 </div> 

```

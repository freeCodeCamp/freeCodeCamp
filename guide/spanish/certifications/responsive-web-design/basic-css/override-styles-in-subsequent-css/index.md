---
title: Override Styles in Subsequent CSS
localeTitle: Anular estilos en CSS subsiguiente
---
## Anular estilos en CSS subsiguiente

El bit más importante que se debe recordar cuando se desea anular los estilos en el CSS subsiguiente es el orden en que se crean las clases.

El último estilo actualizado tendrá prioridad sobre las clases escritas anteriormente.

Por ejemplo:

```html

<style> 
  body { 
    color: purple; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  { 
 </style> 
```

Ahora, cuando cree cualquier texto en el `body` , tendrá asignado el color `purple` del texto.

Para comenzar a experimentar con el proceso de anulación, ahora puede agregar la clase de `"red-text"` para ver los resultados.

Usando el formato anterior, el texto a continuación anulará el `purple` fuente `purple` anterior con `red` .

```html

<h1 class="red-text">Example</h1> 
```

Cuando quieras agregar varias clases, puedes usar este formato:

```html

<h1 class="class-name1 class-name2 class-name3">Example</h1> 
```

Ahora puede agregar la última clase creada anteriormente ( `"blue-text"` ) al mismo ejemplo anterior para ver los resultados.

```html

<h1 class="red-text blue-text">Example</h1> 
```

Esto seleccionará automáticamente la última clase creada en la sección de estilos, que en este caso fue `"blue-text"` .

Incluso si aplica el `red-text` primera clase detrás del `blue-text` segunda clase, el proceso de anulación elegirá la última clase creada. En este caso, esa clase es el `blue-text` .

Así por ejemplo:

```html

<h1 class="blue-text red-text">Example</h1> 
```

Esto seguirá mostrando un `blue` fuente `blue` debido al orden en la sección de estilos.

La clase de `blue-text` se creó en último lugar, hacia la parte inferior ( `</style>` ).
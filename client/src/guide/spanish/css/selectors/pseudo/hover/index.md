---
title: Hover
localeTitle: Flotar
---
## Flotar

La pseudo-clase `selector:hover` se activa cuando interactúa con el elemento (selector) con un dispositivo señalador, generalmente un puntero del mouse. Los estilos del elemento sobre el que se desplace el mouse serán reemplazados por el estilo definido en el `selector:hover` pseudo-class. Para diseñar los enlaces / elementos correctamente, las reglas deben definirse en el orden: : enlace -: visitó -: hover -: activo

**Sintaxis:**

```css
 selector:hover { 
    css declarations; 
 } 
```

## Más ejemplos

A continuación se muestran algunos ejemplos más complejos de lo que puede hacer con la pseudo-clase `:hover` . Tenga en cuenta que el `.second` div **debe** venir después de la `.first` div en todos estos ejemplos.

1.  Cuando se desplaza sobre un elemento, cambie un hermano adyacente.

```html

<style> 
  .first:hover + .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first">First</div> 
 <div class="second">Second</div> 
```

El código anterior cambiará el color de fondo de `.second` a azul cuando `.second` sobre `.first` .

2.  Cuando se desplaza sobre un elemento, cambie a un hermano general.

```html

<style> 
  .first:hover ~ .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first">First</div> 
 <div class="middle">Middle</div> 
 <div class="second">Second</div> 
```

Este ejemplo ofrece un poco más de flexibilidad, ya que los dos elementos ya no tienen que estar directamente adyacentes.

3.  Cuando se desplaza sobre un elemento, cambie un descendiente directo.

```html

<style> 
  .first:hover > .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first"> 
  First 
  <div class="second">Second</div> 
 </div> 
```

El código anterior cambiará el color de fondo de `.second` a azul cuando `.second` sobre `.first` .

4.  Cuando se desplaza sobre un elemento, cambie un descendiente general.

```html

<style> 
  .first:hover .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first"> 
  First 
  <div class="container"> 
    Container 
    <div class="second">Second</div> 
  </div> 
 </div> 
```

Como en el ejemplo 2, esto también brinda más flexibilidad, ya que los dos elementos ya no tienen que estar directamente adyacentes. Notará que el área que se puede desplazar es más grande en los ejemplos 3 y 4. Esto sucede porque todavía está sobre `.first` siempre que el cursor esté sobre uno de sus elementos secundarios.

#### Más información:

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover) [w3schools](https://www.w3schools.com/cssref/sel_hover.asp)
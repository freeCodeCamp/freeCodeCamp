---
title: CSS3 Transitions
localeTitle: Transiciones CSS3
---
## Transiciones CSS3

El uso de **Transiciones** CSS3 puede ser útil si desea que su aplicación o su página web sean más dinámicas y de buen aspecto.

De hecho, las transiciones le permiten cambiar los valores de las propiedades ( `width` , `color` , ...) de manera **suave** .

La propiedad de `transition` es una propiedad abreviada de propiedad de `transition-property` , `transition-duration` `transition-timing-function` , `transition-timing-function` `transition-delay` , la sintaxis es la siguiente:

```css
transition: transition-property transition-duration transition-timing-function transition-delay 
```

Por ejemplo :
```
transition: width 2s ease-in-out 1s; 
```

### Descripción de las propiedades.

#### `transition-property`

Especifique el **nombre** de la propiedad a la que debe aplicar una transición:

*   `background-color`
*   `color`
*   `width`
*   `height`
*   `margin`
*   `border-radius`
*   Y así !

Por ejemplo :
```
transition-property: width; /* means the transition applies on the width */ 
```

#### `transition-duration`

Especifique el **número de segundos o milisegundos que** la transición debe **tomar** :

Por ejemplo :
```
transition-duration: 2s /* means the transition effect last 2s */ 
```

#### `transition-timing-function`

Especifique la **curva** de **velocidad** del efecto de transición. Por lo tanto, puede cambiar **la velocidad de** su **transición a lo largo de su duración** .

Aquí están los valores más utilizados:

*   `linear`
*   `ease`
*   `ease-in`
*   `ease-out`
*   `ease-in-out`
*   `cubic-bezier(n, n, n, n)`

Por ejemplo :

```css
transition-timing-function: linear 
```

NB: Todos los valores anteriores son, de hecho, específicos de `cubic-bezier` . `linear` , por ejemplo, es equivalente a `cubic-bezier(0.25,0.1,0.25,1)`

Puedes experimentar y aprender más sobre _Cubic Bezier_ [aquí](http://cubic-bezier.com/)

#### `transition-delay`

Especifique en **segundos o milisegundos** cuando se **iniciará** la transición.

Por ejemplo :
```
transition-delay: 1s /* means wait 1s before the transition effect start */ 
```

### ¿Cómo usar las transiciones?

Puedes escribir una transición de dos maneras:

#### Usando la propiedad de taquigrafía ( `transition` )

```css
div { 
  width: 200px; 
  transition: all 1s ease-in-out; 
 } 
 
 div:hover { 
  width: 300px; 
 } 
```

#### Dar un valor a todas las propiedades de transición

```css
div { 
  width: 200px; 
  transition-property: width; 
  transition-duration: 1s; 
  transition-timing-function: ease-in-out; 
 } 
```

NB: ambos ejemplos son **equivalentes**

### Ejemplos

Aquí hay algunos bolígrafos simples que contienen transiciones simples:

*   [Transiciones basicas](https://codepen.io/thomlom/pen/gGqzNp)
*   [Transiciones + JavaScript](https://codepen.io/thomlom/pen/JrxZKz?editors=1111)

#### Más información:

*   [w3schools: CSS3 Transitions](https://www.w3schools.com/css/css3_transitions.asp)
*   [Documentos web MDN: Usando transiciones CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
*   [DevTips: CSS Transition](https://www.youtube.com/watch?v=8kK-cA99SA0)
---
title: Selectors
localeTitle: Selectores
---
# Selectores

Los selectores son reglas CSS para segmentar elementos HTML para aplicar estilos. Los nombres de etiquetas, nombres de clase, id y atributos son algunos de los ganchos utilizados como selectores.

## Sintaxis del selector

Los selectores dispuestos en una secuencia específica se acumularían en una regla para los elementos de destino. Un ejemplo,

```css
/* selects anchor tags */ 
 a { 
    color: orange; 
 } 
 
 /* selects elements with hero class */ 
 .hero { 
    text-align: center; 
 } 
```

## Tipo de selectores

Tipo | Descripción ------- | ------------ Selectores de tipo | Los nombres de etiquetas se utilizan para seleccionar elementos como `h1` o `a` . Selector universal | Selector que aplica a todos los elementos. `div *` coincide con todos los elementos dentro de los elementos div. Selector de atributos | Los selectores que apuntan a los elementos en función de sus atributos \[y, opcionalmente, sus valores\]. `h1[title]` selecciona elementos `h1` con atributo de `title` . Selector de clase | Selector que apunta a los elementos utilizando sus nombres de clase. Selector de ID | Selector que usa ID para apuntar elementos. `#logo` selecciona el elemento con `logo` como ID. Selector de pseudo-clase | Selectores especiales que apuntan a elementos en función de su estado. `a:hover` selector a `a:hover` aplica estilo cuando el puntero se desplaza sobre los enlaces.

## Selector Combinadores

Combinador | Propósito ----------- | ------------ `white space` | Combinador de descendientes. `.nav li` selecciona todos los hijos de `li` dentro de la clase `.nav` , incluidos los elementos de `li` anidados. `>` | Combinador de niños. `.menu > li` selecciona todos los li que son hijos directos de elementos con la clase `.menu` . `+` | Combinador de hermanos adyacentes. `.logo + h1` apunta a `h1` que es un hermano inmediato de la clase `.logo` . `~` | Combinador general de hermanos. `header ~ div` apunta a elementos `div` que son hermanos a elementos de `header` .

Esta sección detalla todos estos electores.

#### Más información:

Puede aprender más sobre los selectores en estos recursos:

*   [Especificación oficial de los selectores CSS3](https://www.w3.org/TR/css3-selectors)
*   [Página de selectores en la red de desarrolladores de Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)
*   [Selector de CSS Cheat Sheet en FreeCodeCamp Guides](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet)

Los selectores en CSS (hojas de estilo en cascada) se determinan en función de la _especificidad_ , con esto podemos ser más específicos en nuestras reglas de estilo y anular otras reglas que pueden apuntar al mismo elemento pero no son tan específicas. La forma en que funciona esta jerarquía específica se basa en el peso, lo que significa que un Selector de elemento tiene un peso de 1 (uno), un selector de clase tiene un peso de 10 (diez) y un selector de ID tiene un peso de Cien (100). Podemos combinar diferentes selectores juntos para ser más específicos sobre el elemento que deseamos cambiar.

Como ejemplo:

`css p { color: blue; } p .red { color: red; }` Nuestro selector de tipo p seleccionará todos los elementos p en nuestro documento html, pero solo tiene un peso de uno. en contraste, el selector de clase tiene un peso de 11 por la razón por la que estamos combinando un selector de tipo con un selector de clase (este selector hace coincidir todos los elementos p con una clase de rojo). - \* Las reglas dirigidas directamente siempre tendrán prioridad sobre las reglas que heredan elementos de su antecesor. - \* La especificidad solo se aplica cuando varias declaraciones apuntan al mismo elemento, solo entonces se aplica esta regla.  
\- \* la especificidad suele ser la razón por la que algunas de las reglas de estilo no se aplican a los elementos cuando se espera que lo hagan.
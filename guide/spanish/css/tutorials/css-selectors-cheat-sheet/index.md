---
title: CSS Selectors Cheat Sheet
localeTitle: Selector de CSS Cheat Sheet
---
# Selectores de CSS

En CSS, los selectores son patrones utilizados para seleccionar elementos DOM.

Aquí hay un ejemplo de uso de selectores. En el siguiente código, `a` y `h1` son selectores:

```css
a { 
  color: black; 
 } 
 
 h1 { 
  font-size 24px; 
 } 
```

## Trucos de la lista de selectores

| Selector Selecciona |  
| --- | --- | | `head` | selecciona el elemento con la etiqueta `head` |  
| `.red` | selecciona todos los elementos con la clase 'roja' |  
| `#nav` | selecciona los elementos con el id 'nav' |  
| `div.row` | selecciona todos los elementos con la etiqueta `div` y la clase 'fila' | | `[aria-hidden="true"]` | selecciona todos los elementos con el atributo `aria-hidden` con un valor de "true" | | `*` | Selector de comodines. Selecciona todos los elementos DOM. Ver abajo para usarlo con otros selectores |

Podemos combinar selectores de maneras interesantes. Algunos ejemplos:

| Selectores | Selecciona |  
| --- | --- | | `li a` | Combinador descendiente de DOM. Todos `a` etiquetas que son un niño de `li` etiquetas |  
| `div.row *` | selecciona todos los elementos que son descendientes (o secundarios) de los elementos con etiqueta `div` y clase 'fila' |  
| `li > a` | Combinador de diferencias. Seleccione descendientes directos, en lugar de todos los descendientes como los selectores descendientes |  
| `li + a` | El combinador adyacente. Selecciona el elemento que está precedido inmediatamente por el elemento anterior. En este caso, solo el primero `a` después de cada `li` . |  
| `li, a` | Selecciona todos `a` elementos y todas las `li` elementos. |  
| `li ~ a` | El combinador de hermanos. Selecciona `a` elemento siguiendo un elemento `li` . |

Los pseudo-selectores o clases pseudoestructurales también son útiles para seleccionar elementos estructurales del DOM. Éstos son algunos de ellos:

| Selectores | Selecciona | | --- | --- |  
| `:first-child` | Dirigir el primer elemento inmediatamente dentro (o hijo de) otro elemento |  
| `:last-child` | Dirigir el último elemento inmediatamente dentro (o hijo de) otro elemento |  
| `:nth-child()` | Dirigir el elemento n inmediatamente dentro (o hijo de) otro elemento. Admite enteros, `even` , `odd` o fórmulas |  
| `a:not(.name)` | Selecciona todos `a` elementos que no son de la `.name` clase |  
| `::after` | Permite insertar contenido en una página desde CSS, en lugar de HTML. Si bien el resultado final no está realmente en el DOM, aparece en la página como si lo estuviera. Este contenido se carga después de elementos HTML. |  
| `::before` | Permite insertar contenido en una página desde CSS, en lugar de HTML. Si bien el resultado final no está realmente en el DOM, aparece en la página como si lo estuviera. Este contenido se carga antes que los elementos HTML. |

Podemos usar pseudo-clases para definir un estado especial de un elemento del DOM pero no apuntan a un elemento por sí mismos. Algunos ejemplos:

| Pseudo-clase | Selecciona | | --- | --- | | `:hover` | selecciona un elemento que está siendo movido por un puntero del mouse |  
| `:focus` | selecciona un elemento que recibe el foco desde el teclado o programatamente | | `:active` | selecciona un elemento haciendo clic con el puntero del mouse |  
| `:link` | selecciona todos los enlaces en los que aún no se ha hecho clic |  
| `:visited` | selecciona un enlace que ya ha sido pulsado |

## Juegos

[CSS Diner](http://flukeout.github.io) es un juego web que enseña casi todo lo que hay que saber sobre la combinación de selectores.

## Referencia adicional

¡Hay muchos más selectores de CSS! Conozca más sobre ellos en [CodeTuts](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048) , [CSS-tricks.com](https://css-tricks.com/almanac/selectors/) , [w3schools.com](http://www.w3schools.com/cssref/css_selectors.asp) o en [Mozilla Developer Network](https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors) .
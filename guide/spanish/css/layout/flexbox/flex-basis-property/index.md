---
title: Flex Basis Property
localeTitle: Propiedad de base de Flex
---
# Base de Flexión

`flex-basis` propiedad de `flex-basis` define el tamaño del `flex-item` largo del eje principal del contenedor flexible. El eje principal es horizontal si `flex-direction` se establece en `row` y será vertical si la propiedad de la `flex-direction` se establece en `column` .

## Sintaxis

```css
flex-basis: auto | content | <width> | <height>; 
```

## base flexible: auto

`flex-basis: auto` busca `flex-basis: auto` el tamaño principal del elemento y define el tamaño. Por ejemplo, en un contenedor flexible horizontal, `auto` buscará el `width` y la `height` si el eje del contenedor es vertical.

Si no se especifica ningún tamaño, el modo `auto` volverá al `content` .

## base flexible: contenido

`flex-basis: content` resuelve el tamaño en función del contenido del elemento, a menos que el `width` o la `height` se establezcan a través `box-sizing` normal de la `box-sizing` .

En ambos casos, donde `flex-basis` es `auto` o `content` , si se especifica el tamaño principal, ese tamaño tendrá prioridad.

## base flexible

Esto es solo para especificar el `width` o el `height` , pero solo es más flexible. `flex-basis: 20em;` establecerá el tamaño inicial del elemento a `20em` . Su tamaño final se basará en el espacio disponible, múltiplo de `flex-grow` `flex-shrink` múltiplo de `flex-shrink` .

La especificación sugiere el uso de propiedades abreviadas de `flex` . Esto ayuda a escribir `flex-basis` junto con las propiedades de `flex-grow` y `flex-shrink` .

## Ejemplos

Aquí hay filas de contenedores flexibles individuales y elementos flexibles individuales que muestran cómo `flex-basis` afecta el `box-sizing` la `box-sizing` .

![Efecto de base flexible sobre eje horizontal.](https://vijayabharathib.github.io/fcc_guide_images/css/properties/flex-basis-horizontal.png)

Cuando la `flex-direction` es `column` , la misma `flex-basis` controlará la propiedad de `height` . Un ejemplo a continuación,

![Ejemplo de altura de control de base flexible en un contenedor vertical.](https://vijayabharathib.github.io/fcc_guide_images/css/properties/flex-basis-vertical.png)

#### Más información:

Referencias adicionales en las siguientes páginas:

*   Especificación CSS [nivel 1](https://drafts.csswg.org/css-flexbox-1/)
*   Página de la Red de Desarrolladores de Mozilla en [base flexible](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis#content)
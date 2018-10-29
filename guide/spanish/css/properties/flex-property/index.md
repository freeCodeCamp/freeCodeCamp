---
title: Flex Property
localeTitle: Propiedad flexible
---
## Propiedad flexible

`flex` propiedad `flex` es una abreviatura para especificar el tamaño de un elemento flexible. `flex-grow` , `flex-shrink` y `flex-basis` pueden especificarse dentro de esta propiedad de taquigrafía.

**Esta propiedad no tiene efecto si el elemento no es un elemento `flex-item`** . El elemento Flex es un elemento que es un elemento secundario directo de un contenedor primario con propiedades de visualización como `flex` o `inline-flex` .

## Sintaxis

Las posibles variaciones en la sintaxis se enumeran a continuación. `flex-grow` y `flex-shrink` toman un número entero como valor. `flex-basis` toma unidades de tamaño regular como px, em, rem ... etc.

```css
flex: <flex-grow> <flex-shrink> <flex-basis>; 
 flex: <flex-basis>; 
 flex: <flex-grow>; 
 flex: <flex-grow> <flex-basis>; 
 flex: <flex-grow> <flex-shrink>; 
```

`flex-basis` especifica el tamaño del elemento a lo largo del eje principal. Dentro de un contenedor, el eje principal está definido por `flex-direction` . El eje principal es horizontal cuando `flex-direction` es `row` . Vertical cuando la `flex-direction` es `column` .

`flex-basis: 20px` establecería el ancho inicial del elemento en `20px` si la `flex-direction` es `row` . La misma `flex-basis` se aplicaría a la altura si la `fle-direction` del `fle-direction` es una `column` .

`flex: 20px` significaría automáticamente `flex-basis: 20px` , ya que la propiedad de taquigrafía tiene solo `flex-basis` como la propiedad que puede tomar un valor con unidad.

`flex: 2` especifica `flex-grow: 2` y el elemento crecería dos veces más largo / más alto que otros elementos con `flex-grow: 1` .

`flex: 1 2` especifica `flex-grow: 1` y `flex-shrink: 2` . El elemento crece para ocupar espacio vacío en proporción con otros elementos con `flex-grow: 1` pero se contrae dos veces más pequeño cuando se compara con otros elementos con `flex-shrink: 1` cuando se presiona contra el espacio.

### Más información

*   `flex` propiedad de referencia en [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
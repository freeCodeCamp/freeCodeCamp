---
title: Margins
localeTitle: Márgenes
---
# Márgenes

La propiedad de `margin` CSS establece el área de margen en los cuatro lados de un elemento. Esta propiedad se puede utilizar para generar espacio alrededor del contenido (fuera del borde). Es una forma abreviada de establecer todos los márgenes individuales a la vez: `margin-top` , `margin-right` , `margin-bottom` y `margin-left` . Los valores se definen en el sentido de las agujas del reloj.

Los valores de margen se establecen utilizando longitudes o porcentajes o palabras clave `auto` o `inherit` , y pueden aceptar valores cero o negativos. El valor inicial, o predeterminado, para todas las propiedades de margen es 0. Si bien puede usar la palabra clave `inherit` pero no puede usarse junto con un valor de longitud.

## Sintaxis

```css
.element { 
    margin: margin-top || margin-right || margin-bottom || margin-left; 
 } 
```

Esta propiedad se puede especificar utilizando uno, dos, tres o cuatro valores.

*   Cuando se especifica un valor, se aplica el mismo margen a los cuatro lados.
*   Cuando se especifican dos valores, el primer margen se aplica a la parte superior e inferior, el segundo a la izquierda y la derecha.
*   Cuando se especifican tres valores, el primer margen se aplica a la parte superior, el segundo a la izquierda y la derecha, el tercero a la parte inferior.
*   Cuando se especifican cuatro valores, los márgenes se aplican a la parte superior, derecha, inferior e izquierda en ese orden (sentido horario).

```css
/* Apply to all four sides */ 
 margin: 1em; 
 
 /* top and bottom | left and right */ 
 margin: 5% 10%; 
 
 /* top | left and right | bottom */ 
 margin: 1em 2em 2em; 
 
 /* top | right | bottom | left */ 
 margin: 5px 1em 0 1em; 
```

## Donde en cuadro modelo

La propiedad de margen en CSS define la parte más externa del modelo de caja, creando espacio alrededor del contenido de un elemento, fuera de los rellenos y / o bordes definidos.

![El modelo de caja CSS](https://www.w3.org/TR/css3-box/box.png)

## Márgenes de colapso

Los márgenes verticales en diferentes elementos que se tocan entre sí (por lo tanto, no tienen contenido, relleno o bordes que los separan) se colapsarán, formando un margen único que es igual al mayor de los márgenes contiguos. Esto no ocurre en los márgenes horizontales (izquierdo y derecho), solo vertical (superior e inferior).

## Soporte del navegador

Es efectivamente compatible con todos los navegadores (desde IE6 +, Firefox 2+, Chrome 1+, etc.)

### Más información

*   [Borrador de Trabajo del W3C](https://www.w3.org/TR/css3-box/#the-margin)
*   [W3C CSS Nivel 2](https://www.w3.org/TR/CSS2/box.html#propdef-margin)
*   [W3C CSS Nivel 1](https://www.w3.org/TR/CSS1/#margin)
*   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
*   [Trucos CSS](https://css-tricks.com/almanac/properties/m/margin/)
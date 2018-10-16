---
title: Padding
localeTitle: Relleno
---
# Relleno

La propiedad CSS de `padding` establece el área de relleno en los cuatro lados de un elemento. Esta propiedad se puede utilizar para generar espacio alrededor del contenido (dentro del borde). Es una forma abreviada de configurar todos los rellenos individuales a la vez: `padding-top` , `padding-right` , `padding-bottom` y `padding-left` . Los valores se definen en el sentido de las agujas del reloj.

Los valores de relleno se establecen utilizando longitudes o porcentajes o palabras clave `inherit` , y no pueden aceptar valores negativos. El valor inicial, o predeterminado, para todas las propiedades de relleno es 0. Mientras que puede usar la palabra clave `inherit` pero no puede usarse junto con un valor de longitud.

## Sintaxis

```css
.element { 
    padding: [padding-top] || [padding-right] || [padding-bottom] || [padding-left]; 
 } 
```

Esta propiedad se puede especificar utilizando uno, dos, tres o cuatro valores.

*   Cuando se especifica un valor, se aplica el mismo relleno a los cuatro lados.
*   Cuando se especifican dos valores, el primer relleno se aplica a la parte superior e inferior, el segundo a la izquierda y la derecha.
*   Cuando se especifican tres valores, el primer relleno se aplica a la parte superior, el segundo a la izquierda y la derecha, el tercero a la parte inferior.
*   Cuando se especifican cuatro valores, los rellenos se aplican a la parte superior, derecha, inferior e izquierda en ese orden (sentido horario).

```css
/* em refers to the current font size of an element */ 
 /* Apply to all four sides */ 
 padding: 1em; 
 
 /* top and bottom | left and right */ 
 padding: 5% 10%; 
 
 /* top | left and right | bottom */ 
 padding: 1em 2em 2em; 
 
 /* top | right | bottom | left */ 
 padding: 5px 1em 0 1em; 
```

## Donde en cuadro modelo

La propiedad de relleno en CSS define la parte más interna del modelo de caja, creando espacio alrededor del contenido de un elemento, dentro de los márgenes y / o bordes definidos.

![El modelo de caja CSS](https://www.w3.org/TR/css3-box/box.png)

## Soporte del navegador

Es efectivamente compatible con todos los navegadores (desde IE6 +, Firefox 2+, Chrome 1+, etc.)

### Más información

*   [Borrador de Trabajo del W3C](https://www.w3.org/TR/css3-box/#the-padding)
*   [W3C CSS Nivel 2](https://www.w3.org/TR/CSS2/box.html#propdef-padding)
*   [W3C CSS Nivel 1](https://www.w3.org/TR/CSS1/#padding)
*   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
*   [Trucos CSS](https://css-tricks.com/almanac/properties/p/padding/)
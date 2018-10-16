---
title: CSS3 Colors
localeTitle: Colores CSS3
---
## Colores CSS3

Los colores en CSS se utilizan para colorear elementos en nuestras páginas web. Hay muchas formas de asignar colores a los elementos. Puede utilizar los nombres reales de los colores, sus valores RGB o los valores hexadecimales. En CSS3, el hsl (hue-saturation-lightness) se ha agregado a la especificación.

### Nombres de colores

Actualmente hay 140 nombres de colores compatibles con HTML, que pueden asignarse en las reglas de CSS simplemente escribiendo su nombre. Por ejemplo:

### Sintaxis
```
p { 
  color: green; 
 } 
```

Esta regla cambia todo el color de fuente para todos \\

Elementos a verde. Para ver la lista completa de 140 colores, consulte aquí: https://www.w3schools.com/colors/colors\_names.asp

### Valores RGB

RGB significa "Rojo", "Verde" y "Azul" y también podemos asignar colores escribiendo sus valores RGB en nuestras reglas. Un valor RGB se vería así: rgb (255,0,0), donde cada número define la cantidad de cada color en la mezcla final.

Los valores varían de 0 a 255 y en nuestro ejemplo vemos que solo el primer valor es 255 mientras que los otros dos se establecen en 0. Eso significa que solo hay rojo en nuestro valor y el elemento correspondiente se coloreará en rojo. Un valor RGB de (0, 0, 0) daría negro y un valor de (255, 255, 255) daría blanco.

Es imposible tratar de memorizar cada código de color y, por ese motivo, existen numerosas herramientas en línea para seleccionar los colores que desea para sus proyectos. Por ejemplo: https://www.w3schools.com/colors/colors\_picker.asp o http://htmlcolorcodes.com/color-picker/.

```css
p { 
  color: rgb(0, 255, 0); 
 } 
```

Esta regla cambia el color de fuente de todos los elementos p a verde, al igual que arriba.

### Valores hexadecimales

Los valores hexadecimales son otra forma de definir colores en CSS y funcionan de manera muy similar a los valores RGB.

A un código hexadecimal aleatorio le gustaría esto: `#29432b` , donde los dos primeros caracteres después del hash representan la cantidad de ROJO en la mezcla, los dos segundos representan la cantidad de Verde y los dos últimos representan la cantidad de Azul.

Los valores de `#000000` y `#ffffff` representan blanco y negro respectivamente. Puede encontrar los colores hexadecimales específicos que necesita utilizando las mismas herramientas mencionadas para los valores RGB.

### Sintaxis
```
p { 
  color: #00fe00; 
 } 
```

Esta regla vuelve a cambiar el color de fuente de todos los elementos p a verde.

### HSL

HSL tiene tres valores. El primero es el **tono** que se mide en grados. Entonces 0 (o 360) representa el color rojo, en 120 es verde y 240 es azul. La segunda es **Saturación,** que tiene un valor de porcentaje con un rango de 0 a 100%. El tercero es **Lightness,** que también tiene un valor de porcentaje con un rango de 0 a 100%. 0% es negro oscuro, 50% promedio, 100% es blanco.

### Sintaxis
```
p { 
  color: hsl(0, 100%, 50%); 
 } 
```

### Salida

[JSfiddle](https://jsfiddle.net/qcw2n145/)

### ¿Por qué usar valores RGB o HEX?

Los nombres de colores toman solo 140 valores, mientras que los valores RGB y HEX tienen 16,777,216 combinaciones posibles. Entonces, si desea que sus proyectos se vean exactamente como los ha imaginado, debe usar las dos últimas opciones y mantener los valores de los nombres de colores para maquetas y pruebas.

#### Más información:

[w3schools](https://www.w3schools.com/colors/default.asp)

[W3 Draft Documentation](https://drafts.csswg.org/css-color-3/#color)

[MDN | Colores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
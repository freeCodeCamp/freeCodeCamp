---
title: CSS3 Colors
localeTitle: Colores CSS3
---
## Colores CSS3

Los colores en CSS se utilizan para dar color a los elementos de nuestras páginas web. Hay muchas formas de asignar colores a los elementos. Se puede utilizar los nombres reales de los colores, sus valores RGB o valores Hexadecimales. En CSS3, el valor hsl (hue-saturation-lightness) se ha agregado a la especificación.

### Nombres de colores

Actualmente hay 140 nombres de colores soportados en HTML, que pueden asignarse en las reglas de CSS simplemente escribiendo su nombre. Por ejemplo:

### Sintaxis
```
p { 
  color: green; 
 } 
```

Esta regla cambia todo el color de fuente para todos los elementos <p> a verde. 
Para ver la lista completa de los 140 colores, consulta aquí: https://www.w3schools.com/colors/colors\_names.asp

### Valores RGB

RGB representa "Red", "Green" and "Blue" ("Rojo", "Verde" y "Azul") y también podemos asignar colores escribiendo sus valores RGB en nuestras reglas. Un valor RGB se vería así: rgb (255,0,0), donde cada número define qué cantidad de cada color habrá en el resultado final.

Los valores van de 0 a 255 y en nuestro ejemplo vemos que solo el primer valor es 255 mientras que los otros dos se establecen en 0. Eso significa que solo hay rojo en nuestro valor y que el elemento correspondiente se coloreará en rojo. Un valor RGB de (0, 0, 0) daría negro y un valor de (255, 255, 255) daría blanco.

Es imposible tratar de memorizar cada código de color, por ese motivo, existen numerosas herramientas en línea para seleccionar los colores que se desean para los proyectos. Por ejemplo: https://www.w3schools.com/colors/colors\_picker.asp o http://htmlcolorcodes.com/color-picker/.

```css
p { 
  color: rgb(0, 255, 0); 
 } 
```

Esta regla cambia el color de la fuente en todos los elementos <p> a verde, al igual que arriba.

### Valores Hexadecimales

Los valores Hexadecimales son otra forma de definir colores en CSS y funcionan de manera muy similar a los valores RGB.

Un código hexadecimal aleatorio se vería así: `#29432b` , donde los dos primeros caracteres después del signo # representan la cantidad de ROJO en la combinación, los dos segundos representan la cantidad de Verde y los dos últimos representan la cantidad de Azul.

Los valores de `#000000` y `#ffffff` representan blanco y negro respectivamente. Se puede encontrar los valores para colores Hexadecimales específicos que se necesitan utilizando las mismas herramientas mencionadas para los valores RGB.

### Sintaxis
```
p { 
  color: #00fe00; 
 } 
```

Esta regla de nuevo cambia el color de fuente de todos los elementos <p> a verde.

### HSL

HSL tiene tres valores.
El primero es el **Tono** que se mide en grados. Entonces 0 (o 360) representa el color rojo, en 120 es verde y 240 es azul. El segundo es **Saturación,** que tiene un valor de porcentaje que varía de 0 a 100%. El tercero es **Luminosidad,** que también tiene un valor de porcentaje que varía de 0 a 100%. 0% es negro oscuro, 50% medio, 100% es blanco.

### Sintaxis
```
p { 
  color: hsl(0, 100%, 50%); 
 } 
```

### Salida

[JSfiddle](https://jsfiddle.net/qcw2n145/)

### ¿Por qué utilizar valores RGB o HEX?

Los nombres de colores abarcan solo 140 valores, mientras que los valores RGB y HEX tienen 16,777,216 combinaciones posibles. Entonces, si se desea que los proyectos luzcan exactamente como se les ha imaginado, se debe utilizar las dos últimas opciones y mantener los valores de nombres de colores para maquetas y pruebas.

#### Más información:

[w3schools](https://www.w3schools.com/colors/default.asp)

[W3 Draft Documentation](https://drafts.csswg.org/css-color-3/#color)

[MDN | Colores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

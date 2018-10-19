---
title: Hexadecimal Numbers
localeTitle: Números hexadecimales
---
## El sistema numeral hexadecimal

Números hexadecimales, a menudo reducidos a "números hexadecimales" o "hex", son números representados en la base 16 en oposición a la base 10 que usamos para el cálculo y la cuenta diarios.

En términos prácticos, esto significa que cada columna de un número escrito en hexadecimal puede representar hasta 16 valores.

Los dígitos en hexadecimal utilizan los símbolos estándar 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9 para representar el valor correspondiente, y use las primeras seis letras del alfabeto para representar los valores 10 a 15 (por ejemplo, A, B, C, D, E, F).

En programación, prefijamos constantes hexadecimales con `0x` , con algunas excepciones.

### Ejemplos y explicacion
```
0x1        ==        1 
 0xF        ==        15 
 0xFF       ==        255 
 0xFFF      ==        4095 
 0x1000     ==        4096 
```

En el sistema estándar de base 10, cada columna representa potencias crecientes de 10, mientras que en la base 16 cada columna representa potencias crecientes de 16.

Como se ve en el ejemplo de la tabla anterior, con un dígito hexadecimal podemos representar números hasta e incluyendo 15. Agregue otra columna y podemos representar números hasta 255, 4095 con otra columna, y así sucesivamente.

## Usos del hexadecimal en la programación de bajo nivel.

Hexadecimal encontró por primera vez su uso en Informática como una característica de conveniencia.

Los datos en nuestras computadoras tienen una unidad de almacenamiento común más baja, el Byte. Cada byte contiene 8 bits y puede almacenar un número entre 0 y 255 inclusive.

El hexadecimal tiene la ventaja de ser terso y tener límites bien definidos.

Un solo byte siempre está representado por dos dígitos hexadecimales de 0x00 a 0xFF, este último es el valor por byte más grande de 255.

La terseness y la naturaleza alineada con los bytes de los números hexadecimales los convierten en una opción popular para los ingenieros de software que trabajan en bases de código de bajo nivel o software integrado.

## Usos de los números hexadecimales en JavaScript

JavaScript admite el uso de notación hexadecimal en lugar de cualquier entero, pero no decimales.

Como ejemplo, el número 2514 en hexadecimal es 0x9D2, pero no hay una forma compatible con el idioma de representar 25.14 como un número hexadecimal.

Usar hexadecimal en su código es una opción personal y estilística, y no tiene efecto en la lógica subyacente que implementa su código.

## Usos de los números hexadecimales en CSS

CSS ha usado durante mucho tiempo la notación hexadecimal para representar valores de color. Considere el siguiente selector:

```css
.my-container { 
    background-color: #112233; 
    color: #FFFFFF; 
 } 
```

El valor del `background-color` es de hecho tres bytes hexadecimales.

El procesador CSS los trata como tres bytes individuales, que representan rojo, verde y azul.

En nuestro ejemplo, 11 corresponde al componente de color rojo, 22 corresponde al componente de color verde y 33 al componente de color azul.

Actualmente, no hay forma a partir de CSS3 para definir un color con un componente alfa usando hex. El borrador 1 de CSS4 propuesto incluye una propuesta para permitir un byte adicional para especificar valores alfa.

Por ahora, el uso de la función `rgba()` estándar es la forma recomendada de agregar un valor alfa a sus colores.

#### Más información:

*   [Sistema de numeración hexadecimal en Wikipedia](https://wikipedia.org/wiki/Hexadecimal_numeral_system)
*   [Color CSS en los documentos web de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

#### Referencias:

*   1 [Módulo de color CSS Nivel 4 - 4.2. Las notaciones hexadecimales RGB: #RRGGBB](https://www.w3.org/TR/css-color-4/#hex-notation)

#### Más información:

*   [¿Cómo funcionan los códigos de color HEX? (en 60 segundos)](https://www.youtube.com/watch?v=c56x1aj2CPA) - Buen video que también explica un poco sobre los números hexadecimales.
*   [Códigos hexadecimales y teoría del color](https://www.youtube.com/watch?v=xlRiLSDdqcY) : un video más largo que profundiza en la teoría del color (como los colores aditivos y los colores sustractivos, etc.) y también apunta a otros recursos para profundizar en el tema.
*   [Web Colors](https://en.wikipedia.org/wiki/Web_colors) - Artículo de Wikipedia sobre cómo se utilizan los colores en la web.
*   [Artículo de Wikipedia sobre el código hexadecimal.](https://en.wikipedia.org/wiki/Hexadecimal)
*   [Artículo de Wikipedia sobre colores web.](https://en.wikipedia.org/wiki/Web_colors)
*   [Colores hexagonales](http://www.color-hex.com/)
*   [Artículo mediano sobre código de color hexadecimal.](https://medium.com/webkul-dev/hex-color-codes-27cd0a37c3ce)
*   [Más información sobre colores en CSS.](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
*   [Explora diferentes colores hexagonales](http://www.colorhexa.com/)
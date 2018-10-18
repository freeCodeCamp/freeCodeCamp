---
title: Converting Strings to Numbers
localeTitle: Convertir cadenas a números
---
## Convertir cadenas a números

La `parseInt()` analiza un argumento de cadena y devuelve un número entero de la base especificada (la base en sistemas numéricos matemáticos).

```js
    parseInt(string, radix); 
```

### Parámetros
```
string 
```

El valor a analizar. Si el argumento de `string` no es una cadena, entonces se convierte en una cadena (utilizando la `ToString` abstracta `ToString` ). Los espacios en blanco iniciales en el argumento de cadena se ignoran. '= base Un número entero entre 2 y 36 que representa la raíz (la base en sistemas de numeración matemática) de la cadena mencionada anteriormente. Especifique `10` para el sistema de numeración decimal comúnmente utilizado por los humanos. Siempre especifique este parámetro para eliminar la confusión del lector y garantizar un comportamiento predecible. Las diferentes implementaciones producen resultados diferentes cuando no se especifica una raíz, por lo general, el valor predeterminado es 10. Valor de retorno Un número entero analizado de la cadena dada. Si el primer carácter no se puede convertir en un número, se devuelve `NaN` .

### Descripción

La función `parseInt` convierte su primer argumento en una cadena, la analiza y devuelve un entero o `NaN` . Si no es `NaN` , el valor devuelto será el entero que es el primer argumento tomado como un número en el radix especificado (base). Por ejemplo, una raíz de 10 indica la conversión de un número decimal, 8 octales, 16 hexadecimales, etc. Para los radices superiores a `10` , las letras del alfabeto indican números mayores que 9. Por ejemplo, para números hexadecimales (base 16), se usa de la `A` a la `F`

Si `parseInt` encuentra un carácter que no es un número en el radix especificado, lo ignora y todos los caracteres siguientes y devuelve el valor entero analizado hasta ese punto. `parseInt` trunca los números a valores enteros. Se permiten espacios iniciales y finales.

Debido a que algunos números incluyen el carácter `e` en su representación de cadena (por ejemplo, `6.022e23` ), el uso de `parseInt` para truncar valores numéricos producirá resultados inesperados cuando se utiliza en números muy grandes o muy pequeños. `parseInt` no debe utilizarse como sustituto de `Math.floor()` .

Si radix `undefined` está `undefined` o es 0 (o está ausente), JavaScript asume lo siguiente:

*   Si la `string` entrada comienza con "0x" o "0X", radix es 16 (hexadecimal) y se analiza el resto de la cadena.
*   Si la `string` entrada comienza con "0", la raíz es ocho (octal) o 10 (decimal). Exactamente qué radio se elige depende de la implementación. ECMAScript 5 especifica que se usa 10 (decimal), pero no todos los navegadores lo admiten todavía. Por este motivo, siempre especifique un radix cuando use parseInt.
*   Si la `string` entrada comienza con cualquier otro valor, la raíz es 10 (decimal).
*   Si el primer carácter no se puede convertir en un número, parseInt devuelve NaN.

Para fines aritméticos, el valor de NaN no es un número en ningún radix. Puede llamar a la función isNaN para determinar si el resultado de parseInt es NaN. Si NaN se pasa a operaciones aritméticas, los resultados de la operación también serán NaN.

Para convertir el número a su cadena literal en un radix particular, use intValue.toString (radix).

### Ejemplos

Usando `parseInt` Los siguientes ejemplos todos devuelven `15` :

```js
    parseInt(' 0xF', 16); 
    parseInt(' F', 16); 
    parseInt('17', 8); 
    parseInt(021, 8); 
    parseInt('015', 10);   // parseInt(015, 10); will return 15 
    parseInt(15.99, 10); 
    parseInt('15,123', 10); 
    parseInt('FXX123', 16); 
    parseInt('1111', 2); 
    parseInt('15 * 3', 10); 
    parseInt('15e2', 10); 
    parseInt('15px', 10); 
    parseInt('12', 13); 
```

Los siguientes ejemplos todos devuelven `NaN` :

```js
    parseInt('Hello', 8); // Not a number at all 
    parseInt('546', 2);   // Digits are not valid for binary representations 
```

Los siguientes ejemplos todos devuelven `-15` :

```js
    parseInt('-F', 16); 
    parseInt('-0F', 16); 
    parseInt('-0XF', 16); 
    parseInt(-15.1, 10) 
    parseInt(' -17', 8); 
    parseInt(' -15', 10); 
    parseInt('-1111', 2); 
    parseInt('-15e1', 10); 
    parseInt('-12', 13); 
```

Los siguientes ejemplos devuelven `4` :

```js
    parseInt(4.7, 10); 
    parseInt(4.7 * 1e22, 10); // Very large number becomes 4 
    parseInt(0.00000000000434, 10); // Very small number becomes 4 
```

El siguiente ejemplo devuelve `224` :

```js
    parseInt('0e0', 16); 
```

#### Más información:

[ParseInt en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

*   [parseInt ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) y [parseFloat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) intentan convertir la cadena a un número si es posible. Por ejemplo, `var x = parseInt("100"); // x = 100`
*   [El número ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) se convertirá en un número por el cual se puede representar el valor. Esto incluye las fechas en el número de milisegundos desde la medianoche del 1 de enero de 1970 UTC, los valores booleanos hasta 1 o 0, y los valores que no se pueden convertir a un número reconocible se convertirán en NaN. Eso significa que no es un número y, técnicamente, también es un número.
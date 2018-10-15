---
title: Binary Decimal Hexadecimal Conversion
localeTitle: Conversión hexadecimal decimal binario
---
# Conversión:

Puede convertir fácilmente los números de una base a otra aplicando la definición de un número basado en n que requiere que sepa cómo funciona nuestro sistema posicional: Empecemos por un número de dos dígitos como `12` por ejemplo. Para obtener su valor base-10, necesitamos multiplicar su dígito por `10^n` donde n es la posición del dígito que comienza desde la derecha y que cuenta desde 0. Luego, simplemente sumamos todos los valores. Por ejemplo, el valor de base 10 de `12` se obtendrá de esta manera:

\`\` \` 1 _(10 ^ 1) + 2_ (10 ^ 0) = 10 + 2 = 12
```
This was obvious but what if you had a base-2 number and wanted to know its base-10 value? 
 First of all mind that a base n number only has `n` total symbols to represent its values. 
 In the binary base we have then just 2 (base-2) symbols: `1` and `0`. 
 Applying the procedure you have seen before you will be able to obtain a decimal number starting from a binary one like `101`: 
```

101 = 1 _(2 ^ 2) + 0_ (2 ^ 1) + 1 \* (2 ^ 0) = 4 + 0 + 1 = 5
```
In the same way a hexadecimal (base-16) number has 16 symbols to represent its values: `0, 1, 2, 3, 4, 5, 6 ,7, 8, 9, A, B, C, D, E, F`. 
 Converting a base-16 number like `7AF` to a decimal will be easy then: 
```

7AF = 7 _(16 ^ 2) + A_ (16 ^ 1) + F _(16 ^ 0) = 7_ 256 + 10 _16 + 15_ 1 = 1967
```
What if you wished to convert a decimal number into a n-based number? 
 A common way to accomplish this is dividing the decimal number by the n base repeatedly. 
 Take note of all remainders, and when your quotient reaches 0 stop. 
 Now simply write all your remainders setting the last one as the most significant digit (your newly converted n-based number should have as last digit your first remainder). 
 EG: Let's convert the base-10 `12` to its base-2 value 
```

12/2 = 6 con el resto 0 6/2 = 3 con el resto 0 3/2 = 1 con el resto 1 1/2 = 0 con el resto 1

base-10 12 = base-2 1100 \`\` \` Ahora, usando el primer método escrito arriba, puedes verificar si todo funcionó bien:

`1100 = 1*(2^3) + 1*(2^2) + 0*(2^1) + 0*(2^0) = 8+4+0+0 = 12`

## Convertidor hexadecimal decimal binario

Un convertidor binario, decimal y hexadecimal es una herramienta que le permite convertir un número en el correspondiente expresado en un sistema numérico diferente. Los sistemas numéricos permitidos son `base-2` (binario), `base-10` (decimal), que es el que usamos comúnmente y `base-16` (hexadecimal). Hay un montón de estas herramientas disponibles en línea:

*   [Convertidor hexagonal binario](www.binaryhexconverter.com/)
*   [Sitio web de la calculadora](http://www.calculator.net/) Por lo general, las calculadoras científicas también incluyen herramientas de conversión básicas y en la calculadora predeterminada de MacOSX puede usar esta función usando su vista de programador presionando `Cmd+3` o debajo del menú `View->Programmer` .

### Su propio convertidor:

Una buena idea para practicar la programación y comprender completamente la conversión de números sería codificar su propia herramienta de conversión en línea. Si desea saber más sobre este tema, marque [esta entrada de wikipedia](https://en.wikipedia.org/wiki/Positional_notation) .
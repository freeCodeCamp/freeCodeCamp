---
title: Binary Decimal Hexadecimal Conversion
localeTitle: Conversão Hexadecimal Decimal Binária
---
# Conversão:

Você pode facilmente converter números de uma base para outra, aplicando a definição do número baseado em n, que requer que você saiba como o nosso sistema posicional funciona: Vamos começar de um número de dois dígitos como `12` por exemplo. Para obter seu valor de base-10, precisamos multiplicar seu dígito único por `10^n` onde n é a posição do dígito, começando da direita e contando a partir de 0. Então, simplesmente somamos todos os valores. Por exemplo, o valor de base 10 de `12` será obtido desta maneira:

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

12/2 = 6 com o restante 0 6/2 = 3 com o restante 0 3/2 = 1 com o restante 1 1/2 = 0 com o restante 1

base-10 12 = base-2 1100 \`\` \` Agora, usando o primeiro método escrito acima, você pode verificar se tudo funcionou bem:

`1100 = 1*(2^3) + 1*(2^2) + 0*(2^1) + 0*(2^0) = 8+4+0+0 = 12`

## Conversor Hexadecimal Decimal Binário

Um conversor Binário, decimal e hexadecimal é uma ferramenta que permite converter um número no correspondente, expresso em um sistema numérico diferente. Os sistemas numéricos permitidos são `base-2` (binário), `base-10` (decimal), que é o que geralmente usamos e `base-16` (hexadecimal). Existem muitas dessas ferramentas disponíveis on-line:

*   [Conversor Binário Hex](www.binaryhexconverter.com/)
*   [Web site da calculadora](http://www.calculator.net/) Normalmente calculadoras científicas também incluem ferramentas de conversão de base e na calculadora padrão do MacOSX você pode usar essa função usando a visualização do programador pressionando `Cmd+3` ou no menu `View->Programmer` .

### Seu próprio conversor:

Uma boa ideia para praticar a programação e entender completamente a conversão de números seria codificar sua própria ferramenta de conversão online. Se você quiser saber mais sobre este tópico, por favor, verifique [esta entrada wikipedia](https://en.wikipedia.org/wiki/Positional_notation) .
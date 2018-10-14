---
title: Binary Decimal Hexadecimal Conversion
localeTitle: Двоичное шестнадцатеричное шестнадцатеричное преобразование
---
# Конверсия:

Вы можете легко преобразовать числа из одной базы в другую, применяя определение n-основанного числа, которое требует, чтобы вы знали, как работает наша позиционная система: Давайте начнем с двух цифр, например, `12` . Чтобы получить его значение base-10, нам нужно умножить его одиночную цифру на `10^n` где n - это позиция цифр, начиная с правого и считая с 0. Затем мы просто суммируем все значения. Например, значение base-10 `12` будет получено следующим образом:

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

12/2 = 6 с остатком 0 6/2 = 3 с остатком 0 3/2 = 1 с остатком 1 1/2 = 0 с остатком 1

base-10 12 = base-2 1100 \`\` \` Теперь, используя первый метод, написанный выше, вы можете проверить, все ли работает нормально:

`1100 = 1*(2^3) + 1*(2^2) + 0*(2^1) + 0*(2^0) = 8+4+0+0 = 12`

## Двоичный десятичный шестнадцатеричный конвертер

Двоичный, десятичный и шестнадцатеричный конвертер - это инструмент, который позволяет вам конвертировать одно число в соответствующее, выраженное в другой системе цифр. Числовые системы разрешены: `base-2` (двоичный), `base-10` (десятичный), который мы обычно используем, и `base-16` (шестнадцатеричный). Множество этих инструментов доступно в Интернете:

*   [Двоичный шестнадцатеричный конвертер](www.binaryhexconverter.com/)
*   [Калькулятор сайта](http://www.calculator.net/) Обычно в научных калькуляторах также используются инструменты базовой конвертации, а в калькуляторе по умолчанию MacOSX вы можете использовать эту функцию, используя вид ее программы, нажав `Cmd+3` или в меню `View->Programmer` .

### Ваш собственный конвертер:

Хорошая идея практиковать программирование и полностью понимать преобразование чисел - это код вашего собственного инструмента онлайн-конвертации. Если вы хотите узнать больше об этой теме, пожалуйста, проверьте [эту запись в википедии](https://en.wikipedia.org/wiki/Positional_notation) .
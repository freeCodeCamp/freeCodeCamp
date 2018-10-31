---
title: Binary Decimal Hexadecimal Conversion
---

# Conversion:
You can easily convert numbers from one base to another applying the definition of n-based number which requires you to know how our positional system works:
Let's start from a two digits number like `12` for example. In order to obtain it's base-10 value we need to multiply its single digit by `10^n`  where n is the digit position starting from right and counting from 0.Then we simply sum all the values.
For example the base-10 value of `12` will be obtained in this way: 

``` 
1*(10^1) + 2*(10^0) = 10 + 2 = 12
```
This was obvious but what if you had a base-2 number and wanted to know its base-10 value?
First of all mind that a base n number only has `n` total symbols to represent its values.
In the binary base we have then just 2 (base-2) symbols: `1` and `0`.
Applying the procedure you have seen before you will be able to obtain a decimal number starting from a binary one like `101`:

```
101 = 1*(2^2) + 0*(2^1) + 1*(2^0) = 4+0+1 = 5
```

In the same way a hexadecimal (base-16) number has 16 symbols to represent its values: `0, 1, 2, 3, 4, 5, 6 ,7, 8, 9, A, B, C, D, E, F`.
Converting a base-16 number like `7AF` to a decimal will be easy then:

```
7AF = 7*(16^2) + A*(16^1) + F*(16^0) = 7*256 + 10*16 + 15*1 = 1967 
```

What if you wished to convert a decimal number into a n-based number?
A common way to accomplish this is dividing the decimal number by the n base repeatedly.
Take note of all remainders, and when your quotient reaches 0 stop.
Now simply write all your remainders setting the last one as the most significant digit (your newly converted n-based number should have as last digit your first remainder).
EG: Let's convert the base-10 `12` to its base-2 value

``` 
12/2 = 6 with remainder 0
6/2  = 3 with remainder 0
3/2  = 1 with remainder 1
1/2  = 0 with remainder 1

base-10 12 = base-2 1100
``` 
Now using the first method written above you can check if everything worked fine:

``` 
1100 = 1*(2^3) + 1*(2^2) + 0*(2^1) + 0*(2^0) = 8+4+0+0 = 12
``` 

## Binary Decimal Hexadecimal Converter

A Binary, decimal and hexadecimal converter it's a tool that allows you to convert one number in the corresponding one expressed in a different numeral system. The numeral systems allowed are `base-2` (binary), `base-10` (decimal) which is the one we commonly use and `base-16` (hexadecimal).
The are plenty of this tools available online:
* [Binary Hex Converter] (www.binaryhexconverter.com/)
* [Calculator website] (http://www.calculator.net/)
Usually scientific calculators too include base conversion tools and in MacOSX default calculator you can use this function using its programmer view pressing `Cmd+3` or under menu `View->Programmer`.

### Your own converter:
A good idea to practice programming and fully understand numbers conversion would be to code your own online conversion tool.
If you want to know more about this topic, please check [this wikipedia entry](https://en.wikipedia.org/wiki/Positional_notation).




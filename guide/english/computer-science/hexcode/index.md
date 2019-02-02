---
title: Hexadecimal Numbers
---

## The Hexadecimal Numeral System

Hexadecimal numbers, often shortened to "hex numbers" or "hex",
 are numbers represented in base 16 as opposed to base 10 that we use for everyday arithmetic and counting.

In practical terms, this means that each column of a number written in hexadecimal can represent up to 16 values.

Digits in hexadecimal use the standard symbols 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9 to represent the corresponding value,
and use the first six letters of the alphabet to represent the values 10 through 15 (E.G: A, B, C, D, E, F).

In programming, we prefix hexadecimal constants with `0x`, with some exceptions.


### Examples and explanation

In the standard base 10 system, each column represents increasing powers of 10,
while in base 16 each column represents increasing powers of 16.

Consider the following number in base 10: `1337`

| 1000        | 100         | 10          | 1           |
| :---------- | :---------- | :---------- | :---------- |
| 1           | 3           | 3           | 7           |

It is `one thousand three hundred and thirty seven` because `1*1000 + 3*100 + 3*10 + 7*1`.

Similarly, consider a hex number (base 16): `0xBEEF`

| 16^3        | 16^2        | 16^1        | 16^0        |
| :---------- | :---------- | :---------- | :---------- |
| B (11)      | E (14)      | E (14)      | F (15)      |

Converting to decimal, it would be `11*16^3 + 14*16^2 + 14*16 + 15*1` which gives `48,879`.

Here are some other examples of equivalent hex and decimal values:

```
0x1        ==        1
0xF        ==        15
0xFF       ==        255
0xFFF      ==        4095
0x1000     ==        4096
```

As seen in the table example above, with one hex digit we can represent numbers up to and including 15. Add another column and we can represent numbers up to 255, 4095 with another column, and so on.

## Uses of Hexadecimal in Low Level Programming
Hexadecimal first found its use in Computer Science as a convenience feature.

Data in our computers has a lowest common storage unit, the Byte.
Each byte contains 8 bits, and is able to store a number between 0 and 255 inclusive.

Hexadecimal has the advantage of being terse and having well defined boundaries.

A single byte is always represented by two hexadecimal digits
from 0x00 to 0xFF, the latter being the largest per-byte value of 255.

The terseness and byte-aligned nature of hexadecimal numbers make them a popular choice for software engineers working on low-level code-bases or embedded software.

## Uses of Hexadecimal Numbers in JavaScript
JavaScript supports the use of hexadecimal notation in place of any integer, but not decimals.

As an example, the number 2514 in hex is 0x9D2, but there is no language-supported way of representing 25.14 as a hex number.

Using hexadecimal in your code is a personal and stylistic choice, and has no effect on the underlying logic your code implements.

## Uses of Hexadecimal Numbers in CSS
CSS has for a long time used hexadecimal notation to represent color values. Consider the following selector:
```css
.my-container {
    background-color: #112233;
    color: #FFFFFF;
}
```

The `background-color`'s value is in fact three hex bytes.

The CSS processor treats these as three individual bytes, representing Red, Green, and Blue.

In our example, 11 corresponds to the Red color component, 22 corresponds to the Green color component, and 33 to the Blue color component.

There is currently no way as of CSS3 to define a color with an alpha component using hex.
The proposed CSS4 Draft<sup>1</sup> includes a proposal to allow for an extra byte to specify alpha values.

For now, use of the standard `rgba()` function is the recommended way to add an alpha value to your colors.

#### References:
 + <sup>1</sup> [CSS Color Module Level 4 - 4.2. The RGB hexadecimal notations: #RRGGBB](https://www.w3.org/TR/css-color-4/#hex-notation)

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [How Do HEX Color Codes Work? (in 60 seconds)](https://www.youtube.com/watch?v=c56x1aj2CPA) - Good Video which also explains a little bit about Hexadecimal Numbers.
* [Hex Codes & Color Theory](https://www.youtube.com/watch?v=xlRiLSDdqcY) - A Longer Video which delves into Color theory (Such as what are additive colors and what are subtractive colors etc.) and it also points to other resources for delving deeper into the topic.
* [Web Colors](https://en.wikipedia.org/wiki/Web_colors) - Wikipedia Article on how colors are used on the web.
* [Wikipedia article about Hexadecimal code](https://en.wikipedia.org/wiki/Hexadecimal)
* [Wikipedia article about hexadecimal numeral system](https://wikipedia.org/wiki/Hexadecimal_numeral_system)
* [Wikipedia article about web colors](https://en.wikipedia.org/wiki/Web_colors)
* [Hex Colors](http://www.color-hex.com/)
* [Medium article on hex color code](https://medium.com/webkul-dev/hex-color-codes-27cd0a37c3ce)
* [More information on color values in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
* [CSS color property on the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
* [Explore different Hex colors](http://www.colorhexa.com/)

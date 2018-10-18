---
title: Generate Random Whole Numbers with JavaScript
---
It's great that we can create random decimal numbers, but it's even more useful if we lot more useful to generate a random whole number.

To achieve this we can multiply the random number by ten and use the `Math.floor()` to convert the decimal number to a whole number

    Math.floor(Math.random()*10)
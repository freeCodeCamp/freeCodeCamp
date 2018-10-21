---
title: Create a JavaScript Slot Machine
---
For this we have to generate three random numbers using the formula they give us and not the general one. `Math.floor(Math.random() * (3 - 1 + 1)) + 1;`

    slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
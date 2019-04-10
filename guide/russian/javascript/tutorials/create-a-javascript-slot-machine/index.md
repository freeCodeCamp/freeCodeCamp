---
title: Create a JavaScript Slot Machine
localeTitle: Создать игровой автомат JavaScript
---
Для этого мы должны сгенерировать три случайных числа, используя формулу, которую они дают, а не общую. `Math.floor(Math.random() * (3 - 1 + 1)) + 1;`
```
slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
 slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
 slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 

```
---
title: Copy an Array with the Spread Operator
localeTitle: Скопируйте массив с помощью оператора распространения
---
## Скопируйте массив с помощью оператора распространения

*   Последний намек в примере говорит вам использовать недавно выученный метод.
*   Оператор распространения копирует все элементы в новый пустой объект.

\`\` \`Javascript while (num> = 1) { newArr = \[... arr\] num--; }
```
- The code above will copy all of the elements into `newArr` but will also reinitialise `newArr` with every new iteration of the while loop. 
 - A new variable should first be initialised using the spread operator - `let obj = [...arr];` - then this variable should be added to the `newArr` for every iteration of the while loop. 
 
 ## Solution: 
```

Javascript function copyMachine (arr, num) { пусть newArr = \[\]; while (num> = 1) { // изменить код ниже этой строки newArr.push (\[... обр\]); // изменить код над этой строкой num--; } return newArr; }

// измените код здесь, чтобы протестировать разные случаи: console.log (copyMachine (\[true, false, true\], 2)); \`\` \`
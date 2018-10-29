---
title: Copy an Array with the Spread Operator
localeTitle: Copiar una matriz con el operador de propagación
---
## Copiar una matriz con el operador de propagación

*   La sugerencia final del ejemplo le indica que use un método aprendido recientemente.
*   El operador de propagación copia todos los elementos en un nuevo objeto vacío.

\`\` \`javascript while (num> = 1) { newArr = \[… arr\] num--; }
```
- The code above will copy all of the elements into `newArr` but will also reinitialise `newArr` with every new iteration of the while loop. 
 - A new variable should first be initialised using the spread operator - `let obj = [...arr];` - then this variable should be added to the `newArr` for every iteration of the while loop. 
 
 ## Solution: 
```

javascript función copyMachine (arr, num) { deja newArr = \[\]; while (num> = 1) { // cambiar código debajo de esta línea newArr.push (\[… arr\]); // cambiar código por encima de esta línea num--; } devuelve newArr; }

// cambia el código aquí para probar diferentes casos: console.log (copyMachine (\[true, false, true\], 2)); \`\` \`
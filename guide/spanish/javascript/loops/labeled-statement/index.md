---
title: Labeled Statement
localeTitle: Declaración Etiquetada
---
## Declaración Etiquetada

La **Declaración Etiquetada** se usa con las declaraciones de `break` y `continue` , y sirve para identificar la declaración a la que se aplican las declaraciones de `break` y `continue` .

### Sintaxis

\`\` \`javascript Nombre de etiqueta: declaraciones
```
### Usage 
 Without the use of a `labeled` statement the `break` statement can only break out of a loop or a `switch` statement. Using a `labeled` statement allows `break` to jump out of any code block. 
 #### Example 
```

javascript foo: { console.log ("Esto imprime:"); romper foo console.log ("Esto nunca se imprimirá"); } console.log ("¡Porque la ejecución salta a aquí!") / \* salida Esto imprime: ¡Porque la ejecución salta hasta aquí! \* /
```
When used with a `continue` statement the `labeled` statement allows you to skip a loop iteration, the advantage comes from being able to jump out from an inner loop to an outer one when you have nested loop statements. Without the use of a `labeled` statement you could only jump out of the existing loop iteration to the `next iteration of the same loop.` 
 #### Example 
```

javascript // sin declaración etiquetada, cuando j == i bucle interno salta a la siguiente iteración prueba de funcionamiento() { para (var i = 0; i <3; i ++) { console.log ("i =" + i); para (var j = 0; j <3; j ++) { si (j === i) { continuar; } console.log ("j =" + j); } } }

/ \* salida i = 0 (nota j = 0 falta) j = 1 j = 2 i = 1 j = 0 (nota j = 1 falta) j = 2 i = 2 j = 0 j = 1 (nota j = 2 falta) \* /

// usando una declaración etiquetada podemos saltar al bucle externo (i) en su lugar prueba de funcionamiento() { exterior: para (var i = 0; i <3; i ++) { console.log ("i =" + i); para (var j = 0; j <3; j ++) { si (j === i) { continúa exterior } console.log ("j =" + j); } } }

/ \* i = 0 (j solo se registra cuando es menor que i) i = 1 j = 0 i = 2 j = 0 j = 1 \* / \`\` \`

### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)
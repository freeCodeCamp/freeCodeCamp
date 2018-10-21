---
title: For Loop
localeTitle: En bucle
---
### Sintaxis

```javascript
for ([initialization]); [condition]; [final-expression]) { 
   // statement 
 } 
```

El javascript `for` declaración consta de tres expresiones y una declaración:

## Descripción

*   inicialización - Ejecutar antes de la primera ejecución en el bucle. Esta expresión se usa comúnmente para crear contadores. Las variables creadas aquí están sujetas al bucle. Una vez que el bucle ha terminado su ejecución se destruyen.
*   condición: expresión que se comprueba antes de la ejecución de cada iteración. Si se omite, esta expresión se evalúa como verdadera. Si se evalúa como verdadero, se ejecuta la instrucción del bucle. Si se evalúa como falso, el bucle se detiene.
*   expresión-final: expresión que se ejecuta después de cada iteración. Generalmente se usa para incrementar un contador. Pero también se puede usar para disminuir un contador.
*   sentencia - Código a repetir en el bucle.

Cualquiera de estas tres expresiones o la declaración puede ser omitida. Para los bucles se utilizan comúnmente para contar un cierto número de iteraciones para repetir una declaración. Utilice una instrucción `break` para salir del bucle antes de que la expresión de condición se evalúe como falsa.

## Errores comunes

**Superando los límites de una matriz**

Cuando se indexa una matriz muchas veces, es fácil superar los límites de la matriz (por ejemplo, intente hacer referencia al cuarto elemento de una matriz de 3 elementos).

```javascript
    // This will cause an error. 
    // The bounds of the array will be exceeded. 
    var arr = [ 1, 2, 3 ]; 
    for (var i = 0; i <= arr.length; i++) { 
       console.log(arr[i]); 
    } 
 
    output: 
    1 
    2 
    3 
    undefined 
```

Hay dos formas de arreglar este código. Establezca la condición en `i < arr.length` o `i <= arr.length - 1`

### Ejemplos

Iterar a través de enteros de 0-8

```javascript
for (var i = 0; i < 9; i++) { 
   console.log(i); 
 } 
 
 output: 
 0 
 1 
 2 
 3 
 4 
 5 
 6 
 7 
 8 
```

Salir de un bucle antes de que la expresión de condición sea falsa

```javascript
for (var elephant = 1; elephant < 10; elephant+=2) { 
    if (elephant === 7) { 
        break; 
    } 
    console.info('elephant is ' + elephant); 
 } 
 
 output: 
 elephant is 1 
 elephant is 3 
 elephant is 5 
```

### Otros recursos

*   [MDN - para declaraciones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
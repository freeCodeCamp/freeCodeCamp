---
title: Switch Statements
localeTitle: Cambiar declaraciones
---
## Cambiar declaraciones

Una instrucción de `switch` en la programación es similar a una instrucción `if-else` , pero tiene la ventaja de que a veces es más fácil de leer cuando hay muchas condiciones. También permite agregar un bloque `default` que se ejecutará si ninguna de las otras condiciones es verdadera.

### Sintaxis:

```javascript
switch(expression) { 
  case 1: 
    console.log('1'); 
    break; 
   case 2: 
     console.log('2'); 
     break; 
   default: 
     console.log('No true condition, default'); 
 } 
```

El fragmento de código anterior muestra la sintaxis de una instrucción de `switch` básico. En este ejemplo, hay 3 escenarios diferentes para:

*   `expression = 1` : la primera condición es verdadera y `1` se imprime en la consola.
*   `expression = 2` : la segunda condición es verdadera y `2` se imprimen en la consola.
*   `expression = 'anything else'` : el caso 1 y el caso 2 son falsos, por lo que se ejecuta la condición predeterminada.

La condición `default` es una condición que se ejecutará si ninguno de los otros casos es verdadero.

Nota: un punto realmente importante que se debe tener en cuenta es que en el fragmento de código anterior, `case 1:` y `case 2:` puede parecer que representa algún tipo de orden, pero `1` y `2` no son más que las respuestas a las que se puede evaluar la `(expression)` . Por lo tanto, en lugar de 1 y 2, puede ser cualquier cosa que la `(expression)` pueda evaluar y se pueda probar.

Por ejemplo:

```javascript
var someValue; 
 var expression = someValue; 
 switch(expression){ 
  case someValue: 
    console.log('10'); // 10 would be printed to the console 
    break; 
  case 23: 
    console.log('12'); 
    break; 
  default: 
    console.log('No matches'); 
 } 
```

Nota: la `expression` en el fragmento anterior puede ser una cadena o un número.

### Descanso

La palabra clave `break` se requiere en cada caso para asegurarse de que solo se ejecute el código en ese caso. Sin el descanso, se podrían ejecutar múltiples casos. Cuando JavaScript alcanza una palabra clave de `break` , se rompe fuera del bloque de conmutación. Si la `break` quedara fuera del ejemplo anterior, esto es lo que sucedería:

```javascript
var expression = 1; 
 switch(expression) { 
  case 1: 
    console.log('1');  // 1 would be printed to console 
  case 2: // As there is no break after case 1, this case is also executed. 
    console.log('2'); // 2 would be printed to the console. 
    break; // break -> Switch statement is exited 
  default: 
    console.log('No true condition, default'); 
 } 
```

### Ejecutar múltiples casos:

`switch` instrucciones de `switch` también permiten que el mismo bloque de código sea ejecutado por múltiples casos. Esto se puede hacer agregando 1 o más `case :` palabras clave antes de un bloque de código.

P.ej:

```javascript
switch (day) { 
  case 4: 
  case 5: 
    console.log('it is nearly the weekend'); 
    break; 
  case 0: 
  case 6: 
    console.log('it is the weekend'); 
    break; 
  default: 
    console.log('Looking forward to the Weekend'); 
 } 
```

En el fragmento anterior:

*   Si el `day` es `4` o `5` (jueves o viernes), `it is nearly the weekend` que se imprimirá en la consola a medida que se ejecuta el primer caso.
*   Si el `day` es `0` o `6` (sábado o domingo), `it is the weekend` que se imprimirá en la consola a medida que se ejecuta el segundo caso.
*   Si `day` es cualquier otro valor, `Looking forward to the Weekend` se imprimirá en la consola, a medida que se ejecuta el caso predeterminado.

### Más información:

[Documentación MDN para switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
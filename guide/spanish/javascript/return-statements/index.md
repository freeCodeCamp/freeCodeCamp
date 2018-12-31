---
title: Return Statement
localeTitle: Declaración de devolución
---
## Introducción

Cuando se llama a una instrucción de **retorno** en una función, se detiene la ejecución de esta función. Si se especifica, se devuelve un valor dado al llamador de la función. Si se omite la expresión, en su lugar se devuelve `undefined` .

```js
    return expression; 
```

Las funciones pueden volver:

*   Valores primitivos (cadena, número, booleano, etc.)
*   Tipos de objetos (arrays, objetos, funciones, etc.)

Nunca devuelva algo en una nueva línea sin usar paréntesis. Esta es una peculiaridad de JavaScript y el resultado será indefinido. Trate de usar siempre paréntesis al devolver algo en varias líneas.

```javascript
function foo() { 
    return 
      1; 
 } 
 
 function boo() { 
    return ( 
      1 
    ); 
 } 
 
 foo(); --> undefined 
 boo(); --> 1 
```

## Ejemplos

La siguiente función devuelve el cuadrado de su argumento, **x** , donde **x** es un número.

```js
    function square(x) { 
       return x * x; 
    } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/C7VT/0)

La siguiente función devuelve el producto de sus argumentos, **arg1** y **arg2** .

```js
    function myfunction(arg1, arg2){ 
       var r; 
       r = arg1 * arg2; 
       return(r); 
    } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/C7VU/0)

Cuando una función `return` un valor sa, el valor puede asignarse a una variable utilizando el operador de asignación ( `=` ). En el siguiente ejemplo, la función devuelve el cuadrado del argumento. Cuando la función se resuelve o finaliza, su valor es el valor ed `return` . El valor se asigna entonces a la variable `squared2` .

```javascript
    function square(x) { 
        return x * x; 
    } 
 
    let squared2 = square(2); // 4 
```

Si no hay una declaración de retorno explícita, lo que significa que a la función le falta la palabra clave de `return` , la función se devuelve automáticamente `undefined` . En el siguiente ejemplo, a la función `square` le falta la palabra clave `return` . Cuando el resultado de llamar a la función se asigna a una variable, la variable tiene un valor `undefined` .

```javascript
    function square(x) { 
        let y = x * x; 
    } 
 
    let squared2 = square(2); // undefined 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/M8BE)

#### Más información:

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

[Enlace MSDN](https://msdn.microsoft.com/en-us/library/22a685h9.aspx)
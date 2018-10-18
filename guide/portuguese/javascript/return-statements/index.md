---
title: Return Statement
localeTitle: Declaração de Devolução
---
## Introdução

Quando uma instrução de **retorno** é chamada em uma função, a execução dessa função é interrompida. Se especificado, um determinado valor é retornado ao chamador da função. Se a expressão for omitida, `undefined` será retornado.

```js
    return expression; 
```

Funções podem retornar:

*   Valores primitivos (string, number, boolean, etc.)
*   Tipos de objetos (matrizes, objetos, funções, etc.)

Nunca retorne algo em uma nova linha sem usar parênteses. Esta é uma peculiaridade do JavaScript e o resultado será indefinido. Tente sempre usar parênteses ao retornar algo em várias linhas.

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

## Exemplos

A função a seguir retorna o quadrado de seu argumento, **x** , onde **x** é um número.

```js
    function square(x) { 
       return x * x; 
    } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/C7VT/0)

A função a seguir retorna o produto de seus argumentos, **arg1** e **arg2** .

```js
    function myfunction(arg1, arg2){ 
       var r; 
       r = arg1 * arg2; 
       return(r); 
    } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/C7VU/0)

Quando uma função `return` um valor sa, o valor pode ser atribuído a uma variável usando o operador de atribuição ( `=` ). No exemplo abaixo, a função retorna o quadrado do argumento. Quando a função resolve ou termina, seu valor é o valor `return` . O valor é então atribuído à variável `squared2` .

```javascript
    function square(x) { 
        return x * x; 
    } 
 
    let squared2 = square(2); // 4 
```

Se não houver instrução de retorno explícita, significando que a função está faltando a palavra-chave `return` , a função retorna automaticamente `undefined` . No exemplo a seguir, a função `square` está faltando a palavra-chave `return` . Quando o resultado de chamar a função é atribuído a uma variável, a variável tem um valor `undefined` .

```javascript
    function square(x) { 
        let y = x * x; 
    } 
 
    let squared2 = square(2); // undefined 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/M8BE)

#### Mais Informações:

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

[Link do MSDN](https://msdn.microsoft.com/en-us/library/22a685h9.aspx)
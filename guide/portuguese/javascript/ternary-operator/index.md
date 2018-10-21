---
title: Ternary Operator
localeTitle: Operador Ternário
---
O operador Ternary substitui um bloco `if` / `else` em um formato condensado. O seguinte é o formato geral do operador ternário.
```
condition ? expr1 : expr2 
```

## Descrição

Se a condição for verdadeira, o operador resolverá o valor de expr1; caso contrário, resolve o valor de expr2.

Por exemplo, para exibir uma mensagem diferente com base no valor da variável isMember, você poderia usar essa instrução:

```javascript
let isMember = true; 
 
 let message = isMember ? 'Welcome Back!' : 'You need to login'; // 'Welcome Back' 
```

Outro método útil para usar um operador Ternary seria enviá-lo para executar condicionalmente uma função ou método

```javascript
    function memberOpen(){ 
        console.log("open"); 
    } 
 
    function memberClose(){ 
        console.log("close"); 
    } 
 
    let isMember = true; 
 
    (isMember) ? memberOpen() : memberClose(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/M8Ge/1)

## Execução de funções com operador ternário

Também é possível executar funções usando o operador ternário, que às vezes pode ser útil e mais legível. No entanto, use-o com cuidado, porque o código é mais difícil de depurar.

```javascript
    const runFirst = true; 
    runFirst ? first() : second(); 
```

## Encadeamento usando o operador ternário

Você também pode encadear um operador ternário indefinidamente, de uma maneira semelhante a usar `else if's` antes do último else de um bloco `if` / `else` . Cada vez que o cólon é usado para indicar a parte else do operador ternário, uma nova condição pode ser declarada até que a condição de finalização final seja usada.

```javascript
    function displayNum(num) { 
     return  num === 3 ? 'number is 3' : num === 2 ? 'number is 2' : num === 1 ? 'number is 1 ' : 'number is not in range'; 
    } 
```

Esse método precisa ser usado com parcimônia nos lugares certos, no entanto, como acontece com vários `else if's` isso pode levar a códigos mais legíveis usando uma instrução switch.

**Leia mais:** [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
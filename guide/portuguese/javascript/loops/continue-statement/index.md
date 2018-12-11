---
title: Continue Statement
localeTitle: Continue a Declaração
---
## Introdução

A instrução **continue** termina a execução das instruções na iteração atual do loop atual ou rotulado e continua a execução do loop com a próxima iteração.
```
continue; 
```

Se a instrução **continue** for usada em uma instrução rotulada, a sintaxe é a seguinte:
```
continue labelName; 
```

Em contraste com a instrução **break** , **continue** não termina completamente a execução do loop; em vez de:

*   Em um `while` loop, ele salta de volta para a condição.
*   Em um loop `for` , ele salta para a expressão de atualização.

## Exemplos

O exemplo a seguir mostra uma `while` laço que tem uma instrução **continue** que é executada quando o valor de **i** é 3. Assim, **n** toma os valores 1, 3, 7 e 12.
```
var i = 0; 
 var n = 0; 
 
 while (i < 5) { 
  i++; 
 
  if (i === 3) { 
    continue; 
  } 
 
  n += i; 
  console.log (n); 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/C7hx/0)

No exemplo a seguir, um loop itera de 1 a 9. As instruções entre **continuar** e o final do corpo `for` são ignoradas devido ao uso da instrução **continue** junto com a expressão `(i < 5)` .
```
for (var i = 1; i < 10; i++) { 
    if (i < 5) { 
        continue; 
    } 
    console.log (i); 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/C7hs/0)

## Outros recursos

*   [Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
*   [Link do MSDN](https://msdn.microsoft.com/en-us/library/8de3fkc8.aspx)
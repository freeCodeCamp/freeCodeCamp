---
title: Break Statement
localeTitle: Declaração de quebra
---
## Introdução

A instrução **break** finaliza o loop atual, o `switch` ou a instrução `label` e transfere o controle do programa para a instrução após a instrução terminada.
```
break; 
```

Se a instrução **break** for usada em uma instrução rotulada, a sintaxe é a seguinte:
```
break labelName; 
```

## Exemplos

A função seguinte tem uma indicação da **ruptura** que termina o `while` de ciclo quando **i** é 3, e, em seguida, devolve o valor **3 \* x.**
```
function testBreak(x) { 
  var i = 0; 
 
  while (i < 6) { 
    if (i == 3) { 
      break; 
    } 
    i += 1; 
  } 
 
  return i * x; 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/C7VM/0)

No exemplo a seguir, o contador está configurado para contar de 1 a 99; no entanto, a instrução **break** termina o loop após 14 contagens.
```
for (var i = 1; i < 100; i++) { 
  if (i == 15) { 
    break; 
  } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/C7VO/0)

## Outros recursos:

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) | [Link do MSDN](https://msdn.microsoft.com/en-us/library/3fhdxafb.aspx)
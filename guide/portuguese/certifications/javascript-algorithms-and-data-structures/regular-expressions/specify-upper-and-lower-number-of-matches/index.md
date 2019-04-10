---
title: Specify Upper and Lower Number of Matches
localeTitle: Especifique o Número Superior e Inferior de Correspondências
---
## Especifique o Número Superior e Inferior de Correspondências

Lembre-se `/a{2,4}/` retornará `true` enquanto houver entre dois e quatro a juntos. Ele retornará `true` para qualquer string que tenha mais de quatro a juntos também.

Todas essas strings retornarão `true` :

```javascript
let threeAs = "aaa"; 
 let fourAs = "aaaa"; 
 let sevenAs = "aaaaaaa"; 
 
 let myRegex = /a{2,4}/; 
 myRegex.test(threeAs) ; // true 
 myRegex.test(fourAs) ; // true 
 myRegex.test(sevenAs) ; // true 
```

## Alerta de Spolier!

Lembre-se de usar `\s` após `Oh{3,6}` para incluir um espaço em branco, seguido de `no` para passar todos os casos de teste. Todos os casos de teste são escritos usando um O maiúsculo, no entanto, os testcases também podem ser passados ​​usando `ignore-case` : `/oh{3,6}\sno/i`

## Solução:

```javascript
let ohStr = "Ohhh no"; 
 let ohRegex = /Oh{3,6}\sno/; // Change this line 
 let result = ohRegex.test(ohStr); 

```
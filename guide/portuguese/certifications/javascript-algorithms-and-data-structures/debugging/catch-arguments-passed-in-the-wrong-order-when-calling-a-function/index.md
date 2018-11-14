---
title: Catch Arguments Passed in the Wrong Order When Calling a Function
localeTitle: Argumentos de captura passados ​​na ordem errada ao chamar uma função
---
## Argumentos de captura passados ​​na ordem errada ao chamar uma função

```javascript
function raiseToPower(b, e) { 
  return Math.pow(b, e); 
 } 
```

*   A função acima é usada para elevar o número base `b` para a potência do expoente `e` .
*   A função deve ser chamada especificamente com variáveis ​​na ordem correta. Caso contrário, a função misturará as duas variáveis ​​e retornará uma resposta indesejada.
*   Certifique-se de que a `power` variável esteja implementando a função `raiseToPower` corretamente.

## Solução:

```javascript
let power = raiseToPower(base, exp); 

```
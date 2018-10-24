---
title: Return Early Pattern for Functions
localeTitle: Retorno do padrão inicial para funções
---
## Retorno do padrão inicial para funções

Este é um esboço. [Ajude nossa comunidade a expandi-lo](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions/index.md) .

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .

Aqui está a situação para resolver:

  ```javascript
  //Situação
  function abTest(a, b) {
    // Mudar apenas o código abaixo desta linha
    
    // Mudar apenas o código acima desta linha
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  // Mudar os valores abaixo para testar o código
  abTest(2,2);
  ```

  Nós precisamos de mudar a função ```abTest``` para que caso ```a``` ou ```b``` seja menor que ```0``` e a função termine imediatamente com o valor de ```undefined```.
  
  Nós adicionamos ao corpo da função uma declaração ```if``` que, sobre as condições de "if ```a``` ou ```b``` são menores que ```0``` - imediamente terminar com um valor de ```undefined```": 
  
  ```javascript
  if (a < 0 || b < 0) {
    return undefined;
  }
```

Agora, se (```if```) ```a``` ou ```b``` for menor que ```0``` - a função termina com um valor de ```undefined```, noutros casos - 

```javascript
 return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
```
  Aqui está a solução completa:

   ```javascript
   // Situação
function abTest(a, b) {
  // Mudar apenas o código abaixo desta linha
  if (a < 0 || b < 0) {
    return undefined;
  }

  // Mudar apenas o código acima desta linha

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}


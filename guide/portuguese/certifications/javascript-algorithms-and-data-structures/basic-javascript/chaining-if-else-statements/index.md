---
title: Chaining If Else Statements
localeTitle: Encadeamento Se Mais Declarações
---
## Encadeamento Se Mais Declarações

*   `If` : o primeiro condicional em toda instrução if / else, caso a condicional seja _verdadeira_ , execute o código e ignore o resto.
*   `Else if` : nunca pode ser usado como o primeiro condicional. É sempre uma condicional depois de um `if` , caso a condicional seja verdadeira, execute o código. Caso contrário, salta para o próximo condicional.
*   `Else` : caso todas as condicionais anteriores sejam _falsas_ , **outra** é executada.

### Explicação do problema:

_Escreva encadeado `if` / `else if` instruções preencherem as seguintes condições_ :

_`num < 5` - retorna "minúsculo" `num < 10` - retorna "Pequeno" `num < 15` - return "Medium" `num < 20` - retorna "Grande" `num >= 20` - retornar "Enorme"_

#### Sugestão 1

Lembre-se de que você pode combinar (encadear) várias declarações `if...else` uma após a outra até que a última use `else if (condition) {do this}` .

> _tente resolver o problema agora_
> 
> #### Sugestão 2
> 
> Às vezes, quando você escreve mais código do que você está acostumado e isso não funciona, as pequenas coisas são o que nos traem. A verificação da falta de ponto-e-vírgula, colchetes etc. pode ser muito útil. _tente resolver o problema agora_

## Alerta de spoiler!

**Solução à frente!**

## Solução:

```javascript
function testSize(num) { 
  // Only change code below this line 
  if (num < 5){ 
    return "Tiny"; 
  } 
  else if (num < 10) { 
    return "Small"; 
  } 
  else if (num < 15){ 
    return "Medium"; 
  } 
  else if (num < 20){ 
    return "Large"; 
  } 
  else { 
    return "Huge"; 
  } 
  // Only change code above this line 
 } 
```

· Executar código em [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Chaining-ifelse-statements)

### Explicação de código

A função primeiro verifica a condição `if` `(num < 5)` . Se for avaliado como `true` , retorna a instrução entre as chaves ("Tiny"). Se isso não acontecer, ele verifica a próxima condição até a última instrução `else` .

### Recursos

*   ["if… else" - _Referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)
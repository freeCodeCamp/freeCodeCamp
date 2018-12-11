---
title: Selecting from Many Options with Switch Statements
localeTitle: Selecionando a partir de muitas opções com instruções de troca
---
## Selecionando a partir de muitas opções com instruções de troca

_Se você tiver muitas opções para escolher, use uma instrução `switch` . Uma instrução `switch` testa um valor e pode ter várias instruções `case` que definem vários valores possíveis. As declarações são executadas a partir do primeiro valor do `case` correspondente até que uma `break` seja encontrada._

_Aqui está um exemplo de pseudocódigo:_

```js
  switch(num) { 
    case value1: 
      statement1; 
      break; 
    case value2: 
      statement2; 
      break; 
    ... 
    case valueN: 
      statementN; 
      break; 
  } 
```

### Um pouco mais de explicação

Uma instrução switch primeiro avalia sua expressão. Em seguida, ele procura a cláusula do primeiro `case` cuja expressão é avaliada para o mesmo valor que o resultado da expressão de entrada (usando a [comparação estrita](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) , ( `===` ) e transfere o controle para essa cláusula, executando as instruções associadas. o valor fornecido, o primeiro caso correspondente é selecionado, mesmo que os casos não sejam iguais entre si.

Se nenhuma cláusula `case` correspondente for encontrada, o programa procurará a cláusula `default` opcional e, se encontrada, transfere o controle para essa cláusula, executando as instruções associadas. Se nenhuma cláusula `default` for encontrada, o programa continuará a execução na instrução após o final do `switch` . Por convenção, a cláusula `default` é a última cláusula, mas não precisa ser assim.

A instrução de `break` opcional associada a cada rótulo de caso assegura que o programa rompe o comutador quando a instrução correspondente é executada e continua a execução na instrução após o comutador. Se `break` for omitido, o programa continua a execução na próxima instrução na instrução `switch` . [1](#cite1)

### Explicação do Problema:

_Escreva uma instrução switch que teste `val` e configure a `answer` para as seguintes condições:_

*   `1` - "alfa",
*   `2` - "beta",
*   `3` - "gama",
*   `4` - "delta".

## Sugestão 1

Lembre-se de que os valores de `case` são testados com igualdade estrita ( `===` ).

> Tente resolver o problema agora!

## Sugestão 2

Não veja as _"condições a seguir"_ como uma lista ordenada como parece na demo freeCodeCamp original, mas como valores e instruções, como mostrado aqui

> Tente resolver o problema agora!

## Alerta de Spoiler!

### Você está completamente certo do que você quer dar uma olhada? …

## Solução básica de código

```js
function caseInSwitch(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val) { 
    case 1: 
      return "alpha"; 
      break; 
    case 2: 
      return "beta"; 
      break; 
    case 3: 
      return "gamma"; 
      break; 
    case 4: 
      return "delta"; 
      break; 
  } 
 
  // Only change code above this line 
  return answer; 
 } 
 
 // Change this value to test 
 caseInSwitch(1); 
```

### Explicação do código

É comum ignorar que os valores do `case` são testados com igualdade estrita com qualquer necessidade de outra expressão, da seguinte forma: `case === value`

## Solução alternativa de código:

```javascript
function caseInSwitch(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch (val){ 
    case 1: 
      answer="alpha"; 
      break; 
    case 2: 
      answer="beta"; 
      break; 
    case 3: 
      answer="gamma"; 
      break; 
    case 4: 
      answer="delta"; 
      break; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 caseInSwitch(1); 
```

· Executar código no [repl.it.](https://repl.it/@AdrianSkar/Basic-JS-Switch-statements)

### Explicação de código

Como você já tem uma variável definida no início da função chamada `answer` e ela é definida como a última instrução de retorno, você pode atribuir novos valores a ela para cada caso e retornará a resposta esperada dependendo do valor que você passa para a função.

### Fontes

1 [Descrição do "switch" - _referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#Description) .
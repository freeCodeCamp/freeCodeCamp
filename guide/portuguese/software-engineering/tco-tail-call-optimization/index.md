---
title: TCO Tail Call Optimization
localeTitle: Otimização de Chamadas TCO
---
## Otimização de Chamadas (TCO)

O Tail Call Optimization ( **TCO** ) é uma solução para o problema de estouro de pilha ao fazer recursão.

### O problema

Cada chamada para uma função é enviada para uma pilha na memória do computador. Quando a função termina, ela é retirada da pilha. Em recursão, a função chama a si mesma, portanto, continua adicionando à pilha até que todas essas funções sejam concluídas. Existe, claro, um limite para esta pilha. Quando há muitas funções chamadas, muitas chamadas são adicionadas à pilha. Quando a pilha está cheia e uma função é chamada, isso resulta em um **estouro de pilha** porque a pilha já está cheia. A função recursiva não terminará e resultará em um erro.

#### Exemplo

Aqui está um exemplo de uma função fatorial JavaScript usando recursão **sem** TCO:

```javascript
  function fact(x) { 
    if (x <= 1) { 
      return 1; 
    } else { 
      return x * fact(x-1); 
    } 
  } 
 
  console.log(fact(10)); // 3628800 
  console.log(fact(10000)); // RangeError: Maximum call stack size exceeded 
```

Observe que executar um `fact` com um argumento de 10000 resultará em um **estouro de pilha** .

### Usando o TCO para resolver o problema

Para resolver isso usando Tail Call Optimization, a instrução onde a função chama a si mesma deve estar em uma posição final. A posição final é a última declaração a ser executada em uma função. Portanto, a chamada da função para si mesma deve ser a última coisa chamada antes que a função termine.

No exemplo anterior, a operação de multiplicação é executada por último na `return x * fact(x-1)` , portanto, não era a operação final da função. Portanto, não é otimizado. Para que seja otimizada a chamada de cauda, ​​você precisa fazer a chamada para si mesmo a última operação da função.

#### Exemplo

Aqui está um exemplo de uma função fatorial JavaScript (ES5) usando recursão **com** TCO.

```javascript
  function fact(n) { 
      return factTCO(n, 1); 
  } 
 
  function factTCO(x, acc) { 
      if (x <= 1) { 
          return acc; 
      } else { 
          return factTCO(x-1, x*acc); 
      } 
  } 
 
  console.log(fact(10)); // 3628800 
  console.log(fact(10000)); // Infinity - Number too large, but unlike the unoptimized factorial, this does not result in stack overflow. 
```

Observe que executar `fact` em 10000 desta vez **não resultará em um estouro de pilha** quando _executado em um navegador que suporte ES6_ porque a chamada para `factTCO` é a última operação da função.

### Por que isso funciona

Quando o compilador ou o interpretador percebe que a auto-chamada é a última operação da função, ela abre a função atual e envia a auto-chamada para a pilha. Desta forma, o tamanho da pilha não é alterado. Portanto, a pilha não transborda por causa da função.

### Notas

#### Mais Informações:

*   [O que é otimização de chamada de cauda?](https://stackoverflow.com/questions/310974/what-is-tail-call-optimization) (StackOverflow)
*   [Otimização de chamada de cauda no ECMAScript 6](http://2ality.com/2015/06/tail-call-optimization.html) (2ality - blog do Dr. Axel Rauschmayer)
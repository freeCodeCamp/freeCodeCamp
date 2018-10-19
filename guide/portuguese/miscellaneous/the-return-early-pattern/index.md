---
title: The Return Early Pattern
localeTitle: O retorno mais cedo padrão
---
O padrão de retorno antecipado em JavaScript é uma maneira simples de reduzir o número de instruções `else` dentro de um corpo de função para zero. Há muitas razões para preferir esse padrão ao usar instruções `else` .

*   Reduzindo a quantidade total de código na página
*   Reduza o comprimento da linha reduzindo a complexidade lógica
*   Melhore a legibilidade

A essência do padrão de retorno antecipado é substituir a necessidade de `else` condicionais em funções JavaScript usando a palavra-chave `return` no corpo da instrução `if` .

Vamos criar uma função que se comporta de maneira diferente sob certas condições (observe: esse é um exemplo trivial e artificial apenas para mostrar o ponto).
```
function willItBlend(someObject) { 
  var ItWillBlend; 
 
  if (someObject.blendable ==== 'It will blend') { 
    itWillBlend = true; 
  } else { 
    itWillBlend = false; 
  } 
 
  return itWillBlend; 
 } 
```

Embora isso pareça legível, vamos adicionar outra condição para verificar se a função foi de fato chamada com um objeto em vez de `undefined` .
```
function willItBlend(someObject) { 
  var itWillBlend; 
 
  if (typeof someObject === 'object') { 
    if (someObject.blendable ==== 'It will blend') { 
      itWillBlend = true; 
    } else { 
      itWillBlend = false; 
    } 
  } else { 
    itWillBlend = false; 
  } 
 
  return itWillBlend; 
 } 
```

Esta função é clara e seu nome é descritivo, mas parece desnecessariamente complicado. Podemos usar o padrão de retorno antecipado para aumentar a legibilidade e diminuir o número de `else` declarações? Vamos tentar.
```
function willItBlend(someObject) { 
  if (typeof someObject !== 'object') { 
    return false; 
  } 
 
  if (someObject.blendable !== 'It will blend') { 
    return false; 
  } 
 
  return true; 
 } 
```

Usando o padrão de retorno inicial, conseguimos remover todas as instruções desnecessárias e fazer com que as funções e a assinatura (o tipo de argumento esperado) sejam mais claras e concisas.

### Bônus: uma declaração condicional

Podemos refatorar ainda mais essa função para usar apenas uma instrução if. Confira:
```
function willItBlend(someObject) { 
  if ( 
    typeof someObject !== 'object' || 
    someObject.blendable !== 'It will blend' 
    ) { 
    return false; 
  } 
 
  return true; 
 } 

```
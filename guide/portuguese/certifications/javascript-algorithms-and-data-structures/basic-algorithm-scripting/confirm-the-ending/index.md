---
title: Confirm the Ending
localeTitle: Confirme o final
---
## Confirme o final

# 🌻 Solução de Código Intermediário:

(Abordagem declarativa)

```javascript
function confirmEnding(str, target) { 
  // "Never give up and good luck will find you." 
  // -- Falcor 
 
  return str.slice(str.length - target.length) === target; 
 } 
 
 confirmEnding("He has to give me a new name", "name"); 
```

#### 🚀 [Run Code](https://repl.it/repls/SardonicRoundAfkgaming)

# Explicação do código:

*   Primeiro usamos o método `slice` copiando a string.
*   Para obter os últimos caracteres em `str` equivalentes ao tamanho do `target` , usamos o método `slice` .
*   O primeiro parâmetro dentro do método `slice` é o índice inicial e o segundo parâmetro seria o índice final.
*   Por exemplo, `str.slice(10, 17)` retornaria `give me` .
*   Neste caso, incluímos apenas um parâmetro que copiará tudo do índice inicial.
*   Nós subtraímos o comprimento de `str` e o comprimento do `target` , assim, obteremos os últimos caracteres restantes equivalentes ao tamanho do `target` .
*   Finalmente, comparamos o resultado de retorno da fatia ao `target` e verificamos se eles possuem os mesmos caracteres.

### Links Relevantes

*   [String.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
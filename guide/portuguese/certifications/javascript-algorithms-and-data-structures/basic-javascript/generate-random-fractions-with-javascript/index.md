---
title: Generate Random Fractions with JavaScript
localeTitle: Gerar frações aleatórias com JavaScript
---
# Gerar frações aleatórias com JavaScript

Números aleatórios são úteis para criar um comportamento aleatório.

JavaScript tem uma função `Math.random()` que gera um número decimal aleatório entre 0 (inclusive) e não chega a 1 (exclusivo). Assim `Math.random()` pode retornar um 0, mas nunca retorna um 1.

## Nota

Assim como Armazenando Valores com o Operador Igual, todas as chamadas de função serão resolvidas antes que o retorno seja executado, para que possamos retornar o valor da função `Math.random()` .

## Instruções

Altere randomFraction para retornar um número aleatório em vez de retornar 0.

## **Aviso !!!**

### **Alerta de Spoiler !!**

Uma solução a seguir:
```
function randomFraction() { 
  // Only change code below this line. 
  var result = 0; 
  // Math.random() can generate 0. We don't want to     return a 0, 
  // so keep generating random numbers until we get one     that isn't 0 
  while (result === 0) { 
    result = Math.random(); 
  } 
 
  return result; 
  // Only change code above this line. 
 } 

```
---
title: Global vs. Local Scope in Functions
localeTitle: Escopo global vs. local em funções
---
## Escopo global vs. local em funções

Lembre-se de que o escopo global significa que a variável está disponível em todo o código. Escopo local, significa que a variável está disponível dentro de um determinado intervalo.

Neste exercício, você tem uma variável `outerWear` no escopo global com "T-shirt" como valor. Agora você deve criar outra variável chamada `outerWear` , mas desta vez dentro da função `myOutfit()` . A solução básica de código da seguinte forma:

```javascript
var outerWear = "T-shirt"; 
 
 function myOutfit() { 
  var outerWear = "sweater"; 
  return outerWear; 
 } 
 
 myOutfit(); 
```

A função retornará o `outerWear` mais próximo que puder encontrar. Desde que criamos um `outerWear` dentro da função, que é o 'mais próximo', então a função retornará "sweater".
---
title: Catch Off By One Errors When Using Indexing
localeTitle: Catch Off One erros ao usar a indexação
---
## Catch Off One erros ao usar a indexação

### Noções básicas

Devido à maneira como os índices JavaScript funcionam, `firstFive` tem **cinco elementos,** mas eles são indexados de **0 a 4** !

```javascript
console.log(len); // 5 
 console.log(firstFive[0]); // 1 
 /**/ 
 console.log(firstFive[4]); // 5 
 console.log(firstFive[5]); // undefined 
```

Isso deve lhe dar o suficiente para entender os limites do `firstFive` . Direcione sua atenção para o loop. O que isso faz? Você poderia tentar depurá-lo para descobrir!

### Depuração

Você recebe este código:

```javascript
  for (let i = 1; i <= len; i++) { 
    console.log(firstFive[i]); 
  } 
```

Para depurar este trecho de código, use `console.clear()` . Qual seria o melhor lugar para isso? A resposta está certa antes da declaração `for` !

```javascript
  console.clear(); 
  for (let i = 1; i <= len; i++) { 
    console.log(firstFive[i]); 
  } 
```

Saída do console:

```text
  Console was cleared. 
  2 
  3 
  4 
  5 
  undefined 
```

### Análise

Examine a saída. Sob essas condições, o loop primeiro imprime o elemento posicionado em 1… que é 2! Ele também tenta imprimir o elemento indexado em 5, que é `undefined` .

Isso pode ser considerado o ponto desse desafio. Mantenha o `console.log()` e o `console.clear()` presentes. Eles ajudarão você a entender como seu código funciona.

### Solução

A maneira mais simples de corrigir isso é alterar as condições for (). Faça com que `i` comece em 0. Além disso, o loop **não deve** ser executado para i == 5. Em outras palavras, o relacionamento entre `i` e `len` deve ser `false` quando i == 5. Isso pode ser obtido usando `i < len` (Is 5 <len? false e o loop não será executado!).

```javascript
  for (let i = 0; i < len; i++) { 
```

**Codificação Feliz!** :computador:

### Recursos

*   [Para o desafio de declarações no FreeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops)
*   [Para declarações em documentos da Web do MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
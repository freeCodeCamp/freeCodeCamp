---
title: For Loop
localeTitle: Para loop
---
### Sintaxe

```javascript
for ([inicialização]); [condição]; [expressão final]) { 
   // bloco de codigo 
 } 
```

A instrução `for` do JavaScript consiste de três expressões e uma declaração:

## Descrição

*   [initialization] - Definido antes da primeira execução no loop. Esta expressão é comumente usada para criar contadores. As variáveis ​​criadas aqui estão no escopo do loop. Uma vez terminado o loop, sua execução é destruída.
*   [condition] - Expressão que é verificada antes da execução de cada iteração. Se omitida esta expressão é avaliada como `true`. Se for avaliada como `true`, a instrução do loop será executada. Se for avaliada como `false`, o loop será interrompido.
*   [final-expression] - Expressão executada após cada iteração. Geralmente usado para incrementar um contador. Mas pode ser usado para diminuir um contador também.
*   //statement - Código a ser repetido no loop

Qualquer uma dessas três expressões ou a declaração pode ser omitida. For loops são comumente usados ​​para contar um certo número de iterações para repetir uma instrução. Use uma instrução `break` para sair do loop antes que a expressão de condição seja avaliada como falsa.

## Armadilhas Comuns

**Ultrapassando os limites de um array**

Ao indexar em um array muitas vezes é fácil exceder os limites do array (ex. Tentar referenciar o 4º elemento de um array de 3 elementos).

```javascript
    // O Limite da matriz(array) foi excedito
    // Isso causará um erro. 
    var arr = [ 1, 2, 3 ]; 
    for (var i = 0; i <= arr.length; i++) { 
       console.log(arr[i]); 
    } 
 
    output: 
    1 
    2 
    3 
    undefined 
```

Existem duas maneiras de corrigir este código. Defina a condição como `i < arr.length` ou `i <= arr.length - 1`

### Exemplos

Iterar entre inteiros de 0 a 8

```javascript
for (var i = 0; i < 9; i++) { 
   console.log(i); 
 } 
 
 output: 
 0 
 1 
 2 
 3 
 4 
 5 
 6 
 7 
 8 
```

Quebra de um loop antes que a expressão de condição seja falsa

```javascript
for (var elefante = 1; elefante < 10; elefante+=2) { 
    if (elefante === 7) { 
        break; 
    } 
    console.info('elefante é ' + elefante); 
 } 
 
 output: 
 elefante is 1 
 elefante is 3 
 elefante is 5 
```

### Outros recursos

*   [MDN - para declarações](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

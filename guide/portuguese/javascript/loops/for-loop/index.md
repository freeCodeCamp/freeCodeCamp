---
title: For Loop
localeTitle: Para loop
---
### Sintaxe

```javascript
for ([initialization]); [condition]; [final-expression]) { 
   // statement 
 } 
```

O javascript `for` instrução consiste em três expressões e uma declaração:

## Descrição

*   Inicialização - Executar antes da primeira execução no loop. Esta expressão é comumente usada para criar contadores. As variáveis ​​criadas aqui estão no escopo do loop. Uma vez terminado o loop, sua execução é destruída.
*   condição - Expressão que é verificada antes da execução de cada iteração. Se omitido, esta expressão é avaliada como verdadeira. Se for avaliado como true, a instrução do loop será executada. Se for avaliado como falso, o loop será interrompido.
*   expressão final - Expressão executada após cada iteração. Geralmente usado para incrementar um contador. Mas pode ser usado para diminuir um contador também.
*   statement - Código a ser repetido no loop

qualquer uma dessas três expressões ou a declaração pode ser omitida. For loops são comumente usados ​​para contar um certo número de iterações para repetir uma instrução. Use uma instrução `break` para sair do loop antes que a expressão de condição seja avaliada como falsa.

## Armadilhas Comuns

**Ultrapassando os limites de um array**

Ao indexar em um array muitas vezes é fácil exceder os limites do array (ex. Tentar referenciar o 4º elemento de um array de 3 elementos).

```javascript
    // This will cause an error. 
    // The bounds of the array will be exceeded. 
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
for (var elephant = 1; elephant < 10; elephant+=2) { 
    if (elephant === 7) { 
        break; 
    } 
    console.info('elephant is ' + elephant); 
 } 
 
 output: 
 elephant is 1 
 elephant is 3 
 elephant is 5 
```

### Outros recursos

*   [MDN - para declarações](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
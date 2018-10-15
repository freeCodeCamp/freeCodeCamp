---
title: Array Destructuring
localeTitle: Destruturação de Matrizes
---
# Destruturação de Matrizes

A desestruturação é uma maneira conveniente de extrair vários valores dos dados armazenados em Arrays. Ele pode ser usado em locais que recebem dados (como o lado esquerdo de uma atribuição). Este recurso é introduzido no `ECMAScript 6` .

Como extrair os valores é especificado através de padrões (leia sobre exemplos).

### Atribuição de variável básica
```
var names = ['neel', 'meet', 'darshan']; 
 var [nameOne, nameTwo, nameThree] = names; 
 console.log(nameOne); // "neel" 
 console.log(nameTwo); // "meet" 
 console.log(nameThree); // "darshan" 
```

### Atribuição separada da declaração

Uma variável pode ser atribuída a seu valor através de desestruturação separada da declaração da variável.
```
var a, b; 
 
 [a, b] = [1, 2]; 
 console.log(a); // 1 
 console.log(b); // 2 
```

### Valores padrão

Uma variável pode receber um padrão, caso o valor descompactado da matriz seja `undefined` .
```
var a, b; 
 
 [a=5, b=7] = [1]; 
 console.log(a); // 1 
 console.log(b); // 7 
```

### Analisando uma matriz retornada de uma função

Sempre foi possível retornar um array de uma função. A desestruturação pode tornar o trabalho com um valor de retorno de matriz mais conciso.

Neste exemplo, `getNames()` retorna os valores `['neel', 'meet']` como sua saída, que pode ser analisada em uma única linha com desestruturação.
```
function getNames() { 
  return ['neel', 'meet']; 
 } 
 
 var neel, meet; 
 [nameOne, nameTwo] = getNames(); 
 console.log(nameOne); // neel 
 console.log(nameTwo); // meet 
```

### Ignorando alguns valores retornados

Você pode ignorar os valores de retorno nos quais não está interessado:
```
function getNames() { 
  return ['neel', 'meet', 'darshan']; 
 } 
 
 var [nameOne, , nameThree] = getNames(); 
 console.log(nameOne); // neel 
 console.log(nameThree); // darshan 
```

Você também pode ignorar todos os valores retornados:
```
[,,] = getNames(); 
```

### Atribuindo o restante de uma matriz a uma variável

Ao desestruturar uma matriz, você pode descompactar e atribuir a parte restante a uma variável usando o padrão restante:
```
var [a, ...b] = [1, 2, 3]; 
 console.log(a); // 1 
 console.log(b); // [2, 3] 
```

Observe que um `SyntaxError` será lançado se uma vírgula final for usada no lado esquerdo com um elemento rest:
```
var [a, ...b,] = [1, 2, 3]; 
 // SyntaxError: rest element may not have a trailing comma 
```

Veja também: **Array Destructuring** | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)
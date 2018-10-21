---
title: Learn About Currying
localeTitle: Aprenda sobre o currying
---
É o ato de pegar uma função com mais de um argumento e convertê-la em uma função equivalente que usa um único argumento. Isso é baseado no retorno de funções parcialmente aplicadas.

**Original**
```
function add (verb, a, b) { 
   return "The " + verb + " of " + a + ' and ' + b + ' is ' + (a + b) 
 } 
 
 add('sum', 5, '6') 
   //=> 'The sum of 5 and 6 is 11' 
```

**Versão Curry**
```
function addCurried (verb) { 
    return function (a) { 
      return function (b) { 
        return "The " + verb + " of " + a + ' and ' + b + ' is ' + (a + b) 
      } 
    } 
  } 
 
  addCurried('total')(6)(5) 
   //=> 'The total of 6 and 5 is 11' 
```

Currying à mão seria um esforço incrível, mas sua estreita relação com a aplicação parcial significa que, se você deixou a aplicação parcial, poderá obter currying. Ou se você tiver curry, você pode obter aplicação parcial esquerda.

Aqui está uma função que curries qualquer função com dois argumentos:
```
  function curryTwo (fn) { 
    return function (x) { 
      return callFirst(fn, x) 
    } 
  } 
 
  function add2 (a, b) { return a + b } 
 
  curryTwo(add2)(5)(6) 
   //=> 11 

```
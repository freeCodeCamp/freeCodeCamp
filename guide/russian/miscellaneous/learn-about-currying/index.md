---
title: Learn About Currying
localeTitle: Узнайте о карри
---
Это акт принятия функции с несколькими аргументами и преобразования ее в эквивалентную функцию, которая принимает один аргумент. Это основано на возврате частично прикладных функций.

**оригинал**
```
function add (verb, a, b) { 
   return "The " + verb + " of " + a + ' and ' + b + ' is ' + (a + b) 
 } 
 
 add('sum', 5, '6') 
   //=> 'The sum of 5 and 6 is 11' 
```

**Curried Version**
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

Каррирование вручную было бы невероятным усилием, но его тесная связь с частичным применением означает, что, если вы оставили частичное приложение, вы можете получить currying. Или, если у вас есть currying, вы можете получить левое частичное приложение.

Вот функция, которая представляет любую функцию с двумя аргументами:
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
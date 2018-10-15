---
title: Learn About Currying
localeTitle: 了解Currying
---
它是一个带有多个参数的函数并将其转换为带有单个参数的等效函数的行为。这基于返回部分应用的函数。

**原版的**
```
function add (verb, a, b) { 
   return "The " + verb + " of " + a + ' and ' + b + ' is ' + (a + b) 
 } 
 
 add('sum', 5, '6') 
   //=> 'The sum of 5 and 6 is 11' 
```

**咖喱版**
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

手工卷曲将是一项令人难以置信的努力，但它与部分应用的密切关系意味着如果你已经部分应用，你可以得到currying。或者如果你有currying，你可以派生左部分应用程序。

这是一个用两个参数来讨论任何函数的函数：
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
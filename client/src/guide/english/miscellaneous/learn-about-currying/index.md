---
title: Learn About Currying
---
It is the act of taking a function with more than one argument and converting it into an equivalent function that takes a single argument. This is based on returning partially applied functions.

**Original**

    function add (verb, a, b) {
       return "The " + verb + " of " + a + ' and ' + b + ' is ' + (a + b)
     }

     add('sum', 5, '6')
       //=> 'The sum of 5 and 6 is 11'

**Curried Version**

    function addCurried (verb) {
        return function (a) {
          return function (b) {
            return "The " + verb + " of " + a + ' and ' + b + ' is ' + (a + b)
          }
        }
      }

      addCurried('total')(6)(5)
       //=> 'The total of 6 and 5 is 11'

Currying by hand would be an incredible effort, but its close relationship with partial application means that if you have left partial application, you can derive currying. Or if you have currying, you can derive left partial application.

Here's a function that curries any function with two arguments:

      function curryTwo (fn) {
        return function (x) {
          return callFirst(fn, x)
        }
      }

      function add2 (a, b) { return a + b }

      curryTwo(add2)(5)(6)
       //=> 11
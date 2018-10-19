---
title: Use the parseInt Function with a Radix
---
## Use the parseInt Function with a Radix


### Problem explanation:
_Use `parseInt()` in the `convertToInteger` function so it converts a binary number to an integer and returns it._

#### Hint 1
If you use a variable to assign the result of `parseInt(str)` to it, remember to return that variable. 
Otherwise you can just use a `return` statement for your function.
> _try to solve the problem now_
> 
#### Hint 2
In this exercise you need to "convert" a binary number into a decimal number using the `radix` parameter in order to specify the base on which the input number is represented on.
> _try to solve the problem now_

## Spoiler alert!

**Solution ahead!**

## Code solution:

```javascript
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");
```
·  Run code at [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Use-parseInt-with-radix).

### Code explanation
- The function takes `str` and returns an integer instead of a string but "understanding" its a binary number instead of a decimal one thanks to the `radix` parameter (2).


### Resources

- ["parseInt()" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- ["Radix" - *Wikipedia*](https://en.wikipedia.org/wiki/Radix)




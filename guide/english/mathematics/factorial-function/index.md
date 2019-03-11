---
title: Factorial Function
---
## Factorial Function

The __factorial__ of a __non-negative integer__ _n_, denoted by _n!_, is the product of __all positive integers less than or equal to *n*__&sup1;. Here are for example the calculations of the factorial of the first six natural numbers.

### Examples

1. 0! = 1 (by convention)
2. 1! = 1
3. 2! = 2 x 1 = 2
4. 3! = 3 x 2 x 1 = 6
5. 4! = 4 x 3 x 2 x 1 = 24
6. 5! = 5 x 4 x 3 x 2 x 3 x 1 = 120

We can implement a function in JavaScript to compute the factorial of a given __non-negative__ integer _n_. Type the lines below in your favorite code editor and run it in order to check if the function works correctly. 
```javascript
function factorial(n) {
    if (n > 0) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    } else if (n == 0) {
        return 1;
    } else {
        return undefined;
    }
}
```

#### More Information:
[Factorial on Wikipedia](https://en.wikipedia.org/wiki/Factorial)

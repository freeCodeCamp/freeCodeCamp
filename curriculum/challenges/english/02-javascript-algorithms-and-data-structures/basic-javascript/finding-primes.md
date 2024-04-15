---
id: 661a724d73a29d468e9f809c
title: Checking Primes
challengeType: 1
dashedName: finding-primes
---

# --description--

Write a program to check if a number is a special type of number called a 'prime number'. A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors.

For example, the number 7 is a prime number because it can only be divided by 1 and 7 without leaving a remainder. However, the number 12 is not a prime number because it has other factors, such as 2, 3, 4, and 6, in addition to 1 and 12.

Take the number from the user.

**Examples:**

If the input number is `97`, it is a prime number, so the output should be `Yes`.

```js
primeNumberCheck(97) // Output: Yes
```

# --instructions--

Write a JavaScript function called `primeNumberCheck` that takes a number as input and prints "Yes" if it's a prime number and "No" otherwise.

Use `if statment`, if the number is not prime than `break` the statment.

# --hints--

`primeNumberCheck(97)` should output `Yes`.


```js
if (typeof primeNumberCheck === 'function') {
  capture();
  primeNumberCheck(97);
  uncapture();
}
assert(logOutput === 'Yes');
```

`primeNumberCheck(49)` should output `Yes`.


```js
if (typeof primeNumberCheck === 'function') {
  capture();
  primeNumberCheck(49);
  uncapture();
}
assert(logOutput === 'Yes');
```

Ensure that you accurately determine whether the number is prime or not.


```js
assert(!code.match(/\/\//));

```

# --seed--
## --seed-contents--


```js
function primeNumberCheck(number) {
    if (number <= 1) {
        console.log("No");
        return;
    }
    let isPrime = true;
       // Only change code below this line

    for (let i = 2; i * i <= number; i++) {
        
        // Only change code above this line
    }
    console.log(isPrime ? "Yes" : "No");
}

```

# --solutions--

```js
function primeNumberCheck(number) {
    if (number <= 1) {
        console.log("No");
        return;
    }
    let isPrime = true;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? "Yes" : "No");
}

```

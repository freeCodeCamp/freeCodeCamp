---
id: 661a724d73a29d468e9f809c
title: Checking Primes
challengeType: 1
dashedName: finding-primes
---

# --description--

**Objective:**
 The objective of this challenge is to write a program that determines whether a given number is a prime number or not.

**Introduction:**
 Prime numbers are a special type of number that are only divisible by 1 and themselves. They play a crucial role in number theory and various mathematical applications. This challenge focuses on writing a program that efficiently identifies whether a given integer is a prime number.

**Challenge:**
 Write a program that takes an integer from the user as input and determines whether the number is a prime number or not. If the number is prime, the program should output "Yes"; otherwise, it should output "No".
 
 For example, the number 7 is a prime number because it can only be divided by 1 and 7 without leaving a remainder. However, the number 12 is not a prime number because it has other factors, such as 2, 3, 4, and 6, in addition to 1 and 12.

Take the number from the user.

**Examples:**

If the input number is `97`, it is a prime number, so the output should be `Yes`.

```js
primeNumberCheck(97) // Output: Yes
```


<h2>Hinglish</h2>

**Lakshya:**
 Iss challenge ka lakshya hai ek program likhna jo nirdharit kare ki ek di gayi sankhya ek mool sankhya hai ya nahin.

**Prastavana:**
 Mool sankhya voh vishesh prakar ki sankhya hain jo sirf 1 aur apne aap se hi bhagya ja sakti hain. Ye sankhya siddhant mein mahatvapurn bhumika nibhati hain aur vibhinn ganitik prayogon mein bhi mahatvapurn hain. Ye challenge us par dhyan kendrit karta hai ki ek diye gaye puraank ko kis tarah se prabhavshali tareeke se pahchane ki vah ek mool sankhya hai ya nahin.

**Chunauti:**
 Ek program likho jo upyogakarta se ek puraank ko input ke roop mein lekar nirdharit kare ki sankhya ek mool sankhya hai ya nahin. Agar sankhya mool hai, toh program "Haan" ko prastut kare; anyatha, "Nahin" ko prastut kare.
 
Udaharan ke liye, sankhya 7 ek prime number hai kyunki isse sirf 1 aur 7 se hi baant kar bina bacha chhoda jaa sakta hai. Halanki, sankhya 12 ek prime number nahi hai kyunki iske alag se doosre factors hote hain, jaise 2, 3, 4, aur 6, sath hi 1 aur 12 ke alawa.

**Udaharan:**

Agar input number `97` hai, to yeh ek prime number hai, isliye output `Yes` hona chahiye.

```js
primeNumberCheck(97) // Output: Yes
```


# --instructions--

Write a JavaScript function called `primeNumberCheck` that takes a number as input and prints "Yes" if it's a prime number and "No" otherwise.

Use `if statment`, if the number is not prime than `break` the statment.

**Prompt** 
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1:  Are there any specific optimizations or techniques you'd like to employ to enhance the efficiency of the prime checking algorithm?</br>
2. Prompt 2: Would you like us to consider any special cases or edge scenarios in our implementation?

# --hints--

`primeNumberCheck(97)` should output `Yes`.


```js
let logOutput = primeNumberCheck(97);
console.assert(logOutput === 'Yes', `Expected "Yes", but got "${logOutput}"`);
```

`primeNumberCheck(49)` should output `No`.


```js
let logOutput = primeNumberCheck(49);
console.assert(logOutput === 'No', `Expected "No", but got "${logOutput}"`);
```

Ensure that you accurately determine whether the number is prime or not.


```js
assert(!code.match(/\/\//));

```

# --seed--
## --seed-contents--


```js
function primeNumberCheck(number) {
   
       // Only change code below this line

        
        // Only change code above this line
}

primeNumberCheck(10);
```

# --solutions--

```js
function primeNumberCheck(number) {
    if (number <= 1) {
        return("No");
    }
    let isPrime = true;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    return(isPrime ? "Yes" : "No");
}
primeNumberCheck(10);
```


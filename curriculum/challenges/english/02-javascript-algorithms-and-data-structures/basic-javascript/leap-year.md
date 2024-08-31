---
id: 6635f1834b9dfd17c2f1ffbe
title: Leap Year
challengeType: 1
dashedName: leap-year
---

# --description--

Write a complete function to check leap year by taking arguments and returning the number of days.

**Introduction**
Leap years are a fascinating concept in Gregorian calendar system. They add an extra day to February every four years (with some exceptions) to keep our calendar synchronized with the Earth's revolution around the sun.

Conditions to check whether any given year is a leap year:
If an year can be divided by 4, it's a leap year.
But, if it can be divided by 100, it's not a leap year, except...
It can also be divided by 400, then it's still a leap year.


**Challenge**
In this challenge, we will learn more about functions, passing parameters, and return statements.


A function does not have to return a hard-coded value. It can return the value stored in a variable. Parameters are special variables for a function, so they can also be returned.
To add a parameter to your function, you need to add a variable name inside the parentheses. For example, this demo function has a name parameter:

```js
function demo(name) {

	}
```

When you call the function, you need to give the parameters a value. When you pass a value to a function call, that value is referred to as an argument. 


Here is an example of calling a demo function and passing “Coder" as the argument for the name parameter.

```js
function demo(name) {
  return name;
}
demo("Coder");
```


Receiving value: All functions in JavaScript return a value, meaning they provide the defined result of calling them for you to use elsewhere. 
For example:- 

```js
	function demo() {
    let call = "Functions are cool!";
    return call;
    }
```


`console.log()` is an in-built function of Javascript that displays the output on the console. It is different from return keyword which is used to return values from inside a function (and return the flow of control to the function call).

An important thing to know about the return keyword is that it does not just define a value to be returned from your function, it also stops the execution of your function code. This means that any code after a return statement will not run.

Complete the function `daysInAnYear.`

<h2>Hinglish</h2>

Likhiye ek puri function jo leap year ko check karne ke liye arguments le aur dinon ki sankhya ko wapas karta hai.

**Prastavna**
Leap years Gregorian calendar system mein ek dilchasp concept hain. Ye har char saalon mein February mein ek extra din add karte hain (kuch exceptions ke saath) taaki hamara calendar suraj ke charon taraf ghoomne wali dhara ke saath sync rahe.

Kisi bhi diye gaye varsh ko leap year hone ka pata lagane ke liye sharten:
Agar ek varsh ko 4 se divide kiya ja sakta hai, to ye ek leap year hai.
Lekin, agar ye 100 se divide kiya ja sakta hai, to ye ek leap year nahi hai, par...
Agar ye 400 se bhi divide kiya ja sakta hai, to ye phir bhi ek leap year hai.


**Challenge**
Is challenge mein, hum functions, parameters pass karna, aur return statements ke baare mein adhik jaanenge.

Ek function ko ek hard-coded value wapas karne ki zarurat nahi hoti. Ye ek variable mein store ki gayi value ko bhi wapas kar sakta hai. Parameters function ke liye khaas variables hote hain, isliye ye bhi wapas kiye ja sakte hain.
Apne function mein ek parameter add karne ke liye, aapko parentheses ke ander ek variable name add karna hoga. For example, is demo function mein ek name parameter hai:

```js
function demo(name) {

	}
```

Jab aap function ko call karte hain, to aapko parameters ko ek value dena hoti hai. Jab aap ek value function call ke liye pass karte hain, to us value ko argument ke roop mein refer kiya jata hai. 

Yaha ek example hai demo function ko call karne ka aur "Coder" ko name parameter ke liye argument ke roop mein pass karne ka.

```js
function demo(name) {
  return name;
}
demo("Coder");
```


Value prapt karna: JavaScript mein sabhi functions ek value return karte hain, matlab ye ki ve aapko kisi aur jagah istemal karne ke liye unhe call karne ka nirdharit result pradan karte hain.
For example:- 

```js
	function demo() {
    let call = "Functions are cool!";
    return call;
    }
```


`console.log()` JavaScript ka ek in-built function hai jo console par output ko display karta hai. Ye return keyword se alag hai jo function ke andar se values ko wapas lana ke liye istemal hota hai (aur control ko function call par wapas lotata hai).

Return keyword ke baare mein ek mahatvapurn baat ye hai ki ye sirf aapke function se ek value wapas lana nirdharit nahi karta, balki ye bhi aapke function code ki execution ko rok deta hai. Iska matlab hai ki kisi return statement ke baad koi bhi code nahi chalega.

Pura karein `daysInAnYear` function.

# --instructions--

1. Write the logic inside the `daysInAnYear` function that;

    a. Accepts a parameter `year`.

    b. Determine if the “year” is a leap year or not.

    c. Return either 365 or 366 accordingly.

2. Call the `daysInAnYear` function, pass 1900 as an argument.
3. Receive the return value in a variable.
4. Print “Yes” or “No” depending on the value returned by the `daysInAnYear` function, using if-else statements.

<hr>

1. `daysInAnYear` function ke andar logic likhein jo;

    a. Ek parameter `year` ko svikar kare.

    b. "year" ko ek leap year hai ya nahi, ye nirdharit kare.

    c. Anusaar 365 ya 366 ko wapas kare.

2. `daysInAnYear` function ko call karein, 1900 ko argument ke roop mein pass karein.
3. Ek variable mein wapas ki gayi value ko prapt karein.
4. `daysInAnYear` function ke dwara wapas ki gayi value ke anusaar "Yes" ya "No" ko print karein, if-else statements ka istemal karke.


# --hints--

`daysInAnYear(1800)` should return `365`.

```js
assert(daysInAnYear(1800)==365);
```

`daysInAnYear(2000)` should return `366`.

```js
assert(daysInAnYear(2000)==366);
```

`daysInAnYear(2024)` should return `366`.

```js
assert(daysInAnYear(2024)==366);
```

# --seed--

## --seed-contents--

```js
function daysInAnYear(year) {

}

```

# --solutions--

```js
function daysInAnYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return 366; // Leap year if divisible by 400
            } else {
                return 365; // Not a leap year if divisible by 100 but not by 400
            }
        } else {
            return 366; // Leap year if divisible by 4 but not by 100
        }
    } else {
        return "No"; // Not a leap year if not divisible by 4
    }
}
daysInAnYear(1800)
daysInAnYear(2000)
daysInAnYear(2024)
```

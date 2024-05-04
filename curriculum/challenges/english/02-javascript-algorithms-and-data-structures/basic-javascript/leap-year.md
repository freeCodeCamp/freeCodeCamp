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



# --instructions--

1. Write the logic inside the `daysInAnYear` function that;

    a. Accepts a parameter `year`.

    b. Determine if the “year” is a leap year or not.

    c. Return either 365 or 366 accordingly.

2. Call the `daysInAnYear` function, pass 1900 as an argument.
3. Receive the return value in a variable.
4. Print “Yes” or “No” depending on the value returned by the `daysInAnYear` function, using if-else statements






# --hints--

`daysInAnYear(1800)` should return `No`.

```js
assert(daysInAnYear(1800)=="No")
```

`daysInAnYear(2000)` should return `Yes`.

```js
assert(daysInAnYear(2000)=="Yes")
```

`daysInAnYear(2024)` should return `Yes`.

```js
assert(daysInAnYear(2024)=="Yes")
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
                return "Yes"; // Leap year if divisible by 400
            } else {
                return "No"; // Not a leap year if divisible by 100 but not by 400
            }
        } else {
            return "Yes"; // Leap year if divisible by 4 but not by 100
        }
    } else {
        return "No"; // Not a leap year if not divisible by 4
    }
}
daysInAnYear(1800)
daysInAnYear(2000)
daysInAnYear(2024)
```

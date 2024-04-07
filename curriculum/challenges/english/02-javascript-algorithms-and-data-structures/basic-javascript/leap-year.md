---
id: 6612f1287ba2d00a05b622ff
title: Leap Year
challengeType: 1
dashedName: leap-year
---

# --description--

Develop JavaScript code that determines whether a user-entered year is a leap year based on the Gregorian calendar rules.

Leap years are a fascinating concept in our calendar system. They add an extra day to February every four years (with some exceptions) to keep our calendar synchronized with the Earth's revolution around the sun. In this challenge, you'll write code to identify leap years based on the specific divisibility rules.

In this JavaScript challenge, you'll create code that cracks the code of leap years!  We'll explore the rules that govern these special years with an extra day in February.  By using conditional statements, you'll be able to determine if a user-entered year qualifies as a leap year based on its divisibility by 4 and 100.



**Note** A year is said to be a leap year if it is either divisible by 400 or it should be divisible by 4 and not by 100

**Tips**   

1. Remember, a leap year occurs every 4 years, except for years that are divisible by 100 but not by 400.
2. Pay attention to the conditions for determining a leap year.
3. Understand the significance of leap years in adjusting the calendar.

**Hints** 

Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt prompt __________
Prompt 1: Can you explain the concept of leap years?
Prompt 2: How can I use conditional statements (if statements) to implement the leap year logic?


# --hints--

`isLeapYear(1800)` should return `No`

```js
assert(isLeapYear(1800)=="No")
```

`isLeapYear(2000)` should return `Yes`

```js
assert(isLeapYear(2000)=="Yes")
```

`isLeapYear(2024)` should return `Yes`

```js
assert(isLeapYear(2024)=="Yes")
```

# --seed--

## --seed-contents--

```js
function isLeapYear(year) {

}

```

# --solutions--

```js
function isLeapYear(year) {
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
isLeapYear(1800)
isLeapYear(2000)
isLeapYear(2024)
```

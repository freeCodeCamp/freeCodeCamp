---
id: 65e97288484dd50f720e6fef
title: Learn Data Types and Conditionals Lesson J
challengeType: 15
dashedName: learn-data-types-and-conditionals-lesson-j
---
# --description--

More complex conditional statements might include multiple conditions. That is why logical operators are used to combine multiple conditions. The logical operators are `&&`, `||` and `!` which are used to represent `and`, `or` and `not` respectively.

The logical operator `||` is used to combine two boolean conditions. It returns `true` if at least one of the conditions is `true`. Otherwise, it returns `false`:

```javascript
let a = 5;
let b = 10;
let c = 15;

if (a > b || a > c) {
  console.log("At least one of the conditions is true");
} else {
  console.log("Both of the conditions are false");
}
```

The logical operator `&&` is used to combine two boolean conditions. It returns `true` only if both of the conditions are `true`. Otherwise, it returns `false`:

```javascript
let a = 5;
let b = 10;
let c = 15;

if (a < b && a < c) {
  console.log("Both of the conditions are true");
} else {
  console.log("At least one of the conditions is false");
}
```

The logical operator `!` is used to negate a boolean condition. It returns `true` if the condition is `false`. Otherwise, it returns `false`:

```javascript
let a = 5;
let b = 10;

if (!(a > b)) {
  console.log("The condition is false");
} else {
  console.log("The condition is true");
}
```

In the above example, the extra pair of parentheses is used to make the code more readable. It is not necessary to use them.

# --questions--

## --text--

You're tasked with writing an `if` statement that checks for the following conditions in a web app to display `Welcome!` to the user:

1. The user must either have a premium account (`isPremium`) or have been a member for more than a year (`membershipDuration` > 12 months).

1. The user must not be currently blocked from the service (`!isBlocked`).

Which if statement correctly checks these conditions?

## --answers--

```javascript
if (isPremium && membershipDuration > 12 && !isBlocked) {
  console.log("Welcome!");
}
```

---

```javascript
if (isPremium || (membershipDuration > 12 && !isBlocked)) {
  console.log("Welcome!");
}
```

---

```javascript
if ((isPremium || membershipDuration > 12) && !isBlocked) {
  console.log("Welcome!");
}
```

---

```javascript
if (!isPremium || membershipDuration <= 12 || isBlocked) {
  console.log("Welcome!");
}
```

## --video-solution--

3

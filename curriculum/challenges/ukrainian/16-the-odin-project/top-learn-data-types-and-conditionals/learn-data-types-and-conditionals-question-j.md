---
id: 65e97288484dd50f720e6fef
title: Вивчіть типи даних та умови. Запитання J
challengeType: 15
dashedName: learn-data-types-and-conditionals-question-j
---

# --description--

Складніші умовні інструкції можуть містити декілька умов. Ось чому логічні оператори використовуються для об’єднання декількох умов. Логічними операторами є `&&`, `||` та `!`, які відповідно представляють `and`, `or` та `not`.

Логічний оператор `||` використовують, щоб об’єднати дві булеві умови. Він повертає `true`, якщо принаймні одна умова `true`. В іншому випадку він повертає `false`:

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

Логічний оператор `&&` використовують, щоб об’єднати дві булеві умови. Він повертає `true`, якщо обидві умови `true`. В іншому випадку він повертає `false`:

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

Логічний оператор `!` використовують, щоб змінити булеву умову на протилежну. Він повертає `true`, якщо умова `false`. В іншому випадку він повертає `false`:

```javascript
let a = 5;
let b = 10;

if (!(a > b)) {
  console.log("The condition is false");
} else {
  console.log("The condition is true");
}
```

У прикладі вище використано додаткову пару дужок, щоб зробити код читабельнішим. Їх необов’язково використовувати.

# --question--

## --text--

Вам потрібно написати інструкцію `if`, яка перевіряє наступні умови в вебзастосунку, щоб відтворити `Welcome!` для користувача:

1. Користувач має преміум профіль (`isPremium`) або користується застосунком більше року (`membershipDuration` > 12 місяців).

1. Користувач не може бути заблокованим (`!isBlocked`).

Яка з інструкцій `if` правильно перевіряє ці умови?

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

---
id: 587d7b89367417b2b2512b49
title: Деструктуроване присвоєння для присвоєння змінних з об’єктів
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

Деструктуризація дозволяє присвоїти нову назву змінної при вилученні значень. Для цього потрібно поставити нову назву після двокрапки, коли присвоюєте значення.

Використовуючи той самий об’єкт, що і в попередньому прикладі:

```js
const user = { name: 'John Doe', age: 34 };
```

Ось так ви можете надати нові назви змінних у присвоєнні:

```js
const { name: userName, age: userAge } = user;
```

Ви можете прочитати це як «отримати значення `user.name` та присвоїти його до нової змінної під назвою `userName`» і т.д. Значенням `userName` буде рядок `John Doe`, а значенням `userAge` буде число `34`.

# --instructions--

Замініть два присвоєння на еквівалентні деструктуровані присвоєння. Вони досі повинні присвоювати змінним `highToday` та `highTomorrow` значення `today` та `tomorrow` з об’єкта `HIGH_TEMPERATURES`.

# --hints--

Ви повинні видалити синтаксис присвоєння ES5.

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

Ви повинні використати деструктуризацію, щоб створити змінну `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

Ви повинні використати деструктуризацію, щоб створити змінну `highTomorrow`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` повинна дорівнювати `77`, а `highTomorrow` повинна дорівнювати `80`.

```js
assert(highToday === 77 && highTomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```

---
id: 587d7b89367417b2b2512b49
title: Використовуйте деструктивне привласнення для визначення змінних із масивів
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

Деструктуризація дозволяє вам призначити нове ім'я змінної при вилученні. Щоб зробити це, поставте нове ім'я після двокрапки при призначенні.

Використовуйте то й же об'єкт що і в останньому прикладі:

```js
const user = { name: 'John Doe', age: 34 };
```

Розглянемо, як ви можете дати нові імена змінним у призначенні:

```js
const { name: userName, age: userAge } = user;
```

Ви можете прочитати це як "отримати значення `user.name` та та назначити нову змінну з назвою `userName`" і т.д. Значення `userName` буде `John Doe`, і значення `userAge` буде числом `34`.

# --instructions--

Замініть два визначення еквівалентами з деструктивного привласнення. Ви все ще призначаєте змінним `highToday` та `highTomorrow` значення `today` та </code>and `tomorrow` з об'єкту `HIGH_TEMPERATURES`.

# --hints--

Видаліть призначення синтаксису ES5.

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

Використовуйте деструкцію, щоб створити змінну `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

Використовуйте деструкцію, щоб створити змінну `highTomorrow`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` повинна дорівнювати `77` та `highTomorrow` має бути рівний `80`.

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

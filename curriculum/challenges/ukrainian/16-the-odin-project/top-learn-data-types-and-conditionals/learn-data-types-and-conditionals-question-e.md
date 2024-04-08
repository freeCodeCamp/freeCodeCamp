---
id: 65e97260484dd50f720e6fea
title: Вивчіть типи даних та умови. Запитання E
challengeType: 15
dashedName: learn-data-types-and-conditionals-question-e
---

# --description--

Рядки, визначені за допомогою зворотних лапок, називають шаблонними літералами. Це новий спосіб визначити рядки в JavaScript. Саме вони дозволяють вставити вирази в межах рядків. Для цього розмістіть вираз в `${}`.

Наприклад, результатом даного коду:

```javascript
let name = "John";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
```

буде змінна `greeting`, яка містить рядок "Hello, my name is John and I am 25 years old."

# --question--

## --text--

Як правильно визначити шаблонний літерал в JavaScript?

## --answers--

`` `Hello, my name is ${name} and I am ${age} years old.` ``

---

`` `Hello, my name is `name` and I am `age` years old.` ``

---

`` `Hello, my name is {name} and I am {age} years old.` ``

---

`` `Hello, my name is $name and I am $age years old.` ``

## --video-solution--

1

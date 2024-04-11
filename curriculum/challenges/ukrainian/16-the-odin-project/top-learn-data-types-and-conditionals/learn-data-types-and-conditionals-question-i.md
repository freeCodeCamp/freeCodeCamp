---
id: 65e97280484dd50f720e6fee
title: Вивчіть типи даних та умови. Запитання I
challengeType: 15
dashedName: learn-data-types-and-conditionals-question-i
---

# --description--

В попередньому прикладі було два варіанти: `if` або `else`. А якщо ви хочете більше? Щоб додати більше умовних інструкцій до коду, можна використати інструкцію `else if`. Інструкція `else if` дозволить перевірити декілька умов та виконає блок коду, якщо перша умова правдива. Якщо перша умова хибна, вона перевірить наступну умову і так далі. Якщо всі інструкції хибні, буде виконано блок `else`.

Ось приклад інструкції `else if`:

```javascript
let x = 5;

if (x > 10) {
  console.log("x is greater than 10");
} else if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is less than or equal to 5");
}
```

У цьому прикладі порівнюють змінну `x` з числом `10`, використовуючи оператор `>`. Якщо значення `x` більше за `10`, то виконується перший блок коду. В іншому випадку інструкція `else if` перевірить наступну умову. Якщо значення `x` більше за `5`, то виконується другий блок коду. В іншому випадку виконається блок `else`.

# --question--

## --text--

Як буде виглядати результат виконання даного коду?

```javascript
let x = 4;

if (x > 10) {
  console.log("x is greater than 10");
} else if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is less than or equal to 5");
}
```

## --answers--

`x is less than or equal to 5`

---

`x is greater than 5`

---

`x is greater than 10`

## --video-solution--

1

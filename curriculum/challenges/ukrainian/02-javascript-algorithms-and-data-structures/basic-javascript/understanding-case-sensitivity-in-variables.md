---
id: 56533eb9ac21ba0edf2244ab
title: Розуміння врахування регістру в змінних
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

У JavaScript усі змінні та назви функцій існують з урахуванням регістру. Це означає, що написання з великої літери має значення.

`MYVAR` - це не теж саме, що й `MyVar` чи `myvar`. Цілком можливо мати декілька різних змінних з одинаковою назвою, але різним відмінком. Наполегливо рекомендується, щоб, заради чіткості, ви *не* використовували цю мовну особливість.

**Найкраща практика**

Напишіть назви змінних у JavaScript в <dfn>camelCase</dfn>. У <dfn>camelCase</dfn>, у назвах змінних, які складаються з декількох слів, перше слово ми пишемо з малої букви, а першу букву кожного наступного слова - з великої.

**Приклади:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

Модифікуйте існуючі оголошення та завдання так, щоб їхні назви використовували <dfn>camelCase</dfn>.

Не створюйте жодних нових змінних.

# --hints--

`studlyCapVar` має бути визначене і мати значення `10`.

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

`properCamelCase` має бути визначене і мати значення рядка `A String`.

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

`titleCaseOver` має бути визначене і мати значення `9000`.

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` має використовувати camelCase як в оголошенні, так і в розділах завдань.

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` має використовувати camelCase як в оголошенні, так і в розділах завдань.

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` має використовувати camelCase як в оголошенні, так і в розділах завдань.

```js
assert(code.match(/titleCaseOver/g).length === 2);
```

# --seed--

## --seed-contents--

```js
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

# --solutions--

```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```

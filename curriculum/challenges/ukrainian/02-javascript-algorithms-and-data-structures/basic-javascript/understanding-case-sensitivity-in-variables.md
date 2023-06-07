---
id: 56533eb9ac21ba0edf2244ab
title: Чуттєвість змінних до регістру
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

Усі назви змінних та функцій у JavaScript чуттєві до регістру. Це означає, що написання з великої літери має значення.

`MYVAR` – це не саме, що `MyVar` чи `myvar`. Ви можете мати декілька різних змінних з одинаковою назвою, але різним регістром. Заради чіткості рекомендовано *не* використовувати цю особливість мови.

**Найкраща практика**

Напишіть назви змінних у JavaScript <dfn>верблюдячимРегістром</dfn>. Назви змінних <dfn>верблюдячимРегістром</dfn> складаються з декількох слів, де перше слово ми пишемо з малої букви, а першу букву кожного наступного слова пишемо з великої.

**Приклади:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

Змініть наявні оголошення та присвоєння так, щоб їхні назви були написані <dfn>верблюдячимРегістром</dfn>.

Не створюйте жодних нових змінних.

# --hints--

`studlyCapVar` повинна бути визначеною та мати значення `10`.

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

`properCamelCase` повинна бути визначеною та мати значення рядка `A String`.

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

`titleCaseOver` повинна бути визначеною та мати значення `9000`.

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` повинна використовувати верблюдячийРегістр як в оголошенні, так і в присвоєнні.

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` повинна використовувати верблюдячийРегістр як в оголошенні, так і в присвоєнні.

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` повинна використовувати верблюдячийРегістр як в оголошенні, так і в присвоєнні.

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

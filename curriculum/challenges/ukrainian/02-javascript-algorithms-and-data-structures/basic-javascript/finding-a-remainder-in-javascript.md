---
id: 56533eb9ac21ba0edf2244ae
title: Пошук остачі в JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

Оператор <dfn>остачі</dfn> `%` надає залишок від ділення двох чисел.

**Приклад**

<pre>
5 % 2 = 1
5 / 2 = 2 остача 1
2 * 2 = 4
5 - 4 = 1
</pre>

**Використання**  
У математиці можна перевірити число як парне чи непарне, поділивши його на `2`. Парні числа мають остачу `0`, а непарні числа мають остачу `1`.

<pre>
17 % 2 = 1
48 % 2 = 0
</pre>

**Примітка:** оператор <dfn>остачі</dfn> іноді неправильно називають оператором модуля. Він дуже схожий на модуль, але працює неправильно з від’ємними числами.

# --instructions--

Встановіть `remainder` рівною остачі від ділення `11` на `3`, використовуючи оператор <dfn>остачі</dfn> (`%`).

# --hints--

Змінна `remainder` повинна бути ініціалізованою

```js
assert(/(const|let|var)\s+?remainder/.test(code));
```

Значенням `remainder` повинне бути `2`

```js
assert(remainder === 2);
```

Ви повинні використати оператор `%`

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function (y) {
  return 'remainder = ' + y;
})(remainder);
```

## --seed-contents--

```js
const remainder = 0;
```

# --solutions--

```js
const remainder = 11 % 3;
```

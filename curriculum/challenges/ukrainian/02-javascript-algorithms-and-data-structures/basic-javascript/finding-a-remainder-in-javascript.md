---
id: 56533eb9ac21ba0edf2244ae
title: Пошук залишку в JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

Оператор <dfn>remainder</dfn> `%` надає залишки від ділення двох чисел.

**Приклад**

<blockquote>5 % 2 = 1 тому що <br>Math.floor(5 / 2) = 2 (Коефіцієнт)<br>2 * 2 = 4<br>5 - 4 = 1 (Залишок)</blockquote>

**Usage**  
В математиці число може бути перевіреним на парність чи непарність шляхом перевірки залишку від ділення числа на `2`.

<blockquote>7 % 2 = 1 (17 є Непарним)<br>48 % 2 = 0 (48 є Парним)</blockquote>

**Примітка:** Оператор <dfn>залишку</dfn> іноді неправильно називають оператором модуля. Він є дуже схожим на модуль, але не працює належним чином з від'ємними числами.

# --instructions--

Встановіть `remainder`, що дорівнює залишку `11` поділеного на `3` використовуючи оператор <dfn>remainder</dfn> (`%`).

# --hints--

Змінна `remainder` повинна бути ініціалізованою

```js
assert(/(const|let|var)\s+?remainder/.test(code));
```

Значення `remainder` повинне бути `2`

```js
assert(remainder === 2);
```

Вам слід використовувати оператор `%`

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(y){return 'remainder = '+y;})(remainder);
```

## --seed-contents--

```js
const remainder = 0;
```

# --solutions--

```js
const remainder = 11 % 3;
```

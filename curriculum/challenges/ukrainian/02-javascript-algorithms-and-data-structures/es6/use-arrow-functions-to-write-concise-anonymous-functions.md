---
id: 587d7b87367417b2b2512b43
title: Стрілкові функції для написання стислих анонімних функцій
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

Часто у JavaScript не потрібно називати функції, особливо коли функція передається як аргумент іншій функції. Натомість ми створюємо вбудовані функції. Їх не потрібно називати, бо вони ніде інше не використовуються.

Для цього використовується наступний синтаксис:

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 надає нам синтаксичний цукор, тому нам не потрібно писати анонімні функції таким чином. Натомість можна використати **синтаксис стрілкової функції**:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

Якщо функція не має тіла та має лише повернене значення, синтаксис стрілкової функції дозволяє опустити ключове слово `return`, а також дужки навколо коду. Це допомагає спростити маленькі функції в однорядкові інструкції:

```js
const myFunc = () => "value";
```

Цей код однаково поверне рядок `value` за замовчуванням.

# --instructions--

Перепишіть функцію, присвоєну до змінної `magic`, яка повертає `new Date()`, щоб вона використовувала синтаксис стрілкової функції. Переконайтесь, що нічого не визначено за допомогою ключового слова `var`.

# --hints--

Ви повинні замінити ключове слово `var`.

```js
assert.notMatch(code, /var/g)
```

`magic` повинна бути константною змінною (використовуйте `const`).

```js
assert.match(code, /const\s+magic/g)
```

`magic` повинна бути функцією (`function`).

```js
assert(typeof magic === 'function');
```

`magic()` повинна повертати правильну дату.

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

Не використовуйте ключове слово `function`.

```js
assert.notMatch(code, /function/g)
```

# --seed--

## --seed-contents--

```js
var magic = function() {
  return new Date();
};
```

# --solutions--

```js
const magic = () => {
  return new Date();
};
```

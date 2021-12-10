---
id: 587d7b87367417b2b2512b43
title: Використовуйте функцію Arrow для опису анонімної функції
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

У JavaScript, нам часто не потрібно називати функцію, особливо при передачі функції в якості аргументу іншої функції. Натомість створюються вбудовані функції. Їх не потрібно називати, бо вони більш ніде не використовуються.

Щоб досягнути цього, використовується наступний синтаксис:

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 надає нам синтаксичні можливості, щоб не використовувати анонімних функцій таким чином. Саме тому варто використовувати **синтаксичну функцію arrow**:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

Коли відсутнє тіло функції, а є лише повернене значення, то синтаксична функція arrow дозволяє опустити ключове слово `return`, а також дужки, що стосуються коду. Це допомагає спростити невелику функцію в однорядковий вираз:

```js
const myFunc = () => "value";
```

Цей код все це поверне рядок `value` за змовчуванням.

# --instructions--

Перепишіть функцію, призначеній змінній `magic`, що перетворюється на`new Date()` використовуючи синтаксичну функцію arrow. Також переконайтесь, що ще нічого не визначено за допомогою ключового слова `var`.

# --hints--

Вам слід замінити ключове слово `var`.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`magic` має бути постійною змінною (використовуйте `const`).

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+magic/g));
```

`magic` має бути `function`.

```js
assert(typeof magic === 'function');
```

`magic()` повинна повернути правильну дату.

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

Не використовуйте ключове слово `function`.

```js
(getUserInput) => assert(!getUserInput('index').match(/function/g));
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

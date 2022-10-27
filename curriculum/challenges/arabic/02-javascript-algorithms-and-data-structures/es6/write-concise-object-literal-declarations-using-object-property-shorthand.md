---
id: 587d7b8a367417b2b2512b4f
title: Write Concise Object Literal Declarations Using Object Property Shorthand
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

يضيف ES6 بعض الدعم اللطيف لتعريف الـ objects بسهولة.

ضع في اعتبارك الكود التالي:

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` هي function بسيطة تعيد object يحتوي على خاصيتين. يوفر ES6 بناء الجملة السهل لإزالة الازدواجية في كتابة `x: x`. يمكنك ببساطة كتابة `x` مرة واحدة، وسيتم تحويله إلى`x: x` (أو ما يعادلها من شيء) خلف الكواليس. إليك نفس الـ function من الأعلى المعاد كتابته لاستخدام هذ الـ syntax الجديد:

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

قم باستخدام خاصية الـ object القصير مع object literals لإنشاء وإرجاع object بخصائص `name` و `age` و `gender`.

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` يجب أن يرجع `{name: "Zodiac Hasbro", age: 56, gender: "male"}`.

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

يجب أن لا يستخدم الكود `key:value`.

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
```

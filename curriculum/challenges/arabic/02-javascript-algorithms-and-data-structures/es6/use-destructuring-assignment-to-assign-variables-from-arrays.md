---
id: 587d7b89367417b2b2512b4b
title: Use Destructuring Assignment to Assign Variables from Arrays
challengeType: 1
forumTopicId: 301213
dashedName: use-destructuring-assignment-to-assign-variables-from-arrays
---

# --description--

ES6 يجعل تفصيص الـ arrays بمعني destructuring arrays سهل مثل تفصيص الـ objects او destructuring objects.

ويتمثل أحد الاختلافات الرئيسية بين spread operator و array destructuring في أن الـ spread operator يقوم بفك جميع محتويات الـ array في قائمة مفصولة بفواصل. وبالتالي، لا يمكنك اختيار العناصر التي تريد تعيينها للمتغيرات.

ويسمح لنا Destructuring الـ array بالقيام بذلك بالتحديد:

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

ستعرض وحدة التحكم قيم `a` و `b` كـ `1, 2`.

المتغير `a` تم تعيينه القيمة الأولى من الـ array، و `b` تم تعيينه القيمة الثانية من الـ array. يمكننا أيضًا الوصول إلى القيمة في أي فهرس في اي array باستخدام الـ destructuring باستخدام الفواصل للوصول إلى الفهرس المطلوب:

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

ستعرض وحدة التحكم قيم `a` و `b` و `c` كـ `1, 2, 5`.

# --instructions--

استخدم destructuring assignment لمبادلة القيم `a` و `b` بحيث أن `a` يتلقى القيمة المخزنة في `b`، و `b` يتلقى القيمة المخزنة في `a`.

# --hints--

قيمة `a` يجب أن تكون `6`، بعد التبديل.

```js
assert(a === 6);
```

قيمة `b` يجب أن تكون `8`، بعد التبديل.

```js
assert(b === 8);
```

يجب عليك استخدام array destructuring لمبادلة `a` و `b`.

```js
assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code));
```

# --seed--

## --seed-contents--

```js
let a = 8, b = 6;
// Only change code below this line
```

# --solutions--

```js
let a = 8, b = 6;
[a, b] = [b, a];
```

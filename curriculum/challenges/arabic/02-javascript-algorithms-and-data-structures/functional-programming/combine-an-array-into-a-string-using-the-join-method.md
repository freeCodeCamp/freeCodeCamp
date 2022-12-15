---
id: 587d7daa367417b2b2512b6c
title: دمج قائمة لإنتاج مقطع نصي باستخدام طريقة join
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

يتم استخدام `join` لربط عناصر الـ array معًا لإنشاء string. يأخذ argument للمحدد الذي يتم استخدامه لفصل عناصر الـ array في الـ string.

إليك مثال:

```js
const arr = ["Hello", "World"];
const str = arr.join(" ");
```

`str` ستكون لها قيمة السلسلة `Hello World`.
# --instructions--

استخدم `join` (من بين methods آخري) داخل الدالة `sentensify` لتكوين جملة من الكلمات في السلسلة `str`. ينبغي أن تعيد الدالة string. على سبيل المثال، `I-like-Star-Wars`> سيتم تحويلها إلى `I like Star Wars`. لهذا التحدي، لا تستخدم `replace`.

# --hints--

يجب أن يستخدم الكود الخاص بك دالة `join`.

```js
assert(code.match(/\.join/g));
```

يجب ألا يستخدم الكود الخاص بك دالة `replace`.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`sentensify("May-the-force-be-with-you")` يجب أن يعيد string.

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

`sentensify("May-the-force-be-with-you")` يجب أن يعيد السلسلة `May the force be with you`.

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

`sentensify("The.force.is.strong.with.this.one")` يجب أن يعيد السلسلة `The force is strong with this one`.

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

`sentensify("There,has,been,an,awakening")` يجب أن يعيد السلسلة `There has been an awakening`.

```js
assert(
  sentensify('There,has,been,an,awakening') === 'There has been an awakening'
);
```

# --seed--

## --seed-contents--

```js
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
```

# --solutions--

```js
function sentensify(str) {
  return str.split(/\W/).join(' ');
}
```

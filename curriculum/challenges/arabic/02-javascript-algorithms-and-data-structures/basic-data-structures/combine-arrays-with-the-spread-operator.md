---
id: 587d7b7b367417b2b2512b17
title: دمج القوائم باستخدام Spread Operator
challengeType: 1
forumTopicId: 301156
dashedName: combine-arrays-with-the-spread-operator
---

# --description--

مِيزة كبيرة أخرى لمشغل <dfn>spread</dfn> هي القدرة على الدمج بين القوائم، أو إدراج جميع عناصر قائمة في قائمة أخرى، في أي ترتيب. في معظم اللغات التقليدية، يمكننا أن نجمع بين القوائم، لكن هذا يسمح لنا فقط بالدمج بين القوائم في نهاية واحدة منهم، وفي بداية الأخرى. تجعل صيغة Spread العملية التالية بسيطة للغاية:

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```

`thatArray` ستكون لها القيمة `['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']`.

وباستخدام صيغة spread، حققت للتو عملية كان من شأنها أن تكون أكثر تعقيدا وأكثر تعمقا لو استخدمنا أساليب تقليدية.

# --instructions--

لقد حددت وظيفة `spreadOut` التي ترجع المتغير `sentence`. عدل الوظيفة باستخدام مشغل <dfn>spread</dfn> بحيث تنتج القائمة `['learning', 'to', 'code', 'is', 'fun']`.

# --hints--

`spreadOut` يجب أن تنتج <`["learning", "to", "code", "is", "fun"]`

```js
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
```

يجب أن تستخدم وظيفة `spreadOut` صيغة spread

```js
assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);
```

# --seed--

## --seed-contents--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
```

# --solutions--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
```

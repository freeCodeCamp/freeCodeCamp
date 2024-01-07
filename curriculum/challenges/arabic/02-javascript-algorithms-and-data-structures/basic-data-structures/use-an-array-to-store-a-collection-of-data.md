---
id: 587d7b7e367417b2b2512b20
title: استخدام القائمة لتخزين مجموعة من البيانات (Use an Array to Store a Collection of Data)
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

أدناه مثال على أبسط تنفيذ لهيكل البيانات Array. هذا معروف باسم <dfn>one-dimensional array</dfn>، بمعنى أن لديه مستوى واحد فقط، أو أنه ليس لديه أي Arrays أخرى داخله. لاحظ أنه يحتوي على <dfn>booleans</dfn> و <dfn>strings</dfn> و <dfn>numbers</dfn> من بين أنواع بيانات أخرى في JavaScript:

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

استدعاء `console.log` سوف يطبع `7`.

جميع Arrays لديها خاصية length، التي كما هو مبين أعلاه، يمكن الوصول إليها بسهولة عن طريق syntax الآتي`Array.length`. ويمكن الاطلاع أدناه على تنفيذ array أكثر تعقيداً. هذا معروف باسم <dfn>multi-dimensional array</dfn>، أو Array تحتوي على Arrays أخرى. لاحظ أن هذه Array تحتوي أيضًا على <dfn>كائنات</dfn> JavaScript، التي سوف تفحصها بدقة كبيرة في القسم التالي، لكن في الوقت الحالي، ما تحتاج معرفته هو أن arrays قادرة أيضا على تخزين objects المعقدة.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

# --instructions--

لقد أعلنا متغير يسمى `yourArray`. أكمل البيان بتعيين array من 5 عناصر في الأقل في الطول لمتغير `yourArray`. يجب أن تحتوي array على <dfn>string</dfn>واحد علي الأفل و <dfn>number</dfn> واحد و <dfn>boolean</dfn> واحد.

# --hints--

`yourArray` يجب أن تكون array.

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

يجب أن يكون `yourArray` طوله 5 عناصر في الأقل.

```js
assert.isAtLeast(yourArray.length, 5);
```

يجب أن يحتوي `yourArray` على `boolean` واحد في الأقل.

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

يجب أن يحتوي `yourArray` على `number` واحد في الأقل.

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

يجب أن يحتوي `yourArray` على `string` واحد في الأقل.

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --seed--

## --seed-contents--

```js
let yourArray; // Change this line
```

# --solutions--

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```

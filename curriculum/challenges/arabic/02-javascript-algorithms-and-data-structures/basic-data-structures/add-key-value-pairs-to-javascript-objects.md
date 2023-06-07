---
id: 587d7b7c367417b2b2512b18
title: إضافة أزواج key-value القيمة و المفتاح إلى كائنات JavaScript
challengeType: 1
forumTopicId: 301153
dashedName: add-key-value-pairs-to-javascript-objects
---

# --description--

الكائنات في أبسط صورها، هي فقط مجموعات من أزواج <dfn>key-value</dfn>. بمعنى آخر هي قطع من البيانات (<dfn>القيم</dfn>) التي تم تعيينها إلى معرّفات فريدة تسمى <dfn>خصائص</dfn> (<dfn>هُوِيَّات</dfn>). ألقي نَّظْرَة على المثال:

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

يحدد التعليمات البرمجية كائن لشخصية في لُعْبَة Tekken يسمى `tekkenCharacter`. له ثلاث خصائص، كل منها يرتبط بقيمة محددة. إذا كنت ترغب في إضافة خاصية إضافية، مثل "origin"، فيمكن ذلك عن طريق تعيين `origin` إلى الكائن:

```js
tekkenCharacter.origin = 'South Korea';
```

يستخدم هذا رمز النقطة (dot notation). إذا لاحظت كائن `tekkenCharacter`، فسيتضمن الآن خاصية `origin`. وكان Hwoarang أيضا شعر برتقالي متميز. يمكنك إضافة هذه الخاصية باستخدام bracket notation عن طريق القيام بما يلي:

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

Bracket notation مطلوب إذا كانت الخاصية الخاصة بك تحتوي على مساحة فيها أو إذا كنت ترغب في استخدام متغير لتسمية الخاصية. في الحالة المذكورة أعلاه، يتم وضع الخاصية بين علامتي اقتباس للإشارة إليها كمقطع وسيتم إضافتها تمامًا كما هو موضح. دون علامتا التنصيص، سيتم تقييمها كمتغير وسيكون اسم الخاصية قيمة المتغير. إليك مثال مع متغير:

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

بعد إضافة جميع الأمثلة، سيبدو الكائن هكذا:

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

# --instructions--

تم إنشاء كائن `foods` مع ثلاث إدخالات. باستخدام الصيغة التي تختارها، أضف ثلاث إدخالات أخرى إليها: `bananas` بقيمة `13` و `grapes` بقيمة `35` و `strawberries` بقيمة `27`.

# --hints--

`foods` يجب أن تكون كائناً.

```js
assert(typeof foods === 'object');
```

يجب أن يحتوي الكائن `foods` على هُوِيَّة `bananas` بقيمة `13`.

```js
assert(foods.bananas === 13);
```

يجب أن يحتوي الكائن `foods` على هُوِيَّة `grapes` بقيمة `35`.

```js
assert(foods.grapes === 35);
```

يجب أن يحتوي الكائن `foods` على هُوِيَّة `strawberries` بقيمة `27`.

```js
assert(foods.strawberries === 27);
```

يجب تعيين أزواج key-value باستخدام dot او علامات الأقواس.

```js
assert(
  code.search(/bananas:/) === -1 &&
    code.search(/grapes:/) === -1 &&
    code.search(/strawberries:/) === -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
```

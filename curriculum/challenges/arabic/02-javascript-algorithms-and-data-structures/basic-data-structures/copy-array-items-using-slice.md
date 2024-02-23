---
id: 587d7b7a367417b2b2512b12
title: نسخ عناصر القائمة باستخدام slice()
challengeType: 1
forumTopicId: 301158
dashedName: copy-array-items-using-slice
---

# --description--

الوظيفة التالية التي سنغطيها هي `slice()`. بدلا من تعديل القائمة، `slice()` تنسخ أو *تستخرج* عدد معين من العناصر إلى قائمة جديدة، دون تغيير للقائمة التي استدعت عليها الوظيفة. تأخذ `slice()` وسيطين (parameters) فقط - يكون الأولى الترتيب الذي يبدأ عنده الاستخراج، ويكون الثاني الترتيب الذي يتم عنده إيقاف الاستخراج (سيحدث الاستخراج حتى الترتيب، ولكن لا يشمل العنصر نهاية الترتيب). ضع في اعتبارك هذا المثال:

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
```

`todaysWeather` ستكون له القيمة `['snow', 'sleet']`، بينما `weatherConditions` ستظل تحتوي على `['rain', 'snow', 'sleet', 'hail', 'clear']`.

وفي الواقع، أنشأنا قائمة جديدة بواسطة استخراج عناصر من قائمة موجودة.

# --instructions--

لقد حددنا الوظيفة `forecast`، التي تأخذ قائمة كحجة (argument). عدل الوظيفة باستخدام `slice()` لاستخراج المعلومات من قائمة الوسيط وأنتج قائمة جديدة تحتوي على عناصر المقاطع النصية `warm` و `sunny`.

# --hints--

`forecast` يجب أن ينتج `["warm", "sunny"]`

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

يجب أن تستخدم وظيفة `forecast` الطريقة `slice()`

```js
assert(/\.slice\(/.test(code));
```

# --seed--

## --seed-contents--

```js
function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

# --solutions--

```js
function forecast(arr) {
  return arr.slice(2,4);
}
```

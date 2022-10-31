---
id: 587d78b2367417b2b2512b0e
title: إضافة عناصر إلى القائمة (array) باستخدام push() و unshift()
challengeType: 1
forumTopicId: 301151
dashedName: add-items-to-an-array-with-push-and-unshift
---

# --description--

طول القائمة، مثل أنواع البيانات التي يمكن أن تحتويها، غير ثابت. ويمكن تعريف القائمات بطول أي عدد من العناصر، ويمكن إضافة العناصر أو إزالتها بمرور الوقت؛ وبعبارة أخرى، القائمات هي قابلة للتغير <dfn>mutable</dfn>. في هذا التحدي، سننظر إلى وظيفتين يمكن بهما تعديل القائمة: `Array.push()` و `Array.unshift()`.

تأخذ كلتا الوظيفتين عنصراً واحداً أو أكثر من العناصر كمعلمات وتضيف هذه العناصر إلى القائمة التي تستدعيها الوظيفة؛ وظيفة `push()` تضيف عناصر إلى نهاية القائمة، و `unshift()` تضيف عناصر إلى البداية. انظر ما يلي:

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
```

`romanNumerals` سيكون لها القيمة `['XIX', 'XX', 'XXI', 'XXII']`.

```js
romanNumerals.push(twentyThree);
```

`romanNumerals` سيكون لها القيمة `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']`. لاحظ أنه يمكننا أيضا تمرير المتغيرات، مما يسمح لنا بمرونة أكبر في التعديل الديناميكي لبيانات القائمة.

# --instructions--

لقد حددنا الوظيفة `mixedNumbers`، التي سنمرر إليها قائمة كحجة. عدل الوظيفة باستخدام `push()` و `unshift()` لإضافة `'I', 2, 'three'` إلى بداية القائمة و `7, 'VIII', 9` إلي النهاية بحيث تحتوي القائمة المعادة على الأرقام 1-9 بالترتيب.

# --hints--

`mixedNumbers(["IV", 5, "six"])` الآن يجب أن ينتج `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`

```js
assert.deepEqual(mixedNumbers(['IV', 5, 'six']), [
  'I',
  2,
  'three',
  'IV',
  5,
  'six',
  7,
  'VIII',
  9
]);
```

يجب أن تستخدم وظيفة `mixedNumbers` الطريقة `push()`

```js
assert(mixedNumbers.toString().match(/\.push/));
```

يجب أن تستخدم وظيفة `mixedNumbers` الطريقة `unshift()`

```js
assert(mixedNumbers.toString().match(/\.unshift/));
```

# --seed--

## --seed-contents--

```js
function mixedNumbers(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
```

# --solutions--

```js
function mixedNumbers(arr) {
  arr.push(7,'VIII',9);
  arr.unshift('I',2,'three');
  return arr;
}
```

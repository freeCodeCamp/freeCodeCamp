---
id: 587d7b7c367417b2b2512b1a
title: الوصول إلى أسماء الخاصية (Property) برمز القوس Bracket Notation
challengeType: 1
forumTopicId: 301150
dashedName: access-property-names-with-bracket-notation
---

# --description--

في تحدي الكائن الأول ذكرنا استخدام علامات الأقواس كوسيلة للوصول إلى قيم الخاصية باستخدام تقييم متغير. على سبيل المثال، تخيل أن كائننا `foods` يستخدمه مكنة لتسجيل النقود في محل تجارة. لدينا وظيفة ما و التي تعين `selectedFood` ونحن نريد التحقق من كائن `foods` للتأكد من وجود ذلك الطعام. وقد يبدو ذلك كالتالي:

```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```

سيقوم هذا الكود بتقييم القيمة المخزنة في متغير `selectedFood` وإرجاع قيمة هذا المفتاح في كائن `foods`، أو `undefined` إذا لم يكن موجودا. Bracket notation مفيد جداً لأن خصائص الكائن في بعض الأحيان غير معروفة قبل وقت التشغيل أو نحتاج إلى الوصول إليها بطريقة أكثر ديناميكية.

# --instructions--

لقد حددنا الوظيفة `checkInventory`، التي تتلقى عنصر scannedItem كحجة. انتج القيمة الحالية لمفتاح `scannedItem` في الكائن `foods`. يمكنك أن تفترض أنه سيتم توفير المفاتيح الصحيحة فقط كحجة لـ `checkInventory`.

# --hints--

`checkInventory` يجب أن تكون وظيفة.

```js
assert.strictEqual(typeof checkInventory, 'function');
```

يجب أن يحتوي الكائن `foods` على أزواج key-value التالية فقط: `apples: 25`, و`oranges: 32`, و`plums: 28`, و`bananas: 13`, و`grapes: 35`, و`strawberries: 27`.

```js
assert.deepEqual(foods, {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
});
```

`checkInventory("apples")` يجب أن ينتج `25`.

```js
assert.strictEqual(checkInventory('apples'), 25);
```

`checkInventory("bananas")` يجب أن ينتج `13`.

```js
assert.strictEqual(checkInventory('bananas'), 13);
```

`checkInventory("strawberries")` يجب أن ينتج `27`.

```js
assert.strictEqual(checkInventory('strawberries'), 27);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(checkInventory("apples"));
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
```

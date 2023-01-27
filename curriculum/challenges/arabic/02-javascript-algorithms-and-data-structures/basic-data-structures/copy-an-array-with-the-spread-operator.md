---
id: 587d7b7b367417b2b2512b13
title: نسخ القائمة باستخدام Spread Operator
challengeType: 1
forumTopicId: 301157
dashedName: copy-an-array-with-the-spread-operator
---

# --description--

بينما `slice()` تسمح لنا بأن نكون انتقائيين حول أي من عناصر القائمة يجب نسخها، من بين عدة مهام مفيدة أخرى، يتيح لنا <dfn>spread operator</dfn> نسخ *كل* عناصر القائمة بسهولة وبالترتيب، باستخدام كود بسيط ومقروء بسهولة. صيغة spread تبدو ببساطة هكذا: `...`

من الناحية العملية، يمكننا استخدام spread operator لنسخ قائمة هكذا مثلا:

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

`thatArray` تساوي `[true, true, undefined, false, null]`. `thisArray` تبقى دون تغيير و `thatArray` تحتوي على نفس العناصر مثل `thisArray`.

# --instructions--

لقد حددنا الوظيفة `copyMachine`, التي تأخذ `arr` (قائمة) و `num` (رَقْم) كحجج (arguments). من المفترض أن ترجع الوظيفة قائمة جديدة تتكون من `num` نسخ من `arr`. لقد قمنا بمعظم العمل من أجلكم، ولكن مازال لا يعمل بشكل صحيح حتى الآن. عدّل الوظيفة باستخدام صيغة spread بحيث تعمل بشكل صحيح (تلميح: وظيفة أخرى غطيتنها من قبل قد تكون مفيدة هنا!).

# --hints--

`copyMachine([true, false, true], 2)` يجب أن تنتج `[[true, false, true], [true, false, true]]`

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

`copyMachine([1, 2, 3], 5)` يجب أن تنتج `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

`copyMachine([true, true, null], 1)` يجب أن تنتج `[[true, true, null]]`

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

`copyMachine(["it works"], 3)` يجب أن تنتج `[["it works"], ["it works"], ["it works"]]`

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

يجب أن تستخدم وظيفة `copyMachine` عملية `spread operator` مع القائمة `arr`

```js
assert(code.match(/\.\.\.arr/));
```

# --seed--

## --seed-contents--

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

# --solutions--

```js
function copyMachine(arr,num){
    let newArr=[];
    while(num >=1){
    newArr.push([...arr]);
    num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
```

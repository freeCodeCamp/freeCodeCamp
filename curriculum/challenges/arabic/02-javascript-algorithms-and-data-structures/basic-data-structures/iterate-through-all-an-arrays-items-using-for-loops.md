---
id: 587d7b7b367417b2b2512b15
title: المرور علي كل عناصر القائمة باستخدام For Loops
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

في بعض الأحيان عند العمل مع القوائم، من المفيد جدا أن نكون قادرين على المرور علي كل عنصر للعثور على عنصر أو أكثر قد تحتاجه، أو للتلاعب بالقائمة استنادا على عناصر تستوفي مجموعة معينة من المعايير. توفر JavaScript العديد من الوظائف المدمجة كل منها تمر علي عناصر القوائم بطرق مختلفة قليلاً لتحقيق نتائج مختلفة (مثل `every()`, و `forEach()`, و `map()`, والخ.) ، ولكن التقنية الأكثر مرونة التي توفر لنا أكبر قدر من التحكم هي حلقة `for`.

انظر إلى المثال التالي:

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```

باستخدام حلقة `for`، هذه الوظيفة تمر علي كل عنصر في القائمة، وتخضعه لاختبار بسيط قمنا بإنشائه. بهذه الطريقة، حددت بسهولة وبرمجيًا العناصر التي هي أكبر من `10`، وأنشئت قائمة جديدة تحتوي على تلك العناصر `[12, 14, 80]`.

# --instructions--

لقد حددنا وظيفة `filteredArray`، التي تأخذ `arr`، وقائمة متداخلة، و `elem`، كحجج، وتنتج قائمة جديدة. `elem` يمثل عنصرا قد يكون أو لا يكون موجودا على واحد أو أكثر من القوائم المتداخلة داخل `arr`. عدّل الوظيفة باستخدام حلقة `for`، لإنتاج قائمة تم تصفيتها بحيث تمت إزالة أي قائمة متداخلة داخل `arr` تحتوي على `elem`.

# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` يجب أن ينتج `[[10, 8, 3], [14, 6, 23]]`

```js
assert.deepEqual(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6]
    ],
    18
  ),
  [
    [10, 8, 3],
    [14, 6, 23]
  ]
);
```

`filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` يجب أن ينتج `[["flutes", 4]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['trumpets', 2],
      ['flutes', 4],
      ['saxophones', 2]
    ],
    2
  ),
  [['flutes', 4]]
);
```

`filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` يجب أن ينتج `[["amy", "beth", "sam"]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['amy', 'beth', 'sam'],
      ['dave', 'sean', 'peter']
    ],
    'peter'
  ),
  [['amy', 'beth', 'sam']]
);
```

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` يجب أن ينتج `[]`

```js
assert.deepEqual(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  ),
  []
);
```

يجب أن تستخدم وظيفة `filteredArray` الحلقة `for`

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --seed--

## --seed-contents--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

# --solutions--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```

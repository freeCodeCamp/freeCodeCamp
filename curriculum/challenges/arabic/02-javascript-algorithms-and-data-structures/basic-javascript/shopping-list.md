---
id: 56533eb9ac21ba0edf2244bc
title: قائمة التسوق (Shopping List)
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

قم إنشاء قائمة تسوق في المتغير `myList`. وينبغي أن تكون القائمة متعددة الأبعاد (multi-dimensional array) تحتوي على عدة قائمات فرعية (sub-arrays).

يجب أن يحتوي العنصر الأول في كل قائمة فرعية (sub-array) على مقطع نصي (string) يحمل اسم الصنف. أما العنصر الثاني فيجب أن يكون رقماً يمثل الكمية مثل.

```js
["Chocolate Bar", 15]
```

وينبغي أن يكون في القائمة خمسة الفرعية (sub-arrays) على الأقل.

# --hints--

يجب أن تكون `myList` قائمة (array).

```js
assert(isArray);
```

يجب أن تكون العناصر الأولى في كل قوائمك فرعية (sub-arrays) مقاطع نصية (strings) كلها.

```js
assert(hasString);
```

يجب أن تكون العناصر الثانية في كل قوائمك فرعية (sub-arrays) أرقام (numbers) كلها.

```js
assert(hasNumber);
```

يجب أن يكون لديك 5 عناصر على الأقل في قائمتك.

```js
assert(count > 4);
```

# --seed--

## --after-user-code--

```js
var count = 0;
var isArray = false;
var hasString = false;
var hasNumber = false;
(function(list){
  if(Array.isArray(myList)) {
    isArray = true;
    if(myList.length > 0) {
      hasString = true;
      hasNumber = true;
      for (var elem of myList) {
        if(!elem || !elem[0] || typeof elem[0] !== 'string') {
          hasString = false;
        }
        if(!elem || typeof elem[1] !== 'number') {
          hasNumber = false;
        }
      }
    }
    count = myList.length;
    return JSON.stringify(myList);
  } else {
    return "myList is not an array";
  }

})(myList);
```

## --seed-contents--

```js
const myList = [];
```

# --solutions--

```js
const myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```

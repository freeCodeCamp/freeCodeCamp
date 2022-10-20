---
id: 56533eb9ac21ba0edf2244bc
title: قائمة التسوق (Shopping List)
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

قم إنشاء قائمة تسوق في المتغير `myList`. وينبغي أن تكون القائمة multi-dimensional array (مصفوفة متعددة الأبعاد) تحتوي على عدة sub-arrays (مصفوفات فرعية).

يجب أن يحتوي العنصر الأول في كل sub-array على string يحمل اسم الصنف. أما العنصر الثاني فيجب أن يكون رقماً يمثل الكمية مثل.

```js
["Chocolate Bar", 15]
```

وينبغي أن يكون في القائمة خمسة sub-arrays على الأقل.

# --hints--

`myList` يجب أن تكون array.

```js
assert(isArray);
```

العناصر الأولى في كل الـ sub-arrays الخاصة بك يجب أن تكون كلها strings.

```js
assert(hasString);
```

العناصر الثانية في كل الـ sub-arrays الخاصة بك يجب أن تكون كلها numbers.

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

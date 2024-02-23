---
id: 56bbb991ad1ed5201cd392cc
title: تغيير القوائم (Arrays) باستخدام طريقة pop
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
dashedName: manipulate-arrays-with-pop
---

# --description--

طريقة أخرى لتغيير البيانات في القائمة (array) هي استخدام الوظيفة `.pop()`.

تستخدم الوظيفة `.pop()` لإزالة (أو قفز pop) قيمة من نهاية القائمة. يمكننا تخزين هذه القيمة المستخرجة عن طريق تعيينها إلى متغير. بعبارة أخرى، تزيل الوظيفة `.pop()` العنصر الأخير من قائمة وتنتج ذلك العنصر.

أي نوع من البيانات يمكن أن تستخرج من القائمة - الأرقام، المقاطع، حتى القوائم المتداخلة.

```js
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

سيعرض أول `console.log` قيمة `6`، وسيعرض الثاني قيمة `[1, 4]`.

# --instructions--

استخدم وظيفة `.pop()` لإزالة العنصر الأخير من `myArray` وعيّن القيمة المستخرجة إلى متغير جديد `removedFromMyArray`.

# --hints--

يجب أن يحتوي `myArray` على `[["John", 23]]` فقط.

```js
assert(
  (function (d) {
    if (d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

يجب عليك استخدام `pop()` على `myArray`.

```js
assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
```

يجب أن يحتوي `removedFromMyArray` على `["cat", 2]` فقط.

```js
assert(
  (function (d) {
    if (d[0] == 'cat' && d[1] === 2 && d[2] == undefined) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
if (typeof removedFromMyArray !== 'undefined') (function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
```

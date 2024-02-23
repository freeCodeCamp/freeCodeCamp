---
id: ae9defd7acaf69703ab432ea
title: أصغر مضاعف مشترك (Smallest Common Multiple)
challengeType: 1
forumTopicId: 16075
dashedName: smallest-common-multiple
---

# --description--

اعثر عن أصغر مضاعف مشترك للوسائط (parameters) المتوفرة التي يمكن تقسيمها بالتساوي على كليهما، وكذلك على جميع الأرقام المتسلسلة في النطاق بين هذه الوسائط.

سيكون النطاق عبارة عن مصفوفة من رقمين لن يكونا بالضرورة بالترتيب العددي.

على سبيل المثال ، إذا أعطيت 1 و 3 ، فابحث عن أصغر مضاعف مشترك لكل من 1 و 3 الذي يمكن أيضًا القسمة عليه بالتساوي على جميع الأرقام *بين* الرقم 1 و 3. الإجابة هنا هي 6.

# --hints--

`smallestCommons([1, 5])` يجب أن ترجع رقماً.

```js
assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
```

`smallestCommons([1, 5])` يجب أن ترجع 60.

```js
assert.deepEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` يجب أن ترجع 60.

```js
assert.deepEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` يجب أن ترجع 2520.

```js
assert.deepEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` يجب أن ترجع 360360.

```js
assert.deepEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` يجب أن ترجع 6056820.

```js
assert.deepEqual(smallestCommons([23, 18]), 6056820);
```

# --seed--

## --seed-contents--

```js
function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);
```

# --solutions--

```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```

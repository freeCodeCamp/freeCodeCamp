---
id: af2170cad53daa0770fabdea
title: التحولات (Mutations)
challengeType: 1
forumTopicId: 16025
dashedName: mutations
---

# --description--

ققم يإرجاع `true` إذا كانت المقطع النصي (string) في العنصر الأول من القائمة تحتوي على جميع الأحرف من القطع النصي (string) في العنصر الثاني من القائمة.

على سبيل المثال، `["hello", "Hello"]`, يجب أن ينتج `true` لأن جميع الحروف في المقطع النصي (string) الثانية موجودة في المقطع النصي (string) الأولى، وذلك بتجاهل حالة الحروف سواء كانت كبيرة أو صغيرة.

الحجج `["hello", "hey"]` يجب أن ينتح `false` لأن المقطع النصي (string) باسم `hello` لا تحتوي على حرف `y`.

أخراً, يجب إن`["Alien", "line"]` ينتج `true` لان كل الحروف في `line` موجودة في `Alien`.

# --hints--

يجب إن `mutation(["hello", "hey"])` ينتج `false`.

```js
assert(mutation(['hello', 'hey']) === false);
```

يجب إن `mutation(["hello", "Hello"])` ينتج `true`.

```js
assert(mutation(['hello', 'Hello']) === true);
```

يجب إن `mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` ينتج `true`.

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

يجب إن `mutation(["Mary", "Army"])` ينتج `true`.

```js
assert(mutation(['Mary', 'Army']) === true);
```

يجب إن `mutation(["Mary", "Aarmy"])` ينتج `true`.

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

يجب إن `mutation(["Alien", "line"])` ينتج `true`.

```js
assert(mutation(['Alien', 'line']) === true);
```

يجب إن `mutation(["floor", "for"])` ينتج `true`.

```js
assert(mutation(['floor', 'for']) === true);
```

يجب إن `mutation(["hello", "neo"])` ينتج `false`.

```js
assert(mutation(['hello', 'neo']) === false);
```

يجب إن `mutation(["voodoo", "no"])` ينتج `false`.

```js
assert(mutation(['voodoo', 'no']) === false);
```

يجب إن `mutation(["ate", "date"])` ينتج `false`.

```js
assert(mutation(['ate', 'date']) === false);
```

يجب إن `mutation(["Tiger", "Zebra"])` ينتج `false`.

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

يجب إن `mutation(["Noel", "Ole"])` ينتج `true`.

```js
assert(mutation(['Noel', 'Ole']) === true);
```

# --seed--

## --seed-contents--

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
```

# --solutions--

```js
function mutation(arr) {
  let hash = Object.create(null);

  arr[0].toLowerCase().split('').forEach(c => hash[c] = true);

  return !arr[1].toLowerCase().split('').filter(c => !hash[c]).length;
}

mutation(["hello", "hey"]);
```

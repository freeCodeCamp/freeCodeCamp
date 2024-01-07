---
id: cf1111c1c11feddfaeb4bdef
title: طرح رَقَم من رَقَم آخر باستخدام JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cP3yQtk'
forumTopicId: 18314
dashedName: subtract-one-number-from-another-with-javascript
---

# --description--

يمكننا أيضا أن نطرح رقما من رقما آخر.

يستخدم JavaScript رمز `-` للطرح.

**مثال**

```js
const myVar = 12 - 6;
```

لدي `myVar` قيمة `6` الآن.
# --instructions--

غيّر `0` بحيث يكون الفرق (difference) `12`.

# --hints--

يجب أن يساوي المتغير `difference` قيمة `12`.

```js
assert(difference === 12);
```

يجب أن تطرح رَقَم واحد فقط من `45`.

```js
assert(/difference=45-33;?/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'difference = '+z;})(difference);
```

## --seed-contents--

```js
const difference = 45 - 0;
```

# --solutions--

```js
const difference = 45 - 33;
```

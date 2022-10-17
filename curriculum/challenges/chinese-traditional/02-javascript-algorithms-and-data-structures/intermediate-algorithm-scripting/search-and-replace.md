---
id: a0b5010f579e69b815e7c5d6
title: 搜索與替換
challengeType: 1
forumTopicId: 16045
dashedName: search-and-replace
---

# --description--

在這道題目中，我們需要寫一個字符串的搜索與替換函數，它的返回值爲完成替換後的新字符串。

這個函數接收的第一個參數爲待替換的句子。

第二個參數爲句中需要被替換的單詞。

第三個參數爲替換後的單詞。

**注意：** 在更換原始單詞時保留原始單詞中第一個字符的大小寫。 即如果傳入的第二個參數爲 `Book`，第三個參數爲 `dog`，那麼替換後的結果應爲 `Dog`

# --hints--

`myReplace("Let us go to the store", "store", "mall")` 應返回 `Let us go to the mall`。

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` 應返回 `He is Sitting on the couch`。

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace("I think we should look up there", "up", "Down")` 應返回 `I think we should look down there`。

```js
assert.deepEqual(
  myReplace('I think we should look up there', 'up', 'Down'),
  'I think we should look down there'
);
```

`myReplace("This has a spellngi error", "spellngi", "spelling")` 應返回 `This has a spelling error`。

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace("His name is Tom", "Tom", "john")` 應返回 `His name is John`。

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace("Let us get back to more Coding", "Coding", "algorithms")` 應返回 `Let us get back to more Algorithms`。

```js
assert.deepEqual(
  myReplace('Let us get back to more Coding', 'Coding', 'algorithms'),
  'Let us get back to more Algorithms'
);
```

# --seed--

## --seed-contents--

```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

# --solutions--

```js
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
```

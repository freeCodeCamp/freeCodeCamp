---
id: a0b5010f579e69b815e7c5d6
title: 搜索与替换
challengeType: 1
forumTopicId: 16045
dashedName: search-and-replace
---

# --description--

在这道题目中，我们需要写一个字符串的搜索与替换函数，它的返回值为完成替换后的新字符串。

这个函数接收的第一个参数为待替换的句子。

第二个参数为句中需要被替换的单词。

第三个参数为替换后的单词。

**注意：** 在更换原始单词时保留原始单词中第一个字符的大小写。 即如果传入的第二个参数为 `Book`，第三个参数为 `dog`，那么替换后的结果应为 `Dog`

# --hints--

`myReplace("Let us go to the store", "store", "mall")` 应返回 `Let us go to the mall`。

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` 应返回 `He is Sitting on the couch`。

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace("I think we should look up there", "up", "Down")` 应返回 `I think we should look down there`。

```js
assert.deepEqual(
  myReplace('I think we should look up there', 'up', 'Down'),
  'I think we should look down there'
);
```

`myReplace("This has a spellngi error", "spellngi", "spelling")` 应返回 `This has a spelling error`。

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace("His name is Tom", "Tom", "john")` 应返回 `His name is John`。

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace("Let us get back to more Coding", "Coding", "algorithms")` 应返回 `Let us get back to more Algorithms`。

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

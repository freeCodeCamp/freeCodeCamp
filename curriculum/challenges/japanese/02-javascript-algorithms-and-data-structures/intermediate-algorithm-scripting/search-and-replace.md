---
id: a0b5010f579e69b815e7c5d6
title: 検索して置換する
challengeType: 1
forumTopicId: 16045
dashedName: search-and-replace
---

# --description--

指定された引数を使用して文章を検索して置換し、新しい文章を返してください。

最初の引数は、検索と置換を実行する文章です。

2 番目の引数は、置換する前の単語です。

3 番目の引数は、2 番目の引数を置換した後の内容です。

**注:** 置換の際、元の単語の 1 文字目のケース (大文字小文字の区別) を保持してください。 たとえば、`Book` という単語を `dog` という単語に置換する場合は、`Dog` と置換する必要があります。

# --hints--

`myReplace("Let us go to the store", "store", "mall")` は、文字列 `Let us go to the mall` を返す必要があります。

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` は、文字列 `He is Sitting on the couch` を返す必要があります。

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace("I think we should look up there", "up", "Down")` は、文字列 `I think we should look down there` を返す必要があります。

```js
assert.deepEqual(
  myReplace('I think we should look up there', 'up', 'Down'),
  'I think we should look down there'
);
```

`myReplace("This has a spellngi error", "spellngi", "spelling")` は、文字列 `This has a spelling error` を返す必要があります。

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace("His name is Tom", "Tom", "john")` は、文字列 `His name is John` を返す必要があります。

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace("Let us get back to more Coding", "Coding", "algorithms")` は、文字列 `Let us get back to more Algorithms` を返す必要があります。

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

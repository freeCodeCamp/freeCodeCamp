---
id: a103376db3ba46b2d50db289
title: ケバブケースに変換する
challengeType: 1
forumTopicId: 16078
dashedName: spinal-tap-case
---

# --description--

文字列をケバブケースに変換してください。 ケバブケースとは、all-lowercase-words-joined-by-dashes のようにすべて小文字の単語をダッシュで結合したものです。

# --hints--

`spinalCase("This Is Spinal Tap")` は文字列 `this-is-spinal-tap` を返す必要があります。

```js
assert.deepEqual(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
```

`spinalCase("thisIsSpinalTap")` は文字列 `this-is-spinal-tap` を返す必要があります。

```js
assert.strictEqual(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
```

`spinalCase("The_Andy_Griffith_Show")` は文字列 `the-andy-griffith-show` を返す必要があります。

```js
assert.strictEqual(
  spinalCase('The_Andy_Griffith_Show'),
  'the-andy-griffith-show'
);
```

`spinalCase("Teletubbies say Eh-oh")` は文字列 `teletubbies-say-eh-oh` を返す必要があります。

```js
assert.strictEqual(
  spinalCase('Teletubbies say Eh-oh'),
  'teletubbies-say-eh-oh'
);
```

`spinalCase("AllThe-small Things")` は文字列 `all-the-small-things` を返す必要があります。

```js
assert.strictEqual(spinalCase('AllThe-small Things'), 'all-the-small-things');
```

# --seed--

## --seed-contents--

```js
function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');
```

# --solutions--

```js
function spinalCase(str) {
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  return str.toLowerCase().replace(/\ |\_/g, '-');
}
```

---
id: 587d78b2367417b2b2512b0f
title: pop() と shift() による配列からのアイテムの削除
challengeType: 1
forumTopicId: 301165
dashedName: remove-items-from-an-array-with-pop-and-shift
---

# --description--

`push()` および `unshift()` と対で、ほぼ反対の機能を持つメソッドが `pop()` および `shift()` です。 ご推察のとおり、`pop()` は配列の末尾から、`shift()` は配列の先頭から、要素を追加するのではなく*削除*します。 `pop()` や `shift()` は同じような仲間の `push()` や `unshift()` と違って、どちらのメソッドもパラメーターを受け取らず、一度に 1 つの配列要素しか変更できません。

以下を見てみましょう。

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
```

`greetings` の値は `['whats up?', 'hello']` になります。

```js
greetings.shift();
```

`greetings` の値は `['hello']` になります。

以下のような方法で、削除された要素の値を返すこともできます。

```js
let popped = greetings.pop();
```

`greetings` の値は `[]` に、`popped` の値は `hello` になります。

# --instructions--

関数 `popShift` を定義しました。この関数は引数として配列を受け取り、新しい配列を返します。 `pop()` と `shift()` を使用して関数を変更してください。引数である配列の最初と最後の要素を削除し、削除された要素を対応する変数に割り当てて、それらの値を含む配列を返すようにします。

# --hints--

`popShift(["challenge", "is", "not", "complete"])` は `["challenge", "complete"]` を返す必要があります。

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

`popShift` 関数で `pop()` メソッドを使用する必要があります。

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

`popShift` 関数で `shift()` メソッドを使用する必要があります。

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --seed--

## --seed-contents--

```js
function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

# --solutions--

```js
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
```

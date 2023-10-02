---
id: 8d1323c8c441eddfaeb5bdef
title: セットクラスを作成する
challengeType: 1
forumTopicId: 301632
dashedName: create-a-set-class
---

# --description--

この課題では、「セット (集合)」と呼ばれる抽象的なデータ構造を模倣するために、`Set` という名前のクラスを作成します。 セットは配列と似ていますが、重複した値を含むことはできません。 セットの典型的な使用方法は、単純に要素の有無を確認することです。 次の例を見れば、ES6 `Set` オブジェクトの仕組みが分かります。

```js
const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false
```

まず、セットに値が存在しない場合は、セットコレクションに値を追加する add メソッドを作成します。 次に、値が既に存在する場合は、セットコレクションから値を削除する remove メソッドを作成します。 最後に、セットコレクション内の要素の数を返す size メソッドを作成します。

# --instructions--

セットコレクションに一意の値を追加する `add` メソッドを作成し、値が正常に追加された場合は `true`、それ以外の場合は `false` を返してください。

値を受け入れてそれがセット内に存在するかどうかを調べる、`remove` メソッドを作成してください。 値が存在する場合、このメソッドはセットコレクションからそれを削除し、`true` を返す必要があります。 値が存在しない場合は、`false` を返す必要があります。 セットコレクションのサイズを返す `size` メソッドを作成してください。

# --hints--

`Set` クラスに `add` メソッドが必要です。

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.add === 'function';
  })()
);
```

`add` メソッドは重複値を追加してはいけません。

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.add('a');
    var vals = test.values();
    return vals[0] === 'a' && vals[1] === 'b' && vals.length === 2;
  })()
);
```

`add` メソッドは、値が正常に追加された場合に `true` を返す必要があります。

```js
assert(
  (function () {
    var test = new Set();
    var result = test.add('a');
    return result != undefined && result === true;
  })()
);
```

`add` メソッドは、重複値が追加された場合に `false` を返す必要があります。

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    var result = test.add('a');
    return result != undefined && result === false;
  })()
);
```

`Set` クラスに `remove` メソッドが必要です。

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.remove === 'function';
  })()
);
```

`remove` メソッドは、セット内に存在する要素のみを削除する必要があります。

```js
assert.deepEqual(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('c');
    return test.values();
  })(),
  ['a', 'b']
);
```

`remove` メソッドは、指定された要素をセットから削除する必要があります。

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    var vals = test.values();
    return vals[0] === 'b' && vals.length === 1;
  })()
);
```

`Set` クラスに `size` メソッドが必要です。

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.size === 'function';
  })()
);
```

`size` メソッドはコレクション内の要素の数を返す必要があります。

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.remove('a');
    return test.size() === 1;
  })()
);
```

# --seed--

## --seed-contents--

```js
class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }
}
```

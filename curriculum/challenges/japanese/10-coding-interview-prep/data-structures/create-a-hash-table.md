---
id: 587d825b367417b2b2512c8e
title: ハッシュテーブルを作成する
challengeType: 1
forumTopicId: 301627
dashedName: create-a-hash-table
---

# --description--

このチャレンジでは、ハッシュテーブルについて学びます。 ハッシュテーブルは、連想配列、すなわちキーと値のペアのマッピング (例えば、これまでに学んだオブジェクトやマップ) を実装するために使用されます。 例えば、JavaScript オブジェクトはハッシュテーブルとして実装することができます (実際の実装は実行環境によって異なります)。 ハッシュテーブルの仕組みは、キー入力を受け取り、決定論的方法でこのキーを何らかの数値にハッシュすることです。 この数値は、関連付けられた値が格納される際の実際のキーとして使用されます。 次に、同じキーにアクセスしようとすると、ハッシュ関数はそのキーを処理して同じ数値結果を返し、それは関連付けられた値の検索に使用されます。 これにより、平均ケースでの検索時間は非常に効率的な O(1) になります。

ハッシュテーブルは、指定された範囲内で配列インデックスを生成するハッシュ関数を持つ配列として実装できます。 この方法では、ハッシュ関数と同様に配列サイズの選択が重要です。 例えば、ハッシュ関数が 2 つの異なるキーに対して同じ値を生成したらどうなりますか？ これは衝突と呼ばれます。 衝突を処理する方法の一つは、キーと値のペアを両方ともそのインデックスに格納することです。 その場合、そのどちらかを検索するとき、あなたが探しているキーを見つけるために大量の要素に対して検索を繰り返す必要があります。 優れたハッシュ関数は、高い検索効率を維持するために衝突を最小限に抑えます。

ここではハッシュ法やハッシュテーブル実装を詳しく知る必要はなく、それらの大まかな仕組みを理解すれば十分です。

# --instructions--

ハッシュテーブルの基本的な機能を作成しましょう。 単純なハッシュ関数が既に用意されています。 関数 `hash` に文字列値を渡すと、ストレージのキーとして使用できるハッシュ値が返されます。 このハッシュ値に基づいて要素を `this.collection` オブジェクトに格納します。 `add`、`remove`、`lookup` という 3 つのメソッドを作成してください。 最初のメソッドで、ハッシュテーブルに追加するキーと値のペアを受け入れます。 2 番目のメソッドで、キーを渡すときにキーと値のペアを削除します。 3 番目のメソッドで、キーを受け入れ、関連付けられた値を返すか、キーが存在しない場合は `null` を返します。

衝突を考慮しながらコードを記述してください！

**注:** `remove` メソッドのテストは、`add` メソッドと `lookup` メソッドが正しく実装されるまで成功しません。

# --hints--

The `HashTable` data structure should exist.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test === 'object';
  })()
);
```

The `HashTable` should have an `add` method.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.add === 'function';
  })()
);
```

The `HashTable` should have a `lookup` method.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.lookup === 'function';
  })()
);
```

The `HashTable` should have a `remove` method.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    return typeof test.remove === 'function';
  })()
);
```

The `add` method should add key value pairs and the `lookup` method should return the values associated with a given key.

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    return test.lookup('key') === 'value';
  })()
);
```

The `remove` method should accept a key as input and should remove the associated key value pair.

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');

    test.remove('key');
    return !test.collection.hasOwnProperty(hashValue);
  })()
);
```

The `remove` method should only remove the correct key value pair.

```js
assert(
  (function () {
    var test = false;
    var hashValue = hash('key');
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    test.add('key', 'value');
    test.add('yek', 'value');
    test.add('altKey', 'value');

    test.remove('yek');
    if (test.lookup('yek') || !test.lookup('key') || !test.lookup('altKey')) {
      return false;
    }

    test.remove('key');

    return !test.collection.hasOwnProperty(hashValue) && test.lookup('altKey');
  })()
);
```

要素はハッシュ関数を使用して追加される必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('key2', 'value2');
    test.add('key3', 'value3');
    return called >= 3 && called % 3 === 0;
  })()
);
```

ハッシュテーブルは衝突を処理する必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof HashTable !== 'undefined') {
      test = new HashTable();
    }
    called = 0;
    test.add('key1', 'value1');
    test.add('1key', 'value2');
    test.add('ke1y', 'value3');
    return (
      test.lookup('key1') === 'value1' &&
      test.lookup('1key') == 'value2' &&
      test.lookup('ke1y') == 'value3'
    );
  })()
);
```

# --seed--

## --before-user-code--

```js
var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};
```

## --seed-contents--

```js
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line

  this.add = function(key, val) {
    var theHash = hash(key);
    if (!this.collection.hasOwnProperty(theHash)) {
      this.collection[theHash] = {};
    }
    this.collection[theHash][key] = val;
  }

  this.remove = function(key) {
    var theHash = hash(key);
    var hashedObj = this.collection[theHash];
    if (hashedObj.hasOwnProperty(key)) {
      delete hashedObj[key];
    }
    if (!Object.keys(hashedObj).length) {
      delete this.collection[theHash];
    }
  }

  this.lookup = function(key) {
    var theHash = hash(key);
    if (this.collection.hasOwnProperty(theHash)) {
      return this.collection[theHash][key];
    }
    return null
  }
  // Only change code above this line
};
```

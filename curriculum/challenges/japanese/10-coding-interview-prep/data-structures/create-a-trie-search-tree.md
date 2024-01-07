---
id: 587d8259367417b2b2512c84
title: トライ探索木を作成する
challengeType: 1
forumTopicId: 301634
dashedName: create-a-trie-search-tree
---

# --description--

二分探索木の次は、トライ (trie) と呼ばれる別のタイプのツリー構造を見てみましょう。 トライは、文字列を保持するためや、より一般的には、キーが文字列である連想配列や動的データセットを保持するために広く使われる、順序付き探索木です。 それらは、多数のキーの接頭辞が重複している場合に (例えば辞書内のすべての単語)、データセットを格納することに非常に適しています。 二分木とは異なり、ノードは実際の値と関連付けられません。 代わりに、ノードへの経路が特定のキーを表します。 例えば、文字列 "code" をトライに格納したい場合、c — o — d — e の文字のそれぞれに 1 つずつ、計 4 つのノードがあります。 これらすべてのノードを通る経路をたどると、文字列 "code" が作成されます。私たちはその経路をキーとして保存します。 次に、文字列 "coding" を追加したいとします。そのキーは、d の後に分岐する前の "code" の最初の 3 つのノードを共有します。 こうすれば、大規模なデータセットを非常にコンパクトに保存できます。 また、保存する文字列の長さに完全に限定されるため、検索を非常に素早く行えます。 さらに、二分木とは異なり、ノードは任意の数の子ノードを格納できます。 上の例から分かるように、後の走査でも引き続きキーを取得できるように、そのキーの末尾を持つノードに何らかのメタデータを格納することが一般的です。 例えば、上の例でコードを追加した場合、"code" の "e" は以前に入力されたキーの末尾を表すということを、何らかの方法で知る必要があります。 そうしなければ、コードを追加したときにこの情報は完全に失われます。

# --instructions--

単語を格納するためのトライを作成しましょう。 そのトライは、`add` メソッドで単語を受け入れ、それらをトライデータ構造に格納します。 また、与えられた文字列が単語かどうかを問い合わせるために `isWord` メソッドを使ったり、トライに格納されたすべての単語を取得するために `print` メソッドを使ったりできます。 `isWord` should return a boolean value and `print` should return an array of all these words as string values. このデータ構造が正しく実装されていることを確認するために、木の各ノードに `Node` 構造が用意されています。 各ノードは、JavaScript Map オブジェクトである `keys` プロパティを持つオブジェクトです。 これには、各ノードの有効なキーである個々の文字が格納されます。 また、各ノードには `end` プロパティが既に作成されており、ノードが単語の終了を表す場合にこのプロパティを `true` に設定することができます。

# --hints--

The `Trie` should have an `add` method.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

The `Trie` should have a `print` method.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

The `Trie` should have an `isWord` method.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.isWord == 'function';
  })()
);
```

The `print` method should return all items added to the trie as strings in an array.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('jump');
    test.add('jumps');
    test.add('jumped');
    test.add('house');
    test.add('mouse');
    var added = test.print();
    return (
      added.indexOf('jump') != -1 &&
      added.indexOf('jumps') != -1 &&
      added.indexOf('jumped') != -1 &&
      added.indexOf('house') != -1 &&
      added.indexOf('mouse') != -1 &&
      added.length == 5
    );
  })()
);
```

The `isWord` method should return `true` only for words added to the trie and `false` for all other words.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('hop');
    test.add('hops');
    test.add('hopped');
    test.add('hoppy');
    test.add('hope');
    return (
      test.isWord('hop') &&
      !test.isWord('ho') &&
      test.isWord('hopped') &&
      !test.isWord('hopp') &&
      test.isWord('hoppy') &&
      !test.isWord('hoping')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```

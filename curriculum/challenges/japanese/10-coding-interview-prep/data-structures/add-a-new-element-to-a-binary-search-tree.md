---
id: 587d8257367417b2b2512c7b
title: 二分探索木に新しい要素を追加する
challengeType: 1
forumTopicId: 301618
dashedName: add-a-new-element-to-a-binary-search-tree
---

# --description--

この一連のチャレンジでは、ツリーデータ構造について学びます。 木 (ツリー) は、コンピュータサイエンスにおいて重要かつ汎用的なデータ構造です。 もちろん名称の由来は、そのデータ構造を視覚化すると自然界の木に似ていることです。 ツリーデータ構造は、一般に「根」と呼ばれる 1 つのノードで始まり、ここから追加のノードに枝分かれします。それぞれのノードがいくつかの子ノードに枝分かれし、その子ノードがさらに枝分かれしていきます。 データ構造を視覚化する際、通常は根ノードを一番上に置くので、木を逆さにした状態と考えることができます。

最初に、木に関してよく使われる用語について説明します。 「根ノード」は木の一番上にあります。 木の中のデータポイントは「ノード」と呼ばれます。 他のノードにつながる枝を持つノードは、枝の先にあるノード (子) の親と呼ばれます。 他に複雑な関連用語がありますが、それぞれ言葉通りの意味です。 「部分木」は特定ノードのすべての子孫を指し、枝は「エッジ」と呼ばれることもあります。「葉ノード」は、子を持たず木の末端にあるノードです。 最後に、木は本質的に再帰的なデータ構造であることに注目してください。 つまり、あるノードの子はそれが持つ部分木の親でもあり、それが子孫で繰り返されていきます。 木に対する一般的な操作のアルゴリズムを設計する際には、木の再帰性を理解することが重要です。

To begin, we will discuss a particular type of tree, the binary tree. 実際には、特別な二分木である「二分探索木」についてです。 これが何を意味するのかを以下に説明します。 ツリーデータ構造では 1 つの ノードが何本でも枝を持てますが、二分木ではすべてのノードに枝が 2 本しかありません。 さらに二分探索木では、左部分木の各ノードの値が親ノードの値以下になり、右部分木の各ノードの値が親ノードの値以上になるという形で、子部分木を基準にして順序が決まります。 視覚化すると、この関係は一目瞭然です。

<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img style='width: 100%; max-width: 350px; background-color: var(--gray-05);' src='https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png'></div>

これで、順序付けの関係が簡単に分かります。 注目すべき点は、根ノードである 8 の左側の値はすべて 8 より小さく、右側の値はすべて 8 より大きいということです。 また、この関係がそれぞれの部分木にも当てはまるという点に注意してください。 例えば、左側にある最初の子は部分木です。 3 は親ノードであり、ちょうど 2 つの子ノードを持っています。二分探索木のルールにより、このノードの左側の子 (およびそのすべての子) は 3 より小さく、右側の子 (およびそのすべての子) は 3 よりも大きい (ただし、この構造の根の値よりも小さい) ということは、もう見なくても分かります。

二分探索木は、検索、挿入、削除などの一般的な操作の平均ケースで対数時間計算量なので、非常によく使われる便利なデータ構造です。

# --instructions--

シンプルなもので始めましょう。 ここでは、木のノードを作成する関数に加えて、二分探索木構造のスケルトンを定義してあります。 各ノードの左右に値があることを確認してください (ない場合もあります)。 それらには子部分木が割り当てられます (それらが存在する場合)。 In our binary search tree, you will create a method to add new values to the tree. そのメソッドは `add` と呼ばれ、木に追加する整数値を受け入れる必要があります。 二分探索木の不変条件を必ず守ってください。つまり、左側のそれぞれの子の値は親値以下、右側のそれぞれ子の値は親値以上でなければなりません。 ここでは、ツリーが重複値を保持できないようにしましょう。 既に存在する値を追加しようとした場合、メソッドから `null` が返される必要があります。 それ以外の場合、追加が成功したら `undefined` が返される必要があります。

**ヒント:** 木は本質的に再帰的なデータ構造です！

# --hints--

`BinarySearchTree` データ構造が存在する必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    }
    return typeof test == 'object';
  })()
);
```

二分探索木に `add` というメソッドが必要です。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

add メソッドは二分探索木のルールに従って要素を追加する必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    const expectedResult = [1, 4, 7, 8, 34, 45, 73, 87];
    const result = test.inOrder();
    return expectedResult.toString() === result.toString();
  })()
);
```

既に存在する要素を追加すると、`null` が返される必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
      return false;
    }
    test.add(4);
    return test.add(4) == null;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    inOrder() {
      if (!this.root) {
        return null;
      }
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.value);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }
);
```

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.add = function(element) {
    let current = this.root;
    if (!current) {
      this.root = new Node(element);
      return;
    } else {
      const searchTree = function(current) {
        if (current.value > element) {
          if (current.left) {
            return searchTree(current.left);
          } else {
            current.left = new Node(element);
            return;
          }
        } else if (current.value < element) {
          if (current.right) {
            return searchTree(current.right);
          } else {
            current.right = new Node(element);
            return;
          }
        } else {
          return null;
        }
      };
      return searchTree(current);
    }
  };
}
```

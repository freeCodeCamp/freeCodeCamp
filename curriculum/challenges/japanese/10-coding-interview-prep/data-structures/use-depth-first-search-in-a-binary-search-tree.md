---
id: 587d8257367417b2b2512c7e
title: 二分探索木で深さ優先探索を使用する
challengeType: 1
forumTopicId: 301719
dashedName: use-depth-first-search-in-a-binary-search-tree
---

# --description--

二分探索木で特定の値を検索する方法は既に学びました。 しかし、木全体を探索したい場合はどうすれば良いでしょうか？ あるいは、順序付きの木がないときに、単に値を検索したい場合はどうでしょうか？ ここでは、ツリーデータ構造を探索するために木を走査する方法をいくつか紹介します。 1 つ目は深さ優先探索です。 深さ優先探索は、探索が別の部分木に移る前に、与えられた部分木をできるだけ深く探索します。 これを行うには次の 3 つの方法があります。通りがけ順: 左端のノードで探索を開始し、右端のノードで終了します。 行きがけ順: 葉より先にすべての根を探索します。 帰りがけ順: 根より先にすべての葉を探索します。 お察しの通り、木がどのような種類のデータを格納しているか、そして何を探したいかに応じて、異なる検索方法を選択できます。 二分探索木の場合、通りがけ順走査は、ソートされた順序でノードを返します。

# --instructions--

ここでは、二分探索木に対してこれら 3 つの探索方法を作成します。 深さ優先探索は、子ノードが存在する限りさらに部分木の探索を続けるという、本質的に再帰性を持つ操作です。 この基本概念を理解したら、ノードと部分木の探索順序を変えるだけで上述の 3 つの探索をすべて作成できます。 例えば帰りがけ順の探索では、ノード自体を返し始める前に、葉ノードまでの全体を再帰的に探索します。一方、行きがけ順の探索では、最初にノードを返してから、木の下の方へ再帰的に探索し続けます。 この木に `inorder`、`preorder`、`postorder` の各メソッドを定義してください。 これらの各メソッドは、木の走査を表す要素の配列を返す必要があります。 ノード自体ではなく、配列内の各ノードの整数値を返すようにしてください。 最後に、木が空の場合は `null` を返してください。

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

二分探索木に `inorder` というメソッドが必要です。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.inorder == 'function';
  })()
);
```

二分探索木に `preorder` というメソッドが必要です。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.preorder == 'function';
  })()
);
```

二分探索木に `postorder` というメソッドが必要です。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.postorder == 'function';
  })()
);
```

`inorder` メソッドは、通りがけ順走査によって得たノード値の配列を返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.inorder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.inorder().join('') == '012345678910';
  })()
);
```

`preorder` メソッドは、行きがけ順走査によって得たノード値の配列を返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.preorder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.preorder().join('') == '710325469810';
  })()
);
```

`postorder` メソッドは、帰りがけ順走査によって得たノード値の配列を返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.postorder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.postorder().join('') == '024653181097';
  })()
);
```

`inorder` メソッドは、空の木の場合に `null` を返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.inorder !== 'function') {
      return false;
    }
    return test.inorder() == null;
  })()
);
```

`preorder` メソッドは、空の木の場合に `null` を返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.preorder !== 'function') {
      return false;
    }
    return test.preorder() == null;
  })()
);
```

`postorder` メソッドは、空の木の場合に `null` を返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.postorder !== 'function') {
      return false;
    }
    return test.postorder() == null;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    add: function(value) {
      function searchTree(node) {
        if (value < node.value) {
          if (node.left == null) {
            node.left = new Node(value);
            return;
          } else if (node.left != null) {
            return searchTree(node.left);
          }
        } else if (value > node.value) {
          if (node.right == null) {
            node.right = new Node(value);
            return;
          } else if (node.right != null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }

      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        return searchTree(node);
      }
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
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.result = [];

  this.inorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    if (node.left) this.inorder(node.left);
    this.result.push(node.value);
    if (node.right) this.inorder(node.right);
    return this.result;
  };
  this.preorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    this.result.push(node.value);
    if (node.left) this.preorder(node.left);
    if (node.right) this.preorder(node.right);
    return this.result;
  };
  this.postorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    if (node.left) this.postorder(node.left);
    if (node.right) this.postorder(node.right);
    this.result.push(node.value);

    return this.result;
  };
}
```

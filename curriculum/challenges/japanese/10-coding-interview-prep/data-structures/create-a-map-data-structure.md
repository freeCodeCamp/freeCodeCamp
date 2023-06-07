---
id: 8d5823c8c441eddfaeb5bdef
title: マップデータ構造を作成する
challengeType: 1
forumTopicId: 301629
dashedName: create-a-map-data-structure
---

# --description--

次のいくつかのチャレンジでは、マップとハッシュテーブルについて学びます。 マップはキーと値のペアを格納するデータ構造です。 JavaScript では、これらをオブジェクトとして利用できます。 マップは、キー値に基づいて格納された要素の迅速な検索を可能にする、非常に一般的で便利なデータ構造です。

# --instructions--

自分だけのマップを作る練習をしましょう。 JavaScript オブジェクトは、ここで書けるものよりもはるかに効率的なマップ構造を提供しているので、ここでの主な目的は学習のために練習することです。 ただし、JavaScript オブジェクトは特定の操作のみを提供します。 カスタム操作を定義したい場合はどうなるでしょう？ ここで提供されている `Map` オブジェクトを JavaScript `object` のラッパーとして使用します。 Map オブジェクトに対する以下のメソッドと操作を作成してください。

<ul>
<li><code>add</code> は <code>key、value</code> のペアを受け入れてマップに追加します</li>
<li><code>remove</code> はキーを受け入れ、関連付けられた <code>key、value</code> のペア を削除します</li>
<li><code>get</code> は <code>key</code> を受け入れ、格納された <code>value</code> を返します</li>
<li><code>has</code> は <code>key</code> を受け入れ、キーが存在する場合は <dfn>true</dfn> を返し、そうでない場合は <dfn>false</dfn> を返します</li>
<li><code>values</code> はマップ内のすべての値の配列を返します</li>
<li><code>size</code> はマップ内の要素数を返します</li>
<li><code>clear</code> はマップを空にします</li>
</ul>

# --hints--

The `Map` data structure should exist.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return typeof test == 'object';
  })()
);
```

The `Map` object should have the following methods: `add`, `remove`, `get`, `has`, `values`, `clear`, and `size`.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    return (
      typeof test.add == 'function' &&
      typeof test.remove == 'function' &&
      typeof test.get == 'function' &&
      typeof test.has == 'function' &&
      typeof test.values == 'function' &&
      typeof test.clear == 'function' &&
      typeof test.size == 'function'
    );
  })()
);
```

The `add` method should add items to the map.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add(5, 6);
    test.add(2, 3);
    test.add(2, 5);
    return test.size() == 2;
  })()
);
```

The `has` method should return `true` for added items and `false` for absent items.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('test', 'value');
    return test.has('test') && !test.has('false');
  })()
);
```

The `get` method should accept keys as input and should return the associated values.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('abc', 'def');
    return test.get('abc') == 'def';
  })()
);
```

The `values` method should return all the values stored in the map as strings in an array.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('a', 'b');
    test.add('c', 'd');
    test.add('e', 'f');
    var vals = test.values();
    return (
      vals.indexOf('b') != -1 &&
      vals.indexOf('d') != -1 &&
      vals.indexOf('f') != -1
    );
  })()
);
```

The `clear` method should empty the map and the `size` method should return the number of items present in the map.

```js
assert(
  (function () {
    var test = false;
    if (typeof Map !== 'undefined') {
      test = new Map();
    }
    test.add('b', 'b');
    test.add('c', 'd');
    test.remove('asdfas');
    var init = test.size();
    test.clear();
    return init == 2 && test.size() == 0;
  })()
);
```

# --seed--

## --seed-contents--

```js
var Map = function() {
  this.collection = {};
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
var Map = function() {
    this.collection = {};
    // Only change code below this line

    this.add = function(key,value) {
      this.collection[key] = value;
    }

    this.remove = function(key) {
      delete this.collection[key];
    }

    this.get = function(key) {
      return this.collection[key];
    }

    this.has = function(key) {
      return this.collection.hasOwnProperty(key)
    }

    this.values = function() {
      return Object.values(this.collection);
    }

    this.size = function() {
      return Object.keys(this.collection).length;
    }

    this.clear = function() {
      for(let item of Object.keys(this.collection)) {
        delete this.collection[item];
      }
    }
    // Only change code above this line
};
```

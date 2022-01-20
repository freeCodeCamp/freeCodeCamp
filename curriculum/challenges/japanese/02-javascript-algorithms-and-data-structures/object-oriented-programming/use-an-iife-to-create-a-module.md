---
id: 587d7db2367417b2b2512b8c
title: IIFE を使用してモジュールを作成する
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

即時実行関数式 (IIFE) は、関連する機能を 1 つのオブジェクトまたは<dfn>モジュール</dfn>にグループ化する場合によく使用されます。 たとえば、以前のチャレンジでは 2 つのミックスインを定義しました。

```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

これらのミックスインを次のようにしてモジュールにグループ化することができます。

```js
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
```

オブジェクト `motionModule` を返す即時実行関数式 (IIFE) を使用していることに注意してください。 返されたオブジェクトには、オブジェクトのプロパティとしてミックスインのすべての動作が含まれています。 モジュールパターンの利点として、すべてのモーション動作を単一のオブジェクトにまとめ、コードの他の部分で利用することができます。 使用例を次に示します。

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

`funModule` という名前のモジュールを作成して、2 つのミックスイン `isCuteMixin` と `singMixin` をまとめてください。 `funModule` はオブジェクトを返す必要があります。

# --hints--

`funModule` を定義し、オブジェクトを返す必要があります。

```js
assert(typeof funModule === 'object');
```

`funModule.isCuteMixin` は関数にアクセスする必要があります。

```js
assert(typeof funModule.isCuteMixin === 'function');
```

`funModule.singMixin` は関数にアクセスする必要があります。

```js
assert(typeof funModule.singMixin === 'function');
```

# --seed--

## --seed-contents--

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
```

# --solutions--

```js
const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();
```

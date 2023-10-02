---
id: 587d7db2367417b2b2512b89
title: ミックスインを使用して互いに関連性のないオブジェクト間に共通の動作を追加する
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

ここまで見てきたように、動作は継承を通じて共有されます。 しかし、継承が最善の解決策とはならない場合もあります。 たとえば `Bird` と `Airplane` のような、互いに関連性のないオブジェクトの場合、継承はうまく機能しません。 どちらも飛ぶことができますが、`Bird` は `Airplane` の一種ではなく、逆もまた同様です。

関連性のないオブジェクトどうしの場合は、<dfn>ミックスイン</dfn>を使用する方が適切です。 ミックスインを使用すると、他のオブジェクトで関数のコレクションを使用できるようになります。

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

`flyMixin` は、任意のオブジェクトを受け取り、`fly` メソッドを与えます。

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

ここで `bird` と `plane` を `flyMixin` に渡します。すると、それぞれのオブジェクトに `fly` 関数が割り当てられ、 `bird` と `plane` の両方が飛べるようになります。

```js
bird.fly();
plane.fly();
```

コンソールには、文字列 `Flying, wooosh!` が 2 回、`.fly()` の呼び出しごとに 1 回ずつ表示されます。

このようにミックスインによって、互いに無関係のオブジェクト `bird` と `plane` で同じ `fly` メソッドを再利用できるようになります。

# --instructions--

`glide` という名前のメソッドを定義する `glideMixin` という名前のミックスインを作成してください。 次に、`glideMixin` を使用して、`bird` と `boat` の両方に glide の能力を与えてください。

# --hints--

関数である `glideMixin` 変数を宣言する必要があります。

```js
assert(typeof glideMixin === 'function');
```

コードの `bird` オブジェクトで `glideMixin` を使用して、 `glide` メソッドを与える必要があります。

```js
assert(typeof bird.glide === 'function');
```

コードの `boat` オブジェクトで `glideMixin` を使用して、`glide` メソッドを与える必要があります。

```js
assert(typeof boat.glide === 'function');
```

# --seed--

## --seed-contents--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
```

# --solutions--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
function glideMixin (obj) {
  obj.glide = () => 'Gliding!';
}

glideMixin(bird);
glideMixin(boat);
```

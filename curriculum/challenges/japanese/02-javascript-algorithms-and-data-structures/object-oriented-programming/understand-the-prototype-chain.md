---
id: 587d7db0367417b2b2512b82
title: プロトタイプチェーンを理解する
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

JavaScript 内のすべてのオブジェクトは (いくつかの例外を除いて) `prototype` を持っています。 また、オブジェクトの `prototype` それ自体もオブジェクトです。

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

`prototype` はオブジェクトであるため、`prototype` は独自の `prototype` を持つことができます！ この場合、`Bird.prototype` の `prototype` は `Object.prototype` です。

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

これはどのように役立つのでしょうか？ 前のチャレンジで説明した `hasOwnProperty` メソッドを思い出してください。

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

`hasOwnProperty` メソッドは `Object.prototype` で定義されており、`Bird.prototype` でアクセスでき、さらに Bird.prototype には `duck` でアクセスできます。 これは `prototype` チェーンの例です。 この `prototype` において、`Bird` は `duck` に対する `supertype` であり、一方 `duck` は `subtype` です。 `Object` は `Bird` と `duck` 両方に対する `supertype` です。 `Object` は JavaScript におけるすべてのオブジェクトの `supertype` です。 したがって、任意のオブジェクトで `hasOwnProperty` メソッドを使用することができます。

# --instructions--

コードを変更して、正しいプロトタイプチェーンを表示してください。

# --hints--

`Object.prototype` が `Dog.prototype` のプロトタイプであることを示す必要があります。

```js
assert(/Object\.prototype\.isPrototypeOf/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```

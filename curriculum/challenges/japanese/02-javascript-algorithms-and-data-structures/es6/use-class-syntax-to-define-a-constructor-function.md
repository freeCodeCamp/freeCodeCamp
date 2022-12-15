---
id: 587d7b8b367417b2b2512b53
title: class 構文を使用してコンストラクター関数を定義する
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 では、<dfn>class</dfn> キーワードを使用してオブジェクトを作成する新しい構文が提供されています。

`class` 構文は単なる構文にすぎません。Java、Python、Ruby などの言語とは異なり、オブジェクト指向のパラダイムをクラスベースで本格的に実装するものではないことに注意してください。

ES5 では、オブジェクトを作成するには `constructor` 関数を定義し、`new` キーワードを使用してオブジェクトをインスタンス化します。

ES6 では、`class` 宣言が `new` キーワードにより呼び出される `constructor` メソッドを持ちます。 `constructor` メソッドが明示的に定義されない場合は、暗黙的に引数なしで定義されます。

```js
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
```

`class` キーワードによって、コンストラクターの追加先となる新しい関数を宣言していることに注意してください。 このコンストラクターは、新しいオブジェクトを作成するために `new` が呼び出されるときに呼び出されます。

**注:** ES6 のクラス名には、上記の `SpaceShuttle` のように「アッパーキャメルケース」を使用するのが慣例になっています。

`constructor` メソッドは、class を使用して作成されたオブジェクトを生成して初期化するための特別なメソッドです。 詳細については、「JavaScript アルゴリズムとデータ構造」認定講座の「オブジェクト指向プログラミング」のセクションを参照してください。

# --instructions--

`class` キーワードを使用して `constructor` を記述し、`Vegetable` クラスを作成してください。

`Vegetable` クラスを使用すると、`constructor` に渡されたプロパティ `name` を持つ野菜オブジェクトを作成できます。

# --hints--

`Vegetable` は、`constructor` メソッドが定義された `class` である必要があります。

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

`class` キーワードを使用する必要があります。

```js
assert(code.match(/class/g));
```

`Vegetable` をインスタンス化できる必要があります。

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` は `carrot` を返す必要があります。

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

# --solutions--

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```

---
id: 587d7b8c367417b2b2512b54
title: getter や setter を使用してオブジェクトへのアクセスを管理する
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

オブジェクトから値を取得したり、オブジェクト内のプロパティの値を設定したりできます。

これらは従来から <dfn>getters</dfn> および <dfn>setters</dfn> と呼ばれています。

getter 関数は、ユーザーがプライベート変数に直接アクセスしなくても、単にオブジェクトのプライベート変数の値をユーザーに返す (値を取得する) ことを目的としたものです。

setter 関数の目的は、setter 関数に渡された値に基づいて、オブジェクトのプライベート変数の値を変更 (設定) することです。 この変更には計算を含めることができ、以前の値を完全に上書きすることも可能です。

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

この例では、コンソールに文字列 `anonymous` と `newAuthor` が表示されます。

getter と setter の呼び出しに使用している構文に注目してください。 関数とは違う形式のようにも見えます。 getter と setter が重要なのは、内部の実装の詳細を隠してくれるからです。

**注:** プライベート変数の名前には前にアンダースコア (`_`) を付けることが慣例になっています。 しかし、変数をプライベート変数として扱うのが慣例になっているわけではありません。

# --instructions--

`class` キーワードを使用して `Thermostat` クラスを作成してください。 `constructor` は華氏温度を受け取ります。

クラスでは、温度を摂氏で取得する `getter` と、温度を摂氏で設定する `setter` を作成してください。

関係式は `C = 5/9 * (F - 32)` および `F = C * 9.0 / 5 + 32` です。`F` は華氏温度の値で、`C` は摂氏での同じ温度です。

**注:** このクラスを実装する場合、クラスでは華氏または摂氏のいずれか 1 つの尺度で温度を追跡することになります。

getter と setter を使用することで、 プログラマーが API の作成でどちらの尺度を追跡しているかに関係なく、別のユーザーはその API を使用して正しい結果を得られるようになります。

つまり、実装の詳細が抽象化され、ユーザーからは見えなくなります。

# --hints--

`Thermostat` は、`constructor` メソッドを定義した `class` である必要があります。

```js
assert(
  typeof Thermostat === 'function' &&
    typeof Thermostat.constructor === 'function'
);
```

`class` キーワードを使用する必要があります。

```js
assert(code.match(/class/g));
```

`Thermostat` をインスタンス化できるようにする必要があります。

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return typeof t === 'object';
  })()
);
```

華氏値でインスタンス化された場合、`Thermostat` は正しい `temperature` を設定する必要があります。

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return t.temperature === 50;
  })()
);
```

`getter` を定義する必要があります。

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.get === 'function';
  })()
);
```

`setter` を定義する必要があります。

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.set === 'function';
  })()
);
```

`setter` が摂氏値で呼び出されたとき、`temperature` を設定する必要があります。

```js
assert(
  (() => {
    const t = new Thermostat(32);
    t.temperature = 26;
    const u = new Thermostat(32);
    u.temperature = 50;
    return t.temperature === 26 && u.temperature === 50;
  })()
);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

# --solutions--

```js
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

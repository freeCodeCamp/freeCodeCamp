---
id: 587d7daf367417b2b2512b7e
title: コンストラクタープロパティを理解する
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

前のチャレンジで作成したオブジェクトインスタンス `duck` と `beagle` には、特別な `constructor` プロパティが配置されています。

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

これらの `console.log` 呼び出しではどちらも、コンソールに `true` と表示されます。

`constructor` プロパティは、インスタンスを作成したコンストラクター関数への参照であることに注意してください。 `constructor` プロパティの利点は、このプロパティをチェックしてどのようなオブジェクトなのかを調べることができる点です。 そうした使い方の例を次に示します。

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**注:** `constructor` プロパティは上書きできるので (以降の 2 つのチャレンジで説明します)、一般的にオブジェクトのタイプを確認するには `instanceof` メソッドを使用する方が良いでしょう。

# --instructions--

`candidate` パラメーターを受け取り、`constructor` プロパティを利用して、候補が `Dog` の場合は `true` を、そうでない場合は `false` を返す `joinDogFraternity` 関数を作成してください。

# --hints--

`joinDogFraternity` を関数として定義する必要があります。

```js
assert(typeof joinDogFraternity === 'function');
```

`joinDogFraternity` は `candidate` が `Dog` のインスタンスである場合に `true` を返す必要があります。

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` では `constructor` プロパティを使用する必要があります。

```js
assert(/\.constructor/.test(code) && !/instanceof/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```

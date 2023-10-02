---
id: 587d7db1367417b2b2512b88
title: 継承されたメソッドを上書きする
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

以前のレッスンでは、あるオブジェクトで別のオブジェクトの `prototype` オブジェクトを参照してその動作 (メソッド) を継承できることを学びました。

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

そして、`ChildObject` で独自のメソッドを受け取るために、それらを `prototype` にメソッドチェーンしました。

```js
ChildObject.prototype.methodName = function() {...};
```

継承されたメソッドは上書きすることが可能です。 方法は同じで、上書きするメソッドと同じメソッド名を使用して `ChildObject.prototype` にメソッドを追加します。 次の `Bird` の例では、`Animal` から継承された `eat()` メソッドを上書きしています。

```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

インスタンス `let duck = new Bird();` があり、`duck.eat()` を呼び出した場合、JavaScript は次のようにして `duck` の `prototype` チェーン上でメソッドを探します。

1.  `duck` => `eat()` がここで定義されているか？ いいえ。
2.  `Bird` => `eat()` がここで定義されているか？ => はい。 それを実行して検索を停止。
3.  `Animal` => `eat()` も定義されているが、JavaScript はこのレベルに到達する前に検索を停止。
4.  Object => JavaScript はこのレベルに到達する前に検索を停止。

# --instructions--

`Penguin` の `fly()` メソッドを上書きして、文字列 `Alas, this is a flightless bird.` を返してください。

# --hints--

`penguin.fly()` は文字列 `Alas, this is a flightless bird.` を返す必要があります。

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

`bird.fly()` メソッドは `I am flying!` を返す必要があります。

```js
assert(new Bird().fly() === 'I am flying!');
```

# --seed--

## --seed-contents--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
```

# --solutions--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
let penguin = new Penguin();
console.log(penguin.fly());
```

---
id: 587d7db1367417b2b2512b87
title: 継承した後にメソッドを追加する
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

スーパータイプのコンストラクター関数から自身の `prototype` オブジェクトを継承するコンストラクター関数は、継承されるメソッドに加えて独自のメソッドを持つこともできます。

たとえば、`Bird` は、自身の `prototype` を `Animal` から継承するコンストラクターです。

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

`Animal` から継承される内容に加えて、`Bird` オブジェクトに固有の動作を追加することができます。 次の例では、`Bird` は `fly()` 関数を取得します。 関数は、他のコンストラクター関数と同じ方法で `Bird` の `prototype` に追加されます。

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

これで、`Bird` のインスタンスで `eat()` と `fly()` の両方のメソッドを使用できます。

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` はコンソールに文字列 `nom nom nom` を表示し、`duck.fly()` は文字列 `I'm flying!` を表示します。

# --instructions--

`Dog` オブジェクトが `Animal` から継承され、`Dog` の `prototype` コンストラクターが `Dog` に設定されるように、必要なコードをすべて追加してください。 そして、`bark()` メソッドを `Dog` オブジェクトに追加して、`beagle` で `eat()` と `bark()` の両方を使用できるようにしてください。 `bark()` メソッドは `Woof!` をコンソールに出力する必要があります。

# --hints--

`Animal` は `bark()` メソッドに応答しない必要があります。

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` は `Animal` から `eat()` メソッドを継承する必要があります。

```js
assert(typeof Dog.prototype.eat == 'function');
```

`Dog` プロトタイプは `bark()` メソッドを持つ必要があります。

```js
assert('bark' in Dog.prototype);
```

`beagle` は `instanceof` `Animal` である必要があります。

```js
assert(beagle instanceof Animal);
```

`beagle` のコンストラクターを `Dog` に設定する必要があります。

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` は文字列 `nom nom nom` を出力する必要があります。

```js
capture();
beagle.eat();
uncapture();
assert(logOutput == 'nom nom nom');
```

`beagle.bark()` は文字列 `Woof!` を出力する必要があります。

```js
capture();
beagle.bark();
uncapture();
assert(logOutput == 'Woof!');
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput = message;
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = originalConsole.log;
}

capture();
```

## --after-user-code--

```js
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

## --seed-contents--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```

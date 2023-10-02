---
id: 587d7db1367417b2b2512b86
title: 継承された constructor プロパティを再設定する
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

オブジェクトが別のオブジェクトから `prototype` を継承するときは、スーパータイプの constructor プロパティも継承します。

例を示します。

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

しかし、`duck` と、`Bird` のすべてのインスタンスでは、それらが `Bird` によって作成されたものであり、`Animal` によって作成されたものではないことを示す必要があります。 これを行うには、`Bird` の constructor プロパティに `Bird` オブジェクトを手動で設定します。

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

`duck.constructor` と `beagle.constructor` がそれぞれのコンストラクターを返すようにコードを修正してください。

# --hints--

`Bird.prototype` は `Animal` のインスタンスである必要があります。

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` は `Bird` を返す必要があります。

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` は `Animal` のインスタンスである必要があります。

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` は `Dog` を返す必要があります。

```js
assert(beagle.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line



let duck = new Bird();
let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
let duck = new Bird();
let beagle = new Dog();
```

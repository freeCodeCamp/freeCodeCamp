---
id: 587d7daf367417b2b2512b80
title: 프로토타입이 변할 시 생성자 속성 설정 보존하기
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

새 객체에 프로토타입을 수동으로 설정하는 데는 한가지 중대한 부작용이 있습니다. 그것은 바로 `constructor` 속성을 지운다는 것입니다! 이 속성은 어떤 생성자 함수가 인스턴스를 생성했는지 확인하기 위해 사용될 수 있지만 이제는 이 속성이 덮어 씌어졌으므로 잘못된 결과를 주게 됩니다.

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

이 표현식들은 순서대로 `false`, `true` 그리고 `true`로 평가될 것입니다.

이 문제를 고치기 위해 프로토타입이 새 객체에 수동으로 설정이 될 때마다 `constructor` 속성을 정의한 것을 보존하면 됩니다.

```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

# --instructions--

`Dog` `prototype`에 `constructor` 속성을 정의하시오.

# --hints--

`Dog.prototype`은 `constructor` 속성을 설정해야 합니다.

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

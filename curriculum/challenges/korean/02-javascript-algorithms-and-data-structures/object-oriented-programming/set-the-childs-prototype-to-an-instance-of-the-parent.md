---
id: 587d7db1367417b2b2512b85
title: 자식 프로토타입을 부모의 인스턴스로 설정하기
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

이전 과제에서는 상위 타입(또는 부모) `Animal`로부터 동작을 상속받는 첫 번째 단계인 `Animal`의 새 인스턴스를 만드는 방법을 보았습니다.

이번 과제는 이 다음 단계에 대한 것입니다: 하위(혹은 자식)의 `prototype`인 `Bird`를 `Animal`의 인스턴스로 설정합니다.

```js
Bird.prototype = Object.create(Animal.prototype);
```

`prototype`는 객체를 생성하는 레시피와 같다고 언급했습니다. `Bird`를 위한 조리법은 이제 `Animal`로부터 얻은 모든 중요 "재료"들을 포함한다고 할 수 있습니다.

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck`은 `eat` 메소드를 포함한 `Animal`의 모든 속성을 상속 받습니다.

# --instructions--

`Dog`의 인스턴스가 `Animal`로부터 상속받도록 코드를 수정하시오.

# --hints--

`Dog.prototype`은 `Animal`의 인스턴스이어야 합니다.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

# --seed--

## --seed-contents--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line


let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
```

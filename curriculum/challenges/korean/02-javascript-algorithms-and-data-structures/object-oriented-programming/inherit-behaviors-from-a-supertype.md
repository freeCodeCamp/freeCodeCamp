---
id: 587d7db0367417b2b2512b84
title: 슈퍼타입으로부터 행동 상속받기
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

이전 과제에서 모든 동물이 공유하는 행동을 정의한 `Animal`라는 `supertype`을 생성했습니다.

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

이번 그리고 다음 과제는 `Bird`와 `Dog` 안에서 `Animal`의 메소드들을 다시 정의하지 않고 재사용하는 법에 대해 다룰 것입니다. 이를 위해 상속이라는 기법이 사용됩니다. 이번 과제는 첫번째 단계를 다룹니다. `supertype`(혹은 부모) 인스턴스를 만듭니다. `new` 연산자를 사용하여 `Animal` 인스턴스를 생성하는 법을 이미 알고 있을 것입니다.

```js
let animal = new Animal();
```

상속을 위해 이 문법을 사용할 때 불편한 점들이 있는데, 이는 이번 과제의 범위에서 벗어난 너무 복잡한 내용입니다. 대신에 그 불편한 점들이 없는 대안이 있습니다.

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)`는 새 객체를 생성하고 `obj`를 새 객체의 `prototype`으로 설정합니다. `prototype`이 새 객체를 생성하는 "레시피(recipe)"와 같다고 했습니다. `animal`의 `prototype`을 `Animal`의 `prototype`으로 설정하여 `animal` 인스턴스에 `Animal`의 다른 인스턴스와 같은 "레시피"를 주는 것입니다.

```js
animal.eat();
animal instanceof Animal;
```

여기서 메소드 `instanceof`는 `true`를 반환할 것입니다.

# --instructions--

`Object.create`를 사용하여 `duck`과 `beagle`라는 이름의 두 개의 `Animal` 인스턴스를 만드시오.

# --hints--

변수 `duck`는 정의되어야 합니다.

```js
assert(typeof duck !== 'undefined');
```

변수 `beagle`는 정의되어야 합니다.

```js
assert(typeof beagle !== 'undefined');
```

변수 `duck`는 `Object.create`로 초기 설정되어야 합니다.

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    __helpers.removeJSComments(code)
  )
);
```

변수 `beagle`는 `Object.create`로 초기 설정해야 합니다.

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    __helpers.removeJSComments(code)
  )
);
```

`duck`는 `Animal`의 `prototype`을 가져야 합니다.

```js
assert(duck instanceof Animal);
```

`beagle`는 `Animal`의 `prototype`을 가져야 합니다.

```js
assert(beagle instanceof Animal);
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

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
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
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```

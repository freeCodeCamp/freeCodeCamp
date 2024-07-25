---
id: 587d7b7d367417b2b2512b1f
title: 객체에 담겨있는 배열 수정하기
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

이제 자바스크립트 객체에 대한 모든 연산 종류들을 살펴보았습니다. 이제 여러분은 키-값 쌍을 추가하거나, 수정하거나, 삭제하거나, 어떤 키가 존재하는지 확인하거나, 객체에 담긴 모든 키를 순회할 수 있습니다. 자바스크립트를 계속 학습하다 보면, 객체를 훨씬 더 다양한 용도로 사용하는 것을 볼 수 있을 것입니다. 또한, 커리큘럼의 코딩 인터뷰 준비 섹션에 있는 데이터 구조 레슨에서는 ES6의 <dfn>Map</dfn>과 <dfn>Set</dfn>객체들도 다룹니다. 이들은 기본적인 객체와 비슷하지만 약간의 부가적인 기능들이 있습니다. 이제 여러분은 배열과 객체의 기본을 배웠으므로, 자바스크립트를 사용하여 더 복잡한 문제들을 해결할 준비가 되었습니다!

# --instructions--

코드 에디터에 주어진 객체를 살펴보세요. `user` 객체는 3가지 키를 포함합니다. `data` 키는 5개의 키를 가진 객체를 값으로 갖고 있으며, 그 키 중 하나는 `friends` 라고 불리며 배열을 값으로 가집니다. 이를 통해 여러분은 객체가 얼마나 유연한 데이터 구조인지 알 수 있습니다. 우리는 `addFriend`라는 함수를 작성하기 시작했습니다. 이 함수를 완성해주세요. 이 함수는 `user` 객체와 `friend`의 이름을 인자로 받고, 인자로 받은 이름을 `user.data.friends` 배열에 추가하고, 이 배열을 반환합니다.

# --hints--

`user` 객체는 `name`, `age`, `data` 라는 키를 포함해야 합니다.

```js
assert('name' in user && 'age' in user && 'data' in user);
```

`addFriend` 함수는 `user` 객체와 `friend` 문자열을 인자로 받고, friend를 `user` 객체 안의 `friends` 배열에 추가해야 합니다.

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

`addFriend(user, "Pete")`를 실행하면 `["Sam", "Kira", "Tomo", "Pete"]`을 반환해야 합니다.

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --seed--

## --seed-contents--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
```

# --solutions--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```

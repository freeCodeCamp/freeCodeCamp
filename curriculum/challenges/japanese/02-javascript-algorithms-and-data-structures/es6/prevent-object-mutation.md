---
id: 598f48a36c8c40764b4e52b3
title: オブジェクトのミューテーションを防ぐ
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

前のチャレンジで説明したように、`const` 宣言だけではデータのミューテーションを防ぐことはできません。 データが変更されないことを保証するため、JavaScript ではデータの変更を防ぐための `Object.freeze` という関数が用意されています。

スクリプトを strict モードで実行している場合は、オブジェクトを変更しようとしても拒否され、エラーがスローされます。

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

エディターが strict モードで実行されているため、`obj.review` や `obj.newProp` に代入しようとするとエラーになり、コンソールに値 `{ name: "FreeCodeCamp", review: "Awesome" }` が表示されます。

# --instructions--

このチャレンジでは、`Object.freeze` を使用して、算術定数が変化しないようにします。 `PI` の値の変更、またはプロパティの追加や削除ができないように、`MATH_CONSTANTS` オブジェクトをフリーズする必要があります。

# --hints--

`const` キーワードを置き換えないでください。

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS` は (`const` を使用して宣言した) 定数変数である必要があります。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

`MATH_CONSTANTS` の元の宣言を変更しないでください。

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g
    )
  );
```

`PI` が `3.14` と等しくなるようにしてください。

```js
assert(PI === 3.14);
```

# --seed--

## --seed-contents--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line


  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

# --solutions--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

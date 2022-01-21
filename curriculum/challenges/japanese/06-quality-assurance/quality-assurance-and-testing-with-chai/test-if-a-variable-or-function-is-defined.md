---
id: 587d824b367417b2b2512c47
title: 変数または関数が定義されているかどうかをテストする
challengeType: 2
forumTopicId: 301602
dashedName: test-if-a-variable-or-function-is-defined
---

# --description--

注意点として、このプロジェクトは [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) の始動プロジェクト、または [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/) からクローンされたプロジェクトに基づいて構築されています。

# --instructions--

`tests/1_unit-tests.js` の中の、`Basic Assertions` スイート内の `#2` に分類されたテストにおいて、テストに合格にする (`true` と評価する必要があります) ために、それぞれの `assert` を `assert.isDefined()` または `assert.isUndefined()` に変更してください。 アサートに渡された引数を変更しないでください。

# --hints--

すべてのテストに合格する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

最初のアサーションに対して、正しいメソッドを選ぶ必要があります - `isDefined` もしくは `isUndefined` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isDefined',
        'Null is not undefined'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

2 番目のアサーションに対して、正しいメソッドを選ぶ必要があります - `isDefined` もしくは `isUndefined` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isUndefined',
        'Undefined is undefined'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

3 番目のアサーションに対して、正しいメソッドを選ぶ必要があります - `isDefined` もしくは `isUndefined` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isDefined',
        'A string is not undefined'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

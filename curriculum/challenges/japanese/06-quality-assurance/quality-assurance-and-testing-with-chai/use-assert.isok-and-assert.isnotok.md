---
id: 587d824b367417b2b2512c48
title: Assert.isOK と Assert.isNotOK を使用する
challengeType: 2
forumTopicId: 301607
dashedName: use-assert-isok-and-assert-isnotok
---

# --description--

注意点として、このプロジェクトは [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) の始動プロジェクト、または [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/) からクローンされたプロジェクトに基づいて構築されています。

`isOk()` は真値かどうかをテストし、 `isNotOk()` は偽値かどうかをテストします。

真値と偽値についてさらに学習するには、[Falsy Bouncer](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer) チャレンジに挑戦してください。

# --instructions--

`tests/1_unit-tests.js` の中の、`Basic Assertions` スイート内の `#3` に分類されたテストにおいて、テストを合格にする (`true` と評価する必要があります) ために、それぞれの `assert` を `assert.isOk()` または `assert.isNotOk()` に変更してください。 アサートに渡された引数を変更しないでください。

# --hints--

すべてのテストに合格する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

最初のアサーションに対して、正しいメソッドを選ぶ必要があります - `isOk` もしくは `isNotOk` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isNotOk', 'Null is falsy');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

2 番目のアサーションに対して、正しいメソッドを選ぶ必要があります - `isOk` もしくは `isNotOk` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isOk', 'A string is truthy');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

3 番目のアサーションに対して、正しいメソッドを選ぶ必要があります - `isOk` もしくは `isNotOk` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'isOk', 'true is truthy');
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

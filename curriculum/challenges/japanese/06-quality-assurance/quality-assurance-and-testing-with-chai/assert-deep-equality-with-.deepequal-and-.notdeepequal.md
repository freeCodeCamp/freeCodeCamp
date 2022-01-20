---
id: 587d824c367417b2b2512c4c
title: .deepEqual と .notDeepEqual で deep equality をアサートする
challengeType: 2
forumTopicId: 301587
dashedName: assert-deep-equality-with--deepequal-and--notdeepequal
---

# --description--

注意点として、このプロジェクトは [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) の始動プロジェクト、または [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/) からクローンされたプロジェクトに基づいて構築されています。

`deepEqual()` は、2 つのオブジェクトが deep equal であることをアサートします。

# --instructions--

`tests/1_unit-tests.js` の中の、`Equality` スイート内の `#7` に分類されたテストにおいて、テストを合格にする (`true` と評価する必要があります) ために、それぞれの `assert` を `assert.deepEqual` または `assert.notDeepEqual` に変更してください。 アサートに渡された引数を変更しないでください。

# --hints--

すべてのテストに合格する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

最初のアサーションに、正しいメソッドを選ぶ必要があります - `deepEqual` もしくは `notDeepEqual` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'deepEqual',
        'The order of the keys does not matter'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

2 番目のアサーションに、正しいメソッドを選ぶ必要があります - `deepEqual` もしくは `notDeepEqual` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'notDeepEqual',
        'The position of elements within an array does matter'
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

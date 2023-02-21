---
id: 587d824d367417b2b2512c54
title: 文字列をテストするために正規表現を使用する
challengeType: 2
forumTopicId: 301608
dashedName: use-regular-expressions-to-test-a-string
---

# --description--

注意点として、このプロジェクトは <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a> にあるスタータープロジェクトをベースに構築されているか、または <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> からクローンされています。

`match()` は、実際の値が 2 番目の引数の正規表現に一致することをアサートします。

# --instructions--

`tests/1_unit-tests.js` の中の、`Strings` スイート内の `#15` に分類されたテストにおいて、テストを成功させる (`true` と評価する必要があります) ために、それぞれの `assert` を `assert.match` または `assert.notMatch` に変更してください。 アサートに渡された引数を変更しないでください。

# --hints--

すべてのテストが成功する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=14').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

最初のアサーションに対して、正しいメソッドを選ぶ必要があります - `match` もしくは `notMatch` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=14').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'match',
        "'# name:John Doe, age:35' matches the regex"
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

2 番目のアサーションに対して、正しいメソッドを選ぶ必要があります - `match` もしくは `notMatch` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=14').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'notMatch',
        "'# name:Paul Smith III, age:twenty-four' does not match the regex (the age must be numeric)"
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

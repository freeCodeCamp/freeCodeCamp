---
id: 587d824c367417b2b2512c4f
title: 値が特定の範囲内かどうかをテストする
challengeType: 2
forumTopicId: 301598
dashedName: test-if-a-value-falls-within-a-specific-range
---

# --description--

注意点として、このプロジェクトは [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) の始動プロジェクト、または [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/) からクローンされたプロジェクトに基づいて構築されています。

```javascript
.approximately(actual, expected, delta, [message])
```

`actual` が `expected`に等しく +/- `delta` の範囲内であることをアサートします。

# --instructions--

`tests/1_unit-tests.js` の中の、`Comparisons` スイート内の `#10` に分類されたテストにおいて、テストを合格にする (`true` と評価する必要があります) ために、それぞれの `assert` を `assert.approximately` に変更してください。

テストを常に合格にするには、最小範囲 (3 番目のパラメータ) を選択してください。 範囲は、1 未満でなければなりません。

# --hints--

すべてのテストに合格する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

最初のアサーションに対して、正しい範囲を選ぶ必要があります - `approximately(actual, expected, range)` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'approximately');
      assert.equal(
        data.assertions[0].args[2],
        0.5,
        "weirdNumbers(0.5) is in the range (0.5, 1.5]. It's within 1 +/- 0.5"
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

2 番目のアサーションに対して、正しい範囲を選ぶ必要があります - `approximately(actual, expected, range)` です。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=9').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'approximately');
      assert.equal(
        data.assertions[1].args[2],
        0.8,
        "weirdNumbers(0.2) is in the range (0.2, 1.2]. It's within 1 +/- 0.8"
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

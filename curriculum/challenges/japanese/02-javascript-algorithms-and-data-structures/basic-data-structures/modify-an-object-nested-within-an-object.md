---
id: 587d7b7c367417b2b2512b19
title: オブジェクト内でネストされたオブジェクトの変更
challengeType: 1
forumTopicId: 301164
dashedName: modify-an-object-nested-within-an-object
---

# --description--

今度はもう少し複雑なオブジェクトを見てみましょう。 オブジェクトのプロパティは任意の深さまでネストすることができ、その値は、配列や他のオブジェクトなど、JavaScript でサポートされているあらゆる種類のデータを取ることができます。 以下の例について考えてみましょう。

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
```

`nestedObject` には、`id` (値は数値)、`date` (値は文字列)、`data` (値はネスト構造のオブジェクト) の 3 つのプロパティがあります。 構造はすぐに複雑になりますが、同じ記法を使用して、必要な情報にアクセスすることができます。 ネストされた `onlineStatus` オブジェクトの `busy` プロパティに値 `10` を割り当てるには、 ドット記法を用いてプロパティを参照します。

```js
nestedObject.data.onlineStatus.busy = 10;
```

# --instructions--

オブジェクト `userActivity` を定義しました。このオブジェクトの中には、ネストされた別のオブジェクトが含まれています。 `online` キーの値を `45` に設定してください。

# --hints--

`userActivity` には `id`、`date`、`data` のプロパティが存在する必要があります。

```js
assert(
  'id' in userActivity && 'date' in userActivity && 'data' in userActivity
);
```

`userActivity` には `data` キーがあり、`totalUsers` と `online` というキーを持つオブジェクトが設定されている必要があります。

```js
assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
```

`userActivity` の `data` キー内でネストされた `online` プロパティを、`45` に設定する必要があります。

```js
assert(userActivity.data.online === 45);
```

`online` プロパティを、ドット記法またはブラケット記法を使用して設定する必要があります。

```js
assert.strictEqual(code.search(/online: 45/), -1);
```

# --seed--

## --seed-contents--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line

// Only change code above this line

console.log(userActivity);
```

# --solutions--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
```

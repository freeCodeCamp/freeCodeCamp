---
id: 587d7db7367417b2b2512b9c
title: 1 人以上の犯罪者を捜す
challengeType: 1
forumTopicId: 301343
dashedName: find-one-or-more-criminals-in-a-hunt
---

# --description--

ちょっとひと休みして、新しく身につけた正規表現の記述スキルをテストしてみましょう。 犯罪者の集団が脱獄して逃げましたが、何人いるかはわかっていません。 しかし、他の人々に混じって集団で潜んでいることはわかっています。 犯罪者全員を一度に見つけてください。

たとえば次のような方法で確認できます。

正規表現 `/z+/` は、1 行の中で文字 `z` の 1 回以上の出現にマッチします。 次の文字列のすべてにマッチします。

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

しかし、次の文字列は文字 `z` がないのでマッチは見つかりません。

```js
""
"ABC"
"abcabc"
```

# --instructions--

他の人々の集団に混じっている 1 人以上の犯罪者を見つける貪欲な正規表現を記述してください。 犯罪者は大文字 `C` で表現されます。

# --hints--

正規表現は文字列 `C` に潜む 1 人の犯罪者 (`C`) にマッチする必要があります。

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

正規表現は文字列 `CC` に潜む 2 人の犯罪者 (`CC`) にマッチする必要があります。

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

正規表現は文字列 `P1P5P4CCCcP2P6P3` に潜む 3 人の犯罪者 (`CCC`) にマッチする必要があります。

```js
assert(
  'P1P5P4CCCcP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCcP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

正規表現は文字列 `P6P2P7P4P5CCCCCP3P1` に潜む 5 人の犯罪者 (`CCCCC`) にマッチする必要があります。

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

正規表現は犯罪者のいない空の文字列 `""` にはマッチしない必要があります。

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test(''));
```

正規表現は犯罪者のいない文字列 `P1P2P3` にはマッチしない必要があります。

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test('P1P2P3'));
```

正規表現は文字列 `P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3` に潜む 50 人の犯罪者 (`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`) にマッチする必要があります。

```js
assert(
  'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
    reCriminals
  ) &&
    'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
      reCriminals
    )[0] == 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'
);
```

# --seed--

## --seed-contents--

```js
let reCriminals = /./; // Change this line
```

# --solutions--

```js
let reCriminals = /C+/; // Change this line
```

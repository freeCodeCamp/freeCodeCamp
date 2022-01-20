---
id: 587d7dbb367417b2b2512bab
title: キャプチャグループを使用して検索と置換をする
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

検索は便利ですが、 マッチさせたテキストを変更 (または置換) すると、検索をさらに強力にすることができます。

文字列では `.replace()` を使用して文字列内のテキストを検索したり置換したりできます。 `.replace()` への最初の入力には、検索したい正規表現パターンを渡します。 2 番目のパラメーターには、マッチしたものを置き換える文字列や、何かを実行する関数を渡します。

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

この `replace` 呼び出しは文字列 `The sky is blue.` を返します。

また、置換文字列のキャプチャグループにドル記号 (`$`) でアクセスすることもできます。

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

この `replace` 呼び出しは文字列 `Camp Code` を返します。

# --instructions--

3 つのキャプチャグループを使用して正規表現 `fixRegex` を記述し、文字列 `one two three` 内の各単語を検索してください。 次に、`replaceText` 変数を更新して、`one two three` を文字列 `three two one` に置き換え、 `result` 変数に結果を代入してください。 ドル記号 (`$`) の構文を使用して、置換文字列でキャプチャグループを使用してください。

# --hints--

検索と置換に `.replace()` を使用してください。

```js
assert(code.match(/\.replace\(.*\)/));
```

正規表現で、文字列 `one two three` を文字列 `three two one` に変更する必要があります。

```js
assert(result === 'three two one');
```

最後の行を変更しないでください。

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` では少なくとも 3 つのキャプチャグループを使用する必要があります。

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` では丸括弧付きの部分マッチ文字列を使用する必要があります (つまり、n 番目の括弧付きの部分マッチ文字列である $n は、n 番目のキャプチャグループに対応します)。

```js
{
  const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
  assert(replaceText.match(re).length >= 3);
}
```

# --seed--

## --seed-contents--

```js
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```

---
id: 5cddbfd622f1a59093ec611d
title: モジュールスクリプトを作成する
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

JavaScript は、当初の用途はほとんどが HTML ウェブであり、それ以外の用途にはあまり役に立ちませんでした。 現在ではその役割は非常に大きく、ウェブサイト全体がほとんど JavaScript で構築されることもあります。 JavaScript のモジュール化を進め、コードをより明解にしてメンテナンスできるように、ES6 では JavaScript ファイル間でコードを簡単に共有する方法が導入されました。 そのためには、他の 1 つまたは複数のファイルで使用できるように、ファイルの一部分をエクスポートし、必要になったときに対象の部分をインポートする必要があります。 この機能を利用するには、`type` が `module` のスクリプトを HTML ドキュメントに作成する必要があります。 例を次に示します。

```html
<script type="module" src="filename.js"></script>
```

これで、この `module` タイプを使用するスクリプトで `import` と `export` の機能を使用できるようになりました。これらについてはこのあとのチャレンジで説明します。

# --instructions--

type が `module` のスクリプトを HTML ドキュメントに追加し、`index.js` というソースファイルを指定してください。

# --hints--

`script` タグを作成する必要があります。

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

`script` タグに、`module` という値を設定した `type` 属性を持たせる必要があります。

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

`script` タグに、`index.js` という `src` 属性を付ける必要があります。

```js
assert(
  code.match(
    /<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>
```

# --solutions--

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

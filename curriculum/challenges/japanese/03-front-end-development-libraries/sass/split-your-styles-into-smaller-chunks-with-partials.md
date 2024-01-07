---
id: 587d7dbf367417b2b2512bbc
title: パーシャルを使用してスタイルを小分けする
challengeType: 0
forumTopicId: 301459
dashedName: split-your-styles-into-smaller-chunks-with-partials
---

# --description--

Sass の<dfn>パーシャル</dfn>は、CSS コードの一部分を保持する別のファイルです。 これらのファイルは他の Sass ファイルにインポートして使用します。 この機能は、類似したコードをモジュールにまとめて整理するのにとても便利です。

パーシャルの名前はアンダースコア (`_`) 文字で始まります。これにより、パーシャルが CSS の小さなセグメントであり、CSS ファイルに変換しないよう Sass に指示します。 また、Sass ファイルは `.scss` ファイル拡張子で終わります。 パーシャル内のコードを別の Sass ファイルに含めるには `@import` ディレクティブを使用します。

たとえば、すべてのミックスインが "\_mixins.scss" という名前のパーシャルに保存されていて、"main.scss" ファイルで必要な場合は、次の方法でメインファイルで使用します。

```scss
@import 'mixins'
```

Sass はパーシャルであることを認識しているので、`import` ステートメントではアンダースコアとファイル拡張子は不要です。 パーシャルをファイルにインポートすると、すべての変数やミックスインやその他のコードを使用できるようになります。

# --instructions--

`_variables.scss` というパーシャルを main.scss ファイルにインポートする `@import` ステートメントを記述してください。

# --hints--

コードで `@import` ディレクティブを使用します。ファイル名にはアンダースコアを付けません。

```js
assert(code.match(/@import\s+?('|")variables\1/gi));
```

# --seed--

## --seed-contents--

```html
<!-- The main.scss file -->
```

# --solutions--

```html
@import 'variables'
```

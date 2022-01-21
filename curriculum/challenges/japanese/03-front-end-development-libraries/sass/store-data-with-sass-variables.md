---
id: 587d7dbd367417b2b2512bb4
title: Sass の変数を使用してデータを保存する
challengeType: 0
forumTopicId: 301460
dashedName: store-data-with-sass-variables
---

# --description--

Sass が CSS と異なる機能の一つは、変数の使用です。 これらは JavaScript と同様に宣言し、設定してデータを保存します。

JavaScript では、変数は `let` キーワードと `const` キーワードを使用して定義します。 Sass では、変数は `$` で始まり、その後に変数名を付けます。

いくつかの例を次に示します。

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

変数を使用するには次のようにします。

```scss
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

たとえば、多数の要素の色を同じにする必要がある場合などで、変数が役に立ちます。 その色が変更されても、コードの変数値の部分を編集するだけで済みます。

# --instructions--

変数 `$text-color` を作成し、`red` に設定してください。 次に、`.blog-post` と `h2` の `color` プロパティの値を `$text-color` 変数に変更してください。

# --hints--

コードで Sass 変数 `$text-color` を宣言し、値を `red` に設定します。

```js
assert(code.match(/\$text-color\s*:\s*?red\s*;/g));
```

コードで `$text-color` 変数を使用して、`.blog-post` アイテムと `h2` アイテムの `color` を変更します。

```js
assert(code.match(/color\s*:\s*\$text-color\s*;?/g));
```

`.blog-post` 要素の `color` を赤に設定します。

```js
assert($('.blog-post').css('color') == 'rgb(255, 0, 0)');
```

`h2` 要素の `color` を赤に設定します。

```js
assert($('h2').css('color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>


  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  $text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```

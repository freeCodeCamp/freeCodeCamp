---
id: 587d7fa5367417b2b2512bbd
title: 1 組の CSS スタイルセットを別の要素に拡張する
challengeType: 0
forumTopicId: 301456
dashedName: extend-one-set-of-css-styles-to-another-element
---

# --description--

Sass には `extend` という機能があり、ある要素から CSS ルールを借用して別の要素でそれらを基にしてスタイルを構築することが簡単できます。

たとえば、次の CSS ルールのブロックは `.panel` クラスのスタイルを設定しています。 このクラスには `background-color`、`height`、`border` があります。

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

ここで、`.big-panel` という別のパネルが必要になったとします。 このパネルは `.panel` と同じベースプロパティを持ちますが、`width` と `font-size` も必要です。 `.panel` から最初の CSS ルールをコピーして貼り付けることもできますが、パネルの種類を追加するたびにコードが繰り返されてしまいます。 `extend` ディレクティブを使用すると、ある要素で記述したルールを再利用し、別の要素でルールを追加することが簡単にできます。

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

これで `.big-panel` は、`.panel` と同じプロパティに加えて、新しいスタイルを持ちます。

# --instructions--

`.info` を拡張し、さらにマゼンタに設定された `background-color` を持つ、`.info-important` を作成してください。

# --hints--

`info-important` クラスで、`background-color` を `magenta` に設定します。

```js
assert(
  code.match(
    /\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi
  )
);
```

`info-important` クラスで、`@extend` を使用して `info` クラスからスタイル設定を継承します。

```js
assert(
  code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi)
);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important{
    @extend .info;
    background-color: magenta;
  }



</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```

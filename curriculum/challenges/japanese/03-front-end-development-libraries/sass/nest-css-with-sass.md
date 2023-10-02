---
id: 587d7dbd367417b2b2512bb5
title: Sass を使用して CSS をネストする
challengeType: 0
forumTopicId: 301457
dashedName: nest-css-with-sass
---

# --description--

Sass では CSS ルールのネスト (入れ子) が可能であり、スタイルシートを整理するのに便利です。

通常、要素にスタイルを設定するには、次のように要素ごとに異なる行でターゲットを記述します。

```scss
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
```

大きなプロジェクトでは、CSS ファイルにたくさんの行やルールが記述されます。 次のようにネストしてそれぞれの親要素の中に子のスタイルルールを記述することで、コードが整理しやすくなります。

```scss
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}

```

# --instructions--

前述のネストの記法を使用して、`.blog-post` 要素の両方の子の CSS ルールを整理し直してください。 テストのため、`p` 要素の前に `h1` を記述してください。

# --hints--

コードの CSS ルールを整理し直して、`h1` と `p` が `.blog-post` 親要素の中にネストされるようにします。

```js
assert(
  code.match(
    /\.blog-post\s*?{\s*?h1\s*?{\s*?text-align:\s*?center;\s*?color:\s*?blue;\s*?}\s*?p\s*?{\s*?font-size:\s*?20px;\s*?}\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
  .blog-post {

  }
  h1 {
    text-align: center;
    color: blue;
  }
  p {
    font-size: 20px;
  }
</style>

<div class="blog-post">
  <h1>Blog Title</h1>
  <p>This is a paragraph</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  .blog-post {
    h1 {
      text-align: center;
      color: blue;
    }
    p {
      font-size: 20px;
    }
  }
</style>

<div class="blog-post">
  <h1>Blog Title</h1>
  <p>This is a paragraph</p>
</div>
```

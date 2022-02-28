---
id: 587d781b367417b2b2512aba
title: s タグでテキストに取り消し線を引く
challengeType: 0
videoUrl: ''
forumTopicId: 301079
dashedName: use-the-s-tag-to-strikethrough-text
---

# --description--

テキストの文字を水平線で横切って取り消し線を引くには `s` タグを使用することができます。 これは、テキストのその部分が無効になったことを示します。 `s` タグを使うと、ブラウザは CSS の `text-decoration: line-through;` を要素に適用します。

# --instructions--

`h4` タグの中の `Google` の周りを `s` タグで囲んでください。次にその隣に、`Alphabet` という文字を取り消し線が無い状態で追加してください。

# --hints--

コード内でマークアップに `s` タグを 1 つ追加する必要があります。

```js
assert($('s').length == 1);
```

`s` タグは `h4` タグ内の `Google` のテキストを囲む必要があります。 これには単語 `Alphabet` を含めないでください。

```js
assert(
  $('h4 > s')
    .text()
    .match(/Google/gi) &&
    !$('h4 > s')
      .text()
      .match(/Alphabet/gi)
);
```

`h4` タグの中に、`Alphabet` という単語が取り消し線がない状態で含まれている必要があります。

```js
assert(
  $('h4')
    .html()
    .match(/Alphabet/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4><s>Google</s> Alphabet</h4>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

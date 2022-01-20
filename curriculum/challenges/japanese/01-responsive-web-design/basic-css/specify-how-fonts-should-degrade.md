---
id: bad87fee1348bd9aedf08808
title: 代替フォントを指定する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
dashedName: specify-how-fonts-should-degrade
---

# --description--

すべてのブラウザで利用可能なデフォルトのフォントがいくつかあります。 この総称フォントファミリには、`monospace`、`serif`、`sans-serif` などがあります。

あるフォントが利用できない場合は、別のフォントへ「降格」するようにブラウザに伝えることができます。

例えば、ある要素に `Helvetica` フォントを使いたいが、`Helvetica` が利用できない場合には代わりに `sans-serif` フォントを使うようにしたいという場合、それを以下のように指定することができます:

```css
p {
  font-family: Helvetica, sans-serif;
}
```

総称フォントファミリ名では大文字と小文字は区別されません。 また、これらは CSS キーワードであるため、引用符は必要ありません。

# --instructions--

始めに、`h2` 要素に `monospace` フォントを適用し、`Lobster`と `monospace` の 2 つのフォントが指定された状態にしてください。

ひとつ前のチャレンジでは、`link` タグを使用して `Lobster` フォントをインポートしました。 ここでその `Lobster` フォントを Google Fonts からインポートするコードをコメントアウトして (以前学習した HTML コメントを使いましょう)、利用できないようにしてみましょう。 `h2` 要素が `monospace` フォントに降格されることを確認してください。

**注:** もし `Lobster` フォントがあなたのコンピュータにインストールされている場合、ブラウザはフォントを見つけることができるので、この降格の動作を見ることはできません。

# --hints--

h2 要素はフォント `Lobster` を使用する必要があります。

```js
assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);
```

h2 要素は、`Lobster` が利用できない場合 `monospace` フォントで表示されるはずです。

```js
assert(
  /\s*h2\s*\{\s*font-family\s*\:\s*(\'|"|)Lobster\1\s*,\s*monospace\s*;?\s*\}/gi.test(
    code
  )
);
```

`Lobster` フォントを取得する Google への呼び出しを、その前に `<!--` を置いてコメントアウトしてください。

```js
assert(new RegExp('<!--[^fc]', 'gi').test(code));
```

`-->` を追加してコメントを閉じる必要があります。

```js
assert(new RegExp('[^fc]-->', 'gi').test(code));
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

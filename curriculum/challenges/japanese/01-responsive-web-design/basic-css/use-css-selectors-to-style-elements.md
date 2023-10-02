---
id: bad87fee1348bd9aedf08805
title: CSS セレクターで要素のスタイルを指定する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKMBT2'
forumTopicId: 18349
dashedName: use-css-selectors-to-style-elements
---

# --description--

CSS では、ページ上の要素の見た目を変更するために使える CSS プロパティが多数あります。

`<h2 style="color: red;">CatPhotoApp</h2>` と入力することで、その 1 つの `h2` 要素にインライン CSS でスタイルを設定することができました。CSS はカスケーディングスタイルシート (Cascading Style Sheets) の略です。

これは要素のスタイルを指定する 1 つの方法ですが、CSS を適用するにはより良い方法があります。

コードの一番上に、次のように `style` ブロックを作成します:

```html
<style>
</style>
```

その style ブロックの中で、すべての `h2` 要素を指す <dfn>CSS セレクター</dfn> を作成できます。 例えば、すべての `h2` 要素を赤にしたい場合は、次のようなスタイルルールを追加します:

```html
<style>
  h2 {
    color: red;
  }
</style>
```

各要素のスタイルルールを囲むように、波括弧 (`{` と `}`) を始めと終わりどちらにも置くことが重要です。 また、要素のスタイル定義は必ず style タグの開始タグと終了タグの間にある必要があります。 最後に、要素の各スタイルルールの最後にセミコロンを必ず追加してください。

# --instructions--

`h2` 要素の style 属性を削除し、代わりに CSS の `style` ブロックを作成してください。 すべての `h2` 要素を青にするために必要な CSS を追加してください。

# --hints--

`h2` 要素から `style` 属性を削除してください。

```js
assert(!$('h2').attr('style'));
```

`style` 要素を作成してください。

```js
assert($('style') && $('style').length >= 1);
```

`h2` 要素が青で表示されている必要があります。

```js
assert($('h2').css('color') === 'rgb(0, 0, 255)');
```

スタイルシートの `h2` の宣言は、セミコロンと閉じ括弧を持つ有効な状態でなければなりません。

```js
assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
```

すべての `style` 要素は有効でなければならず、また終了タグが必要です。

```js
assert(
  code.match(/<\/style>/g) &&
    code.match(/<\/style>/g).length ===
      (
        code.match(
          /<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g
        ) || []
      ).length
);
```

# --seed--

## --seed-contents--

```html
<h2 style="color: red;">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
<style>
  h2 {
    color: blue;
  }
</style>
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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

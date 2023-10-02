---
id: bad87fee1348bd9aecf08806
title: CSS クラスで要素のスタイルを指定する
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

クラスは再利用可能なスタイルで、HTML 要素に追加できます。

下記は CSS クラス宣言の例です:

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

`<style>` タグ内に、`blue-text` という CSS クラスを作成したことがわかります。 次のようにして、HTML 要素にクラスを適用できます: `<h2 class="blue-text">CatPhotoApp</h2>`. CSS の `style` 要素の中では、クラス名がピリオドで始まることに注意してください。 HTML 要素の class 属性では、クラス名にピリオドをつけません。

# --instructions--

`style` 要素の中の `h2` セレクターを `.red-text` に変更し、color の値を `blue` から `red` に変更してください。

`h2` 要素に `class` 属性を追加し、値を `red-text` にしてください。

# --hints--

`h2` 要素が赤で表示されている必要があります。

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

`h2` 要素にはクラス `red-text` が必要です。

```js
assert($('h2').hasClass('red-text'));
```

スタイルシートに `red-text` クラスの宣言があり、color が `red` に設定されている必要があります。

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

`h2` 要素で `style="color: red"` のようなインラインスタイル宣言を使用しないでください。

```js
assert($('h2').attr('style') === undefined);
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
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

---
id: 5c6c06847491271903d37cfd
title: ラジオボタンとチェックボックスの value 属性を使用する
challengeType: 0
forumTopicId: 301099
dashedName: use-the-value-attribute-with-radio-buttons-and-checkboxes
---

# --description--

フォームが送信されると、データがサーバーに送信され、そのデータには選択されたオプションの入力内容が含まれます。 `radio` と `checkbox` タイプの input 要素は、`value` 属性の値を送信します。

例えば:

```html
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
</label>
```

この例では、2 つの `radio` タイプの input 要素があります。 ユーザーが `indoor` オプションを選択してフォームを送信すると、フォームデータには次の行が含まれます: `indoor-outdoor=indoor` これは、"indoor" の input 要素の `name` と `value` 属性から取られたものです。

`value` 属性を省略すると、送信されるフォームデータにはデフォルト値である `on` が使用されます。 この場合、ユーザーが "indoor" の選択肢をクリックしてフォームを送信すると結果のフォームデータは `indoor-outdoor=on` になりますが、これでは役に立ちません。 したがって、`value` 属性には選択肢を区別できる内容を設定する必要があります。

# --instructions--

既存の `radio` と `checkbox` の input 要素に、それぞれ `value` 属性を設定してください。 新しいラジオボタン、チェックボックスは作成しないようにしてください。 value 属性の値には、ラベルのテキストを小文字にしたものを使用してください。

# --hints--

ラジオボタンの 1 つに `indoor` という `value` 属性を設定してください。

```js
assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);
```

ラジオボタンの 1 つに `outdoor` という `value` 属性を設定してください。

```js
assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);
```

チェックボックスの 1 つに `loving` という `value` 属性を設定してください。

```js
assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);
```

チェックボックスの 1 つに `lazy` という `value` 属性を設定してください。

```js
assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);
```

チェックボックスの 1 つに `energetic` という `value` 属性を設定してください。

```js
assert(
  $('label:contains("Energetic") > input[type="checkbox"]').filter(
    "[value='energetic']"
  ).length > 0
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

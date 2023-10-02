---
id: 58c383d33e2e3259241f3076
title: 使用屬性選擇器來設置元素的樣式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpymfJ'
forumTopicId: 301092
dashedName: use-attribute-selectors-to-style-elements
---

# --description--

我們已經通過設置元素的 `id` 和 `class` 來顯示想要的樣式。 這就是 ID 選擇器和 Class 選擇器。 另外，也還有其他的 CSS 選擇器可以讓我們給特定的元素設置樣式。

讓我們再次通過貓咪圖片項目來練習 CSS 選擇器。

在這個挑戰裏，我們需要使用 `[attr=value]` 屬性選擇器來修改 CatPhotoApp 中複選框的樣式。 這個選擇器使用特定的屬性值來匹配和設置元素樣式。 例如，下面的代碼會改變所有 `type` 爲 `radio` 的元素的外邊距。

```css
[type='radio'] {
  margin: 20px 0px 20px 0px;
}
```

# --instructions--

請使用 `type` 屬性選擇器，設置複選框的上外邊距爲 10px，下外邊距爲 15px。

# --hints--

應使用 `type` 屬性選擇器來匹配複選框。

```js
assert(
  code.match(
    /<style>[\s\S]*?\[\s*?type\s*?=\s*?("|')checkbox\1\s*?\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi
  )
);
```

複選框的上外邊距應爲 10px。

```js
assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css('marginTop') === '10px') {
        count++;
      }
    });
    return count === 3;
  })()
);
```

複選框的下外邊距應爲 15px。

```js
assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css('marginBottom') === '15px') {
        count++;
      }
    });
    return count === 3;
  })()
);
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
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
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

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
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
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
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

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
  [type='checkbox'] {
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
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

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
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

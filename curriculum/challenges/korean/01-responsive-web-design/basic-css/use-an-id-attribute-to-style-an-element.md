---
id: bad87dee1348bd9aede07836
title: id 속성을 사용해서 요소를 스타일링하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakyZfL'
forumTopicId: 18339
dashedName: use-an-id-attribute-to-style-an-element
---

# --description--

`id` 속성의 멋진 점은 클래스와 마찬가지로 CSS를 사용하여 스타일을 지정할 수 있다는 것입니다.

그러나 `id`는 재사용할 수 없으며 하나의 요소에만 적용해야 합니다. `id`는 클래스보다 높은 특수성(중요도) 을 갖기 때문에 동일한 요소에 두 가지가 모두 적용되고 충돌하는 스타일이 있는 경우 `id`의 스타일이 적용됩니다.

다음은 `cat-photo-element`라는 `id` 속성을 가진 요소를 가져와 배경 색상을 초록색으로 지정하는 방법의 예입니다. `style` 요소에서 다음과 같이 작성하세요.

```css
#cat-photo-element {
  background-color: green;
}
```

`style` 요소 내에서 클래스를 참조할 때 항상 이름 앞에 `.`을 넣어야 함을 유의하세요. id 를 참조할 때 항상 이름 앞에 `#`을 넣습니다.

# --instructions--

이제 `id` 속성이 `cat-photo-form`인 양식에 초록색 배경을 지정해 보세요.

# --hints--

`form` 요소는 `cat-photo-form`라는 id를 가져야 합니다.

```js
assert($('form').attr('id') === 'cat-photo-form');
```

`form` 요소는 초록색의 `background-color`를 가져야 합니다.

```js
assert($('#cat-photo-form').css('background-color') === 'rgb(0, 128, 0)');
```

`form` 요소는 `id` 속성을 갖고 있어야 합니다.

```js
assert(
  code.match(/<form.*cat-photo-form.*>/gi) &&
    code.match(/<form.*cat-photo-form.*>/gi).length > 0
);
```

`form` 요소에는 `class` 또는 `style` 속성을 지정하지 않아야 합니다.

```js
assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi));
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
      <li>catnip</li>
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

  #cat-photo-form {
    background-color: green;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>catnip</li>
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

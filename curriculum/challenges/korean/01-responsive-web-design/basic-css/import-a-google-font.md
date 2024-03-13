---
id: bad87fee1348bd9aedf08807
title: 구글 폰트 가져오기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MRsJ'
forumTopicId: 18200
dashedName: import-a-google-font
---

# --description--

다수의 운영 체제에서 찾을 수 있는 일반적인 글꼴을 지정하는 것 외에도 웹 사이트에서 사용할 비표준, 사용자 정의 웹 글꼴을 지정할 수 있습니다. 인터넷에는 웹 글꼴을 얻을 수 있는 많은 소스가 있습니다. 이 예제에서는 Google Fonts 라이브러리에 중점을 둡니다.

Google Fonts는 웹 폰트의 무료 라이브러리로, 해당 폰트의 URL을 참조하여 CSS에서 사용할 수 있습니다.

그러면 Google 폰트를 가져와 적용해 보겠습니다. (참고: Google이 귀하의 국가에서 차단된 경우 이 도전 과제를 건너뛰어야 합니다.)

Google 폰트를 가져오려면 Google Fonts 라이브러리에서 폰트의 URL을 복사한 다음 HTML에 붙여넣으면 됩니다. 이 도전에서는 `Lobster` 폰트를 가져올 것입니다. 이를 위해 다음 코드 스니펫을 복사하고 코드 편집기의 맨 위에 붙여 넣으세요 (opening `style` element 이전에).

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```

이제 다음 예제처럼 FAMILY_NAME으로 `Lobster`를 사용하여 CSS에서 `Lobster` 글꼴을 사용할 수 있습니다.

```css
font-family: FAMILY_NAME, GENERIC_NAME;
```

GENERIC_NAME은 선택 사항이며 다른 지정된 글꼴을 사용할 수 없는 경우 대체 글꼴로 사용됩니다. 이것은 다음 첼린지에서 살펴보겠습니다.

Family names은 대소문자를 구별하며 이름에 공백이 있으면 따옴표로 둘러싸야 합니다. 예를 들어, `"Open Sans"` 폰트를 사용하려면 따옴표가 필요하지만 `Lobster` 폰트를 사용할 때는 따옴표가 필요하지 않습니다.

# --instructions--

당신의 웹페이지에 `Lobster` 폰트를 가져오세요. 그런 다음, `h2` 요소에 대한 `font-family`로 `Lobster`를 설정하기 위해 요소 선택자를 사용하세요.

# --hints--

`Lobster` 폰트를 가져와야 합니다.

```js
assert($('link[href*="googleapis" i]').length);
```

`h2` 요소는 `Lobster` 폰트를 써야합니다.

```js
assert(
  $('h2')
    .css('font-family')
    .match(/lobster/i)
);
```

폰트를 변경하려면 `h2` 요소 선택자만 사용해야 합니다.

```js
assert(
  /\s*[^\.]h2\s*\{\s*font-family\s*:\s*('|"|)Lobster\1\s*(,\s*('|"|)[a-z -]+\3\s*)?(;\s*\}|\})/gi.test(
    code
  )
);
```

`p` 요소는 여전히 `monospace` 폰트를 사용해야 합니다.

```js
assert(
  $('p')
    .css('font-family')
    .match(/monospace/i)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: red;
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
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  h2 {
    font-family: Lobster;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
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

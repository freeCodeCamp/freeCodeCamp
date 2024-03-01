---
id: bad82fee1348bd9aedf08721
title: RGB를 사용하여 색 섞기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24JU6'
forumTopicId: 18368
dashedName: use-rgb-to-mix-colors
---

# --description--

헥스(hex) 코드와 마찬가지로 RGB 값을 다양하게 조합해서 사용하여 색상을 섞을 수 있습니다.

# --instructions--

`style` 엘리먼트의 헥스 코드를 올바른 RGB값으로 바꿔주세요.

<table><tbody><tr><th>색</th><th>RGB</th></tr><tr><td>Blue(파란색)</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Red(빨간색)</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Orchid(오키드)</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Sienna(시에나)</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>

# --hints--

`I am red!`라는 텍스트가 있는 `h1` 엘리먼트의 `color`는 빨간색이어야 합니다.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

빨간색을 나타내기 위해 `rgb`를 사용해야 합니다.

```js
assert(
  code.match(
    /\.red-text\s*{\s*color\s*:\s*rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)\s*;?\s*}/gi
  )
);
```

`I am orchid!`라는 텍스트가 있는 `h1` 엘리먼트의 `color`는 오키드색이어야 합니다.

```js
assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)');
```

오키드색을 나타내기 위해 `rgb`를 사용해야 합니다.

```js
assert(
  code.match(
    /\.orchid-text\s*{\s*color\s*:\s*rgb\(\s*218\s*,\s*112\s*,\s*214\s*\)\s*;?\s*}/gi
  )
);
```

`I am blue!`라는 텍스트가 있는 `h1` 엘리먼트의 `color`는 파란색이어야 합니다.

```js
assert($('.blue-text').css('color') === 'rgb(0, 0, 255)');
```

파란색을 나타내기 위해 `rgb`를 사용해야 합니다.

```js
assert(
  code.match(
    /\.blue-text\s*{\s*color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*255\s*\)\s*;?\s*}/gi
  )
);
```

`I am sienna!`라는 텍스트가 있는 `h1` 엘리먼트의 `color`는 시에나색이어야 합니다.

```js
assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)');
```

시에나색을 나타내기 위해 `rgb`를 사용해야 합니다.

```js
assert(
  code.match(
    /\.sienna-text\s*{\s*color\s*:\s*rgb\(\s*160\s*,\s*82\s*,\s*45\s*\)\s*;?\s*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color:rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```

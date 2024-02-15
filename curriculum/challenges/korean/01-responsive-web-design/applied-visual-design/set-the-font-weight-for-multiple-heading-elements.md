---
id: 587d781c367417b2b2512ac3
title: 여러 헤딩 요소들의 폰트 사이즈를 설정합니다.
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
dashedName: set-the-font-weight-for-multiple-heading-elements
---

# --description--

지난 과제에서 각각의 제목 태그의 `font-size`를 설정했습니다. 여기에서는 `font-weight`를 조정합니다.

`font-weight` 속성은 텍스트 영역에서 문자의 굵기를 설정합니다.

# --instructions--

<ul><li><code>h1</code>태그의 <code>font-weight</code>를 800으로 설정합니다.</li><li><code>h2</code>태그의 <code>font-weight</code>를 600으로 설정합니다.</li><li><code>h3</code>태그의 <code>font-weight</code>를 500으로 설정합니다.</li><li><code>h4</code>태그의 <code>font-weight</code>를 400으로 설정합니다.</li><li><code>h5</code>태그의 <code>font-weight</code>를 300으로 설정합니다.</li><li><code>h6</code>태그의 <code>font-weight</code>를 200으로 설정합니다.</li></ul>

# --hints--

당신의 코드는 `h1` 태그의 `font-weight` 속성을 800으로 설정해야 합니다.

```js
assert($('h1').css('font-weight') == '800');
```

당신의 코드는 `h2` 태그의 `font-weight` 속성을 600으로 설정해야 합니다.

```js
assert($('h2').css('font-weight') == '600');
```

당신의 코드는 `h3` 태그의 `font-weight` 속성을 500으로 설정해야 합니다.

```js
assert($('h3').css('font-weight') == '500');
```

당신의 코드는 `h4` 태그의 `font-weight` 속성을 400으로 설정해야 합니다.

```js
assert($('h4').css('font-weight') == '400');
```

당신의 코드는 `h5` 태그의 `font-weight` 속성을 300으로 설정해야 합니다.

```js
assert($('h5').css('font-weight') == '300');
```

당신의 코드는 `h6` 태그의 `font-weight` 속성을 200으로 설정해야 합니다.

```js
assert($('h6').css('font-weight') == '200');
```

# --seed--

## --seed-contents--

```html
<style>
  h1 {
    font-size: 68px;

  }
  h2 {
    font-size: 52px;

  }
  h3 {
    font-size: 40px;

  }
  h4 {
    font-size: 32px;

  }
  h5 {
    font-size: 21px;

  }
  h6 {
    font-size: 14px;

  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

# --solutions--

```html
<style>
  h1 {
    font-size: 68px;
    font-weight: 800;
  }
  h2 {
    font-size: 52px;
    font-weight: 600;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
  }
  h4 {
    font-size: 32px;
    font-weight: 400;
  }
  h5 {
    font-size: 21px;
    font-weight: 300;
  }
  h6 {
    font-size: 14px;
    font-weight: 200;
  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

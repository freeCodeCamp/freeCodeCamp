---
id: 587d781c367417b2b2512ac2
title: 여러 헤딩 요소들의 폰트 사이즈 설정하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

`font-size` 속성은 특정 요소 내에서 텍스트의 크기를 지정하는 데 사용됩니다. 이 규칙은 페이지의 텍스트를 시각적으로 일관되게 만들기 위해 여러 요소에 사용될 수 있습니다. 이 도전에서는 `h1`부터 `h6`까지 모든 태그에 대한 값을 설정하여 헤딩 크기를 균형있게 맞출 것입니다.

# --instructions--

  <p><code>style</code> 태그 안에서 다음의 <code>font-size</code>를 설정합니다.</p>

  <ul>
    <li><code>h1</code> 태그는 68px로 설정합니다.</li>
    <li><code>h2</code> 태그는 52px로 설정합니다.</li>
    <li><code>h3</code> 태그는 40px로 설정합니다.</li>
    <li><code>h4</code> 태그는 32px로 설정합니다.</li>
    <li><code>h5</code> 태그는 21px로 설정합니다.</li>
    <li><code>h6</code> 태그는 14px로 설정합니다.</li>
  </ul>

# --hints--

코드에서 `h1` 태그의 `font-size` 속성을 68픽셀로 설정해야 합니다.

```js
 const fontSizeOfh1 = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('font-size');
 assert(fontSizeOfh1 === '68px');
```

코드에서 `h2` 태그의 `font-size` 속성을 52픽셀로 설정해야 합니다.

```js
 const fontSizeOfh2 = new __helpers.CSSHelp(document).getStyle('h2')?.getPropertyValue('font-size');
 assert(fontSizeOfh2 === '52px');
```

코드에서 `h3` 태그의 `font-size` 속성을 40픽셀로 설정해야 합니다.

```js
 const fontSizeOfh3 = new __helpers.CSSHelp(document).getStyle('h3')?.getPropertyValue('font-size');
 assert(fontSizeOfh3 === '40px');
```

코드에서 `h4` 태그의 `font-size` 속성을 32픽셀로 설정해야 합니다.

```js
 const fontSizeOfh4 = new __helpers.CSSHelp(document).getStyle('h4')?.getPropertyValue('font-size');
 assert(fontSizeOfh4 === '32px');
```

코드에서 `h5` 태그의 `font-size` 속성을 21픽셀로 설정해야 합니다.

```js
 const fontSizeOfh5 = new __helpers.CSSHelp(document).getStyle('h5')?.getPropertyValue('font-size');
 assert(fontSizeOfh5 === '21px');
```

코드에서 `h6` 태그의 `font-size` 속성을 14픽셀로 설정해야 합니다.

```js
 const fontSizeOfh6 = new __helpers.CSSHelp(document).getStyle('h6')?.getPropertyValue('font-size');
 assert(fontSizeOfh6 === '14px');
```

# --seed--

## --seed-contents--

```html
<style>






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

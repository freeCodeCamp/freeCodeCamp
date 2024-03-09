---
id: 587d78b0367417b2b2512b08
title: 미디어 쿼리 생성하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

미디어 쿼리는 CSS3에 도입된 새로운 기술로, 다른 뷰포트 사이즈에 따라 어떻게 내용을 표시할지 변경합니다. 뷰포트는 웹 페이지에서의 유저의 시각적 영역으로, 해당 사이트를 접속하는 데 쓰인 단말기에 따라 달라집니다.

미디어 쿼리는 미디어 유형을 활용하며, 이 미디어 유형이 해당 웹 문서가 보여지는 단말기의 유형과 일치하면 스타일이 적용되는 식입니다. 여러분은 원하는 만큼 많이 다양한 선택자와 스타일 안에 미디어 쿼리를 사용할 수 있습니다.

아래는 단말기의 가로 길이가 `100px`보다 작거나 같을 경우 해당 내용을 반환하는 미디어 쿼리에 대한 예제입니다.

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

아래는 단말기의 세로 길이가 `350px`보다 길거나 같을 경우 해당 내용을 반환하는 미디어 쿼리 예제입니다.

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

미디어 쿼리 내부의 CSS는 오직 해당 미디어의 유형이 현재 사용되는 단말기의 것과 일치해야만 적용된다는 것을 기억해두세요.

# --instructions--

단말기의 세로 길이가 `800px`보다 짧거나 같을 때 `p` 태그가 `10px`의 `font-size`를 가지도록 미디어 쿼리를 추가해보세요.

# --hints--

여러분은 `height`가 `800px`보다 작거나 같은 경우의 단말기에 적용할 `@media` 쿼리를 선언해야 합니다.

```js
const media = new __helpers.CSSHelp(document).getCSSRules('media');
assert(media.some(x => x.media?.mediaText?.includes('(max-height: 800px)')));
```

`p` 요소는 단말기의 `height`가 `800px`보다 작거나 같을 경우 `font-size`가 `10px`이어야 합니다.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-height: 800px)');
assert(rules?.find(x => x.selectorText === 'p')?.style?.fontSize === "10px");
```

`p` 요소는 단말기의 `height`가 `800px`보다 큰 경우 `font-size`의 초기값으로 `20px`을 가집니다.

```js
const ifPFirst = new __helpers.CSSHelp(document).getCSSRules()?.find(x => x?.selectorText === 'p' || x?.media);
assert(ifPFirst?.style?.fontSize === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 20px;
  }

  /* Only change code below this line */

  /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

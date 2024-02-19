---
id: 587d78b1367417b2b2512b0c
title: 텍스트를 반응형으로 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/crzN7T8'
forumTopicId: 301141
dashedName: make-typography-responsive
---

# --description--

글자 크기 조정을 위해 `em`혹은 `px` 사용하는 대신에 반응형 텍스트를 위한 뷰포트 단위를 사용할 수 있습니다. 백분율같은 뷰포트 단위는 상대적 단위지만 다른 아이템들에 기준을 둡니다. 뷰포트 단위는 기기의 뷰포트 차원(너비, 높이)에 상대적이고 백분율은 부모 컨테이너의 크기에 상대적입니다.

네 개의 뷰포트 유닛이 있습니다.

<ul><li><code>vw</code> (뷰포트 너비): <code>10vw</code>는 뷰포트 너비의 10%입니다.</li><li><code>vh</code> (뷰포트 높이): <code>3vh</code>는 뷰포트 높이의 3%입니다.</li><li><code>vmin</code> (뷰포트 최소값): <code>70vmin</code>는 뷰포트의 더 작은 차원(높이 혹은 너비)의 70%입니다.</li><li><code>vmax</code> (뷰포트 최대값): <code>100vmax</code>는 뷰포트의 더 큰 차원(높이 혹은 너비)의 100%입니다.</li></ul>

역 `body` 태그를 뷰포트 너비의 30%로 설정하는 예시입니다.

```css
body { width: 30vw; }
```

# --instructions--

`h2` 태그의 `width`를 뷰포트의 너비의 80% 그리고 그 문단의 `width`를 뷰포트의 더 작은 차원의 75%로 설정하세요.

# --hints--

`h2` 태그는 80vw `width`를 가져야 합니다.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g)
);
```

`p` 태그는 75vmin `width`를 가져야 합니다.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

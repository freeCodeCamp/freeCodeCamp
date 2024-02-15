---
id: bad87fee1348bd9aedf08804
title: HTML 주석 처리
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cGyGbca'
forumTopicId: 16782
dashedName: comment-out-html
---

# --description--

주석을 시작하려면 `<!--`를 사용해야 하고, 주석을 끝내려면 `-->`를 사용해야 합니다.

여기에서는 `h2` 요소가 시작되기 전에 주석을 끝내야 합니다.

# --instructions--

`h1` 요소와 `p` 요소를 주석 처리하지만 `h2` 요소는 주석 처리하지 마십시오.

# --hints--

`h1` 요소는 주석 처리되어 페이지에 보이지 않아야 합니다.

```js
assert($('h1').length === 0);
```

`h2` 요소는 주석 처리되지 않아서 페이지에 보여야 합니다.

```js
assert($('h2').length > 0);
```

`p` 요소는 주석 처리되어 페이지에 보이지 않아야 합니다.

```js
assert($('p').length === 0);
```

모든 주석은 `-->`로 끝나야 합니다.

```js
assert(code.match(/[^fc]-->/g).length > 1);
```

`h1`, `h2` 또는 `p` 요소의 순서가 변경되면 안 됩니다.

```js
assert(
  code.match(/<([a-z0-9]){1,2}>/g)[0] === '<h1>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[1] === '<h2>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[2] === '<p>'
);
```

# --seed--

## --seed-contents--

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

# --solutions--

```html
<!--<h1>Hello World</h1>-->
<h2>CatPhotoApp</h2> 
<!--<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p> -->
```

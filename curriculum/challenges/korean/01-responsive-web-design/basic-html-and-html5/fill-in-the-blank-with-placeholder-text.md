---
id: bad87fee1348bd9aedf08833
title: 무작위 텍스트로 빈칸 채우기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cgR7Dc7'
forumTopicId: 18178
dashedName: fill-in-the-blank-with-placeholder-text
---

# --description--

웹 개발자들은 오래전부터 <dfn>lorem ipsum text</dfn>를 무작위 텍스트로 이용했습니다. lorem ipsum text는 고대 로마의 키케로(Cicero)가 쓴 유명한 구절에서 무작위로 인용한 텍스트입니다.

Lorem ipsum text는 16세기부터 식자공들에 의해 무작위 텍스트로 사용되어왔으며 이 전통은 웹에서도 계속되고 있습니다.

하지만, 5세기 동안이나 이용되어 왔다면 쓰일 만큼 쓰였죠. 그래서 우리는 고양이 사진 앱 (CatPhotoApp)을 만들고 있으므로 "kitty ipsum" 이라는 텍스트를 사용하겠습니다.

# --instructions--

`p` 요소 안의 텍스트를 kitty ipsum 텍스트의 처음 몇 단어로 바꾸세요: `Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

# --hints--

`p` 요소에는 제공된 "kitty ipsum" 텍스트의 처음 몇 단어가 포함되야 합니다.

```js
assert.isTrue(/Kitty(\s)+ipsum/gi.test($('p').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>
```

# --solutions--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff</p>
```

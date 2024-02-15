---
id: 587d778f367417b2b2512aae
title: 설명이 포함된 링크(Link) 텍스트로 링크에 의미주기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
dashedName: give-links-meaning-by-using-descriptive-link-text
---

# --description--

스크린 리더(screen reader) 사용자들은 자신들의 기기가 어떤 유형의 내용을 읽는지에 관해 다양한 선택지가 있습니다. 이 선택지들은 랜드마크(landmark) 요소로 건너뛰기, 본문으로 넘어가기 혹은 글머리에서 페이지 요약 가져오기 등이 있습니다. 다른 선택지로는 한 페이지 내에서 가능한 링크들을 듣는 것입니다.

스크린 리더는 링크 텍스트 혹은 (`a`) 태그 사이에 무엇이 있는지 읽어서 이 작업을 합니다. "여기를 클릭하세요" 혹은 "더보기" 같은 링크들은 도움이 되지 않습니다. 대신에 스크린 리더 사용자들에게 더 많은 의미를 제공하려면 `a` 태그에 설명이 간결하고 명확한 텍스트를 사용하면 됩니다.

# --instructions--

Camper Cat이 사용하고 있는 링크 텍스트는 문맥의 이해없이는 그리 설명적이지 않습니다. `Click here` 대신에 `information about batteries`가 감싸지도록 (`a`) 태그를 옮겨주세요.

# --hints--

`information about batteries`를 감싸도록 `Click here`로부터 `a` 태그를 옮겨야 합니다.

```js
assert(
  $('a')
    .text()
    .match(/^(information about batteries)$/g)
);
```

`a` 요소는 빈 문자열인 `""` 값을 가진 `href` 속성을 지니고 있어야 합니다.

```js
assert($('a').attr('href') === '');
```

`a` 요소는 닫는 태그가 있어야 합니다.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```

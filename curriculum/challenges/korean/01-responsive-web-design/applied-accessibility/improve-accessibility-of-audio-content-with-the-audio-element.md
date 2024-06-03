---
id: 587d7789367417b2b2512aa4
title: 오디오 요소를 사용하여 오디오 콘텐츠의 접근성 향상
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
dashedName: improve-accessibility-of-audio-content-with-the-audio-element
---

# --description--

HTML5의 `audio` 요소는 마크업에서 소리나 오디오 스트림 콘텐츠를 감싸서 시맨틱 의미를 부여합니다. 청각을 잃었거나 청력이 제한된 사람들을 위해 오디오 콘텐츠에는 대체 텍스트가 필요합니다. 이는 페이지 내에서 콘텐츠 근처의 텍스트 또는 대본으로 연결된 링크를 통해 제공할 수 있습니다.

`audio` 태그는 `controls` 속성을 지원합니다. 이 기능은 브라우저의 기본 재생, 일시 중지 및 기타 컨트롤을 표시하며 키보드 기능을 지원합니다. 이 속성은 불리언(boolean) 속성으로, 값이 필요하지 않습니다. 태그에 이 속성이 포함되면 설정이 켜집니다.

여기 예시가 있습니다.

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>
```

**참고:** 일반적으로 멀티미디어 콘텐츠에는 시각적 및 청각적 구성 요소가 모두 포함되어 있습니다. 시각적 또는 청각적 장애를 가진 사용자들이 액세스할 수 있도록 동기화된 자막과 대본이 필요합니다. 일반적으로 웹 개발자가 자막이나 대본을 꼭 작성해야하는 것은 아니지만 이를 포함해야 하는 방법은 알고 있어야 합니다.

# --instructions--

캠퍼 캣(Camper Cat)에서 쉬는 시간입니다. 이번에는 캠퍼 Zersiax(@zersiax)를 만나보겠습니다. 그는 스크린 리더 사용자이자 접근성 마스터 입니다. `p` 요소 뒤에 `audio` 요소를 추가하면 스크린 리더 작동 소리를 듣을 수 있습니다. `controls` 속성을 포함하세요. Then place a `source` element inside the `audio` tags with the `src` attribute set to `https://cdn.freecodecamp.org/curriculum/applied-accessibility/screen-reader.mp3` and `type` attribute set to `"audio/mpeg"`.

**참고:** 오디오 클립이 빠르게 들릴 수 있고 이해하기 어려울 수 있지만, 이는 스크린 리더 사용자에게 정상적인 속도입니다.

# --hints--

코드에는 `audio` 태그가 하나만 있어야 합니다.

```js
assert($('audio').length === 1);
```

`audio` 요소에는 닫는 태그가 있어야 합니다.

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

`audio` 태그는 `controls` 속성을 포함해야 합니다.

```js
assert($('audio').attr('controls'));
```

코드에는 `source` 태그가 하나만 있어야 합니다.

```js
assert($('source').length === 1);
```

`source` 태그는 `audio` 태그 안에 있어야 합니다.

```js
assert($('audio').children('source').length === 1);
```

`source` 태그의 `src` 속성 값은 안내에 제공된 링크와 일치해야 합니다.

```js
assert(
  $('source').attr('src') ===
    'https://cdn.freecodecamp.org/curriculum/applied-accessibility/screen-reader.mp3'
);
```

`source` 태그에는 `type` 속성이 포함되어 있어야 하며 값은 audio/mpeg 여야 합니다.

```js
assert($('source').attr('type') === 'audio/mpeg');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>



  </main>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
    <audio controls>
      <source src="https://cdn.freecodecamp.org/curriculum/applied-accessibility/screen-reader.mp3" type="audio/mpeg"/>
    </audio>
  </main>
</body>
```

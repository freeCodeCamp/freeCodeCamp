---
id: 587d774c367417b2b2512a9d
title: Alt 텍스트가 빈칸이어야 되는 때를 파악하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
dashedName: know-when-alt-text-should-be-left-blank
---

# --description--

지난 챌린지에서 `img` 태그들을 사용하려면 `alt` 속성을 필수적으로 포함해야 되는 것을 배웠습니다. 하지만 어떤 경우에는 이미지를 설명하는 캡션과 함께 그룹화되거나 장식용으로만 사용되기도 합니다. 이런 경우들에는 `alt` 텍스트가 중복되거나 불필요해 보일 수 있습니다.

한 사진이 텍스트 내용으로 이미 설명되어 있거나 페이지에 도움이 되지 않을 시 `img`는 여전히 `alt` 속성이 필요하지만 빈 문자열로 설정할 수 있습니다. 여기 예시가 있습니다.

```html
<img src="visualDecoration.jpeg" alt="">
```

배경 이미지들은 보통 '장식 용도' 로 분류가 됩니다. 그러나 이런 배경 이미지는 보통 CSS 규칙에 의해 적용되므로 마크업 화면 낭독 프로세스의 일부가 아닙니다.

**참고:** 캡션이 있는 사진들의 경우, 검색 엔진이 사진의 내용을 카탈로그화하는 데 도와주기 위해서 `alt` 텍스트를 포함하는 것을 추천합니다.

# --instructions--

Camper Cat은 자신 웹사이트의 블로그 부분을 위한 뼈대 페이지를 코딩했습니다. 그는 두 개의 기사 사이에 사무라이 검 사진으로 시각적인 구분을 추가하려고 있습니다. `img` 태그에 `alt` 속성을 추가한 뒤 빈 문자열로 설정합니다. (이미지 `src` 실제 파일에 링크되지 않으니 검들이 화면에 나타나지 않아도 걱정할 필요없다는 점 참고하시기 바랍니다.)

# --hints--

`img` 태그는 `alt` 속성이 있어야 합니다.

```js
assert(!($('img').attr('alt') == undefined));
```

`alt` 속성은 빈 문자열로 설정되어야 합니다.

```js
assert($('img').attr('alt') == '');
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" alt="">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

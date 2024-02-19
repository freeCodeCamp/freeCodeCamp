---
id: bad87fee1348bd9aecf08801
title: HTML5 요소 소개
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBkZGpt7'
forumTopicId: 301097
dashedName: introduction-to-html5-elements
---

# --description--

HTML5는 더 세분된 HTML 태그를 도입합니다. 여기에는 `main`, `header`, `footer`, `nav`, `video`, `article`, `section` 이 포함됩니다.

이러한 태그는 자세한 HTML 구조를 제공하고, HTML을 읽기 쉽게 만들고, 검색 엔진 최적화 (Search Engine Optimization, SEO) 및 접근성을 지원합니다. `main` HTML5 태그는 검색 엔진과 다른 개발자가 페이지의 주요 콘텐츠를 찾는 데 도움이 됩니다.

내부에 두 개의 하위 요소가 중첩된 `main` 요소 예시:

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**노트:** 많은 새 HTML5 태그와 그 이점은 접근성 섹션에서 다룹니다.

# --instructions--

다음 kitty ipsum 텍스트를 사용하여 두 번째 `p` 요소를 만드세요. `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

그 다음, `main` 요소를 만들고 `main` 요소 안에 두 개의 `p` 요소를 중첩하세요.

# --hints--

Kitty Ipsum 텍스트가 있는 2개의 `p` 요소가 있어야 합니다.

```js
assert($('p').length > 1);
```

모든 `p` 요소에는 닫는 태그가 있어야 합니다.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

`p` 요소는 제공된 `kitty ipsum` 텍스트의 처음 몇 단어를 포함해야 합니다.

```js
assert.isTrue(/Purr\s+jump\s+eat/gi.test($('p').text()));
```

코드에는 `main` 요소가 있어야 합니다.

```js
assert($('main').length === 1);
```

`main` 요소에는 두 개의 문단 요소가 중첩돼 있어야 합니다.

```js
assert($('main').children('p').length === 2);
```

`main`의 여는 태그는 첫 번째 문단 태그 앞에 와야 합니다.

```js
assert(code.match(/<main>\s*?<p>/g));
```

`main`의 닫는 태그는 두 번째 문단의 닫는 태그 뒤에 와야 합니다.

```js
assert(code.match(/<\/p>\s*?<\/main>/g));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

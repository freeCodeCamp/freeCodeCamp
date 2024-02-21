---
id: bd7123c8c441eddfaeb5bdef
title: HTML의 요소들 소개
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
dashedName: say-hello-to-html-elements
---

# --description--

FreeCodeCamp의 HTML 코딩 도전 과제에 오신 것을 환영합니다. 이 도전 과제들은 웹 개발 과정을 단계별로 안내합니다.

먼저, HTML을 사용하여 간단한 웹 페이지를 만드는 것으로 시작합니다. 이 웹 페이지에 포함 된 코드 편집기에서 코드를 편집 할 수 있습니다.

코드 편집기에서 `<h1>Hello</h1>`라고 적힌 코드가 보이시나요? 이것은 하나의 HTML 요소입니다.

대부분의 HTML 요소들은 여는 태그와 닫는 태그가 있습니다.

여는 태그는 다음과 같습니다:

```html
<h1>
```

닫는 태그는 다음과 같습니다.

```html
</h1>
```

여는 태그와 닫는 태그의 유일한 차이점은 닫는 태그의 여는 괄호 뒤의 슬래시(/) 입니다.

각 도전 과제에는 "테스트 실행(Run tests)" 버튼을 클릭하여 언제든지 실행할 수 있는 테스트가 있습니다. 만약 모든 테스트들이 통과한다면, 해결 방법을 제출하고 다음 도전 과제로 이동하라는 메시지가 표시됩니다.

# --instructions--

이 도전 과제를 통과하려면, `h1` 요소의 텍스트를 `Hello World`로 바꾸세요.

# --hints--

`h1` 에는 `Hello World` 라는 텍스트가 있어야 합니다.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
```

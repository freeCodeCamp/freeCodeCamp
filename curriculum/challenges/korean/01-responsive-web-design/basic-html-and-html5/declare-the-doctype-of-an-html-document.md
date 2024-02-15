---
id: 587d78aa367417b2b2512aed
title: HTML 문서의 유형 선언하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
dashedName: declare-the-doctype-of-an-html-document
---

# --description--

지금까지 과제들은 특정 HTML 요소와 그 사용에 관한 것이었습니다. 그러나 페이지에 전반적인 구조를 잡고 모든 HTML 문서에 포함되는 몇몇 요소가 있습니다.

문서 상단에 브라우저에게 페이지가 어떤 HTML 버전을 사용하는지 알려줄 필요가 있습니다. HTML은 진화하는 언어이고 정기적으로 업데이트가 됩니다. 대부분의 브라우저는 최신 사양인 HTML5을 지원합니다. 하지만 오래된 웹페이지는 이전 버전을 사용할지도 모릅니다.

첫 줄에 있는 `<!DOCTYPE ...>`를 추가하여 브라우저에 이 정보를 전달합니다. 여기서 `...`는 HTML의 버전입니다. HTML5는 `<!DOCTYPE html>`을 사용합니다.

`!`와 대문자로 된 `DOCTYPE`은 특히 오래된 브라우저를 위해 중요합니다. `html`은 대소문자를 구분하지 않습니다.

다음은, HTML 코드가 `html` 태그에 감싸져야 합니다. 시작 `<html>` 태그는 `<!DOCTYPE html>` 하위에 위치하고 끝 `</html>`은 페이지의 끝에 위치하게 됩니다.

여기 페이지 구조에 대한 예시가 있습니다. HTML 코드는 두 개의 `html` 태그 사이에 있는 공간으로 가게 됩니다.

```html
<!DOCTYPE html>
<html>

</html>
```

# --instructions--

HTML5를 위한 `DOCTYPE` 태그를 코드 편집기의 빈 HTML 문서 상단에 추가하세요. 그 하위에 `h1`를 감싸는 `html`를 추가하시오 헤딩은 어느 글자든 포함할 수 있습니다.

# --hints--

코드에 `<!DOCTYPE html>` 태그가 있어야 합니다.

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

하나의 `html` 요소가 있어야 합니다.

```js
assert($('html').length == 1);
```

`html` 태그는 하나의 `h1` 요소를 감싸야 합니다.

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```

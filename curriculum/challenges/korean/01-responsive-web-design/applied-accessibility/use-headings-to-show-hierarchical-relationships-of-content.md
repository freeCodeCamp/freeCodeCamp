---
id: 587d774d367417b2b2512a9e
title: 콘텐츠의 계층적 관계를 보여주기 위해 헤딩 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cqVEktm'
forumTopicId: 301026
dashedName: use-headings-to-show-hierarchical-relationships-of-content
---

# --description--

헤딩(`h1`부터 `h6` 요소)은 콘텐츠에 구조와 레이블을 제공하는 중요한 태그입니다. 스크린 리더는 페이지에서 제목만 읽도록 설정될 수 있어 사용자에게 요약 정보를 제공합니다. 마크업에서 사용하는 헤딩 태그는 시맨틱적인 의미를 지니고 있고 서로 관련이 있어야 하며, 크기 값만을 고려하여 선택되어서는 안 됩니다.

*시맨틱적 의미*란 컨텐츠를 포함하는 태그가 해당 정보의 유형을 나타낸다는 것을 의미합니다.

만약 소개, 본문, 결론으로 이루어진 논문을 작성한다면, 본문의 한 부분으로 결론을 넣는 것은 말이 되지 않을 것입니다. 이는 자체적인 섹션으로 나뉘어져야 합니다. 마찬가지로, 웹페이지의 헤딩 태그는 순서대로 쓰여야 하며 콘텐츠의 계층적인 관계를 나타내어야 합니다.

동일한 (또는 더 높은) 순위의 헤딩은 새로운 섹션이 시작하리라는 것을 암시하고, 더 낮은 순위의 제목은 이전 섹션의 하위 섹션을 시작합니다.

예를 들어 설명하자면, `h2` 요소로 시작한 페이지에 여러 하위 섹션이 `h4` 요소로 표시된 경우, 스크린 리더 사용자가 혼란스러워 할 수 있습니다. 여섯 가지 선택지가 있기 때문에 브라우저에서 더 잘 보일만한 태그를 사용하고 싶을 수 있지만, 상대적인 크기를 편집하기 위해서는 CSS를 사용하면 됩니다.

마지막으로, 각 페이지에는 항상 하나의 (`h1`) 요소만 있어야 하며, 이는 콘텐츠의 주요 주제입니다. 이런 헤딩들은 검색 엔진이 페이지의 주제를 이해하는 데 일부 사용됩니다.

# --instructions--

캠퍼 캣은 자신의 사이트에 닌자가 되는 방법을 담고 있는 페이지를 원합니다. 헤딩을 수정하여 마크업이 시맨틱적 의미를 갖고 또 태그들이 올바른 부모-자식 관계를 나타낼 수 있도록 캠퍼 캣을 도와주세요. 모든 `h5` 태그를 올바른 헤딩 레벨로 변경하여 `h2` 제목의 하위 섹션임을 나타내세요. 이를 위해서 `h3` 태그를 사용하세요.

# --hints--

코드에는 6개의 `h3` 요소가 있어야 합니다.

```js
assert($('h3').length === 6);
```

코드에는 6개의 `h3` 닫는 태그가 있어야 합니다.

```js
assert((code.match(/\/h3/g) || []).length === 6);
```

`h5` 태그는 하나도 없어야 합니다.

```js
assert($('h5').length === 0);
```

`h5`의 닫는 태그는 하나도 없어야 합니다.

```js
assert(/\/h5/.test(code) === false);
```

# --seed--

## --seed-contents--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>
```

# --solutions--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h3>How to Hide in Plain Sight</h3>
  <h3>How to Climb a Wall</h3>

  <h2>Learn the Art of Battle</h2>
  <h3>How to Strengthen your Body</h3>
  <h3>How to Fight like a Ninja</h3>

  <h2>Learn the Art of Living with Honor</h2>
  <h3>How to Breathe Properly</h3>
  <h3>How to Simplify your Life</h3>
</main>
```

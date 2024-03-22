---
id: bd7157d8c242eddfaeb5bd13
title: 마크다운 프리뷰어 만들기
challengeType: 3
forumTopicId: 301372
dashedName: build-a-markdown-previewer
---

# --description--
**참고:** **React 18은 이 프로젝트의 테스트와 알려진 호환성 문제가 있습니다 (자세한 내용은 [이슈](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922) 참조)**

**목표:** 다음과 기능적으로 유사한 앱을 만드세요. <a href="https://markdown-previewer.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://markdown-previewer.freecodecamp.rocks/</a>.

아래 유저 스토리를 충족하고 모든 테스트를 통과시키세요. 어떤 라이브러리나 API를 사용해도 좋습니다. 원하는 스타일로 꾸며주세요.

이 프로젝트를 완료하기 위해 HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux 및 jQuery를 혼합하여 사용할 수 있습니다. 이 섹션은 프론트엔드 프레임워크를 학습하는 것이 목적이기 때문에 (React 같은) 프론트엔드 프레임워크를 사용해야 합니다. 위에 나열된 기술만 사용하여 이 프로젝트를 완료하는 것이 권장되고 이외의 기술을 사용할 경우 문제가 있을 수 있습니다. Angular 및 Vue와 같은 다른 프론트엔드 프레임워크를 지원할 예정이지만 현재는 지원되지 않습니다. 이 프로젝트에 제안된 기술 스택을 사용하는 모든 이슈 보고서를 수용하고 문제를 해결하겠습니다. 즐거운 코딩하세요!

**유저 스토리 #1:** 해당하는 `id="editor"`를 가진 `textarea` 요소를 볼 수 있어야 합니다.

**유저 스토리 #2:** 해당하는 `id="preview"`를 가진 요소를 볼 수 있어야 합니다.

**유저 스토리 #3:** `#editor` 요소에 텍스트를 입력할 때마다, `#preview` 요소가 텍스트 내용을 표시하도록 업데이트 되어야 합니다.

**유저 스토리 #4:** GitHub 스타일의 마크다운을 `#editor` 요소에 입력할 때, 텍스트가 HTML로 렌더링되어 타이핑하는 동안 `#preview` 요소에 나타나야 합니다 (힌트: 마크다운을 직접 파싱할 필요는 없습니다. 이를 위해 Marked 라이브러리를 가져올 수 있습니다: <https://cdnjs.com/libraries/marked>).

**유저 스토리 #5:** 마크다운 미리보기가 처음 로드 될 때, `#editor` 필드의 기본 텍스트는 적어도 다음 각 요소를 나타내는 유효한 마크다운을 포함해야 합니다. 헤딩 요소 (H1 크기), 서브 헤딩 요소 (H2 크기), 링크, 인라인 코드, 코드 블록, 목록 항목, 블록퀄트, 이미지, 그리고 굵은 글씨 텍스트.

**유저 스토리 #6:** 마크다운 미리보기가 처음 로드될 때, `#editor` 필드의 기본 마크다운은 HTML로 렌더링되어야 합니다. 이 렌더링된 결과는 `#preview` 요소에 표시되어야 합니다.

**선택적 보너스 (이 테스트를 통과해야 할 필요는 없음):** 마크다운 미리보기는 개행 문자를 해석하고 이를 `br` (줄 바꿈) 요소로 렌더링합니다.

프로젝트를 구축하려면 이 <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">CodePen 템플릿을 사용</a>하고 `Save`를 클릭하여 자신의 펜을 생성할 수 있습니다. 또는 원하는 모든 환경에서 테스트를 실행하기 위해 이 CDN 링크를 사용할 수 있습니다: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

완료되면 모든 테스트가 통과되는 작동 프로젝트의 URL을 제출하십시오.

# --solutions--

```js
// solution required
```

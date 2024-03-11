---
id: 587d7dbc367417b2b2512bae
title: 드럼 머신 만들기
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--
**주의:** **이 프로젝트의 테스트에는 React 18과의 알려진 호환성 문제가 있습니다 ([문제](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922) 보기)**

**목적:** 다음과 비슷한 기능을 하는 앱을 만들기: <a href="https://drum-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://drum-machine.freecodecamp.rocks/</a>

아래의 사용자 이야기를 충족하고 모든 테스트를 통과 시키세요. 필요한 라이브러리 또는 API를 사용하세요. 자신만의 스타일을 적용하세요.

이 프로젝트를 완료하기 위해 HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux 및 jQuery를 자유롭게 섞어서 사용할 수 있습니다. 프론트엔드 프레임워크(예: React)는 꼭 사용해야 합니다. 이 섹션은 프론트엔드 프레임워크를 학습하는 것과 관련되어 있기 때문입니다. 위에 나열된 기술 이외의 추가 기술은 권장되지 않으며 사용 시 개인 책임하에 사용하세요. Angular 및 Vue와 같은 다른 프론트엔드 프레임워크를 지원하는 것을 고려 중이지만 현재는 지원되지 않습니다. 이 프로젝트에 제안된 기술 스택을 사용하는 모든 이슈 보고서를 수용하고 문제를 해결하겠습니다. 즐거운 코딩하세요!

**유저 스토리 #1:** 모든 다른 요소를 포함하는 `id="drum-machine"`을 가진 외부 컨테이너를 볼 수 있어야 합니다.

**유저 스토리 #2:** `#drum-machine` 내부에서 해당하는 `id="display"`가 있는 요소를 볼 수 있어야 합니다.

**유저 스토리 #3:** `#drum-machine` 내부에서 9개의 클릭 가능한 드럼 패드 요소를 볼 수 있어야 합니다. 각각의 요소는 `drum-pad` 클래스를 갖고 있고, 해당 오디오 클립을 작동 시키는데 필요한 고유한 id, 그리고 키보드의 다음 키들 중 하나에 해당하는 내부 텍스트를 갖고 있습니다:`Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. 드럼 패드는 이 순서대로 있어야 합니다.

**유저 스토리 #4:** 각 `.drum-pad` 내부에는 오디오 클립을 가리키는 `src` 속성이 있는 HTML5 `audio` 요소가 있어야 하며, `clip` 클래스 이름과 부모 `.drum-pad`의 내부 텍스트에 해당하는 id (예: `id="Q"`, `id="W"`, `id="E"` 등)를 가져야 합니다.

**유저 스토리 #5:** `.drum-pad` 요소를 클릭하면 해당하는 자식 `audio` 요소에 포함된 오디오 클립이 재생되어야 합니다.

**유저 스토리 #6:** 각 `.drum-pad`에 연결된 트리거 키를 누르면 해당하는 자식 `audio` 요소에 포함된 오디오 클립이 트리거되어야 합니다 (예: `Q` 키를 누르면 문자열이 `Q`인 드럼 패드가 재생되어야 하고, `W` 키를 누르면 문자열이 `W`인 드럼 패드가 재생되어야 합니다).

**유저 스토리 #7:** `.drum-pad`가 트리거될 때 `#display` 요소의 내부 텍스트로 연결된 오디오 클립을 설명하는 문자열이 표시되어야 합니다 (각 문자열은 고유해야 합니다).

다음은 드럼 머신에 사용할 수 있는 일부 오디오 샘플입니다.

- [Heater 1](https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3)
- [Heater 2](https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3)
- [Heater 3](https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3)
- [Heater 4](https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3)
- [Clap](https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3)
- [Open-HH](https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3)
- [Kick-n'-Hat](https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3)
- [Kick](https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3)
- [Closed-HH](https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3)

프로젝트를 구성하려면 <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow">이 CodePen 템플릿</a>을 사용하고 `Save`를 클릭하여 나만의 펜을 만들 수 있습니다. 또는 원하는 환경에서 테스트를 실행하기 위해 이 CDN 링크를 사용할 수 있습니다.`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

완료되면 모든 테스트가 통과되는 작동 프로젝트의 URL을 제출하십시오.

# --solutions--

```js
// solution required
```

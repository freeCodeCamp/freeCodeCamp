---
id: 587d7dbc367417b2b2512bae
title: 構建一臺鼓式機器
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--
**注意:** **已知React 18 在這個項目的測試中不兼容 (見[issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Objective:** Build an app that is functionally similar to this: <a href="https://drum-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://drum-machine.freecodecamp.rocks/</a>.

實現以下的用戶故事並且通過所有的測試用例。 使用你需要的任何庫和第三方API。 使用你自己的個人風格樣式。

你可以使用HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, 和 jQuery來完成這個項目。 你應該使用一個前端框架（比如像是React）因爲這個部分是有關於學習前端框架的。 不推薦使用以上沒有列出的其他技術，不然風險自擔。 我們正着手支持其他前端框架像是Angular和Vue，但是現在還不支持他們。 我們將會接受並且努力修復所有使用推薦的技術棧在這個項目中出現的問題。 編程愉快！

**User Story #1:** I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.

**用戶需求 #2:** 在 `#drum-machine` 內，我能看到一個 `id="display"`的元素

**User Story #3:** Within `#drum-machine` I can see 9 clickable drum pad elements, each with a class name of `drum-pad`, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. The drum pads MUST be in this order.

**User Story #4:** Within each `.drum-pad`, there should be an HTML5 `audio` element which has a `src` attribute pointing to an audio clip, a class name of `clip`, and an id corresponding to the inner text of its parent `.drum-pad` (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).

**User Story #5:** When I click on a `.drum-pad` element, the audio clip contained in its child `audio` element should be triggered.

**User Story #6:** When I press the trigger key associated with each `.drum-pad`, the audio clip contained in its child `audio` element should be triggered (e.g. pressing the `Q` key should trigger the drum pad which contains the string `Q`, pressing the `W` key should trigger the drum pad which contains the string `W`, etc.).

**User Story #7:** When a `.drum-pad` is triggered, a string describing the associated audio clip is displayed as the inner text of the `#display` element (each string must be unique).

Here are some audio samples you can use for your drum machine:

- [Heater 1](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3)
- [Heater 2](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3)
- [Heater 3](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3)
- [Heater 4](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3)
- [Clap](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3)
- [Open-HH](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3)
- [Kick-n'-Hat](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3)
- [Kick](https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3)
- [Closed-HH](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3)

You can build your project by <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow">using this CodePen template</a> and clicking `Save` to create your own pen. Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

完成項目並通過所有測試後，請輸入你的項目在 CodePen 上的鏈接並提交。

# --solutions--

```js
// solution required
```

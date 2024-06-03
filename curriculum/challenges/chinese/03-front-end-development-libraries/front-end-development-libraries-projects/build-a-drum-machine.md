---
id: 587d7dbc367417b2b2512bae
title: 构建一台鼓式机器
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--
**注意:** **已知React 18 在这个项目的测试中不兼容 (见[issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Objective:** Build an app that is functionally similar to this: <a href="https://drum-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://drum-machine.freecodecamp.rocks/</a>.

实现以下的用户故事并且通过所有的测试用例。 使用你需要的任何库和第三方API。 使用你自己的个人风格样式。

你可以使用HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, 和 jQuery来完成这个项目。 你应该使用一个前端框架（比如像是React）因为这个部分是有关于学习前端框架的。 不推荐使用以上没有列出的其他技术，不然风险自担。 我们正着手支持其他前端框架像是Angular和Vue，但是现在还不支持他们。 我们将会接受并且努力修复所有使用推荐的技术栈在这个项目中出现的问题。 编程愉快！

**User Story #1:** I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.

**用户需求 #2:** 在 `#drum-machine` 内，我能看到一个 `id="display"`的元素

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

完成项目并通过所有测试后，请输入你的项目在 CodePen 上的链接并提交。

# --solutions--

```js
// solution required
```

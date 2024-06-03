---
id: 587d7dbc367417b2b2512bae
title: Baue eine Schlagzeugmaschine
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--
**Note:** **React 18 has known incompatibilities with the tests for this project (see [issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Objective:** Build an app that is functionally similar to this: <a href="https://drum-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://drum-machine.freecodecamp.rocks/</a>.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Gib dem Ganzen deinen persönlichen Stil.

Du kannst eine beliebige Mischung aus HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux und jQuery verwenden, um dieses Projekt fertigzustellen. Du solltest ein Frontend-Framework (wie zum Beispiel React) verwenden, da es in diesem Abschnitt um das Lernen von Frontend-Frameworks geht. Zusätzliche Technologien, die oben nicht aufgeführt sind, werden nicht empfohlen und ihre Verwendung erfolgt auf eigene Gefahr. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. Wir sind offen für Fehlermeldungen und kümmern uns um all jene, die die vorgeschlagenen Technologien für dieses Projekt verwenden. Viel Spaß beim Programmieren!

**User Story #1:** Ich sollte einen äußeren Container mit einer zugehörigen `id="drum-machine"` sehen, der alle anderen Elemente enthält.

**User Story #2:** Within `#drum-machine` I can see an element with a corresponding `id="display"`.

**User Story #3:** Within `#drum-machine` I can see 9 clickable drum pad elements, each with a class name of `drum-pad`, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. Die Drum Pads MÜSSEN in dieser Reihenfolge angeordnet sein.

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
- [Offene Hi-Hat](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3)
- [Kick-n'-Hat](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3)
- [Kick](https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3)
- [Geschlossene Hi-Hat](https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3)

You can build your project by <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow">using this CodePen template</a> and clicking `Save` to create your own pen. Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Once you're done, submit the URL to your working project with all its tests passing.

# --solutions--

```js
// solution required
```

---
id: 587d7dbc367417b2b2512bae
title: Baue eine Schlagzeugmaschine
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--

**Aufgabe:** Erstelle eine Anwendung, die eine ähnliche Funktionalität wie <a href="https://drum-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://drum-machine.freecodecamp.rocks/</a> aufweist.

Erfülle die folgenden User Stories und bestehe alle Tests. Verwende Bibliotheken und APIs deiner Wahl. Gib dem Ganzen deinen persönlichen Stil.

Du kannst eine beliebige Mischung aus HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux und jQuery verwenden, um dieses Projekt fertigzustellen. Du solltest ein Frontend-Framework (wie zum Beispiel React) verwenden, da es in diesem Abschnitt um das Lernen von Frontend-Frameworks geht. Zusätzliche Technologien, die oben nicht aufgeführt sind, werden nicht empfohlen und ihre Verwendung erfolgt auf eigene Gefahr. Wir prüfen die Unterstützung anderer Frontend-Frameworks wie Angular und Vue, aber sie werden derzeit nicht unterstützt. Wir sind offen für Fehlermeldungen und kümmern uns um all jene, die die vorgeschlagenen Technologien für dieses Projekt verwenden. Viel Spaß beim Programmieren!

**User Story #1:** Ich sollte einen äußeren Container mit einer zugehörigen `id="drum-machine"` sehen, der alle anderen Elemente enthält.

**User Story #2:** Innerhalb `#drum-machine` kann ich ein Element mit der entsprechenden `id="display"` sehen.

**User Story #3:** Innerhalb von `#drum-machine` sehe ich 9 klickbare Drum-Pad-Elemente, jedes mit einem Klassennamen `drum-pad`, einer eindeutigen ID, die den Audioclip beschreibt, den das Drum-Pad auslösen soll, und einem inneren Text, der einer der folgenden Tasten auf der Tastatur entspricht: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. Die Drum Pads MÜSSEN in dieser Reihenfolge angeordnet sein.

**User Story #4:** Innerhalb von jedem `.drum-pad`, sollte es ein HTML5 `audio`-Element geben, das ein `src`-Attribute hat, das auf einen Audio Clip hinweist, mit dem Klassenname `clip`, und einer ID, die dem inneren Text seines übergeordneten Elements `.drum-pad` entspricht (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).

**User Story#5:** Wenn ich auf ein `.drum-pad`-Element klicke, sollte der Audioclip, der in seinem untergeordneten `audio`-Element enthalten ist, ausgelöst werden.

**User Story #6:** Wenn ich die Trigger-Taste drücke, die mit jedem `.drum-pad` verbunden ist, sollte der Audio-Clip, der in seinem untergeordneten `audio`-Element enthalten ist, ausgelöst werden (z.B. sollte das Drücken der `Q`-Taste das Drum-Pad auslösen, das den String `Q` enthält, das Drücken der `W`-Taste sollte das Drum-Pad auslösen, das den String `W` enthält, usw.).

**User Story #7:** Wenn ein `.drum-pad` ausgelöst wird, wird ein String, der den zugehörigen Audioclip beschreibt, als innerer Text des `#display`-Elements angezeigt (jede Zeichenfolge muss eindeutig sein).

Hier sind einige Beispiele, die du für deine Schlagzeug-Maschine verwenden kannst:

- [Heater 1](https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3)
- [Heater 2](https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3)
- [Heater 3](https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3)
- [Heater 4](https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3)
- [Clap](https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3)
- [Offene Hi-Hat](https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3)
- [Kick-n'-Hat](https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3)
- [Kick](https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3)
- [Geschlossene Hi-Hat](https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3)

Du kannst dein Projekt erstellen, indem du diese CodePen-Vorlage <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow"></a> verwendest und auf `Save` klickst, um deinen eigenen Pen zu erstellen. Oder du kannst diesen CDN-Link verwenden, um die Tests in jeder beliebigen Umgebung auszuführen: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Once you're done, submit the URL to your working project with all its tests passing.

# --solutions--

```js
// solution required
```

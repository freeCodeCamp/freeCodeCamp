---
id: bd7158d8c442eddfaeb5bd0f
title: Erstelle eine „25 + 5“-Uhr
challengeType: 3
forumTopicId: 301373
dashedName: build-a-25--5-clock
---

# --description--

**Aufgabe:** Erstelle eine Anwendung, die eine ähnliche Funktionalität wie <a href="https://25--5-clock.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://25--5-clock.freecodecamp.rocks</a> aufweist.

Erfülle die folgenden User Stories und bestehe alle Tests. Verwende Bibliotheken und APIs deiner Wahl. Gib dem Ganzen deinen persönlichen Stil.

Du kannst jede Mischung aus HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux und jQuery verwenden, um dieses Projekt abzuschließen. Du solltest ein Frontend-Framework (wie zum Beispiel React) verwenden, da es in diesem Abschnitt um das Lernen von Frontend Frameworks geht. Zusätzliche Technologien, die oben nicht aufgeführt sind, werden nicht empfohlen und die Verwendung erfolgt auf eigene Gefahr. Wir prüfen die Unterstützung anderer Frontend-Frameworks wie Angular und Vue, aber sie werden derzeit nicht unterstützt. Wir sind offen für Fehlermeldungen und kümmern uns um all jene, die die vorgeschlagenen Technologien für dieses Projekt verwenden. Viel Spaß beim Programmieren!

**User Story #1:** Ich kann ein Element mit `id="break-label"` sehen, das einen String enthält (z. B. "Pausenlänge").

**User Story #2:** Ich kann ein Element mit `id="session-label"` sehen, das einen String enthält (z. B. "Sitzungslänge").

**User Story #3:** Ich kann zwei anklickbare Elemente mit entsprechenden IDs sehen: `id="break-decrement"` und `id="session-decrement"`.

**User Story #4:** Ich sehe zwei anklickbare Elemente mit entsprechenden IDs: `id="break-increment"` und `id="session-increment"`.

**User Story #5:** Ich kann ein Element mit einer entsprechenden `id="break-length"` sehen, das standardmäßig (beim Laden) einen Wert von 5 anzeigt.

**User Story #6:** Ich kann ein Element mit einer entsprechenden `id="session-length"` sehen, das standardmäßig einen Wert von 25 anzeigt.

**User Story #7:** Ich kann ein Element mit einem entsprechenden `id="timer-label"` sehen, das einen String enthält, der anzeigt, dass eine Sitzung begonnen wurde (z. B. "Sitzung").

**User Story #8:** Ich kann ein Element mit dem entsprechenden `id="time-left"` sehen. HINWEIS: Ob angehalten oder ausgeführt, der Wert in diesem Feld sollte immer im Format `mm:ss` angezeigt werden (z. B. 25:00).

**User Story #9:** Ich kann ein anklickbares Element mit einem entsprechenden `id="start_stop"` sehen.

**User Story Nr. 10:** Ich sehe ein anklickbares Element mit einem entsprechenden `id="reset"`.

**User Story #11:** Wenn ich auf das Element mit der ID `reset` klicke, sollte jeder laufende Timer gestoppt werden, der Wert innerhalb von ` id="break-length"` sollte auf `5` zurück gestellt werden, der Wert in `id="session-length"` sollte auf 25 zurück gestellt werden und das Element mit < code>id="time-left"</code> sollte auf den Standardwert zurückgesetzt werden.

**User Story #12:** Wenn ich auf das Element mit der ID `break-decrement` klicke, wird der Wert innerhalb von `id="break- length"` um einen Wert von 1 verringert und ich kann den aktualisierten Wert sehen.

**User Story #13:** Wenn ich auf das Element mit der ID `break-increment` klicke, wird der Wert innerhalb von `id="break- length"` um den Wert 1 erhöht, und ich kann den aktualisierten Wert sehen.

**User Story #14:** Wenn ich auf das Element mit der ID von `session-decrement` klicke, wird der Wert in `id="session- length"` um einen Wert von 1 verringert, und ich kann den aktualisierten Wert sehen.

**User Story #15:** Wenn ich auf das Element mit der ID von `session-increment` klicke, wird der Wert in `id="session- length"` um den Wert 1 erhöht, und ich kann den aktualisierten Wert sehen.

**User Story #16:** Ich sollte nicht in der Lage sein, eine Sitzungs- oder Pausenlänge auf &lt;= 0 zu setzen.

**User Story #17:** Ich sollte nicht in der Lage sein, eine Sitzungs- oder Pausenlänge auf > 60 zu setzen.

**User Story #18:** Wenn ich zum ersten Mal auf das Element mit `id="start_stop"` klicke, sollte der Timer mit dem aktuell angezeigten Wert beginnen `id="session-length"`, auch wenn der Wert vom ursprünglichen Wert 25 erhöht oder verringert wurde.

**User Story #19:** Wenn der Timer läuft, sollte das Element mit der ID `time-left` die verbleibende Zeit im `mm:ss`-Format anzeigen ( Verminderung um einen Wert von 1 und Aktualisierung der Anzeige alle 1000ms).

**User Story #20:** Wenn der Timer läuft und ich auf das Element mit `id="start_stop"` klicke, sollte der Countdown pausieren.

**User Story #21:** Wenn der Timer pausiert ist und ich auf das Element mit `id="start_stop"` klicke, sollte der Countdown ab dem Punkt weiterlaufen, an dem es pausiert wurde.

**User Story #22:** Wenn ein Sitzungs-Countdown Null erreicht (HINWEIS: Der Timer MUSS 00:00 erreichen) und ein neuer Countdown beginnt, sollte das Element mit der ID `timer-label` einen String anzeigen, der angibt, dass eine Pause begonnen hat.

**User Story #23:** Wenn ein Sitzungs-Countdown Null erreicht (HINWEIS: Der Timer MUSS 00:00 erreichen), sollte ein neuer Pausen-Countdown beginnen, der von dem `id="break-length"`-Element angezeigten Wert herunterzählt.

**User Story #24:** Wenn ein Pausen-Countdown Null erreicht (HINWEIS: Der Timer MUSS 00:00 erreichen) und ein neuer Countdown beginnt, sollte das Element mit der ID `timer-label` einen String anzeigen, der anzeigt, dass eine Sitzung begonnen hat.

**User Story #25:** Wenn ein Pausen-Countdown Null erreicht (HINWEIS: Der Timer MUSS 00:00 erreichen), sollte ein neuer Sitzungs-Countdown beginnen, der von dem aktuell angezeigten Wert im `id="session-length"`-Element herunterzählt.

**User Story #26:** Wenn ein Countdown Null erreicht (HINWEIS: Der Timer MUSS 00:00 erreichen), sollte ein Ton abgespielt werden, dass die Zeit abgelaufen ist. Dieser sollte ein HTML5-`audio`-Tag verwenden und einen entsprechenden `id="beep"` haben.

**User Story #27:** Das Audioelement mit `id="beep"` sollte 1 Sekunde oder länger sein.

**User Story #28:** Das Audioelement mit der ID `beep` sollte aufhören zu ertönen und zum Anfang zurückgespult werden, wenn das Element mit der ID `reset` angeklickt wird.

Du kannst dein Projekt erstellen, indem du diese CodePen Vorlage verwendest <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow"> </a> und `Save` klickst, um deinen eigenen Pen zu erstellen. Oder du kannst diesen CDN-Link verwenden, um die Tests in jeder beliebigen Umgebung auszuführen: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Sobald du fertig bist, übermittle die URL zu deinem Arbeitsprojekt, wenn alle Tests bestanden sind.

# --solutions--

```js
// solution required
```

---
id: 587d7fa6367417b2b2512bc0
title: Visualisiere Daten mit einer Tree Map (Kacheldiagramm)
challengeType: 3
forumTopicId: 301468
dashedName: visualize-data-with-a-treemap-diagram
---

# --description--

**Aufgabe:** Erstelle eine Anwendung, die eine ähnliche Funktionalität wie <a href="https://treemap-diagram.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://treemap-diagram.freecodecamp.rocks</a> aufweist.

Erfülle die folgenden User Stories und bestehe alle Tests. Verwende Bibliotheken und APIs deiner Wahl. Gib dem Ganzen deinen persönlichen Stil.

Du kannst HTML, JavaScript, CSS und die D3-svg-basierte Visualisierungsbibliothek verwenden. Die Tests erfordern, dass Achsen mit der Eigenschaft der D3-Achse erzeugt werden, welche automatisch Markierungen entlang der Achse bildet. Diese Markierungen sind notwendig für die D3-Tests, da ihre Positionen zur Bestimmung der Ausrichtung von Graphen verwendet werden. Informationen zum Generieren von Achsen findest du hier <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Required DOM elements are queried on the moment of each test. Wenn du ein Frontend-Framework (wie z. B. Vue) verwendest, können die Testergebnisse für dynamische Inhalte ungenau sein. Wir hoffen, dass wir sie irgendwann unterbringen können, aber diese Frameworks werden derzeit nicht für D3-Projekte unterstützt.

**User Story #1:** Meine Tree Map sollte eine Bezeichnung mit der entsprechenden `id="title"` haben.

**User Story #2:** Meine Tree Map sollte eine Beschreibung mit der entsprechenden `id="description"` haben.

**User Story #3:** Meine Tree Map sollte `rect`-Elemente mit einer entsprechenden `class="tile"` haben, die die Daten darstellen.

**User Story #4:** Es sollten mindestens 2 verschiedene Füllfarben für die Kacheln verwendet werden.

**User Story #5:** Jede Kachel sollte die Eigenschaften `data-name`, `data-category`, und `data-value` haben, die die entsprechenden `name`, `category`, und `value` enthalten.

**User Story #6:** Die Fläche der einzelnen Kacheln sollte dem `data-value` entsprechen: Kacheln mit einem größeren `data-value` sollten einen größeren Bereich haben.

**User Story #7:** Meine Tree Map sollte eine Legende mit der entsprechenden `id="legend"` haben.

**User Story #8:** Meine Legende sollte `rect`-Elemente haben mit einem entsprechenden `class="legend-item"`.

**User Story #9:** Die `rect`-Elemente in der Legende sollten mindestens 2 verschiedene Füllfarben verwenden.

**User Story #10:** Wenn ich mit der Maus über einen Bereich fahre, wird ein Tooltip mit einem entsprechenden `id="tooltip"` angezeigt, der weitere Informationen über den Bereich enthält.

**User Story #11:** Mein Tooltip sollte eine `data-value`-Eigenschaft haben, die der `data-value` des aktiven Bereichs entspricht.

Für dieses Projekt kannst du einen der folgenden Datensätze verwenden:

-   **Kickstarter-Zusagen:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json`
-   **Filmverkäufe:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`
-   **Videospiel-Verkäufe:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json`

Du kannst dein Projekt erstellen, indem du <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow"> diese CodePen-Vorlage</a> verwendest und auf `Save` klickst, um deinen eigenen Pen zu erstellen. Oder du kannst diesen CDN-Link verwenden, um die Tests in jeder beliebigen Umgebung auszuführen: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Sobald du fertig bist, übermittle die URL zu deinem Arbeitsprojekt, wenn alle Tests bestanden sind.

# --solutions--

```js
// solution required
```

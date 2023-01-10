---
id: bd7168d8c242eddfaeb5bd13
title: Datenvisualisierung mit einem Balkendiagramm
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--

**Aufgabe:** Erstelle eine Anwendung, die eine ähnliche Funktionalität wie <a href="https://bar-chart.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://bar-chart.freecodecamp.rocks</a> aufweist.

Erfülle die folgenden User Stories und bestehe alle Tests. Verwende Bibliotheken und APIs deiner Wahl. Gib dem Ganzen deinen persönlichen Stil.

Du kannst HTML, Javascript, CSS und die D3-SVG-basierte Visualisierungs-Bibliothek verwenden. Zur Erfüllung der Testfälle müssen die Achsen mit der D3-Achseneigenschaft erzeugt werden, welche automatisch Achsenmarkierungen entlang der Achse erstellt. Diese Achsenmarkierungen sind notwendig, um die D3-Tests zu erfüllen, da diese zur Bestimmung der Ausrichtung von grafischen Elementen verwendet werden. Weiter Informationen über die Achsenerstellung findest du hier: <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Erforderliche (nicht-virtuelle) DOM-Elemente werden bei jedem Test abgefragt. Falls du ein Frontend-Framework (wie z.B. Vue) verwendest, kann es passieren, dass die Testergebnisse für dynamische Inhalte ungenau sind. Wir hoffen, dass wir diese irgendwann berücksichtigen können, aber derzeit werden diese Frameworks nicht für D3-Projekte unterstützt.

**User Story #1:** Mein Diagramm sollte einen Titel mit einer passenden `id="title"` haben.

**User Story #2:** Mein Diagramm sollte eine `g`-Element X-Achse mit einer passenden `id="x-axis"` haben.

**User Story #2:** Mein Diagramm sollte eine `g`-Element Y-Achse mit einer passenden `id="y-axis"` haben.

**User Story #4:** Beide Achsen sollten mehrere Markierungen enthalten, jede mit einer entsprechenden `class="tick"`.

**User Story #5:** Mein Diagramm sollte ein `rect` Element für jeden Datenpunkt mit einer entsprechenden `class="bar"` haben, welche die Daten anzeigt.

**User Story #6:** Jeder Balken sollte die Eigenschaften `data-date` und `data-gdp` haben, welche die Werte `date` und `GDP` beinhalten.

**User Story #7:** Die Eigenschaft `data-date` der Balkenelemente sollte mit der Reihenfolge der angegebenen Daten übereinstimmen.

**User Story #8:** Die Eigenschaft `data-gdp` des Balkendiagramms sollte mit den angegebenen Daten übereinstimmen.

**User Story #9:** Die Höhe jedes Balkenelements sollte das zugehörige `GDP` exakt darstellen.

**User Story #10:** Das `data-date`-Attribut und sein zugehöriges Balkenelement sollten sich mit dem entsprechenden Wert auf der x-Achse ausrichten.

**User Story #11:** Das `data-gdp`-Attribut und sein zugehöriges Balkenelement sollten sich mit dem entsprechenden Wert auf der y-Achse ausrichten.

**User Story #12:** Ich kann mit meiner Maus über einen Bereich fahren und einen Tooltip mit einem entsprechenden `id="tooltip"` sehen, das mir mehr Informationen über den Bereich anzeigt.

**User Story #13:** Mein Tooltip sollte eine `data-date` Eigenschaft haben, die dem `data-date` des aktiven Bereichs entspricht.

Hier ist der Datensatz, den du benötigst, um dieses Projekt abzuschließen: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

Du kannst dein Projekt erstellen, indem du <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">diese CodePen-Vorlage</a> verwendest und auf `Save` klickst, um deinen eigenen Pen zu erstellen. Oder du kannst diesen CDN-Link verwenden, um die Tests in jeder beliebigen Umgebung auszuführen: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

Sobald du fertig bist, übermittle die URL an dein Arbeitsprojekt, wenn alle Tests bestanden sind.

# --solutions--

```js
// solution required
```

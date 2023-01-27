---
id: bd7158d8c442eddfaeb5bd17
title: Erstelle einen JavaScript-Rechner
challengeType: 3
forumTopicId: 301371
dashedName: build-a-javascript-calculator
---

# --description--

**Aufgabe:** Erstelle eine Anwendung, die eine ähnliche Funktionalität wie <a href="https://javascript-calculator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://javascript-calculator.freecodecamp.rocks/</a> aufweist.

Erfülle die folgenden User Stories und bestehe alle Tests. Verwende Bibliotheken und APIs deiner Wahl. Gib dem Ganzen deinen persönlichen Stil.

Du kannst jede Mischung aus HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux und jQuery verwenden, um dieses Projekt abzuschließen. Du solltest ein Frontend-Framework (wie zum Beispiel React) verwenden, da es in diesem Abschnitt um das Lernen von Frontend Frameworks geht. Zusätzliche Technologien, die oben nicht aufgeführt sind, werden nicht empfohlen und die Verwendung erfolgt auf eigene Gefahr. Wir prüfen die Unterstützung anderer Frontend-Frameworks wie Angular und Vue, aber sie werden derzeit nicht unterstützt. Wir sind offen für Fehlermeldungen und kümmern uns um all jene, die die vorgeschlagenen Technologien für dieses Projekt verwenden. Viel Spaß beim Programmieren!

**User Story #1:** Mein Rechner sollte ein anklickbares Element enthalten, das ein `=` (Gleichheitszeichen) mit einem entsprechenden `id="equals"` enthält.

**User Story #2:** Mein Rechner sollte 10 anklickbare Elemente enthalten, die jeweils eine Zahl von 0-9 enthalten, mit den folgenden IDs: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, und `id="nine"`.

**User Story #3:** Mein Rechner sollte 4 anklickbare Elemente enthalten, die jeweils einen der 4 primären mathematischen Operatoren mit den folgenden IDs enthalten: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.

**User Story #4:** Mein Rechner sollte ein anklickbares Element enthalten, das ein `.` (Dezimalpunkt) Symbol mit einem entsprechenden `id="decimal"` enthält.

**User Story #5:** Mein Rechner sollte ein anklickbares Element mit einer `id="clear"` enthalten.

**User Story #6:** Mein Rechner sollte ein Element zur Anzeige von Werten mit einer entsprechenden `id="display"` enthalten.

**User Story #7:** Durch Drücken des `clear`-Buttons können jederzeit die Eingabe- und Ausgabewerte gelöscht werden und der Rechner wird in den Ausgangszustand zurückgesetzt; im Element mit der ID `display` sollte 0 angezeigt werden.

**User Story #8:** Wenn ich Zahlen eingebe, sollte ich in der Lage sein, meine Eingabe in dem Element mit der ID `display` zu sehen.

**User Story #9:** Ich sollte in der Lage sein, eine Zahlenkette beliebiger Länge in beliebiger Reihenfolge zu addieren, subtrahieren, multiplizieren und dividieren, und wenn ich auf `=` klicke, sollte das korrekte Ergebnis in dem Element mit der ID `display` angezeigt werden.

**User Story #10:** Bei der Eingabe von Zahlen sollte mein Rechner nicht zulassen, dass eine Zahl mit mehreren Nullen beginnt.

**User Story #11:** Wenn das Dezimalelement angeklickt wird, sollte ein `.` an den aktuell angezeigten Wert angehängt werden; zwei `.` in einer Zahl sollten nicht akzeptiert werden.

**User Story #12:** Ich sollte in der Lage sein, jede beliebige Operation (`+`, `-`, `*`, `/`) mit Zahlen durchzuführen, die Dezimalstellen enthalten.

**User Story #13:** Wenn 2 oder mehr Operatoren nacheinander eingegeben werden, wird die Operation mit dem zuletzt eingegebenen Operator ausgeführt (das Negative ausgeschlossen (`-`) Zeichen). Wird zum Beispiel `5 + * 7 =` eingegeben, sollte das Ergebnis `35` (i.e. `5 * 7`) sein; wird `5 * - 5 =` eingegeben, sollte das Ergebnis `-25` sein (i.e. <`5 * (-5)`).

**User Story #14:** Wenn du einen Operator unmittelbar nach `=` drückst, wird eine neue Berechnung gestartet, die auf dem Ergebnis der vorherigen Auswertung basiert.

**User Story #15:** Mein Rechner sollte mehrere Dezimalstellen genau sein, wenn es ums Runden geht (Beachte, dass es keinen exakten Standard gibt, aber du solltest in der Lage sein, Berechnungen wie `2 / 7` mit angemessener Genauigkeit auf mindestens 4 Dezimalstellen durchzuführen).

**Anmerkung zur Logik des Rechners:** Es ist anzumerken, dass es zwei wesentliche Denkansätze zur Logik der Rechnereingabe gibt: <dfn>immediate execution logic</dfn> und <dfn>formula logic</dfn>. Unser Beispiel verwendet Formellogik und beachtet die Rangfolge der Operationen, die unmittelbare Ausführung jedoch nicht. Beides ist möglich, aber beachte bitte, dass dein Rechner je nach Wahl für bestimmte Gleichungen andere Ergebnisse liefern kann als unser Rechner (siehe Beispiel unten). Solange deine Berechnungen mit einem anderen Produktionsrechner überprüft werden können, betrachte dies bitte nicht als Fehler.

**BEISPIEL:** `3 + 5 x 6 - 2 / 4 =`

-   **Unmittelbare Ausführungslogik:** `11.5`
-   **Formel-/Ausdrucklogik:** `32.5`

Du kannst dein Projekt aufbauen, indem du <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">diese CodePen-Vorlage</a> verwendest und auf `Save` klickst, um deinen eigenen Pen zu erstellen. Oder du kannst diesen CDN-Link verwenden, um die Tests in jeder beliebigen Umgebung auszuführen: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Sobald du fertig bist, übermittle die URL zu deinem Arbeitsprojekt, wenn alle Tests bestanden sind.

# --solutions--

```js
// solution required
```

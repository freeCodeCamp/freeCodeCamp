# Wie man an Programmieraufgaben arbeitet

Unser Ziel ist es, ein unterhaltsames und voll interaktives Lernerlebnis zu entwickeln.

Sich interaktive Programmieraufgaben auszudenken ist schwierig. Es wäre viel einfacher, eine ausführliche Erklärung zu schreiben oder ein Video-Tutorial zu erstellen. Aber für unseren Hauptstudienplan bleiben wir bei dem, was für die meisten Menschen am besten funktioniert - ein vollständig interaktives, videospielähnliches Erlebnis.

Wir wollen, dass die Teilnehmer einen Flow-Zustand erreichen. Wir wollen, dass sie in Schwung kommen und so schnell wie möglich Fortschritte in unserem Studienplan machen. Wir wollen, dass sie mit Selbstvertrauen in die Projekte gehen und einen umfassenden Einblick in Programmierkonzepte bekommen.

Beachte, dass wir für Version 7.0 des freeCodeCamp-Studienplan zu einem [vollständig projektorientierten Modell mit viel mehr Wiederholungen](https://www.freecodecamp.org/news/python-curriculum-is-live/) übergehen.

Um diese Aufgaben zu lösen, braucht es viel Kreativität und Liebe zum Detail. Es gibt viele Möglichkeiten, dir zu helfen. Du bekommst Unterstützung von einem ganzen Team von Mitwirkenden, an die du deine Ideen weitergeben und deine Aufgaben demonstrieren kannst.

Und wie immer kannst du deine Fragen in der [Kategorie "Contributors" in unserem Forum](https://forum.freecodecamp.org/c/contributors) oder im ["Contributors"-Chatraum](https://discord.gg/PRyKn3Vbay) stellen.

Mit deiner Hilfe können wir einen interaktiven Studienplan entwickeln, der Millionen von Menschen dabei helfen wird, in den nächsten Jahren das Programmieren zu lernen.

Der Inhalt jeder Aufgabe wird in einer eigenen Markdown-Datei gespeichert. Diese Markdown-Datei wird später mit unseren Tools in HTML umgewandelt, um interaktive Webseiten zu erstellen.

Du kannst alle Studienplaninhalte von freeCodeCamp.org im [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges) Verzeichnis finden.

## Richte die Hilfsmittel für den Studienplan ein

Bevor du an dem Studienplan arbeitest, musst du einige Hilfsmittel einrichten, mit denen du deine Änderungen testen kannst. Du kannst jede der unten aufgeführten Optionen verwenden:

- Du kannst [das freeCodeCamp lokal einrichten](how-to-setup-freecodecamp-locally.md). Das ist **sehr empfehlenswert** für regelmäßige/wiederholte Beiträge. Mit diesem Setup kannst du arbeiten und deine Änderungen testen.
- Verwende Gitpod, eine kostenlose Online-Entwicklungsumgebung. Wenn du auf den Button unten klickst, wird eine programmierfertige Entwicklungsumgebung für das freeCodeCamp in deinem Browser gestartet. Es dauert nur wenige Minuten.

  [![In Gitpod öffnen](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Bearbeite die Dateien in der Benutzeroberfläche von GitHub, indem du auf das Bleistiftsymbol für die entsprechende Datei klickst. Das ist zwar der schnellste Weg, wird aber **nicht empfohlen**, weil du deine Änderungen nicht auf GitHub testen kannst. Wenn unsere Maintainer zu dem Schluss kommen, dass die von dir vorgenommenen Änderungen lokal getestet werden müssen, musst du stattdessen die oben genannten Methoden anwenden.

### Wie man an Praxisprojekten arbeitet

Die Praxisprojekte haben einige zusätzliche Werkzeuge, die dir helfen, neue Projekte und Schritte zu erstellen. Näheres dazu findest du in [diesen Dokumenten](how-to-work-on-practice-projects.md).

## Aufgabenvorlage

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: 'Challenge Title'
challengeType: Integer, defined in `client/utils/challenge-types.js`
videoUrl: 'url of video explanation'
forumTopicId: 12345
---

# --description--

Challenge description text, in markdown

```html
<div>example code</div>
````

# --instructions--

Anweisungstext für die Aufgabe, in Markdown

# --hints--

Tests, die gegen Benutzercode laufen, in Paaren von Markdown-Text und Codeblock-Testcode.

```js
Code für den ersten Test
```

Wenn eine dynamische Ausgabe basierend auf dem Code des Benutzers erforderlich ist, werden --fcc-expected-- und --fcc-actual-- durch die erwarteten und tatsächlichen Werte der Testaussagen ersetzt. Sei vorsichtig, wenn du mehrere Aussagen hast, da die erste Aussage, bei der ein Fehler auftritt, die Werte von --fcc-expected-- und --fcc-actual-- bestimmt.

```js
assert.equal(
  'this will replace --fcc-actual--',
  'this will replace --fcc-expected--'
);
```

# --notes--

Zusätzliche Informationen für eine Aufgabe, in Markdown

# --seed--

## --before-user-code--

```lang
Der Code wird vor dem Code des Nutzers ausgewertet.
```

## --after-user-code--

```lang
Code, der nach dem Code des Nutzers und kurz vor den Tests ausgewertet wird
```

## --seed-contents--

Boilerplate-Code, der im Editor angezeigt wird. Dieser Abschnitt sollte nur Code innerhalb von Backticks enthalten, wie den folgenden:

```html
<body>
  <p class="main-text">Hello world!</p>
</body>
```

```css
body {
  margin: 0;
  background-color: #3a3240;
}

.main-text {
  color: #aea8d3;
}
```

```js
console.log('freeCodeCamp is awesome!');
```

# --solutions--

Lösungen werden für die CI-Tests verwendet, um sicherzustellen, dass Änderungen an den Hinweisen (hints) weiterhin wie vorgesehen funktionieren

```js
// erste Lösung - die Sprache(n) sollte(n) mit dem Startwert übereinstimmen.
```

---

```js
// zweite Lösung - also wenn der Startwert in HTML geschrieben ist...
```

---

```js
// dritte Lösung usw. - Ihre Lösungen sollten in HTML geschrieben sein.
```

# --question--

Diese Felder werden derzeit für die Multiple-Choice-Aufgaben in Python verwendet.

## --text--

Der Text der Frage steht hier.

## --answers--

Antwort 1

---

Antwort 2

---

Weitere Antworten

## --video-solution--

Die Nummer für die richtige Antwort steht hier.
````

> [!NOTE]
>
> 1. In den obigen Abschnitten sind Beispiele für `lang`:
>
> - `html` - HTML/CSS
> - `js` - JavaScript
> - `jsx` - JSX

## Nummerierung der Aufgabe

Jede Aufgabe benötigt eine `id`. Wenn du keine angibst, erstellt MongoDB eine neue, zufällige ID, wenn es die Daten speichert. Das wollen wir aber nicht, denn wir wollen, dass die Aufgaben-IDs in verschiedenen Umgebungen (Staging, Produktion, viele verschiedene Entwickler usw.) konsistent sind.

Um eine neue in einer Shell zu erstellen (vorausgesetzt, MongoDB wird separat ausgeführt):

1. Führe den Befehl 'mongo' aus.
2. Führe den Befehl `ObjectId()` aus.

Zum Beispiel:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Das Ergebnis ist eine neue ID, zum Beispiel `5a474d78df58bafeb3535d34` oben.

Sobald du deine ID hast, fügst du sie in die Markdown-Datei als `id`-Feld am Anfang ein, z. B.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Aufgabentitel
```

## Aufgaben benennen

Dinge zu benennen ist schwer. Wir haben es einfacher gemacht, indem wir ein paar Einschränkungen festgelegt haben.

Alle Aufgabentitel sollten eindeutig sein und diesem Muster folgen:

\[Verb\]\[Objektsatz\]

Hier sind einige Beispielnamen für Aufgaben:

- Verwende die Uhrzeiger-Notation, um das Padding eines Elements festzulegen
- Arrays mit .reduce komprimieren
- Verwende die Klammer-Notation, um das erste Zeichen in einem String zu finden

## Aufgabenbeschreibungen/ Instruktionen

Die Sätze sollten klar und präzise sein und möglichst wenig Fachjargon enthalten. Wenn Fachjargon verwendet wird, sollte er sofort in einfachem Englisch erklärt werden.

Halte die Absätze kurz (etwa 1-4 Sätze). Es ist wahrscheinlicher, dass die Leute mehrere kurze Absätze lesen als eine Wand aus Text.

Der Aufforderungstext sollte in der zweiten Person ("du") verfasst sein, um ihm einen unterhaltenden Ton zu verleihen. Auf diese Weise scheinen der Text und die Instruktionen direkt zu dem/der Teilnehmer/in zu sprechen, der/die die Aufgabe bearbeitet. Versuche, die Verwendung der ersten Person zu vermeiden ("ich", "wir", "lass uns" und "uns").

Verwende keine ausgehenden Links. Sie unterbrechen den Fluss. Die Teilnehmer/innen sollten bei diesen Aufgaben nie etwas googeln müssen. Wenn du Ressourcen hast, von denen du denkst, dass sie für die Teilnehmer/innen nützlich sind, füge sie zu dem Artikel im Leitfaden für Aufgaben hinzu.

Du kannst bei Bedarf Grafiken hinzufügen.

Verwende keine Emojis oder Emoticons in Aufgaben. freeCodeCamp hat eine globale Community und die kulturelle Bedeutung eines Emojis oder Emoticons kann auf der ganzen Welt unterschiedlich sein. Außerdem können Emojis auf verschiedenen Systemen unterschiedlich dargestellt werden.

Eigennamen sollten, wenn möglich, in korrekter Großschreibung verwendet werden. Im Folgenden findest du eine Liste der Wörter, wie sie in den Aufgaben vorkommen sollten.

- JavaScript (Großbuchstaben bei "J" und "S" und keine Abkürzungen)
- Node.js
- Obwohl sie manchmal ungenau sind, sollten die nicht mit Bindestrichen versehenen Formen von "Back-End" und "Front-End" verwendet werden, da sie weiter verbreitet sind.

### Die 2-Minuten-Regel

Jede Aufgabe sollte von einem englischen Muttersprachler, der die vorangegangenen Aufgaben gelöst hat, innerhalb von 120 Sekunden gelöst werden können. Dazu gehört auch die Zeit, die du brauchst, um die Instruktionen zu lesen, den vorgegebenen Code zu verstehen, deinen Code zu schreiben und alle Tests zu bestehen.

Wenn du länger als zwei Minuten brauchst, um die Aufgabe zu lösen, hast du zwei Möglichkeiten:

- vereinfache die Aufgabe, oder
- Teile die Aufgabe in zwei Aufgaben auf.

Die 2-Minuten-Regel zwingt dich, als Aufgabenersteller, deine Anweisungen kurz und präzise zu formulieren, deinen Startcode klar zu formulieren und deine Tests eindeutig zu gestalten.

Wir verfolgen, wie lange die Teilnehmer brauchen, um die Aufgaben zu lösen, und nutzen diese Informationen, um Aufgaben zu identifizieren, die vereinfacht oder aufgeteilt werden müssen.

### Modularität

Jede Aufgabe sollte genau ein Konzept lehren, und dieses Konzept sollte aus dem Namen der Aufgabe ersichtlich sein.

Wir können bereits behandelte Konzepte durch Wiederholungen und Variationen festigen - zum Beispiel h1-Elemente in einer Aufgabe und h3-Elemente ein paar Aufgaben später.

Unser Ziel ist es, tausende von 2-minütigen Aufgaben zu haben. Diese können ineinander übergehen und bereits gelernte Konzepte wiederholen.

### Aufgabentext formatieren

Hier findest du spezielle Formatierungsrichtlinien für Aufgabentexte und einige Beispiele:

- Sprachliche Schlüsselwörter stehen in `` \` `` Backticks. Zum Beispiel HTML-Tag-Namen oder CSS-Eigenschaftsnamen.
- Verweise auf Codeteile (d. h. Funktions-, Methoden- oder Variablennamen) sollten in `` \` ``-Backticks eingeschlossen werden. Siehe untenstehendes Beispiel:

```md
Verwende `parseInt`, um die Variable `realNumber` in eine Integerzahl umzuwandeln.
```

- Verweise auf Dateinamen und Pfadverzeichnisse (z. B. `package.json`, `src/components`) sollten in `` \` ``-Backticks eingeschlossen werden.
- Mehrzeiligen Codeblöcken **muss eine Leerzeile vorangestellt werden**. Die nächste Zeile muss mit drei Backticks beginnen, unmittelbar gefolgt von einer der [unterstützten Sprachen](https://prismjs.com/#supported-languages). Um den Codeblock zu vervollständigen, musst du eine neue Zeile beginnen, die nur drei Backticks und **eine weitere Leerzeile** enthält. Siehe untenstehendes Beispiel:
- Whitespace ist in Markdown wichtig, deshalb empfehlen wir, ihn in deinem Editor sichtbar zu machen.

**Hinweis:** Wenn du einen Beispielcode in YAML verwendest, benutze `yaml` anstelle von `yml` für die Sprache rechts von den Backticks.

Im Folgenden findest du ein Codebeispiel:

````md
```{Sprache}

[HIER DEIN CODE]

````
````

- Zusätzliche Informationen in Form einer Anmerkung sollten von Leerzeilen umgeben sein und wie folgt formatiert werden: "**Note:** Rest des Anmerkungstextes...".
- Wenn mehrere Notizen erforderlich sind, listest du alle Notizen in separaten Sätzen auf und verwendest das Format: **Notes:** Erster Text der Notiz. Zweiter Notiztext.`
- Verwende einfache Anführungszeichen, wo dies möglich ist.

**Note:** Das Äquivalent _Markdown_ sollte anstelle von _HTML_ Tags verwendet werden.

## Tests schreiben

Aufgaben sollten so viele Tests enthalten, wie nötig sind, um zu überprüfen, ob ein Teilnehmer ein Konzept verstanden hat.

Unser Ziel ist es, den einzelnen Aspekt der Aufgabe zu vermitteln und zu prüfen, ob die Teilnehmer/innen diesen Aspekt verstanden haben.

Aufgabentests können die Assertion-Bibliotheken von Node.js und Chai.js nutzen. Außerdem kann bei Bedarf auf den vom Benutzer erstellten Code in der Variable `code` zugegriffen werden. Zusätzlich stellt das Objekt `__helpers` mehrere Funktionen zur Verfügung, die das Schreiben von Tests vereinfachen. Die verfügbaren Funktionen sind in _client/src/utils/curriculum-helpers.ts_ definiert.

## Formatting seed code

Here are specific formatting guidelines for the challenge seed code:

- Use two spaces to indent
- JavaScript statements end with a semicolon
- Use double quotes where applicable

### Seed code comments

We have a [comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) that contains the only comments that can be used within the seed code. Die Groß- und Kleinschreibung und die Abstände des Kommentarwörterbuchs müssen eingehalten werden. Das Kommentarwörterbuch sollte nicht ohne vorherige Absprache mit dem Entwicklungsteam erweitert werden.

Die verwendeten Kommentare sollten ein Leerzeichen zwischen den Kommentarzeichen und dem eigentlichen Kommentar enthalten. Im Allgemeinen sollten Kommentare sparsam verwendet werden. Überlege dir immer, ob du die Beschreibung oder die Instruktionen einer Aufgabe umschreiben kannst, wenn du dadurch einen Kommentar im Startcode vermeiden kannst.

Beispiel für einen gültigen einzeiligen JavaScript-Kommentar:

```js
// Ändere nur den Code unterhalb dieser Zeile
````

Beispiel für einen gültigen CSS-Kommentar:

```css
/* Only change code above this line */
```

Wenn eine Aufgabe nur eine einzige Stelle hat, an der Codeänderungen erforderlich sind, verwende bitte die Kommentare im folgenden Beispiel, um dem Teilnehmer mitzuteilen, wo die Änderungen vorgenommen werden sollen.

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

Wenn eine Aufgabe mehrere Stellen hat, an denen der Benutzer den Code ändern soll (z. B. die React-Aufgaben)

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello'
    };
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: 'You clicked!'
    });
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <button>Click Me</button>
        {/* Change code above this line */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```

### Übersetzung der Kommentare im Startcode

Für jede Sprache gibt es ein eigenes Kommentarwörterbuch. The [English version of the comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) is the basis for the translations found in the corresponding non-English versions of the files. The non-English version of the Chinese comment dictionary would be located at `/curriculum/dictionaries/chinese/comments.json`. Jedes Wörterbuch besteht aus einem Array von Objekten mit einer eindeutigen `id`-Eigenschaft und einer `text`-Eigenschaft. Nur der `text` sollte geändert werden, damit er die Übersetzung des entsprechenden englischen Kommentars enthält.

Einige Kommentare können ein Wort/einen Satz enthalten, das/der nicht übersetzt werden sollte. Zum Beispiel sollten Variablennamen oder Bibliotheksnamen wie "React" nicht übersetzt werden. Schau dir den Kommentar unten als Beispiel an. Das Wort `myGlobal` sollte nicht übersetzt werden.

```text
Deklariere die Variable myGlobal unterhalb dieser Zeile
```

> [!NOTE]
> 
> Wir arbeiten an einer Integration, die die Arbeit an i18n für das Kommentarwörterbuch ermöglicht.

## Hinweise und Lösungen

Jede Aufgabe hat einen `Erhalte einen Tipp` Button, so dass ein Teilnehmer alle Tipps/Lösungen, die für die Aufgabe erstellt wurden, abrufen kann. Tipps und Lösungen für den Studienplan findest du in [unserem Forum](https://forum.freecodecamp.org/c/guide) unter der Kategorie `Guide`.

Wenn du ein Problem in einem bestehenden Thema für Tipps/Lösungen findest, kannst du in der [Kategorie contributors](https://forum.freecodecamp.org/c/contributors) im Forum Vorschläge machen. Moderatoren und Nutzer mit Vertrauensstufe 3 prüfen die Kommentare und entscheiden, ob die Änderungen in das entsprechende Hinweis-/Lösungsthema aufgenommen werden oder nicht.

### Neue Aufgabenhinweise/Lösungsthemen hinzufügen

Führe die folgenden Schritte aus, wenn du ein neues Thema mit Tipps und Lösungen für Aufgaben hinzufügst.

1. Beginne mit den gleichen Schritten wie beim Erstellen eines neuen Themas, aber schau dir die nächsten Schritte zum Erstellen des Titels an.
2. Der Titel des Themas sollte mit `freeCodeCamp Challenge Guide:` beginnen und mit dem eigentlichen Titel der Studienplanaufgabe verkettet werden. Wenn die Aufgabe zum Beispiel "`Chunky Monkey`" heißt, würde der Titel des Themas lauten "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` sollte der Eigentümer dieser Themen/Posts sein. Du musst also einen Admin bitten, den Eigentümer des Hauptposts auf `camperbot` zu ändern.
4. Sobald das neue Thema erstellt ist, wird eine Forenthemen-ID erstellt. Sie befindet sich am Ende der URL des Forenthemas. Diese ID muss dem Frontmatter der Studienplanaufgabendatei über den normalen Pull-Request-Prozess hinzugefügt werden, damit der `Erhalte einen Tipp` Button auf das Thema verlinkt.

### Richtlinien für den Inhalt von Hinweisen und Lösungsthemen

Wenn du eine Lösung für ein Studienplanaufgabenthema vorschlägst, muss der vollständige Code hinzugefügt werden. Dies beinhaltet den gesamten ursprünglichen Startcode sowie alle Änderungen, die nötig sind, um alle Aufgabentests zu bestehen. Die folgende Vorlage sollte verwendet werden, wenn du neue Hinweise/Lösungen für Themen erstellst:

````md
# Aufgabentitel hier eintragen

---

## Problemerläuterung

Hier wird zusammengefasst, was zu tun ist, ohne die Aufgabenbeschreibung und/oder die Instruktionen einfach zu wiederholen. Dies ist ein optionaler Abschnitt

#### relevante Links

- [Linktext](Link_url_hier eintragen)
- [Linktext](Link_url_hier eintragen)
---

## Hinweise

### Hinweis 1

Hinweis hier eintragen

### Hinweis 2

Hinweis hier eintragen

---

## Lösungen

<details><summary>Lösung 1 (Klicken zum Anzeigen/Verbergen)</summary>

```js
function myFunc() {
  console.log('Hello World!');
}
````

#### Erklärung des Codes

- Erklärung des Codes hier eintragen
- Erklärung des Codes hier eintragen

#### Relevante Links

- [Linktext](link_url_goes_here)
- [Linktext](link_url_goes_here)

</details>
````

## Testen von Aufgaben

Bevor du [einen Pull-Request](how-to-open-a-pull-request.md) für deine Änderungen erstellst, musst du überprüfen, ob die von dir vorgenommenen Änderungen nicht versehentlich Probleme mit der Aufgabe verursachen.

1. Um alle Aufgaben zu testen, führe den folgenden Befehl im Stammverzeichnis aus

````
pnpm run test:curriculum
```

2. Du kannst auch einen Block oder einen Superblock von Aufgaben mit diesen Befehlen testen

```
FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum
```

```
FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum
```

Du kannst eine Aufgabe auch einzeln testen, indem du die folgenden Schritte ausführst:

1. Wechsle in das Verzeichnis "Curriculum":

   ```
   cd curriculum
   ```

2. Führe das Folgende für jede Aufgabendatei aus, für die du Änderungen vorgenommen hast (ersetze dabei `Aufgabentitel hier eintragen` durch den vollständigen Titel der Aufgabe):

   ```
   pnpm run test -- -g challenge-title-goes-here ```

Sobald du sichergestellt hast, dass jede Aufgabe, an der du gearbeitet hast, die Tests besteht, [erstelle bitte einen Pull-Request](how-to-open-a-pull-request.md).

> [!TIP] Du kannst die Umgebungsvariable `LOCALE` in der `.env` auf die Sprache der Aufgabe(n) setzen, die du testen willst.
> 
> Die derzeit akzeptierten Werte sind `englisch` und `chinesisch`, wobei `englisch` standardmäßig eingestellt ist.

### Nützliche Links

Aufgaben erstellen und bearbeiten:

1. [Aufgabentypen](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - was die numerischen Aufgabentypenwerte bedeuten (Enum).

2. [Beitrag zum FreeCodeCamp - ES6 Challenge Tests schreiben](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - ein Video, das [Ethan Arrowood](https://twitter.com/ArrowoodTech) bei seinem Beitrag zur alten Version des Lehrplans begleitet.

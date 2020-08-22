<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Wie man an Coding Herausforderungen arbeitet

Unser Ziel ist es, eine unterhaltsame und klare interaktive Lernerfahrung zu entwickeln.

Das Entwerfen von interaktiven Programmierherausforderungen ist schwierig. Es wäre viel einfacher, eine ausführliche Erklärung zu schreiben oder ein Video-Tutorial zu erstellen. Für unsere Kernherausforderungen halten wir jedoch an dem fest, was für die meisten Menschen am besten funktioniert - ein völlig interaktives, videospielartiges Erlebnis.

Wir wollen, dass du mit so wenig Schwierigkeiten wie möglich Dynamik entwickelst und unseren Lehrplan durchbrichst. Wir möchten, dass du mit Selbstvertrauen und einer großen Erfahrung mit Programmierkonzepten in die Projekte einsteigst.

Diese Herausforderungen zu meistern, erfordert viel Kreativität und Liebe zum Detail. Aber du wirst viel Hilfe haben. Du hast Unterstützung von einem ganzen Team von Mitwirkenden, denen du Ideen zeigen und deine Herausforderungen demonstrieren kannst. Bleibe aktiv im [Contributors Room](https://gitter.im/freecodecamp/contributors) und stelle viele Fragen.

Mit deiner Hilfe können wir einen interaktiven Codierungslehrplan entwerfen, der Millionen von Menschen helfen wird, das Programmieren für die nächsten Jahre zu erlernen.

Der Inhalt für jede Herausforderung wird in einer eigenen Markdown Datei gespeichert. Diese Markdown Datei wird später mit unseren Tools auf die Webseite übertragen, mit der du interagieren kannst. Du findest alle lehrplanmäßigen Inhalte von freeCodeCamp.org im Verzeichnis [`/curriculum`](/curriculum).

Es gibt zwei Möglichkeiten, wie du an diesen Herausforderungen arbeiten kannst:

- Wir empfehlen, das Projekt zu klonen und [lokal](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-setup-freecodecamp-locally.md) auf deinen Computer zu bearbeiten. Hilfreich sind dabei unsere [Beitrags Richtlinien](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/i18n-languages/german/CONTRIBUTING.md).
- Oder optional kannst du eine Challenge innerhalb der GitHub-Oberfläche ändern, indem du auf das Bleistift-Symbol klickst, um mit der Bearbeitung der Datei zu beginnen.

## Herausforderungsvorlage

Nachfolgend findest du eine Vorlage, wie die Hausforderungs-Markdown-Dateien aussehen.

**Notes:**

1. In den folgenden Abschnitt findest du Beispiele für `{ext}`:
    - `html` - HTML/CSS
    - `js` - JavaScript
    - `jsx` - JSX

2. Für den Abschnitt `tests` unten sollten `text` und `testString` gültige YAML-Zeichenketten sein. `testString` kann eine Zeichenkettenfunktion oder ein Ausdruck sein, der möglicherweise Chai-Asserts verwendet.

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Challenge Title
challengeType: 0
videoUrl: 'url of video explanation'
---

## Description
<section id='description'>
A Description of the challenge and what is required to pass
</section>

## Instructions
<section id='instructions'>
Instructions about what exactly needs to be done.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: Should return "foo"
    testString: 'A stringified function possibly using Chai asserts'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Code displayed in the editor by default.

This is a required section for the challenge.
```

</div>

### Before Test
<div id='{ext}-setup'>

```{ext}
Optional Test setup code.
```

</div>

### After Test
<div id='{ext}-teardown'>

```{ext}
Optional Test tear down code.
```

</div>

</section>

## Solution
<section id='solution'>

```{ext}
// solution required
```

</section>
````

## Nummerierung von Herausforderungen

Jede Herausforderung braucht eine `ID`. Wenn du keine angibst, erstellt MongoDB beim Speichern der Daten eine neue zufällige, aber das wollen wir nicht, da wir wollen, dass die Challenge-IDs in verschiedenen Umgebungen (Staging, Produktion, viele verschiedene Entwickler, etc.) konsistent sind.

Um eine neue in einer Shell zu generieren (vorausgesetzt, MongoDB läuft separat):

1. Run `mongo` command
2. Run `ObjectId()` command

Beispiel:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
```

Das Ergebnis ist eine neue ID, z.B. `5a474d78df58bafeb353535d34` oben.

Sobald du deine ID hast, lege sie in die Markdown-Datei an den oberen Rand als "id" Feld.
Beispiel:

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## Herausforderungen bennnen

Dinge zu benennen ist schwierig. Wir haben es einfacher gemacht, indem wir einige Einschränkungen eingeführt haben.

Alle Challenge-Titel sollten explizit und auf Englisch sein und dem folgenden Muster folgen:

[Verb] [Sache]

Hier sind ein paar Beispiele für Herausforderungsnamen:

- Use Clockwise Notation to Specify the Padding of an Element
- Condense arrays with .reduce
- Use Bracket Notation to Find the First Character in a String


## Schreiben von Challenge-Beschreibungen/Anweisungen

Die Sätze sollten klar und prägnant und mit minimalem Fachjargon sein. Bei Verwendung sollte der Fachjargon sofort in Klartext definiert werden.

Halte Absätze kurz (ca. 1-4 Sätze). Die Wahrscheinlichkeit, dass die Leute mehrere kurze Absätze statt einer Wand voll Text lesen, ist höher.

Der Herausforderungstext sollte die zweite Person ("Du") verwenden, um ihr einen persönlichen Gesprächston zu geben. Auf diese Weise scheinen der Text und die Anweisungen direkt mit dem Benutzer zu sprechen, der die Herausforderung bewältigt. Versuche die erste Person nicht zu benutzen ("Ich", "wir", "lasst uns" und "uns").

Verwende keine ausgehenden Links. Diese unterbrechen den Fluss. Der Benutzer sollten bei diesen Herausforderungen nie etwas googlen müssen. Wenn es Ressourcen gibt, von denen du denkst, dass diese für den Benutzer von Nutzen sein könnten, füge sie dem Artikel über den Leitfaden der Herausforderung hinzu.

Bei Bedarf können Diagramme hinzugefügt werden.

Verwende keine Emojis oder Emoticons in Herausforderungen. freeCodeCamp hat eine globale Gemeinschaft, und die kulturelle Bedeutung eines Emojis oder Emoticons kann weltweit unterschiedlich sein. Außerdem können Emojis auf verschiedenen Systemen unterschiedlich darstellen.

Richtige Substantive sollten nach Möglichkeit eine korrekte Groß-/Kleinschreibung verwenden. Nachfolgend finden Sie eine Liste von Wörtern, wie sie in den Herausforderungen vorkommen sollten.

- JavaScript (Großbuchstaben in "J" und "S" und keine Abkürzungen)
- Node.js
- Frontend-Entwicklung (Adjektivform mit einem Bindestrich) ist, wenn Sie am Frontend arbeiten (Substantivform ohne Bindestrich). Das Gleiche gilt für "Backend", "Full Stack" und viele andere zusammengesetzte Begriffe.

### Die 2-Minuten Regel

Jede Herausforderung sollte innerhalb von 120 Sekunden für einen englischen Muttersprachler lösbar sein, der die vor ihm liegenden Herausforderungen gemeistert hat. Dazu gehört auch die Zeit, die benötigt wird, um die Anweisungen zu lesen, den gesetzten Code zu verstehen, einen eigenen Code zu schreiben und alle Tests bestehen zu lassen.

Wenn es länger als zwei Minuten dauert, die Herausforderung zu bestehen, hast du zwei Möglichkeiten:

- Vereinfache die Herausforderung, oder
- Teile die Herausforderung in zwei Herausforderungen auf.

Die 2-Minuten-Regel zwingt dich, den Herausforderungs-Designer, die Anweisungen kurz und bündig zu formulieren, deinen Startcode klar zu formulieren und deine Tests einfach durchzuführen.

Wir haben JavaScript-Ereignisse, die verfolgen, wie lange es dauert, bis die Benutzer die Herausforderungen lösen, und wir können diese nutzen, um Herausforderungen zu identifizieren, die vereinfacht oder aufgeteilt werden müssen.

### Modularität

Jede Herausforderung sollte genau ein Konzept vermitteln, und dieses Konzept sollte sich aus dem Namen der Herausforderung ergeben.

Wir können zuvor abgedeckte Konzepte durch Wiederholung und Variationen verstärken - zum Beispiel die Einführung von h1-Elementen in eine Herausforderung, dann h3-Elemente ein paar Herausforderungen später.

Unser Ziel ist es, Tausende von 2-minütigen Herausforderungen zu bewältigen. Diese können zusammenfließen und zuvor abgedeckte Konzepte wiederholen.

### Formatieren des Herausforderungstextes

Hier sind spezifische Formatierungsrichtlinien für Herausforderungstexte und Beispiele:

- Sprach-Keywords gehen in `<code>` Tags. Zum Beispiel HTML-Tag-Namen oder CSS-Eigenschaftsnamen.
- Die erste Instanz eines Schlüsselwortes, wenn es definiert wird, oder allgemeine Schlüsselwörter (z.B. "object" oder "immutable") gehen in `<dfn>` Tags.
- Verweise auf Codeteile (z.B. Funktions-, Methoden- oder Variablennamen) sollten in `<code>` Tags eingeschlossen werden. Siehe Beispiel unten:
- Verwende <code>parseInt</code>, um die Variable <code>realNumber</code> in eine ganze Zahl zu konvertieren.
- Mehrzeilige Codeblöcke **müssen durch eine leere Zeile** eingeleitet werden.  Die nächste Zeile muss mit drei Backticks beginnen, gefolgt von einer der [ unterstützten Sprachen ](https://prismjs.com/#unterstützten-sprachen).  Um den Codeblock zu vervollständigen, müssen Sie eine "Newline" beginnen, die nur drei Backticks und **eine weitere Leerzeile** hat.
**Note:** Wenn Sie einen Beispielcode in YAML verwenden möchten, verwenden Sie `yaml` anstelle von `yml` für die Sprache rechts von den Backticks.

Siehe Beispiel unten:

````md
The following is an example of code:

```{language}

[HIER DEINEN CODE]

```
````

- Zusätzliche Informationen in Form einer Notiz sollten wie folgt formatiert werden: `<strong>Note:</strong> Rest of note text...`
- Wenn mehrere Notizen benötigt werden, liste alle Notizen in separaten Sätzen im folgenden Format auf: `<strong>Notes:</strong> First note text.  Second note text.`.
- Verwende gegebenenfalls doppelte Anführungszeichen.

## Schreiben von Tests

Die Herausforderungen sollten so viele Tests wie möglich umfassen, um sicherzustellen, dass ein Benutzer ein Konzept versteht.

Unser Ziel ist es Wissen zu vermitteln und dann zu überprüfe, ob du alles verstanden hast.

Challenge-Tests können die Assertionsbibliotheken Node.js und Chai.js verwenden. Bei Bedarf kann auch auf benutzergenerierten Code in der Variablen "code" zugegriffen werden.

## Startcode formatieren

Hier sind spezifische Formatierungsrichtlinien für den Startcode:

- Zwei Leerzeichen zum Einrücken verwenden
- JavaScript-Anweisungen enden mit einem Semikolon.
- Verwende gegebenenfalls doppelte Anführungszeichen.
- Kommentare sollten ein Leerzeichen zwischen den Kommentarzeichen und dem Kommentar selbst haben.

Beispiel: `// Fix this line`

## Tipps und Lösungen zur Curriculum Herausforderung

Jede Challenge hat eine Schaltfläche "Get a Hint", so dass ein Benutzer auf alle Hinweise/Lösungen zugreifen kann, die für die Challenge erstellt wurden. Curriculum Hinweise/Lösungsinhalte findest du auf [unseren Forum](https://forum.freecodecamp.org/c/guide) unter der Kategorie "Guide".

Wenn du einen Fehler in einem Hinweis/Lösungsinhalt zu einer bestehenden Herausforderung findest, kannst du Vorschläge unter der Kategorie [Beitragende](https://forum.freecodecamp.org/c/contributors) machen. Moderatoren und Benutzer mit Vertrauensstufe 3 überprüfen die Kommentare und entscheiden, ob die Änderungen in der entsprechende Vorschlag aufgenommen werden sollen oder nicht.

### Hinzufügen neuer Herausforderungs-Hinweise/Lösungen Themenbereiche

Führe die folgenden Schritte aus, wenn ein neues Problem mit Hinweisen/Lösungen hinzufügt werden soll.

1. Beginne mit den gleichen Schritten wie bei [Erstellung eines neuen Themas](creating-a-new-guide-topic), aber überprüfe den nächsten für das Erstellen des Titels.
2. Der Titel des Themas sollte mit "freeCodeCamp Challenge Guide" beginnen: " verkettet mit dem eigentlichen Titel der Lehrplanherausforderung. Wenn die Herausforderung beispielsweise "Chunky Monkey" heißt, lautet der Thementitel "freeCodeCamp Challenge Guide": Chunky Monkey".
3. `camperbot` sollte der Besitzer dieser Themen/Posts sein, also musst du einen Admin bitten, den Besitzer des Hauptposts in `camperbot` zu ändern.
4. Sobald das neue Thema erstellt wurde, wird eine Forum-Themen-ID erstellt.  Sie befindet sich am Ende der URL des Forums.  Diese ID muss über den normalen Pull-Request-Prozess für die Schaltfläche "Get a Hint" zur Frontmaterie der Curriculum Herausforderungs-Datei hinzugefügt werden, um auf das Thema zu verweisen.

### Richtlinien für den Inhalt von Hinweisen und Lösungsthemen

Wenn du eine Lösung für ein Curriculum Herausforderungs bezogenen Leitfaden vorschlagen willst, muss der vollständige Code hinzugefügt werden. Dies beinhaltet den gesamten ursprünglichen Startcode sowie alle Änderungen, die erforderlich sind, um alle Herausforderungs-Tests zu bestehen.  Die folgende Vorlage sollte bei der Erstellung neuer Hinweise/Lösungsvorschläge verwendet werden:

````md
# Challenge Name Goes Here

---
## Problem Explanation

This summarizes what need to be done without just restating the challenge description and/or instructions.  This is an optional section

#### Relevant Links
- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---
## Hints

### Hint 1
Hint goes here

### Hint 2
Hint goes here

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function myFunc() {
  console.log('Hello World!');
}
```

#### Code Explanation

- Code explanation goes here
- Code explanation goes here

#### Relevant Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

</details>
````

### nützliche Links

Erstellen und Bearbeiten von Herausforderungen:

1. [Herausforderungstypen](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13) - was die Werte der numerischen Challenge-Typen bedeuten (Enum).

2. [Beim FreeCodeCamp mitwirken - ES6 Challenge Tests schreiben](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - ein Video nach [Ethan Arrowood](https://twitter.com/ArrowoodTech), in dem er zur alten Version des Curriculum beiträgt.

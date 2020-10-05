# Wie man mit Coding-Herausforderungen umgeht

Unser Ziel ist es, ein unterhaltsames und klares interaktives Lernerlebnis zu entwickeln.

Das Entwerfen interaktiver Codierungsaufgaben ist schwierig. Es wäre viel einfacher, eine längere Erklärung zu schreiben oder ein Video-Tutorial zu erstellen, und es gibt einen Platz für diejenigen auf Medium und YouTube. Für unseren Grundkurs halten wir uns jedoch an dem fest, was für die meisten Menschen am besten funktioniert - eine voll interaktive Videospielerfahrung.

Wir wollen, dass Wohnmobile einen Strömungszustand erreichen. Wir wollen, dass sie Schwung bauen und durch unseren Lehrplan mit möglichst wenigen Schlägen schüren. Wir wollen, dass sie mit Zuversicht in die Projekte gehen und sich den Programmierkonzepten weitestgehend aussetzen.

Um diese Herausforderungen zu schaffen, bedarf es einer immensen Kreativität und Aufmerksamkeit für Details. Es gibt viele Hilfe zur Verfügung. Sie erhalten Unterstützung von einem ganzen Team von Mitwirkenden, an das Sie Ideen abstoßen und Ihre Herausforderungen Demo erstellen können. Bleiben Sie aktiv im [Beitragenden Raum](https://gitter.im/freecodecamp/contributors) und stellen Sie viele Fragen.

Mit Ihrer Hilfe können wir ein interaktives Coding Curriculum entwerfen, das Millionen von Menschen hilft, jahrelang zu programmieren.

Der Inhalt für jede Challenge wird in einer eigenen Markdown Datei gespeichert. Diese Markdown Datei wird später mit unseren Tools in HTML konvertiert, um interaktive Webseiten zu erstellen.

You can find all of freeCodeCamp.org's curricular content in the [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges) directory.

## Werkzeuge für den Lehrplan einrichten

Bevor Sie am Lehrplan arbeiten, müssen Sie ein paar Werkzeuge einrichten, um Ihre Änderungen zu testen. Sie können jede Option von unten verwenden:

- Sie können [FreeCodeCamp lokal einrichten](how-to-setup-freecodecamp-locally.md). Dies ist **dringend empfohlen** für regelmäßige/wiederholte Beiträge. Dieses Setup erlaubt es Ihnen, Ihre Änderungen zu testen und zu testen.
- Verwenden Sie Gitpod, eine kostenlose Entwicklungsumgebung. Wenn Sie auf den Button unten klicken, wird eine Entwicklungsumgebung für FreeCodeCamp in Ihrem Browser gestartet. Es dauert nur wenige Minuten.

  [![In Gitpod öffnen](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Bearbeiten Sie die Dateien auf GitHubs Schnittstelle, indem Sie auf das Bleistift-Symbol für die entsprechende Datei klicken. Während dies der schnellste Weg ist, ist es **nicht empfohlen**, da Sie Ihre Änderungen auf GitHub nicht testen können. Wenn unsere Betreuer zu dem Schluss kommen, dass die von Ihnen vorgenommenen Änderungen lokal getestet werden müssen, müssen Sie stattdessen die oben genannten Methoden erneut befolgen.

## Herausforderungsvorlage

Unten ist eine Vorlage dafür, wie die Challenge-Markdown-Dateien derzeit aussehen.  Um die gestraffte Vorlage zu sehen, die wir annehmen, siehe [unten](#upcoming-challenge-template).

````md
---
id: Eindeutige Kennung (alphanumerisch, MongoDB_id)
title: Challenge Title
challengeType: 0
videoUrl: 'url of video explanation'
--- ## Beschreibung

<section id='description'>

 Eine Beschreibung der Challenge und was benötigt wird, um
</section>

## Anweisungen

<section id='instructions'>
Anweisungen zu geben, was genau getan werden muss.
</section>

## Tests

<section id='tests'>

```yml
Tests:
  - Text: Soll "foo" zurückgeben
    testString: 'Eine String-String-Funktion, die möglicherweise Chai-Zusicherungen verwendet"
````

</section>

## Challenge-Seed

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Code, der standardmäßig im Editor angezeigt wird.

Dies ist ein notwendiger Abschnitt für die Herausforderung.
```

</div>

### Vor dem Test

<div id='{ext}-setup'>

```{ext}
Optionaler Test-Setup-Code.
```

</div>

### Nach Test

<div id='{ext}-teardown'>

```{ext}
Optionaler Test Abriss Code.
```

</div>

</section>

## Lösung

<section id='solution'>

```{ext}
// Lösung erforderlich
```

</section>

````

> [!NOTE]
>
> 1. In den obigen Abschnitten, Beispiele von `{ext}` sind:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. Für den Abschnitt `Tests` oben sollten `text` und `testString` gültige YAML-Zeichenketten sein. `testString` kann eine stringifizierte Funktion oder Ausdruck sein, mit der Chai behauptet werden kann.

## Nummerierende Herausforderungen

Jede Challenge benötigt eine `id`. Wenn Sie keine angeben, wird MongoDB eine neue zufällige erstellen, wenn die Daten gespeichert werden; aber wir wollen das nicht, da wir wollen, dass die Challenge-IDs in verschiedenen Umgebungen konsistent sind (inszeniert, B. Produktion, viele verschiedene Entwickler, etc.).

Um eine neue in einer Shell zu generieren (vorausgesetzt MongoDB läuft separat):

1. Führe `mongo` Befehl aus.
2. Führe `ObjectId()` Befehl aus.

Zum Beispiel:

```bash
$ mongo
MongoDB shell Version v3.6.1
verbindet zu: mongodb://127.0.0.1:27017
MongoDB Server Version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Das Ergebnis ist eine neue Id, zum Beispiel `5a474d78df58bafeb3535d34` oben.

Once you have your id, put it into the markdown file as the `id` field at the top, e.g.

```yml
---
id: 5a474d78df58bafeb3535d34
Titel: Challenge-Titel
```

## Benennen von Herausforderungen

Die Dinge zu benennen, ist schwierig. Wir haben es erleichtert, indem wir einige Einschränkungen auferlegt haben.

Alle Challenge-Titel sollten explizit sein und diesem Muster folgen:

\[verb\]\[Objektklausel\]

Hier sind einige Beispiel-Challenge-Namen:

- Verwende im Uhrzeigersinn Notation um die Füllung eines Elements anzugeben
- Arrays mit .reduce kondensieren
- Benutze Klammer-Notation um das erste Zeichen in einem String zu finden

## Herausforderung Beschreibungen/Anleitung

Sätze sollten klar und präzise mit minimalem Fachjargon sein. Wenn verwendet, sollte der Jargon sofort im Klartext definiert werden.

Absätze kurz halten (etwa 1-4 Sätze). Es ist wahrscheinlicher, dass die Menschen mehrere kurze Absätze lesen als eine Mauer des Textes.

Der Challenge-Text sollte die zweite Person ("Sie") verwenden, um ihm einen Gesprächston zu geben. Auf diese Weise scheinen Text und Anweisungen direkt mit dem Camper zu sprechen, der die Herausforderung bewältigt. Versuchen Sie, die erste Person zu vermeiden ("Ich", "wir", "lass", und "uns").

Ausgehende Links nicht verwenden. Diese unterbrechen den Fluss. Campern sollte bei diesen Herausforderungen nie etwas zu google haben. Wenn es Ressourcen gibt, von denen man denkt, dass Camper profitieren würden, fügen Sie sie dem Artikel zu Guide in Bezug auf die Herausforderung hinzu.

Bei Bedarf können Sie Diagramme hinzufügen.

Verwenden Sie keine Emojis oder Emoticons in Challenge. FreeCodeCamp hat eine globale Gemeinschaft, und die kulturelle Bedeutung eines Emoji oder Emoticons kann sich auf der ganzen Welt unterscheiden. Außerdem können Emojis auf verschiedenen Systemen anders aussehen.

Richtige Knoten sollten die richtige Großschreibung verwenden, wenn möglich. Unten ist eine Liste von Wörtern, wie sie in den Herausforderungen erscheinen sollten.

- JavaScript (Großbuchstaben in "J" und "S" und keine Abkürzungen)
- Node.js
- Front-End-Entwicklung (Adjektive Form mit Bindestrich) ist, wenn Sie am Frontend arbeiten (noun form ohne Bindestrich). Das Gleiche gilt für "backend", "full stack", und viele andere Compound-Begriffe.

### Die 2-Minuten-Regel

Jede Herausforderung sollte innerhalb von 120 Sekunden von einem englischen Muttersprachler gelöst werden, der die Herausforderungen bewältigt hat. Dies beinhaltet die Zeit, die benötigt wird, um die Anleitungen/Anweisungen zu lesen, den Seed Code zu verstehen Schreiben Sie ihren eigenen Code und lassen Sie alle Tests bestehen.

Wenn es länger als zwei Minuten dauert, um die Herausforderung abzuschließen, haben Sie zwei Möglichkeiten:

- Vereinfachen Sie die Herausforderung, oder
- Spalten Sie die Herausforderung in zwei Herausforderungen.

Die 2-minütige Regel zwingt Sie, den Herausforderer Designer, Ihre Richtung, Ihren Seed-Code klar und Ihre Tests klar zu machen.

Wir verfolgen, wie lange es dauert, bis Wohnmobile Änderungen lösen und nutzen diese Informationen, um Herausforderungen zu identifizieren, die vereinfacht oder aufgeteilt werden müssen.

### Modularität

Jede Herausforderung sollte genau ein Konzept lehren, und dieses Konzept sollte aus dem Namen der Herausforderung hervorgehen.

Wir können bereits abgedeckte Konzepte durch Wiederholung und Variationen stärken - zum Beispiel die Einführung von h1 Elementen in einer Herausforderung, dann h3 Elemente ein paar Herausforderungen später.

Unser Ziel ist es, Tausende von 2 Minuten Herausforderungen zu haben. Diese können zusammenfließen und an bereits abgedeckte Konzepte anknüpfen.

### Formatiere Challenge-Text

Hier sind spezifische Formatierungsrichtlinien für herausfordernden Text und Beispiele:

- Sprachschlüsselwörter gehen in `<code>` Tags. Zum Beispiel HTML-Tag-Namen oder CSS-Eigenschaftsnamen
- Die erste Instanz eines Keywords, wenn es definiert wird, oder allgemeine Keywords (z.B. "object" oder "immutable") gehen in `<dfn>` Tags
- Referenzen zu Codeteilen (z.B. Funktion, Methode oder Variablennamen) sollten in `<code>` Tags eingewickelt werden. Siehe Beispiel unten:
- Verwende <code>parseInt</code> um die Variable <code>realNumber</code> in eine Ganzzahl umzuwandeln.
- Mehrzeilige Codeblöcke **müssen durch eine leere Zeile** vorausgegangen sein. Die nächste Zeile muss mit drei Backticks beginnen, gefolgt von einer der [unterstützten Sprachen](https://prismjs.com/#supported-languages). Um den Code-Block zu vervollständigen, müssen Sie ein Zeilenumbruch starten, das nur drei Backticks und **eine weitere leere Zeile** hat. **Hinweis:** Wenn Sie einen Beispielcode in YAML verwenden verwenden Sie `yaml` statt `yml` für die Sprache rechts neben den Backticks.

Siehe Beispiel unten:

````md
Das folgende Beispiel ist ein Beispiel für Code:

```{language}

[IHRE CODE HIER]

````
````

- Zusätzliche Informationen in Form einer Notiz sollten formatiert werden `<strong>Hinweis:</strong> Rest der Notiz Text... Wenn mehrere Notizen benötigt werden dann listet alle Notizen in separaten sentences mit dem Format `<strong>Notizen:</strong> First note text. Zweite Anmerkung Text.`.
Verwenden Sie doppelte Anführungszeichen, wo anwendbar

## Schreibtests

Herausforderungen sollten die minimale Anzahl an Tests haben, die erforderlich sind, um zu überprüfen, ob ein Camper ein Konzept versteht.

Unser Ziel ist es, den einzelnen Punkt zu kommunizieren, den die Herausforderung zu unterrichten versucht, und zu testen, dass sie diesen Punkt verstanden haben.

Challenge-Tests können die Zusicherungsbibliotheken von Node.js und Chai.js nutzen. Bei Bedarf kann auch auf den vom Benutzer generierten Code in der Variable `code` zugegriffen werden.

## Formatierung des Seed-Codes

Hier sind spezifische Formatierungsrichtlinien für den Challenge-Seed-Code:

- Benutze zwei Leerzeichen, um einzurücken
- JavaScript-Anweisungen enden mit einem Semikolon
- Verwende doppelte Anführungszeichen, sofern anwendbar
- Kommentare sollten einen Platz zwischen den Kommentarzeichen und dem Kommentar selbst haben

  `// Diese Zeile reparieren`

## Hinweise und Lösungen

Jede Challenge hat einen `Hint-Knopf, so dass ein Benutzer auf alle Hinweise/Lösungen zugreifen kann, die für die Herausforderung erstellt wurden. Lehrplan-Hinweise/Lösungsthemen befinden sich in [unserem Forum](https://forum.freecodecamp.org/c/guide) unter der Kategorie `Guide`.

Wenn du ein Problem mit den Hinweisen/Lösungen einer bestehenden Herausforderung findest, kannst du Vorschläge in der [Beitragenden Kategorie](https://forum.freecodecamp.org/c/contributors) im Forum machen. Moderatoren und Benutzer mit Treuhandstufe 3 werden die Kommentare prüfen und entscheiden, ob sie die Änderungen in das entsprechende Tipp/Lösungsthema einbeziehen wollen oder nicht.

### Hinzufügen neuer Challenge-Hinweise/Lösungen Themen

Führen Sie die folgenden Schritte ein, wenn Sie ein neues Thema in Bezug auf Challenge-Hinweise/Lösungen hinzufügen.

1. Beginnen Sie mit den gleichen Schritten für die Erstellung eines neuen Themas, aber überprüfen Sie die nächsten Schritte für die Erstellung des Titels.
2. Der Titel des Themas sollte mit `freeCodeCamp Challenge Guide: ` beginnen, die mit dem aktuellen Titel der Lehrplan-Herausforderung verbunden ist. Wenn die Herausforderung zum Beispiel "Chunky Affe" genannt wird, lautet der Titel "FreeCodeCamp Challenge Guide: Chunky Affe`".
3. `camperbot` sollte der Besitzer dieser Themen/Beiträge sein, also musst du einen Administrator anfordern, um den Besitzer des Hauptbeitrags auf `camperbot` zu ändern.
4. Sobald das neue Thema erstellt wurde, wird eine Forenthemen-ID erstellt. Sie befindet sich am Ende des Forumthema URL. Diese ID muss dem Frontmatter der Lehrplan-Challenge-Datei über den normalen Pull-Request-Prozess für den `Get a Hint`-Button hinzugefügt werden, um auf das Thema zu verlinken.

### Richtlinien für den Inhalt von Hinweisen und Lösungsthemen

Wenn Sie eine Lösung für ein Thema der Lehrplan-Herausforderung vorschlagen, das mit dem Leitfaden zusammenhängt, der vollständige Code muss hinzugefügt werden. Dies beinhaltet den gesamten ursprünglichen Seed-Code sowie alle Änderungen, die notwendig sind, um alle Challenge-Tests zu bestehen. Die folgende Vorlage sollte verwendet werden, um neue Hinweise/Lösungsthemen zu erstellen:

````md
# Challenge Name geht hier

--- ## Problembeschreibung

Dies fasst zusammen, was getan werden muss, ohne die Challenge Beschreibung und/oder Anweisungen neu zu setzen. Dies ist ein optionaler Abschnitt

#### Relevante Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

--- ## Hinweise

### Hinweis 1

Tipp geht hierher

### Hinweis 2

Hinweis geht hierher

--- ## Lösungen

<details><summary>Lösung 1 (Klicken Sie auf Anzeigen/Verbergen)</summary>

```js
Funktion myFunc() {
  Konsole. og('Hallo Welt!');
}
````

#### Code-Erklärung

- Code-Erklärung hierher
- Code-Erklärung hierher

#### Relevante Links

- [Linktext](link_url_goes_here)
- [Linktext](link_url_goes_here)

</details>
````

## Testing Challenges

Bevor du [eine Pull-Request](how-to-open-a-pull-request. d) für Ihre Änderungen müssen Sie überprüfen, dass die von Ihnen vorgenommenen Änderungen keine unbeabsichtigten Probleme mit der Herausforderung verursachen. 

1. Um alle Challenges zu testen, führen Sie den folgenden Befehl aus dem root-Verzeichnis aus

````
npm run test:curriculum
``` 

2. Du kannst mit diesen Befehlen auch einen Block oder einen Superblock von Herausforderungen testen

```
npm führen Sie test:curriculum --block='Basic HTML und HTML5' aus
```

```
npm run test:curriculum --superblock=responsive-web-design
```

Du kannst auch eine Challenge einzeln testen, indem du folgende Schritte durchführst:

1. Zum Verzeichnis `curriculum` wechseln:

   ```
   cd Lehrplan
   ```

2. Führen Sie Folgendes für jede von Ihnen geänderte Challenge-Datei aus:

   ```
   npm run test -- -g 'der vollständige englische Titel der Herausforderung'
   ```

Sobald du überprüft hast, dass jede Challenge die Tests bestanden hat, [erstelle bitte eine Pull-Request](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!TIP]
> Du kannst die Umgebungsvariable `LOCALE` in der `.env` auf die Sprache der Challenge(s) setzen, die du testen musst.
> 
> Die derzeit akzeptierten Werte sind `english` und `chinese`, wobei `english` standardmäßig gesetzt wird.

## Bevorstehende Challenge-Vorlage

Die Challenge-Vorlage wird auf eine sauberere, weniger verschachtelte Struktur aktualisiert.  Dies wurde noch nicht vollständig abgeschlossen, aber Folgendes sollte sich der letzten Struktur annähern:

``mdx

--- id: Einzigartige Kennung (alphanumerisch, MongoDB_id)
Titel: 'Challenge Title'
ChallengeType: Integer, definiert in `client/utils/challengeTypen. s`
videoUrl: 'url of video explaination'
forumTopicId: 12345
--- import Script von './script. dx';

## --step-description--

Beschreibungstext in Markdown

```html
<div> 
  Beispielcode
</div>
```

## --Schritt-Hints--

![test-id-1]

Es wird eine beliebige Anzahl von drei Nummern von IDs, Anweisungen (in Markdown) und Code-Blöcken geben.

```js
Code für Test 1
```

![test-id-2]

Weitere Anweisungen in der Markdown-Syntax

```js
Mehr Code
```

## --step-seed--

### --vorher-Benutzer-Code--

```lang
Code wird vor dem Benutzer ausgewertet
```

### --Nach-Benutzer-Code--

```lang
Code wird nach dem Benutzer und kurz vor den Tests ausgewertet
```

### --seed-content--

![index-html]

```html
Etwas html
```

```css
Etwas css
```

```js
Einige js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --Lösung-Marker -
</h1>



<p spaces-before="0">
  Genau dasselbe wie der Seeds Abschnitt
</p>

<h2 spaces-before="0">
  --Nächster Lösungsmarker
</h2>



<p spaces-before="0">
  Wieder gleichen
</p>

<h1 spaces-before="0">
  --Frage-Marker--
</h1>

<h2 spaces-before="0">
  --Textmarker--
</h2>



<p spaces-before="0">
  Die Frage würde hierher gehen (nur für Video-Challenges verwendet)
</p>

<h2 spaces-before="0">
  --Antworten-Markier-
</h2>



<p spaces-before="0">
  Antwort 1
</p>

<hr />

<p spaces-before="0">
  Weitere Antworten
</p>

<hr />

<p spaces-before="0">
  Antwort 2
</p>

<h2 spaces-before="0">
  --Lösung-Marker -
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  Nützliche Links
</h3>



<p spaces-before="0">
  Erstellen und Bearbeiten von Herausforderungen:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Challenge-Typen</a> - was die numerischen Challenge-Typ-Werte bedeuten (Enum).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Beitrag zum FreeCodeCamp - Schreiben von ES6 Challenge-Tests</a> - ein Video mit folgenden <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> , da er zum alten Lehrplan beiträgt.
    </p>
  </li>

</ol>

# Styleguide zum Erstellen und Bearbeiten von Leitartikeln

Wir empfehlen die folgenden Richtlinien zum Verfassen von Leitartikeln, um Dir beim Erstellen hilfreicher Artikel zu helfen.

## Titel

Artikeltitel sollten so kurz und prägnant wie möglich sein.

Wir möchten, dass die gewünschten Informationen schnell finden sind und daher sollte der Titel das Hauptthema des Artikels widerspiegeln.

Der Ordnername wird in der URL verwendet. Verwende daher nur Bindestriche (-), Zahlen (0-9) und Kleinbuchstaben (a-z).

Du kannst jedoch Sonderzeichen in den Artikeltitel aufnehmen.

Hier sind einige Beispiele für richtig benannte Titel:

> [`src/pages/html/tables/index.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/src/pages/html/tables/index.md)

```markdown
---
title: Tables
---
```

> [`src/pages/css/borders/index.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/src/pages/css/borders/index.md)

```markdown
---
title: Borders
---
```

> [`src/pages/javascript/loops/for-loop/index.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/src/pages/javascript/loops/for-loop/index.md)

```markdown
---
title: For Loop
---
```

## Modularität

Jeder Artikel sollte genau ein Konzept erklären, und dieses Konzept sollte aus dem Titel des Artikels ersichtlich sein.

Es kann auf andere Artikel verweisen wernden, durch inline oder die Artikel in dem Abschnitt "Weitere Ressourcen" am Ende des Artikels verlinken.

Unser Ziel ist es, Tausende von Artikeln zu haben, die eine breite Palette von technischen Themen abdecken.

## Codeblöcke

Camper werden die Guide-Artikel wahrscheinlich als schnelle Referenz für die Syntax verwenden. Artikel sollten einfache Beispiele aus der Praxis enthalten, die häufig verwendete Fälle dieser Syntax zeigen.

GitHub Markdown unterstützt [Syntax-Highlighting in Codeblöcken](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting) für viele Programmiersprachen..

Um es zu verwenden, gib die Sprache nach folgenden Zeichn an ```.

Beispiel:

```markdown
    ```html
    <div class='awesome' id='more-awesome'>
      <p>Dieser Text ist in html</p>
    </div>
    ```
```

gibt den folgenden Codeblock mit `HTML` - Syntaxhervorhebung aus, da wir die Sprache` html` nach ``` angegeben haben.

```html
<div class='awesome' id='more-awesome'>
  <p>Dieser Text ist in html</p>
</div>
```

Das Folgende stellt zwei weitere Beispiele dar, die JavaScript- und CSS-Syntaxhervorhebung verwenden

```markdown
    ```javascript
    function logTheThings(stuff) {
      console.log(stuff);
    }
    ```

    ```css
    .awesome {
      background-color: #FCCFCC;
    }
    ```
```

Bitte beachte dabei folgende Empfehlungen:

- Um ein korrektes Rendering zu gewährleisten, muss jeder Codeblöcke über ein Sprachlabel verfügen. Eine Liste der unterstützten Sprachen findest Du [hier](http://prismjs.com/#languages-list ).
- Verwende für Codeblöcke ohne entsprechende Sprache generische Bezeichnungen wie ` ```text `, oder ` ```code `.
- Du kennst vielleicht auch markdown's "four-space indentation syntax" zum schreiben von Codeblöcken. Dies wird jedoch derzeit von unserem Rendering-System __nicht__ unterstützt.

Und zuletzt sind hier noch einige vorgeschlagene Formatierungsrichtlinien beim Schreiben von Codeblöcken:

- JavaScript-Anweisungen sollten mit einem `;` - Semikolon enden
- In den Kommentaren sollte ein Leerzeichen zwischen den Kommentarzeichen und dem Kommentar selbst stehen
    ```javascript
    // Genau so
    ```

## Links

Verwende Markdown-Style-Links in Deinem Artikeln, um Links zu anderen Websites zu erstellen.

```markdown
[freeCodeCamp](https://www.freecodecamp.org/)
```

> **Wichtig**
> Achte darauf, HTTPS-Links zu verwenden. Dies ist sehr wichtig, um unsichere Inhaltswarnungen zu vermeiden.
>
> Verwende ausserdem keine kurzen Links wie "bit.ly" oder "amzn.to". Dies ist ein Sicherheitsrisiko. Kurze Links sind [anfällig für auf Umleitungen basierende Angriffe](https://security.stackexchange.com/questions/59517/are-url-shorteners-vulnerable-due-to-open-redirects).
> 
> Verwende stattdessen einfach die lange Version der Links und entferne alle Abfrageparameter.
> Bsp:
> `https://example.com/a-long/url/to-a-webpage/?queryParam=something&queryParam=somethingelse`
> wird zu
> `https://example.com/a-long/url/to-a-webpage/`

## Listen

Du kannst eine ungeordnete Liste erstellen, indem Du eine oder mehrere Textzeilen mit - oder * voranstellst.
Um Deine Liste zu ordnen, musst Du jeder Zeile eine Nummer voranstellen.

```markdown
    - Hello user!
    * Hey there!

```

## Images

Um Bilder einzufügen, die noch nicht im Web gehostet sind, musst Du sie mithilfe einer Plattform wie z.B. [Imgur](https://imgur.com/) oder [Flickr](https://www.flickr.com) einfügen. Du kannst Bilder auch hosten, indem Du sie an ein Git-Repository übergibst und an GitHub sendest. Dann kannst DU mit der rechten Maustaste auf das Bild klicken und seine URL kopieren.

Wir erlauben nicht, Bilder direkt im git-Repository zu hosten, weil es viel zu groß wäre (Leute, die es zu ihrem lokalen System ziehen, um Änderungen vorzunehmen, würden alle Bilder herunterladen), und weil es einfacher ist, ein Bild zu ändern. Ändere einfach die URL in einem Artikel, indem Du das neue Bild in das Repository einfügst.

Verwende die entsprechende Markdown-Syntax, um das Bild in Ihren Artikel aufzunehmen:

```markdown
![Image Title](https://url-to-image)
```

Dann sollten die Bilder angezeigt werden, wenn Du auf die Registerkarte <kcd>Preview</ kcd> klickst.

Du kannst bei Bedarf auch Diagramme, Grafiken oder Visualisierungen hinzufügen.

Du kannst sogar relevante YouTube-Videos und interaktive [REPL.it] (https://repl.it/) -Code-Editoren einbetten.

Verwende keine Emojis oder Emoticons im Guide. freeCodeCamp hat eine globale Gemeinschaft, und die kulturelle Bedeutung eines Emoji oder Emoticons kann auf der ganzen Welt unterschiedlich sein. Emojis können auch auf verschiedenen Systemen unterschiedlich dargestellt werden.

## Attributions

Um das Plagiatpotenzial zu minimieren und die Integrität in diesem Leitfaden zu wahren, ist es wichtig die Quellen anzugeben.

Jedes Material, das direkt aus dem Quellenmaterial zitiert oder verwendet wird, sollte in Anführungszeichen eingeschlossen und angemessen zitiert werden. Material, das kein direktes Zitat ist, aber immer noch von einer anderen Ressource paraphrasiert wird, sollte ebenfalls zitiert werden.

Du kannst hochgestellte Zahlen erstellen, um Inhalte zu markieren, die mit `<sup></sup>` Tags zitiert werden.

Zum Beispiel: <sup>1</sup>

1. freeCodeCamp - Attributions

Platziere dann am Ende Ihres Artikels eine

```markdown
### Quellen
```

Überschrift und füge alle Deine Zitate ein, die nummeriert werden, und mit Deinen Quellen übereinzustimmen.

Ein Beispiel ist unten hervorgehoben.

```markdown
Hier sind einige Inhalte, die zitiert werden sollten.<sup>1</sup>

Und hier ist noch mehr, dass aus einer anderen Quelle zitiert werden sollte.<sup>2</sup>

### Quellen

1. [Doe, John. "Authoring Words." *WikiCoder*. January 1, 1970. Accessed: October 20, 2017](#)
2. [Purdue OWL Staff. "MLA Works Cited: Electronic Sources." *Purdue Online Writing Lab.* October 12, 2017. Accessed: October 20, 2017.](https://owl.english.purdue.edu/owl/resource/747/08/)
```

Schau Dir den Purdue-Link oben an, um zu sehen, wie man Quellen im Internet richtig zitiert (sie zeigen sogar, wie man Tweets zitiert!).

Normalerweise hat eine Quellenangabe eine Struktur wie die folgende:

> Autor Nachname, Autor Vorname. "Artikelüberschrift." * Veröffentlichung. * Herausgeber. Veröffentlichungsdatum. Datum zugegriffen

Wenn Du keinen Autor oder kein Veröffentlichungsdatum finden kannst, was üblich ist, lass diese einfach weg.

Die Verwendung von richtigen Zitaten wird nicht nur den Leitfaden seriös halten, sondern diese Zitate und Links werden auch wertvolle Ressourcen bereitstellen, falls der Leser mehr über das Thema erfahren möchte.

Beachte auch, dass Fälle von plattem Plagiat entweder entfernt werden oder die Pull-Anforderungen abgelehnt werden und der Benutzer eine Warnung erhält.

Lies dir hierzu ausserdem freeCodeCamp's [Academic Honesty Policy](https://www.freecodecamp.org/academic-honesty) durch, before du einen Beitrag erstellst.

## Ressourcen

Wenn es andere Guide-Ressourcen gibt, von denen Du denkst, dass Camper davon profitieren würden, füge sie unten im Abschnitt "Ressourcen" mit einer Liste mit Aufzählungszeichen hinzu.

```markdown
### Ressourcen

- [Eine neue Ressource](#link)
```

## Formatierung

Verwende doppelte Anführungszeichen wenn notwendig.

Formatiere Sprachschlüsselwörter als Code - dies geschieht mit dem Backtick (auf der linken Seite der "y" -Taste auf einer DE-Tastatur) im GitHub Markdown. Du solltest beispielsweise Ticks um HTML-Tag-Namen oder CSS-Eigenschaftsnamen setzten.

Verwende das Oxford-Komma, wenn möglich (dass ist das Komma, das nach dem vorletzten Element in einer Liste von drei oder mehr Elementen vor 'und' oder 'oder' verwendet wird. Beispielsweise einem italienischen Maler, Bildhauer und Architekten). Es macht Dinge einfacher, klarer und schöner zu lesen.

## Technisches Schreiben

Technisches Schreiben oder die Literatur von Wissenschaft und Technologie ist schwer.

Du musst ein technisches (in der Regel abstraktes) Thema verwenden und es klar, genau und objektiv erklären.

Du wirst wahrscheinlich mehrere Runden Korrekturlesen und Editieren durchlaufen, bevor Du mit dem Ergebnis zufrieden bist.

## Gliederung

Bevor Du mit dem Schreiben beginnst, erstelle eine Gliederung des Themas und denke über die Codierungsbeispiele nach, die Du verwenden wirst (falls zutreffend).

Dies wird Dir helfen, Deine Gedanken zu organisieren und den Schreibprozess zu vereinfachen.

## Einleitung

Der Einleitungsteil sollte nur 1-2 Sätze lang sein und eine einfache Erklärung des Hauptthemas sein. Es sollte die Verwendung von Links zu anderen Guide-Artikeln einschränken, da diese ablenken können.

## Inhalt

Absätze kurz halten (ca. 1-4 Sätze). Menschen lesen mit größerer Wahrscheinlichkeit mehrere kurze Absätze statt einer Textwand.

## Klarheit

Artikel sollten mit kurzen, klaren Sätzen geschrieben werden und so wenig Jargon wie nötig verwenden.

Alle Fachbegriffe sollten sofort in normalem Deutsch definiert werden.

## Stimme

Verwende eine aktive Stimme anstelle von passiver Stimme. Im Allgemeinen ist es ein stärkerer und direkterer Weg, ein Thema zu kommunizieren. Zum Beispiel:

### Passiv

Die for-Schleife in JavaScript wird von Programmierern verwendet, um ...

### Aktiv

Programmierer verwenden die `for`-Schleife in JavaScript, um ...

## Perspektive

Texte sollten in einem Gesprächston geschrieben werden - vorzugsweise per Du

Auf diese Weise scheinen der Text und die Anweisungen direkt mit dem Camper zu sprechen, der es liest.

Versuch, die erste Person ("Ich", "Wir", "Lass uns" und "Uns") zu vermeiden.

## Abkürzungen

Wenn Du einen Begriff in Ihrem Artikel abkürzen möchten, schreibe ihn zuerst vollständig aus und setze dann die Abkürzung in Klammern.

Zum Beispiel, "In der Informatik ist ein abstrakter Syntaxbaum (englisch abstract syntax tree, AST) ..."`

## Eigennamen

Eigennamen sollten die korrekte Großschreibung verwenden, wenn möglich. Im Folgenden findest Du eine Liste von Wörtern, wie sie in den Guide-Artikeln erscheinen sollten.

- JavaScript (Großbuchstaben in "J" und "S" und keine Abkürzungen)
- Node.js

Front-End-Entwicklung (Adjektivform mit einem Bindestrich) ist, wenn Sie am Frontend arbeiten (Nomenform ohne Bindestrich). Das gleiche gilt für Back-End, Full-Stack und viele andere zusammengesetzte Begriffe.

## Drittanbieter-Tools

Um Grammatik und Rechtschreibung zu überprüfen, empfehlen wir eine App wie [Grammarly - für EN](https://grammarly.com) oder eine eingebaute Erweiterung / Plugin, die dies in Deinem Texteditor überprüft.

- [VS Code](https://code.visualstudio.com/) - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Sublime Text 3](https://www.sublimetext.com/docs/3/spell_checking.html)

Um Deinen Schreibstil zu überprüfen, empfehlen wir die [Hemingway App - für EN](http://www.hemingwayapp.com/).

Es ist nichts Magisches an diesem einfachen Tool, aber es erkennt automatisch weit verbreitete Style-Probleme:

- passive Stimme
- unnötige Adverbien
- Wörter, die häufigere Entsprechungen haben

Die Hemingway App weist Deinem Geschriebenen eine "Klassenstufe" zu.

Du solltest eine Klassenstufe von 6 anstreben.

Ein anderes verfügbares Werkzeug ist das [De-Jargonizer](http://scienceandpublic.com/), ursprünglich für die wissenschaftliche Kommunikation gedacht, könnte aber helfen, überspezialisierte Formulierungen zu vermeiden.

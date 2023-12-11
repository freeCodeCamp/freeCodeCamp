# Wie man an Programmieraufgaben arbeitet

Unser Ziel ist es, ein unterhaltsames und voll interaktives Lernerlebnis zu entwickeln.

Sich interaktive Programmieraufgaben auszudenken ist schwierig. Es wäre viel einfacher, eine ausführliche Erklärung zu schreiben oder ein Video-Tutorial zu erstellen. Aber für unseren Hauptstudienplan bleiben wir bei dem, was für die meisten Menschen am besten funktioniert - ein vollständig interaktives, videospielähnliches Erlebnis.

Wir wollen, dass die Teilnehmer einen Flow-Zustand erreichen. Wir wollen, dass sie in Schwung kommen und so schnell wie möglich Fortschritte in unserem Studienplan machen. We want them to go into the projects with confidence and gain wide exposure to programming concepts.

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

# --assignments--

This will show a checkbox that campers have to check before completing a challenge

---

This will show another checkbox that campers have to check before completing a challenge

# --question--

These fields are currently used for the multiple-choice Python challenges.

## --text--

The question text goes here.

## --answers--

Answer 1

### --feedback--

This will be shown as feedback when campers guess this answer

---

Answer 2

---

More answers

## --video-solution--

The number for the correct answer goes here.

# --fillInTheBlank--

These are for the English curriculum challenges.

## --sentence--

Sentence to be shown with with blanks that campers have to fill in. Example:

`Hello, You _ the new graphic designer, _?`

The two underscores will show up as blanks. The sentence must be surrounded in backticks.

## --blanks--

The solution for the first blank in the sentence above. Example:

`are`

### --feedback--

Feedback shown when campers input the wrong solution for this blank.

---

Solution for the second blank. Example:

`right`

If no feedback is here, a generic "wrong answer" message will be shown.
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

The result is a new id, for example, `5a474d78df58bafeb3535d34` above.

Once you have your id, put it into the markdown file as the `id` field at the top, e.g.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Aufgabentitel
```

## Aufgaben benennen

Naming things is hard. We've made it easier by imposing some constraints.

All challenge titles should be explicit and should follow this pattern:

\[verb\]\[object clause\]

Here are some example challenge names:

- Verwende die Uhrzeiger-Notation, um das Padding eines Elements festzulegen
- Arrays mit .reduce komprimieren
- Verwende die Klammer-Notation, um das erste Zeichen in einem String zu finden

## Aufgabenbeschreibungen/ Instruktionen

Sentences should be clear and concise with minimal jargon. If used, jargon should be immediately defined in plain English.

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs than a wall of text.

Use american english, e.g., use `labeled` instead of `labelled`.

Challenge text should use the second person ("you") to help to give it a conversational tone. This way the text and instructions seem to speak directly to the camper working through the challenge. Try to avoid using the first person ("I", "we", "let's", and "us").

Don't use outbound links. These interrupt the flow. Campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's Guide-related article.

You can add diagrams if necessary.

Don't use emojis or emoticons in challenges. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in the challenges.

- JavaScript (Großbuchstaben bei "J" und "S" und keine Abkürzungen)
- Node.js
- Obwohl sie manchmal ungenau sind, sollten die nicht mit Bindestrichen versehenen Formen von "Back-End" und "Front-End" verwendet werden, da sie weiter verbreitet sind.

### The 2-minute rule

Each challenge should be solvable within 120 seconds by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions/instructions understand the seeded code, write their code and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:

- vereinfache die Aufgabe, oder
- Teile die Aufgabe in zwei Aufgaben auf.

The 2-minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straightforward.

We track how long it takes for campers to solve challenges and use this information to identify challenges that need to be simplified or split.

### Modularity

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name.

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

### Formatting challenge text

Here are specific formatting guidelines for challenge text and examples:

- Sprachliche Schlüsselwörter stehen in `` \` `` Backticks. Zum Beispiel HTML-Tag-Namen oder CSS-Eigenschaftsnamen.
- Verweise auf Codeteile (d. h. Funktions-, Methoden- oder Variablennamen) sollten in `` \` ``-Backticks eingeschlossen werden. Siehe untenstehendes Beispiel:

```md
Verwende `parseInt`, um die Variable `realNumber` in eine Integerzahl umzuwandeln.
```

- Verweise auf Dateinamen und Pfadverzeichnisse (z. B. `package.json`, `src/components`) sollten in `` \` ``-Backticks eingeschlossen werden.
- Mehrzeiligen Codeblöcken **muss eine Leerzeile vorangestellt werden**. Die nächste Zeile muss mit drei Backticks beginnen, unmittelbar gefolgt von einer der [unterstützten Sprachen](https://prismjs.com/#supported-languages). To complete the code block, you must start a new line that only has three backticks and **another empty line**. Siehe untenstehendes Beispiel:
- Whitespace ist in Markdown wichtig, deshalb empfehlen wir, ihn in deinem Editor sichtbar zu machen.

**Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.

The following is an example of code:

````md
```{Sprache}

[HIER DEIN CODE]

````
````

- Zusätzliche Informationen in Form einer Anmerkung sollten von Leerzeilen umgeben sein und wie folgt formatiert werden: "**Note:** Rest des Anmerkungstextes...".
- Wenn mehrere Notizen erforderlich sind, listest du alle Notizen in separaten Sätzen auf und verwendest das Format: **Notes:** Erster Text der Notiz. Second note text.`
- Use single quotes where applicable

**Note:** The equivalent _Markdown_ should be used in place of _HTML_ tags.

## Tests schreiben

Aufgaben sollten so viele Tests enthalten, wie nötig sind, um zu überprüfen, ob ein Teilnehmer ein Konzept verstanden hat.

Unser Ziel ist es, den einzelnen Aspekt der Aufgabe zu vermitteln und zu prüfen, ob die Teilnehmer/innen diesen Aspekt verstanden haben.

Aufgabentests können die Assertion-Bibliotheken von Node.js und Chai.js nutzen. Außerdem kann bei Bedarf auf den vom Benutzer erstellten Code in der Variable `code` zugegriffen werden. Zusätzlich stellt das Objekt `__helpers` mehrere Funktionen zur Verfügung, die das Schreiben von Tests vereinfachen. The available functions are defined in the [curriculum-helpers](https://github.com/freeCodeCamp/curriculum-helpers/blob/main/lib/index.ts) repo.

## Formatting Seed Code

Here are specific formatting guidelines for the challenge seed code:

- Use two spaces to indent
- JavaScript statements end with a semicolon
- Use double quotes where applicable

### Seed Code Comments

We have a [comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) that contains the only comments that can be used within the seed code. Die Groß- und Kleinschreibung und die Abstände des Kommentarwörterbuchs müssen eingehalten werden. Das Kommentarwörterbuch sollte nicht ohne vorherige Absprache mit dem Entwicklungsteam erweitert werden.

Die verwendeten Kommentare sollten ein Leerzeichen zwischen den Kommentarzeichen und dem eigentlichen Kommentar enthalten. Im Allgemeinen sollten Kommentare sparsam verwendet werden. Überlege dir immer, ob du die Beschreibung oder die Instruktionen einer Aufgabe umschreiben kannst, wenn du dadurch einen Kommentar im Startcode vermeiden kannst.

Example of a valid single-line JavaScript comment:

```js
// Only change code below this line
````

Example of a valid CSS comment:

```css
/* Only change code above this line */
```

If a challenge only has a single place where code changes are needed, please use the comments in the following example to instruct the user where changes should be made.

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

If a challenge has multiple places where the user is expected to change code (i.e. the React challenges)

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

### Translation of Seed Code Comments

There are separate comment dictionaries for each language. The [English version of the comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) is the basis for the translations found in the corresponding non-English versions of the files. The non-English version of the Chinese comment dictionary would be located at `/curriculum/dictionaries/chinese/comments.json`. Each dictionary consists of an array of objects with a unique `id` property and a `text` property. Only the `text` should be modified to encompass the translation of the corresponding English comment.

Some comments may contain a word/phrase that should not be translated. For example, variable names or proper library names like "React" should not be translated. See the comment below as an example. The word `myGlobal` should not be translated.

```text
Deklariere die Variable myGlobal unterhalb dieser Zeile
```

> [!NOTE]
> 
> Wir arbeiten an einer Integration, die die Arbeit an i18n für das Kommentarwörterbuch ermöglicht.

## Hinweise und Lösungen

Each challenge has a `Get a Hint` button, so a user can access any hints/solutions which have been created for the challenge. Curriculum hints/solutions topics are located on [our forum](https://forum.freecodecamp.org/c/guide) under the `Guide` category.

If you find a problem with an existing challenge's hints/solutions topic, you can make suggestions in the [contributors category](https://forum.freecodecamp.org/c/contributors) on the forum. Moderators and users with trust level 3 will review the comments and decide whether or not to include the changes in the corresponding hint/solutions topic.

### Adding new Challenge hints/solutions Topics

Take the following steps when adding a new challenge hints/solutions-related topic.

1. Beginne mit den gleichen Schritten wie beim Erstellen eines neuen Themas, aber schau dir die nächsten Schritte zum Erstellen des Titels an.
2. Der Titel des Themas sollte mit `freeCodeCamp Challenge Guide:` beginnen und mit dem eigentlichen Titel der Studienplanaufgabe verkettet werden. Wenn die Aufgabe zum Beispiel "`Chunky Monkey`" heißt, würde der Titel des Themas lauten "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` sollte der Eigentümer dieser Themen/Posts sein. Du musst also einen Admin bitten, den Eigentümer des Hauptposts auf `camperbot` zu ändern.
4. Sobald das neue Thema erstellt ist, wird eine Forenthemen-ID erstellt. Sie befindet sich am Ende der URL des Forenthemas. Diese ID muss dem Frontmatter der Studienplanaufgabendatei über den normalen Pull-Request-Prozess hinzugefügt werden, damit der `Erhalte einen Tipp` Button auf das Thema verlinkt.

### Guidelines for Content of Hints and Solutions Topics

When proposing a solution for a curriculum challenge-related Guide topic, the full code must be added. This includes all the original seed code plus any changes needed to pass all the challenge tests. The following template should be used when creating new hints/solutions topics:

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

2. To test single challenge, you can use it challenge id with following command

```
FCC_CHALLENGE_ID=646cf6cbca98e258da65c979 pnpm run test:curriculum
```

3. You can also test a block or a superblock of challenges with these commands

```
FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum
```

```
FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum
```

You are also able to test challenges by title by performing the following steps:

1. Switch to the `curriculum` directory:

   ```
   cd curriculum
   ```

2. Run the following for each challenge file for which you have changed (replacing `challenge-title-goes-here` with the full title of the challenge):

   ```
   pnpm run test -- -g challenge-title-goes-here
   ```

> [!TIP]
> You can set the environment variable `LOCALE` in the `.env` to the language of the challenge(s) you need to test.
>
> The currently accepted values are `english` and `chinese`, with `english` being set by default.

## Proposing a Pull Request (PR)

After you've committed your changes, check here for [how to open a Pull Request](how-to-open-a-pull-request.md).

## Useful Links

Creating and Editing Challenges:

1. [Challenge types](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - what the numeric challenge type values mean (enum).

2. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - a video following [Ethan Arrowood](https://twitter.com/ArrowoodTech) as he contributes to the old version of the curriculum.

## Helper Scripts

> [!NOTE]
> If you are working with the step-based challenges, refer to the [Work on Practice Projects](how-to-work-on-practice-projects.md) section.

There are a few helper scripts that can be used to manage the challenges in a block. Note that these commands should all be run in the block directory. For example:

```bash
cd curriculum/challenges/english/02-javascript-algorithms-and-data-structures/basic-algorithm-scripting
```

### Add New Challenge

To add a new challenge at the end of a block, call the script:

```bash
pnpm run create-next-challenge
```

This will prompt you for the challenge information and create the challenge file, updating the `meta.json` file with the new challenge information.

### Delete a Challenge

To delete a challenge, call the script:

```bash
pnpm run delete-challenge
```

This will prompt you to select which challenge should be deleted, then delete the file and update the `meta.json` file to remove the challenge from the order.

### Insert a Challenge

To insert a challenge before an existing challenge, call the script:

```bash
pnpm run insert-challenge
```

This will prompt you for the challenge information, then for the challenge to insert before. For example, if your choices are:

```bash
a
b
c
```

If you choose `b`, your new order will be:

```bash
a
new challenge
b
c
```

### Update Challenge Order

If you need to manually re-order the challenges, call the script:

```bash
pnpm run update-challenge-order
```

This will take you through an interactive process to select the order of the challenges.

## Troubleshooting

### Infinite Loop Detected

If you see the following error in the console while previewing a challenge:

```text
Potential infinite loop detected on line <number>...
```

This means that the loop-protect plugin has found a long-running loop or recursive function. If your challenge needs to do that (e.g. it contains an event loop that is supposed to run indefinitely), then you can prevent the plugin from being used in the preview. To do so, add `disableLoopProtectPreview: true` to the block's `meta.json` file.

If your tests are computationally intensive, then you may see this error when they run. If this happens then you can add `disableLoopProtectTests: true` to the block's `meta.json` file.

It's not typically necessary to have both set to true, so only set them as needed.

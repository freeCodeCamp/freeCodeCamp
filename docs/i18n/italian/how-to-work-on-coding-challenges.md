# Come lavorare sulle sfide di programmazione

Il nostro obiettivo è quello di sviluppare un'esperienza di apprendimento interattiva divertente e chiara.

Progettare le sfide di programmazione interattiva è difficile. Sarebbe molto più facile scrivere una spiegazione lunga o creare un video tutorial. Ma per il nostro curriculum di base, ci atteniamo a ciò che funziona meglio per la maggior parte delle persone - un'esperienza completamente interattiva, come il videogioco.

Vogliamo che i camper raggiungano uno stato di flusso. Vogliamo che costruiscano slancio e sfondino attraverso il nostro curriculum con il minor numero di intoppi possibile. Vogliamo che entrino nei progetti con fiducia e che si espongano ampiamente ai concetti di programmazione.

Nota che per la versione 7.0 del curriculum freeCodeCamp, ci stiamo muovendo verso [un modello interamente orientato al progetto con molta più ripetizione](https://www.freecodecamp.org/news/python-curriculum-is-live/).

La creazione di queste sfide richiede un'immensa creatività e attenzione ai dettagli. C'è un sacco di aiuto disponibile. Avrai il supporto di un intero team di collaboratori a cui puoi rimbalzare le idee e mostrare le tue sfide.

E come sempre, poni liberamente le tue domande [nella categoria 'Contributors' sul nostro forum](https://forum.freecodecamp.org/c/contributors) o [nella chat room per i contributori](https://chat.freecodecamp.org/channel/contributors).

Con il tuo aiuto possiamo creare un curriculum interattivo di programmazione che aiuterà milioni di persone a imparare a programmare per gli anni a venire.

Il contenuto di ogni sfida è immagazzinato nel suo file markdown. Questo file markdown viene successivamente convertito in HTML utilizzando i nostri strumenti per creare pagine web interattive.

Puoi trovare tutto il contenuto del curriculum di freeCodeCamp nella directory [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges).

## Imposta lo strumento per il curriculum

Prima di lavorare sul curriculum, è necessario impostare alcuni strumenti per aiutarti a testare le modifiche. È possibile utilizzare qualsiasi opzione delle seguenti:

- È possibile [impostare freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md). Questo è **altamente raccomandato** per contributi regolari/ripetuti. Questa configurazione ti permette di lavorare e testare le modifiche.
- Usa Gitpod, un ambiente di sviluppo online gratuito. Facendo clic sul pulsante qui sotto si avvierà un ambiente di sviluppo ready-to-code per freeCodeCamp nel tuo browser. Ci vogliono solo pochi minuti.

  [![Apri in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Modifica i file sull'interfaccia di GitHub facendo clic sull'icona della matita per il file corrispondente. Anche se questo è il modo più veloce, **non è raccomandato**, perché non sarai in grado di testare le modifiche su GitHub. Se i nostri manutentori concluderanno che i cambiamenti che hai fatto devono essere testati localmente dovrai seguire i metodi illustrati sopra.

### Come lavorare sui progetti di pratica

I progetti di pratica hanno degli strumenti addizionali per aiutare a creare i nuovi progetti e gli step. Per saperne di più, leggi [questa documentazione](how-to-work-on-practice-projects.md)

## Template delle sfide

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

Testo di itroduzione alla sfida, in markdown

# --hints--

I test da eseguire sul codice scritto dall'utente, in coppie di testo markdown e blocco di codice col codice del test.

```js
Codice per test uno
```

If you want dynamic output based on the user's code, --fcc-expected-- and --fcc-actual-- will be replaced with the expected and actual values of the test's assertion. Take care if you have multiple assertions since the first failing assertion will determine the values of --fcc-expected-- and --fcc-actual--.

```js
assert.equal(
  'this will replace --fcc-actual--',
  'this will replace --fcc-expected--'
);
```

# --notes--

Extra information for a challenge, in markdown

# --seed--

## --before-user-code--

```lang
Codice eseguito prima del codice dell'utente.
```

## --after-user-code--

```lang
Codice eseguito dopo il codice dell'utente, ma prima dei test
```

## --seed-contents--

Boilerplate code to render to the editor. This section should only contain code inside backticks, like the following:

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

Solutions are used for the CI tests to ensure that changes to the hints will still pass as intended

```js
// prima soluzione - il linguaggio deve combaciare con il seed.
```

---

```js
// seconda soluzione - quindi se il seed è scritto in HTML...
```

---

```js
// terza soluzione ecc. - La tua soluzione deve essere in HTML.
```

# --question--

These fields are currently used for the multiple-choice Python challenges.

## --text--

The question text goes here.

## --answers--

Answer 1

---

Answer 2

---

More answers

## --video-solution--

The number for the correct answer goes here.
````

> [!NOTE]
>
> 1. Nella sezione sopra, esempi di `lang` sono:
>
> - `html` - HTML/CSS
> - `js` - JavaScript
> - `jsx` - JSX

## Numerare le sfide

Ogni sfida ha bisogno di un `id`. Se non ne specifichi uno, MongoDB creerà un nuovo id casuale salvando i dati; ma non vogliamo che questo accada, visto che vogliamo che gli id delle sfide siano consistenti su tutti i diversi ambienti (staging, production, diversi sviluppatori, ecc.).

Per generarne un nuovo in una shell (assumendo che MongoDB sia eseguito separatamente):

1. Esegui il comando `mongo`.
2. Esegui il comando `ObjectId()`.

Per esempio:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

The result is a new id, for example `5a474d78df58bafeb3535d34` above.

Once you have your id, put it into the markdown file as the `id` field at the top, e.g.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## Dare un nome alle sfide

Naming things is hard. We've made it easier by imposing some constraints.

All challenge titles should be explicit and should follow this pattern:

\[verb\]\[object clause\]

Here are some example challenge names:

- Usare la notazione in senso orario per specificare il padding di un elemento
- Condensare array usando .reduce
- Usare la notazione a parentesi per trovare il primo carattere in una stringa

## Istruzioni e descrizione di una sfida

Sentences should be clear and concise with minimal jargon. If used, jargon should be immediately defined in plain English.

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs than a wall of text.

Challenge text should use the second person ("you") to help to give it a conversational tone. This way the text and instructions seem to speak directly to the camper working through the challenge. Try to avoid using the first person ("I", "we", "let's", and "us").

Don't use outbound links. These interrupt the flow. Campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's Guide-related article.

You can add diagrams if necessary.

Don't use emojis or emoticons in challenges. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in the challenges.

- JavaScript (lettere maiuscole in "J" e "S" e senza abbreviazioni)
- Node.js
- Anche se a volte inaccurate, le forme senza trattino di "back end" e "front end" dovrebbero essere usate, poiché sono le forme più comuni.

### La regola dei due minuti

Each challenge should be solvable within 120 seconds by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions/instructions understand the seeded code, write their code and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:

- Semplificare la sfida, o
- Dividere la sfida in due sfide.

The 2-minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straight-forward.

We track how long it takes for campers to solve changes and use this information to identify challenges that need to be simplified or split.

### Modularità

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name.

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

### Formattare il testo delle sfide

Here are specific formatting guidelines for challenge text and examples:

- Le parole chiave del linguaggio vanno in `` \` `` backtick. Per esempio i nomi dei tag HTML o i nomi delle proprietà CSS.
- Riferimenti a parti di codice (come nomi di funzioni, metodi o variabili) dovrebbero essere in `` \` `` backtick. Vedi gli esempi seguenti:

```md
Usa `parseInt` per convertire la variabile `realNumber` a un numero intero.
```

- I riferimenti a nomi di file o percorsi di cartelle (come `package.json`, `src/components`) dovrebbero essere in `` \` `` backtick.
- I blocchi di codice multi-riga **devono essere preceduti da una riga vuota**. La riga successiva deve iniziare con tre backticks seguiti immediatamente da uno dei [linguaggi supportati](https://prismjs.com/#supported-languages). Per completare il blocco di codice devi iniziare una nuova riga, scrivere tre backtick e poi **un'altra riga vuota**. Vedi l'esempio seguente:
- Gli spazi bianchi hanno significato in Markdown, raccomandiamo di renderli visibili nel tuo editor.

**Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.

The following is an example of code:

````md
```{language}

[IL TUO CODICE QUI]

````
````

- Informazioni aggiuntive nella forma di una nota dovrebbero essere circondate da linee vuote, e formattate così: `**Note:** Resto del testo della nota...`
- Se è necessaria più di una nota, elencale in frasi separate usando il formato: `**Notes:** Testo della prima nota. Testo della seconda nota.`
- Usa virgolette singole dove necessario

**Note:** L'equivalente _Markdown_ dovrebbe essere usato invece di tag _HTML_.

## Scrivere i test

Le sfide dovrebbero avere il numero minimo di test per verificare che un camper abbia compreso il concetto della sfida.

Il nostro obbiettivo è comunicare il singolo punto che la sfida sta cercando di insegnare, e testare che abbiano capito il punto.

I test delle sfide possono fare uso delle librerie di asserzioni Node.js e Chai.js. E, se necessario, il codice generato dall'utente può essere acceduto dalla variabile `code`. In aggiunta, l'oggetto `__helpers` mette a disposizione diverse funzioni che semplificano il processo di scrittura dei test. Le funzioni disponibili sono definite in _client/src/utils/curriculum-helpers.ts_.

## Formattare codice di seed

Ecco linee guida specifiche di formattazione per il codice seed delle sfide:

- Usa due spazi per indentare
- Le istruzioni JavaScript finiscono con un punto e virgola
- Usa virgolette doppie dove possibile

### Commenti del codice seed

Abbiamo un [dizionario dei commenti](/curriculum/dictionaries/english/comments.js) che contiene gli unici commenti che possono essere usati nel codice seed. I commenti devono essere usati esattamente in quel modo, ricopiando maiuscole, minuscole, e spazi. Il dizionario dei commenti non deve essere allargato senza previa discussione con il team di sviluppo.

I commenti dovrebbero avere uno spazio tra il carattere del commento e il testo del commento. In generale, i commenti dovrebbero essere usati raramente. Considera sempre la possibilità di riscrivere la descrizione o le istruzioni di una sfida se questo ti permetterebbe di evitare l'uso di un commento nel codice seed.

Esempio di un commento a linea singola in JavaScript:

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

### Traduzione dei commenti nel codice seed

There are separate comment dictionaries for each language. The [English version of the comment dictionary](/curriculum/dictionaries/english/comments.js) is the basis for the translations found in the corresponding non-English versions of the files. The non-English version of the Chinese comment dictionary would be located at `/curriculum/dictionaries/chinese/comments.js`. Each dictionary consists of an array of objects with a unique `id` property and a `text` property. Only the `text` should be modified to encompass the translation of the corresponding English comment.

Some comments may contain a word/phrase that should not be translated. For example, variable names or proper library names like "React" should not be translated. See the comment below as an example. The word `myGlobal` should not be translated.

```text
Declare the myGlobal variable below this line
```

> [!NOTE]
> 
> Stiamo lavorando su un'integrazione per rendere possibile lavorare su i18n per il dizionario dei commenti.

## Suggerimenti e soluzioni

Each challenge has a `Get a Hint` button, so a user can access any hints/solutions which have been created for the challenge. Curriculum hints/solutions topics are located on [our forum](https://forum.freecodecamp.org/c/guide) under the `Guide` category.

If you find a problem with an existing challenge's hints/solutions topic, you can make suggestions in the [contributors category](https://forum.freecodecamp.org/c/contributors) on the forum. Moderators and users with trust level 3 will review the comments and decide whether or not to include the changes in the corresponding hint/solutions topic.

### Aggiungere nuovi topic per i suggerimenti e le soluzioni delle sfide

Take the following steps when adding a new challenge hints/solutions related topic.

1. Inizia seguendo gli stessi passaggi per creare un nuovo argomento, ma rivedi il successivo per creare il titolo.
2. Il titolo dell'argomento dovrebbe iniziare con `freeCodeCamp Challenge Guide:` concatenato con il titolo effettivo della sfida del curriculum. Ad esempio, se la sfida è chiamata "`Chunky Monkey`", il titolo dell'argomento sarebbe "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` dovrebbe essere il proprietario di questi argomenti/post, quindi dovrai chiedere a un amministratore di cambiare la proprietà del post principale a `camperbot`.
4. Una volta creato il nuovo argomento, verrà creato un id del topic nel forum. Esso si trova alla fine dell'URL dell'argomento del forum. Questo id deve essere aggiunto alla parte frontale del file di sfida del curriculum tramite il normale processo di pull request per il pulsante `Ottieni un suggerimento` in modo da collegarlo all'argomento.

### Linee guida per il contenuto dei topic dei suggerimenti e delle soluzioni

When proposing a solution for a curriculum challenge related Guide topic, the full code must be added. This includes all the original seed code plus any changes needed to pass all the challenge tests. The following template should be used when creating new hints/solutions topics:

````md
# [Qui il nome della sfida]

---

## Spiegazione del problema

Qui un riassunto di cosa deve essere fatto senza includere semplicemente le istruzioni e la descrizione della sfida. [This is an optional section]

#### Relevant Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Hints

### Hint 1

[Suggerimento 1 va qui]

### Hint 2

[Suggerimento va qui]

---

## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function myFunc() {
  console.log('Hello World!');
}
````

#### Spiegazione Del Codice

- La spiegazione del codice va qui
- La spiegazione del codice va qui

#### Collegamenti utili

- [Testo del collegamento](link_url_goes_here)
- [Testo Collegamento](link_url_goes_here)

</details>
````

## Testare le sfide

Prima di [creare una pull request](how-to-open-a-pull-request.md), devi verificare che i cambiamenti che hai fatto non causino inavvertitamente problemi con la sfida.

1. Per testare tutte le sfide esegui il comando seguente nella directory root

````
npm run test:curriculum
```

2. Puoi anche testare un blocco o un superblocco di sfide con questi comandi

```
npm run test:curriculum --block='Basic HTML and HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

Puoi anche testare una sfida singola con i seguenti step:

1. Spostati nella cartella `curriculum`:

   ```
   cd curriculum
   ```

2. Run the following for each challenge file for which you have changed (replacing `challenge-title-goes-here` with the full title of the challenge):

   ```
   npm run test -- -g challenge-title-goes-here ```

Once you have verified that each challenge you've worked on passes the tests, [please create a pull request](how-to-open-a-pull-request.md).

> [!TIP] Puoi impostare la variabile d'ambiente  `LOCALE` nel file `.env` alla lingua usata nelle sfide che devi testare.
> 
> I valori attualmente accettati sono `english` (inglese) e `chinese` (cinese), con `english` come valore di default.

### Link utili

Creating and Editing Challenges:

1. [Tipo della sfida (challenge type)](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - cosa significa il tipo di sfida numerico (enum).

2. [Contribuire a FreeCodeCamp - Scrivere Test  per le sfide ES6](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - un video che segue [Ethan Arrowood](https://twitter.com/ArrowoodTech) in quanto contributore della vecchia versione del curriculum.

# Come lavorare sulle sfide di programmazione

Il nostro obiettivo è quello di sviluppare un'esperienza di apprendimento interattiva divertente e chiara.

Progettare le sfide di programmazione interattiva è difficile. Sarebbe molto più facile scrivere una spiegazione lunga o creare un video tutorial. Ma per il nostro curriculum di base, ci atteniamo a ciò che funziona meglio per la maggior parte delle persone - un'esperienza completamente interattiva, come il videogioco.

Vogliamo che i camper raggiungano uno stato di flusso. Vogliamo che costruiscano slancio e sfondino attraverso il nostro curriculum con il minor numero di intoppi possibile. Vogliamo che entrino nei progetti con fiducia e che si espongano ampiamente ai concetti di programmazione.

Nota che per la versione 7.0 del curriculum freeCodeCamp, ci stiamo muovendo verso [un modello interamente orientato al progetto con molta più ripetizione](https://www.freecodecamp.org/news/python-curriculum-is-live/).

La creazione di queste sfide richiede un'immensa creatività e attenzione ai dettagli. C'è un sacco di aiuto disponibile. Avrai il supporto di un intero team di collaboratori a cui puoi rimbalzare le idee e mostrare le tue sfide.

E come sempre, poni liberamente le tue domande [nella categoria 'Contributors' sul nostro forum](https://forum.freecodecamp.org/c/contributors) o [nella chat room per i contributori](https://discord.gg/PRyKn3Vbay).

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

Se vuoi output dinamico basato sul codice dell'utente --fcc-expected-- e --fcc-actual-- saranno sostituiti con i valori aspettati e i valori veri dell'asserzione del test. Fai attenzione se hai più di una asserzione, visto che la prima asserzione fallita determinerà i valori di --fcc-expected-- e fcc-actual--.

```js
assert.equal(
  'this will replace --fcc-actual--',
  'this will replace --fcc-expected--'
);
```

# --notes--

Ulteriori informazioni per una sfida, in markdown

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

Codice di partenza da far apparire nell'editor. Questa sezione deve contenere solo codice in backtick, come il seguente:

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

Le soluzioni sono usate dai test CI per assicurarsi che i cambiamenti alla sezione hints facciano eseguire i test correttamente

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

Questi campi sono usati attualmente per le domande a scelta multipla nelle sfide di Python.

## --text--

Il testo della domanda va qui.

## --answers--

Risposta 1

---

Risposta 2

---

Altre risposte

## --video-solution--

Il numero della risposta corretta va qui.
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

Il risultato è un nuovo id, per esempio sopra `5a474d78df58bafeb3535d34`.

Una volta che hai il tuo id, mettilo nel file markdown nel campo `id` in cima, per esempio

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## Dare un nome alle sfide

Dare un nome alle cose è difficile. Lo abbiamo reso più semplice dando dei limiti.

Tutti i titoli delle sfide devono essere espliciti e seguire questo schema:

\[verb\]\[clausola oggetto\]

Ecco alcuni esempi di nomi di sfide:

- Usare la notazione in senso orario per specificare il padding di un elemento
- Condensare array usando .reduce
- Usare la notazione a parentesi per trovare il primo carattere in una stringa

## Istruzioni e descrizione di una sfida

Le frasi dovrebbero essere chiare e concise con minimo utilizzo di linguaggio tecnico. Se il linguaggio tecnico è usato, deve essere subito seguito da una definizione in linguaggio comune.

I paragrafi devono essere corti (1-4 frasi circa). È più probabile che vengano lette alcune frasi corte invece di un muro di testo.

Il testo della sfida dovrebbe usare la seconda persona ("tu") per aiutare ad avere un tono colloquiale. In questo modo il testo e le istruzioni sembrano parlare direttamente al camper che lavora sulle sfide. Cerca di evitare la prima persona ("io", "noi", "facciamo").

Non usare link a siti esterni. Questi interrompono il flusso. I camper non dovrebbero mai cercare qualcosa su Google durante queste sfide. Se ci sono risorse di cui pensi che il camper possa beneficiare, aggiungile all'articolo della sfida nella guida.

Puoi aggiugere diagrammi se necessario.

Non usare emoji o emoticon nelle sfide. freeCodeCamp ha una comunità globale, e il significato culturare di una emoji o emoticon può essere differente nelle varie parti del mondo. In più, le emoji possono avere un aspetto diverso su diversi sistemi.

I nomi propri dovrebbero usare le maiuscole correttamente quando possibile. Qui sotto trovi una lista di parole come dovrebbero apparire nelle sfide.

- JavaScript (lettere maiuscole in "J" e "S" e senza abbreviazioni)
- Node.js
- Anche se a volte inaccurate, le forme senza trattino di "back end" e "front end" dovrebbero essere usate, poiché sono le forme più comuni.

### La regola dei due minuti

Ogni sfida dovrebbe essere risolvibile entro 120 secondi da un nativo inglese che ha completato tutte le sfide precedenti. Questo include l'ammontare di tempo necessario a leggere le istruzioni, comprendere il codice di partenza, scrivere il loro codice e avere tutti i test superati.

Se servono più di due minuti a completare la sfida hai due possibilità:

- Semplificare la sfida, o
- Dividere la sfida in due sfide.

La regola dei due minuti obbliga te, designer della sfida, a rendere le tue istruzioni concise, il tuo codice seed chiaro, e i tuoi test diretti.

Teniamo traccia di quanto tempo serve agli utenti per risolvere le sfide e usiamo questa informazione per identificare sfide che devono essere semplificate o divise.

### Modularità

Ogni sfida dovrebbe insegnare esattamente un concetto, e quel concetto dovrebbe apparire nel titolo della sfida.

Possiamo rinforzare concetti introdotti in precedenza tramite ripetizione e variazioni, per esempio introducendo gli elementi h1 in una sfida e gli elementi h3 alcune sfide più tardi.

Il nostro obbiettivo è di avere migliaia di sfide da due minuti. Queste possono scorrere insieme e rinforzare concetti già introdotti in precedenza.

### Formattare il testo delle sfide

Ecco le linee guidee di formattazione specifiche per il testo delle sfide e degli esempi:

- Le parole chiave del linguaggio vanno in `` \` `` backtick. Per esempio i nomi dei tag HTML o i nomi delle proprietà CSS.
- Riferimenti a parti di codice (come nomi di funzioni, metodi o variabili) dovrebbero essere in `` \` `` backtick. Vedi gli esempi seguenti:

```md
Usa `parseInt` per convertire la variabile `realNumber` a un numero intero.
```

- I riferimenti a nomi di file o percorsi di cartelle (come `package.json`, `src/components`) dovrebbero essere in `` \` `` backtick.
- I blocchi di codice multi-riga **devono essere preceduti da una riga vuota**. La riga successiva deve iniziare con tre backticks seguiti immediatamente da uno dei [linguaggi supportati](https://prismjs.com/#supported-languages). Per completare il blocco di codice devi iniziare una nuova riga, scrivere tre backtick e poi **un'altra riga vuota**. Vedi l'esempio seguente:
- Gli spazi bianchi hanno significato in Markdown, raccomandiamo di renderli visibili nel tuo editor.

**Nota:** Se devi usare un esempio di codice in YAML, usa `yaml` invece di `yml` per il linguaggio a fianco dei tre backtick.

Il seguente è un esempio di codice:

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

## Formattare codice seed

Ecco linee guida specifiche di formattazione per il codice seed delle sfide:

- Usa due spazi per indentare
- Le istruzioni JavaScript finiscono con un punto e virgola
- Usa virgolette doppie dove possibile

### Commenti del codice seed

Abbiamo un [dizionario dei commenti](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) che contiene gli unici commenti che possono essere usati nel codice seed. I commenti devono essere usati esattamente in quel modo, ricopiando maiuscole, minuscole, e spazi. Il dizionario dei commenti non deve essere allargato senza previa discussione con il team di sviluppo.

I commenti dovrebbero avere uno spazio tra il carattere del commento e il testo del commento. In generale, i commenti dovrebbero essere usati raramente. Considera sempre la possibilità di riscrivere la descrizione o le istruzioni di una sfida se questo ti permetterebbe di evitare l'uso di un commento nel codice seed.

Esempio di un commento a linea singola in JavaScript:

```js
// Only change code below this line
````

Esempio di un commento CSS valido:

```css
/* Only change code above this line */
```

Se la sfida ha un unico punto dove il codice ha bisogno di cambiamenti, per favore usa i commenti nel seguente esempio per istruire l'utente su dove dovrebbe fare i cambiamenti.

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

Se la sfida ha diversi punti dove l'utente deve fare cambiamenti al codice (come in una sfida React)

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

Ci sono directory separate per ogni lingua. La [versione inglese della directory dei commenti](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) è la base per le traduzioni trovate nelle corrispondenti versioni non-inglesi del file. La versione non-inglese della directory dei commenti cinese si trova in `/curriculum/dictionaries/chinese/comments.json`. Ogni directory consiste di un array di oggetti con una proprietà `id` unica e una proprietà `text` che contiene il testo del commento. Solo `text` dovrebbe essere modificato per includere la traduzione del corrispondente commento inglese.

Alcuni commenti potrebbero contenere delle parole o frasi che non devono essere tradotte. Per esempio, nomi di variabili o nomi propri di librerie come "React" non dovrebbero essere tradotti. Vedi il commento seguente come esempio. La parola `myGlobal` non deve essere tradotta.

```text
Declare the myGlobal variable below this line
```

> [!NOTE]
> 
> Stiamo lavorando su un'integrazione per rendere possibile lavorare su i18n per il dizionario dei commenti.

## Suggerimenti e soluzioni

Ogni sfida ha un pulsante `Get a Hint` (Ottieni un suggerimento), cosicché un utente possa avere accesso a suggerimenti e soluzioni che sono stati creati per la sfida. I suggerimenti e le soluzioni del curriculum si trovano nei topic [del nostro forum](https://forum.freecodecamp.org/c/guide) nella categoria `Guide`.

Se trovi un problema con i suggerimenti e le soluzioni delle sfide puoi inviare i tuoi suggerimenti aprendo un topic nella [categoria contributors](https://forum.freecodecamp.org/c/contributors) sul forum. Moderatori e utenti con un livello di fiducia 3 rivedranno i tuoi commenti e decideranno se includere o meno i cambiamenti nel topic corrispondente.

### Aggiungere nuovi topic per i suggerimenti e le soluzioni delle sfide

Segui i seguenti step quando crei un nuovo topic per le soluzioni e i suggerimenti di una sfida.

1. Inizia seguendo gli stessi passaggi per creare un nuovo argomento, ma rivedi il successivo per creare il titolo.
2. Il titolo dell'argomento dovrebbe iniziare con `freeCodeCamp Challenge Guide:` concatenato con il titolo effettivo della sfida del curriculum. Ad esempio, se la sfida è chiamata "`Chunky Monkey`", il titolo dell'argomento sarebbe "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` dovrebbe essere il proprietario di questi argomenti/post, quindi dovrai chiedere a un amministratore di cambiare la proprietà del post principale a `camperbot`.
4. Una volta creato il nuovo argomento, verrà creato un id del topic nel forum. Esso si trova alla fine dell'URL dell'argomento del forum. Questo id deve essere aggiunto alla parte frontale del file di sfida del curriculum tramite il normale processo di pull request per il pulsante `Ottieni un suggerimento` in modo da collegarlo all'argomento.

### Linee guida per il contenuto dei topic dei suggerimenti e delle soluzioni

Quando proponi una soluzione da aggiungere al topic relativo a una sfida, devi includere tutto il codice. Questo include sia il codice seed originale sia i cambiamenti necessari per superare i test. Dovresti usare il seguente template per creare nuovi topic per suggerimenti e soluzioni:

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
pnpm run test:curriculum
```

2. Puoi anche testare un blocco o un superblocco di sfide con questi comandi

```
FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum
```

```
FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum
```

Puoi anche testare una sfida singola con i seguenti step:

1. Spostati nella cartella `curriculum`:

   ```
   cd curriculum
   ```

2. Esegui i seguenti comandi per ogni singolo file in cui hai fatto cambiamenti (rimpiazziando `challenge-title-goes-here`  con il titolo intero della sfida):

   ```
   pnpm run test -- -g titolo-sfida-qui ```

Una volta che avrai verificato che ogni sfida su cui hai lavorato passi i test, [per favore crea una pull request](how-to-open-a-pull-request.md).

> [!TIP] Puoi impostare la variabile d'ambiente  `LOCALE` nel file `.env` alla lingua usata nelle sfide che devi testare.
> 
> I valori attualmente accettati sono `english` (inglese) e `chinese` (cinese), con `english` come valore di default.

### Link utili

Creare e modificare sfide:

1. [Tipo della sfida (challenge type)](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - cosa significa il tipo di sfida numerico (enum).

2. [Contribuire a FreeCodeCamp - Scrivere Test  per le sfide ES6](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - un video che segue [Ethan Arrowood](https://twitter.com/ArrowoodTech) in quanto contributore della vecchia versione del curriculum.

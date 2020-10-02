# Come lavorare sulle sfide della codifica

Il nostro obiettivo è quello di sviluppare un'esperienza di apprendimento interattiva divertente e chiara.

Progettare le sfide di codifica interattiva è difficile. Sarebbe molto più facile scrivere una spiegazione lunga o creare un video tutorial, e c'è un posto per quelli su Medium e YouTube. Tuttavia, per il nostro curriculum di base, ci atteniamo a ciò che funziona meglio per la maggior parte delle persone - un'esperienza completamente interattiva, come il videogioco.

Vogliamo che i camper raggiungano uno stato di flusso. Vogliamo che costruiscano slancio e sfondino attraverso il nostro curriculum con il minor numero di intoppi possibile. Vogliamo che entrino nei progetti con fiducia e che si espongano ampiamente ai concetti di programmazione.

La creazione di queste sfide richiede un'immensa creatività e attenzione ai dettagli. C'è un sacco di aiuto disponibile. Avrai il supporto di un intero team di collaboratori a cui puoi rimbalzare le idee e demo le tue sfide. Rimani attivo nella [sala contributori](https://gitter.im/freecodecamp/contributors) e fai molte domande.

Con il vostro aiuto possiamo progettare un curriculum di programmazione interattivo che aiuterà milioni di persone a imparare a programmare per gli anni a venire.

Il contenuto di ogni sfida viene memorizzato nel proprio file markdown. Questo file markdown viene successivamente convertito in HTML utilizzando i nostri strumenti per creare pagine web interattive.

Puoi trovare tutti i contenuti curriculari di freeCodeCamp.org nella directory [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges).

## Imposta lo strumento per il curriculum

Prima di lavorare sul curriculum, è necessario impostare alcuni strumenti per aiutarti a testare le modifiche. È possibile utilizzare qualsiasi opzione dal sotto:

- È possibile [impostare freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md). Questo è **altamente raccomandato** per contributi regolari/ripetuti. Questa configurazione ti permette di lavorare e testare le modifiche.
- Usa Gitpod, un ambiente dev online gratuito. Facendo clic sul pulsante qui sotto si avvierà un ambiente dev ready-to-code per freeCodeCamp nel tuo browser. Ci vogliono solo pochi minuti.

  [![Apri in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Modificare i file sull'interfaccia di GitHub facendo clic sull'icona della matita per il file corrispondente. Mentre questo è il modo più veloce, è **non raccomandato**, perché non sei in grado di testare le modifiche su GitHub. Se i nostri manutentori concludono che le modifiche apportate devono essere testate localmente, è necessario seguire i metodi sopra invece di nuovo.

## Template Sfida

Di seguito è riportato un modello di come i file markdown sfida assomigliano attualmente.  Per vedere il modello semplificato che adotteremo vedi [sotto](#upcoming-challenge-template).

````md
---
id: Identificatore unico (alfanumerico, MongoDB_id)
title: Challenge Title
challengeType: 0
videoUrl: 'url of video spiegation'
---

## Descrizione

<section id='description'>
Una descrizione della sfida e di ciò che è necessario per passare
</section>

## Istruzioni

<section id='instructions'>
Istruzioni su cosa è necessario fare.
</section>

## Test

<section id='tests'>

```yml
test:
  - testo: Dovrebbe restituire "foo"
    testStringa di test: 'Una funzione stringified possibilmente utilizzando Chai asserts'
````

</section>

## Seme Sfida

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Codice visualizzato nell'editor per impostazione predefinita.

Questa è una sezione necessaria per la sfida.
```

</div>

### Prima Del Test

<div id='{ext}-setup'>

```{ext}
Codice di configurazione del test opzionale.
```

</div>

### Dopo Il Test

<div id='{ext}-teardown'>

```{ext}
Codice opzionale di abbattimento del test.
```

</div>

</section>

## Soluzione

<section id='solution'>

```{ext}
// soluzione richiesta
```

</section>

````

> [!NOTA]
>
> 1. Nelle sezioni precedenti, esempi di `{ext}` sono:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. Per la sezione `Tests` sopra, `text` e `testString` dovrebbero essere stringhe YAML valide. `testString` può essere una funzione o espressione stringified usando che potrebbe usare gli assert di Chai.

## Sfide di numerazione

Ogni sfida ha bisogno di un `id`. Se non ne specifichi uno, MongoDB ne creerà una nuova casuale quando salva i dati; tuttavia, non vogliamo che lo faccia, dal momento che vogliamo che gli id della sfida siano coerenti in diversi ambienti (staging, produzione, un sacco di diversi sviluppatori, ecc.).

Per generarne uno nuovo in una shell (supponendo che MongoDB sia in esecuzione separatamente):

1. Esegui il comando `mongo`.
2. Esegui il comando `ObjectId()`.

Per esempio:

``bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Il risultato è un nuovo id, ad esempio `5a474d78df58bafeb3535d34` sopra.

Una volta che hai il tuo id, mettilo nel file markdown come il campo `id` in alto, ad es.

```yml
---
id: 5a474d78df58bafeb35d34
title: Challenge Title
```

## Naming challenges

Nominare le cose è difficile. Abbiamo reso più facile imponendo alcuni vincoli.

Tutti i titoli di sfida dovrebbero essere espliciti e seguire questo modello:

\[verb\]\[clausola oggetto\]

Ecco alcuni nomi di sfida di esempio:

- Usa Notazione in senso orario per specificare la Padding di un Elemento
- Array densi con .reduce
- Usa la notazione parentesi per trovare il primo carattere in una stringa

## Descrizioni/istruzioni della sfida

Le frasi devono essere chiare e concise con il gergo minimo. Se usato, il gergo deve essere immediatamente definito in inglese semplice.

Mantenere i paragrafi brevi (circa 1-4 frasi). Le persone hanno più probabilità di leggere diversi brevi paragrafi di un muro di testo.

Il testo della sfida dovrebbe usare la seconda persona ("tu") per contribuire a dargli un tono di conversazione. In questo modo il testo e le istruzioni sembrano parlare direttamente al camper che lavora attraverso la sfida. Cercate di evitare di usare la prima persona ("I", "noi", "noi", e "noi").

Non utilizzare link in uscita. Questi interrompono il flusso. I campeggiatori non dovrebbero mai dover cercare nulla durante queste sfide. Se ci sono risorse da cui pensi che i campeggiatori trarrebbero beneficio, aggiungerli all'articolo Guida della sfida.

È possibile aggiungere diagrammi se assolutamente necessario.

Non usare emoji o emoticon nelle sfide. freeCodeCamp ha una comunità globale, e il significato culturale di un emoji o emoticon può essere diverso in tutto il mondo. Inoltre, gli emoji possono renderli in modo diverso su sistemi diversi.

I sostantivi appropriati dovrebbero usare la capitalizzazione corretta quando possibile. Di seguito è riportato un elenco di parole come dovrebbero apparire nelle sfide.

- JavaScript (lettere maiuscole in "J" e "S" e senza abbreviazioni)
- Node.js
- Lo sviluppo front-end (modulo aggettivo con un trattino) è quando si sta lavorando sul front-end (forma nun senza trattino). Lo stesso vale per "back end", "full stack", e molti altri termini composti.

### Regola di 2 minuti

Ogni sfida dovrebbe essere risolvibile entro 120 secondi da un madrelingua inglese che ha completato le sfide che ci portano. Questo include la quantità di tempo che ci vuole per leggere le direzioni/istruzioni per capire il codice di semina, scrivere il proprio codice e ottenere tutti i test da passare.

Se ci vogliono più di due minuti per completare la sfida, hai due opzioni:

- Semplificare la sfida, o
- Dividi la sfida in due sfide.

La regola di 2 minuti ti costringe, il progettista della sfida, a rendere le tue direzioni concise, il tuo codice del seme chiaro e i tuoi test immediati.

Tracciamo quanto tempo ci vuole per i campeggiatori per risolvere i cambiamenti e utilizzare queste informazioni per identificare le sfide che devono essere semplificate o divise.

### Modularità

Ogni sfida dovrebbe insegnare esattamente un concetto, e questo concetto dovrebbe essere evidente dal nome della sfida.

Possiamo rafforzare i concetti precedentemente coperti attraverso ripetizioni e varianti - per esempio, introdurre elementi h1 in una sfida, poi elementi h3 alcune sfide più tardi.

Il nostro obiettivo è quello di avere migliaia di sfide di 2 minuti. Questi possono confluire insieme e ribadire concetti precedentemente coperti.

### Formattazione testo sfida

Ecco le linee guida di formattazione specifiche per il testo della sfida ed esempi:

- Le parole chiave della lingua vanno in `<code>` tag. Ad esempio, nomi di tag HTML o nomi di proprietà CSS
- La prima istanza di una parola chiave quando è in fase di definizione, o parole chiave generali (cioè "object" o "immutabile") vanno in `<dfn>` tag
- I riferimenti alle parti di codice (cioè funzione, metodo o nomi di variabili) dovrebbero essere inseriti in tag `<code>`. Vedi esempio sotto:
- Usa <code>parseInt</code> per convertire la variabile <code>realNumber</code> in un numero intero.
- I blocchi di codice multi-riga **devono essere preceduti da una riga vuota**. La riga successiva deve iniziare con tre backticks seguiti immediatamente da una delle [lingue supportate](https://prismjs.com/#supported-languages). Per completare il blocco di codice, è necessario avviare una nuova riga che ha solo tre backticks e **un'altra riga vuota**. **Nota:** Se hai intenzione di utilizzare un codice di esempio in YAML, usa `yaml` invece di `yml` per la lingua a destra dei backtick.

Vedi esempio sotto:

````md
Di seguito è riportato un esempio di codice:

```{language}

[IL TUO CODICE QUI]

````
````

- Ulteriori informazioni nella forma di una nota dovrebbero essere formattate `<strong>Nota:</strong> Riposo del testo della nota... - Se sono necessarie più note, quindi elenca tutte le note in frasi separate usando il formato `<strong>Note:</strong> Testo prima nota. Seconda nota testo.`.
- Usa virgolette doppie se del caso

## Test di scrittura

Le sfide dovrebbero avere il numero minimo di test necessari per verificare che un camper capisca un concetto.

Il nostro obiettivo è quello di comunicare il singolo punto che la sfida sta cercando di insegnare, e di verificare che hanno capito quel punto.

I test di sfida possono fare uso delle librerie di asserzione Node.js e Chai.js. Inoltre, se necessario, è possibile accedere al codice generato dall'utente nella variabile `code`.

## Formattazione del seed code

Ecco le linee guida specifiche per la formattazione del seed code:

- Usa due spazi per indentare
- Le istruzioni JavaScript terminano con un punto e virgola
- Usa le virgolette doppie dove applicabile
- I commenti fatti dovrebbero avere uno spazio tra i caratteri del commento e il commento essi stessi

  `// Correggi questa riga`

## Suggerimenti e soluzioni

Ogni sfida ha un pulsante `Ottieni un Hint`, così un utente può accedere a qualsiasi suggerimento/soluzione creata per la sfida. Gli argomenti del curriculum hints/solutions si trovano sul [nostro forum](https://forum.freecodecamp.org/c/guide) nella categoria `Guide`.

Se trovi un problema con l'argomento suggerimenti/soluzioni di una sfida esistente, puoi fare suggerimenti nella [categoria contributori](https://forum.freecodecamp.org/c/contributors) sul forum. I moderatori e gli utenti con livello di fiducia 3 esamineranno i commenti e decideranno se includere o meno le modifiche nell'argomento suggerimento/soluzioni corrispondenti.

### Aggiungere nuovi suggerimenti/soluzioni Sfida Argomenti

Adottare i seguenti passi quando si aggiunge un nuovo argomento relativo ai suggerimenti/alle soluzioni.

1. Inizia seguendo gli stessi passaggi per creare un nuovo argomento, ma rivedi il successivo per creare il titolo.
2. Il titolo dell'argomento dovrebbe iniziare con la `freeCodeCamp Challenge Guide: ` concatenata con il titolo effettivo della sfida del curriculum. Ad esempio, se la sfida è chiamata "`Chunky Monkey`", il titolo dell'argomento sarebbe "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` dovrebbe essere il proprietario di questi argomenti/post, quindi dovrai richiedere a un amministratore di cambiare la proprietà del post principale in `camperbot`.
4. Una volta creato il nuovo argomento, viene creato un ID topic del forum. Si trova alla fine dell'URL dell'argomento del forum. Questo id deve essere aggiunto alla parte frontale del file di sfida del curriculum tramite il normale processo di pull request per il pulsante `Get a Hint` per collegarsi all'argomento.

### Linee guida per il contenuto di suggerimenti e soluzioni

Quando si propone una soluzione per un argomento relativo alla sfida dei programmi di studio, deve essere aggiunto il codice completo. Questo include tutto il codice di seed originale più eventuali modifiche necessarie per superare tutti i test di sfida. Il seguente modello dovrebbe essere usato quando si creano nuovi suggerimenti/soluzioni argomenti:

````md
# Sfida Nome va qui

---

## Problema Spiegazione

Questo riassume ciò che deve essere fatto senza semplicemente riformulare la descrizione della sfida e/o le istruzioni. Questa è una sezione opzionale

#### Link rilevanti

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Suggerimenti

### Suggerimenti 1

Suggerimento va qui

### Suggerimento 2

Suggerimento va qui

---

## Soluzioni

<details><summary>Soluzione 1 (Clicca per Mostrare/Nascondi)</summary>

````js
function myFunc() {
  console. og('Ciao Mondo!');
}
````

#### Spiegazione Del Codice

- La spiegazione del codice va qui
- La spiegazione del codice va qui

#### Collegamenti Relativi

- [Testo Collegamento](link_url_goes_here)
- [Testo Collegamento](link_url_goes_here)

</details>
````

## Sfide di test

Prima di [creare una pull request](how-to-open-a-pull-request. d) per le modifiche, è necessario convalidare che le modifiche apportate non causano inavvertitamente problemi con la sfida. 

1. Per testare tutte le sfide esegui il comando sotto dalla directory radice

````
npm run test:curriculum
``` 

2. Puoi anche testare un blocco o un superblocco di sfide con questi comandi

```
npm run test:curriculum --block='Basic HTML e HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

Sei anche in grado di testare una sfida individualmente eseguendo i seguenti passaggi:

1. Passa alla directory `curriculum`:

   ```
   cd curriculum
   ```

2. Eseguire il seguente per ogni file di sfida per il quale è stato modificato:

   ```
   npm run test -- -g 'il titolo inglese completo della sfida'
   ```

Una volta verificato che ogni sfida ha superato i test, [crea una pull request](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!SUGGERIMENTO]
> Puoi impostare la variabile d'ambiente `LOCALE` nel `.env` nella lingua della sfida(e) che devi provare.
> 
> I valori attualmente accettati sono `english` e `chinese`, con `english` impostato per impostazione predefinita.

## Prossimo modello di sfida

Il modello di sfida in corso di aggiornamento ad una struttura più pulita e meno nidificata.  Questo non è stato completamente finalizzato, ma quanto segue dovrebbe essere vicino alla struttura finale:

````mdx

---
id: Identificatore univoco (alfanumerico, MongoDB_id)
title: 'Challenge Title'
challengeType: Integer, definito in `client/utils/challengeTypes. s`
videoUrl: 'url of video spiegation'
forumTopicId: 12345
---

import Script da './script. dx';

## --step-description--

Testo della descrizione, in markdown

```html
<div> 
  codice di esempio
</div>
```

## --step-hints--

![test-id-1]

Ci sarà un numero arbitrario di triplicazioni di ids, istruzioni (in markdown) e blocchi di codice.

```js
Codice della prova uno
```

![test-id-2]

Altre istruzioni nella sintassi di markdown

```js
Più codice
```

## --step-seed--

### --before-user-code--

```lang
Codice valutato prima dell’utente
```

### --after-user-code--

```lang
Codice valutato dopo l'utente, e poco prima dei test
```

### --seed-content--

![index-html]

```html
Alcuni html
```

```css
Alcuni css
```

```js
Alcuni js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --solution-marker--
</h1>



<p spaces-before="0">
  Esattamente la stessa sezione dei semi
</p>

<h2 spaces-before="0">
  --next-solution-marker
</h2>



<p spaces-before="0">
  Stesso di nuovo
</p>

<h1 spaces-before="0">
  --question-marker--
</h1>

<h2 spaces-before="0">
  --text-marker--
</h2>



<p spaces-before="0">
  La domanda sarebbe andare qui (utilizzato solo per le sfide video)
</p>

<h2 spaces-before="0">
  --answers-marker--
</h2>



<p spaces-before="0">
  Risposta 1
</p>

<hr />

<p spaces-before="0">
  Risposta 2
</p>

<hr />

<p spaces-before="0">
  Risposta 2
</p>

<h2 spaces-before="0">
  --solution-marker--
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  Link Utili
</h3>



<p spaces-before="0">
  Sfide di creazione e modifica:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Tipi di Sfida</a> - ciò che significano i valori del tipo di sfida numerica (enum).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Contribuire a FreeCodeCamp - Writing ES6 Challenge Tests</a> - un video che segue <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> in quanto contribuisce alla vecchia versione del curriculum.
    </p>
  </li>

</ol>

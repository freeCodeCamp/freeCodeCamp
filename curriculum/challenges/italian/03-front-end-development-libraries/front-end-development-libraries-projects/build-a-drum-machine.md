---
id: 587d7dbc367417b2b2512bae
title: Costruisci una batteria
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--

**Obiettivo:** crea un'app funzionalmente simile a questa: <a href="https://codepen.io/freeCodeCamp/full/MJyNMd" target="_blank" rel="noopener noreferrer nofollow">https://codepen.io/freeCodeCamp/full/MJyNMd</a>.

Soddisfa le user story qui sotto e supera tutti i test. Utilizza le librerie o le API di cui hai bisogno. Usa il tuo stile personale.

Puoi utilizzare qualsiasi mix di HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux e jQuery per completare questo progetto. Dovresti usare un framework frontend (come React per esempio) perché questa sezione riguarda l'apprendimento dei framework per il frontend. Ulteriori tecnologie non elencate sopra non sono raccomandate e usarle è a tuo rischio. Stiamo cercando di supportare altri framework per il frontend come Angular e Vue, ma attualmente non sono supportati. Accetteremo e cercheremo di risolvere tutte le segnalazioni di problemi che utilizzano lo stack tecnologico suggerito per questo progetto. Happy coding!

**User Story #1:** Dovrei essere in grado di vedere un contenitore esterno con un corrispondente `id="drum-machine"` che contiene tutti gli altri elementi.

**User Story #2:** All'interno di `#drum-machine` posso vedere un elemento con un corrispondente `id="display"`.

**User Story #3:** Dentro a `#drum-machine` posso vedere 9 elementi tamburo cliccabili, ognuno di classe `drum-pad`, con un id univoco che descrive la clip audio che l'elemento dovrà avviare, e un testo interno che corrisponde a uno dei seguenti tasti sulla tastiera: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. I tamburi DEVONO essere in questo ordine.

**User Story #4:** All'interno di ogni `.drum-pad`, ci dovrebbe essere un elemento HTML5 `audio` che ha un attributo `src` che indica una clip audio, un nome di classe `clip` e un id corrispondente al testo interno del `.drum-pad` genitore (ad es. `id="Q"`, `id="W"`, `id="E"` ecc.).

**User Story #5:** Quando clicco su un elemento `.drum-pad`, la clip audio contenuta nell'elemento figlio `audio` dovrebbe essere attivata.

**User Story #6:** Quando premo il tasto di attivazione associato a ogni `.drum-pad`, la clip audio contenuta nell'elemento figlio `audio` dovrebbe essere attivata (ad es. premendo il tasto `Q` si dovrebbe attivare il tamburo che contiene la stringa `Q`, premendo il tasto `W` si dovrebbe attivare il tamburo che contiene la stringa `W`, ecc.).

**User Story #7:** Quando un `.drum-pad` viene attivato, viene visualizzata una stringa che descrive la clip audio associata come testo interno dell'elemento `#display` (ogni stringa deve essere unica).

Ecco alcuni campioni audio che puoi usare per la tua batteria:

- [Heater 1](https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3)
- [Heater 2](https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3)
- [Heater 3](https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3)
- [Heater 4](https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3)
- [Clap](https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3)
- [Open-HH](https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3)
- [Kick-n'-Hat](https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3)
- [Kick](https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3)
- [Closed-HH](https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3)

Puoi costruire il tuo progetto <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow">usando questo modello CodePen</a> e facendo click su `Save` per creare il tuo pen. Oppure puoi usare questo link CDN per eseguire i test in qualsiasi ambiente tu voglia: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Una volta fatto, invia l'URL del tuo progetto di lavoro con tutti i suoi test superati.

# --solutions--

```js
// solution required
```

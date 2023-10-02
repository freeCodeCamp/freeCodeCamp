---
id: bd7178d8c242eddfaeb5bd13
title: Visualizzare i dati con un grafico a dispersione
challengeType: 3
forumTopicId: 301467
dashedName: visualize-data-with-a-scatterplot-graph
---

# --description--

**Obiettivo:** crea un'app funzionalmente simile a questa: <a href="https://scatterplot-graph.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://scatterplot-graph.freecodecamp.rocks</a>.

Soddisfa le user story qui sotto e supera tutti i test. Utilizza le librerie o le API di cui hai bisogno. Usa il tuo stile personale.

Puoi usare HTML, JavaScript, CSS e la libreria di visualizzazione basata su svg D3. I test richiedono la generazione degli assi con la proprietà axis di D3, che crea automaticamente le tacche sugli assi. Queste tacche sono richieste per superare i test perché la loro posizione è usata per determinare l'allineamento degli elementi del grafico. Puoi trovare informazioni su come generare gli assi su <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Gli elementi del DOM richiesti sono selezionati al momento di ogni test. Se usi un framework frontend (come Vue per esempio) i risultati dei test potrebbero essere inaccurati per il contenuto dinamico. Speriamo di supportarli prima o poi, ma al momento non lo sono per i progetti D3.

**User Story #1:** Posso vedere un elemento title con un corrispondente `id="title"`.

**User Story #2:** Posso vedere un asse x con corrispondente `id="x-axis"`.

**User Story #3:** Posso vedere un asse y con corrispondente `id="y-axis"`.

**User Story #4:** Posso vedere dei punti, ognuno con una classe `dot`, che rappresentano i dati da tracciare.

**User Story #5:** Ogni punto dovrebbe avere le proprietà `data-xvalue` e `data-yvalue` che contengono i rispettivi valori `x` e `y`.

**User Story #6:** per ogni punto `data-xvalue` e `data-yvalue` dovrebbero essere nel range dei dati e nel formato corretto. Per superare i test sono accettabili come valori per `data-xvalue` numeri interi (anni scritti per esteso) o oggetti `Date`. Per `data-yvalue` (minuti), usa oggetti `Date`.

**User Story #7:** `data-xvalue` e il suo punto corrispondente dovrebbero allinearsi con il punto/valore corrispondente sull'asse delle x.

**User Story #8:** `data-yvalue` e il suo punto corrispondente dovrebbero allinearsi con il punto/valore corrispondente sull'asse delle y.

**User Story #9:** Posso vedere varie tacche con etichetta in formato di tempo `%M:%S` sull'asse delle y.

**User Story #10:** Posso vedere varie tacche con etichetta che mostrano l'anno sull'asse delle x.

**User Story #11:** Posso vedere che le etichette dell'asse x coprono lo stesso intervallo dei valori dei dati.

**User Story #12:** Posso vedere che le etichette dell'asse y coprono lo stesso intervallo dei valori dei dati.

**User Story #13:** Posso vedere una legenda con una descrizione che ha `id="legend"`.

**User Story #14:** Posso passare con il mouse su un'area e vedere un tooltip con un corrispondente `id="tooltip"` che mostra maggiori informazioni sull'area.

**User Story #15:** Il mio tooltip dovrebbe avere una proprietà `data-year` che corrisponde al `data-xvalue` dell'area attiva.

Ecco i dati che dovrai utilizzare per completare il progetto: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json`

Puoi costruire il tuo progetto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">usando questo modello CodePen</a> e facendo click su `Save` per creare il tuo pen. Oppure puoi usare questo link CDN per eseguire i test in qualsiasi ambiente tu voglia: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Una volta fatto, invia l'URL del tuo progetto di lavoro con tutti i suoi test superati.

# --solutions--

```js
// solution required
```

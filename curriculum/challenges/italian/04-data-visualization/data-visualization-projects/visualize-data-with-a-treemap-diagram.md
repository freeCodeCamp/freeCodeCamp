---
id: 587d7fa6367417b2b2512bc0
title: Visualizza i dati con una mappa ad albero
challengeType: 3
forumTopicId: 301468
dashedName: visualize-data-with-a-treemap-diagram
---

# --description--

**Obiettivo:** crea un'app funzionalmente simile a questa: <a href="https://treemap-diagram.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://treemap-diagram.freecodecamp.rocks</a>.

Soddisfa le user story qui sotto e supera tutti i test. Utilizza le librerie o le API di cui hai bisogno. Usa il tuo stile personale.

Puoi usare HTML, JavaScript, CSS e la libreria di visualizzazione basata su svg D3. I test richiedono la generazione degli assi con la proprietà axis di D3, che crea automaticamente le tacche sugli assi. Queste tacche sono richieste per superare i test perché la loro posizione è usata per determinale l'allineamento degli elementi del grafico. Puoi trovare informazioni su come generare gli assi su <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Gli elementi del DOM richiesti sono selezionati al momento di ogni test. Se usi un framework frontend (come Vue per esempio) i risultati dei test potrebbero essere inaccurati per il contenuto dinamico. Speriamo di supportarli prima o poi, ma questi framework non sono supportati al momento per i progetti D3.

**User Story #1:** La mia mappa ad albero dovrebbe avere un titolo con corrispondente `id="title"`.

**User Story #2:** La mia mappa ad albero dovrebbe avere una descrizione con corrispondente `id="description"`.

**User Story #3:** La mia mappa ad albero dovrebbe avere elementi `rect` con una `class="tile"` (piastrella) che rappresenta i dati.

**User Story #4:** Dovrebbero essere usati almeno 4 colori di riempimento diversi per le piastrelle.

**User Story #5:** Ogni piastrella avrà le proprietà `data-name`, `data-category`, `data-value` contenenti i corrispondenti valori di nome `name`, categoria `category` e valore `value`.

**User Story #6:** L'area di ogni piastrella dovrebbe corrispondere alla quantità `data-value`: le caselle con un `data-value` più grande dovrebbero avere un'area più grande.

**User Story #7:** La mia mappa ad albero dovrebbe avere una legenda con una corrispondente `id="legend"`.

**User Story #8:** La mia legenda dovrebbe avere elementi `rect` con una corrispondente `class="legend-item"`.

**User Story #9:** Gli elementi `rect` nella legenda dovrebbero utilizzare almeno 2 colori di riempimento diversi.

**User Story #10:** Posso passare con il mouse su un'area e vedere un tooltip con un corrispondente `id="tooltip"` che mostra maggiori informazioni sull'area.

**User Story #11:** Il mio tooltip dovrebbe avere una proprietà `data-value` che corrisponde al `data-value` dell'area attiva.

Per questo progetto puoi utilizzare uno dei seguenti set di dati:

-   **Finanziamenti di KickStarter:**`https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json`
-   **Vendite di film:**`https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`
-   **Vendite di videogiochi:**`https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json`

Puoi costruire il tuo progetto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">usando questo modello CodePen</a> e facendo click su `Save` per creare il tuo pen. Oppure puoi usare questo link CDN per eseguire i test in qualsiasi ambiente tu voglia: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Una volta fatto, invia l'URL del tuo progetto di lavoro con tutti i suoi test superati.

# --solutions--

```js
// solution required
```

---
id: bd7188d8c242eddfaeb5bd13
title: Visualizzare i dati con una mappa di calore
challengeType: 3
forumTopicId: 301466
dashedName: visualize-data-with-a-heat-map
---

# --description--

**Obiettivo:** crea un'app funzionalmente simile a questa: <a href="https://heat-map.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://heat-map.freecodecamp.rocks</a>.

Soddisfa le user story qui sotto e supera tutti i test. Utilizza le librerie o le API di cui hai bisogno. Usa il tuo stile personale.

Puoi usare HTML, JavaScript, CSS e la libreria di visualizzazione basata su svg D3. Gli elementi del DOM richiesti sono selezionati al momento di ogni test. Se usi un framework frontend (come Vue per esempio) i risultati dei test potrebbero essere inaccurati per il contenuto dinamico. Speriamo di supportarli prima o poi, ma questi framework non sono supportati al momento per i progetti D3.

**User Story #1:** La mia mappa di calore dovrebbe avere un titolo con corrispondente `id="title"`.

**User Story #2:** La mia mappa di calore dovrebbe avere una descrizione con corrispondente `id="description"`.

**User Story #3:** La mia mappa di calore dovrebbe avere un asse x con un corrispondente `id="x-axis"`.

**User Story #4:** La mia mappa di calore dovrebbe avere un asse y con un corrispondente `id="y-axis"`.

**User Story #5:** La mia mappa di calore dovrebbe avere elementi `rect` con una `class="cell"` che rappresenta i dati.

**User Story #6:** Dovrebbero essere usati almeno 4 colori di riempimento diversi per le celle.

**User Story #7:** Ogni cella avrà le proprietà `data-month`, `data-year`, `data-temp` contenenti i corrispondenti valori di `month`, `year` e `temperature`.

**User Story #8:** I `data-month` e `data-year` di ogni cella dovrebbero essere all'interno dell'intervallo di dati.

**User Story #9:** La mia mappa di calore dovrebbe avere celle che si allineano con il mese corrispondente sull'asse y.

**User Story #10:** La mia mappa di calore dovrebbe avere celle che si allineano con l'anno corrispondente sull'asse x.

**User Story #11:** La mia mappa del calore dovrebbe avere più tacche sull'asse y etichettate con il nome del mese completo.

**User Story #12:** La mia mappa di calore dovrebbe avere più tacche x etichettate con gli anni tra il 1754 e il 2015.

**User Story #13:** La mia mappa di calore dovrebbe avere una legenda con una corrispondente `id="legend"`.

**User Story #14:** La mia legenda dovrebbe contenere elementi `rect`.

**User Story #15:** Gli elementi `rect` nella legenda dovrebbero usare almeno 4 colori di riempimento diversi.

**User Story #16:** Posso passare con il mouse su un'area e vedere un suggerimento con un corrispondente `id="tooltip"` che mostra maggiori informazioni sull'area.

**User Story #17:** Il mio tooltip dovrebbe avere una proprietà `data-year` che corrisponde al `data-year` dell'area attiva.

Ecco il set di dati necessario per completare questo progetto: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json`

Puoi costruire il tuo progetto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">usando questo modello CodePen</a> e facendo click su `Save` per creare il tuo pen. Oppure puoi usare questo link CDN per eseguire i test in qualsiasi ambiente tu voglia: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Una volta fatto, invia l'URL del tuo progetto di lavoro con tutti i suoi test superati.

# --solutions--

```js
// solution required
```

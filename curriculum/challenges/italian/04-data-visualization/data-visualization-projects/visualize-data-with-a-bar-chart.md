---
id: bd7168d8c242eddfaeb5bd13
title: Visualizzare i dati con un grafico a barre
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--

**Obiettivo:** crea un'app funzionalmente simile a questa: <a href="https://bar-chart.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://bar-chart.freecodecamp.rocks</a>.

Soddisfa le user story qui sotto e supera tutti i test. Utilizza le librerie o le API di cui hai bisogno. Usa il tuo stile personale.

Puoi usare HTML, JavaScript, CSS e la libreria di visualizzazione basata su svg D3. I test richiedono la generazione degli assi con la proprietà axis di D3, che crea automaticamente le tacche sugli assi. Queste tacche sono richieste per superare i test perché la loro posizione è usata per determinale l'allineamento degli elementi del grafico. Puoi trovare informazioni su come generare gli assi su <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. Gli elementi del DOM richiesti sono selezionati al momento di ogni test. Se usi un framework frontend (come Vue per esempio) i risultati dei test potrebbero essere inaccurati per il contenuto dinamico. Speriamo di supportarli prima o poi, ma al momento non lo sono per i progetti D3.

**User Story #1:** Il mio grafico dovrebbe avere un titolo con corrispondente `id="title"`.

**User Story #2:** Il mio grafico dovrebbe avere un elemento x-axis `g` con un corrispondente `id="x-axis"`.

**User Story #3:** Il mio grafico dovrebbe avere un elemento y-axis `g` con un corrispondente `id="y-axis"`.

**User Story #4:** I due assi dovrebbero avere etichette multiple per le tacche ognuna con una corrispondente `class="tick"`.

**User Story #5:** Il mio grafico dovrebbe avere un elemento `rect` che mostra i dati di ogni data point con una corrispondente `class="bar"`.

**User Story #6:** Ogni`.bar` dovrebbe avere le proprietà `data-date` e `data-gdp` contenenti i valori `date` e `GDP`.

**User Story #7:** Le proprietà `data-date` degli elementi `.bar` dovrebbero corrispondere all'ordine dei dati forniti.

**User Story #8:** Le proprietà `data-gdp` degli elementi `.bar` dovrebbero corrispondere all'ordine dei dati forniti.

**User Story #9:** L'altezza di ogni elemento `.bar` dovrebbe rappresentare accuratamente il corrispondente dato `GDP`.

**User Story #10:** L'attributo `data-date` e il suo corrispondente elemento `.bar` dovrebbero allinearsi con il corrispondente valore dell'asse x.

**User Story #11:** L'attributo `data-gdp` e il suo corrispondente elemento `.bar` dovrebbero allinearsi con il corrispondente valore dell'asse y.

**User Story #12:** Posso passare con il mouse su un'area e vedere un tooltip con un corrispondente `id="tooltip"` che mostra maggiori informazioni sull'area.

**User Story #13:** Il mio tooltip dovrebbe avere una proprietà `data-date` che corrisponde al `data-date` dell'area attiva.

Ecco i dati che dovrai utilizzare per completare il progetto: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

Puoi costruire il tuo progetto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">usando questo modello CodePen</a> e facendo click su `Save` per creare il tuo pen. Oppure puoi usare questo link CDN per eseguire i test in qualsiasi ambiente tu voglia: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

Una volta fatto, invia l'URL del tuo progetto di lavoro con tutti i suoi test superati.

# --solutions--

```js
// solution required
```

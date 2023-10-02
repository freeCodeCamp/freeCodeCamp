---
id: 587d7fa6367417b2b2512bbf
title: Visualizzare i dati con una mappa coropletica
challengeType: 3
forumTopicId: 301465
dashedName: visualize-data-with-a-choropleth-map
---

# --description--

**Obiettivo:** crea un'app funzionalmente simile a questa: <a href="https://choropleth-map.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://choropleth-map.freecodecamp.rocks</a>.

Soddisfa le user story qui sotto e supera tutti i test. Utilizza le librerie o le API di cui hai bisogno. Usa il tuo stile personale.

Puoi usare HTML, JavaScript, CSS e la libreria di visualizzazione basata su svg D3. Gli elementi del DOM richiesti sono selezionati al momento di ogni test. Se usi un framework frontend (come Vue per esempio) i risultati dei test potrebbero essere inaccurati per il contenuto dinamico. Speriamo di supportarli prima o poi, ma questi framework non sono supportati al momento per i progetti D3.

**User Story #1:** La mia mappa coropletica dovrebbe avere un titolo con corrispondente `id="title"`.

**User Story #2:** La mia mappa coropletica dovrebbe avere un elemento descrittivo con un corrispondente `id="description"`.

**User Story #3:** La mia mappa coropletica dovrebbe avere le contee con una classe `class="county"` corrispondente.

**User Story #4:** Dovrebbero essere usati almeno 4 colori di riempimento diversi per le contee.

**User Story #5:** Le mie contee dovrebbero avere le proprietà `data-fips` e `data-education` contenenti i loro valori corrispondenti `fips` e `education`.

**User Story #6:** La mia mappa coropletica dovrebbe avere una contea per ogni data point fornito.

**User Story #7:** Le contee dovrebbero avere valori `data-fips` e `data-education` che corrispondono ai dati del campione.

**User Story #8:** La mia mappa coropletica dovrebbe avere una legenda con corrispondente `id="legend"`.

**User Story #9:** Dovrebbero essere usati almeno 4 colori di riempimento diversi per la legenda.

**User Story #10:** Posso passare con il mouse su un'area e vedere un suggerimento con un corrispondente `id="tooltip"` che mostra maggiori informazioni sull'area.

**User Story #11:** Il mio suggerimento dovrebbe avere una proprietà `data-education` che corrisponde alla `data-education` dell'area attiva.

Ecco i set di dati necessari per completare questo progetto:

-   **Dati sull'educazione negli Stati Uniti:**`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`
-   **Dati sull'educazione nelle contee degli Stati Uniti:**`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

Puoi costruire il tuo progetto <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">usando questo modello CodePen</a> e facendo click su `Save` per creare il tuo pen. Oppure puoi usare questo link CDN per eseguire i test in qualsiasi ambiente tu voglia: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Una volta fatto, invia l'URL del tuo progetto di lavoro con tutti i suoi test superati.

# --solutions--

```js
// solution required
```

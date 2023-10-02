---
id: 5900f4031000cf542c50ff16
title: 'Problema 151: fogli di carta di dimensioni standard: un problema di valore atteso'
challengeType: 1
forumTopicId: 301782
dashedName: problem-151-paper-sheets-of-standard-sizes-an-expected-value-problem
---

# --description--

Un negozio di stampa esegue 16 lotti (lavori) ogni settimana e ogni lotto richiede un foglio di carta speciale per la prova del colore di dimensione A5.

Ogni lunedì mattina, il caposquadra apre una nuova busta, contenente un grande foglio di carta speciale di formato A1.

Prosegue tagliandolo a metà, ottenendo così due fogli di formato A2. Poi taglia uno di loro a metà per ottenere due fogli di formato A3 e così via fino a quando ottiene il foglio di formato A5 necessario per il primo lotto della settimana.

Tutti i fogli inutilizzati sono riposizionati nella busta.

<img class="img-responsive center-block" alt="Foglio formato A1 diviso in: A2, A3, A4 e due fogli A5" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-sheets-of-standard-sizes-an-expected-value-problem.png" style="background-color: white; padding: 10px;" />

All'inizio di ogni lotto successivo, prende un foglio di carta dalla busta a caso. Se è di dimensioni A5, lo usa. Se è più grande, ripete la procedura "taglia a metà" fino a quando non ha quello di cui ha bisogno, e tutti i fogli rimanenti sono sempre riposti nella busta.

Escluso il primo e l’ultimo lotto della settimana, trovare il numero previsto di volte (nel corso di ogni settimana) in cui il caposquadra trova un unico foglio di carta nella busta.

Dare la risposta arrotondata a sei decimali utilizzando il formato `x.xxxxxx`.

# --hints--

`expectedValueProblem()` dovrebbe restituire `0.464399`.

```js
assert.strictEqual(expectedValueProblem(), 0.464399);
```

# --seed--

## --seed-contents--

```js
function expectedValueProblem() {

  return true;
}

expectedValueProblem();
```

# --solutions--

```js
// solution required
```

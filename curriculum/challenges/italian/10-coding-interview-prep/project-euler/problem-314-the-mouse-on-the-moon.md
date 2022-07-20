---
id: 5900f4a71000cf542c50ffb9
title: 'Problema 314: Il topo sulla Luna'
challengeType: 1
forumTopicId: 301970
dashedName: problem-314-the-mouse-on-the-moon
---

# --description--

La luna è stata aperta e il terreno può essere ottenuto gratuitamente, ma c'è un problema. È necessario costruire un muro intorno al terreno che vuoi delimitare, e costruire un muro sulla luna è costoso. Ad ogni Paese è stata assegnata una superficie quadrata di 500 m per 500 m, ma disporrà solo della zona delimitata dal muro. 251001 paletti sono stati collocati in una griglia rettangolare con una spaziatura di 1 metro. La parete deve essere una serie chiusa di linee rette, ogni linea che corre da paletto a paletto.

I paesi più grandi hanno ovviamente costruito un muro di 2000 m che racchiude l'intera area di 250 000 $\text{m}^2$. Il Ducato di Grand Fenwick, ha un budget più ristretto, e ti ha chiesto (in quanto loro Programmatore Reale) di calcolare quale forma otterrebbe il massimo rapporto $\frac{\text{area-racchiusa}}{\text{lunghezza-muro}}$.

Hai fatto alcuni calcoli preliminari su un foglio di carta. Per un muro di 2000 metri che racchiude l'area di 250 000 $\text{m}^2$ il rapporto $\frac{\text{area-racchiusa}}{\text{lunghezza-muro}}$ è 125.

Anche se non è consentito, ma per avere un'idea se questo è qualcosa di meglio: se piazzi un cerchio all'interno dell'area quadrata che tocca i quattro lati l'area sarà uguale a $π \times {250}^2 \text{m}^2$ e il perimetro sarà $π \times 500 \text{m}$, per cui il rapporto $\frac{\text{area-racchiusa}}{\text{lunghezza-muro}}$ sarà comunque 125.

Tuttavia, se si tagliano dal quadrato quattro triangoli con lati 75 m, 75 m e $75\sqrt{2}$ m l'area totale diventa 238750 $\text{m}^2$ e il perimetro diventa $1400 + 300\sqrt{2}$ m. Quindi questo dà un rapporto $\frac{\text{enclosed-area}}{\text{wall-length}}$ di 130.87, che è significativamente migliore.

<img class="img-responsive center-block" alt="immagine che mostra la differenza nell'area racchiusa tra cerchio e quadrato con il taglio di quattro triangoli" src="https://cdn.freecodecamp.org/curriculum/project-euler/the-mouse-on-the-moon.gif" style="background-color: white; padding: 10px;" />

Trova il massimo rapporto $\frac{\text{area-racchiusa}}{\text{lunghezza-muro}}$. Dai la tua risposta arrotondata a 8 posti dopo il punto decimale nella forma abc.defghijk.

# --hints--

`theMouseOnTheMoon()` dovrebbe restituire `132.52756426`.

```js
assert.strictEqual(theMouseOnTheMoon(), 132.52756426);
```

# --seed--

## --seed-contents--

```js
function theMouseOnTheMoon() {

  return true;
}

theMouseOnTheMoon();
```

# --solutions--

```js
// solution required
```

---
id: 5900f4cd1000cf542c50ffdf
title: 'Problema 352: Analisi del sangue'
challengeType: 1
forumTopicId: 302012
dashedName: problem-352-blood-tests
---

# --description--

Ognuna delle 25 pecore di un gregge deve essere sottoposta a test per individuare un virus raro, noto per colpire il 2% della popolazione ovina.

Un test PCR accurato ed estremamente sensibile esiste per i campioni di sangue, producendo un risultato positivo/negativo netto, ma è molto lungo e costoso.

A causa del costo elevato, il veterinario suggerisce che invece di eseguire 25 test separati, si può ricorrere alla seguente procedura:

Le pecore sono suddivise in 5 gruppi di 5 pecore in ognuno. Per ciascun gruppo, i 5 campioni sono mescolati insieme e si effettua una singola prova. Poi,

- Se il risultato è negativo, tutte le pecore di quel gruppo sono considerate prive di virus.
- Se il risultato è positivo, saranno effettuati 5 test supplementari (una prova separata per ciascun animale) per determinare l'individuo/i interessato/i.

Poiché la probabilità di infezione per un animale specifico è solo di 0,02, il primo test (sui campioni aggregati) per ciascun gruppo sarà:

- Negativo (e nessun altro test necessario) con probabilità ${0.98}^5 = 0.9039207968$.
- Positivo (5 ulteriori test necessari) con probabilità $1 - 0.9039207968 = 0.0960792032$.

Così, il numero previsto di test per ogni gruppo è di $1 + 0.0960792032 × 5 = 1.480396016$.

Di conseguenza, tutti i 5 gruppi possono essere controllati utilizzando una media di soli $1.480396016 × 5 = \mathbf{7.40198008}$ test, che rappresenta un enorme risparmio di oltre il 70%!

Anche se lo schema che abbiamo appena descritto sembra essere molto efficiente, può ancora essere migliorato notevolmente (sempre supponendo che il test sia sufficientemente sensibile e che nessun effetto negativo sia causato dalla miscelazione di campioni diversi). Ad es.:

- Possiamo iniziare eseguendo una prova su una miscela di tutti i 25 campioni. Si può verificare che in circa il 60,35% dei casi questo test sarà negativo, quindi non saranno necessari altri test. Saranno necessari ulteriori test solo per il restante 39,65% dei casi.
- Se sappiamo che almeno un animale in un gruppo di 5 è infetto e i primi 4 test individuali risultano negativi, non è necessario eseguire un test sul quinto animale (sappiamo che deve essere infetto).
- Possiamo provare un numero diverso di gruppi / numero diverso di animali in ogni gruppo, adeguare tali numeri a ciascun livello in modo da ridurre al minimo il numero totale previsto di prove.

Per semplificare la vasta gamma di possibilità, esiste una restrizione che poniamo quando progettiamo il sistema di test più efficiente in termini di costi: ogni volta che iniziamo con un campione misto, tutti gli ovini che contribuiscono a tale campione devono essere sottoposti a screening completo (cioè prima di iniziare ad esaminare qualsiasi altro animale deve essere raggiunto un verdetto di infezione / non infezione per tutti loro.

Per l'esempio attuale, risulta che lo schema di test più efficiente in termini di costi (lo chiameremo la strategia ottimale) richiede una media di appena <strong>4.155452</strong> test!

Utilizzando la strategia ottimale, lascia che $T(s, p)$ rappresenti il numero medio di test necessari per testare un gregge di $s$ pecore per un virus che ha probabilità $p$ di essere presente in qualsiasi individuo. Così, arrotondato a sei decimali, $T(25, 0.02) = 4.155452$ e $T(25, 0.10) = 12.702124$.

Trova $\sum T(10\\,000, p)$ per $p = 0.01, 0.02, 0.03, \ldots 0.50$. Dai la risposta arrotondata a sei decimali.

# --hints--

`bloodTests()` dovrebbe restituire `378563.260589`.

```js
assert.strictEqual(bloodTests(), 378563.260589);
```

# --seed--

## --seed-contents--

```js
function bloodTests() {

  return true;
}

bloodTests();
```

# --solutions--

```js
// solution required
```

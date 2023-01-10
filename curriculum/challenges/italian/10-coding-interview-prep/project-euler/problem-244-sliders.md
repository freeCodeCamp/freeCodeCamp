---
id: 5900f4601000cf542c50ff72
title: 'Problema 244: Sliders'
challengeType: 1
forumTopicId: 301891
dashedName: problem-244-sliders
---

# --description--

Probabilmente conosci il gioco Fifteen Puzzle. Qui, invece di piastrelle numerate, abbiamo sette piastrelle rosse e otto piastrelle blu.

Una mossa è indicata dall'iniziale maiuscolo della direzione (sinistra, destra, alto, giù) in cui la piastrella è fatta scorrere, ad esempio partendo dalla configurazione ($S$), dalla sequenza $LULUR$ raggiungiamo la configurazione ($E$):

($S$) <img class="img-responsive" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-1.gif" style="display: inline-block; background-color: white; padding: 10px;" />, ($E$) <img class="img-responsive" alt="configurazione E" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-2.gif" style="display: inline-block; background-color: white; padding: 10px;" />

Per ogni percorso, il suo checksum è calcolato con (pseudocodice):

$$\begin{align}   & \text{checksum} = 0 \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_1) \\; \text{mod} \\; 100\\,000\\,007 \\\\   & \text{checksum} = (\text{checksum} × 243 + m_2) \\; \text{mod} \\; 100\\,000\\,007 \\\\
  & \ldots \\\\ & \text{checksum} = (\text{checksum} × 243 + m_n) \\; \text{mod} \\; 100\\,000\\,007 \end{align}$$

dove $m_k$ è il valore ASCII della $k^{\text{th}}$-ma lettera nella sequenza di movimento e i valori ASCII per le mosse sono:

$$\begin{array}{|c|c|} \hline L & 76 \\\\ \hline R & 82 \\\\ \hline U & 85 \\\\ \hline D & 68 \\\\ \hline \end{array}$$

Per la sequenza $LULUR$ riportata sopra, il checksum sarebbe 19761398. Ora, partendo dalla configurazione ($S$), trova tutti i modi più brevi per raggiungere la configurazione ($T$).

($S$) <img class="img-responsive center-block" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-3.gif" style="display: inline-block; background-color: white; padding: 10px;" />, ($T$) <img class="img-responsive center-block" alt="configurazione T" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-4.gif" style="display: inline-block; background-color: white; padding: 10px;" />

Qual è la somma di tutti i checksum per i percorsi che hanno la lunghezza minima?

# --hints--

`sliders()` dovrebbe restituire `96356848`.

```js
assert.strictEqual(sliders(), 96356848);
```

# --seed--

## --seed-contents--

```js
function sliders() {

  return true;
}

sliders();
```

# --solutions--

```js
// solution required
```

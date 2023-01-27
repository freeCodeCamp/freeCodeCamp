---
id: 5900f51f1000cf542c510031
title: 'Problema 434: Grafici rigidi'
challengeType: 1
forumTopicId: 302105
dashedName: problem-434-rigid-graphs
---

# --description--

Ricordiamo che un grafo è una raccolta di nodi e archi che collegano i nodi, e che due nodi collegati da un arco sono chiamati adiacenti.

I grafi possono essere incorporati nello spazio euclideo associando ogni nodo a un punto nello spazio euclideo.

Un grafo flessibile è l'incorporamento di un grafo in cui è possibile spostare uno o più nodi in modo continuo in modo che la distanza tra almeno due nodi non adiacenti sia alterata mentre le distanze tra ciascuna coppia di nodi adiacenti sia mantenuta costante.

Un grafo rigido è l'incorporamento di un grafo che non è flessibile.

Informalmente, un grafo è rigido se sostituendo i vertici con cerniere completamente rotanti e gli archi con aste che non si piegano e non sono elastiche, nessuna parte del grafo può essere spostata indipendentemente dal resto del grafico.

I grafi della griglia incorporati nel piano euclideo non sono rigidi, come dimostra la seguente animazione:

<img class="img-responsive center-block" alt="animazione che mostra che i grafi della griglia non sono rigidi nel piano Euclideo" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-1.gif" style="background-color: white; padding: 10px;" />

Tuttavia, essi possono essere resi rigidi aggiungendo archi diagonali alle celle. Ad esempio, per il grafo della griglia 2x3, ci sono 19 modi per rendere rigido il grafo:

<img class="img-responsive center-block" alt="19 modi per rendere rigido il grafo a griglia 2x3" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-2.png" style="background-color: white; padding: 10px;" />

Nota che ai fini di questo problema, non consideriamo di cambiare l'orientamento di un arco diagonale o di aggiungere entrambi gli archi diagonali a una cella come un modo diverso per rendere rigido un grafo a griglia.

Sia $R(m, n)$ il numero di modi per rendere rigido il grafo della griglia $m × n$.

Ad es. $R(2, 3) = 19$ e $R(5, 5) = 23\\,679\\,901$.

Definire $S(N)$ come $\sum R(i, j)$ per $1 ≤ i$, $j ≤ N$.

Ad es. $S(5) = 25\\,021\\,721$.

Trova $S(100)$, dai la tua risposta nel formato $1\\,000\\,000\\,033$.

# --hints--

`rigidGraphs()` dovrebbe restituire `863253606`.

```js
assert.strictEqual(rigidGraphs(), 863253606);
```

# --seed--

## --seed-contents--

```js
function rigidGraphs() {

  return true;
}

rigidGraphs();
```

# --solutions--

```js
// solution required
```

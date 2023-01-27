---
id: 5900f4a51000cf542c50ffb7
title: 'Problema 312: Percorsi ciclici sui grafi di Sierpiński'
challengeType: 1
forumTopicId: 301968
dashedName: problem-312-cyclic-paths-on-sierpiski-graphs
---

# --description--

- Un grafico di Sierpiński di ordine 1 ($S_1$) è un triangolo equilatero.
- $S_{n + 1}$ è ottenuto da $S_n$ posizionando tre copie di $S_n$ in modo che ogni coppia di copie abbia un angolo comune.

<img class="img-responsive center-block" alt="Grafi di Sierpinski dell’ordine da 1 a 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-1.gif" style="background-color: white; padding: 10px;" />

Sia $C(n)$ il numero di cicli che passano esattamente una volta attraverso tutti i vertici di $S_n$. Ad esempio, $C(3) = 8$ perché otto di questi cicli possono essere disegnati su $S_3$, come mostrato di seguito:

<img class="img-responsive center-block" alt="otto cicli che passano esattamente una volta attraverso tutti i vertici di S_3" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-2.gif" style="background-color: white; padding: 10px;" />

Si può anche verificare che:

$$\begin{align}   & C(1) = C(2) = 1 \\\\
  & C(5) = 71\\,328\\,803\\,586\\,048 \\\\   & C(10 000)\bmod {10}^8 = 37\\,652\\,224 \\\\
  & C(10 000)\bmod {13}^8 = 617\\,720\\,485 \\\\ \end{align}$$

Trova $C(C(C(C(10\\,000)))\bmod {13}^8$.

# --hints--

`pathsOnSierpinskiGraphs()` dovrebbe restituire `324681947`.

```js
assert.strictEqual(pathsOnSierpinskiGraphs(), 324681947);
```

# --seed--

## --seed-contents--

```js
function pathsOnSierpinskiGraphs() {

  return true;
}

pathsOnSierpinskiGraphs();
```

# --solutions--

```js
// solution required
```

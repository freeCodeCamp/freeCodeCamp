---
id: 5900f42f1000cf542c50ff40
title: 'Problema 194: Configurazioni colorate'
challengeType: 1
forumTopicId: 301832
dashedName: problem-194-coloured-configurations
---

# --description--

Considera i grafici costruiti con le unità A:
<img class="img-responsive" alt="grafico unità A" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-1.png" style="display: inline-block; background-color: white; padding: 10px;" />
 e B: <img class="img-responsive" alt="graph unit B" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-2.png" style="display: inline-block; background-color: white; padding: 10px;" />, dove le unità sono presentate lungo i bordi verticali come nel grafico <img class="img-responsive" alt="graph with four units glued along the vertical edges" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-3.png" style="display: inline-block; background-color: white; padding: 10px;" />.

Una configurazione di tipo $(a,b,c)$ è un grafico così costruito di $a$ unità A e $b$ unità B, dove i vertici del grafico sono colorati utilizzando fino a $c$ colori, in modo che non vi siano due vertici adiacenti aventi lo stesso colore. Il grafico composto sopra è un esempio di configurazione di tipo $(2,2,6)$, infatti di tipo $(2,2,c)$ per tutti i $c ≥ 4$

Sia $N(a,b,c)$ il numero di configurazioni di tipo $(a,b,c)$. Ad esempio $N(1,0,3) = 24$, $N(0,2,4) = 92928$ e $N(2,2,3) = 20736$.

Trova le ultime 8 cifre di $N(25,75,1984)$.

# --hints--

`coloredConfigurations()` dovrebbe restituire `61190912`.

```js
assert.strictEqual(coloredConfigurations(), 61190912);
```

# --seed--

## --seed-contents--

```js
function coloredConfigurations() {

  return true;
}

coloredConfigurations();
```

# --solutions--

```js
// solution required
```

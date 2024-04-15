---
id: 5900f4b41000cf542c50ffc7
title: 'Problema 328: Búsqueda de costo más bajo'
challengeType: 1
forumTopicId: 301985
dashedName: problem-328-lowest-cost-search
---

# --description--

We are trying to find a hidden number selected from the set of integers {1, 2, ..., $n$} by asking questions. Each number (question) we ask, has a <u>cost equal to the number asked</u> and we get one of three possible answers:

- "Your guess is lower than the hidden number", or
- "Si, es así", o
- "Tu suposición es más alta que el número oculto".

Dado el valor de $n$, una estrategia óptima minimiza el costo total (p.ej. la suma de todas las preguntas efectuadas) <u>para el peor caso posible</u>. P.ej.

Si $n = 3$, lo mejor que podemos hacer es obviamente preguntar el número "<strong>2</strong>". La respuesta inmediatamente nos llevará a encontrar el número oculto (a un costo total = 2).

Si $n = 8$, podríamos decidir usar un tipo de estrategía "búsqueda binaria": Nuestra primera pregunta sería "<strong>4</strong>" y si el número oculto es mayor que 4 necesitariamos una o dos preguntas adicionales. Deja que nuestra segunda pregunta sea "<strong>6</strong>". Si el número oculto es aún mayor que 6, necesitaremos una tercera pregunta en orden para distinguir entre 7 y 8. Así, nuestra tercera pregunta será "<strong>7</strong>" y el costo total para este escenario para peor caso será $4 + 6 + 7 = \mathbf{\color{red}{17}}$.

Podemos mejorar considerablemente el costo del peor caso para $n = 8$, preguntando "<strong>5</strong>" como nuestra primera pregunta. Si se nos dice que el número oculto es mayor que 5, nuestra segunda pregunta será "<strong>7</strong>", entonces sabremos con certeza que el número oculto es (para un costo total de $5 + 7 = \mathbf{\color{blue}{12}}$). Si se nos dice que el número oculto es menor que 5, nuestra segunda pregunta será "<strong>3</strong>" y si el número oculto es menor que 3 nuestra tercera pregunta será "<strong>1</strong>", dando un costo total de $5 + 3 + 1 = \mathbf{\color{blue}{9}}$. Dado que $\mathbf{\color{blue}{12 > 9}}$, el caso del peor caso para esta estrategia es <strong><span style="color: red;">12</span></strong>. Eso es mejor que lo que hemos logrado previamente con la estrategia "búsqueda binaria"; también es mejor o igual que cualquier otra estrategia. Entonces, de hecho, acabamos de describir una óptima estrategia para $n = 8$.

Sea $C(n)$ el costo del peor caso cost alcanzado por una estrategia óptima para $n$, como se describió anteriormente. Entonces $C(1) = 0$, $C(2) = 1$, $C(3) = 2$ y $C(8) = 12$.

Similarmente, $C(100) = 400$ y $\displaystyle\sum_{n = 1}^{100} C(n) = 17575$.

Encuentra $\displaystyle\sum_{n = 1}^{200\\,000} C(n)$.

# --hints--

`lowestCostSearch()` debería devolver `260511850222`.

```js
assert.strictEqual(lowestCostSearch(), 260511850222);
```

# --seed--

## --seed-contents--

```js
function lowestCostSearch() {

  return true;
}

lowestCostSearch();
```

# --solutions--

```js
// solution required
```

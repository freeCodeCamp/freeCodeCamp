---
id: 587d7fac367417b2b2512bdc
title: >-
  Usa le funzioni d3.max e d3.min per trovare i valori minimi e massimi in un set di dati
challengeType: 6
forumTopicId: 301496
dashedName: >-
  use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset
---

# --description--

I metodi D3 `domain()` e `range()` impostano tali informazioni per la tua scala in base ai dati. Ci sono un paio di metodi per renderlo più facile.

Spesso quando imposti il dominio, vorrai utilizzare i valori minimo e massimo all'interno del set di dati. Tentare di trovare questi valori manualmente, soprattutto in un set di dati di grandi dimensioni, può causare errori.

D3 ha due metodi - `min()` e `max()` per restituire queste informazioni. Ecco un esempio:

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

Un set di dati può avere array annidati, come le coppie di coordinate `[x, y]` che erano nell'esempio del grafico a dispersione. In questo caso, è necessario dire a D3 come calcolare il massimo e minimo. Fortunatamente, entrambi i metodi `min()` e `max()` assumono una funzione di callback. In questo esempio, l'argomento `d` della funzione di callback è per l'attuale array interno. Il callback deve restituire l'elemento dall'array interno (il valore `x` o `y`) su cui si desidera calcolare il massimo o minimo. Ecco un esempio di come trovare i valori minimi e massimi con un array di array:

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
```

`minX` avrà il valore `1`.

# --instructions--

L'array `positionData` contiene sotto-array di coordinate x, y e z. Utilizza un metodo D3 per trovare il valore massimo della coordinata z (il terzo valore) dagli array e salvarlo nella variabile `output`.

# --hints--

Il testo di `h2` dovrebbe essere `8`.

```js
assert(output == 8 && $('h2').text() == '8');
```

Il tuo codice dovrebbe usare il metodo `max()`.

```js
assert(
  code.match(/\.max/g),
  'Your code should use the <code>max()</code> method.'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

    const output = d3.max(positionData, (d) => d[2])

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

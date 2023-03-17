---
id: 587d7fac367417b2b2512bdd
title: Usare scale dinamiche
challengeType: 6
forumTopicId: 301495
dashedName: use-dynamic-scales
---

# --description--

I metodi D3 `min()` e `max()` sono utili per impostare la scala.

Dato un insieme di dati complesso, una priorità è quella di impostare la scala in modo che la visualizzazione si adatti alla larghezza e all'altezza del contenitore SVG. You want all the data plotted inside the SVG so it's visible on the web page.

L'esempio qui sotto imposta la scala dell'asse x per i dati del grafico a dispersione. Il metodo `domain()` passa le informazioni alla scala sui valori dei dati grezzi per il grafico. Il metodo `range()` fornisce informazioni sullo spazio effettivo nella pagina web per la visualizzazione.

Nell'esempio, il dominio va da 0 al massimo nel set di dati. Usa il metodo `max()` con una funzione di callback basata sui valori x negli array. The range uses the SVG's width (`w`), but it includes some padding, too. This puts space between the scatter plot dots and the edge of the SVG.

```js
const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];
const w = 500;
const h = 500;

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
```

Il padding inizialmente può confondere. Picture the x-axis as a horizontal line from 0 to 500 (the width value for the SVG). Includendo il padding nel metodo `range()` costringiamo il grafico a partire da 30 lungo quella linea (invece che da 0), e terminare a 470 (invece che a 500).

# --instructions--

Usa la variabile `yScale` per creare una scala lineare per l'asse y. Il dominio dovrebbe iniziare da zero e andare al valore massimo di `y` nel set. L'intervallo dovrebbe usare l'altezza SVG (`h`) e includere il padding.

**Nota:** Ricordati di mantenere il grafico nel verso giusto. Quando si imposta l'intervallo per le coordinate y, il valore più alto (altezza meno padding) è il primo argomento, e il valore più basso è il secondo argomento.

# --hints--

Il testo di `h2` dovrebbe essere `30`.

```js
assert(output == 30 && $('h2').text() == '30');
```

Il `domain()` di yScale dovrebbe essere equivalente a `[0, 411]`.

```js
assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
```

Il `range()` di yScale dovrebbe essere equivalente a `[470, 30]`.

```js
assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;

    // Padding between the SVG boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
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
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;


    const padding = 30;

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);


    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);


    const output = yScale(411);
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

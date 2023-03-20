---
id: 587d7fad367417b2b2512bdf
title: Aggiungere gli assi a una visualizzazione
challengeType: 6
forumTopicId: 301472
dashedName: add-axes-to-a-visualization
---

# --description--

Un altro modo per migliorare il grafico a dispersione è quello di aggiungere un asse x e un asse y.

D3 ha due metodi, `axisLeft()` e `axisBottom()`, per tracciare rispettivamente l'asse Y e l'asse x. Ecco un esempio per creare l'asse x basato sulla `xScale` delle sfide precedenti:

```js
const xAxis = d3.axisBottom(xScale);
```

The next step is to render the axis on the SVG. Per farlo, è possibile utilizzare un componente SVG generale, l'elemento `g`. La `g` sta per gruppo. A differenza di `rect`, `circle`, e `text`, un asse è solo una linea retta quando è disegnato. Poiché è una forma semplice, usare `g` funziona. The last step is to apply a `transform` attribute to position the axis on the SVG in the right place. Otherwise, the line would render along the border of the SVG and wouldn't be visible. SVG supporta diversi tipi di trasformazioni (`transforms`), ma il posizionamento di un asse necessita di traslare (`translate`). Quando viene applicato all'elemento `g`, esso sposta l'intero gruppo sopra e verso il basso in base alle quantità indicate. Ecco un esempio:

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

The above code places the x-axis at the bottom of the SVG. Quindi è passato come argomento al metodo `call()`. L'asse y funziona allo stesso modo, a parte il fatto che l'argomento `translate` è nella forma `(x, 0)`. Poiché `translate` è una stringa nel metodo `attr()` scritto sopra, puoi usare la concatenazione per includere valori variabili nei suoi argomenti.

# --instructions--

Il grafico di dispersione ora ha un asse x. Crea un asse Y in una variabile chiamata `yAxis` utilizzando il metodo `axisLeft()`. Quindi disegna l'asse usando un elemento `g`. Assicurati di utilizzare un attributo `transform` per traslare l'asse verso destra di un numero di unità pari al padding, e di `0` unità verso il basso. Ricordati di richiamare l'asse con `call()`.

# --hints--

Il tuo codice dovrebbe usare il metodo `axisLeft()` con `yScale` passato come argomento.

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

L'elemento y-axis di `g` dovrebbe avere un attributo `transform` per traslare l'asse di `(60, 0)`.

```js
assert(
  $('g')
    .eq(10)
    .attr('transform')
    .match(/translate\(60\s*?,\s*?0\)/g)
);
```

Il tuo codice dovrebbe chiamare `yAxis`.

```js
assert(code.match(/\.call\(\s*yAxis\s*\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = undefined;
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    // Add your code below this line



    // Add your code above this line

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);

    const yAxis = d3.axisLeft(yScale);


    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis)

  </script>
</body>
```

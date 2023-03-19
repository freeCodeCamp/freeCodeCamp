---
id: 587d7fab367417b2b2512bda
title: Creare una scala lineare con D3
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

The bar and scatter plot charts both plotted data directly onto the SVG. Tuttavia, se l'altezza di una barra o di uno dei punti dati era maggiore dell'altezza o della larghezza della tela, sarebbero andati al di fuori dell'area SVG.

In D3 le scale aiutano a tracciare i dati. `scales` are functions that tell the program how to map a set of raw data points onto the pixels of the SVG.

For example, say you have a 100x500-sized SVG and you want to plot Gross Domestic Product (GDP) for a number of countries. La serie di numeri sarà dell'ordine del miliardo o triliardo di dollari. Puoi fornire a D3 un tipo di scala per dirgli come collocare i grandi valori del PIL in quell'area di dimensioni 100x500.

È improbabile che si traccino i dati grezzi così come sono. Before plotting it, you set the scale for your entire data set, so that the `x` and `y` values fit your SVG width and height.

D3 ha diversi tipi di scala. Per una scala lineare (di solito utilizzata con dati quantitativi), c'è il metodo D3 `scaleLinear()`:

```js
const scale = d3.scaleLinear()
```

Per impostazione predefinita, una scala utilizza la relazione di identità. Il valore dell'input è lo stesso del valore dell'output. Una sfida distinta riguarda come cambiare questo comportamento.

# --instructions--

Cambia la variabile `scale` per creare una scala lineare. Quindi imposta la variabile `output` sulla scala chiamata con un argomento di input di `50`.

# --hints--

Il testo di `h2` dovrebbe essere `50`.

```js
assert($('h2').text() == '50');
```

Il tuo codice dovrebbe utilizzare il metodo `scaleLinear()`.

```js
assert(code.match(/\.scaleLinear/g));
```

La variabile `output` dovrebbe chiamare `scale` con un argomento di `50`.

```js
assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call scale with an argument here

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>

    const scale = d3.scaleLinear();
    const output = scale(50); 

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```

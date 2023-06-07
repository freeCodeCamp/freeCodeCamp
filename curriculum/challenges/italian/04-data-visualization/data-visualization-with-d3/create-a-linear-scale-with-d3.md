---
id: 587d7fab367417b2b2512bda
title: Creare una scala lineare con D3
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

I diagrammi a barre e a dispersione tracciavano i dati direttamente sull'SVG. Tuttavia, se l'altezza di una barra o di uno dei punti dati era maggiore dell'altezza o della larghezza della tela, sarebbero andati al di fuori dell'area SVG.

In D3 le scale aiutano a tracciare i dati. Le `scales` sono funzioni che dicono al programma come mappare un insieme di punti dati sui pixel dell'SVG.

Ad esempio, diciamo di avere un SVG di dimensioni 100x500 e di voler tracciare il prodotto interno lordo (PIL) per un certo numero di paesi. La serie di numeri sarà dell'ordine del miliardo o triliardo di dollari. Puoi fornire a D3 un tipo di scala per dirgli come collocare i grandi valori del PIL in quell'area di dimensioni 100x500.

È improbabile che si traccino i dati grezzi così come sono. Prima di tracciarli, imposta la scala per l'intero set di dati, in modo che i valori `x` e `y` si adattino alla larghezza e all'altezza dell'SVG.

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

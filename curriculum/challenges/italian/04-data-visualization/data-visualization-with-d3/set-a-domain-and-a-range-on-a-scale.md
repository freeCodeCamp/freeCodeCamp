---
id: 587d7fac367417b2b2512bdb
title: Impostare un dominio e un intervallo su una scala
challengeType: 6
forumTopicId: 301491
dashedName: set-a-domain-and-a-range-on-a-scale
---

# --description--

Per impostazione predefinita, le scale usano la relazione identità. Questo significa che il valore in ingresso viene mappato al valore in uscita. Tuttavia, le scale possono essere molto più flessibili e interessanti.

Diciamo che un set di dati ha valori che vanno da 50 a 480. Queste sono le informazioni di input per una scala, noto anche come il <dfn>dominio</dfn>.

You want to map those points along the `x` axis on the SVG, between 10 units and 500 units. Queste sono le informazioni di output, note anche come <dfn>l'intervallo</dfn>.

I metodi `domain()` e `range()` impostano questi valori per la scala. Entrambi i metodi prendono un array di almeno due elementi come argomento. Ecco un esempio:

```js
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

In ordine, i seguenti valori saranno visualizzati nella console: `10`, `500`, `323.37`, e `807.67`.

Si noti che la scala utilizza la relazione lineare tra i valori del dominio e dell'intervallo per capire quale dovrebbe essere l'output per un dato numero. Il valore minimo nel dominio (50) mappa al valore minimo (10) nell'intervallo.

# --instructions--

Crea una scala e imposta il suo dominio a `[250, 500]` e intervallo a `[10, 150]`.

**Nota:** Puoi concatenare i metodi `domain()` e `range()` sulla variabile `scale`.

# --hints--

Il tuo codice dovrebbe usare il metodo `domain()`.

```js
assert(code.match(/\.domain/g));
```

Il `domain()` della scala `scale` dovrebbe essere impostato a `[250, 500]`.

```js
assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
```

Il tuo codice dovrebbe usare il metodo `range()`.

```js
assert(code.match(/\.range/g));
```

L'intervallo `range()` della `scale` dovrebbe essere impostato a `[10, 150]`.

```js
assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
```

Il testo nell'`h2` dovrebbe essere `-102`.

```js
assert($('h2').text() == '-102');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();



    // Add your code above this line
    const output = scale(50);
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
    scale.domain([250, 500])
    scale.range([10, 150])
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```

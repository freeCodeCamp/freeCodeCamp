---
id: 587d7fa8367417b2b2512bc9
title: Aggiornare dinamicamente l'altezza di un elemento
challengeType: 6
forumTopicId: 301493
dashedName: update-the-height-of-an-element-dynamically
---

# --description--

Le sfide precedenti hanno spiegato come visualizzare i dati presi da un array e come aggiungere classi CSS. Puoi combinare queste lezioni per creare un semplice grafico a barre. Puoi farlo in due passaggi:

1) Creare un `div` per ogni data point nell'array

2) Dare ad ogni `div` un'altezza dinamica, usanto una funzione callback nel metodo `style()` che imposta un'altezza pari al valore del dato

Ricordati il formato per impostare uno stile usando una funzione callback:

```js
selection.style("cssProperty", (d) => d)
```

# --instructions--

Aggiungi il metodo `style()` al codice nell'editor per impostare la proprietà `height` per ogni elemento. Usa una funzione callback per restituire il valore del data point con la stringa `px` aggiunta ad esso.

# --hints--

Il primo `div` dovrebbe avere un'`height` di `12` pixel.

```js
assert($('div').eq(0)[0].style.height === '12px');
```

Il secondo `div` dovrebbe avere un'`height` di `31` pixel.

```js
assert($('div').eq(1)[0].style.height === '31px');
```

Il terzo `div` dovrebbe avere un'`height` di `22` pixel.

```js
assert($('div').eq(2)[0].style.height === '22px');
```

Il quarto `div` dovrebbe avere un'`height` di `17` pixel.

```js
assert($('div').eq(3)[0].style.height === '17px');
```

Il quinto `div` dovrebbe avere un'`height` di `25` pixel.

```js
assert($('div').eq(4)[0].style.height === '25px');
```

Il sesto `div` dovrebbe avere un'`height` di `18` pixel.

```js
assert($('div').eq(5)[0].style.height === '18px');
```

Il settimo `div` dovrebbe avere un'`height` di `29` pixel.

```js
assert($('div').eq(6)[0].style.height === '29px');
```

L'ottavo `div` dovrebbe avere un'`height` di `14` pixel.

```js
assert($('div').eq(7)[0].style.height === '14px');
```

Il nono `div` dovrebbe avere un'`height` di `9` pixel.

```js
assert($('div').eq(8)[0].style.height === '9px');
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style('height', d => `${d}px`)
  </script>
</body>
```

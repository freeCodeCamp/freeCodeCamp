---
id: 587d7fab367417b2b2512bd8
title: Adicionar atributos aos elementos de círculo
challengeType: 6
forumTopicId: 301471
dashedName: add-attributes-to-the-circle-elements
---

# --description--

O último desafio criou os elementos `circle` para cada ponto no `dataset` e anexou-os ao SVG. Porém, o D3 precisa de mais informações sobre a posição e o tamanho de cada `circle` para exibi-los corretamente.

Um `circle` em SVG tem três atributos principais. Os atributos `cx` e `cy` são as coordenadas. Elas informam ao D3 onde posicionar o *centro* da forma no SVG. O raio (atributo `r`) fornece o tamanho de `circle`.

Assim como ocorre com `rect`, em sua coordenada `y`, o atributo `cy` de um `circle` é medido do topo do SVG, não da parte inferior.

Todos os três atributos podem usar uma função de callback para definir seus valores dinamicamente. Lembre-se de que todos os métodos encadeados após `data(dataset)` são executados uma vez por item no `dataset`. O parâmetro `d` na função de callback se refere ao item atual no `dataset`, que é um array para aquele ponto. Use a notação de colchetes, por exemplo `d[0]`, para acessar valores naquele array.

# --instructions--

Adicione os atributos `cx`, `cy` e `r` aos elementos `circle`. O valor de `cx` deve ser o primeiro número do array para cada item no `dataset`. O valor de `cy` deve ser baseado no segundo número do array, mas certifique-se de mostrar o gráfico voltado para o lado certo, em vez de invertido. O valor de `r` deve ser `5` para todos os círculos.

# --hints--

O código deve ter 10 elementos `circle`.

```js
assert($('circle').length == 10);
```

O primeiro elemento `circle` deve ter um valor `cx` de `34`, um valor `cy` de `422` e um valor `r` de `5`.

```js
assert(
  $('circle').eq(0).attr('cx') == '34' &&
    $('circle').eq(0).attr('cy') == '422' &&
    $('circle').eq(0).attr('r') == '5'
);
```

O segundo elemento `circle` deve ter um valor `cx` de `109`, um valor `cy` de `220` e um valor `r` de `5`.

```js
assert(
  $('circle').eq(1).attr('cx') == '109' &&
    $('circle').eq(1).attr('cy') == '220' &&
    $('circle').eq(1).attr('r') == '5'
);
```

O terceiro elemento `circle` deve ter um valor `cx` de `310`, um valor `cy` de `380` e um valor `r` de `5`.

```js
assert(
  $('circle').eq(2).attr('cx') == '310' &&
    $('circle').eq(2).attr('cy') == '380' &&
    $('circle').eq(2).attr('r') == '5'
);
```

O quarto elemento `circle` deve ter um valor `cx` de `79`, um valor `cy` de `89` e um valor `r` de `5`.

```js
assert(
  $('circle').eq(3).attr('cx') == '79' &&
    $('circle').eq(3).attr('cy') == '89' &&
    $('circle').eq(3).attr('r') == '5'
);
```

O quinto elemento `circle` deve ter um valor `cx` de `420`, um valor `cy` de `280` e um valor `r` de `5`.

```js
assert(
  $('circle').eq(4).attr('cx') == '420' &&
    $('circle').eq(4).attr('cy') == '280' &&
    $('circle').eq(4).attr('r') == '5'
);
```

O sexto elemento `circle` deve ter um valor `cx` de `233`, um valor `cy` de `355` e um valor `r` de `5`.

```js
assert(
  $('circle').eq(5).attr('cx') == '233' &&
    $('circle').eq(5).attr('cy') == '355' &&
    $('circle').eq(5).attr('r') == '5'
);
```

O sétimo elemento `circle` deve ter um valor `cx` de `333`, um valor `cy` de `404` e um valor `r` de `5`.

```js
assert(
  $('circle').eq(6).attr('cx') == '333' &&
    $('circle').eq(6).attr('cy') == '404' &&
    $('circle').eq(6).attr('r') == '5'
);
```

O oitavo elemento `circle` deve ter um valor `cx` de `222`, um valor `cy` de `167` e um valor `r` de `5`.

```js
assert(
  $('circle').eq(7).attr('cx') == '222' &&
    $('circle').eq(7).attr('cy') == '167' &&
    $('circle').eq(7).attr('r') == '5'
);
```

O nono elemento `circle` deve ter um valor `cx` de `78`, um valor `cy` de `180` e um valor `r` de `5`.

```js
assert(
  $('circle').eq(8).attr('cx') == '78' &&
    $('circle').eq(8).attr('cy') == '180' &&
    $('circle').eq(8).attr('r') == '5'
);
```

O décimo elemento `circle` deve ter um valor `cx` de `21`, um valor `cy` de `377` e um valor `r` de `5`.

```js
assert(
  $('circle').eq(9).attr('cx') == '21' &&
    $('circle').eq(9).attr('cy') == '377' &&
    $('circle').eq(9).attr('r') == '5'
);
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

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
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

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)

  </script>
</body>
```

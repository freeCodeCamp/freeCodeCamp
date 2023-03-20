---
id: 587d7fab367417b2b2512bd7
title: Criar um diagrama de dispersão com círculos do SVG
challengeType: 6
forumTopicId: 301484
dashedName: create-a-scatterplot-with-svg-circles
---

# --description--

Um diagrama de dispersão é outro tipo de visualização. Ele geralmente usa círculos para mapear pontos de dados, que têm dois valores cada. Esses valores estão relacionados aos eixos `x` e `y`, sendo usados para posicionar o círculo na visualização.

O SVG tem uma tag `circle` para criar a forma do círculo. Funciona muito parecido com os elementos `rect` que você usou para o gráfico de barras.

# --instructions--

Use os métodos `data()`, `enter()` e `append()` para associar o `dataset` aos novos elementos de `circle` que são incluídos no SVG.

**Observação:** os círculos não serão visíveis porque ainda não definimos seus atributos. Faremos isso no próximo desafio.

# --hints--

O código deve ter 10 elementos `circle`.

```js
assert($('circle').length == 10);
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

  </script>
</body>
```

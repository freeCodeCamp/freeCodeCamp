---
id: 587d7fac367417b2b2512bdd
title: Usar escalas dinâmicas
challengeType: 6
forumTopicId: 301495
dashedName: use-dynamic-scales
---

# --description--

Os métodos `min()` e `max()` do D3 são úteis para definir a escala.

Dado um conjunto de dados complexos, uma prioridade é definir a escala para que a visualização se encaixe na largura e na altura do contêiner do SVG. Você quer todos os dados plotados dentro do SVG para que sejam visíveis na página da web.

O exemplo abaixo define a escala do eixo x para dados do diagrama de dispersão. O método `domain()` passa informações para a escala sobre os valores dos dados brutos para a plotagem. O método `range()` dá a ela informações sobre o espaço real na página da web para a visualização.

No exemplo, o domínio vai de 0 ao valor máximo do conjunto. Ele usa o método `max()` com uma função de callback baseada nos valores de x nos arrays. A imagem (range) usa a largura do SVG (`w`), mas também inclui algum preenchimento. Isso coloca o espaço entre os pontos do diagrama de dispersão e a borda do SVG.

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

O preenchimento pode ser confuso no começo. Imagine o eixo x como uma linha horizontal de 0 a 500 (o valor de largura para o SVG). Incluir o preenchimento no método `range()` força o gráfico a começar de 30 ao longo dessa linha (em vez de 0) e terminar em 470 (em vez de 500).

# --instructions--

Use a variável `yScale` para criar uma escala linear no eixo y. O domínio deve começar em zero e ir até o valor de `y` máximo no conjunto. A imagem (range) deve usar a altura do SVG (`h`) e incluir o preenchimento.

**Observação:** lembre-se de manter o gráfico na posição correta. Quando você define a imagem como as coordenadas y, o valor maior (altura menos o preenchimento) é o primeiro argumento, enquanto o valor menor é o segundo argumento.

# --hints--

O texto no `h2` deve ser `30`.

```js
assert(output == 30 && $('h2').text() == '30');
```

O `domain()` de yScale deve ser equivalente a `[0, 411]`.

```js
assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
```

O `range()` de yScale deve ser equivalente a `[470, 30]`.

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

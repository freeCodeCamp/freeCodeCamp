---
id: 587d7fa9367417b2b2512bce
title: Definir dinamicamente as coordenadas para cada barra
challengeType: 6
forumTopicId: 301487
dashedName: dynamically-set-the-coordinates-for-each-bar
---

# --description--

No último desafio, você criou e anexou um retângulo ao elemento `svg` para cada ponto do `dataset` para representar uma barra. Infelizmente, todos eles ficaram empilhados um sobre o outro.

O posicionamento de um retângulo é realizado pelos atributos `x` e `y`. Eles dizem ao D3 onde começar a desenhar a forma na área `svg`. O último desafio os definiu como 0. Então, todas as barras foram colocadas no canto superior esquerdo.

Para um gráfico de barras, todas as barras devem ficar no mesmo nível vertical, o que significa que o valor de `y` permanece o mesmo (0) para todas as barras. O valor de `x`, no entanto, precisa ser alterado conforme você adiciona novas barras. Lembre-se de que valores de `x` maiores empurram os itens mais para a direita. À medida que você passa pelos elementos do array no `dataset`, o valor de `x` deve aumentar.

O método `attr()` do D3 aceita uma função de callback para definir dinamicamente esse atributo. A função de callback recebe dois argumentos, um para os dados em si (geralmente `d`) e um para o índice do ponto dos dados no array. O segundo argumento para o índice é opcional. Este é o formato:

```js
selection.attr("property", (d, i) => {

})
```

É importante notar que você NÃO precisa escrever um laço `for` ou usar `forEach()` para iterar pelos itens no conjunto de dados. Lembre-se de que o método `data()` analisa o conjunto de dados. Qualquer método que seja encadeado após `data()` é executado uma vez por cada item no conjunto de dados.

# --instructions--

Altere a função de callback `x` para que ela retorne o índice 30 vezes.

**Observação:** cada barra tem uma largura de 25, então aumentar cada valor de `x` por 30 adiciona algum espaço entre as barras. Qualquer valor superior a 25 poderia servir neste exemplo.

# --hints--

O primeiro `rect` deve ter um valor de `x` igual a `0`.

```js
assert($('rect').eq(0).attr('x') == '0');
```

O segundo `rect` deve ter um valor de `x` igual a `30`.

```js
assert($('rect').eq(1).attr('x') == '30');
```

O terceiro `rect` deve ter um valor de `x` igual a `60`.

```js
assert($('rect').eq(2).attr('x') == '60');
```

O quarto `rect` deve ter um valor de `x` igual a `90`.

```js
assert($('rect').eq(3).attr('x') == '90');
```

O quinto `rect` deve ter um valor de `x` igual a `120`.

```js
assert($('rect').eq(4).attr('x') == '120');
```

O sexto `rect` deve ter um valor de `x` igual a `150`.

```js
assert($('rect').eq(5).attr('x') == '150');
```

O sétimo `rect` deve ter um valor de `x` igual a `180`.

```js
assert($('rect').eq(6).attr('x') == '180');
```

O oitavo `rect` deve ter um valor de `x` igual a `210`.

```js
assert($('rect').eq(7).attr('x') == '210');
```

O nono `rect` deve ter um valor de `x` igual a `240`.

```js
assert($('rect').eq(8).attr('x') == '240');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
         return i * 30
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```

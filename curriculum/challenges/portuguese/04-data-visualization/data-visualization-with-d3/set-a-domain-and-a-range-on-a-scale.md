---
id: 587d7fac367417b2b2512bdb
title: Definir um domínio e uma imagem em uma escala
challengeType: 6
forumTopicId: 301491
dashedName: set-a-domain-and-a-range-on-a-scale
---

# --description--

Por padrão, as escalas usam a relação de identidade. Isso significa que o valor de entrada mapeia para o valor de saída. Entretanto, as escalas podem ser muito mais flexíveis e interessantes.

Digamos que um conjunto de dados tenha valores em um intervalo de 50 a 480. Esta é a informação de entrada para uma escala, também conhecida como o <dfn>domínio</dfn>.

Você deseja mapear esses pontos sobre o eixo `x` no SVG, entre 10 e 500 unidades. Esta é a informação de saída, também conhecida como o <dfn>imagem</dfn>.

Os métodos `domain()` e `range()` definem esses valores para a escala. Os dois métodos recebem um array de pelo menos dois elementos como argumento. Exemplo:

```js
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

Em ordem, os valores a seguir serão exibidos no console: `10`, `500`, `323.37` e `807.67`.

Observe que a escala usa a relação linear entre os valores do domínio e da imagem para descobrir qual deve ser a saída para um determinado número. O valor mínimo no domínio (50) é mapeado para o valor mínimo (10) na imagem.

# --instructions--

Crie uma escala e defina seu domínio como `[250, 500]` e sua imagem (range) como `[10, 150]`.

**Observação:** você pode encadear os métodos `domain()` e `range()` na variável `scale`.

# --hints--

O código deve usar o método `domain()`.

```js
assert(code.match(/\.domain/g));
```

O `domain()` de `scale` deve ser definido como `[250, 500]`.

```js
assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
```

O código deve usar o método `range()`.

```js
assert(code.match(/\.range/g));
```

O `range()` de `scale` deve ser definido como `[10, 150]`.

```js
assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
```

O texto no `h2` deve ser `-102`.

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

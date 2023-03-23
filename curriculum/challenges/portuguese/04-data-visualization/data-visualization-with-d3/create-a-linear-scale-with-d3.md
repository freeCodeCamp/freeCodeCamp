---
id: 587d7fab367417b2b2512bda
title: Criar uma escala linear com o D3
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

O gráfico de barras e o diagrama de dispersão traçam os dados diretamente no SVG. No entanto, se a altura de uma barra ou de um dos pontos de dados for maior que os valores de altura ou de largura do SVG, acabaria saindo dá área do SVG.

No D3, há escalas para ajudar a traçar os dados. As `scales` são funções que dizem ao programa como mapear um conjunto de pontos de dados brutos para os pixels do SVG.

Por exemplo, digamos que você tem um SVG de 100x500 de tamanho e que deseja representar o produto interno bruto (PIB) de vários países. O conjunto dos números estaria na faixa de bilhões ou trilhões de dólares. Você fornece ao D3 um tipo de escala para dizer como colocar os grandes valores do PIB naquela área de tamanho de 100x500.

É improvável que você trace os dados brutos como estão. Antes de desenhá-los, defina a escala de todo o seu conjunto de dados, de modo que os valores de `x` e `y` se ajustem à largura e à altura do SVG.

O D3 tem vários tipos de escala. Para uma escala linear (geralmente usada com dados quantitativos), existe o método `scaleLinear()` do D3:

```js
const scale = d3.scaleLinear()
```

Por padrão, uma escala usa a relação de identidade. O valor de entrada é o mesmo que o valor de saída. Um desafio separado trata da maneira de alterar esta situação.

# --instructions--

Altere a variável `scale` para criar uma escala linear. Em seguida, defina a variável `output` como a escala chamada com um argumento de entrada de `50`.

# --hints--

O texto no `h2` deve ser `50`.

```js
assert($('h2').text() == '50');
```

O código deve usar o método `scaleLinear()`.

```js
assert(code.match(/\.scaleLinear/g));
```

A variável `output` deve chamar a `scale` com um argumento de `50`.

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

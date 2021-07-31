---
id: 587d7fac367417b2b2512bdc
title: >-
  Usar as funções d3.max e d3.min para encontrar valores mínimos e máximos em um conjunto de dados
challengeType: 6
forumTopicId: 301496
dashedName: >-
  use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset
---

# --description--

Os métodos `domain()` e `range()` do D3 definem essas informações para sua escala com base nos dados. Existem alguns métodos que tornam isso mais fácil.

Muitas vezes, quando você define o domínio, vai querer usar os valores mínimo e máximo dentro do conjunto de dados. Tentar encontrar esses valores manualmente, especialmente em um conjunto grande de dados, pode causar erros.

O D3 tem dois métodos - `min()` e `max()` - para retornar essa informação. Exemplo:

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

Um conjunto de dados pode ter arrays aninhados, como os pares de coordenadas `[x, y]` que estavam no diagrama de dispersão do exemplo. Nesse caso, você precisa dizer ao D3 como calcular o máximo e o mínimo. Felizmente, ambos os métodos `min()` e `max()` têm uma função de callback. Neste exemplo, o argumento da função de callback `d` é para o array interno atual. A função de callback precisa retornar o elemento do array interno (o valor `x` ou `y`) sobre o qual você deseja calcular o máximo ou o mínimo. Aqui vemos um exemplo de como encontrar os valores mínimo e máximo em um array de arrays:

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
```

`minX` teria o valor `1`.

# --instructions--

O array `positionData` contém subarrays das coordenadas x, y e z. Use um método do D3 para encontrar o valor máximo da coordenada z (o terceiro valor) entre os arrays e salvá-lo na variável `output`.

# --hints--

O texto no `h2` deve ser `8`.

```js
assert(output == 8 && $('h2').text() == '8');
```

O código deve usar o método `max()`.

```js
assert(
  code.match(/\.max/g),
  'Your code should use the <code>max()</code> method.'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

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
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

    const output = d3.max(positionData, (d) => d[2])

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

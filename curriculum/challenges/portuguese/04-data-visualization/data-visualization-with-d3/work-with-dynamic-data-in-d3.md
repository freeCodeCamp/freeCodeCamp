---
id: 587d7fa7367417b2b2512bc5
title: Trabalhar com dados dinâmicos no D3
challengeType: 6
forumTopicId: 301498
dashedName: work-with-dynamic-data-in-d3
---

# --description--

Os dois últimos desafios cobrem o básico da exibição de dados dinamicamente com o D3 usando os métodos `data()` e `enter()`. Esses métodos requerem um conjunto de dados e, junto com o método `append()`, criam um novo elemento do DOM para cada entrada no conjunto de dados.

No desafio anterior, você criou um novo elemento `h2` para cada item no array do `dataset`, mas todos continham o mesmo texto, `New Title`. Isso ocorreu porque você ainda não utilizou os dados que estão associados a cada um dos elementos `h2`.

O método `text()` do D3 pode receber uma string ou uma função de callback como um argumento:

```js
selection.text((d) => d)
```

No exemplo acima, o parâmetro `d` se refere a uma única entrada no conjunto de dados a qual uma seleção está vinculada.

Usando o exemplo atual como contexto, o primeiro elemento `h2` está ligado a 12, o segundo elemento `h2` está ligado a 31, o terceiro elemento `h2` está ligado a 22 e assim por diante.

# --instructions--

Altere o método `text()` para que cada elemento `h2` exiba o valor correspondente do array do `dataset` com um único espaço e a string `USD`. Por exemplo, o primeiro título deve ser `12 USD`.

# --hints--

O primeiro `h2` deve ter o texto `12 USD`.

```js
assert($('h2').eq(0).text() == '12 USD');
```

O segundo `h2` deve ter o texto `31 USD`.

```js
assert($('h2').eq(1).text() == '31 USD');
```

O terceiro `h2` deve ter o texto `22 USD`.

```js
assert($('h2').eq(2).text() == '22 USD');
```

O quarto `h2` deve ter o texto `17 USD`.

```js
assert($('h2').eq(3).text() == '17 USD');
```

O quinto `h2` deve ter o texto `25 USD`.

```js
assert($('h2').eq(4).text() == '25 USD');
```

O sexto `h2` deve ter o texto `18 USD`.

```js
assert($('h2').eq(5).text() == '18 USD');
```

O sétimo `h2` deve ter o texto `29 USD`.

```js
assert($('h2').eq(6).text() == '29 USD');
```

O oitavo `h2` deve ter o texto `14 USD`.

```js
assert($('h2').eq(7).text() == '14 USD');
```

O nono `h2` deve ter o texto `9 USD`.

```js
assert($('h2').eq(8).text() == '9 USD');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      // Add your code below this line

      .text("New Title");

      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => `${d} USD`);

  </script>
</body>
```

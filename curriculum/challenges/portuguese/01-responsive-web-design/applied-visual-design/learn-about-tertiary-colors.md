---
id: 587d78a4367417b2b2512ad2
title: Aprender sobre cores terciárias
challengeType: 0
forumTopicId: 301057
dashedName: learn-about-tertiary-colors
---

# --description--

Monitores de computador e telas de dispositivos criam cores diferentes ao combinar quantidades de luz vermelha, verde e azul. Na teoria moderna das cores, isso é conhecido como o modelo de cores aditivas RGB. Vermelho - red (R), verde - green (G) e azul - blue (B) são chamados de cores primárias. A mistura de duas cores primárias cria cores secundárias: ciano (G + B), magenta (R + B) e amarelo (R + G). Você viu essas cores no desafio Cores complementares. A cor secundária formada da mistura de duas cores primárias acaba sendo o complemento a cor primária que não foi utilizada na criação dessa cor secundária. No círculo cromático, essa cor secundária é o oposto da cor primária que não foi utilizada em sua criação. Para visualizar melhor, procure por círculo cromático na Internet e olhe para a cor magenta. Ela é uma cor secundária criada a partir da mistura das cores vermelho e azul e é o oposto da cor verde.

As cores terciárias são o resultado da combinação de uma cor primária com uma cor secundária próxima. Por exemplo, dentro do modelo de cores RGB, a mistura de vermelho (primário) e amarelo (secundário) cria-se o laranja (terciário). Essa combinação adiciona mais seis cores a um círculo cromático simples, somando um total de doze cores.

Existem vários métodos de seleção de cores diferentes que resultam em uma combinação harmoniosa de design. Um exemplo que usa cores terciárias é o chamado esquema de cores complementares divididas. Esse esquema começa com uma cor de base e a emparelha com as duas cores adjacentes (próximas) ao seu complemento. As três cores fornecem forte contraste visual, mas são mais sutis do que usar duas cores complementares.

Aqui estão três cores criadas usando o esquema de cores complementares divididas:

<table class='table table-striped'><thead><tr><th>Cor</th><th>Código hexadecimal</th></tr></thead><thead></thead><tbody><tr><td>laranja</td><td>#FF7F00</td></tr><tr><td>ciano</td><td>#00FFFF</td></tr><tr><td>framboesa</td><td>#FF007F</td></tr></tbody></table>

# --instructions--

Altere a propriedade `background-color` das classes `orange` (laranja), `cyan` (ciano) e `raspberry` (framboesa) para suas respectivas cores. Certifique-se de usar os códigos hexadecimais e não os nomes das cores.

# --hints--

O elemento `div` com a classe `orange` deve ter a propriedade `background-color` de cor laranja.

```js
assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
```

O elemento `div` com a classe `cyan` deve ter a propriedade `background-color` com o valor cyan (ciano).

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

O elemento `div` com a classe `raspberry` deve ter a propriedade `background-color` de cor framboesa.

```js
assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
```

Todos os valores de cada propriedade `background-color` devem ser códigos hexadecimais e não nomes de cores.

```js
assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

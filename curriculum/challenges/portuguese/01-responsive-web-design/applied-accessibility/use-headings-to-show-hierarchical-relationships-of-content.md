---
id: 587d774d367417b2b2512a9e
title: Usar títulos para criar relações hierárquicas de conteúdo
challengeType: 0
videoUrl: 'https://scrimba.com/c/cqVEktm'
forumTopicId: 301026
dashedName: use-headings-to-show-hierarchical-relationships-of-content
---

# --description--

Títulos (elementos `h1` até `h6`) são tags que ajudam a fornecer estrutura e rotulagem ao seu conteúdo. Os leitores de tela podem ser configurados para ler apenas os cabeçalhos de uma página para que o usuário obtenha um resumo. Isso significa que é importante que as tags de título em seu código tenham significado semântico e se relacionem umas com as outras. Também é importante que não sejam escolhidas apenas pelo tamanho da fonte que essas tags fornecem.

*Significado semântico* significa que a tag que você usa em torno do conteúdo (do texto) indica o tipo de informação que a tag contém.

Se você estivesse escrevendo um artigo com uma introdução, um corpo e uma conclusão, não faria muito sentido colocar a conclusão como uma subseção do corpo. A conclusão deve ter sua própria seção. Da mesma forma, as tags de título em uma página da web precisam estar em ordem e indicar as relações hierárquicas de seu conteúdo.

Títulos com classificação igual (ou superior) iniciam novas seções, títulos com classificação inferior começam subseções dentro da seção pai.

Por exemplo: uma página com um elemento `h2` seguido por várias subseções rotuladas com elementos `h4` confundiria um usuário de leitor de tela. Como o HTML5 oferece 6 opções de títulos, pode ser tentador usar uma dessas tags apenas pelo tamanho da fonte que elas oferecem, mas você pode usar o CSS para alterar estes tamanhos.

Uma última observação, cada página deve sempre ter um (e apenas um) elemento `h1`, que é o assunto principal do seu conteúdo. Este e outros cabeçalhos são usados ​​em parte pelos mecanismos de pesquisa para entender o tópico da página.

# --instructions--

O Camper Cat quer uma página no site dedicada a como se tornar um ninja. Ajude-o a corrigir os títulos para que o código tenha significado semântico e mostre as relações pai-filho de forma adequada entre as seções. Altere todas as tags `h5` para o nível de cabeçalho apropriado para indicar que são subseções das tags `h2`. Use a tag `h3` para esse propósito.

# --hints--

O código deve ter 6 elementos `h3`.

```js
assert($('h3').length === 6);
```

O código deve ter 6 tags de fechamento `h3`.

```js
assert((code.match(/\/h3/g) || []).length === 6);
```

O código não deve ter nenhum elemento `h5`.

```js
assert($('h5').length === 0);
```

O código não deve ter nenhuma tag de fechamento `h5`.

```js
assert(/\/h5/.test(code) === false);
```

# --seed--

## --seed-contents--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>
```

# --solutions--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h3>How to Hide in Plain Sight</h3>
  <h3>How to Climb a Wall</h3>

  <h2>Learn the Art of Battle</h2>
  <h3>How to Strengthen your Body</h3>
  <h3>How to Fight like a Ninja</h3>

  <h2>Learn the Art of Living with Honor</h2>
  <h3>How to Breathe Properly</h3>
  <h3>How to Simplify your Life</h3>
</main>
```

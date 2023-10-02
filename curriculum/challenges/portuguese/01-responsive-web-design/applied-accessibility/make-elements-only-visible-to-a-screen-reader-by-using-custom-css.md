---
id: 587d778d367417b2b2512aaa
title: Tornar elementos visíveis apenas para leitores de tela usando CSS personalizado
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJ8QGkhJ'
forumTopicId: 301020
dashedName: make-elements-only-visible-to-a-screen-reader-by-using-custom-css
---

# --description--

Você notou que todos os desafios de acessibilidade aplicados até agora não usaram nenhum CSS? Isso mostra a importância de um esboço lógico do documento e do uso de tags semanticamente significativas em torno de seu conteúdo antes de introduzir o aspecto do design visual.

No entanto, a magia do CSS também pode melhorar a acessibilidade da página quando você deseja ocultar visualmente o conteúdo destinado apenas a leitores de tela. Isso acontece quando as informações estão em formato visual (como um gráfico), mas os usuários de leitores de tela precisam de uma apresentação alternativa (como uma tabela) para acessar os dados. O CSS pode ser usado para posicionar os elementos destinados somente ao leitor de tela fora da área visual da janela do navegador.

Um exemplo de código CSS que realiza isso:

```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

**Observação:** as abordagens com CSS a seguir NÃO farão a mesma coisa:

<ul>
<li><code>display: none;</code> ou <code>visibility: hidden;</code> oculta o conteúdo para todos, incluindo usuários de leitores de tela</li>
<li>Valores de zero para tamanhos de pixel, como <code>width: 0px; height: 0px;</code> removem esse elemento do fluxo do seu documento, o que significa que os leitores de tela vão ignorá-lo.</li>
</ul>

# --instructions--

O Camper Cat criou um gráfico de barras empilhadas muito legal para a página de treinamento e colocou os dados em uma tabela para os usuários com deficiência visual. A tabela já tem uma classe `sr-only`, mas o código CSS ainda não foi criado. Dê a `position` um valor `absolute`, a `left` um valor `-10000px` e a `width` e `height` o valor `1px`.

# --hints--

O código deve definir a propriedade `position` da classe `sr-only` com um valor de `absolute`.

```js
assert($('.sr-only').css('position') == 'absolute');
```

O código deve definir a propriedade `left` da classe `sr-only` com um valor de `-10000px`.

```js
assert($('.sr-only').css('left') == '-10000px');
```

O código deve definir a propriedade `width` da classe `sr-only` com um valor de `1` pixel.

```js
assert(code.match(/width:\s*?1px/gi));
```

O código deve definir a propriedade `height` da classe `sr-only` com um valor de `1` pixel.

```js
assert(code.match(/height:\s*?1px/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  .sr-only {
    position: ;
    left: ;
    width: ;
    height: ;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training -->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
  .sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training -->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

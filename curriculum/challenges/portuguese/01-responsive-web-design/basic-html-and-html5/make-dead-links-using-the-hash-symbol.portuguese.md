---
id: bad87fee1348bd9aedf08817
title: Make Dead Links Using the Hash Symbol
challengeType: 0
videoUrl: ''
localeTitle: Faça links mortos usando o símbolo Hash
---

## Description
<section id="description"> Alguma vezes você irá adicionar elementos <code>a</code> em seu site antes mesmo de saber para onde eles irão ligar. Isso também é útil quando você está alterando o comportamento de um link usando <code>JavaScript</code> , o qual aprenderemos mais tarde. </section>

## Instructions
<section id="instructions"> O valor atual do atributo <code>href</code> é um link que aponta para &quot;https://freecatphotoapp.com&quot;. Substitua o valor do atributo <code>href</code> por um <code>#</code> , também conhecido como um símbolo de hash, para criar um link morto. Por exemplo: <code>href=&quot;#&quot;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Seu elemento <code>a</code> deve ser um link morto com o valor do atributo <code>href</code> definido como &quot;#&quot;.'
    testString: 'assert($("a").attr("href") === "#", "Your <code>a</code> element should be a dead link with the value of the <code>href</code> attribute set to "#".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

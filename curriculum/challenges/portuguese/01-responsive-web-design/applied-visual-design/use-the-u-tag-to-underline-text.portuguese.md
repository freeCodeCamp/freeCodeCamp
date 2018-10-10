---
id: 587d781a367417b2b2512ab8
title: Use the u Tag to Underline Text
challengeType: 0
videoUrl: ''
localeTitle: Use a tag u para sublinhar o texto
---

## Description
<section id="description"> Para sublinhar o texto, você pode usar a tag <code>u</code> . Isso é freqüentemente usado para significar que uma seção de texto é importante, ou algo para lembrar. Com a tag <code>u</code> , o navegador aplica o CSS de <code>text-decoration: underline;</code> para o elemento. </section>

## Instructions
<section id="instructions"> Embrulhe a tag <code>u</code> apenas em torno do texto &quot;Ph.D. students&quot;. <strong>Nota</strong> <br> Tente evitar usar a tag <code>u</code> quando puder ser confundida com um link. As tags de âncora também têm uma formatação sublinhada padrão. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve adicionar uma tag <code>u</code> na marcação.
    testString: 'assert($("u").length === 1, "Your code should add a <code>u</code> tag to the markup.");'
  - text: A tag <code>u</code> deve envolver o texto &quot;Ph.D. students&quot;.
    testString: 'assert($("u").text() === "Ph.D. students", "The <code>u</code> tag should wrap around the text "Ph.D. students".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University</strong>.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

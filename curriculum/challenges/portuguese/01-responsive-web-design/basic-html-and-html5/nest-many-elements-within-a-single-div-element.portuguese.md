---
id: bad87fee1348bd9aede08835
title: Nest Many Elements within a Single div Element
challengeType: 0
videoUrl: ''
localeTitle: Aninhar muitos elementos em um único elemento div
---

## Description
<section id="description"> O elemento <code>div</code> , também conhecido como um elemento de divisão, é um contêiner de propósito geral para outros elementos. O elemento <code>div</code> é provavelmente o elemento HTML mais usado de todos. Assim como qualquer outro elemento de não fechamento automático, você pode abrir um elemento <code>div</code> com <code>&lt;div&gt;</code> e fechá-lo em outra linha com <code>&lt;/div&gt;</code> . </section>

## Instructions
<section id="instructions"> Aninhe suas &quot;Coisas que os gatos adoram&quot; e &quot;Coisas que os gatos odeiam&quot; listam todas em um único elemento <code>div</code> . Dica: Tente colocar a sua abertura <code>div</code> tag acima de suas &quot;coisas gatos adoram&quot; <code>p</code> elemento e seu fechamento <code>div</code> tag após o seu fechamento <code>ol</code> tag para que ambas as listas estão dentro de uma <code>div</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Aninhe seus elementos <code>p</code> dentro do seu elemento <code>div</code> .
    testString: 'assert($("div").children("p").length > 1, "Nest your <code>p</code> elements inside your <code>div</code> element.");'
  - text: Aninhe seu elemento <code>ul</code> dentro do seu elemento <code>div</code> .
    testString: 'assert($("div").children("ul").length > 0, "Nest your <code>ul</code> element inside your <code>div</code> element.");'
  - text: Aninhe seu elemento <code>ol</code> dentro do seu elemento <code>div</code> .
    testString: 'assert($("div").children("ol").length > 0, "Nest your <code>ol</code> element inside your <code>div</code> element.");'
  - text: Certifique-se de que seu elemento <code>div</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<\/div>/g).length === code.match(/<div>/g).length, "Make sure your <code>div</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
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

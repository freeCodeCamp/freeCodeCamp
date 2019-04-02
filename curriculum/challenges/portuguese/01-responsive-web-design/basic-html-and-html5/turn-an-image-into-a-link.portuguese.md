---
id: bad87fee1348bd9aedf08820
title: Turn an Image into a Link
challengeType: 0
videoUrl: ''
localeTitle: Transforme uma imagem em um link
---

## Description
<section id="description"> Você pode criar elementos em links aninhando-os em um elemento <code>a</code>. Aninhe sua imagem em um elemento<code>a</code>. Aqui está um exemplo: <code>&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;https://bit.ly/fcc-running-cats&quot; alt=&quot;Three kittens running towards the camera.&quot;&gt;&lt;/a&gt;</code> Lembre-se de usar <code>#</code> como seu <code>a</code> elemento <code>href</code> propriedade, a fim de transformá-lo em um link morto. </section>

## Instructions
<section id="instructions"> Coloque o elemento de imagem existente dentro de um elemento de âncora. Depois de fazer isso, passe o mouse sobre sua imagem com o cursor. O ponteiro normal do cursor deve se tornar o ponteiro de clique do link. A foto agora é um link. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Aninhe o elemento <code>img</code> existente em <code>a</code> elemento.
    testString: 'assert($("a").children("img").length > 0, "Nest the existing <code>img</code> element within an <code>a</code> element.");'
  - text: 'Sua <code>a</code> elemento deve ser um link morto com um <code>href</code> atributo definido como <code>#</code> .'
    testString: 'assert(new RegExp("#").test($("a").children("img").parent().attr("href")), "Your <code>a</code> element should be a dead link with a <code>href</code> attribute set to <code>#</code>.");'
  - text: Certifique-se de cada um de seus elementos <code>a</code> tem uma marca de fechamento.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure each of your <code>a</code> elements has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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

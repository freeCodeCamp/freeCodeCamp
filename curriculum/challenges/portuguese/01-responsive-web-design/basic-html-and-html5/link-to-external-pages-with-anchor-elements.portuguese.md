---
id: bad87fee1348bd9aedf08816
title: Link to External Pages with Anchor Elements
challengeType: 0
videoUrl: ''
localeTitle: Link para páginas externas com elementos âncora
---

## Description
<section id="description"> Você pode usar elementos <code>a</code> (<i>âncora</i>) para vincular à conteúdo fora da sua página da web. Elementos <code>a</code> precisam de um endereço da Web de destino chamado atributo <code>href</code> . Eles também precisam de texto âncora. Aqui está um exemplo: <code>&lt;a href=&quot;https://freecodecamp.org&quot;&gt;this links to freecodecamp.org&lt;/a&gt;</code> Então o seu navegador irá exibir o texto <strong>&quot;this links to freecodecamp.org&quot;</strong> como um link que você pode clicar. E esse link levará você ao endereço da Web <strong>https://www.freecodecamp.org</strong> . </section>

## Instructions
<section id="instructions"> Crie um elemento <code>a</code> que vincule a <code>https://freecatphotoapp.com</code> e tenha &quot;cat photos&quot; como <code>anchor text</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu elemento <code>a</code> deve ter o <code>anchor text</code> de &quot;cat photos&quot;.
    testString: 'assert((/cat photos/gi).test($("a").text()), "Your <code>a</code> element should have the <code>anchor text</code> of "cat photos".");'
  - text: 'Você precisa de um elemento <code>a</code> que vincule à <code>http://freecatphotoapp .com</code>'
    testString: 'assert(/http:\/\/(www\.)?freecatphotoapp\.com/gi.test($("a").attr("href")), "You need an <code>a</code> element that links to <code>http&#58;//freecatphotoapp<wbr>.com</code>");'
  - text: Verifique se o seu elemento <code>a</code> tem uma tag de fechamento.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure your <code>a</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>



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

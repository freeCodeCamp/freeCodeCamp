---
id: bad87fee1348bd9aede08830
title: Create a Form Element
challengeType: 0
videoUrl: ''
localeTitle: Crie um elemento de formulário
---

## Descrição
<section id="description"> Você pode criar formulários da Web que realmente enviam dados para um servidor usando nada além de HTML puro. Você pode fazer isso especificando uma ação <code>action</code> no seu elemento de <code>form</code>. O valor definido como ação é o endereço que aponta para algum recurso do seu servidor, onde pode conter códigos de linguagens back-end como PHP, Java, Python e etc. Um exemplo de uso: <code>&lt;form action=&quot;/url-where-you-want-to-submit-form-data&quot;&gt;&lt;/form&gt;</code> </section>

## Instruções
<section id="instructions"> Aninhe seu campo de texto dentro de um elemento de <code>form</code> e adicione o atributo <code>action=&quot;https://freecatphotoapp.com/submit-cat-photo&quot;</code> ao elemento form. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Aninhe seu elemento de entrada de texto em um elemento de <code>form</code> .
    testString: 'assert($("form") && $("form").children("input") && $("form").children("input").length > 0, "Nest your text input element within a <code>form</code> element.");'
  - text: Certifique-se de que seu <code>form</code> tenha um atributo de <code>action</code> definido como <code>https://freecatphotoapp.com/submit-cat-photo</code>
    testString: 'assert($("form").attr("action") === "https://freecatphotoapp.com/submit-cat-photo", "Make sure your <code>form</code> has an <code>action</code> attribute which is set to <code>https://freecatphotoapp.com/submit-cat-photo</code>");'
  - text: Certifique-se de que seu elemento de <code>form</code> tenha tags de abertura e fechamento bem formadas.
    testString: 'assert(code.match(/<\/form>/g) && code.match(/<form [^<]*>/g) && code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length, "Make sure your <code>form</code> element has well-formed open and close tags.");'

```

</section>

## Desafio semente
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
  <input type="text" placeholder="cat photo URL">
</main>

```

</div>



</section>

## Solução
<section id='solution'>

```js
// Solução necessária
```
</section>

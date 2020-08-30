---
id: bad87fee1348bd9aedd08830
title: Add a Submit Button to a Form
challengeType: 0
videoUrl: ''
localeTitle: Adicionar um botão Enviar para um formulário
---

## Description
<section id="description"> Vamos adicionar um botão de <code>submit</code> ao seu formulário. Ao Clicar neste botão os dados serão enviados do seu formulário para o URL que você especificou com o atributo de <code>action</code> do seu formulário. Aqui está um exemplo de botão de envio: <code>&lt;button type=&quot;submit&quot;&gt;this button submits the form&lt;/button&gt;</code> </section>

## Instructions
<section id="instructions"> Adicione um botão como o último elemento do seu elemento de <code>form</code> com um tipo de <code>submit</code> e &quot;Enviar&quot; como seu texto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu formulário deve ter um botão dentro dele.
    testString: 'assert($("form").children("button").length > 0, "Your form should have a button inside it.");'
  - text: Seu botão de envio deve ter o <code>type</code> atributo definido para <code>submit</code> .
    testString: 'assert($("button").attr("type") === "submit", "Your submit button should have the attribute <code>type</code> set to <code>submit</code>.");'
  - text: Seu botão de envio só deve ter o texto "Enviar".
    testString: 'assert($("button").text().match(/^\s*submit\s*$/gi), "Your submit button should only have the text "Submit".");'
  - text: Certifique-se de que seu elemento de <code>button</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure your <code>button</code> element has a closing tag.");'

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
    <input type="text" placeholder="cat photo URL">
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

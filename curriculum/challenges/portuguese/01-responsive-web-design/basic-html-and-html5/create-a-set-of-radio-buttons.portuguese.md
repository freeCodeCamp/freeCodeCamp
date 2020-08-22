---
id: bad87fee1348bd9aedf08834
title: Create a Set of Radio Buttons
challengeType: 0
videoUrl: ''
localeTitle: Criar um conjunto de botões de rádio
---

## Description
<section id="description"> Você pode usar <code>radio buttons</code> de <code>radio buttons</code> para perguntas nas quais deseja que o usuário só forneça uma resposta dentre várias opções. Botões de rádio são um tipo de <code>input</code> . Cada um dos seus botões de opção pode ser aninhado em seu próprio elemento de <code>label</code> . Ao envolver um elemento de <code>input</code> dentro de um elemento de <code>label</code> , ele associará automaticamente a entrada do botão de opção ao elemento de rótulo em torno dele. Todos os botões de opção relacionados devem ter o mesmo atributo de <code>name</code> para criar um grupo de botões de opção. Ao criar um grupo de rádio, a seleção de um único botão de opção desmarcará automaticamente os outros botões dentro do mesmo grupo, garantindo que apenas uma resposta seja fornecida pelo usuário. Aqui está um exemplo de um botão de opção: <blockquote> &lt;label&gt; <br> &lt;input type = &quot;radio&quot; name = &quot;interior-exterior&quot;&gt; Interior <br> &lt;/ label&gt; </blockquote> É considerado uma boa prática definir um atributo <code>for</code> no elemento <code>label</code> , com um valor que corresponda ao valor do atributo <code>id</code> do elemento <code>input</code> . Isso permite que tecnologias assistivas criem um relacionamento vinculado entre o rótulo e o elemento de <code>input</code> filho. Por exemplo: <blockquote> &lt;label for = &quot;indoor&quot;&gt; <br> &lt;input id = &quot;indoor&quot; type = &quot;rádio&quot; name = &quot;interior-exterior&quot;&gt; Interior <br> &lt;/ label&gt; </blockquote></section>

## Instructions
<section id="instructions"> Adicione um par de botões de opção ao formulário, cada um aninhado em seu próprio elemento de rótulo. Deve-se ter a opção de <code>indoor</code> e o outro deve ter a opção de <code>outdoor</code> . Ambos devem compartilhar o atributo <code>name</code> de <code>indoor-outdoor</code> para criar um grupo de rádio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua página deve ter dois elementos de botão de opção.
    testString: 'assert($("input[type="radio"]").length > 1, "Your page should have two radio button elements.");'
  - text: Dê aos seus botões de rádio o atributo <code>name</code> de <code>indoor-outdoor</code> .
    testString: 'assert($("label > input[type="radio"]").filter("[name="indoor-outdoor"]").length > 1, "Give your radio buttons the <code>name</code> attribute of <code>indoor-outdoor</code>.");'
  - text: Cada um dos seus dois elementos de botão de opção deve ser aninhado em seu próprio elemento de <code>label</code> .
    testString: 'assert($("label > input[type="radio"]:only-child").length > 1, "Each of your two radio button elements should be nested in its own <code>label</code> element.");'
  - text: Certifique-se de que cada um dos elementos da <code>label</code> tenha uma tag de fechamento.
    testString: 'assert((code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length), "Make sure each of your <code>label</code> elements has a closing tag.");'
  - text: Um de seus botões de rádio deve ter o rótulo <code>indoor</code> .
    testString: 'assert($("label").text().match(/indoor/gi), "One of your radio buttons should have the label <code>indoor</code>.");'
  - text: Um de seus botões de rádio deve ter o rótulo <code>outdoor</code> .
    testString: 'assert($("label").text().match(/outdoor/gi), "One of your radio buttons should have the label <code>outdoor</code>.");'
  - text: Cada um dos seus elementos de botão de opção deve ser adicionado na tag de <code>form</code> .
    testString: 'assert($("label").parent().get(0).tagName.match("FORM"), "Each of your radio button elements should be added within the <code>form</code> tag.");'

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

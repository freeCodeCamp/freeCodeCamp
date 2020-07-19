---
id: bad87fee1348bd9aedf08835
title: Create a Set of Checkboxes
challengeType: 0
videoUrl: ''
localeTitle: Criar um conjunto de caixas de seleção
---

## Description
<section id="description"> Os formulários geralmente usam <code>checkboxes</code> de <code>checkboxes</code> para perguntas que podem ter mais de uma resposta. Caixas de seleção são um tipo de <code>input</code> Cada uma de suas caixas de seleção pode ser aninhada em seu próprio elemento de <code>label</code> . Ao envolver um elemento de <code>input</code> dentro de um elemento de <code>label</code> , ele associará automaticamente a entrada da caixa de seleção ao elemento de rótulo que a envolve. Todas as entradas da caixa de seleção relacionadas devem ter o mesmo atributo de <code>name</code> . É considerada a melhor prática definir explicitamente o relacionamento entre uma <code>input</code> caixa de seleção e seu <code>label</code> correspondente <code>label</code> definindo o atributo <code>for</code> no elemento <code>label</code> para corresponder ao atributo <code>id</code> do elemento de <code>input</code> associado. Aqui está um exemplo de uma caixa de seleção: <code>&lt;label for=&quot;loving&quot;&gt;&lt;input id=&quot;loving&quot; type=&quot;checkbox&quot; name=&quot;personality&quot;&gt; Loving&lt;/label&gt;</code> </section>

## Instructions
<section id="instructions"> Adicione ao seu formulário um conjunto de três caixas de seleção. Cada caixa de seleção deve estar aninhada em seu próprio elemento <code>label</code> . Todos os três devem compartilhar o atributo do <code>name</code> da <code>personality</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua página deve ter três elementos de caixa de seleção.
    testString: 'assert($("input[type="checkbox"]").length > 2, "Your page should have three checkbox elements.");'
  - text: Cada um dos três elementos da caixa de seleção deve estar aninhado em seu próprio elemento <code>label</code> .
    testString: 'assert($("label > input[type="checkbox"]:only-child").length > 2, "Each of your three checkbox elements should be nested in its own <code>label</code> element.");'
  - text: Certifique-se de que cada um dos elementos da <code>label</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length, "Make sure each of your <code>label</code> elements has a closing tag.");'
  - text: Dê a suas caixas de seleção o atributo de <code>name</code> da <code>personality</code> .
    testString: 'assert($("label > input[type="checkbox"]").filter("[name="personality"]").length > 2, "Give your checkboxes the <code>name</code> attribute of <code>personality</code>.");'

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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
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

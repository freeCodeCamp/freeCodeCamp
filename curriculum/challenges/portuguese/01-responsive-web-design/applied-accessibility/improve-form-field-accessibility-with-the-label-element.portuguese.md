---
id: 587d778a367417b2b2512aa6
title: Improve Form Field Accessibility with the label Element
challengeType: 0
videoUrl: ''
localeTitle: Melhore a acessibilidade do campo de formulário com o elemento label
---

## Description
<section id="description"> Melhorar a acessibilidade com marcação HTML semântica aplica-se ao uso de nomes de tag apropriados e de atributos. Os próximos desafios abrangem alguns cenários importantes usando atributos em formulários. A <code>label</code> rotula o texto para um item de controle de formulário específico, geralmente o nome ou rótulo para uma escolha. Isso vincula o significado ao item e torna a forma mais legível. O atributo <code>for</code> em uma tag <code>label</code> associa explicitamente esse <code>label</code> ao controle de formulário e é usado pelos leitores de tela. Você aprendeu sobre os botões de opção e seus rótulos em uma lição na seção HTML básico. Nessa lição, envolvemos o elemento de entrada do botão de opção dentro de um elemento de <code>label</code> junto com o texto da etiqueta para tornar o texto clicável. Outra maneira de conseguir isso é usando o atributo <code>for</code> conforme explicado nesta lição. O valor do atributo <code>for</code> deve ser o mesmo que o valor do atributo <code>id</code> do controle de formulário. Aqui está um exemplo: <blockquote> &lt;form&gt; <br> &lt;label for = &quot;name&quot;&gt; Nome: &lt;/ label&gt; <br> &lt;input type = &quot;text&quot; id = &quot;nome&quot; name = &quot;nome&quot;&gt; <br> &lt;/ form&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> O Camper Cat espera muito interesse em seus posts inteligentes e quer incluir um formulário de inscrição por e-mail. Adicione um atributo <code>for</code> no <code>label</code> e-mail que corresponda ao <code>id</code> em seu campo de <code>input</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter um atributo <code>for</code> na <code>label</code> que não está vazia.
    testString: 'assert($("label").attr("for"), "Your code should have a <code>for</code> attribute on the <code>label</code> tag that is not empty.");'
  - text: Seu <code>for</code> atributo valor deve corresponder ao <code>id</code> valor no e-mail <code>input</code> .
    testString: 'assert($("label").attr("for") == "email", "Your <code>for</code> attribute value should match the <code>id</code> value on the email <code>input</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label>Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

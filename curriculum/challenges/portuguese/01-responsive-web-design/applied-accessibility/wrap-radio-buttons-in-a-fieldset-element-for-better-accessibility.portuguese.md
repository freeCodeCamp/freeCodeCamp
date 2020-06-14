---
id: 587d778b367417b2b2512aa7
title: Wrap Radio Buttons in a fieldset Element for Better Accessibility
challengeType: 0
videoUrl: ''
localeTitle: Enrole os botões de rádio em um elemento fieldset para uma melhor acessibilidade
---

## Description
<section id="description"> O próximo tópico do formulário aborda a acessibilidade dos botões de opção. Cada escolha é dada uma <code>label</code> com um <code>for</code> atributo amarrar ao <code>id</code> do item correspondente, abrangidos no último desafio. Como os botões de rádio geralmente vêm em um grupo onde o usuário deve escolher um, há uma maneira de mostrar semanticamente que as opções fazem parte de um conjunto. A tag <code>fieldset</code> envolve todo o agrupamento de botões de rádio para conseguir isso. Ele geralmente usa uma <code>legend</code> para fornecer uma descrição para o agrupamento, que é lido pelos leitores de tela para cada opção no elemento <code>fieldset</code> . O wrapper <code>fieldset</code> e a tag <code>legend</code> não são necessários quando as opções são auto-explicativas, como uma seleção de gênero. Usando um <code>label</code> com a <code>for</code> atributo para cada botão de rádio é suficiente. Aqui está um exemplo: <blockquote> &lt;form&gt; <br> &lt;fieldset&gt; <br> &lt;legend&gt; Escolha um destes três itens: &lt;/ legend&gt; <br> &lt;input id = &quot;one&quot; type = &quot;rádio&quot; nome = &quot;itens&quot; valor = &quot;um&quot;&gt; <br> &lt;label for = &quot;one&quot;&gt; Choice One &lt;/ label&gt; &lt;br&gt; <br> &lt;input id = &quot;two&quot; type = &quot;rádio&quot; name = &quot;itens&quot; valor = &quot;dois&quot;&gt; <br> &lt;label for = &quot;two&quot;&gt; Escolha dois &lt;/ label&gt; &lt;br&gt; <br> &lt;input id = &quot;three&quot; type = &quot;rádio&quot; name = &quot;itens&quot; valor = &quot;três&quot;&gt; <br> &lt;label for = &quot;three&quot;&gt; Escolha Três &lt;/ label&gt; <br> &lt;/ fieldset&gt; <br> &lt;/ form&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> O Camper Cat quer informações sobre o nível ninja de seus usuários quando eles se inscrevem em sua lista de e-mail. Ele é adicionado um conjunto de botões de rádio, e aprendemos de nossa última lição usar tags de etiquetas com <code>for</code> atributos para cada escolha. Vai o gato do campista! No entanto, seu código ainda precisa de ajuda. Altere a tag <code>div</code> redor dos botões de opção para uma tag de <code>fieldset</code> e altere a tag <code>p</code> dentro dela para uma <code>legend</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter uma tag de <code>fieldset</code> torno do conjunto de botões de opção.
    testString: 'assert($("fieldset").length == 1, "Your code should have a <code>fieldset</code> tag around the radio button set.");'
  - text: Certifique-se de que seu elemento <code>fieldset</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/fieldset>/g) && code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length, "Make sure your <code>fieldset</code> element has a closing tag.");'
  - text: Seu código deve ter uma <code>legend</code> ao redor do texto perguntando qual nível ninja é o usuário.
    testString: 'assert($("legend").length == 1, "Your code should have a <code>legend</code> tag around the text asking what level ninja a user is.");'
  - text: Seu código não deve ter tags <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: Seu código não deve mais ter uma tag <code>p</code> ao redor do texto perguntando qual nível ninja é um usuário.
    testString: 'assert($("p").length == 4, "Your code should no longer have a <code>p</code> tag around the text asking what level ninja a user is.");'

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
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <!-- Add your code below this line -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </div>
      <!-- Add your code above this line -->


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

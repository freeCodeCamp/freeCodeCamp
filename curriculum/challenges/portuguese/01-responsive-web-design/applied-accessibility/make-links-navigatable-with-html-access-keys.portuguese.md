---
id: 587d7790367417b2b2512aaf
title: Make Links Navigatable with HTML Access Keys
challengeType: 0
videoUrl: ''
localeTitle: Tornar Links Navegáveis ​​com Chaves de Acesso HTML
---

## Description
<section id="description"> O HTML oferece o atributo <code>accesskey</code> para especificar uma tecla de atalho para ativar ou trazer foco para um elemento. Isso pode tornar a navegação mais eficiente para usuários somente de teclado. O HTML5 permite que esse atributo seja usado em qualquer elemento, mas é particularmente útil quando usado com os interativos. Isso inclui links, botões e controles de formulário. Aqui está um exemplo: <code>&lt;button accesskey=&quot;b&quot;&gt;Important Button&lt;/button&gt;</code> </section>

## Instructions
<section id="instructions"> O Camper Cat quer que os links em torno dos dois títulos de artigos do blog tenham atalhos de teclado para que os usuários de seu site possam navegar rapidamente para a história completa. Adicione um atributo <code>accesskey</code> aos dois links e defina o primeiro para &quot;g&quot; (para Garfield) e o segundo para &quot;c&quot; (para Chuck Norris). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve adicionar um <code>accesskey</code> atributo à <code>a</code> tag com o <code>id</code> de &quot;primeira&quot;.
    testString: 'assert($("#first").attr("accesskey"), "Your code should add an <code>accesskey</code> attribute to the <code>a</code> tag with the <code>id</code> of "first".");'
  - text: Seu código deve adicionar um <code>accesskey</code> atributo à <code>a</code> tag com o <code>id</code> de &quot;segunda&quot;.
    testString: 'assert($("#second").attr("accesskey"), "Your code should add an <code>accesskey</code> attribute to the <code>a</code> tag with the <code>id</code> of "second".");'
  - text: Seu código deve definir o <code>accesskey</code> atributo no <code>a</code> tag com o <code>id</code> de &quot;primeiro&quot; a &quot;g&quot;. Note que o caso é importante.
    testString: 'assert($("#first").attr("accesskey") == "g", "Your code should set the <code>accesskey</code> attribute on the <code>a</code> tag with the <code>id</code> of "first" to "g". Note that case matters.");'
  - text: Seu código deve definir o <code>accesskey</code> atributo no <code>a</code> tag com o <code>id</code> de &quot;segunda&quot; para &quot;c&quot;. Note que o caso é importante.
    testString: 'assert($("#second").attr("accesskey") == "c", "Your code should set the <code>accesskey</code> attribute on the <code>a</code> tag with the <code>id</code> of "second" to "c". Note that case matters.");'

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
  <article>


    <h2><a id="first" href="">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" href="">Is Chuck Norris a Cat Person?</a></h2>


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

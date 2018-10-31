---
id: 587d7790367417b2b2512ab1
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
challengeType: 0
videoUrl: ''
localeTitle: Use tabindex para especificar a ordem do foco do teclado para vários elementos
---

## Description
<section id="description"> O atributo <code>tabindex</code> também especifica a ordem de tabulação exata dos elementos. Isso é obtido quando o valor do atributo é definido como um número positivo de 1 ou superior. Definir um tabindex = &quot;1&quot; trará o foco do teclado para esse elemento primeiro. Em seguida, ele percorre a sequência de valores de <code>tabindex</code> especificados (2, 3, etc.), antes de passar para os itens padrão e <code>tabindex=&quot;0&quot;</code> . É importante observar que, quando a ordem de tabulação é definida dessa forma, ela substitui a ordem padrão (que usa a origem HTML). Isso pode confundir os usuários que estão esperando iniciar a navegação a partir do topo da página. Essa técnica pode ser necessária em algumas circunstâncias, mas em termos de acessibilidade, tome cuidado antes de aplicá-la. Aqui está um exemplo: <code>&lt;div tabindex=&quot;1&quot;&gt;I get keyboard focus, and I get it first!&lt;/div&gt;</code> <code>&lt;div tabindex=&quot;2&quot;&gt;I get keyboard focus, and I get it second!&lt;/div&gt;</code> </section>

## Instructions
<section id="instructions"> Camper Cat tem um campo de pesquisa em sua página Inspirational Quotes que ele planeja posicionar no canto superior direito com CSS. Ele deseja que a <code>input</code> pesquisa e os controles de formulário de <code>input</code> sejam os dois primeiros itens na ordem de tabulação. Adicione um atributo <code>tabindex</code> definido como &quot;1&quot; à <code>input</code> pesquisa e um atributo <code>tabindex</code> definido como &quot;2&quot; à <code>input</code> envio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve adicionar um atributo <code>tabindex</code> à tag de <code>input</code> pesquisa.
    testString: 'assert($("#search").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the search <code>input</code> tag.");'
  - text: Seu código deve adicionar um atributo <code>tabindex</code> à tag de <code>input</code> envio.
    testString: 'assert($("#submit").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the submit <code>input</code> tag.");'
  - text: Seu código deve definir o atributo <code>tabindex</code> na tag de <code>input</code> pesquisa como um valor de 1.
    testString: 'assert($("#search").attr("tabindex") == "1", "Your code should set the <code>tabindex</code> attribute on the search <code>input</code> tag to a value of 1.");'
  - text: Seu código deve definir o atributo <code>tabindex</code> na tag de <code>input</code> envio para um valor de 2.
    testString: 'assert($("#submit").attr("tabindex") == "2", "Your code should set the <code>tabindex</code> attribute on the submit <code>input</code> tag to a value of 2.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
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

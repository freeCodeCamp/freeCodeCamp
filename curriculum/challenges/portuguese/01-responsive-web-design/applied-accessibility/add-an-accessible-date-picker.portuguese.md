---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: ''
localeTitle: Adicionar um selecionador de data acessível
---

## Description
<section id="description"> Os formulários geralmente incluem o campo de <code>input</code> , que pode ser usado para criar vários controles de formulários diferentes. O atributo <code>type</code> neste elemento indica que tipo de entrada será criada. Você deve ter notado os tipos de entrada <code>text</code> e <code>submit</code> nos desafios anteriores, e o HTML5 introduziu uma opção para especificar um campo do tipo <code>date</code> . Dependendo do suporte ao navegador, um seletor de data aparece no campo de <code>input</code> quando está em foco, o que facilita o preenchimento de um formulário para todos os usuários. Para navegadores mais antigos, o tipo será padronizado para <code>text</code> . Por isso, é útil mostrar aos usuários o formato de data esperado na label ou no campo de texto com um placeholder. Aqui está um exemplo: <blockquote> &lt;label for = &quot;input1&quot;&gt; Insira uma data: &lt;/ label&gt; <br> &lt;input type = &quot;date&quot; id = &quot;input1&quot; name = &quot;input1&quot;&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> O Camper Cat está organizando um torneio de Mortal Kombat e quer pedir a seus concorrentes para ver qual data funciona melhor. Adicione uma tag de <code>input</code> com um atributo <code>type</code> de &quot;date&quot;, um atributo <code>id</code> de &quot;pickdate&quot; e um atributo <code>name</code> de &quot;date&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve adicionar uma tag de <code>input</code> para o campo do seletor de datas.
    testString: 'assert($("input").length == 2, "Your code should add one <code>input</code> tag for the date selector field.");'
  - text: Sua tag de <code>input</code> deve ter um atributo de <code>type</code> com um valor de data.
    testString: 'assert($("input").attr("type") == "date", "Your <code>input</code> tag should have a <code>type</code> attribute with a value of date.");'
  - text: Sua tag de <code>input</code> deve ter um atributo <code>id</code> com um valor de pickdate.
    testString: 'assert($("input").attr("id") == "pickdate", "Your <code>input</code> tag should have an <code>id</code> attribute with a value of pickdate.");'
  - text: Sua tag de <code>input</code> deve ter um atributo de <code>name</code> com um valor de data.
    testString: 'assert($("input").attr("name") == "date", "Your <code>input</code> tag should have a <code>name</code> attribute with a value of date.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Add your code below this line -->



        <!-- Add your code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
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

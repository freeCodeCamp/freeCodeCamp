---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: ''
localeTitle: Adicionar um selecionador de data acessível
---

## Descrição
<section id="description"> Os formulários geralmente incluem o campo de <code>input</code>, que pode ser usado para criar vários controles de formulários diferentes. O atributo <code>type</code> neste elemento indica que tipo de entrada será criada. Você deve ter notado os tipos de entrada <code>text</code> e <code>submit</code> nos desafios anteriores, e o HTML5 introduziu uma opção para especificar um campo do tipo <code>date</code>. Dependendo do navegador, quando o campo de <code>input</code> está com o foco, irá aparecer um seletor de data, o que facilita o preenchimento do formulário. Em navegadores mais antigos, o tipo será padronizado para <code>text</code>. Por isso, é útil mostrar aos usuários o formato de data esperado na <i>label</i> ou no campo de texto com um <i>placeholder</i>. Aqui está um exemplo: <blockquote> &lt;label for = &quot;input1&quot;&gt; Insira uma data: &lt;/ label&gt; <br> &lt;input type = &quot;date&quot; id = &quot;input1&quot; name = &quot;input1&quot;&gt; <br></blockquote></section>

## Instruções
<section id="instructions"> O Gato Campista está organizando um torneio de Mortal Kombat e quer pedir aos seus participantes para ver qual data funciona melhor. Adicione uma etiqueta de <code>input</code> com um atributo <code>type</code> de &quot;<i>date</i>&quot;, um atributo <code>id</code> de &quot;<i>pickdate</i>&quot; e um atributo <code>name</code> de &quot;<i>date</i>&quot;. </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: O seu c&oacute;digo deve adicionar uma etiqueta <code>input</code> para o campo do seletor de datas.
    testString: 'assert($("input").length == 2, "O seu c&oacute;digo deve adicionar uma etiqueta <code>input</code> para o campo do seletor de datas.");'
  - text: A sua etiqueta de <code>input</code> deve ter um atributo <code>type</code> com um valor de <i>date</i>.
    testString: 'assert($("input").attr("type") == "date", "A sua etiqueta de <code>input</code> deve ter um atributo <code>type</code> com um valor de <i>date</i>.");'
  - text: A sua etiqueta de <code>input</code> deve ter um atributo <code>id</code> com um valor de <i>pickdate</i>.
    testString: 'assert($("input").attr("id") == "pickdate", "A sua etiqueta de <code>input</code> deve ter um atributo <code>id</code> com um valor de <i>pickdate</i>.");'
  - text: A sua etiqueta de <code>input</code> deve ter um atributo <code>name</code> com um valor de <i>date</i>.
    testString: 'assert($("input").attr("name") == "date", "A sua etiqueta de <code>input</code> deve ter um atributo <code>name</code> com um valor de <i>date</i>.");'

```

</section>

## Semente do Desafio
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Torneios</h1>
  </header>
  <main>
    <section>
      <h2>Inqu&eacute;rito do Torneio Mortal Kombat</h2>
      <form>
        <p>Diga-nos a melhor data para a competi&ccedil;&atilde;o</p>
        <label for="pickdate">Data Preferida:</label>

        <!-- Add your code below this line -->



        <!-- Add your code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Gato Campista</footer>
</body>

```

</div>



</section>

## Solução
<section id='solution'>

```js
// solution required
```
</section>

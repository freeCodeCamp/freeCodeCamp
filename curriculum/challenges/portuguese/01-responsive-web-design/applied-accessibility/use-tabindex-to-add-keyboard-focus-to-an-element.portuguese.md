---
id: 587d7790367417b2b2512ab0
title: Use tabindex to Add Keyboard Focus to an Element
challengeType: 0
videoUrl: ''
localeTitle: Use tabindex para adicionar foco do teclado a um elemento
---

## Description
<section id="description"> O atributo <code>tabindex</code> HTML possui três funções distintas relacionadas ao foco do teclado de um elemento. Quando está em uma tag, indica que o elemento pode ser focado. O valor (um inteiro que é positivo, negativo ou zero) determina o comportamento. Determinados elementos, como links e controles de formulário, recebem automaticamente o foco do teclado quando um usuário é direcionado por uma página. Está na mesma ordem em que os elementos vêm na marcação de fonte HTML. Essa mesma funcionalidade pode ser fornecida a outros elementos, como <code>div</code> , <code>span</code> e <code>p</code> , colocando-se um <code>tabindex=&quot;0&quot;</code> neles. Aqui está um exemplo: <code>&lt;div tabindex=&quot;0&quot;&gt;I need keyboard focus!&lt;/div&gt;</code> <strong>Observação</strong> <br> Um valor de <code>tabindex</code> negativo (tipicamente -1) indica que um elemento é focalizável, mas não é alcançável pelo teclado. Esse método geralmente é usado para trazer o foco ao conteúdo de forma programática (como quando um <code>div</code> usado para uma janela pop-up é ativado) e está além do escopo desses desafios. </section>

## Instructions
<section id="instructions"> A Camper Cat criou uma nova pesquisa para coletar informações sobre seus usuários. Ele sabe que os campos de entrada recebem automaticamente o foco do teclado, mas ele quer ter certeza de que seus usuários de teclado pausem nas instruções enquanto navegam pelos itens. Adicione um atributo <code>tabindex</code> à tag <code>p</code> e defina seu valor como &quot;0&quot;. Bônus - usando <code>tabindex</code> também ativa a pseudo-classe CSS <code>:focus</code> para trabalhar na tag <code>p</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve adicionar um atributo <code>tabindex</code> à tag <code>p</code> que contém as instruções do formulário.
    testString: 'assert($("p").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the <code>p</code> tag that holds the form instructions.");'
  - text: Seu código deve definir o atributo <code>tabindex</code> na tag <code>p</code> para um valor de 0.
    testString: 'assert($("p").attr("tabindex") == "0", "Your code should set the <code>tabindex</code> attribute on the <code>p</code> tag to a value of 0.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p>Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
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

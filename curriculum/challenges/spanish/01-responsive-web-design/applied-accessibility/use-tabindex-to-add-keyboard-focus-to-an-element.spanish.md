---
id: 587d7790367417b2b2512ab0
title: Use tabindex to Add Keyboard Focus to an Element
localeTitle: Use tabindex para agregar el foco de teclado a un elemento
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
El atributo HTML <code>tabindex</code> tiene tres funciones distintas relacionadas con el enfoque del teclado de un elemento. Cuando está en una etiqueta, indica que el elemento se puede enfocar. El valor (un entero que es positivo, negativo o cero) determina el comportamiento. 
Ciertos elementos, como los enlaces y los controles de formulario, reciben automáticamente el enfoque del teclado cuando un usuario se desplaza por una página. Está en el mismo orden en que los elementos vienen en el código fuente HTML. Esta misma funcionalidad se puede dar a otros elementos, como <code>div</code> , <code>span</code> <code>p</code> , colocando un <code>tabindex=&quot;0&quot;</code> en ellos. Aquí hay un ejemplo: 
<code>&lt;div tabindex=&quot;0&quot;&gt;I need keyboard focus!&lt;/div&gt;</code> 
<strong>Nota</strong> <br> Un valor de <code>tabindex</code> negativo (generalmente -1) indica que un elemento es enfocable, pero no es accesible por el teclado. Este método generalmente se usa para enfocar el contenido mediante programación (como cuando se activa un <code>div</code> para una ventana emergente), y está más allá del alcance de estos desafíos. 
</section>

## Instructions
<section id='instructions'> 
Camper Cat creó una nueva encuesta para recopilar información sobre sus usuarios. Sabe que los campos de entrada se enfocan automáticamente en el teclado, pero quiere asegurarse de que los usuarios de su teclado se detengan en las instrucciones mientras repasan los elementos. Agregue un atributo de <code>tabindex</code> a la etiqueta <code>p</code> y establezca su valor en &quot;0&quot;. Bonus: el uso de <code>tabindex</code> también habilita la <code>tabindex</code> CSS <code>:focus</code> para trabajar en la etiqueta <code>p</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe agregar un atributo <code>tabindex</code> a la etiqueta <code>p</code> que contiene las instrucciones del formulario.
    testString: 'assert($("p").attr("tabindex"), "Your code should add a <code>tabindex</code> attribute to the <code>p</code> tag that holds the form instructions.");'
  - text: Su código debe establecer el atributo <code>tabindex</code> en la etiqueta <code>p</code> a un valor de 0.
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

---
id: 587d7790367417b2b2512ab0
title: Usa tabindex para agregar enfoque de teclado a un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

El atributo HTML `tabindex` tiene tres funciones distintas relacionadas con el foco del teclado de un elemento. Cuando está en una etiqueta, indica que se puede hacer foco en el elemento. El valor (un número entero que es positivo, negativo o cero) determina el comportamiento.

Algunos elementos, como los enlaces y los controles de los formularios, reciben automáticamente el foco del teclado cuando un usuario tabula por una página. Está en el mismo orden en que los elementos vienen en la fuente del lenguaje de marcado de HTML. Esta misma funcionalidad se puede dar a otros elementos, como `div`, `span` y `p`, colocando un atributo `tabindex="0"`. Aquí hay un ejemplo:

```html
<div tabindex="0">I need keyboard focus!</div>
```

**Nota:** Un valor negativo de `tabindex` (normalmente -1) indica que un elemento es enfocable, pero no es accesible por el teclado. Este método generalmente se usa para enfocar el contenido mediante programación (como cuando se activa un `div` utilizando para una ventana emergente), y esta más allá del alcance de estos desafíos.

# --instructions--

Camper Cat creó una nueva encuesta para recopilar información sobre sus usuarios. Él sabe que los campos de entrada obtienen automáticamente el enfoque del teclado, pero quiere asegurarse de que los usuarios de su teclado hagan una pausa en las instrucciones mientras tabulan los elementos. Agrega un atributo `tabindex` a la etiqueta `p` y establece su valor en `0`. Extra: el uso de `tabindex` también permite que la pseudo-clase CSS `:focus` funcione en la etiqueta `p`.

# --hints--

Tu código debe agregar un atributo `tabindex` a la etiqueta `p` que contiene las instrucciones del formulario.

```js
assert($('p').attr('tabindex'));
```

Tu código debe establecer el atributo `tabindex` en la etiqueta `p` en un valor de 0.

```js
assert($('p').attr('tabindex') == '0');
```

# --seed--

## --seed-contents--

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

# --solutions--

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


      <p tabindex="0">Instructions: Fill in ALL your information then click <b>Submit</b></p>


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

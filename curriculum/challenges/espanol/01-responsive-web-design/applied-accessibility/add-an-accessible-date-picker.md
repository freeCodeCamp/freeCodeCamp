---
id: 587d778b367417b2b2512aa8
title: Agrega un selector de fechas accesible
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

Los formularios suelen incluir el campo `input`, que puede usarse para crear diferentes tipos de controles en los formularios. El atributo `type` en este elemento indica el tipo de elemento `input` a crear.

Puede que hayas visto los tipos de campo `text` y `submit` en desafíos anteriores. HTML5 además introdujo una opción para especificar un campo `date` para fechas. Dependiendo del soporte de los navegadores, un selector de fechas debería aparecer cuando el campo `input` esté en foco, y esto hace mucho más sencillo para los usuarios cargar información en el formulario.

Para los navegadores más antiguos, el tipo será por defecto `text`, por lo que ayuda a mostrar a los usuarios el formato de fecha(date) esperado en el texto `label` o `placeholder` por si acaso.

Aquí hay un ejemplo:

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Camper Cat está organizando un torneo de Mortal Kombat y quiere pedir a los participantes que consideren cuál fecha les resultaría mejor. Agrega una etiqueta `input` con un atributo `type` de `date`, un atributo `id` de `pickdate` y un atributo `name` con valor `date`.

# --hints--

Tu código debería añadir una etiqueta `input` para el campo de selección de fecha.

```js
assert($('input').length == 2);
```

Tu etiqueta `input` debe tener un atributo `type` con un valor de `date`.

```js
assert($('input').attr('type') == 'date');
```

Tu etiqueta `input` debe tener un atributo `id` con un valor de `pickdate`.

```js
assert($('input').attr('id') == 'pickdate');
```

Tu etiqueta `input` debe tener un atributo `name` con un valor de `date`.

```js
assert($('input').attr('name') == 'date');
```

# --seed--

## --seed-contents--

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

        <!-- Only change code below this line -->



        <!-- Only change code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

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
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

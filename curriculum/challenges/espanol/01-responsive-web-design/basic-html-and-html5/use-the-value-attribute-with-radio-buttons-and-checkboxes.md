---
id: 5c6c06847491271903d37cfd
title: Usa el atributo value con botones de radio y casillas de verificación
challengeType: 0
forumTopicId: 301099
dashedName: use-the-value-attribute-with-radio-buttons-and-checkboxes
---

# --description--

Cuando se envía un formulario, los datos se envían al servidor e incluyen entradas para las opciones seleccionadas. Los inputs de tipo `radio` y `checkbox` reportan sus valores desde el atributo `value`.

Por ejemplo:

```html
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
</label>
```

Aquí tienes dos inputs de tipo `radio`. Cuando el usuario envía el formulario con la opción `indoor` seleccionada, los datos del formulario incluirán la línea: `indoor-outdoor=indoor`. Esto proviene de los atributos `name` y `value` del input "indoor".

Si omites el atributo `value`, los datos del formulario enviado utilizarán el valor por defecto, que es `on`. En este escenario, si el usuario hizo click en la opción "indoor" y envió el formulario, el dato resultante del formulario sería `indoor-outdoor=on`, lo cual no resulta útil. Por lo que el atributo `value` debe establecerse a un valor que identifique la opción claramente.

# --instructions--

Agrega a cada una de los inputs de tipo `radio` y de tipo `checkbox` el atributo `value`. No vayas a crear ningún nuevo elemento de tipo radio o tipo checkbox. Usa el texto de input label (etiqueta), en minúsculas, como valor del atributo.

# --hints--

Uno de tus botones de radio debe tener el atributo `value` establecido con el valor `indoor` (de interior).

```js
assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);
```

Uno de tus botones de radio debe tener el atributo `value` establecido con el valor `outdoor` (de exterior).

```js
assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);
```

Una de tus casillas de verificación debe tener el atributo `value` establecido con el valor `loving` (cariñoso).

```js
assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);
```

Una de tus casillas de verificación debe tener el atributo `value` establecido con el valor `lazy` (perezoso).

```js
assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);
```

Una de tus casillas de verificación debe tener el atributo `value` establecido con el valor `energetic` (energético).

```js
assert(
  $('label:contains("Energetic") > input[type="checkbox"]').filter(
    "[value='energetic']"
  ).length > 0
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

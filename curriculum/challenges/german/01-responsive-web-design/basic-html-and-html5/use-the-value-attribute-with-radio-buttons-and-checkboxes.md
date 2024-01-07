---
id: 5c6c06847491271903d37cfd
title: Verwende das value-Attribut bei Radiobuttons und Checkboxen
challengeType: 0
forumTopicId: 301099
dashedName: use-the-value-attribute-with-radio-buttons-and-checkboxes
---

# --description--

Wenn ein Formular abgeschickt wird, werden die Daten an den Server gesendet und enthalten Angaben zu den ausgewählten Optionen. Input-Elemente vom Typ `radio` und `checkbox` melden ihre Werte aus dem `value`-Attribut.

Zum Beispiel:

```html
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
</label>
```

Hier gibt es zwei `radio`-Inputs. Wenn der Benutzer das Formular mit der ausgewählten Option `indoor` absendet, enthalten die Formulardaten die Zeile: `indoor-outdoor=indoor`. Dies ergibt sich aus den Attributen `name` und `value` des Inputs "indoor".

Wenn du das `value`-Attribut weglässt, verwenden die übermittelten Formulardaten den Standardwert `on`. Wenn der Benutzer in diesem Szenario auf die Option "indoor" klickt und das Formular abschickt, würden die resultierenden Formulardaten `indoor-outdoor=on` lauten, was nicht sinnvoll ist. Daher muss das `value`-Attribut auf etwas gesetzt werden, um die Option zu identifizieren.

# --instructions--

Gib jedem der vorhandenen Inputs `radio` und `checkbox` das Attribut `value`. Erstelle keine neuen Radio- oder Checkbox-Elemente. Verwende den Labeltext des Inputs, in Kleinbuchstaben, als Wert für das Attribut.

# --hints--

Einer deiner Radiobutton sollte das `value`-Attribut `indoor` besitzen.

```js
assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);
```

Einer deiner Radiobutton sollte das `value`-Attribut `outdoor` besitzen.

```js
assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);
```

Eine deiner Checkboxen sollte das `value`-Attribut `loving` besitzen.

```js
assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);
```

Eine deiner Checkboxen sollte das `value`-Attribut `lazy` besitzen.

```js
assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);
```

Eine deiner Checkboxen sollte das `value`-Attribut `energetic` besitzen.

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

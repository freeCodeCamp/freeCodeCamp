---
id: bad87fee1348bd9aedf08834
title: Eine Gruppe (Set) von Radiobuttons erstellen
challengeType: 0
forumTopicId: 16822
dashedName: create-a-set-of-radio-buttons
---

# --description--

Du kannst <dfn>Radiobuttons</dfn> für Fragen verwenden, bei denen du möchtest, dass der Benutzer dir nur eine Antwort aus mehreren Optionen gibt.

Radiobuttons sind eine Art von `input`.

Jeder deiner Radiobuttons kann in seinem eigenen `label`-Element eingebettet sein. Wenn du ein `input`-Element in ein `label`-Element einbettest, wird die Eingabe des Radiobuttons automatisch mit dem ihn umgebenden Label-Element verknüpft.

Alle zusammengehörigen Radiobuttons sollten das gleiche `name`-Attribut besitzen, um eine Radiobutton-Gruppe zu erstellen. Durch das Erstellen einer Radiogruppe werden durch das Auswählen eines einzelnen Radiobuttons automatisch die anderen Buttons innerhalb der gleichen Gruppe abgewählt, wodurch sichergestellt wird, dass nur eine Antwort vom Benutzer abgegeben wird.

Hier ist ein Beispiel für einen Radiobutton:

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

Es gilt als bewährte Praxis, ein `for`-Attribut auf das `label`-Element zu setzen, mit einem Wert, der dem Wert des `id`-Attributs des `input`-Elements entspricht. Dies ermöglicht es unterstützenden Technologien, eine verknüpfte Beziehung zwischen dem Label und dem zugehörigen `input`-Element herzustellen. Beispiel:

```html
<input id="indoor" type="radio" name="indoor-outdoor">
<label for="indoor">Indoor</label>
```

Wir können auch das `input`-Element innerhalb der `label`-Tags einbetten:

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

# --instructions--

Füge ein Paar Radiobuttons zu deinem Formular hinzu, jeder eingebettet in sein eigenes `label`-Element. Der eine sollte die Option `indoor` haben und der andere sollte die Option `outdoor` haben. Beide sollten das `name`-Attribut von `indoor-outdoor` teilen, um eine Radiogruppe zu erstellen.

# --hints--

Deine Seite sollte zwei `radio`-Button-Elemente haben.

```js
assert($('input[type="radio"]').length > 1);
```

Deine Radiobutton sollten das `name`-Attribut von `indoor-outdoor` erhalten.

```js
assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
```

Jedes deiner beiden Radiobutton-Elemente sollte in seinem eigenen `label`-Element eingebettet sein.

```js
assert($('label > input[type="radio"]:only-child').length > 1);
```

Jedes deiner `label`-Elemente sollte einen schließenden Tag besitzen.

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

Einer deiner Radiobutton sollte das Label `indoor` haben.

```js
assert(
  $('label')
    .text()
    .match(/indoor/gi)
);
```

Einer deiner Radiobutton sollte die Beschriftung `outdoor` haben.

```js
assert(
  $('label')
    .text()
    .match(/outdoor/gi)
);
```

Jedes deiner Radiobutton-Elemente sollte innerhalb des `form`-Tags eingefügt werden.

```js
assert($('label').parent().get(0).tagName.match('FORM'));
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
   <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

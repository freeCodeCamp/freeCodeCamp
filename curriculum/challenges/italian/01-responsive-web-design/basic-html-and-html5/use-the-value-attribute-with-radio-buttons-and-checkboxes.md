---
id: 5c6c06847491271903d37cfd
title: Usare l'attributo value con i pulsanti di opzione e le caselle di spunta
challengeType: 0
forumTopicId: 301099
dashedName: use-the-value-attribute-with-radio-buttons-and-checkboxes
---

# --description--

Quando un modulo viene inviato, i dati vengono spediti al server e includono delle voci per le opzioni selezionate. Gli input di tipo `radio` e `checkbox` prendono i loro valori dall'attributo `value`.

Ad esempio:

```html
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
</label>
```

Qui hai due input di tipo `radio`. Quando l'utente invia il modulo con l'opzione `indoor` selezionata, i dati del modulo includeranno la linea: `indoor-outdoor=indoor`. Questo proviene dagli attributi `name` e `value` dell'input "indoor".

Se si omette l'attributo `value`, i dati del modulo inviato usano il valore predefinito, che è `on`. In questo scenario, se l'utente ha cliccato l'opzione "indoor" e ha inviato il modulo, i dati del modulo risultante saranno `indoor-outdoor=on`, il che non è utile. Quindi l'attributo `value` deve essere impostato su qualcosa che identifichi l'opzione.

# --instructions--

Dai a ciascuno degli elementi di input esistenti di tipo `radio` e `checkbox` l'attributo `value`. Non creare alcun nuovo elemento radio o casella di controllo. Usa il testo dell'etichetta, in minuscolo, come valore per l'attributo.

# --hints--

Uno dei tuoi pulsanti di opzione dovrebbe avere l'attributo `value` di `indoor`.

```js
assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);
```

Uno dei tuoi pulsanti di opzione dovrebbe avere l'attributo `value` di `outdoor`.

```js
assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);
```

Uno dei tuoi pulsanti di opzione dovrebbe avere l'attributo `value` di `loving`.

```js
assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);
```

Una delle tue caselle di spunta dovrebbe avere l'attributo `value` di `lazy`.

```js
assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);
```

Una delle tue caselle di spunta dovrebbe avere l'attributo `value` di `energetic`.

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

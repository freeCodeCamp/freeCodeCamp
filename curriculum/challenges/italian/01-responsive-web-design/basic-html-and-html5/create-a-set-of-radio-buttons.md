---
id: bad87fee1348bd9aedf08834
title: Creare un insieme di pulsanti di opzione
challengeType: 0
forumTopicId: 16822
dashedName: create-a-set-of-radio-buttons
---

# --description--

Puoi utilizzare i <dfn>pulsanti di opzione</dfn> (radiobutton) per le domande in cui desideri che l'utente dia una sola risposta scelta tra più opzioni.

I pulsanti di opzione sono un tipo di `input`.

Ognuno dei tuoi pulsanti di opzione può essere annidato all'interno del suo elemento `label`. Racchiudendo un elemento `input` all'interno di un elemento `label` assocerai automaticamente l'input della casella di spunta all'elemento label che lo circonda.

Tutti i pulsanti di opzione correlati dovrebbero avere lo stesso attributo `name` per creare un gruppo di pulsanti radio. Creando un gruppo di pulsanti di opzione, la selezione di un singolo pulsante deselezionerà automaticamente gli altri all'interno dello stesso gruppo assicurando che l'utente fornisca una sola risposta.

Ecco un esempio di pulsante radio:

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

È buona norma impostare un attributo `for` per l'elemento `label`, con un valore che corrisponda al valore dell'attributo `id` dell'elemento `input`. Ciò consente alle tecnologie assistive di creare una relazione tra l'etichetta e l'elemento `input` correlato. Ad esempio:

```html
<input id="indoor" type="radio" name="indoor-outdoor">
<label for="indoor">Indoor</label>
```

Possiamo anche annidare l'elemento `input` all'interno dei tag `label`:

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

# --instructions--

Aggiungi un paio di pulsanti di opzione al tuo modulo, ciascuno annidato nel suo elemento `label`. Uno dovrebbe avere l'opzione `indoor` e l'altro dovrebbe avere l'opzione `outdoor`. Entrambi dovrebbero condividere l'attributo `name` di `indoor-outdoor` per creare un gruppo radio.

# --hints--

La tua pagina dovrebbe avere due elementi `radio`.

```js
assert($('input[type="radio"]').length > 1);
```

Alle tue caselle di spunta dovrebbe essere dato l'attributo `name` di `indoor-outdoor`.

```js
assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
```

Ognuna delle tue caselle di spunta dovrebbe essere annidata all'interno del suo elemento `label`.

```js
assert($('label > input[type="radio"]:only-child').length > 1);
```

Ognuno dei tuoi elementi `label` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

Uno dei tuoi pulsanti di opzione dovrebbe avere l'etichetta `indoor`.

```js
assert(
  $('label')
    .text()
    .match(/indoor/gi)
);
```

Uno dei tuoi pulsanti di opzione dovrebbe avere l'etichetta `outdoor`.

```js
assert(
  $('label')
    .text()
    .match(/outdoor/gi)
);
```

Ognuno dei tuoi pulsanti di opzione dovrebbe essere aggiunto all'interno del tag `form`.

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

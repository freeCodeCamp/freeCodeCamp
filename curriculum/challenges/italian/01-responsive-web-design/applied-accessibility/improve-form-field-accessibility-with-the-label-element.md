---
id: 587d778a367417b2b2512aa6
title: Migliorare l'accessibilità dei moduli con l'elemento label
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
dashedName: improve-form-field-accessibility-with-the-label-element
---

# --description--

Migliorare l'accessibilità con l'HTML semantico richiede di usare sia i nomi che gli attributi appropriati per i tag. Le prossime sfide riguardano alcuni possibili scenari significativi in cui si utilizzano gli attributi nei moduli.

Il tag `label` racchiude il testo per uno specifico elemento di controllo del modulo, di solito il nome o l'etichetta di una delle scelte possibili. Questo fa sì che il significato sia legato all'elemento e rende il modulo più leggibile. L'attributo `for` di un tag `label` associa esplicitamente quella `label` al controllo del modulo, ed è usato dagli screen reader.

Hai conosciuto i pulsanti di opzione e le loro etichette in una lezione della sezione HTML di base. In quella lezione, abbiamo avvolto l'elemento input del pulsante di opzione all'interno di un elemento `label` insieme al testo dell'etichetta, in modo da rendere il testo cliccabile. Un altro modo per raggiungere questo obiettivo è utilizzare l'attributo `for`, come spiegato in questa lezione.

Il valore dell'attributo `for` deve essere uguale al valore dell'attributo `id` del controllo del modulo. Ecco un esempio:

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

# --instructions--

Camper Cat si aspetta un sacco di interesse per i suoi post e vuole includere un modulo di iscrizione alla newsletter. Aggiungi un attributo `for` nella `label` dell'email che corrisponda all'`id` del suo campo `input`.

# --hints--

Il tuo codice dovrebbe avere un attributo `for` non vuoto nel tag `label`.

```js
assert($('label').attr('for'));
```

Il valore del tuo attributo `for` dovrebbe corrispondere al valore dell'`id` nell'`input` email.

```js
assert($('label').attr('for') == 'email');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label>Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

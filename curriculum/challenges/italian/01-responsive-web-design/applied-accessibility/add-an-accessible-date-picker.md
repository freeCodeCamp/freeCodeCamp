---
id: 587d778b367417b2b2512aa8
title: Aggiungere un selettore di data accessibile
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

I moduli spesso includono il campo `input`, che può essere usato per creare diversi tipi di controlli. L'attributo `type` indica che tipo di elemento `input` sarà creato.

Potresti aver notato i tipi di input `text` e `submit` nelle sfide precedenti, e HTML5 ha introdotto anche un'opzione per specificare un campo `date`. A seconda del supporto del browser, un selettore di date appare nel campo `input` quando è selezionato, il che rende la compilazione del modulo più semplice per tutti gli utenti.

Nei browser più vecchi il tipo sarà predefinito a `text`, quindi è utile mostrare agli utenti il formato di data previsto nella `label` o nel testo `placeholder` per sicurezza.

Ecco un esempio:

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Camper Cat sta organizzando un torneo di Mortal Kombat e vuole chiedere ai suoi concorrenti di vedere quale data sia la migliore. Aggiungi un tag `input` con un attributo `type` pari a `date`, un attributo `id` pari a `pickdate` e un attributo `name` pari a `date`.

# --hints--

Il tuo codice dovrebbe aggiungere un tag `input` per il campo di selezione della data.

```js
assert($('input').length == 2);
```

Il tuo tag `input` dovrebbe avere un attributo `type` con un valore di `date`.

```js
assert($('input').attr('type') == 'date');
```

Il tuo tag `input` dovrebbe avere un attributo `id` con un valore di `pickdate`.

```js
assert($('input').attr('id') == 'pickdate');
```

Il tuo tag `input` dovrebbe avere un attributo `name` con un valore di `date`.

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

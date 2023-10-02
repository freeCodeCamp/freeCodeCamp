---
id: 587d7790367417b2b2512ab0
title: Usare l'attributo tabindex per evidenziare un elemento tramite tastiera
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

L'attributo HTML `tabindex` ha tre funzioni distinte relative alla selezione di un elemento tramite tastiera. Quando è su un tag, indica che l'elemento può essere evidenziato. Il valore (un intero positivo, negativo o nullo) ne determina il comportamento.

Alcuni elementi, come i link e i controlli dei moduli, vengono selezionati automaticamente da tastiera quando un utente preme il tasto tab attraverso una pagina. La selezione segue lo stesso ordine con cui gli elementi compaiono nella formattazione HTML. La stessa funzionalità può essere data ad altri elementi, come `div`, `span`, e `p`, posizionando un attributo `tabindex="0"` su di essi. Ecco un esempio:

```html
<div tabindex="0">I need keyboard focus!</div>
```

**Nota:** Un valore `tabindex` negativo (tipicamente -1) indica che un elemento è selezionabile, ma non è raggiungibile dalla tastiera. Questo metodo viene generalmente utilizzato per mettere a fuoco i contenuti a livello di programmazione (come quando viene attivato un `div` utilizzato per una finestra popup), e va oltre lo scopo di queste sfide.

# --instructions--

Camper Cat ha creato un nuovo sondaggio per raccogliere informazioni sui suoi utenti. Sa che i campi di input ottengono automaticamente la selezione da tastiera, ma vuole assicurarsi che gli utenti della sola tastiera si soffermino sulle istruzioni mentre scorrono con il tasto tab attraverso gli elementi. Aggiungi un attributo `tabindex` al tag `p` e impostane il valore a `0`. Bonus - utilizzare l'attributo `tabindex` consente anche alla pseudo-classe CSS `:focus` di funzionare sul tag `p`.

# --hints--

Il tuo codice dovrebbe aggiungere un attributo `tabindex` sul tag `p` che contiene le istruzioni del modulo.

```js
assert($('p').attr('tabindex'));
```

Il tuo codice dovrebbe impostare l'attributo `tabindex` sul tag `p` ad un valore di 0.

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

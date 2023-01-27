---
id: bad87fee1348bd9aedf08719
title: Usare codici Hex abbreviati
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
dashedName: use-abbreviated-hex-code
---

# --description--

Molte persone si sentono sopraffatte dalle possibilità offerte da più di 16 milioni di colori. Ed è difficile ricordare i codici esadecimali. Fortunatamente puoi abbreviarli.

Ad esempio, il codice esadecimale del rosso `#FF0000` può essere abbreviato in `#F00`. Questa forma abbreviata fornisce una cifra per il rosso, una cifra per il verde, e una cifra per il blu.

Questo riduce il numero totale di colori possibili a circa 4.000. Ma i browser interpreteranno `#FF0000` e `#F00` esattamente come lo stesso colore.

# --instructions--

Vai avanti, prova a usare i codici esadecimali abbreviati per colorare gli elementi corretti.

<table class='table table-striped'><tbody><tr><th>Colore</th><th>Codice Hex breve</th></tr><tr><td>Ciano</td><td><code>#0FF</code></td></tr><tr><td>Verde</td><td><code>#0F0</code></td></tr><tr><td>Rosso</td><td><code>#F00</code></td></tr><tr><td>Fucsia</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

Il tuo elemento `h1` con il testo `I am red!` dovrebbe ricevere il `color` rosso.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Dovresti usare il codice esadecimale abbreviato per il colore rosso al posto del codice `#FF0000`.

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?#F00\s*?;?\s*?}/gi));
```

Al tuo elemento `h1` con il testo `I am green!` dovrebbe essere assegnato il `color` verde.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

Dovresti usare il codice esadecimale abbreviato per il colore verde al posto del codice `#00FF00`.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?#0F0\s*?;?\s*?}/gi));
```

Il tuo elemento `h1` con il testo `I am cyan!` dovrebbe ricevere il `color` ciano.

```js
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
```

Dovresti usare il codice esadecimale abbreviato per il colore ciano al posto del codice `#00FFFF`.

```js
assert(code.match(/\.cyan-text\s*?{\s*?color\s*:\s*?#0FF\s*?;?\s*?}/gi));
```

Il tuo elemento `h1` con il testo `I am fuchsia!` dovrebbe ricevere il `color` fucsia.

```js
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
```

Dovresti usare il codice esadecimale abbreviato per il colore fucsia invece del codice `#FF00FF`.

```js
assert(code.match(/\.fuchsia-text\s*?{\s*?color\s*:\s*?#F0F\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

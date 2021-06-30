---
id: 587d7faf367417b2b2512be8
title: Ottenere dati di geolocazione per trovare le coordinate GPS di un utente
challengeType: 6
forumTopicId: 18188
dashedName: get-geolocation-data-to-find-a-users-gps-coordinates
---

# --description--

Un'altra cosa speciale che puoi fare è accedere alla posizione attuale del tuo utente. Ogni browser ha integrato un navigatore che può dare questa informazione.

Il navigatore ottiene la longitudine e latitudine attuali.

Vedrai un prompt per permettere o negare l'accesso di un sito alla tua posizione. La sfida può essere completata con entrambe le opzioni, se il codice è corretto.

Se lo permetti, vedrai il testo del telefono nell'output cambiare con la tua latitudine e longitudine.

Ecco il codice che lo fa:

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

Come prima cosa, controlla che l'oggetto `navigator.geolocation` esista. Se esiste, il metodo `getCurrentPosition` è chiamato su quell'oggetto, iniziando la richiesta asincrona per la posizione dell'utente. Se la richiesta ha successo, la funzione callback nel metodo viene eseguita. La funzione ha accesso ai valori di latitudine e longitutine nell'oggetto `position` usando la notazione a punto, e aggiorna l'HTML.

# --instructions--

Aggiungi il codice di esempio nel tag `script` per controllare la posizione attuale dell'utente e inserirla nell'HTML.

# --hints--

Il tuo codice dovrebbe usare `navigator.geolocation` per accedere alla posizione attuale dell'utente.

```js
assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
```

Il tuo codice dovrebbe usare `position.coords.latitude` per mostrare la latitudine della posizione dell'utente.

```js
assert(code.match(/position\.coords\.latitude/g));
```

Il tuo codice dovrebbe usare `position.coords.longitude` per mostrare la longitudine della posizione dell'utente.

```js
assert(code.match(/position\.coords\.longitude/g));
```

Dovresti mostrare la posizione dell'utente all'interno dell'elemento `div` con `id="data"`.

```js
assert(
  code.match(/document\.getElementById\(\s*?('|")data\1\s*?\)\.innerHTML/g)
);
```

# --seed--

## --seed-contents--

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>
```

# --solutions--

```html
<script>
  // Add your code below this line
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
  }
  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

</section>
```

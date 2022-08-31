---
id: 587d7faf367417b2b2512be8
title: Geolokalisierungsdaten zur Ermittlung von GPS-Koordinaten eines Nutzers abrufen
challengeType: 6
forumTopicId: 18188
dashedName: get-geolocation-data-to-find-a-users-gps-coordinates
---

# --description--

Eine weitere coole Sache, die du machen kannst, ist auf den Standort deines Nutzers zuzugreifen. Jeder Browser hat einen eingebauten Navigator, der dir diese Informationen liefern kann.

Der Navigator ermittelt den aktuellen Längen- und Breitengrad des Nutzers.

Du wirst dazu aufgefordert, festzulegen, ob du dieser Seite Zugriff auf deinen Standort geben möchtest oder nicht. Diese Aufgabe kann, solange der Code stimmt, unabhängig davon abgeschlossen werden.

Lässt du den Zugriff zu, verändert sich der Text auf dem Ausgabetelefon zu deinem Breiten- und Längengrad.

Hier ist der Code dafür:

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

Er prüft zunächst, ob das Objekt `navigator.geolocation` existiert. Wenn dies der Fall ist, wird die Methode `getCurrentPosition` für dieses Objekt aufgerufen, die eine asynchrone Anfrage nach der Position des Nutzers startet. Wenn die Anfrage erfolgreich ist, wird die Callback-Funktion in der Methode ausgeführt. Diese Funktion greift auf die Werte für Breiten- und Längengrad des `position`-Objekts mithilfe von Punktnotation zu und aktualisiert die HTML.

# --instructions--

Füge den Beispielcode innerhalb des `script`-Tags ein, um den aktuellen Standort des Nutzers abzurufen und in die HTML einzufügen.

# --hints--

Dein Code sollte `navigator.geolocation` verwenden, um auf den aktuellen Standort des Nutzers zuzugreifen.

```js
assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
```

Dein Code sollte `position.coords.latitude` verwenden, um den Breitengrad des Nutzers anzuzeigen.

```js
assert(code.match(/position\.coords\.latitude/g));
```

Dein Code sollte `position.coords.longitude` verwenden, um den Längengrad des Nutzers anzuzeigen.

```js
assert(code.match(/position\.coords\.longitude/g));
```

Du solltest die Position des Nutzers innerhalb des `div`-Elements mit der `id="data"` anzeigen.

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

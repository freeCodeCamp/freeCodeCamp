---
title: Ablaufsteuerung
---

## Ablaufsteuerung


### Bedingungen

Mit Vue.js kann man - an Hand von bestimmten Kriterien - entscheiden, welche Elmente auf einer Seite dargestellt werden und welche nicht.
Stell dir z.B. ein Eingabefeld vor, welches mind. 8 Zeichen als Eingabe erwartet.
Wenn ein Benutzer weniger als 8 Zeichen eingegeben hat soll eine Fehlermeldung angezeigt werden, wenn es mehr sind soll diese Meldung nicht angezeigt werden.

Aber schauen wir uns das in einem Beispiel an. Wir wollen in Abhängigkeit zu einem Zähler eine Nachricht anzeigen lassen:

```html
<div id="app">
  <p v-if="counter > 10">
    Diese Nachricht wird nur angezeigt, wenn der Zähler größer als 10 ist.
  </p>
</div>
```

```javascript
let app = new Vue({
  el: '#app',
  data: {
    counter: 0
  }
});
```
Wenn du in die Konsole gehst und anfängst den Zähler zu erhöhen und die Grenze von 10 überschreitest, dann wird die Nachricht angezeigt! Wenn du dann den `counter` verringerst, wird Vue.js die Nachricht wieder verschwinden lassen, wenn der Wert geringer als 11 wird. Dafür benutzen wir die Anweisung `v-if`.

Vermutlich frägst du dich ob es ein `else` zu dem `if` gibt. Ja, es gibt `v-else`. Beachte, dass `v-else` immer
* ein `v-if` zuvor erwartet
* sich immer auf das näheste `v-if` auf der Seite bezieht

Lass uns das obige Beispiel etwas anpassen um es direkt auszuprobieren:

```html
<div id="app">
  <p v-if="counter > 10">
    Diese Nachricht wird nur angezeigt, wenn der Zähler größer als 10 ist.
  </p>
  <p v-else>
    Und dieser wird immer aderweitig angezeigt.
  </p>
</div>
```

```javascript
let app = new Vue({
  el: '#app',
  data: {
    counter: 0
  }
});
```

Spiele etwas damit in dem du `counter` anpasst und die gezeigte Nachricht beobachtest.

Vue.js hat auch eine `v-else-if` Anweisung.


### Schleifen

Vue.js ermöglicht es auch mehrere Kopien der selben Codes-Struktur zu erzeugen.
Ein klassisches Beispiel ist die Generierung einer dynamischen Liste:

```html
<div id="app">
  <ul>
    <li v-for="item in list">
      {{ item }}
    </li>
  </ul>
</div>
```

```javascript
let app = new Vue({
  el: '#app',
  data: {
    list: [
      "rasieren",
      "Geschirr spülen",
      "Spüle reinigen",
      "Rechnungen bezahlen"
    ]
  }
});
```
Viel einfacher als ein Haufen `<li>` einzufügen. Und beachte, wann immer die Liste verändert wird, wird sich das Ergebnis entsprechend ändern. Probiere es aus: Öffne die Konsole und `push` einen String-Ausdruck in die `list` mit 

```javascript
app.list.push("something else");
```
Wie erwartet, die übersetzte Seite zeigt nun das neue Element.

### Zugriff auf den aktuellen index in Schleifen

`v-for` unterstützt auch ein optionales zweites Argument für den Index des aktuellen Elements:


```html
<div id="app">
  <ul>
    <li v-for="(item, index) in items">
      {{ index }}: {{ item }}
    </li>
  </ul>
</div>
```
Auf diesen Weg können wir `index` verwenden um den ersten, letzten irgendeinen/alle Listen-Elemente anders zu gestalten oder extra Logik zu unserer Komponente hinzuzufügen.
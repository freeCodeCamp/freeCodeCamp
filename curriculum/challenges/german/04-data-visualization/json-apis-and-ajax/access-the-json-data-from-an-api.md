---
id: 587d7fae367417b2b2512be4
title: Greife auf JSON-Daten mit einer API zu
challengeType: 6
forumTopicId: 301499
dashedName: access-the-json-data-from-an-api
---

# --description--

In der vorherigen Herausforderung hast du gelernt, JSON-Daten aus der Katzenfoto-API von freeCodeCamp abzurufen.

Hier wirst du dich genauer mit den zurückgegebenen Daten auseinandersetzen, um das JSON-Format besser zu verstehen. Erinnere dich an folgende Notationen JavaScripts:

<blockquote>[ ] -> Quadratische Klammern symbolisieren ein Array,<br>{ } -> Geschweifte Klammern ein Objekt,<br>" " -> und Anführungszeichen eine Zeichenfolge. Sie werden zudem für Schlüsselbezeichnungen in JSON verwendet.</blockquote>

Es ist wichtig, die Struktur der Daten, die eine API zurückgibt, zu verstehen, da sie die Art und Weise, wie du Werte aufrufst, beeinflussen.

Klicke rechts auf den `Get Message`-Button, um die JSON-Daten der Katzenfoto-API von freeCodeCamp in das HTML zu laden.

Das erste und letzte Zeichen der JSON-Daten sind eckige Klammern `[ ]`. Dies bedeutet, dass die Daten in einem Array zurückgegeben werden. Das zweite Zeichen in den JSON-Daten ist eine geschweifte `{` Klammer, welche den Anfang eines Objekts ankündigt. Schaust du genau hin, bemerkst du, dass es sich eigentlich um drei verschiedene Objekte handelt. Die JSON-Daten bestehen aus einem Array dreier Objekte – jedes beinhaltet Informationen über ein Katzenfoto.

Du hast bereits zuvor gelernt, dass Objekte "Schlüssel-Wert-Paare", die jeweils mit einem Komma voneinander getrennt sind, enthalten. Im diesem Beispiel besteht das erste Objekt aus `"id":0` – `id` ist hier der Schlüssel und `0` der dazugehörige Wert. In ähnlicher Weise gibt es Schlüssel für `imageLink`, `altText` und `codeNames`. Jedes Katzenfoto besitzt hierbei die gleichen Schlüssel, nicht aber die gleichen Werte.

Ein weiteres, interessantes "Schlüssel-Wert-Paar" im ersten Objekt ist `"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]`. Hier ist `codeNames` der Schlüssel, mit einem Array aus drei Strings als Wert. Es ist möglich, einen Array aus Objekten sowie einen Schlüssel mit einem Array als Wert zu haben.

Erinnere dich daran, wie du Daten in Arrays und Objekten aufrufst. Arrays benutzen Klammer-Notation, um einen bestimmten Index eines Elements aufzurufen. Objekte benutzen entweder Klammer- oder Punkt-Notation, um auf den Wert einer bestimmten Eigenschaft zuzugreifen. Hier ist ein Beispiel, das die `altText`-Eigenschaft des ersten Katzenfotos ausgibt – beachte, dass die zergliederten JSON-Daten im Editor in der Variable `json` gespeichert sind.

```js
console.log(json[0].altText);
```

Die Konsole würde den String `A white cat wearing a green helmet shaped melon on its head.` ausgeben.

# --instructions--

Für die Katze mit der `id` von 2 gibst du in der Konsole den zweiten Wert des `codeNames`-Arrays aus. Du solltest Klammer- und Punkt-Notation mit dem Objekt (welches in der Variable `json` gespeichert ist) verwenden, um den Wert aufzurufen.

# --hints--

Dein Code sollte auf Klammer- und Punkt-Notation zurückgreifen, um auf den korrekten Codenamen zuzugreifen und `Loki` in der Konsole auszugeben.

```js
assert(
  code.match(
    /console\s*\.\s*log\s*\(\s*json\s*\[2\]\s*(\.\s*codeNames|\[\s*('|`|")codeNames\2\s*\])\s*\[\s*1\s*\]\s*\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line

        // Add your code above this line
      };
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line
        console.log(json[2].codeNames[1]);
        // Add your code above this line
      };
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Photo Finder</h1>
<p class="message">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

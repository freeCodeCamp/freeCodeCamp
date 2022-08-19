---
id: 587d7fae367417b2b2512be3
title: JSON mit JavaScripts XMLHttpRequest-Methode erhalten
challengeType: 6
forumTopicId: 301502
dashedName: get-json-with-the-javascript-xmlhttprequest-method
---

# --description--

Du kannst Daten auch von einer externen Quelle anfordern. Hier kommen APIs ins Spiel.

Bedenke: APIs – oder Application Programming Interfaces – sind von Computern benutzte Werkzeuge, um miteinander zu kommunizieren. Du wirst lernen, wie man HTML mit den Daten, die wir von APIs erhalten, mit einer Technologie namens AJAX aktualisiert.

Die meisten APIs übertragen Daten in einem als JSON bekannten Format. JSON steht für JavaScript Object Notation.

Der JSON-Syntax ähnelt JavaScripts direkter Objekt-Notation. JSON wird aus Objekteigenschaften und deren aktuellen Werte gebildet, welche zwischen einem `{` und einem `}` gesetzt werden.

Diese Eigenschaften und ihre Werte werden oft als "Schlüssel-Wert-Paare" bezeichnet.

Jedoch werden von APIs übermittelte JSON-Daten als `bytes` gesendet, deine Anwendung erhält sie aber als `string`. Zwar können diese in JavaScript-Objekte konvertiert werden, sind aber standardmäßig keine. Die `JSON.parse`-Methode parst einen String und erzeugt ein JavaScript-Objekt, welches diesen beschreibt.

Du kannst die JSON-Daten der Katzenfoto-API von freeCodeCamp anfordern. Hier ist der Code, den du in dein Click-Event setzten kannst, um das durchzuführen:

```js
const req = new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
};
```

Folgend eine Beschreibung über das, was jeder Abschnitt macht. Das `XMLHttpRequest`-JavaScript-Objekt kennt eine Vielzahl von Eigenschaften und Methoden für Datentransfers. Zuerst wird eine neue Instanz des `XMLHttpRequest`-Objekts erzeugt und in der `req`-Variable gespeichert. Die `open`-Methode initialisiert eine Anfrage – hier eine, die Daten von einer API anfordert; es handelt sich deshalb um eine `GET`-Anfrage. Das zweite Argument von `open` ist die URL der API, von der du Daten anforderst. Das dritte Argument ist ein Boolean-Wert – `true` erstellt eine asynchrone Anfrage. Die Methode `send` schickt die Anfrage anschließend ab. Zuletzt parst der `onload`-Eventhandler die zurückgegebenen Daten und wendet die `JSON.stringify`-Methode an, um das JavaScript-Objekt in einen String zu konvertieren. Dieser String wird dann als Nachrichtentext verwendet.

# --instructions--

Aktualisiere den Code, um eine `GET`-Anfrage zu erzeugen, und an freeCodeCamp's Katzenfoto-API zu senden. Klicke dann den `Get Message`-Button. Deine AJAX-Funktion wird `The message will go here` durch den unverarbeiteten JSON-Rückgabewert der API ersetzen.

# --hints--

Dein Code sollte eine neue `XMLHttpRequest` erzeugen.

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

Dein Code sollte von der `open`-Methode Gebrauch machen, um eine `GET`-Anfrage an freeCodeCamp's Katzenfoto-API zu initialisieren.

```js
assert(
  code.match(
    /\.open\(\s*?('|")GET\1\s*?,\s*?('|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g
  )
);
```

Dein Code sollte die `send`-Methode verwenden, um die Anfrage abzuschicken.

```js
assert(code.match(/\.send\(\s*\)/g));
```

Dein Code sollte über einen auf eine Funktion gesetzten `onload`-Eventhandler verfügen.

```js
assert(
  code.match(/\.onload\s*=\s*(function|\(\s*?\))\s*?(\(\s*?\)|\=\>)\s*?{/g)
);
```

Dein Code sollte die `JSON.parse`-Methode verwenden, um den `responseText` zu parsen.

```js
assert(code.match(/JSON\s*\.parse\(\s*.*\.responseText\s*\)/g));
```

Dein Code sollte das Element mit der Klasse `message` aufrufen und die inneren HTML-Werte auf den String der JSON-Daten setzen.

```js
assert(
  code.match(
    /document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      // Add your code below this line


      // Add your code above this line
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
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open('GET', '/json/cats.json', true);
      req.send();
      req.onload = () => {
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
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

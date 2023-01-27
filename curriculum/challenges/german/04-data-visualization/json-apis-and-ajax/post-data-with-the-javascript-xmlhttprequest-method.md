---
id: 587d7faf367417b2b2512be9
title: Daten mit der JavaScript-Methode XMLHttpRequest übermitteln
challengeType: 6
forumTopicId: 301504
dashedName: post-data-with-the-javascript-xmlhttprequest-method
---

# --description--

In den vorherigen Beispielen hast du Daten von einer externen Ressource empfangen. Du kannst auch Daten an eine externe Ressource senden, solange diese Ressource AJAX-Anfragen unterstützt und du die URL kennst.

Die JavaScript Methode `XMLHttpRequest` wird auch verwendet, um Daten an einen Server zu übermitteln. Hier ist ein Beispiel:

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```

Du hast bereits mehrere dieser Methoden gesehen. Hier initialisiert die `open`-Methode die Anfrage als `POST` an die angegebene URL der externen Ressource und verwendet den `true` Boolean, um es asynchron zu gestalten. Die Methode `setRequestHeader` setzt den Wert eines HTTP-Request-Headers, der Informationen über den Absender und die Anfrage enthält. Es muss nach der `open`-Methode aufgerufen werden, aber noch vor der `send`-Methode. Die beiden Parameter sind der Name des Headers und der Wert, der als der Körper des Headers gesetzt werden soll. Als nächstes bearbeitet der `onreadystatechange` Event-Listener eine Änderung des Status der Abfrage. Ein `readyState` von `4` bedeutet, dass die Operation abgeschlossen ist und ein `status` von `201` bedeutet, dass es eine erfolgreiche Anfrage war. Der HTML-Code des Dokuments kann aktualisiert werden. Schließlich sendet die `send`-Methode eine Anfrage mit dem `body` Wert, dessen `userName`-Schlüssel vom Nutzer im `input`-Feld gegeben wurde.

# --instructions--

Aktualisiere den Code, damit er eine `POST`-Anfrage an den API-Endpunkt stellt. Gib dann deinen Namen in das Eingabefeld ein und klicke auf `Send Message`. Deine AJAX Funktion sollte `Reply from Server will be here.` durch Daten vom Server ersetzen. Formatiere die Antwort so, dass dein Name zusammen mit dem Text `loves cats` angezeigt wird.

# --hints--

Dein Code sollte eine neue `XMLHttpRequest` erstellen.

```js
assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
```

Dein Code sollte die `open`-Methode verwenden, um eine `POST`-Anfrage an den Server zu senden.

```js
assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
```

Dein Code sollte die `setRequestHeader`-Methode verwenden.

```js
assert(
  code.match(
    /\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g
  )
);
```

Dein Code sollte einen `onreadystatechange` Event-Handler auf eine Funktion gesetzt haben.

```js
assert(code.match(/\.onreadystatechange\s*?=/g));
```

Dein Code sollte das Element mit der Klasse `message` erhalten und dessen `textContent` zu `userName loves cats` ändern

```js
assert(
  code.match(
    /document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g
  )
);
```

Dein Code sollte die `send`-Methode verwenden.

```js
assert(code.match(/\.send\(\s*?body\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
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

<h1>Cat Friends</h1>
<p class="message box">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201){
          const serverResponse = JSON.parse(xhr.response);
          document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
       }
     };
     const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
     xhr.send(body);
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

<h1>Cat Friends</h1>
<p class="message">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

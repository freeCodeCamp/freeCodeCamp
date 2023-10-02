---
id: 587d7fb2367417b2b2512bf5
title: Routen-Eingabeparameter vom Kunden erhalten
challengeType: 2
forumTopicId: 301513
dashedName: get-route-parameter-input-from-the-client
---

# --description--

Beim Aufbau einer API müssen wir den Nutzern die Möglichkeit geben, uns mitzuteilen, was sie von unserem Dienst erwarten. Fordert der Client beispielsweise Informationen über einen in der Datenbank gespeicherten Nutzer an, muss er uns irgendwie mitteilen, an welchem Nutzer er interessiert ist. Eine Möglichkeit, dieses Ergebnis zu erreichen, ist die Verwendung von Routenparametern. Routenparameter sind benannte Segmente der URL, die durch Schrägstriche (/) getrennt sind. Jedes Segment erfasst den Wert des Teils der URL, der seiner Position entspricht. Die erfassten Werte sind im Objekt `req.params` zu finden.

<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

Erstelle einen Echo-Server, der über die Route `GET /:word/echo` eingebunden wird. Antworte mit einem JSON-Objekt, das die Struktur `{echo: word}` hat. Das zu wiederholende Wort findest du unter `req.params.word`. Du kannst deine Route in der Adressleiste deines Browsers testen, indem du einige passende Routen besuchst, z.B. `your-app-rootpath/freecodecamp/echo`.

# --hints--

Test 1: Dein Echo-Server sollte Wörter korrekt wiederholen

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/eChOtEsT/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'eChOtEsT',
        'Test 1: the echo server is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Test 2: Dein Echo-Server sollte Wörter korrekt wiederholen

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/ech0-t3st/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'ech0-t3st',
        'Test 2: the echo server is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

---
id: 587d8250367417b2b2512c5d
title: Funktionstests mit einem Headless Browser ausführen
challengeType: 2
forumTopicId: 301595
dashedName: run-functional-tests-using-a-headless-browser
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Auf der Seite befindet sich ein Eingabeformular. Es sendet Daten an den `PUT /travellers` Endpunkt als AJAX Anfrage.

Wenn die Anfrage erfolgreich abgeschlossen wurde, fügt der Client-Code einen `<div>` an, der die Informationen in der Antwort auf das DOM enthält.

Hier ist ein Beispiel für die Verwendung von Zombie.js zur Interaktion mit dem Formular:

```js
test('Submit the surname "Polo" in the HTML form', function (done) {
  browser.fill('surname', 'Polo').then(() => {
    browser.pressButton('submit', () => {
      browser.assert.success();
      browser.assert.text('span#name', 'Marco');
      browser.assert.text('span#surname', 'Polo');
      browser.assert.elements('span#dates', 1);
      done();
    });
  });
});
```

First, the `fill` method of the `browser` object fills the `surname` field of the form with the value `'Polo'`. `fill` returns a promise, so `then` is chained off of it.

Within the `then` callback, the `pressButton` method of the `browser` object is used to invoke the form's `submit` event listener. The `pressButton` method is asynchronous.

Then, once a response is received from the AJAX request, a few assertions are made confirming:

1.  Der Status der Antwort ist `200`
2.  Der Text innerhalb des `<span id='name'></span>` Elements entspricht `'Marco'`
3.  Der Text innerhalb des `<span id='surname'></span>` Elements entspricht `'Polo'`
4.  There is `1` `<span id='dates'></span>` element.

Schließlich wird der `done` Callback aufgerufen, der aufgrund des asynchronen Tests benötigt wird.

# --instructions--

Within `tests/2_functional-tests.js`, in the `'Submit the surname "Colombo" in the HTML form'` test (`// #5`), automate the following:

1.  Fülle das Formular mit dem Nachnamen `Colombo` aus
2.  Klicke auf den "Bestätigen" Button

Und innerhalb des `pressButton` Callback:

1.  Assert that status is OK `200`
2.  Prüfe, ob der Text innerhalb des Elements `span#name` `'Cristoforo'` ist
3.  Prüfe, ob der Text innerhalb des Elements `span#surname` `'Colombo'` ist
4.  Überprüfe, ob das/die Element(e) `span#dates` existieren und deren Zahl `1` ist

Vergiss nicht, den `assert.fail()`-Aufruf zu entfernen.

# --hints--

Alle Tests sollten bestanden werden.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest überprüfen, ob die Anfrage des Headless Browsers erfolgreich war.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Prüfe, ob der Text innerhalb des Elements `span#name` `'Cristoforo'` ist.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Cristoforo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Prüfe, ob der Text innerhalb des Elements `span#surname` `'Colombo'` ist.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Colombo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Du solltest überprüfen, ob das Element `span#dates` existiert und seine Anzahl 1 ist.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=5').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'browser.elements');
      assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
      assert.equal(data.assertions[3].args[1], 1);
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

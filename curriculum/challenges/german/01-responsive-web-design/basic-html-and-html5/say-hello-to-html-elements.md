---
id: bd7123c8c441eddfaeb5bdef
title: Sag Hallo zu HTML Elementen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
dashedName: say-hello-to-html-elements
---

# --description--

Willkommen zu den HTML-Programmieraufgaben von freeCodeCamp. Diese werden dich Schritt für Schritt durch die Webentwicklung führen.

Zuerst wirst du eine einfache Webseite mit HTML erstellen. Du kannst Code in deinem Code-Editor bearbeiten, der in diese Webseite eingebettet ist.

Siehst du den Code in deinem Code-Editor, der `<h1>Hello</h1>` sagt? Das ist ein HTML-Element.

Die meisten HTML-Elemente haben einen öffnenden Tag und einen schließenden Tag.

Öffnende Tags sehen so aus:

```html
<h1>
```

Schließende Tags sehen so aus:

```html
</h1>
```

Der einzige Unterschied zwischen öffnenden und schließenden Tags ist der Schrägstrich nach der öffnenden Klammer eines schließenden Tags.

Für jede Aufgabe gibt es Tests, die du jederzeit ausführen kannst, indem du auf den Button "Tests ausführen" klickst. Wenn du alle Tests bestanden hast, wirst du aufgefordert, deine Lösung einzureichen und zur nächsten Programmieraufgabe zu gehen.

# --instructions--

Um den Test für diese Aufgabe zu bestehen, ändere den Text deines `h1`-Elements zu `Hello World`.

# --hints--

Dein `h1`-Element sollte den Text `Hello World` enthalten.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
```

---
id: 5dfa30b9eacea3f48c6300ad
title: Schritt 15
challengeType: 0
dashedName: step-15
---

# --description--

In den vorherigen Schritten hast du ein Ankerelement verwendet, um Text in einen Link zu umwandeln. Auch andere Arten von Inhalten können in einen Link umgewandelt werden, indem sie mit Anker-Tags umschlossen werden.

Umwandle das Bild in einen Link, indem du es mit den notwendigen Tags der Elemente umgibst. Verwende `https://freecatphotoapp.com` als den `href`-Attributwert des Ankers.

# --hints--

Du solltest ein `img`-Element mit einem `src`-Wert von `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg` haben. Möglicherweise hast du es versehentlich gelöscht.

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

Dein (`a`)-Ankerelement sollte ein öffnendes Tag haben. Öffnende Tags haben folgende Syntax: `<elementName>`.

```js
assert(document.querySelectorAll('a').length >= 2);
```

Dir fehlt ein abschließendes (`a`)-Tag nach dem Bild.

```js
assert(document.querySelectorAll('a').length === 2);
```

Dein (`a`)-Ankerelement sollte ein schließendes Tag haben. Abschließende Tags haben ein `/` genau nach dem `<`-Zeichen.

```js
assert(code.match(/<\/a>/g).length >= 2);
```

Du solltest nur ein schließendes (`a`)-Ankertag hinzufügen. Entferne bitte alles Zusätzliche.

```js
assert(code.match(/<\/a>/g).length === 2);
```

Dein (`a`)-Ankerelement hat kein `href`-Attribut. Überprüfe, ob ein Leerzeichen nach dem Namen des öffnenden Tags und/oder Leerzeichen vor allen Attributnamen vorhanden sind.

```js
assert(document.querySelector('a').hasAttribute('href'));
```

Dein (`a`)-Ankerelement sollte auf `https://freecatphotoapp.com` verlinken. Du hast entweder die URL weggelassen oder einen Tippfehler gemacht.

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

Dein `img`-Element sollte innerhalb deines (`a`)-Ankerelements verschachtelt sein. Das gesamte `img`-Element sollte sich innerhalb der einleitenden und schließenden Tags des (`a`)-Ankerelements befinden.

```js
assert(document.querySelector('img').parentNode.nodeName === 'A');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```


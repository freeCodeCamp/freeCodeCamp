---
id: 587d778f367417b2b2512aae
title: Gib Links eine Bedeutung durch die Verwendung von aussagekräftigem Linktext
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
dashedName: give-links-meaning-by-using-descriptive-link-text
---

# --description--

Benutzer von Screenreadern haben verschiedene Möglichkeiten, welche Art von Inhalten ihr Gerät liest. Zu diesen Optionen gehören das Springen zu (oder über) markante Elemente, das Springen zum Hauptinhalt oder das Abrufen einer Seitenübersicht aus den Überschriften. Eine andere Option ist es, nur die verfügbaren Links einer Seite zu hören.

Screenreader tun dies, indem sie den Linktext lesen, oder das, was zwischen den Anchor-Tags (`a`) steht. Eine Liste mit "Hier klicken"- oder "Mehr lesen"-Links ist nicht hilfreich. Verwende stattdessen kurzen, aber beschreibenden Text innerhalb der `a`-Tags, um diesen Benutzern mehr zu vermitteln.

# --instructions--

Der Linktext, den Camper Cat benutzt ist nicht sehr aussagekräftig ohne den ihn umgebenden Kontext. Verschiebe die Anchor-Tags (`a`) so, dass sie den Text `information about batteries` umschließen, anstatt `Click here`.

# --hints--

Dein Code sollte die Anchor-Tags `a` um die Wörter `Click here` versetzen, so dass sie die Wörter `information about batteries` umschliessen.

```js
assert(
  $('a')
    .text()
    .match(/^(information about batteries)$/g)
);
```

Das `a` Element sollte ein `href` Attribut mit dem Wert eines leeren Strings `""` haben.

```js
assert($('a').attr('href') === '');
```

Das `a` Element sollte ein schliessendes Tag haben.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```

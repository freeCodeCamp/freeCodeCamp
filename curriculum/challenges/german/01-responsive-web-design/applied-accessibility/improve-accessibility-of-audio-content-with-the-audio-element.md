---
id: 587d7789367417b2b2512aa4
title: Verbessere den Zugriff auf Audio-Inhalte mit dem Audio-Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
dashedName: improve-accessibility-of-audio-content-with-the-audio-element
---

# --description--

Das `audio`-Element von HTML5 sorgt für eine semantische Bedeutung, wenn es Sound- oder Audio-Stream-Inhalte in dein Markup einbettet. Audioinhalte benötigen auch eine Textalternative, um für gehörlose oder schwerhörige Menschen zugänglich zu sein. Dies kann mit nahegelegenem Text auf der Seite oder einem Link zu einem Transkript geschehen.

Das `audio`-Tag unterstützt das `controls`-Attribut. Dies zeigt die Standard-Wiedergabe-, Pause- und andere Steuerelemente des Browsers an und unterstützt die Tastaturfunktionalität. Dies ist ein boolesches Attribut, d. h. es benötigt keinen Wert, sein Vorhandensein im Tag schaltet die Einstellung ein.

Hier ist ein Beispiel:

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>
```

**Hinweis:** Multimediainhalte haben in der Regel sowohl visuelle als auch auditive Komponenten. Sie benötigt synchronisierte Untertitel und ein Transkript, damit Benutzer mit Seh- und/oder Hörbehinderungen darauf zugreifen können. Im Allgemeinen ist ein Webentwickler nicht für die Erstellung der Untertitel oder des Transkripts verantwortlich, muss aber wissen, wie er sie einfügen kann.

# --instructions--

Zeit, eine Pause von Camper Cat zu machen und seinen Kollegen Zersiax (@zersiax) zu treffen, einen Meister der Barrierefreiheit und einen Screenreader-Nutzer. Um einen Clip seines Screenreaders in Aktion zu hören, füge ein `audio`-Element nach dem `p`-Tag ein. Füge das `controls`-Attribut hinzu. Dann platziere einen `source`-Tag innerhalb der `audio`-Tags, wobei das `src`-Attribut auf `https://s3.amazonaws.com/freecodecamp/screen-reader.mp3` und das `type`-Attribut auf `"audio/mpeg"` gesetzt ist.

**Hinweis:** Der Audioclip klingt vielleicht schnell und ist schwer verständlich, aber das ist eine normale Geschwindigkeit für Benutzer von Screenreadern.

# --hints--

Dein Code sollte ein `audio`-Tag haben.

```js
assert($('audio').length === 1);
```

Dein `audio`-Element sollte einen schließenden Tag haben.

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

Das `audio`-Tag sollte das `controls`-Attribut haben.

```js
assert($('audio').attr('controls'));
```

Dein Code sollte ein `source`-Tag haben.

```js
assert($('source').length === 1);
```

Dein `source`-Tag sollte sich innerhalb der `audio`-Tags befinden.

```js
assert($('audio').children('source').length === 1);
```

Der Wert für das `src`-Attribut im `source`-Tag sollte genau mit dem Link in der Anleitung übereinstimmen.

```js
assert(
  $('source').attr('src') ===
    'https://s3.amazonaws.com/freecodecamp/screen-reader.mp3'
);
```

Dein Code sollte ein `type`-Attribut im `source`-Tag mit einem Wert von audio/mpeg enthalten.

```js
assert($('source').attr('type') === 'audio/mpeg');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>



  </main>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
    <audio controls>
      <source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg"/>
    </audio>
  </main>
</body>
```

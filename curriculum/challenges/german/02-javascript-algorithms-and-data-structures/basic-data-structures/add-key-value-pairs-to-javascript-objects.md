---
id: 587d7b7c367417b2b2512b18
title: Hinzufügen von Schlüssel-Wert-Paaren zu JavaScript-Objekten
challengeType: 1
forumTopicId: 301153
dashedName: add-key-value-pairs-to-javascript-objects
---

# --description--

Im Grunde genommen sind Objekte nur Sammlungen von <dfn>key-value-</dfn> Paaren. Mit anderen Worten sind sie Teile von Daten (<dfn>values</dfn>), die zu eindeutigen Identifikatoren namens <dfn>properties</dfn> zugeordnet sind (<dfn>keys</dfn>). Schau dir ein Beispiel an:

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

Der obere Code definiert ein Charakter-Objekt eines Tekken-Videospiels, das `tekkenCharacter` genannt wird. Es hat drei Eigenschaften, von denen jede einem bestimmten Wert zugeordnet wird. Wenn du eine zusätzliche Eigenschaft, wie z. B. "Herkunft", hinzufügen möchtest, kannst du dies tun, indem du dem Objekt `origin` zuweist:

```js
tekkenCharacter.origin = 'South Korea';
```

Dies verwendet Punktnotation. Wenn du das Objekt `tekkenCharacter` beobachten wolltest, so wird es jetzt die Eigenschaft `origin` enthalten. Hwoarang hatte auch deutlich orangefarbenes Haar. Du kannst diese Eigenschaft mit Klammernotation hinzufügen, indem du das Folgende tust:

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

Klammernotation ist erforderlich, wenn deine Eigenschaft ein Leerzeichen hat oder wenn du eine Variable verwenden möchtest, um eine Eigenschaft zu benennen. Im obigen Fall ist die Eigenschaft in Anführungszeichen eingeschlossen, um sie als Zeichenfolge zu kennzeichnen, und wird genau wie gezeigt hinzugefügt. Ohne Anführungszeichen wird sie als Variable ausgewertet, und der Name der Eigenschaft ist der Wert, den die Variable hat. Hier ist ein Beispiel mit einer Variablen:

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

Nachdem man all die Beispiele hinzugefügt hat, wird das Objekt wie folgt aussehen:

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

# --instructions--

Ein Objekt `foods` wurde mit drei Einträgen erstellt. Verwende die Syntax deiner Wahl und füge drei weitere Einträge hinzu: `bananas` mit einem Wert von `13`, `grapes` mit einem Wert von `35`, und `strawberries` mit einem Wert von `27`.

# --hints--

`foods` sollte ein Objekt sein.

```js
assert(typeof foods === 'object');
```

Das Objekt `foods` sollte einen Schlüssel `bananas` mit einem Wert von `13` haben.

```js
assert(foods.bananas === 13);
```

Das Objekt `foods` sollte einen Schlüssel `grapes` mit einem Wert von `35` haben.

```js
assert(foods.grapes === 35);
```

Das Objekt `foods` sollte einen Schlüssel `strawberries` mit einem Wert von `27` haben.

```js
assert(foods.strawberries === 27);
```

Die Schlüssel-Wert-Paare sollten mit Punkt- oder Klammernotation angegeben werden.

```js
assert(
  code.search(/bananas:/) === -1 &&
    code.search(/grapes:/) === -1 &&
    code.search(/strawberries:/) === -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
```

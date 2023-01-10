---
id: 587d778f367417b2b2512aad
title: >-
  Vermeidung von Problemen mit Farbenblindheit durch sorgfältige Auswahl von Farben, die Informationen vermitteln
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

Es gibt verschiedene Formen der Farbblindheit. Diese können von einer reduzierten Empfindlichkeit für eine bestimmte Wellenlänge des Lichts bis hin zur Unfähigkeit, überhaupt Farben zu sehen, reichen. Die häufigste Form ist eine reduzierte Empfindlichkeit zur Erkennung von Grüntönen.

Zum Beispiel, wenn zwei ähnliche grüne Farben die Vorder- und Hintergrundfarbe deines Inhaltes sind, kann ein farbenblinder Benutzer diese möglicherweise nicht unterscheiden. Ähnliche Farben können auf dem Farbkreis als Nachbarn betrachtet werden, jedoch sollte diese Kombination bei der Übermittlung wichtiger Informationen vermieden werden.

**Hinweis:** Einige Online-Farbauswahlwerkzeuge enthalten visuelle Simulationen, wie Farben für unterschiedliche Farbblindheiten angezeigt werden. Neben der Online-Kontrastprüfung, sind diese großartige Ressourcen.

# --instructions--

Camper Cat testet verschiedene Stile für eine wichtige Schaltfläche, aber die gelbe (`#FFFF33`) Hintergrundfarbe `background-color` und die grüne (`#33FF33`) Textfarbe `color` sind benachbarte Farbtöne auf dem Farbkreis und für einige farbenblinde Benutzer praktisch nicht unterscheidbar. (Ihre ähnliche Helligkeit versagt auch bei der Prüfung des Kontrastverhältnisses). Ändere die Textfarbe `color` in dunkelblau (`#003366`), um beide Probleme zu lösen.

# --hints--

Dein Code sollte die Textfarbe `color` für die Schaltfläche `button` in dunkelblau ändern.

```js
assert($('button').css('color') == 'rgb(0, 51, 102)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

# --solutions--

```html
<head>
  <style>
    button {
      color: #003366;
      background-color: #FFFF33;
      font-size: 14px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

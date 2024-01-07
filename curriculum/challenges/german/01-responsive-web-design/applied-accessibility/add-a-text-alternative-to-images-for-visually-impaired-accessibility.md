---
id: 587d774c367417b2b2512a9c
title: Füge einen alternativen Text zu einem Bild für Sehbehinderte hinzu
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 16628
dashedName: add-a-text-alternative-to-images-for-visually-impaired-accessibility
---

# --description--

Du hast wahrscheinlich ein `alt`-Attribut an einem `img`-Tag in anderen Aufgaben gesehen. `alt`-Text beschreibt den Inhalt des Bildes und bietet eine Textalternative für das Bild. Ein `alt`-Attribut hilft in Fällen, in denen das Bild nicht geladen wird oder von einem Benutzer nicht betrachtet werden kann. Suchmaschinen verwenden es auch, um zu verstehen, was ein Bild enthält, um es in die Suchergebnisse aufzunehmen. Hier ist ein Beispiel:

```html
<img src="importantLogo.jpeg" alt="Company logo">
```

Menschen mit Sehbehinderungen sind auf Screenreader angewiesen, um Webinhalte in eine Sprachausgabe umzuwandeln. Sie erhalten keine Informationen, wenn sie nur visuell dargestellt werden. Bei Bildern können Screenreader auf das `alt`-Attribut zugreifen und dessen Inhalt lesen, um wichtige Informationen zu liefern.

Ein guter `alt` Text liefert dem Leser eine kurze Beschreibung des Bildes. Du solltest immer ein `alt`-Attribut in dein Bild einfügen. Gemäß der HTML5-Spezifikation wird dies nun als verbindlich angesehen.

# --instructions--

Camper Cat ist zufällig sowohl ein Coding Ninja als auch ein tatsächlicher Ninja, der eine Website aufbaut um sein Wissen zu teilen. Das Profilbild, das er verwenden möchte, zeigt seine Fähigkeiten und sollte von allen Besuchern der Website wahrgenommen werden. Füge ein `alt`-Attribut in den `img`-Tag ein, das erklärt, dass Camper Cat Karate praktiziert. (Das Bild `src` verweist nicht auf eine tatsächliche Datei, du solltest also den `alt`-Text in der Anzeige sehen.)

# --hints--

Dein `img`-Tag sollte ein `alt`-Attribut besitzen und dieses sollte nicht leer sein.

```js
assert($('img').attr('alt'));
```

# --seed--

## --seed-contents--

```html
<img src="doingKarateWow.jpeg">
```

# --solutions--

```html
<img src="doingKarateWow.jpeg" alt="Someone doing karate">
```

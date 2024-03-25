---
id: 637f703072c65bc8e73dfe34
title: Links und Bilder Frage C
challengeType: 15
dashedName: links-and-images-question-c
---

# --description--

Um die Verwendung von Links und Bildern in dieser Lektion zu üben, benötigst du ein HTML-Projekt mit dem du arbeiten kannst.

- Erstellen ein neues Verzeichnis namens `odin-links-and-images`.

- Erstelle innerhalb dieses Verzeichnisses eine neue Datei namens `index.html`.

- Fülle das übliche HTML-Boilerplate aus.

- Füge schließlich den folgenden `h1` zum `body` hinzu: `<h1>Homepage</h1>`

## Ankerelemente
Um einen Link in HTML zu erstellen, verwendest du ein Ankerelement. An anchor element is defined by wrapping the text or another HTML element you want to be a link with an `<a>` tag. Füge das Folgende dem `body` der von dir erstellten `index.html`-Seite hinzu und öffne sie im Browser:

```html
<a>click me</a>
```

Vielleicht hast du bemerkt, dass ein Klick auf diesen Link nichts bewirkt. Dies liegt daran, dass ein Anker-Tag von sich aus nichts weiß, wohin du verlinken willst. You have to tell it a destination to go to. Dies kannst du mit einem HTML-Attribut tun. Ein HTML-Attribut gibt einem HTML-Element zusätzliche Informationen und steht immer im öffnenden Tag des Elements. Ein Attribut besteht normalerweise aus zwei Teilen: einem Namen und einem Wert; jedoch benötigen nicht alle Attribute einen Wert. In your case, you need to add a `href` (hyperlink reference) attribute to the opening anchor tag. Der Wert des `href`-Attributs ist das Ziel, zu dem dein Link führen soll. Füge das folgende `href`-Attribut zu dem zuvor von dir erstellten Ankerelement hinzu und versuche es erneut anzuklicken. Denke daran, den Browser zu aktualisieren, damit die neuen Änderungen übernommen werden können.

```html
<a href="https://www.theodinproject.com/about">click me</a>
```

By default, any text wrapped with an anchor tag without a `href` attribute will look like plain text. Wenn das `href`-Attribut vorhanden ist, wird der Browser den Text blau färben und ihn unterstreichen, um zu signalisieren, dass es sich um einen Link handelt. Es ist erwähnenswert, dass du Anker-Tags verwenden kannst, um auf jede Art von Ressource im Internet zu verlinken, und nicht nur auf andere HTML-Dokumente. Du kannst auf Videos, PDF-Dateien, Bilder usw. verlinken, aber größtenteils wirst du auf andere HTML-Dokumente verlinken.

# --question--

## --text--

Welches Attribut teilt den Links mit, wohin sie führen sollen?

## --answers--

`src`

---

`href`

---

`link`

## --video-solution--

2

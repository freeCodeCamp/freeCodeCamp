---
id: 637f704072c65bc8e73dfe36
videoId: tsEQgGjSmkM
title: Links und Bilder Frage A
challengeType: 15
dashedName: links-and-images-question-a
---

# --description--

Um die Verwendung von Links und Bildern in dieser Lektion zu üben, benötigst du ein HTML-Projekt, mit dem du arbeiten kannst.

- Erstelle ein neues Verzeichnis namens `odin-links-and-images`.

- Erstelle innerhalb dieses Verzeichnisses eine neue Datei namens `index.html`.

- Fülle das übliche HTML-Boilerplate aus.

- Füge schließlich den folgenden `h1` zum `body` hinzu: `<h1>Homepage</h1>`

## Ankerelemente
Um einen Link in HTML zu erstellen, verwendest du ein Ankerelement. An anchor element is defined by wrapping the text or another HTML element you want to be a link with an `<a>` tag. Füge das Folgende dem `body` der von dir erstellten `index.html`-Seite hinzu und öffne sie im Browser:

```html
<a>click me</a>
```

Vielleicht hast du bemerkt, dass ein Klick auf diesen Link nichts bewirkt. Dies liegt daran, dass ein Anker-Tag von sich aus nicht weiß, wohin du verlinken willst. Du musst ihm ein Ziel mitteilen, zu dem er führen soll. Dies kannst du mit einem HTML-Attribut tun.

Ein HTML-Attribut gibt einem HTML-Element zusätzliche Informationen und steht immer im öffnenden Tag des Elements. Ein Attribut besteht normalerweise aus zwei Teilen: einem Namen und einem Wert; jedoch benötigen nicht alle Attribute einen Wert. In deinem Fall musst du ein `href` (hyperlink reference)-Attribut zum öffnenden Ankertag hinzufügen. Der Wert des `href`-Attributs ist das Ziel, zu dem dein Link führen soll.

Füge das folgende `href`-Attribut zu dem zuvor von dir erstellten Ankerelement hinzu und versuche es erneut anzuklicken. Denke daran, den Browser zu aktualisieren, damit die neuen Änderungen übernommen werden können.

```html
<a href="https://www.theodinproject.com/about">click me</a>
```

In der Grundeinstellung sieht jeder Text, der mit einem Anchor-Tag ohne `href`-Attribut umschlossen ist, wie einfacher Text aus. Wenn das `href`-Attribut vorhanden ist, wird der Browser den Text blau färben und ihn unterstreichen, um zu signalisieren, dass es sich um einen Link handelt.

Es ist erwähnenswert, dass du Anker-Tags verwenden kannst, um auf jede Art von Ressource im Internet zu verlinken, und nicht nur auf andere HTML-Dokumente. Du kannst auf Videos, PDF-Dateien, Bilder usw. verlinken, aber größtenteils wirst du auf andere HTML-Dokumente verlinken.

# --assignment--

Sieh dir Kevin Powells Video über HTML-Links oben an.

# --question--

## --text--

Welches HTML-Tag wird verwendet, um einen Link zu erstellen?

## --answers--

`<a>`

---

`<p>`

---

`<ol>`

## --video-solution--

1

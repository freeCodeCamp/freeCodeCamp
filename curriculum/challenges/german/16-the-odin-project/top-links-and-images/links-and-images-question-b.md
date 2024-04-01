---
id: 637f703572c65bc8e73dfe35
title: Links und Bilder Frage B
challengeType: 15
dashedName: links-and-images-question-b
---

# --description--

Um die Verwendung von Links und Bildern in dieser Lektion zu üben, benötigst du ein HTML-Projekt, mit dem du arbeiten kannst.

- Erstelle ein neues Verzeichnis namens `odin-links-and-images`.

- Erstelle innerhalb dieses Verzeichnisses eine neue Datei namens `index.html`.

- Fülle das übliche HTML-Boilerplate aus.

- Füge schließlich den folgenden `h1` zum `body` hinzu: `<h1>Homepage</h1>`

## Ankerelemente
Um einen Link in HTML zu erstellen, verwendest du ein Ankerelement. Ein Anchor-Element wird definiert, indem man den Text oder ein anderes HTML-Element, welches ein Link sein soll, mit einem `<a>`-Tag umgibt. Füge das Folgende dem `body` der von dir erstellten `index.html`-Seite hinzu und öffne sie im Browser:

```html
<a>click me</a>
```

Vielleicht hast du bemerkt, dass ein Klick auf diesen Link nichts bewirkt. Dies liegt daran, dass ein Ankertag von sich aus nicht weiß, wohin du verlinken willst. Du musst ihm ein Ziel mitteilen, zu dem er führen soll. Dies kannst du mit einem HTML-Attribut tun. Ein HTML-Attribut gibt einem HTML-Element zusätzliche Informationen und steht immer im öffnenden Tag des Elements. Ein Attribut besteht normalerweise aus zwei Teilen: einem Namen und einem Wert; jedoch benötigen nicht alle Attribute einen Wert. In deinem Fall musst du ein `href` (hyperlink reference)-Attribut zum öffnenden Ankertag hinzufügen. Der Wert des `href`-Attributs ist das Ziel, zu dem dein Link führen soll. Füge das folgende `href`-Attribut zu dem zuvor von dir erstellten Ankerelement hinzu und versuche es erneut anzuklicken. Denke daran, den Browser zu aktualisieren, damit die neuen Änderungen übernommen werden können.

```html
<a href="https://www.theodinproject.com/about">click me</a>
```

By default, any text wrapped with an anchor tag without a `href` attribute will look like plain text. Wenn das `href`-Attribut vorhanden ist, wird der Browser den Text blau färben und ihn unterstreichen, um zu signalisieren, dass es sich um einen Link handelt. Es ist erwähnenswert, dass du Anker-Tags verwenden kannst, um auf jede Art von Ressource im Internet zu verlinken, und nicht nur auf andere HTML-Dokumente. Du kannst auf Videos, PDF-Dateien, Bilder usw. verlinken, aber größtenteils wirst du auf andere HTML-Dokumente verlinken.

# --question--
## --text--

Was ist ein Attribut?
## --answers--

Ein HTML-Attribut gibt einem HTML-Element zusätzliche Informationen und steht immer im abschließenden Tag des Elements.

---

Ein HTML-Attribut wird verwendet, um dem Browser mitzuteilen, was das Element enthält.

---

Ein HTML-Attribut gibt einem HTML-Element zusätzliche Informationen und steht immer im öffnenden Tag des Elements.


## --video-solution--

3

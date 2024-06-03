---
id: 637f702872c65bc8e73dfe33
videoId: ta3Oxx7Yqbo
title: Links und Bilder Frage D
challengeType: 15
dashedName: links-and-images-question-d
---

# --description--


Im Allgemeinen gibt es zwei Arten von Links, die du erstellen wirst:

- Links zu Seiten auf anderen Websites im Internet

- Links zu Seiten auf deinen eigenen Websites


## Absolute Links
Links zu Seiten auf anderen Websites im Internet werden als absolute Links bezeichnet. Ein typischer absoluter Link besteht aus den folgenden Teilen: `protocol://domain/path`. Ein absoluter Link wird immer das Protokoll und die Domäne des Ziels enthalten.

Du hast bereits einen absoluten Link in Aktion gesehen. The link you created to The Odin Project’s About page earlier was an absolute link as it contains the protocol and domain.

`https://www.theodinproject.com/about`

## Relative Links
Links zu anderen Seiten innerhalb deiner eigenen Website werden als relative Links bezeichnet. Relative Links enthalten keine Domain-Namen, da es sich um eine andere Seite auf derselben Website handelt, wird davon ausgegangen, dass der Domain-Name derselbe ist wie der der Seite, auf der du den Link erstellt hast.

Relative Links enthalten nur den Datei-Pfad zu der anderen Seite, relativ zu der Seite, auf der du den Link erstellst. Dies ist ziemlich abstrakt, lasst uns dies anhand eines Beispiels in Aktion sehen.

Erstelle im Verzeichnis `odin-links-and-images` eine weitere HTML-Datei namens `about.html` und füge den folgenden Code ein:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Odin Links and Images</title>
  </head>

  <body>
    <h1>About Page</h1>
  </body>
</html>
```

Auf der `index`-Seite fügst du das folgende Ankerelement ein, um einen Link zur `about`-Seite zu erstellen:

```html
<body>
  <h1>Homepage</h1>
    <a href="https://www.theodinproject.com/about">click me</a>

    <a href="about.html">About</a>
</body>
```

Öffne die `index.html`-Datei in einem Browser und klicke auf den Link "Über", um sicherzustellen, dass alles richtig verknüpft ist. Ein Klick auf den Link sollte zu der `about`-Seite führen, die du soeben erstellt hast.

Das funktioniert, weil sich die `index`- und die `about`-Seite in demselben Verzeichnis befinden. Das bedeutet, dass du einfach seinen Namen (`about.html`) als `href`-Wert des Links verwenden kannst.

Aber normalerweise wirst du deine Website-Verzeichnisse ein wenig besser organisieren wollen. Normalerweise würdest du nur die `index.html` im Stammverzeichnis haben und alle anderen HTML-Dateien in ihrem eigenen Verzeichnis.

Erstelle ein Verzeichnis namens `pages` innerhalb des `odin-links-and-images`-Verzeichnisses und verschiebe die Datei `about.html` in dieses neue Verzeichnis.

Aktualisiere die `index`-Seite im Browser und klicke dann auf den `about`-Link. Sie wird nun gebrochen. Das liegt daran, dass sich der Speicherort der `about`-Seitendatei geändert hat.

Um dies zu beheben, musst du nur den `about`-Link `href`-Wert aktualisieren, um das `pages/`-Verzeichnis einzuschließen, da dies die neue Position der `about.html`-Datei relativ zur `index.html`-Datei ist.

```html
<body>
  <h1>Homepage</h1>
  <a href="pages/about.html">About</a>
</body>
```

Aktualisiere die `index`-Seite im Browser und klicke erneut auf den `about`-Link, er sollte jetzt wieder funktionieren.

In den meisten Fällen wird dies problemlos funktionieren, aber es kann auch zu unerwarteten Problemen führen. Das Voranstellen von `./` vor den Link verhindert in den meisten Fällen solche Probleme. Durch das Hinzufügen von `./` gibst du deinem Code an, dass er nach der Datei/dem Verzeichnis relativ zum **aktuellem**-Verzeichnis suchen soll.

```html
<body>
  <h1>Homepage</h1>
  <a href="./pages/about.html">About</a>
</body>
```

# --assignment--

Sieh dir oben Kevin Powells Video zur HTML-Dateistruktur an.

# --question--

## --text--

Was ist der Unterschied zwischen einem absoluten und einem relativen Link?

## --answers--

Ein absoluter Link ist ein Link zu einer anderen Seite auf der aktuellen Website. Ein relativer Link ist ein Link zu einer anderen Website.

---

Ein absoluter Link ist ein Link zu einer anderen Website. Ein relativer Link ist ein Link zu einer anderen Seite auf der aktuellen Website.

---

Es besteht kein Unterschied zwischen absoluten und relativen Links.

## --video-solution--

2

---
title: Background
---
## Hintergrund (background)
Mit der Hintergrundeigenschaft können Sie Bilder und Farben verwenden, um Hintergründe für Ihre Webseiten zu erstellen.

### Hintegrundfarbe (background-color)
Mit der Eigenschaft "background-color" können Sie die Farbe Ihres Elements auswählen. Dies kann der Hintergrund für die gesamte Seite oder der Hintergrund eines Abschnitts Ihrer Seite sein.
* Ein Element ist ein Stück HTML, z. B. eine Kopfzeile oder ein Absatz auf einer Webseite.

Hier sehen Sie ein Beispiel für die Einstellung der Hintergrundfarbe für eine Webseite auf grün.
```css
  body {
    background-color: green;
  }
```
![fullbackground](https://user-images.githubusercontent.com/26467304/31036038-845567f2-a538-11e7-8e6c-8a52bb0d44b8.png)

Hier ist ein Beispiel für das Festlegen der Farben für zwei Elemente. Dies wird den Hintergrund des Headers festlegen
zu lila und der Rest der Seite zu blau.

```css
  body {
    background-color: blue;
  }
  h1 {
    background–color: purple;
  }
```
![twobackground](https://user-images.githubusercontent.com/26467304/31036152-0607936a-a539-11e7-9e9f-a5e60ade042d.png)

In CSS kann eine Farbe auf drei Arten definiert werden:
* Ein gültiger Farbname wie `blau`
* Ein HEX-Wert wie `# FFFFF` (Dies ist der Hexadezimalwert für Weiß.)
* Ein RGB-Wert wie `rgb (76,175,80)` (Dies ist der RGB-Wert für hellgrün.)

### Hintergrundbilder (background-image)
Sie können die Eigenschaft `background-image` verwenden, um ein Bild als Hintergrund für ein Element festzulegen.
Das Bild wird standardmäßig so oft wiederholt, dass es das gesamte Element abdeckt.
```css
body {
  background-image: url("barn.jpg");
}
```
![image](https://user-images.githubusercontent.com/26467304/31036366-eb1fc260-a539-11e7-835d-e3f935a22c86.png)


Sie können auch Bilder oder Gifs verlinken, die Sie online finden, indem Sie deren Link verwenden (zB von Google Bilder eine Suche).
```css
body {
  background-image: url("https://mdn.mozillademos.org/files/11983/starsolid.gif");
}
```

### Hintergrundbild - Eigenschaft `background-repeat`
Das Hintergrundbild wird standardmäßig sowohl vertikal (nach oben und nach unten) als auch horizontal (über die Webseite) wiederholt.
Sie können die Eigenschaft `background-repeat` verwenden, um das Bild vertikal oder horizontal zu wiederholen.

Hier ist ein Beispiel, das das Bild vertikal wiederholt.
```css
body {
  background-image: url("barn.jpg");
  background-repeat: repeat-y;
}
```
![vertical](https://user-images.githubusercontent.com/26467304/31039770-8962c7a6-a54e-11e7-9d25-4fb09760d219.PNG)

Sie können das Bild horizontal wiederholen, indem Sie die Eigenschaft background-repeat auf "repeat-x" setzen.
```css
body {
  background-image: url("barn.jpg");
  background-repeat: repeat-x;
}
```

Sie können die Eigenschaft `background-repeat` auch verwenden, um festzulegen, dass ein Bild nicht wiederholt wird.
```css
body {
  background-image: url("barn.jpg");
  background-repeat: no-repeat;
}
```
![norepeat](https://user-images.githubusercontent.com/26467304/31039801-c8761efc-a54e-11e7-8bb9-ec5b88885a50.PNG)

### Hintergrundbild - Eigenschaft `background-position`
Mit der Eigenschaft `position` können Sie angeben, wo sich Ihr Bild auf einer Webseite befindet.
```css
body {
  background-image: url("barn.jpg");
  background-repeat: no-repeat;
  background-position: right top;
}
```
![position](https://user-images.githubusercontent.com/26467304/31039828-077d1038-a54f-11e7-8aa6-092253ca92b8.PNG)

### Hintergrundbild - fixiert
Sie können die Eigenschaft `background-attachment` verwenden, um ein Bild an einer festen Position festzulegen.
Eine feste Position bedeutet, dass ein Bild nicht mit dem Rest der Seite scrollt.
```css
body {
  background-image: url("barn.jpg");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}
```

![fixed](https://user-images.githubusercontent.com/26467304/31039859-39612c92-a54f-11e7-93ca-9d7bcb938225.PNG)

### Hintergrund Farbverläufe
Ein Farbverlauf ist ein Übergang zwischen zwei oder mehr Farben und kann ähnlich wie ein Hintergrundbild über CSS verwendet werden.

Die Syntax eines Hintergrunds mit Farbverlauf kann sehr komplex sein und wird häufig aufgrund von Inkonsistenzen zwischen unterstützten Browsern immer noch mit Lieferantenpräfixen verwendet.

Der <a href='http://www.colorzilla.com/gradient-editor/' target="_blank" rel='nofollow'> Colorzilla Farbverlaufs-Editor </a> ist ein großartiges Online-Tool zum Generieren eigener Farbverläufe und der zugehöriges CSS-Markup.

### Hintergrund - Die Kurzschreibweise
Sie können die Hintergrundeigenschaften in einer einzelnen Zeile schreiben. Dies wird als Kurzschreibweise bezeichnet.
```css
body {
  background: url("barn.jpg") no-repeat right top;
}
```
Sie können Eigenschaften auslassen, die Sie nicht benötigen. Beachten Sie aber, dass diese
in einer bestimmten Reihenfolge verwendet werden. Die Reihenfolge ist:
* color
* image
* repeat
* attachment
* position

### Mehrere Hintergrundbilder
Sie können mehrere Hintergrundbilder in einer einzigen Hintergrundeigenschaft angeben.
```css
body {
  background: url("barn.jpg"), url("stars.jpg"), linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5));
}
```
Das erste Bild (oder der erste Farbverlauf) ist am Anfang, das zweite Bild nach dem nächsten und so weiter.
Wenn eines der Elemente aufgrund seiner URL oder seiner Syntax nicht korrekt ist, wird die gesamte Zeile vom Browser ignoriert.

### Einige grundlegende Hintergrundeigenschaften von CSS
Die CSS-Hintergrundeigenschaften werden verwendet, um die Hintergrundeffekte für Elemente zu definieren.

CSS-Hintergrundeigenschaften:
background-color
background-image
background-repeat
background-attachment
background-position

Sie können auf den folgenden Link zu W3-Schulen verweisen, um mehr über Hintergründe und verwandte Themen in CSS zu erfahren.
<a href = "https://www.w3schools.com/css/css_background.asp">Background reference to W3</a>

### Andere Ressourcen
* <a href='http://cloford.com/resources/colours/500col.htm' target='_blank' rel='nofollow'>List of color values</a>
* <a href='http://colrd.com/create/palette/' target='_blank' rel='nofollow'>Color Picker Tool</a>

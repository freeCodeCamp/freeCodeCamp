---
Titel: Hintergrundgröße
---
## Hintergrundgröße

Die Eigenschaft background-size legt die Größe der Hintergrundbilder fest. Sie können eine Länge oder einen Prozentsatz einstellen, wobei der erste Wert die Breite und der zweite die Höhe ist. Sie können auch einen der 5 Keyword-Werte verwenden:

```css
.auto {background-size: auto;}
.cover {background-size: cover;}
.contain {background-size: contain;}
.initial {background-size: initial;}
.inherit {background-size: inherit;}
 /* Prozente, Pixel, and viewport einheiten können auch genutzt werden */
.pixel {background-size: 50px 50px;}
.percentage {background-size: 50% 50%;}
.view {background-size: 50vw 50vh;}
```
Hinweis: Wenn Sie Pixel oder Prozentsatz für die Länge verwenden und nur einen Wert angeben, 
wird der zweite standardmäßig auf auto gesetzt.

Um diese Eigenschaft für mehrere Hintergrundbilder zu setzen, trennen Sie die Werte durch Komma:
```css
.multiple {
    background-image: url(1.png), url(2.png);
    background-size: 3px 3px, cover;
}
```

#### Mehr Informationen:

Dokumentation: <a href='https://developer.mozilla.org/de-DE/docs/Web/CSS/background-size' target='_blank' rel='nofollow'>MDN</a>

CSS-Tricks: <a href='https://css-tricks.com/almanac/properties/b/background-size/' target='_blank' rel='nofollow'>background-size</a>

Browser Support: <a href='http://caniuse.com/#search=background-size' target='_blank' rel='nofollow'>caniuse</a>

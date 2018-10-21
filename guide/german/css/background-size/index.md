---
Titel: background-size
---
## background-size

Die "background-size"-Eigenschaft gibt die Größe der Hintergrundbilder an. Sie können eine Länge oder einen Prozentsatz festlegen, wobei der erste Wert die Breite und der zweite die Höhe ist. Sie können auch einen der 5 Schlüsselwortwerte verwenden:

`` `css
.auto {background-size: automatisch;}
.cover {background-size: cover;}
.contain {background-size: contain;}
.initial {background-size: initial;}
.inherit {background-size: erben;}
 / * Prozent-, Pixel- und Viewport-Einheiten können auch verwendet werden * /
.pixel {background-size: 50px 50px;}
.percentage {background-size: 50% 50%;}
.view {background-size: 50vw 50vh;}
`` `
Hinweis: Wenn Sie für die Länge Pixel oder Prozent verwenden und nur einen Wert angeben,
Der Zweite wird standardmäßig auf automatisch gesetzt.

Um diese Eigenschaft auf mehrere Hintergrundbilder zu setzen, trennen Sie die Werte durch Komma:
`` `css
.multiple {
    background-image: URL (1.png), URL (2.png);
    background-size: 3px 3px, cover;
}
`` `

#### Mehr Informationen:

Dokumentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/background-size' target='_blank'rel='nofollow'> MDN </a>

CSS-Tricks: <a href='https://css-tricks.com/almanac/properties/b/background-size/' target='_blank' rel='nofollow'> background-size </a>

Browser-Unterstützung: <a href='http://caniuse.com/#search=background-size' target='_blank'rel='nofollow'> caniuse </a>

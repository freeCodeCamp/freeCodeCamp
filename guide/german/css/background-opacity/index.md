---
title: Hintergrundtransparenz
---
## Hintergrundtransparenz

Die Deckkraft-Eigenschaft gibt die Deckkraft/Transparenz eines Elements an, d.h. den Grad, in dem der Inhalt hinter dem Element sichtbar ist.

Die Deckkraft-Eigenschaft kann einen Wert von 0,0 - 1,0 annehmen. Je niedriger der Wert, desto transparenter:

Weitere Details findest du <a href='https://www.w3schools.com/css/css_image_transparency.asp' target='_blank' rel='nofollow'>hier</a>.

Du kannst wählen, inwieweit du das Element transparent machen möchtest.
Dazu musst du die folgende CSS-Eigenschaft hinzufügen, um die Transparenzstufen zu erreichen.

**Vollständig undurchsichtig**
```css
.class-name {
  opacity:1;
}

OR

.class-name {
  opacity:1.0;
}
```
**Transluzent**
```css
.class-name {
  opacity:0.5;
}
Der Transparenzwert kann zwischen 0 und 1 liegen;
```
**Transparent**
```css
.class-name {
  opacity:0;
}

oder

.class-name {
  opacity:0.0;
}
```
Alternativ kannst du auch einen transparenten rgba-Wert wie diesen verwenden:
```css

.class-name{
  background-color: rgba(0,0,0,.5);
  }
 ```
Das obige Beispiel setzt den Hintergrund auf schwarz mit 50% Deckkraft. Der letzte Wert eines rgba-Wertes ist der Alpha-Wert. Ein Alpha-Wert von 1 entspricht 100% und 0,5 (.5) entspricht 50%. Wir verwenden diese Methode, um einem Element Transparenz zu verleihen, ohne den Inhalt zu beeinflussen.
[A codepen example to show background opacity ranges](https://codepen.io/lvcoulter/full/dVrwmK/)


#### Mer Informationen:
Für mehr Informationen besuche [MDN](https://developer.mozilla.org/de-DE/docs/Web/CSS/opacity)
[Opacity CSS property at CSS-Tricks](https://css-tricks.com/almanac/properties/o/opacity/)

Browser support: <a href= 'https://caniuse.com/#search=opacity' target= '_blank' rel= 'nofollow'>caniuse</a>

---
Titel: background-opacity
---
## background-opacity

Die Deckkrafteigenschaft gibt die Transparenz eines Elements an, d.h. den Grad, bis zu dem der Inhalt hinter dem Element sichtbar ist.

Die Deckkrafteigenschaft kann einen Wert zwischen 0,0 und 1,0 annehmen. Je niedriger der Wert, desto transparenter:

Weitere Details finden Sie <a href='https://www.w3schools.com/css/css_image_transparency.asp' target='_blank' rel='nofollow'> hier </a>

Sie können wählen, bis zu welchem ​​Grad Sie das Element transparent machen möchten.
Sie müssen die folgende CSS-Eigenschaft hinzufügen, um die Transparenzstufen zu erreichen.

** Undurchsichtig **
`` `css
.Klassenname {
  opacity: 1;
}

ODER

.Klassenname {
  opacity: 1,0;
}
`` `
** Durchscheinend (Transluzent) **
`` `css
.Klassenname {
  opacity: 0,5;
}
Der Deckkraftwert kann zwischen 0 und 1 liegen;
`` `
**Durchsichtig (Transparent)**
`` `css
.Klassenname {
  opacity: 0;
}

ODER

.Klassenname {
  opacity: 0.0;
}
`` `
Alternativ können Sie einen transparenten rgba-Wert wie folgt verwenden:
`` `css

.Klassenname{
  background-color: rgba (0,0,0, .5);
  }
 `` `
Im obigen Beispiel wird der Hintergrund schwarz mit 50% Deckkraft eingestellt. Der letzte Wert eines rgba-Werts ist der Alpha-Wert. Ein Alpha-Wert von 1 entspricht 100% und 0,5 (kurz 5) entspricht 50%. Wir verwenden diese Methode, um einem Element Transparenz hinzuzufügen, ohne den darin enthaltenen Inhalt zu beeinflussen.

[Ein Codepen-Beispiel zum Anzeigen der Hintergrunddeckkraft] (https://codepen.io/lvcoulter/full/dVrwmK/)


#### Mehr Informationen:
Weitere Informationen erhalten Sie unter [MDN] (https://developer.mozilla.org/en-US/docs/Web/CSS/opacity).
[opacity CSS Eigenschaft bei CSS-Tricks] (https://css-tricks.com/almanac/properties/o/opacity/)

Browser-Unterstützung: <a href='https://caniuse.com/#search=opacity' target='_blank' rel='nofollow'> caniuse </a>

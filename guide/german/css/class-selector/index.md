---
Titel: Klassenselektor
---
## Klassenselektor
Ein Class(Klassen) Selector wird in einer CSS-Datei verwendet, um den HTML-Elementen mit dem entsprechenden Klassennamen zu stylen. In HTML können Sie den Klassennamen für jedes Element festlegen, indem Sie ein Attribut "class" hinzufügen.

Um Elemente mit einer bestimmten Klasse auszuwählen, verwenden wir ein (.) als Punktzeichen mit dem Namen der Klasse.

z.B.
.center {
    text-align: center;
    color: red;
}


Hier werden alle HTML-Elemente mit `class="center"` rot und zentriert dargestellt.

Beispiele:

```html
<h1 class="test">Dies ist eine Überschrift 1</h1>
<p class="test">Dies ist ein Absatz 1</p>.
<h2 class="test">Dies ist eine Überschrift 2</h2>
<p class="test">Dies ist ein Absatz 2</p>.
<div class="test2 test3">Dies ist ein div 1</div>
```
Da ein Klassenname nicht eindeutig ist, ermöglicht das Attribut HTML-Klasse die Definition gleicher Styles für Elemente mit dem gleichen Klassennamen. So können Sie die Klasse in einer CSS-Datei für Style-Elemente auswählen (beachten Sie die . Notation):**.    

***Alle Elemente der Klasse `test` erhalten diesen Style** 
```css
.test {
  color: green;
}
```
***Alle `<p>` Elemente der Klasse `test` erhalten diesen Style**

```css
p.test {
  border: 1px solid black;
  color: red;
}
```
***Alle `<h1>` und `<h2>` Elemente der Klasse `test` erhalten diesen Style**
```css
h1.test, h2.test {
  color: blue;
}
```
**All elements which have both class `test2` and `test3` will be applied with this style:**
```css
.test2.test3 {
  color: green;
}
```
**Tips: Keine leerzeichen zwischen meherern Kassen**
#### Mehr Informationen:
CSS Syntax and Selectors: <a href='https://www.w3schools.com/css/css_syntax.asp' target='_blank' rel='nofollow'>w3schools</a>



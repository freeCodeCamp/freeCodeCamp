---
id: 63ee35240d8d4841c3a7091b
videoId: LGQuIIv2RVA
title: CSS-Grundlagen Frage B
challengeType: 15
dashedName: css-foundations-question-b
---

# --description--

Klassenselektoren wählen alle Elemente mit der angegebenen `class` aus, bei der es sich nur um ein Attribut handelt, das du einem HTML-Element zuweist. So fügst du eine Klasse zu einem HTML-Tag hinzu und wählst sie in CSS aus:

```html
<!-- index.html -->

<div class="alert-text">
  Please agree to our terms of service.
</div>
```

```css
/* styles.css */

.alert-text {
  color: red;
}
```

Beachte die Syntax für `class`-Selektoren: ein Punkt, unmittelbar gefolgt vom Wert des Klassenattributs, wobei zwischen Groß-/Kleinschreibung unterschieden wird. Classes aren’t required to be unique, so you can use the same `class` on as many elements as you want.

Mit dem `class`-Attribut kannst du auch mehrere Klassen zu einem einzelnen Element in Form einer durch Leerzeichen getrennten Liste hinzufügen, wie etwa `class="alert-text severe-alert"`. Da Leerzeichen verwendet werden, um `class`-Namen wie diesen zu trennen, solltest du niemals Leerzeichen für Namen mit mehreren Wörtern verwenden und stattdessen einen Bindestrich verwenden.

## ID-Selektoren
ID-Selektoren sind ähnlich wie `class`-Selektoren. Sie wählen ein Element mit der angegebenen `id` aus, die ein weiteres Attribut ist, welches du einem HTML-Element zuweist:

```html
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
```

```css
/* styles.css */

#title {
  background-color: red;
}
```

Anstelle eines Punktes wird ein Hashtag verwendet, dem unmittelbar der Wert des `id`-Attributs folgt, wobei die Groß-/Kleinschreibung beachtet wird. Ein häufiger Fehler ist die übermäßige Verwendung des `id`-Attributs, wenn dieses nicht unbedingt erforderlich ist und wenn Klassen ausreichen würden. Es gibt zwar Fälle, in denen die Verwendung von `id` sinnvoll oder notwendig ist, z. B. wenn man die Vorteile der Besonderheit nutzen oder Links zu einem Abschnitt auf der aktuellen Seite umleiten möchte, aber du solltest `id`'s nur sparsam verwenden (wenn überhaupt).

Der Hauptunterschied zwischen Klassen und IDs ist, dass ein Element nur eine `id` haben kann. An `id` cannot be repeated on a single page, and the `id` attribute should not contain any whitespace at all.

# --question--

## --text--

Wie lautet die Syntax für Klassen- und ID-Selektoren?

## --answers--

Um eine `class` auszuwählen, verwendest du `$` und um eine `id` auszuwählen, verwendest du `#`

---

Um eine `class` auszuwählen, verwendest du `.` und um eine `id` auszuwählen, verwendest du `*` `*`

---

Um eine `class` auszuwählen, verwendest du `.` und um eine `id` auszuwählen, verwendest du `#`


## --video-solution--

3

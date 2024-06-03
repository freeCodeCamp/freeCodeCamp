---
id: 637f4e7972c65bc8e73dfe2b
title: Arbeiten mit Text Frage E
challengeType: 15
dashedName: working-with-text-question-e
---

# --description--

Du hast velleicht bemerkt, dass du in allen Beispielen dieser Lektion alle Elemente einrückst, die sich innerhalb anderer Elemente befinden. Diese werden als eingebettete Elemente bezeichnet.

Wenn du Elemente in andere Elemente verschachtelst, erstellst du eine übergeordnete und untergeordnete Beziehung zwischen ihnen. Die verschachtelten Elemente sind die untergeordneten Elemente und das Element, in dem sie verschachtelt sind, ist das übergeordnete Element.

Im folgenden Beispiel, ist das `body`-Element das übergeordnete Element und das `p` ist das untergeordnete Element:

```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
  </body>
 </html>
```

Genau wie in menschlichen Beziehungen können übergeordnete HTML-Elemente viele untergeordnete Elemente haben. Elemente auf der gleichen Verschachtelungsebene werden als Geschwister betrachtet.

Die beiden `p`-Elemente im folgenden Code sind beispielweise Geschwisterelemente, da beide untergeordnete Elemente des `body`-Tags sind und sich auf der gleichen Verschachtlungsebene befinden:

```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Ut enim ad minim veniam.</p>
  </body>
 </html>
```

Du verwendest die Einrückung, um die Verschachtelungsebene für dich selbst und andere Entwickler, die in Zukunft mit deinem HTML-Code arbeiten werden, klar und lesbar zu machen. Es wird empfohlen, alle untergeordneten Elemente um zwei Leerzeichen einzurücken.

Die Beziehungen zwischen übergeordneten, untergeordneten und geschwisterlichen Elementen werden später viel wichtiger, wenn du beginnst, dein HTML mit CSS zu gestalten und mit JavaScript Funktionen hinzuzufügen. Im Moment ist es jedoch nur wichtig, den Unterschied zwischen der Art der Beziehung zwischen den Elementen und der Terminologie, die zur Beschreibung ihrer Beziehungen verwendet wird, zu kennen.

# --question--

## --text--

Welches Verhältnis haben zwei Elemente, wenn sie sich auf der gleichen Verschachtlungsebene befinden?

## --answers--

Die Elemente sind die übergeordneten Elemente des anderen.

---

Die Elemente sind die untergeordneten Elemente des anderen.

---

Die Elemente sind Geschwisterelemente.

## --video-solution--

3

---
id: 637f4e8072c65bc8e73dfe2c
title: Arbeiten mit Text Frage F
challengeType: 15
dashedName: working-with-text-question-f
---

# --description--

Du hast vielleicht bemerkt, dass du in allen Beispielen dieser Lektion alle Elemente einrückst, die sich innerhalb anderer Elemente befinden. Diese werden als eingebettete Elemente bezeichnet.

When you nest elements within other elements, you create a parent and child relationship between them. The nested elements are the children and the element they are nested within is the parent.

Im folgenden Beispiel, ist das Bodyelement das übergeordnete Element und der Absatz ist das untergeordnete Element:

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

For example, the two paragraphs in the following code are siblings, since they are both children of the body tag and are at the same level of nesting as each other:

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

The parent, child, and sibling relationships between elements will become much more important later when you start styling your HTML with CSS and adding behavior with JavaScript. For now, however, it is just important to know the distinction between how elements are related and the terminology used to describe their relationships.

# --question--

## --text--

What relationship does an element have with any nested element within it?

## --answers--

Das Element innerhalb des anderen Elements wird als übergeordnetes Element bezeichnet.

---

The element within the other element is called the child element.

---

The element within the other element is called the sibling element.


## --video-solution--

2

---
id: 63ee35450d8d4841c3a70920
videoId: LGQuIIv2RVA
title: CSS-Grundlagen Frage G
challengeType: 15
dashedName: css-foundations-question-g
---

# --description--

Internal CSS (or embedded CSS) involves adding the CSS within the HTML file itself instead of creating a completely separate file. With the internal method, you place all the rules inside of a pair of opening and closing `<style>` tags, which are then placed inside of the opening and closing `<head>` tags of your HTML file. Since the styles are being placed directly inside of the `<head>` tags, you no longer need a `<link>` element that the external method requires.

Neben diesen Unterschieden ist die Syntax genau dieselbe wie bei der externen Methode (Selektor, geschwungene Klammern, Deklarationen):

```html
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>...</body>
```

Diese Methode kann nützlich sein, um einer einzelnen Seite einer Website einzigartige Stile hinzuzufügen, aber sie hält die Inhalte nicht getrennt wie die externe Methode, und je nachdem, wie viele Regeln und Deklarationen es gibt, kann die HTML-Datei recht groß werden.

# --question--

## --text--

Welcher der folgenden Unterschiede besteht zwischen internen und externen CSS-Methoden?

## --answers--

Bei der externen Methode werden die CSS-Regeln in einer separaten Datei platziert, während die interne Methode die CSS-Regeln in der HTML-Datei selbst platziert.

---

Die interne Methode hält CSS getrennt von HTML, während die externe Methode CSS direkt in HTML einbettet.

---

Die interne Methode verwendet das `<link>`-Element, um CSS mit HTML zu verknüpfen, wohingegen die externe Methode CSS direkt in HTML einbettet.


## --video-solution--

1

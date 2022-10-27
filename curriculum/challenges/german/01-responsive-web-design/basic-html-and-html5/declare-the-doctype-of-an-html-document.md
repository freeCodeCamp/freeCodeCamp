---
id: 587d78aa367417b2b2512aed
title: Den Doctype eines HTML-Dokuments deklarieren
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
dashedName: declare-the-doctype-of-an-html-document
---

# --description--

Die bisherigen Aufgaben haben spezifische HTML-Elemente und ihre Verwendung behandelt. Es gibt jedoch ein paar Elemente, die deiner Seite eine allgemeine Struktur geben und die in jedem HTML-Dokument enthalten sein sollten.

Am Anfang deines Dokuments musst du dem Browser mitteilen, welche Version von HTML deine Seite verwendet. HTML ist eine sich entwickelnde Sprache und wird regelmäßig aktualisiert. Die meisten wichtigen Browser unterstützen die neueste Spezifikation, nämlich HTML5. Ältere Webseiten können jedoch frühere Versionen der Sprache verwenden.

Du teilst dem Browser diese Informationen mit, indem du den `<!DOCTYPE ...>`-Tag in der ersten Zeile einfügst, wobei der `...`-Teil die Version von HTML ist. Für HTML5 benutzt du `<!DOCTYPE html>`.

Das `!` und `DOCTYPE` in Großbuchstaben ist wichtig, besonders für ältere Browser. Bei `html` wird nicht zwischen Groß- und Kleinschreibung unterschieden.

Als nächstes muss der Rest deines HTML Codes von `html` Tags umschlossen sein. Das öffnende `<html>` kommt direkt unter die `<!DOCTYPE html>`-Zeile, und das schließende `</html>` kommt ans Ende der Seite.

Hier ist ein Beispiel für die Seitenstruktur. Dein HTML-Code würde im Raum zwischen den beiden `html` Tags liegen.

```html
<!DOCTYPE html>
<html>

</html>
```

# --instructions--

Füge einen `DOCTYPE`-Tag für HTML5 am Anfang des leeren HTML-Dokuments im Code-Editor hinzu. Darunter fügst du öffnende und schließende `html`-Tags ein, die ein `h1`-Element umschließen. Die Überschrift kann einen beliebigen Text enthalten.

# --hints--

Dein Code sollte ein `<!DOCTYPE html>`-Tag enthalten.

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

Es sollte ein `html`-Element vorhanden sein.

```js
assert($('html').length == 1);
```

Die `html`-Tags sollten ein `h1`-Element einschließen.

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```

---
id: 5cddbfd622f1a59093ec611d
title: Erstelle ein Modul-Skript
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

JavaScript spielte zunächst eine kleine Rolle im ansonsten auf HTML basierenden Web. Heute ist es riesig, und einige Websites werden fast ausschließlich mit JavaScript erstellt. Um JavaScript modularer, sauberer und wartungsfähiger zu machen; hat ES6 einen Weg eingeführt, Code leicht unter JavaScript-Dateien zu teilen. Dabei werden Teile einer Datei exportiert, um sie in einer oder mehreren anderen Dateien zu verwenden, und die Teile, die du brauchst, werden importiert, wo du sie brauchst. Um diese Funktion nutzen zu können, musst du in deinem HTML-Dokument ein Skript mit dem Typ (`type`) Modul (`module`) erstellen. Hier ist ein Beispiel:

```html
<script type="module" src="filename.js"></script>
```

Ein Skript, das den Typ Modul (`module`)verwendet, kann jetzt die Funktionen `import` und `export` nutzen, die du in den kommenden Aufgaben kennenlernen wirst.

# --instructions--

Füge dem HTML-Dokument ein Skript vom Typ Modul (`module`) hinzu und gib ihm die Quelldatei `index.js`

# --hints--

Du solltest ein `script`-Tag erstellen.

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

Dein `script`-Tag sollte das Attribut `type` mit dem Wert `module` besitzen.

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

Dein `script`-Tag sollte die Quelle (`src`) von `index.js` haben.

```js
assert(
  code.match(
    /<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>
```

# --solutions--

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

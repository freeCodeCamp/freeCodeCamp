---
id: 587d774e367417b2b2512a9f
title: Springe mit Hilfe des main Elements direkt zum Inhalt
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
dashedName: jump-straight-to-the-content-using-the-main-element
---

# --description--

Mit HTML5 wurden mehrere neue Elemente eingeführt, die Entwicklern mehr Möglichkeiten bieten und gleichzeitig Funktionen zur Barrierefreiheit enthalten. Zu diesen Tags gehören unter anderem `main`, `header`, `footer`, `nav`, `article` und `section`.

Standardmäßig rendert ein Browser diese Elemente ähnlich wie das einfache `div`. Wenn du sie jedoch an geeigneter Stelle verwendest, verleiht das deinem Markup zusätzliche Bedeutung. Der Tag-Name allein kann schon auf die Art der darin enthaltenen Informationen hinweisen, was dem Inhalt eine semantische Bedeutung verleiht. Unterstützende Technologien können auf diese Informationen zugreifen, um ihren Benutzern eine bessere Seitenübersicht oder Navigationsoptionen zu bieten.

Das `main`-Element wird verwendet, um (du hast es erraten) den Hauptinhalt zu umschließen, und es sollte nur eines pro Seite geben. Es soll die Informationen umfassen, die sich auf das zentrale Thema deiner Seite beziehen. Es soll keine Elemente enthalten, die sich über Seiten hinweg wiederholen, wie Navigationslinks oder Banner.

Der `main`-Tag hat auch eine eingebettete Landmark-Funktion, die unterstützende Technologien verwenden können, um schnell zum Hauptinhalt zu navigieren. Wenn du jemals einen Link "Zum Hauptinhalt springen" am Anfang einer Seite gesehen hast, gibt die Verwendung des `main`-Tags unterstützenden Hilfsmitteln automatisch diese Funktionalität.

# --instructions--

Camper Cat hat ein paar große Ideen für seine Seite über Ninjawaffen. Hilf ihm, sein Markup einzurichten, indem du öffnende und schließende `main`-Tags zwischen dem `header` und dem `footer` einfügst (Wird in anderen Herausforderungen behandelt). Lass die `main` Tags vorerst leer.

# --hints--

Dein Code sollte ein `main` Tag haben.

```js
assert($('main').length == 1);
```

Die `main` Tags sollten zwischen dem schließenden `header` Tag und dem öffnendem `footer` Tag sein.

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --seed--

## --seed-contents--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>
```

# --solutions--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```

---
id: bd7123c8c441eddfaeb5bdef
title: Say Hello to HTML Elements
challengeType: 0
videoUrl: ''
localeTitle: Sag Hallo zu HTML Elementen
---

## Beschreibung
<section id='description'>
Willkommen zu freeCodeCamp's HTML Coding Herausforderungen. Diese führen dich Schritt für Schritt durch die Webentwicklung.
Zuerst startest du mit dem Bauen einer einfachen Webseite mit HTML. Du kannst <code>Code</code> in deinem <code>Code Editor</code> bearbeiten, welcher in dieser Seite eingebunden ist.
Siehst du den Code in deinem Code Editor welcher sagt <code>&#60;h1&#62;Hallo&#60;/h1&#62;</code>? Das ist ein HTML <code>Element</code>.
Die meisten HTML Elemente haben einen <code>Start-Tag</code> und ein <code>Ende-Tag</code>.
Start-Tags sehen so aus:
<code>&#60;h1&#62;</code>
Ende-Tags sehen so aus:
<code>&#60;/h1&#62;</code>
Der einzige Unterschied zwischen dem Start-Tag und dem Ende-Tag ist der Schrägstrich nach der öffnenden spitzen Klammer beim Ende-Tag.
Jede Herausforderung hat Tests. Diese kannst du jederzeit starten, indem du den "Starte Tests" Button drückst. Wenn du alle Tests bestehst wirst du aufgefordert deine Lösung zu bestätigen und kannst zur nächsten Coding Herausforderung.
</section>

## Anweisungen
<section id='instructions'>
Um den Test dieser Herausforderung zu bestehen, musst du den Text des <code>h1</code> Elements in "Hallo Welt" ändern.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Das <code>h1</code> Element sollte den Text "Hallo Welt" enthalten.
    testString: assert.isTrue((/hallo(\s)+welt/gi).test($('h1').text()));
```

</section>

## Herausforderungs Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hallo</h1>
```

</div>

## Lösung
<section id='solution'>

```html
<h1>Hallo Welt</h1>
```

</section>

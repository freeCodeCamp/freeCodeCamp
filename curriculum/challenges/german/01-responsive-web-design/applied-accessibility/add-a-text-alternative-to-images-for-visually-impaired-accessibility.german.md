---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
guideUrl: 'https://german.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
---

## Beschreibung
<section id='description'>
Wahrscheinlich haben Sie in anderen Challenges ein <code>alt</code> Attribut auf einem <code>img</code> Tag gesehen. Alt Text beschreibt den Inhalt des Bildes und bietet eine Textalternative. Dies hilft, falls das Bild nicht geladen wird oder von einem Benutzer nicht gesehen werden kann. Es wird auch von Suchmaschinen verwendet, um zu verstehen, was ein Bild enthält, um es in die Suchergebnisse aufzunehmen. Hier ist ein Beispiel: <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code> Menschen mit Sehbehinderungen verlassen sich auf Bildschirmleser, um Webinhalte in eine Audioschnittstelle zu konvertieren. Sie erhalten keine Informationen, wenn sie nur visuell präsentiert werden. Bei Bildern können Screenreader auf das <code>alt</code> Attribut zugreifen und dessen Inhalt lesen, um wichtige Informationen zu liefern. Ein guter <code>alt</code> Text ist kurz, aber beschreibend und soll kurz die Bedeutung des Bildes vermitteln. Sie sollten immer ein <code>alt</code> Attribut in Ihr Bild einfügen. Gemäß der HTML5-Spezifikation wird dies nun als obligatorisch angesehen.
</section>

## Anleitung
<section id='instructions'>
Camper Cat ist sowohl ein Coding Ninja als auch ein echter Ninja und baut eine Website auf, um sein Wissen zu teilen. Das Profilbild, das er verwenden möchte, zeigt seine Fähigkeiten und sollte von allen Besuchern der Website geschätzt werden. Fügen Sie im <code>img</code> Tag ein <code>alt</code> Attribut hinzu, das erklärt, dass Camper Cat Karate macht. (Das Bild <code> src </code> wird nicht mit einer tatsächlichen Datei verknüpft. Sie sollten daher den <code>alt</code> Text in der Anzeige sehen.)
</section>

## Prüfungen
<section id='tests'>

```yml
tests:
  - text: 'Ihr <code>img</ code> Tag sollte ein <code>alt</code> Attribut haben und sollte nicht leer sein.'
    testString: 'assert($("img").attr("alt"), "Ihr <code>img</code> Tag sollte ein <code>alt</code> Attribut haben und sollte nicht leer sein.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="doingKarateWow.jpeg">
```

</div>



</section>

## Lösung
<section id='solution'>

```js
// solution required
```
</section>

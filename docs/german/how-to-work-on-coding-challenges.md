# How to work on coding challenges

### Ändern in GitHub

ede Challenge wird in einer eigenen Markdown-Datei gespeichert. Das macht es einfacher, Challenges direkt in GitHub zu bearbeiten.

Du kannst eine Änderung vornehmen, ohne dass etwas auf Deinem lokalen System ausgeführt wird.

Nachdem Du die zu ändernde Datei in der GitHub-Oberfläche gefunden haben, klick auf das Stiftsymbol, um mit der Bearbeitung der Datei zu beginnen. Dadurch wird automatisch eine Verzweigung des Projekts erstellt, falls noch keine vorhanden ist.

Du kannst das Projekt auch klonen und lokal auf Deinem Computer bearbeiten. Lies Dir hierzu den **main contributing guide** durch. [contributing guide](/CONTRIBUTING.md).

### Challenge Vorlage

Hier ist eine Vorlage, wie die Challenge-Markdown-Dateien aussehen.

````md
---
id: Unique identifier (alphanumerical, MongoDB _id)
title: Challenge Title
challengeType: 0
guideUrl: 'url of guide article'
videoUrl: 'url of video explaination'
---

## Description
<section id='description'>
A Description of the challenge and what is required to pass
</section>

## Instructions
<section id='instructions'>
Instructions about what exactly needs to be done.
</section>
## Tests
<section id='tests'>

``` yml
- text: Should return "foo".
  testString: 'A stringified function using Chai asserts'
```

</section>

<div id='js-seed'>

```js
Code desplayed in the editor by default.
```

</div>

### Before Test
<div id='js-setup'>

```js
Test setup code.
```

</div>

</section>

### After Test
<div id='js-teardown'>

```js
Test tear down code.
```

</div>

</section>

## Solution
<section id='solution'>

```js
Challenge solution code.
```

</section>
````

### Nützliche Links

Challenges erstellen und bearbeiten:

1. [Challenge Style Guide](style-guide-for-curriculum-challenges.md) - wie man Challenges erstellt und formatiert

2. [Challenge types](https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js) - was bedeuten die numerischen Werte für den Abfragetyp (enum).

3. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests ](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - ein video von [Ethan Arrowood](https://twitter.com/ArrowoodTech) wie er zu einer alten Version des Lehrplans beiträgt

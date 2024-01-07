---
id: bad88fee1348bd9aedf08816
title: Link zu internen Abschnitten einer Seite mit Ankerelementen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cyrDRUL'
forumTopicId: 301098
dashedName: link-to-internal-sections-of-a-page-with-anchor-elements
---

# --description--

`a` (*anchor*)-Elemente können auch verwendet werden, um interne Links zu erstellen, um zu verschiedenen Abschnitten innerhalb einer Webseite zu springen.

Um einen internen Link zu erstellen, weist du dem `href`-Attribut eines Links ein Hash-Symbol `#` sowie den Wert des `id`-Attributs für das Element zu, auf das du intern verlinken möchtest, normalerweise weiter unten auf der Seite. Du musst dann das gleiche `id`-Attribut zu dem Element hinzufügen, auf das du verlinkst. Eine `id` ist ein Attribut, das ein Element eindeutig beschreibt.

Nachfolgend findest du ein Beispiel für einen internen Anker-Link und sein Zielelement:

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

Wenn Benutzer auf den Link `Contacts` klicken, werden sie zu dem Abschnitt der Webseite mit dem **Contacts**-Überschriftenelement weitergeleitet.

# --instructions--

Ändere deinen externen Link in einen internen Link, indem du das Attribut `href` in `#footer` und den Text von `cat photos` in `Jump to Bottom` änderst.

Entferne das `target="_blank"` Attribut aus dem Anker-Tag, da dadurch das verknüpfte Dokument in einem neuen Fenster-Tab geöffnet wird.

Füge danach ein `id`-Attribut mit dem Wert `footer` in das `<footer>`-Element am unteren Ende der Seite ein.

# --hints--

Es sollte nur einen Anker-Tag auf deiner Seite geben.

```js
assert($('a').length == 1);
```

Es sollte nur ein `footer`-Tag auf deiner Seite vorhanden sein.

```js
assert($('footer').length == 1);
```

Der `a`-Tag sollte ein `href`-Attribut haben, das auf "#footer" gesetzt ist.

```js
assert($('a').eq(0).attr('href') == '#footer');
```

Der `a`-Tag sollte kein `target`-Attribut besitzen.

```js
assert(
  typeof $('a').eq(0).attr('target') == typeof undefined ||
    $('a').eq(0).attr('target') == true
);
```

Der `a`-Text sollte "Jump to Bottom" lauten.

```js
assert(
  $('a')
    .eq(0)
    .text()
    .match(/Jump to Bottom/gi)
);
```

Der `footer`-Tag sollte ein `id`-Attribut haben, das auf "footer" gesetzt ist.

```js
assert($('footer').eq(0).attr('id') == 'footer');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer>Copyright Cat Photo App</footer>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="#footer">Jump to Bottom</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer id="footer">Copyright Cat Photo App</footer>
```

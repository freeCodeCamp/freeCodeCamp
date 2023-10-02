---
id: bad88fee1348bd9aedf08816
title: Creare dei link alle sezioni interne di una pagina con gli elementi di ancoraggio
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cyrDRUL'
forumTopicId: 301098
dashedName: link-to-internal-sections-of-a-page-with-anchor-elements
---

# --description--

Gli elementi `a` (*anchor*) possono essere anche utilizzati per creare collegamenti interni per saltare a diverse sezioni di una pagina web.

Per creare un link interno assegna l'attributo `href` di un link a un simbolo di hash `#` seguito dal valore dell'attributo `id` dell'elemento a cui desideri creare il collegamento, solitamente più in basso nella pagina. Devi quindi aggiungere lo stesso attributo `id` all'elemento a cui ti stai collegando. Un `id` è un attributo che identifica in modo univoco un elemento.

Di seguito è riportato un esempio di collegamento interno e il suo elemento di destinazione:

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

Quando gli utenti cliccheranno sul link `Contacts`, saranno portati alla sezione della pagina web con l'elemento di intestazione **Contacts**.

# --instructions--

Cambia il tuo link esterno in un link interno modificando l'attributo `href` in `#footer` e il testo da `cat photos` a `Jump to Bottom`.

Rimuovi l'attributo `target="_blank"` dal tag di ancoraggio perché questo farebbe aprire il documento collegato in una nuova scheda del browser.

Quindi aggiungi un attributo `id` con un valore di `footer` all'elemento `<footer>` in fondo alla pagina.

# --hints--

Ci dovrebbe essere un solo tag di ancoraggio nella tua pagina.

```js
assert($('a').length == 1);
```

Ci dovrebbe essere solo un tag `footer` nella tua pagina.

```js
assert($('footer').length == 1);
```

Il tag `a` dovrebbe avere un attributo `href` impostato a "#footer".

```js
assert($('a').eq(0).attr('href') == '#footer');
```

Il tag `a` non dovrebbe avere un attributo `target`.

```js
assert(
  typeof $('a').eq(0).attr('target') == typeof undefined ||
    $('a').eq(0).attr('target') == true
);
```

Il testo `a` dovrebbe essere "Jump to Bottom".

```js
assert(
  $('a')
    .eq(0)
    .text()
    .match(/Jump to Bottom/gi)
);
```

Il tag `footer` dovrebbe avere un attributo `id` impostato a "footer".

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

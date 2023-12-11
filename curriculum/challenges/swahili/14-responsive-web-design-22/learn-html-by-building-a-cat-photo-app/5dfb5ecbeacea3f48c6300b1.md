---
id: 5dfb5ecbeacea3f48c6300b1
title: Hatua ya 21
challengeType: 0
dashedName: step-21
---

# --description--

Tumia vipengele vya orodha (`li`) ili kuunda vitu katika orodha. Hapa kuna mfano wa vitu vya orodha katika orodha isiyopangwa:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

Ndani ya kipengee cha `ul` ongeza orodha ya vitu tatu ili kuonyesha mambo matatu ambayo paka hupenda:

`cat nip` `laser pointers` `lasagna`

# --hints--

Unapaswa kuwa na vipengele vitatu vya `li`. Kila kipengele cha `li` kinafaa kuwa na tagi yake ya kufungua na kufunga.

```js
assert($('li').length === 3 && code.match(/<\/li\>/g).length === 3);
```

Unapaswa kuwa na vipengele vitatu vya `li` vyenye maandishi `cat nip`, `laser pointers` na `lasagna` kwa mpangilio wowote. Aidha umesahau maandishi, au kuna makosa ya maandishi.

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['cat nip', 'lasagna', 'laser pointers']
);
```

Vipengele vitatu vya `li` vinapaswa kupatikana kati ya tagi za kufungua na kufunga za kipengele `ul`.

```js
assert(
  [...document.querySelectorAll('li')].filter(
    (item) => item.parentNode.nodeName === 'UL'
  ).length === 3
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
--fcc-editable-region--
        <ul>

        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```


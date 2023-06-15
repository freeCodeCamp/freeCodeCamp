---
id: 5dfa371beacea3f48c6300af
title: Hatua ya 19
challengeType: 0
dashedName: step-19
---

# --description--

Unapoongeza kipengele cha kichwa cha cheo cha chini kwenye ukurasa, inadokezwa kuwa unaanza kifungu kipya.

Baada ya kipengele cha `h2` cha mwisho cha kipengele cha `section` cha pili, ongeza kipengele cha `h3` na maandishi haya:

`Things cats love:`

# --hints--

Kipengele cha pili cha `section` kinaonekana kukosa au hakina tagi ya kufungua na kufunga.

```js
assert(
  document.querySelectorAll('main > section')[1] &&
    code.match(/\<\/section>/g).length == 2
);
```

Kunapaswa kuwa na kipengele cha `h3` juu ya tagi ya kufunga ya `section` ya pili.

```js
assert(
  document.querySelectorAll('main > section')[1].lastElementChild.nodeName ===
    'H3'
);
```

Kipengele cha `h3` kilicho juu ya tagi ya kufunga ya `section` ya pili kinapaswa kuwa na maandishi `Things cats love:`. Hakikisha umejumuisha koloni mwishoni mwa maandishi.

```js
assert(
  document
    .querySelectorAll('main > section')[1]
    .lastElementChild.innerText.toLowerCase()
    .replace(/\s+/g, ' ') === 'things cats love:'
);
```

Kunapaswa kuwa na kipengele cha `h2` chenye maandishi `Cat Lists` juu ya kipengele cha mwisho cha `h3` ambacho kimewekwa katika kipengele cha mwisho cha `section`. Huenda umefuta kwa bahati mbaya kipengele cha `h2`.

```js
const secondSectionLastElemNode = document.querySelectorAll('main > section')[1]
  .lastElementChild;
assert(
  secondSectionLastElemNode.nodeName === 'H3' &&
    secondSectionLastElemNode.previousElementSibling.innerText
      .toLowerCase()
      .replace(/\s+/g, ' ') === 'cat lists'
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
--fcc-editable-region--
      <section>
        <h2>Cat Lists</h2>

      </section>
--fcc-editable-region--
    </main>
  </body>
</html>
```


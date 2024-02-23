---
id: 5dfa30b9eacea3f48c6300ad
title: Hatua ya 15
challengeType: 0
dashedName: step-15
---

# --description--

Katika hatua za awali ulitumia kipengele cha nanga kugeuza maandishi kuwa kiungo. Aina zingine za maudhui pia zinaweza kugeuzwa kuwa kiunga kwa kuifunga kwa tagi za nanga.

Geuza picha kuwa kiungo kwa kuizunguka na tagi za vipengele zinazofaa. Tumia `https://freecatphotoapp.com` kama thamani ya sifa `href`.

# --hints--

Unapaswa kuwa na kipengele cha `img` chenye thamani ya `src` ya `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`. Huenda umeifuta kwa bahati mbaya.

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

Kipengele chako cha nanga (`a`) kinapaswa kuwa na tagi ya ufunguzi. Tagi za ufunguzi zina sintaksia ifuatayo: `<elementName>`.

```js
assert(document.querySelectorAll('a').length >= 2);
```

Unakosa tagi ya kufunga ya (`a`) baada ya picha.

```js
assert(document.querySelectorAll('a').length === 2);
```

Kipengele chako cha nanga (`a`) kinapaswa kuwa na tagi ya kufunga. Tagi za kufunga zina `/` mara baada ya herufi ya `<`.

```js
assert(code.match(/<\/a>/g).length >= 2);
```

Unapaswa kuongeza tu tagi moja ya kufunga ya (`a`). Tafadhali ondoa ziada yoyote.

```js
assert(code.match(/<\/a>/g).length === 2);
```

Kipengele chako cha nanga (`a`) hakina sifa ya `href`. Hakikisha kuwa kuna nafasi baada ya jina la tagi inayofungua na/au kuna nafasi kabla ya majina yote ya sifa.

```js
assert(document.querySelector('a').hasAttribute('href'));
```

Kipengele chako cha nanga (`a`) kinapaswa kuunganishwa na `https://freecatphotoapp.com`. Aidha umesahau URL au umeandika makosa.

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

Kipengee chako cha `img` kinapaswa kuwekwa ndani ya kipengele cha nanga `a`. Kipengele kizima cha `img` kinafaa kuwa ndani ya tagi za ufunguzi na za kufunga za kipengele cha nanga (`a`).

```js
assert(document.querySelector('img').parentNode.nodeName === 'A');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```


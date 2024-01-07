---
id: 587d774e367417b2b2512aa0
title: Funga Maudhui katika kipengele cha article
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` ni mojawapo ya vipengele vipya vya HTML5 vinavyoongeza maana ya kisemantiki kwenye lebo yako. `article` ni kipengele cha kugawanya na hutumika kufunga maudhui huru na yanayojitosheleza. Lebo inafanya kazi vyema na maingizo ya blogi, machapisho ya jukwaa, au nakala za habari.

Kuamua ikiwa maudhui yanaweza kujisimamia peke yake kwa kawaida huwa ni hukumu, lakini unaweza kutumia majaribio machache rahisi. Jiulize ikiwa umeondoa muktadha wote unaozunguka maudhui hayo,  je,  bado yatakuwa na maana? Vile vile, kwa maandishi, je, maudhui yangejisimamia ikiwa yalikuwa katika mlisho wa RSS?

Kumbuka kwamba watu wanaotumia teknolojia ya usaidizi wanategemea lebo iliyopangwa, yenye maana ya kimaana ili kuelewa kazi yako vyema.

**Kumbuka:** Kipengele cha `section` pia ni kipya na HTML5, na kina maana tofauti kidogo ya kisemantiki kuliko `artile`. `article` ni ya maudhui ya pekee, na `section` ni ya kupanga maudhui yanayohusiana kimaudhui. Zinaweza kutumika ndani ya kila mmoja, kama inahitajika. Kwa mfano, ikiwa kitabu ni `article`, basi kila sura ni `section`. Wakati hakuna uhusiano kati ya vikundi vya maudhui, basi tumia `div`.

`<div>` - hukusanya maudhui `<section>` - khukusanya vikundi vya maudhui yanayohusiana `<article>` - huweka vikundi vilivyo huru na vinavyojitosheleza

# --instructions--

Camper Cat alitumia lebo za `article` kufunga machapisho kwenye ukurasa wake wa blogu, lakini alisahau kuzitumia kwenye ile ya juu zaidi. Badilisha lebo ya `div` ili utumie lebo ya `article` badala yake.

# --hints--

Code yako inapaswa kuwa na lebo tatu za `article`.

```js
assert($('article').length == 3);
```

Code yako haipaswi kuwa na lebo zozote za `div`.

```js
assert($('div').length == 0);
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

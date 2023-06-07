---
id: 587d774e367417b2b2512aa0
title: Umfasse Inhalte mit dem article-Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` ist eines der neuen HTML5-Elemente, die deinem Mark-up semantische Bedeutung verleihen. `article` ist ein Abschnittselement und wird verwendet, um eigenständige, in sich abgeschlossene Inhalte einzufassen. Das Tag funktioniert gut mit Blogeinträgen, Forumsbeiträgen oder Nachrichtenartikeln.

Wann genau Inhalte für sich alleine stehen können, lässt sich nicht pauschal beantworten, aber die folgenden einfachen Tests können dabei helfen. Würde der Inhalt noch Sinn ergeben, wenn man alle umgebenden Kontextinformationen entfernen würde? Ähnlich ausgedrückt - würde der Inhalt bestehen, wenn man ihn isoliert in über einen RSS-Feed verbreiten würde?

Beachte, dass Menschen, die assistive Technologien verwenden, auf organisiertes, semantisch aussagekräftiges Mark-up angewiesen sind, um deinen Inhalten gut folgen zu können.

**Tipp:** Das `section`-Element ist auch neu bei HTML5 und hat eine etwas andere semantische Bedeutung als `article`. Ein `article` ist für eigenständige Inhalte gedacht und eine `section` dient zur Gruppierung thematisch verwandter Inhalte. Man kann sie nach Bedarf ineinander verschachteln. Wenn zum Beispiel ein Buch der `article` ist, dann ist jedes Kapitel eine `section`. Wenn es keine Beziehung zwischen Gruppen von Inhalten gibt, kannst du ein `div` verwenden.

`<div>` - gruppiert Inhalte `<section>` - gruppiert verwandte Inhalte `<article>` - gruppiert unabhängigen, eigenständigen Inhalt

# --instructions--

Camper Cat hat `article`-Tags verwendet, um die Beiträge auf seiner Blog-Seite zu kennzeichnen, aber er hat vergessen, sie auch für den oberen zu verwenden. Ändere das `div`-Tag in ein `article`-Tag.

# --hints--

Dein Code sollte ein `article`-Tag enthalten.

```js
assert($('article').length == 3);
```

Dein Code sollte keine `div`-Tags beinhalten.

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

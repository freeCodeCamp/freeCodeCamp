---
id: 587d78b1367417b2b2512b0c
title: Typografie responsiv gestalten
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/crzN7T8'
forumTopicId: 301141
dashedName: make-typography-responsive
---

# --description--

Anstatt `em` oder `px` für die Textgröße zu verwenden, kannst du Viewport-Einheiten für responsive Typografie nutzen. Viewport-Einheiten sind wie Prozentangaben relative Einheiten, aber sie basieren auf unterschiedlichen Elementen. Viewport-Einheiten sind relativ zu den Viewport-Dimensionen (Breite oder Höhe) eines Geräts, und Prozentsätze sind relativ zur Größe des übergeordneten Container-Elements.

Die vier verschiedenen Viewport-Einheiten sind:

<ul><li><code>vw</code> (Viewport-breite): <code>10vw</code> wäre 10% der Breite des Viewports.</li><li><code>vh</code> (Viewport-Höhe): <code>3vh</code> wäre 3% der Höhe des Viewports.</li><li><code>vmin</code> (Viewport minimum): <code>70vmin</code> wäre 70% der kleineren Größe des Viewports (Höhe oder Breite).</li><li><code>vmax</code> (Viewport maximal): <code>100vmax</code> wäre 100% der größeren Größe des Viewports (Höhe oder Breite).</li></ul>

Hier ist ein Beispiel, das ein `body` Tag auf 30% der Breite des Viewports setzt.

```css
body { width: 30vw; }
```

# --instructions--

Setze die `width` des `h2`-Tags auf 80% der Breite des Viewports und die `width` des Absatzes auf 75% der kleineren Dimension des Viewports.

# --hints--

Dein `h2`-Tag sollte eine `width` von 80vw besitzen.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g)
);
```

Dein `p`-Tag sollte eine `width` von 75vmin besitzen.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

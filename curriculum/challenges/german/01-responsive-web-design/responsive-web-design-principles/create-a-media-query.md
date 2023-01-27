---
id: 587d78b0367417b2b2512b08
title: Erstellen einer Medienabfrage
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

Medienabfragen (Media Queries) sind eine neue Technik, die in CSS3 eingeführt wurde und mit der die Darstellung von Inhalten je nach Größe des Ansichtsfensters (Viewport) geändert werden kann. Der Viewport ist der für den Nutzer sichtbare Bereich einer Webseite und unterscheidet sich je nach dem Gerät, mit dem die Seite aufgerufen wird.

Medienabfragen bestehen aus einem Medientyp, und wenn dieser Medientyp mit dem Gerätetyp übereinstimmt, auf dem das Dokument angezeigt wird, werden die Stile angewendet. Du kannst so viele Selektoren und Stile in deiner Medienabfrage verwenden, wie du willst.

Hier ist ein Beispiel für eine Medienabfrage, die den Inhalt zurückgibt, wenn die Breite des Geräts kleiner oder gleich `100px` ist:

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

und die folgende Medienabfrage gibt den Inhalt zurück, wenn die Höhe des Geräts größer oder gleich `350px` ist:

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

Denk daran, dass das CSS in der Medienabfrage nur angewendet wird, wenn der Medientyp mit dem des verwendeten Geräts übereinstimmt.

# --instructions--

Füge eine Medienabfrage hinzu, damit der `p`-Tag eine Schriftgröße (`font-size`) von `10px` hat, wenn die Höhe des Geräts kleiner oder gleich `800px` ist.

# --hints--

Du solltest eine `@media`-Abfrage für Geräte mit einer Höhe (`height`) kleiner oder gleich `800px` deklarieren.

```js
const media = new __helpers.CSSHelp(document).getCSSRules('media');
assert(media.some(x => x.media?.mediaText?.includes('(max-height: 800px)')));
```

Dein `p`-Element sollte eine Schriftgröße (`font-size`) von `10px` haben, wenn die Höhe ( `height`) des Geräts kleiner als oder gleich `800px` ist.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-height: 800px)');
assert(rules?.find(x => x.selectorText === 'p')?.style?.fontSize === "10px");
```

Dein `p`-Element sollte eine anfängliche Schriftgröße (`font-size`) von `20px` haben, wenn die Höhe (`height`) des Geräts mehr als `800px` beträgt.

```js
const ifPFirst = new __helpers.CSSHelp(document).getCSSRules()?.find(x => x?.selectorText === 'p' || x?.media);
assert(ifPFirst?.style?.fontSize === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 20px;
  }

  /* Only change code below this line */

  /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

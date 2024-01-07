---
id: 587d78b0367417b2b2512b08
title: Створення медіа-запиту
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

Медіа-запити є новою технікою CSS3, яка змінює представлення вмісту на основі різних розмірів області перегляду. Область перегляду — це видима область користувача веб-сторінки і відрізняється в залежності від пристрою, який використовується для доступу до сайту.

Медіа-запити складаються з типу медіа, і якщо цей тип медіа відповідає типу пристрою, на якому відображається документ, застосовуються стилі. У медіа-запиту може бути стільки селекторів та стилів, скільки Ви забажаєте.

Ось приклад медіа-запиту, який повертає контент, якщо ширина пристрою менше або дорівнює `100px`:

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

а наступний медіа-запит повертає контент, якщо висота пристрою більше або дорівнює `350px`:

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

Пам'ятайте, що CSS всередині медіа-запиту застосовується тільки в тому випадку, якщо тип медіа відповідає типу пристрою, який використовується.

# --instructions--

Додайте медіа-запит таким чином, щоб тег `p` мав `font-size` `10px`, якщо висота пристрою менша або ж дорівнює `800px`.

# --hints--

Ви повинні створити запит `@media` для пристроїв з `height` меншим або рівним `800px`.

```js
const media = new __helpers.CSSHelp(document).getCSSRules('media');
assert(media.some(x => x.media?.mediaText?.includes('(max-height: 800px)')));
```

Величина `font-size` вашого елементу `p` повинна становити `10px`, якщо `height` приладу менше або ж дорівнює `800px`.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-height: 800px)');
assert(rules?.find(x => x.selectorText === 'p')?.style?.fontSize === "10px");
```

У елемента `p` повинен бути заданий початковий `font-size` в `20px`, якщо `height` пристрою перевищує `800px`.

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

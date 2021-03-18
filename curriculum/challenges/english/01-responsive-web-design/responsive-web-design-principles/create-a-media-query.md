---
id: 587d78b0367417b2b2512b08
title: Create a Media Query
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

Media Queries are a new technique introduced in CSS3 that change the presentation of content based on different viewport sizes. The viewport is a user's visible area of a web page, and is different depending on the device used to access the site.

Media Queries consist of a media type, and if that media type matches the type of device the document is displayed on, the styles are applied. You can have as many selectors and styles inside your media query as you want.

Here's an example of a media query that returns the content when the device's width is less than or equal to 100px:

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

and the following media query returns the content when the device's height is more than or equal to 350px:

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

Remember, the CSS inside the media query is applied only if the media type matches that of the device being used.

# --instructions--

Add a media query, so that the `p` tag has a `font-size` of `10px` when the device's height is less than or equal to `800px`.

# --hints--

You should declare a `@media` query for devices with a `height` less than or equal to 800px.

```js
assert(
  $('style')
    .text()
    .replace(/\s/g, '')
    .match(/@media\(max-height:800px\)/g)
);
```

Your `p` element should have a `font-size` of 10px when the device `height` is less than or equal to 800px.

```js
assert(
  $('style')
    .text()
    .replace(/\s/g, '')
    .match(/@media\(max-height:800px\){p{font-size:10px;?}}/g)
);
```

Your `p` element should have an initial `font-size` of 20px when the device `height` is more than 800px.

```js
assert(
  $('style')
    .text()
    .replace(/\s/g, '')
    .replace(/@media.*}/g, '')
    .match(/p{font-size:20px;?}/g)
);
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

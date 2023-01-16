---
id: 587d781d367417b2b2512ac8
title: اضبط حالة التأشير بالحوم في علامة الرابط
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakRGcm'
forumTopicId: 301035
dashedName: adjust-the-hover-state-of-an-anchor-tag
---

# --description--

This challenge will touch on the usage of pseudo-classes. A pseudo-class is a keyword that can be added to selectors, in order to select a specific state of the element.

على سبيل المثال، يمكن تغيير تصميم علامة الرابط عندما يحوم الماوس فوقها بواسطة فئة زائفة pseudo-class من نوع `:hover`. Here's the CSS to change the `color` of the anchor tag to red during its hover state:

```css
a:hover {
  color: red;
}
```

# --instructions--

The code editor has a CSS rule to style all `a` tags black. Add a rule so that when the user hovers over the `a` tag, the `color` is blue.

# --hints--

علامة الرابط `color` يجب أن تبقى سوداء. فقط أضف قواعد CSS لدولة `:hover`.

```js
assert($('a').css('color') == 'rgb(0, 0, 0)');
```

يجب أن يتغير قيمة `color` في علامة الرابط (anchor) إلى الأزرق (blue) عندما تحوم عليها (hover).

```js
assert(
  code.match(
    /a:hover\s*?{\s*?color:\s*?(blue|rgba\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?,\s*?1\s*?\)|#00F|rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\))\s*?;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

# --solutions--

```html
<style>
  a {
    color: #000;
  }
  a:hover {
    color: rgba(0,0,255,1);
  }
</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

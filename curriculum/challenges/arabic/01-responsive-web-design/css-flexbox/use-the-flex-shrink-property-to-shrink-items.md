---
id: 587d78ad367417b2b2512afb
title: استعمال خاصية flex-shrink لتقليص الأصناف
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
dashedName: use-the-flex-shrink-property-to-shrink-items
---

# --description--

وتنطبق حتى الآن جميع الخواص في التحديات على الحاوية المرنة ( flex container وهو أصل الأصناف المرنة). غير أن هناك عدة خصائص مفيدة للأصناف المرنة (flex items).

The first is the `flex-shrink` property. When it's used, it allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.

الخاصية `flex-shrink` تأخذ الأرقام كقيم. وكلما ارتفع العدد، سيتقلص العدد مقارنة بالاصناف الأخرى في الحاوية. For example, if one item has a `flex-shrink` value of `1` and the other has a `flex-shrink` value of `3`, the one with the value of `3` will shrink three times as much as the other.

# --instructions--

Add the CSS property `flex-shrink` to both `#box-1` and `#box-2`. Give `#box-1` a value of `1` and `#box-2` a value of `2`.

# --hints--

The `#box-1` element should have the `flex-shrink` property set to a value of `1`.

```js
assert($('#box-1').css('flex-shrink') == '1');
```

The `#box-2` element should have the `flex-shrink` property set to a value of `2`.

```js
assert($('#box-2').css('flex-shrink') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

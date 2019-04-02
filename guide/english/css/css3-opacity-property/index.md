---
title: CSS3 Opacity Property
---
## CSS3 Opacity Property

`opacity` lets you control how transparent an element is on a scale of `0` to `1`.

If you set the property of an element to `0` it will be transparent. If you set it to `1` it will be opaque.

Setting an element to `opacity: 0;` does not remove it from the page. The element will still be clickable and impact the flow of the page's content.

```css
.transparent {
    opacity: 0;
}

.verySeeThrough {
    opacity: 0.3;
}

.slightlySeeThrough {
    opacity: 0.7;
}

.opaque {
    opacity: 1;
}
```

[This simple example](https://jsfiddle.net/1ogmxaf8/1/) shows how you might use opacity with a hover effect.

#### More Information:
* [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
* [CSS Tricks Almanac](https://css-tricks.com/almanac/properties/o/opacity/)

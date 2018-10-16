---
title: Z Index
---
## Z Index

Z Index (`z-index`) is a CSS property that defines the order of overlapping HTML elements. Elements with a higher index will be placed on top of elements with a lower index.

**Note**: Z index only works on positioned elements (`position:absolute`, `position:relative`, or `position:fixed`).

#### Possible Values
```css
/* Default value if not specified */
z-index: auto;

/* Integer values */
z-index: 1;
z-index: 100;
z-index: 9999;
z-index: -1;

/* Global values */
z-index: inherit;
z-index: initial;
z-index: unset;
```


#### Example Usage

In this example, you can see three boxes displayed on top of each other in different orders using `z-index`.

<em>HTML</em>
```html
<div class="container">
  <div class="box" id="blue"></div>
  <div class="box" id="red"></div>
  <div class="box" id="green"></div>
</div>
```

<em>CSS</em>
```css
#blue {
  background-color: blue;
}

#red {
  background-color: red;
}

#green {
  background-color: green;
}
```

Since `z-index` wasn't defined, it will have a default value of `auto`. This is a result:

![An image of three boxes](https://image.prntscr.com/image/Yc9oGkdKTnm_YIHzaKQmbQ.png)

Try to change the order to Green, Blue, Red in CSS using `z-index`.

```css
#blue {
  background-color: blue;
  z-index: 2;
}

#red {
  background-color: red;
  z-index: 1;
}

#green {
  background-color: green;
  z-index: 3;
}
```

Your result will be:

![An image of three boxes](https://image.prntscr.com/image/Am9XxPO4Q2mq-PcokJ47Wg.png)

Use Z Index if you need to put a background element below a container. You can easily place the background under every element by giving it a negative Z Index like below:

```css
#background {
  z-index: -1;
}
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href="https://css-tricks.com/almanac/properties/z/z-index/" target="_blank">https://css-tricks.com/almanac/properties/z/z-index/</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index</a>

<a href="https://philipwalton.com/articles/what-no-one-told-you-about-z-index/" target="_blank">https://philipwalton.com/articles/what-no-one-told-you-about-z-index/</a>

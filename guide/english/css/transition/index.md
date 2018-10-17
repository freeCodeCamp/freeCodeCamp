---
title: Transition
---
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
## Transition

The `transition` property allows you to change property values smoothly (from one value to another), over a given duration. 
```css 
  transition: all 300ms;
```

### Transition on Several Property Values

You can change multiples property values with transition property.
```css 
  transition: width 300ms, height 2s;
```

### Specify the Speed Curve of the Transition

You can specify a speed curve on an element in transition property.

```css 
  transition: height 2s linear;
```

or the property `transition-timing-function`

```css 
  transition-timing-function: linear;
```

### Different values of `transition-timing-function`

`ease` - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
`linear` - specifies a transition effect with the same speed from start to end
`ease-in` - specifies a transition effect with a slow start
`ease-out` - specifies a transition effect with a slow end
`ease-in-out` - specifies a transition effect with a slow start and end
`cubic-bezier(n,n,n,n)` - lets you define your own values in a cubic-bezier function


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* MDN Documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/transition' target='_blank' rel='nofollow'>MDN</a>
* Easings reference: <a href='http://easings.net/en' target='_blank' rel='nofollow'>Easings</a>





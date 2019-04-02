---
title: Will Change
---
## Will Change
The will-change property allows you to tell the browser what manipulations will occur with the element in order to optimize it.

```css
.container {
  will-change: transform;
}
```

The above property will-change is used for the class ```.container```, in this case, the transformation on the element may or may not occur.


However, using this property there is an interesting side effect.

If we apply to the transform: ```translateZ (0)``` element, the element will create a new overlay context, and in some browsers it will also add a layer to its own rendering stream, which will give us a performance boost, which we are achieving.

Consequently, using ```will-change: transform```, the browser will create a new overlay context, regardless of whether we applied the transform to the element or not.

The key thing to note is that will-change will create a new overlay context only if the property also creates a new overlay context. Because the transform property creates a new overlay context, ```will-change: transform``` will also create a new overlay context.

If you used ```will-change: display```, then a new overlay context will not be created, since no value of the display property creates a new overlay context.

Let's look at another example: ```opacity```. Opacity with a value of 1 does not create a new overlay context, but with a lower value (for example, 0.9) will create. While will-change: opacity will in any case create a new overlay context.

Tip: Be careful when you use this property. You should only be using it when you are 100% sure the element will change, as overusing this property will use a lot of resources. In some cases it can be really useful to only apply will-change when the user hovers the parent of the element.

#### More Information:
- [will-change on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
- [CSS Will Change Module Level 1 (working draft)](https://drafts.csswg.org/css-will-change/#will-change)
- [Can I use: CSS will-change property](https://caniuse.com/#feat=will-change)

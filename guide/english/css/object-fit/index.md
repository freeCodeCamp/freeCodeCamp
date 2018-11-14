---
title: Object Fit
---
# Object Fit

The `object-fit` property specifies how an element responds to the width / height of its parent box.

This property can be used for image, video, or any other media. It can also be used with the `object-position` property to get more control on how the media is displayed.

Basically we use the `object-fit` property to define how it stretch or squish an inline media.

## Syntax
```css
.element {
    object-fit: fill || contain || cover || none || scale-down;
}
```

## Values

* `fill`: **This is the default value**. Resize the content to match its parent box regardless of the aspect-ratio.

* `contain`: Resize the content to fill its parent box using the correct aspect-ratio.

* `cover`: similar as `contain` but often cropping the content.

* `none`: display the image in its original size.

* `scale-down`: compare the difference between `none` and `contain` to find the smallest concrete object size.

## Browser Compatibility
The `object-fit` is supported by most of the modern browsers, for the most updated info about compatibility you can check this out http://caniuse.com/#search=object-fit

Also there's a polyfill for unsupported browser (mostly IE).
https://github.com/anselmh/object-fit

## More Information

https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
https://drafts.csswg.org/css-images-3/#the-object-fit

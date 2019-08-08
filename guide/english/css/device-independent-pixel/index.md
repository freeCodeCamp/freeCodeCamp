---
title: Device Independent Pixel
---
## Device Independent Pixel

Surfing the web is no longer confined to PC's and Laptops, but has rather outgrown to mobile devices and tablets,but,these devices are often constrained by the display media factors such as aspect ratio or sizes,and thus, there is a need of **Device Independent Pixels**.

CSS pixels are abstract units used by the web browsers to draw images and other content on a website.These are Device Independent Pixels (DIPs) which readjust themselves according to the pixel density of the screen they are used in.They are actually optical reference units.

They are based on a **coordinate system** held by a computer and are used to scale the display of information and user interaction across different devices as per the different screen sizes.

* **This is the reason why Bootstrap 4 dropped pixels for REM.**

```css
@media (min-width: 85rem) {
  .container {
    width: 65rem;
  }
}
```

## Differences and Drawbacks:

* Usual Pixels are an illusion, they are not equal to the on-screen pixels.

* Pixels do not truly relate the root font sizes like REM and EM sizes.

* Properties such as margins, padding and line-height do not scale naturally when re-set in a line.

* Their assumption as integers results in less accurate implementations on various pixel ratios.

* It is difficult to manage pixels.

## Relative set dimensions:

### REM and EM:
* Always use REM or EM whenever you need to set a fixed width or height.

* Containers with EM dimensions are more advanced than REM despite EM being older. It works better for media-query breakpoints than REM across browsers.

```css
h2 {
font-size: 2em;
}
```
* 1rem is 16px in CSS.

However, not even REM units can be of much help as they still make you guess and estimate upto a certain extent, due to missing **"proportions"**. 

## Conclusion:

* use CSS units and layout to make the content fluid across multiple platforms by using latest units such as :
   
    * rem 
    * em
    * vh
    * vw
    * percentage
    * pt
    * ex
    * ch
    * vmin
    * vmax

* use SVGs or icon fonts to have the content naturally scale up to higher screen sensities or rather sizes.


#### More Information:
* [CSS-TRICKS](https://css-tricks.com/rem-global-em-local/)
* [sitepoint](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/)
* [WebPlatform project](https://webplatform.github.io/docs/tutorials/understanding-css-units/)

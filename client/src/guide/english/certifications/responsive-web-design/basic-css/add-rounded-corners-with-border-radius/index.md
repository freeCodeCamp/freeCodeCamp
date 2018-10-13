---
title: Add Rounded Corners with border-radius
---
## Add Rounded Corners with border-radius

Sometimes you want to have rounded corners instead of square ones. In this case we use the "border-radius" property to determine how rounded we want our corners to be. 

To adjust the roundness of a corner use:

```css
.example {
border-radius: 5px;
}
```

The higher the number, the more round the corner. 

```css
.example {
border-radius: 20px;
}
```

Using the border-radius property we can round the corners of our element, whether that means rounding a border, a background image, or the fill color of the element itself. You will only notice the new rounded corners if there is a color change!

If you only include one number, that radius will be applied to all four corners. If you use two values, the first applies to the top-left and bottom right corners while the second applies to the top-right and bottom-left. 

```css
.exampleTwoValues {
border-radius: 5px 10px;
}
```

If you use four values, the values apply to top-left, top-right, bottom-right, and bottom left.

```css
.exampleFourValues {
border-radius: 5px 7px 10px 15px;
}
```

If you use three values, the first applies to top-left, the second applies to top-right AND bottom-left, and the third applies to the bottom right.

```css
.exampleThreeValues {
border-radius: 5px 10px 15px;
}
```



---
title: Color Property
---

## CSS Color Property 


You can use the `color` property to set the color of the text in an element.  


You can use several methods to declare a color such as: 
* By Name (Note: this only works with certain colors)

```css
h1{
    color: blue;
}
```

* Hexadecimal (specified as #rrggbb)

```css
h1{ 
    color:  #0000ff;
} 
```

* RGB (specified as rgb(r, g, b))

```css
h1{
    color: rgb(0, 0, 255);
}
```

* RGBA (specified as rgba(r, g, b, alpha))

```css
h1{
    color: rgba(0, 0, 255, 0.5);
}
```

* HSL (Hue, Lightness, Saturation)
    
```css
h1{
    color: hsl(240, 100%, 50%);
}
```

* HSLA (Hue, Lightness, Saturation, Alpha)
    
```css
h1{
    color: hsl(240, 100%, 50%, 0.5);
}
```
## CSS Color Properties explained

* Colors by Name:
    - These are pretty self explanatory. Each color is represented by its name.

* Hexadecimal:
    - These colors are represented by hex triplets. 
    - A hex triplet is a six-digit, three-byte hexadecimal number.
    - Each of three bytes represents a color #RRGGBB (red, green, blue).
    - Shorthand hex color is represented by a three-digit hexadecimal number #RGB (red, green, blue).
    
* RGB & RGBA Colors:
    - RGB colors are 24bit (3byte) colors represented by 3 numbers in range of 0-255. (e.g. rgb(255,255,128)).
    - RGBA colors are 32bit (4byte) colors represented by 3 numbers in range of 0-255 and alpha value which controls opacity. (e.g. rgb(255,255,128, 0.3)).
    
* HSL & HSLA Colors:
    - HSL color is represented by three values (HUE, Saturation, Lightness).
    - HSLA color is represented by four values (HUE, Saturation, Lightness, Alpha). Alpha controls the opacity.
    
#### More Information

* W3 Schools site on how to format <a href='https://www.w3schools.com/css/css_text.asp' target='_blank' rel='nofollow'>text</a>.
* W3 Schools site on <a href='https://www.w3schools.com/colors/default.asp' target='_blank' rel='nofollow'>colors</a>.
* Color Property on <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/color' target='_blank' rel='nofollow'>MDN</a>.
* Documentation on <a href='https://www.w3.org/wiki/CSS/Properties/color' target='_blank' rel='nofollow'>w3.org</a>.

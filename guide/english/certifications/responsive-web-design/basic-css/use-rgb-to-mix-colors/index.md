---
title: Use RGB to Mix Colors
---
## Use RGB to Mix Colors

## Examples:
An RGB value is a combination of values for red, green, and blue (RGB).  Each perameter defines the intensity of the color as an integer between 0 (no color; black) and 255 (highest intensity) or a percentage from 0% to 100%. For example: 
```css
rgb(255, 0, 0)
```
This is rendered as red, because the red parameter is set to its highest value (255) and the others are set to 0. With RGB, you can mix colors by using combinations of different values.

```css
<style>
  h2 {
    color: rgb(0, 0, 255);
  }
</style>
```
Above is RGB is used to turn an h2 element blue.
```css
  <style>
  h2 {
    color: rgb(64, 224, 208);
  }
</style>
```
In this example above, different values of RGB are combined, and 'color: rgb(64, 224, 208)' turns the h2 elements turquoise.


## Problem
```html
<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>
```

## Objective
Within the `<style>` element, we need to change the hexcode colour  `#000000` within the `color` element in these classes:
* `.red-text`
* `.orchid-text`
* `.sienna-text`
* `.blue-text`

We are provided a table where the table shows the RBG values of the colours for these required classes shown here:

| Colour | RGB |
|:--------:|:-----:|
|Blue|rgb(0, 0, 255)
|Red|rgb(255, 0, 0)
|Orchid|rgb(218, 112, 214)
|Sienna|rgb(160, 82, 45)

## Example
In order to change the hexcode colour of a class within the style element, we simply replace the hexcode itself with the RGB value shown below.  

### Before
```html
<style>
  .ClassName {
    color: #000000;
}
</style>
```

### After

```html
<style>
.ClassName {
  color: rgb(255, 255, 255); /*this represents the rgb value of the colour, white*/
}
</style>
```

**Note:** In the class,`.ClassName`, within the `<style>` element, the color has changed from a hexcode of `#000000` into the rgb value, `rgb(255, 255, 255)`, which shows that the color of the class `.ClassName` has changed from black to white in the `<style>` element.

## Solution
From the Problem above, we need to change `#000000` from the `color` element in the `<style>` element, into the given RGB values from the table based on the colour that the class needs. For example, the class `.red-text` clearly needs their `color` element to be changed from `#000000` into a red colour, where the table gives us the rgb value of rgb(255, 0, 0) for the colour red, which is shown below:

### Before changing `color` of class `.red-text`
```html
<style>
  .red-text {
    color: #000000;
}
</style>
```

### After changing `color` of class `.red-text`
```html
<style>
.red-text {
  color: rgb(255, 0, 0); /* Color has changed into red when we used this rgb value from the table*/
}
</style>
```

We will follow the same steps for the rest of the classes shown here:

### Before changing `color` of other classes
```html
<style>
  .orchid-text {
    color: #000000; 
}
  .sienna-text {
    color: #000000; 
} 
  .blue-text {
    color: #000000; 
}  
</style>
```

### After changing `color` of other classes
```html
<style>
  .orchid-text {
    color: rgb(218, 112, 214); /*Color has changed into orchid when we used this rgb value from the table*/
}
  .sienna-text {
    color: rgb(160, 82, 45); /* Color has changed into sienna when we used this rgb value from the table*/
}
  .blue-text {
    color: rgb(0, 0, 255); /* Color has changed into blue when we used this rgb value from the table*/
}
</style>
```

## Final Solution
Hence, the final solution reveals that we have changed the `color` element of these text classes with rgb values shown below:
```html
<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color: rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```

#### More Information:
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Applying_color" target="_blank">MDN web docs: Applying color to HTML elements using CSS</a><br>
<a href="https://www.w3schools.com/colors/colors_picker.asp" target="_blank">W3schools Color Picker</a><br>

---
title: Use Hex Code to Mix Colors
---
## Use Hex Code to Mix Colors

## Hint
In order to change the color of a class within the style element, we simply replace the color itself with the hexcode shown below.

### Before
```html
<style>
  .ClassName {
    color: black;
}
</style>
```

### After
```html
<style>
  .ClassName {
    color: #FFFFFF; /*this represents the hex code of the colour, white*/
}
</style>
```

**Note:** In the class,`.ClassName`, within the `<style>` element, the color has changed from a color of `black` into the hexcode, `#FFFFFF`, which shows that the color of the class `.ClassName` has changed from black to white in the `<style>` element.

## Solution
From the Problem above, we need to change `black` from the `color` element in the `<style>` element, into the given hex codes from the table based on the colour that the class needs. For example, the class `.red-text` clearly needs their `color` element to be changed from `black` into a red colour, where the table gives us the hex code of `#FF0000` for the colour red, which is shown below.

### Before changing `color` of class `.red-text`
```html
<style>
  .red-text {
    color: black;
}
</style>
```

### After changing `color` of class `.red-text`
```html
<style>
.red-text {
  color: #FF0000; /* Color has changed into red when we used this hex code from the table*/
}
</style>
```

### Final Solution
After changing `color` of other classes, the final solution reveals that we have changed the `color` element of these text classes with hex codes shown below:
```html
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

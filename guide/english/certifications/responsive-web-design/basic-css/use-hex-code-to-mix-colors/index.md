---
title: Use Hex Code to Mix Colors
---
## Use Hex Code to Mix Colors

## Problem
```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>
```

## Objective
Within the `<style>` element, we need to change black within the `color` element in these classes:
* `.red-text`
* `.green-text`
* `.dodger-blue-text`
* `.orange-text`

We are provided with a table where the table shows the hex code of the colours for these required classes shown here:

| Colour | Hex Code |
|:--------:|:-----:|
|Dodger Blue|#1E90FF
|Green|#00FF00
|Orange|#FFA500
|Red|#FF0000

## Example
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

We will follow the same steps for the rest of the classes shown here:

### Before changing `color` of other classes
```html
<style>
  .green-text {
    color: black; 
}
  .dodger-blue-text {
    color: black; 
} 
  .orange-text {
    color: black; 
}  
</style>
```

### After changing `color` of other classes
```html
<style>
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
```

## Final Solution
Hence, the final solution reveals that we have changed the `color` element of these text classes with hex codes shown below:
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

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

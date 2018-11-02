---
title: Override All Other Styles by using Important
---
## Override All Other Styles by using Important

You can override all other styles in CSS by using `!important`.

This override is considered the most important and takes precedence over the rest.

The list of most important to least important is as follows:
``` 
1. important (!important) 
2. inline styles 
3. id declarations 
4. class declarations 
```

Here is an example of how to write/apply !important:
```css
color: black !important;
```
To apply these in context and see `!important` take precedence, here is an example:

```html
<style>
  body {
    font-family: Helvetica;
    color: purple;
  }
  #violet-text {
    color: violet;
  }
  .black-text {
    color: black !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="violet-text" class="black-text blue-text" style="color: black">Example Text</h1>
```

This result would end in `Example Text` being black because of `!important` added to `color: black`. 

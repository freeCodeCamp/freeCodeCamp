---
title: Override Styles in Subsequent CSS
---
## Override Styles in Subsequent CSS

The most important bit to remember when wanting to Override Styles in Subsequent CSS is the order the classes are created.

The last updated style will take precedent over the previously written classes.

For example:
```html
<style>
  body {
    color: purple;
  }
  .red-text {
    color: red;
  }
  .blue-text {
    color: blue;
  {
</style>
```

Now, when you create any text in the `body`, it will have the text color `purple` assigned to it.

To begin experimenting with the override process, you can now add the `"red-text"` class to see the results.

Using the format above, the text below will override the previously `purple` font color with `red`.

```html
<h1 class="red-text">Example</h1>
```

When you want to add several classes, you can use this format:

```html
<h1 class="class-name1 class-name2 class-name3">Example</h1>
```

You can now add the last class created above (`"blue-text"`) to the same example above to see the results.

```html
<h1 class="red-text blue-text">Example</h1>
```

This will automatically pick the last class created in your styles section, which in this case was `"blue-text"`.

Even if you apply the 1st class `red-text` behind the 2nd class `blue-text`, the override process will pick the last created class. In this case, that class is the `blue-text`.

So, for example:

```html
<h1 class="blue-text red-text">Example</h1>
```

This will still display a `blue` font color because of the ordering in the styles section. 

The `blue-text` class was created last, torwards of the bottom (`</style>`). 

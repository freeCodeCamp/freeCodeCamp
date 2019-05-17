---
title: Specify How Fonts Should Degrade
---
## Specify How Fonts Should Degrade

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
We need to apply the ```monospace``` font to the ```h2``` element, so that it now has two fonts - ```Lobster``` and ```monospace```. After, we need to comment out that import of the ```Lobster``` font(using the HTML comments you learned before) from Google Fonts so that it isn't available anymore.

### Solution

To the property ```font-family``` in selector ```h2```, in addition to ```Lobster``` font we need to add ```monospace```:

```css
h2 {
    font-family: Lobster, monospace;
  }
```

After this, we need to comment  import of the ```Lobster``` font:

```css
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```

select all import and ```ctrl+/```:

```css
<!-- <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"> -->
```

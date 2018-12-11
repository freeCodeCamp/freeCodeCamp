---
title: Add Flex Superpowers to the Tweet Embed
---
## Add Flex Superpowers to the Tweet Embed

Building on the <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/use-display-flex-to-position-two-boxes/index.md' target='_blank' rel='nofollow'>previous challenge</a>, you will need to add the property to the right selectors. Here the trick is identifying the right selector then all you need to add the <i>display: flex;</i> property.

The header will ensure the picture, name, handle, and follow buttons get repositioned horizonatally.

```CSS
header {
    display: flex;
}
```
Aligns the name and handle to look as one sentence.
```CSS
header .profile-name {
    display:flex;
    margin-left: 10px;
  }
```
Adding the property to the follow button along with the margin will center the button to the right size.

```CSS
header .follow-btn {
    display:flex;
    margin: 0 0 0 auto;
  }
```
The same idea is used on the footer elements.

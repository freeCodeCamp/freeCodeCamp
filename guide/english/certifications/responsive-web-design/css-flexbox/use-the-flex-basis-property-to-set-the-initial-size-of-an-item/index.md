---
title: Use the flex-basis Property to Set the Initial Size of an Item
---
## Use the flex-basis Property to Set the Initial Size of an Item

You can achieve the same effect as the previous two challenges with `flax-basis`.
After setting sthe appropiate values, you will see `#box-2` being bigger than `#box-1` before any shrinking or grow is applied.

```css
#box-1 {
  background-color: dodgerblue;
  height: 200px;
  flex-basis: 10em;
}

#box-2 {
  background-color: orangered;
  height: 200px;
  flex-basis: 20em;
}
```

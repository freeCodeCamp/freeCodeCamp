---
title: Use the align-self Property
---
## Use the align-self Property

The main take away from this challege should be the fact that `float`, `clear`, and `vertical-align` do not work on flex items. This is why we have the flex property `align-self` which accepts the same values as `align-items` and will take precedence over any values set by the later.

This means `align-self: center;` would work while `align-items: center;` would not.

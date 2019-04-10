---
title: Import a Default Export
---
## Import a Default Export

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Importing an export default is almost the same as importing a normal export; you just don't need the curly braces to define the name of what you're importing from the file!

## Hint 1:

Fill in the blanks: `import _ from "file-name"`. Plug in your module's name (which is `subtract`) into `_`, and put `"math-functions"` into `"file-name"`.

## Spoiler Alert - Solution Ahead!

## Solution:

```javascript
"use strict";
import subtract from "math_functions";
subtract(7,4);
```

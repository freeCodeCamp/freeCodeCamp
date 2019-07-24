---
title: Understand the Differences Between import and require
---
# Understand the Differences Between import and require

---
## Problem Explanation

Let's clarify: `require()` loads the entire file and its components (functions, variables), while `import _ from` allows you to hand-pick what components you want. 

In this lesson, you are tasked at importing the function `capitalizeStrings()`, which comes from the file `"string-functions"`.


---
## Hints

### Hint 1

Fill in the blanks: `import { function_name } from "file_name"`. Your function name is `capitalizeStrings`, and your file name is `"string-functions"`.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
"use strict";
import { capitalizeString } from "string-functions";
capitalizeString("hello!");
```
</details>

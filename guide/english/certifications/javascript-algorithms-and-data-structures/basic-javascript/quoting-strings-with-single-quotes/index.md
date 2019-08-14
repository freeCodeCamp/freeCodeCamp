---
title: Quoting Strings with Single Quotes
---
# Quoting Strings with Single Quotes

---
## Problem Explanation
String values in JavaScript may be written with single or double quotes, so long as you start and end with the same type of quote. Unlike some languages, single and double quotes are functionally identical in JavaScript.

```
"This string has \"double quotes\" in it"
```

The value in using one or the other has to do with the need to escape quotes of the same type. If you have a string with many double quotes, this can be difficult to read and write. Instead, use single quotes:

```
'This string has "double quotes" in it. And "probably" lots of them.'
```

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```

</details>
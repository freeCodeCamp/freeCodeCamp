---
id: 587d7b8c367417b2b2512b57
title: Use * to Import Everything from a File
challengeType: 1
---

## Description
<section id='description'>
Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the <code>import * as</code> syntax.
Here's an example where the contents of a file named <code>"math_functions"</code> are imported into a file in the same directory:

```js
import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

And breaking down that code:

```js
import * as object_with_name_of_your_choice from "file_path_goes_here"
object_with_name_of_your_choice.imported_function
```

You may use any name following the <code>import * as </code>portion of the statement. In order to utilize this method, it requires an object that receives the imported values (i.e., you must provide a name). From here, you will use the dot notation to call your imported values.
</section>

## Instructions
<section id='instructions'>
The code in this file requires the contents of another file, <code>"capitalize_strings"</code>, that is in the same directory as the current file. Add the appropriate <code>import * as</code> statement to the top of the file.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Properly uses <code>import * as</code> syntax.
    testString: assert(code.match(/import\s+\*\s+as\s+[a-zA-Z0-9_$]+\s+from\s*"\s*capitalize_strings\s*"\s*;/gi), 'Properly uses <code>import * as</code> syntax.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
"use strict";
```

</div>

### Before Test
<div id='js-setup'>

```js
self.require = function(str) {
  if (str === 'capitalize_strings') {
    return {
      capitalize: str => str.toUpperCase(),
      lowercase: str => str.toLowerCase()
    }
  }
};
```

</div>

</section>

## Solution
<section id='solution'>

```js
import * as capitalize_strings from "capitalize_strings";
```

</section>

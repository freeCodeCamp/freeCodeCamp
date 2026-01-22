---
id: 587d7fb4367417b2b2512bfd
title: Add Keywords to Your package.json
challengeType: 2
forumTopicId: 301526
dashedName: add-keywords-to-your-package-json
---

# --description--

The `keywords` field is where you can describe your project using related keywords. Here's an example:

```json
"keywords": [ "descriptive", "related", "words" ],
```

As you can see, this field is structured as an array of double-quoted strings.

# --instructions--

Add an array of suitable strings to the `keywords` field in the package.json file of your project.

One of the keywords should be "freecodecamp".

# --hints--

package.json should have a valid "keywords" key

```js
fetch(code + '/_api/package.json')
  .then(response => response.json())
  .then(
    data => {
      assert.exists(data.keywords, '"keywords" is missing');
    },
    error => {
      throw new Error(error.message || error.responseText);
    }
  );
```

"keywords" field should be an Array

```js
fetch(code + '/_api/package.json')
  .then(response => response.json())
  .then(
    data => {
      assert.isArray(data.keywords, '"keywords" is not an array');
    },
    error => {
      throw new Error(error.message || error.responseText);
    }
  );
```

"keywords" should include "freecodecamp"

```js
fetch(code + '/_api/package.json')
  .then(response => response.json())
  .then(
    data => {
      assert.include(
        data.keywords,
        'freecodecamp',
        '"keywords" does not include "freecodecamp"'
      );
    },
    error => {
      throw new Error(error.message || error.responseText);
    }
  );
```

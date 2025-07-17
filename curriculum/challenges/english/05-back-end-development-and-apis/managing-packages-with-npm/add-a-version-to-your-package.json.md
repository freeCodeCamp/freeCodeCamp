---
id: 587d7fb4367417b2b2512bff
title: Add a Version to Your package.json
challengeType: 2
forumTopicId: 301525
dashedName: add-a-version-to-your-package-json
---

# --description--

A `version` is one of the required fields of your package.json file. This field describes the current version of your project. Here's an example:

```json
"version": "1.2.0",
```

# --instructions--

Add a `version` to the package.json file of your project.

# --hints--

package.json should have a valid "version" key

```js
fetch(code + '/_api/package.json')
  .then(response => response.json())
  .then(
    data => {
      assert.exists(data.version, '"version" is missing');
    },
    error => {
      throw new Error(error.message || error.responseText);
    }
  );
```

---
id: bd7158d8c443edefaeb5bdff
title: Request Header Parser Microservice
challengeType: 4
forumTopicId: 301507
---

::import{component="Description" from="../../../imported-files/markdown-exports.md"}

# --description--

::use{component="Description"}

[1]: https://request-header-parser-microservice.freecodecamp.rocks/
[2]: https://github.com/freeCodeCamp/boilerplate-project-headerparser/
[3]: https://repl.it/github/freeCodeCamp/boilerplate-project-headerparser/

# --hints--

You should provide your own project, not the example URL.

```js
(getUserInput) => {
  assert(
    !/.*\/request-header-parser-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

A request to `/api/whoami` should return a JSON object with your IP address in the `ipaddress` key.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.ipaddress && data.ipaddress.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A request to `/api/whoami` should return a JSON object with your preferred language in the `language` key.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.language && data.language.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

A request to `/api/whoami` should return a JSON object with your software in the `software` key.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/api/whoami').then(
    (data) => assert(data.software && data.software.length > 0),
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --seed--

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

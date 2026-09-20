---
id: bd7158d8c443edefaeb5bdff
title: Request Header Parser Microservice
challengeType: 4
forumTopicId: 301507
dashedName: request-header-parser-microservice
---

# --description--

Build a full-stack JavaScript app that is functionally similar to this: <a href="https://request-header-parser-microservice.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://request-header-parser-microservice.freecodecamp.rocks/</a>. Working on this project will involve you writing your code using one of the following methods:

-   Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-headerparser/" target="_blank" rel="noopener noreferrer nofollow">this GitHub repo</a> and complete your project locally.
-   Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

# --hints--

You should provide your own project, not the example URL.

```js
  assert(
    !/.*\/request-header-parser-microservice\.freecodecamp\.rocks/.test(
      code
    )
  );
```

A request to `/api/whoami` should return a JSON object with your IP address in the `ipaddress` key.

```js
  const response = await fetch(code + '/api/whoami');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert(data.ipaddress && data.ipaddress.length > 0);
```

A request to `/api/whoami` should return a JSON object with your preferred language in the `language` key.

```js
  const response = await fetch(code + '/api/whoami');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert(data.language && data.language.length > 0);
```

A request to `/api/whoami` should return a JSON object with your software in the `software` key.

```js
  const response = await fetch(code + '/api/whoami');
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const data = await response.json();
  assert(data.software && data.software.length > 0);
```


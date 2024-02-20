---
id: 587d8249367417b2b2512c3f
title: Festlegen einer Inhaltssicherheitsrichtlinie mit helmet.contentSecurityPolicy()
challengeType: 2
forumTopicId: 301585
dashedName: set-a-content-security-policy-with-helmet-contentsecuritypolicy
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

Diese Aufgabe hebt eine vielversprechende neue Verteidigung hervor, die das Risiko und die Auswirkungen vieler Arten von Angriffen in modernen Browsern erheblich reduzieren kann. Durch das Einrichten und Konfigurieren einer Inhaltssicherheitsrichtlinie kannst du verhindern, dass etwas Unerwünschtes in deine Seite eingefügt wird. Dadurch wird deine App vor XSS-Schwachstellen, unerwünschtem Tracking, bösartigen Frames und vielem mehr geschützt. CSP funktioniert durch die Festlegung einer Liste zulässiger Inhaltsquellen, die als vertrauenswürdig gelten. You can configure them for each kind of resource a web page may need (scripts, stylesheets, fonts, frames, media, and so on...). There are multiple directives available, so a website owner can have a granular control. Siehe HTML 5 Rocks, KeyCDN für weitere Details. Unfortunately CSP is unsupported by older browsers.

By default, directives are wide open, so it’s important to set the defaultSrc directive as a fallback. Helmet unterstützt sowohl defaultSrc- als auch default-src-Benennungsstile. Der Fallback gilt für die meisten nicht spezifizierten Richtlinien.

# --instructions--

Verwende in dieser Übung `helmet.contentSecurityPolicy()`. Konfiguriere es, indem du ein `directives`-Element hinzufügst. In the object, set the `defaultSrc` to `["'self'"]` (the list of allowed sources must be in an array), in order to trust only your website address by default. Also set the `scriptSrc` directive so that you only allow scripts to be downloaded from your website (`'self'`), and from the domain `'trusted-cdn.com'`.

Hint: in the `'self'` keyword, the single quotes are part of the keyword itself, so it needs to be enclosed in double quotes to be working.

# --hints--

Die helmet.contentSecurityPolicy()-Middleware sollte korrekt eingebaut werden

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'csp');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

Deine csp-Konfiguration ist nicht korrekt. defaultSrc sollte ["self'"] und scriptSrc sollte ["'self'", 'trusted-cdn.com'] sein

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      var cspHeader = Object.keys(data.headers).filter(function (k) {
        return (
          k === 'content-security-policy' ||
          k === 'x-webkit-csp' ||
          k === 'x-content-security-policy'
        );
      })[0];
      assert.equal(
        data.headers[cspHeader],
        "default-src 'self'; script-src 'self' trusted-cdn.com"
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```

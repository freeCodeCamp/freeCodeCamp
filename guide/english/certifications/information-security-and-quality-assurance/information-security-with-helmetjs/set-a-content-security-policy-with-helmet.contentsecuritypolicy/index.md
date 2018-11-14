---
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
---
## Set a Content Security Policy with helmet.contentSecurityPolicy()

### Hint

- You want your `app` to `use` helmet's `contentSecurityPolicy()` method.
- Be sure to give the `directives` object in the configuration a `defaultSrc` and `scriptSrc`.

### Solution

- In the `myApp.js` file, add `app.use(helmet.contentSecurityPolicy({ directives: { defaultSrc: ["'self'"], scriptSrc: ["'self'", "trusted-cdn.com"] }} ))` under the tenth instruction.

**Note:** Be sure to submit the link to the **live demo** of your project.

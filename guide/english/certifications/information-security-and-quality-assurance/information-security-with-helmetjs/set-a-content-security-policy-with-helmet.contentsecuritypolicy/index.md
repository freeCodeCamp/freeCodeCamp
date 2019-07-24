---
title: Set a Content Security Policy with helmet.contentSecurityPolicy()
---
# Set a Content Security Policy with helmet.contentSecurityPolicy()


---
## Hints

### Hint 1
You want your `app` to `use` helmet's `contentSecurityPolicy()` method.

### Hint 2
Be sure to give the `directives` object in the configuration a `defaultSrc` and `scriptSrc`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

In the `myApp.js` file, add `app.use(helmet.contentSecurityPolicy({ directives: { defaultSrc: ["'self'"], scriptSrc: ["'self'", "trusted-cdn.com"] }} ))` under the tenth instruction.

**Note:** Be sure to submit the link to the **live demo** of your project.

</details>
---
title: Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()
---
## Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()

### Hint

- You want to use helmet's `xssFilter()` method on each request.

### Solution

- In the `myApp.js` file, add `app.use(helmet.xssFilter({}));` under the fourth instruction.

**Note:** Be sure to submit the link to the **live demo** of your project.

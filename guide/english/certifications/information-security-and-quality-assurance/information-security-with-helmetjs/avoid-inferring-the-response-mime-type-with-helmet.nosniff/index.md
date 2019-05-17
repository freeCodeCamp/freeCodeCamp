---
title: Avoid Inferring the Response MIME Type with helmet.noSniff()
---
## Avoid Inferring the Response MIME Type with helmet.noSniff()

### Hint

- You want your `app` to `use` helmet's `noSniff()` method on each request.

### Solution

- In the `myApp.js` file add `app.use(helmet.noSniff());` under the fifth instructions.

**Note:** Be sure to submit the link to the **live demo** of your project.

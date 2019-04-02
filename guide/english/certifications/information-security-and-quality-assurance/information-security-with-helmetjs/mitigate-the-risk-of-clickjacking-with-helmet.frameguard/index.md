---
title: Mitigate the Risk of Clickjacking with helmet.frameguard()
---
## Mitigate the Risk of Clickjacking with helmet.frameguard()

### Hint

- You want your `app` to `use` the `helmet.frameguard()` method on each request.
- Don't forget to pass the appropriate configuration into the method.

### Solution

- In the `myApp.js` file add `app.use(helmet.frameguard({action: 'deny'}));` under the third instructions.

**Note:** Be sure to submit the link to the **live demo** of your project.

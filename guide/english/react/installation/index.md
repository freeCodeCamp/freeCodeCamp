---
title: Installation
---

## Installing React
There are several different methods to get started with using React. It will depend on the web application size, complexity, and environment to determine the exact approach that is best for you.

For a quick and easy method of adding React to your website you could just embed the React library in your website using a `<script>` tag.
```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

How ever with the above approach you may feel limited in how far you can take React. This is where the use of toolchain is the preferred approach.

For user learning React, it is generally recommended to use the beginner friendly [Create React App](https://github.com/facebookincubator/create-react-app)
```bash
npx create-react-app my-app
cd my-app
npm start
```

This will set up your development environment so that you can use the latest JavaScript features, provide a great developer experience, and optimize your application for production.

`npm start` will start up a development server which allows live reloading.

After you finish your project and are ready to deploy your application to production, you can just use `npm run build` to create an optimized build of your app in the `build` folder.

You can find more toolchains which support server-rendered website or static content-oriented website at [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html).

#### More Information
- [Getting Started - React Official Site](https://reactjs.org/docs/getting-started.html)

---
title: Installation
---

## Installing React
There are several different methods to get started with using React<sup>1</sup>. It will depend on the web application size, complexity, and environment to determine the exact approach that is best for you.

For a quick and easy method of adding React to your website you could just embed the React library in your website using a `<script>` tag.
```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

However, with the above approach, you may feel limited in how far you can take React. This is where the use of toolchain is the preferred approach, with the more practical and productive [Create React App](https://github.com/facebookincubator/create-react-app):

```bash
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start
```

This will set up your development environment so that you can use the latest JavaScript features, provide a great developer experience, and optimize your application for production. It sets up Webpack as a bundler, and Jest for testing.

Another option is using the package `npx` which doesn't require you to install the package `create-react-app` before using it. So you can use it without installing it which is helpful for the future not to have too many packages installed on your machine.

```bash
npm install -g npx
npx create-react-app my-app
```

- `npm start` will start up a development server which allows live reloading.

- After you finish your project and are ready to deploy your application to production, you can just use `npm run build` to create an optimized build of your app in the `build` folder.


You can find more toolchains which support server-rendered website or static content-oriented website at [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html).


### Boilerplate Projects
There are many well maintained and powerful React boilerplate starter projects in the open source ecosystem. If Create-React-App doesn't quite fit your needs but you don't want to learn all the intricacies of webpack before starting a React project, these can be a big help. 

*Some popular boilerplates:*
- [React Boilerplate](https://www.reactboilerplate.com/): Includes support for i18n, styled components, dynamic reducers and testing. The powerhouse of the boilerplate world.
- [React-Starter-Kit](https://github.com/kriasoft/react-starter-kit): Graphql, Node, express and more. 
- [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example): Redux-form and mocha are some of the highlights of this one. 

#### Sources
[1. The React tutorial on installing](https://reactjs.org/docs/installation.html)

#### More Information
- [Getting Started - React Official Site](https://reactjs.org/docs/getting-started.html)
- [Create React App repository](https://github.com/facebookincubator/create-react-app#create-react-app-)
- [npm start command](https://docs.npmjs.com/cli/start)

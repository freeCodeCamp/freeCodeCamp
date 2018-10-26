---
title: Installation
---
## Installing React
### Creating a new React project
You could just embed the React library in your webpage like so<sup>2</sup>:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/cjs/react.production.min.js"></script>
```

Smart programmers want to take the more practical and productive way: [Create React App](https://github.com/facebookincubator/create-react-app)
```bash
npm install -g create-react-app
create-react-app my-app

cd my-app
npm start
```

This will set up your development environment so that you can use the latest JavaScript features, provide a nice developer experience, and optimize your app for production.

`npm start` will start up a development server which allows live reloading<sup>3</sup>.

After you finish your project and are ready to deploy your App to production, you can just use
`npm run build`
to create an optimized build of your app in the `build`folder.

### Boilerplate Projects
There are many well maintained and powerfula React boilerplate starter projects in the open source ecosystem. If CRA doesn't quite fit your needs but you don't want to learn all the intricacies of webpack before starting a React project, these can be a big help. 

*Some popular boilerplates:*
- [React Boilerplate](https://www.reactboilerplate.com/). Includes support for i18n, styled components, dynamic reducers and testing. The powerhouse of the boilerplate world.
- [React-Starter-Kit](https://github.com/kriasoft/react-starter-kit). Graphql, Node, express and more. 
- [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example). Redux-form and mocha are some of the highlights of this one. 

#### Usefull links
[Create React App repository](https://github.com/facebookincubator/create-react-app#create-react-app-)

#### Sources
[1. The React tutorial on installing](https://reactjs.org/docs/installation.html)
[2. Link to the React minimal JavaScript library on cdnjs.org](https://cdnjs.com/libraries/react)
[3. npm start command](https://docs.npmjs.com/cli/start)

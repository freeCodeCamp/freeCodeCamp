---
title: Installation
---
## Installing React
### Creating a new React project
You could just embed the React library in your webpage like so<sup>2</sup>:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/cjs/react.production.min.js"></script>
```

If you'd like to get up and running quickly, without spending much time on setup, a popular option is to use [Create React App](https://github.com/facebookincubator/create-react-app)
```bash
npm install -g create-react-app
create-react-app my-app

cd my-app
npm start
```

This will set up your development environment so that you can use the latest JavaScript features, provide a nice developer experience, and optimize your app for production. It sets up Webpack as a bundler, and Jest for testing.

`npm start` will start up a development server which allows live reloading<sup>3</sup>.

After you finish your project and are ready to deploy your App to production, you can just use
`npm run build`
to create an optimized build of your app in the `build`folder.

#### Usefull links
[Create React App repository](https://github.com/facebookincubator/create-react-app#create-react-app-)

#### Sources
[1. The React tutorial on installing](https://reactjs.org/docs/installation.html)
[2. Link to the React minimal JavaScript library on cdnjs.org](https://cdnjs.com/libraries/react)
[3. npm start command](https://docs.npmjs.com/cli/start)

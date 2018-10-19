# React Router for beginners

# Installation
React Router has been broken into three packages: `react-router`, `react-router-dom`, and `react-router-native`.

You should almost never have to install react-router directly. That package provides the core routing components and functions for React Router applications. The other two provide environment specific (browser and react-native) components, but they both also re-export all of react-router's exports.

We are building a website (something that will be run in browsers), so we will install react-router-dom.

`npm install --save react-router-dom`

# The Router
When starting a new project, you need to determine which type of router to use. For browser based projects, there are <BrowserRouter> and <HashRouter> components. The `<BrowserRouter>` should be used when you have a server that will handle dynamic requests (knows how to respond to any possible URI), while the <HashRouter> should be used for static websites (where the server can only respond to requests for files that it knows about).

Usually it is preferable to use a `<BrowserRouter>`, but if your website will be hosted on a server that only serves static files, then the `<HashRouter>` is a good solution.

For our project, we will assume that the website will be backed by a dynamic server, so our router component of choice is the `<BrowserRouter>`.

# Import Statement

```javascript

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

```
## IndexRoute and Links
Now, let’s add navigation to get us between pages.

To do this, we will be using the `<Link>` component. `<Link>` is similar to using an html anchor tag.

From the docs:

The primary way to allow users to navigate around your application. `<Link>` will render a fully accessible anchor tag with the proper href.
To do this, let’s first create a Nav component. Our Nav component will contain `<Link>` components, and will look like this:

```javascript
const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/address'>Address</Link>
  </div>
)
```

## Handling Route Updates
Once you've clicked on a Link, it needs to take you your destination. This involves updating the URI, analyzing it, and then taking the correct action based on the updated state of your browser tab.

To do this, we will be using the `<Router>` and `<Route>` components. Think of the Router as your websites own mini internet and each Route is a web page. When you click a `<Link>`, it's basically like click an anchor that navigates within the context of your tab. But, much like the pioneers of another era, first we have to setup the internet and tell it what URI's match to what content.

```javascript
<Router>
  <div>
      <Route exact path="/" component={Home} />
      <Route path="/address" component={Address} />
  </div>
</Router>
```

So now when the user clicks on the Nav component links, Home or Address, and the tab moves to URI/ or URI/address, the `<Router>` will go down the right component tree, and return the correct contents, just like if you cURL Google, it'll send you back the contents of the page.

## Rendering Your App
Now we have all the pieces, and they just need to come together. My experience (although YMMV), is that folks often throw their routes into a separate file and import them into their root JavaScript file, where they also are importing their router of choice (i.e. BrowserRouter, HashRouter). It often ends up looking something like this: 

```javascript
// index.js
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from './routes';
ReactDOM.render(
  <Provider store={store}>
    <Router>
        {routes}
    </Router>
), document.getElementById('root'));
<Router>

// routes.js
import Home from './home.js'
import Address from './address.js'
const routes = (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/address" component={Address} />
  </div>
)
```
You then just have to create each of those components, drop in the Nav, and you can jump between pages all day. There's of course a ton more to do on top of that - you may want to add Redux, you might want to be generating history with your actions, you might want loading between your jumps when they're taking a while...and that's where the adventure really begins.

# Useful References
- [React-Router](https://reacttraining.com/react-router/)
- [React-Router w/ Redux](https://github.com/reactjs/react-router-redux)
- [React-Router History](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md)

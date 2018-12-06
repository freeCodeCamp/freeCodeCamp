---
title: React Router
---
## React Router

### Installation

React Router has been broken into three packages: `react-router`, `react-router-dom`, and `react-router-native`.

You should almost never have to install react-router directly. That package provides the core routing components and functions for React Router applications. The other two provide environment specific (browser and react-native) components, but they both also re-export all of react-router's exports.

We are building a website (something that will be run in browsers), so we will install react-router-dom.

`npm install --save react-router-dom`

### The Router
When starting a new project, you need to determine which type of router to use. For browser based projects, there are <BrowserRouter> and <HashRouter> components. The `<BrowserRouter>` should be used when you have a server that will handle dynamic requests (knows how to respond to any possible URI), while the <HashRouter> should be used for static websites (where the server can only respond to requests for files that it knows about).

Usually it is preferable to use a `<BrowserRouter>`, but if your website will be hosted on a server that only serves static files, then the `<HashRouter>` is a good solution.

For our project, we will assume that the website will be backed by a dynamic server, so our router component of choice is the `<BrowserRouter>`.

### Import Statement
```javascript
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
```

### IndexRoute and Links

Now, let’s add navigation to get us between pages.

To do this, we will be using the `<Link>` component. `<Link>` is similar to using an html anchor tag.

From the docs:

The primary way to allow users to navigate around your application. `<Link>` will render a fully accessible anchor tag with the proper href.
To do this, let’s first create a Nav component. Our Nav component will contain `<Link>` components, and will look like this:

```javascript
const Nav = () => (
  <div>
    <Link to='/'>Home</Link>
    <Link to='/address'>Address</Link>
  </div>
)
```

### Handling Route Updates
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

### Rendering Your App
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

### NavLink, Redirect and Programmatic redirects
In addition to using `<Link>` for navigating around your application, `<NavLink>` is yet another approach. 
  
The difference between `<Link>` and `<NavLink>` is that, if you inspect the element with `<NavLink>` you will find a class set to **active**. This is useful when you would like to apply some custom styles to your active links.

```javascript
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div>
    <NavLink to='/'>Dashboard</NavLink>
    <NavLink to='/services'>Services</NavLink>
  </div>
)
```

`<Redirect>` tag from `react-router-dom` is super useful in cases where you want to redirect your users to certain parts of your application. For example, you would like the users to see the blog contents component only when they have logged in and not otherwise. You can set it up like this:

```javascript
import { Redirect } from 'react-router'

<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/blogContents"/>
  ) : (
    <SignUp/>
  )
)}/>
```

React also provides `programmatic redirects`. It means you can programmatically redirect users to a url in your app based on a click of a button or a form submission. For any component the react router loads, it attaches some extra information to the `props` object which can be inspected in the console. One important property is the `history` property which keeps track of history and you can push a user to another location by using this property. For example:

```javascript
const Home = (props) => {
  console.log(props); // This will show you the property on props object the router provides automatically
  setTimeout(() => {
    props.history.push('/about'); // This will redirect the user from "home" component to "about" component after 3 sec 
  }, 3000)
}
```

### React Router with redux

The main thing that many developers face is how to integrate react router with redux to pass down both the store as well as the props from the browser router to enhance the functionality of the component.

A basic example is as follows:

```jsx
  const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      {/* Making a router in the main App.js file will facilitate the passing of props from the Provider and the Router  */}
   </Router>
   </Provider>
)
```

### Resources
- [React-Router](https://reacttraining.com/react-router/)
- [React-Router w/ Redux](https://github.com/reactjs/react-router-redux)
- [React-Router History](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md)
- [Redux-with-react Router](https://redux.js.org/advanced/usagewithreactrouter)


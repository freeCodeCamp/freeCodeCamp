---
title: React Router
---
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

The primary way to allow users to navigate around your application. <Link> will render a fully accessible anchor tag with the proper href.
To do this, let’s first create a Nav component. Our Nav component will contain `<Link>` components, and will look like this:

```javascript

const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/address'>Address</Link>
  </div>
)
```

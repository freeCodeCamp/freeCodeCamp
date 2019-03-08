---
title: Handling Data with Props in React
---

## Handling Data with Props in React

Props provide a way for passing and accessing data in React components.

Data is passed to React components as an attribute in JSX.

```javascript
<MyComponent someAttribute={data.value} />
```

In JSX the curly braces indicate a JavaScript expression which must return a value. The passed data is accessed via props in the defined component.

```javascript
const MyComponent = props => {
  <p>{props.someAttribute}</p>
};
```

Now let’s walk through an example in CodePen.

### Getting Started

If you haven't already, go ahead and sign up for a [free CodePen account](https://codepen.io/accounts/signup/user/free).

Create a new pen by selecting 'Create' > 'New Pen' next to your CodePen profile picture.

Next we'll add the appropriate libraries to render our React components.

Open your JavaScript settings pane by selecting 'Settings' > 'JavaScript'. Select 'Babel' under 'JavaScript Preprocessor'.

Next let's add our React libraries. Under 'External JavaScript' select the 'Quick-add' drop-down and add both the 'React' and 'React DOM' libraries.

### Using Props

First lets define some dummy data in our JavaScript file.

```javascript
const blogData = {
  title: 'My blog title',
  body: 'Arcu viverra dolor eros interdum, quis nonummy accusantium at lorem luctus iaculis.'
};
```

Next let’s define our blog components.

```javascript
const Heading = () => {
  return (
    <h1>My Blog</h1>
  );
};

const Blog = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};
```

Noticed how we used the props object to render the title and body values that will be passed to the Blog component. Props is read-only or immutable, so we don’t have to worry about changing the props values.

Before we write our App component, we need to protect our component by defining the variable type that will passed down to each prop. We will define this using React.PropTypes. Add the following to your JavaScript file.

```javascript
Blog.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string
};
```
Here we are defining that the the data passed down to our Blog component will be strings for both title and body. Check out [React’s documentation](https://reactjs.org/docs/typechecking-with-proptypes.html) for a list of all propTypes.

Now let’s put this together in an app component and pass down our data.

```javascript
const App = props => {
  return (
    <div>
      <Heading />
      <Blog title={blogData.title} body={blogData.body} />
      <Blog title={blogData.title} body={blogData.body} />
      <Blog title={blogData.title} body={blogData.body} />
    </div>
  );
};
```
Finally, let’s render our app (be sure to add a root ```<div>``` tag to the HTML file ):

```javascript
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
Now you should be seeing our blog components rendered with the dummy data passed down via props.

You can see a CodePen example [here](https://codepen.io/trey-davis/pen/MvdZGX).

### Destructuring props

Often, when you open a Component `.js` file, it's nice to know exactly what props this component takes. You can do this by using the `propTypes` above -- or you can destructure your props already when defining your stateless component. 

Using the Blog component from above, it would look like this:

```javascript
const Blog = ({title, body)} => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
```

Notie how we saved a few characters by omitting `props.xx` - and we can quickly see that the component requires a title and a body. Neat!

Be aware that this uses ES6 syntax.

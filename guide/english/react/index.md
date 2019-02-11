---
title: React
---
# React

React is a JavaScript library for building user interfaces. It was voted the most loved in the "Frameworks, Libraries, and Other Technologies" category of Stack Overflow's 2017 Developer Survey.<sup>1</sup>

React is a JavaScript library and React applications built on it run in the browser, NOT on the server. Applications of this kind only communicate with the server when necessary, which makes them very fast compared to traditional websites that force the user to wait for the server to re-render entire pages and send them to the browser.

React is used for building user interfaces - what the user sees on their screen and how they interact with your web app. This interface is split up into components, instead of having one huge page you break it up into smaller pieces known as components. In more general terms, this approach is called Modularity.

- It's declarative: React uses a declarative paradigm that makes it more readable. 
- It's efficient: React computes the minimal set of changes necessary to keep your DOM up-to-date. 
- It's flexible: React allows the user to render one or many components to the browser.
- And it's compatible: React works well with many popular libraries and frameworks.

## Why learn React?

1. React involves Composition that is lots of components wrapping up the functionalities into an encapsulated container.
Many popular websites use React implementing the MVC architectural pattern. Facebook (Partially), Instagram (Completely), Khan Academy (Partially), Codecademy (Partially), New York Times (Partially), Yahoo Mail (Completely), Dropbox's new photo and video gallery app Carousel (Completely) are the popular websites known to be using React.
How are these large applications built using React? The simple answer is by building small applications or components.
Example:

```jsx
const Component2 = () => {
  return (
    <div></div>
  );
};
const Component3 = () => {
  return (
    <div></div>
  );
};
const Component1 = () => {
  return (
    <div>
      <Component2 />
      <Component3 />
    </div>
  );
};

ReactDOM.render(
  <Component1 />, 
  document.getElementById("app")
);
```

2. React is Declarative for most part in which we are concerned more with What to do rather than How to do a specific task. Declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow.
Declarative programming comes with certain advantages such as reduced side effects(occurs when we modify any state or mutating something or making an API request), minimizing mutability(mostly abstracted), enhanced readability, less bugs.

3. Unidirectional dataflow. UI in React is actually the function of the state that means as the state updates it updates the UI as well. So our UI progresses as the state changes.

## Advantages of React

Some reasons to use React are:

1. Fast. Apps made in React can handle complex updates and still feel quick and responsive.
2. Modular. Instead of writing large, dense files of code, you can write many smaller, reusable files. React's modularity can be a beautiful solution to JavaScript's [maintainability problems](https://en.wikipedia.org/wiki/Spaghetti_code).
3. Scalable. Large programs that display a lot of changing data are where React performs best.
4. Flexible. You can use React for interesting projects that have nothing to do with making a web app. People are still figuring out React's potential. [There's room to explore](https://medium.mybridge.co/22-amazing-open-source-react-projects-cb8230ec719f).

### Virtual DOM

React's magic comes from it's interpretation of the DOM and it's strategy for creating UIs.

React uses the virtual DOM to render an HTML tree virtually first, and then, every time a state changes and we get a new HTML tree that needs to be taken to the browser’s DOM, instead of writing the whole new tree React will only write the difference between the new tree and the previous tree (since React has both trees in memory). This process is known as Tree Reconciliation.

### Reconciliation

React has a smart diffing algorithm that it uses to only regenerate in its DOM node what actually needs to be regenerated while it keeps everything else as is. This diffing process is possible because of React’s virtual DOM.

Using the virtual DOM, React keeps the last DOM version in memory and when it has a new DOM version to take to the browser, that new DOM version will also be in memory, so React can compute the difference between the new and the old versions.

React will then instruct the browser to update only the computed diff and not the whole DOM node. No matter how many times we regenerate our interface, React will take to the browser only the new “partial” updates.

## React from Scratch

Would you like to get started learning the basics of React without getting bogged down creating a development environment?
Chances are that if you are new to web development that setting up a development environment can leave you feeling a little intimidated when you are just trying to learn React or just learn about React for the first time.

In this article we are going to look at how we can get started with React using only a text editor and a browser and nothing else.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI" target="_blank">
  <img src="https://img.youtube.com/vi/100pKUE3OPI/0.jpg" alt="Watch Video Here" width="240" height="180" border="10" />
</a>

### 1 — Set Up Boiler Plate Code with Emmet

Let’s get started with step 1. We’ll begin with a file in our browser called “index.html”. We’ll begin with the boiler plate code HTML code. For a quick start I recommend using Emmet with whatever text editor you have and on the first line typing in `html:5` then pressing the shift key to get the code below. Or you can go ahead and copy and paste the code from below.

```javascript
html:5
```

This will result in the following code:

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

We can fill in the title of “Time to React!”.

This content will not appear in your webpage. Anything in the head section of the HTML file will be meta data that our browser will user to interpret our code in the body section. This title is going to be what appears on the tab for our page, not actually on the page.

### 2 - Get Script Tags to Harness the Power of React and Babel Libraries

Ok, item one is checked off of our list. Let’s look at item two. We are going to set up our developer environment by using script tags to bring in React and Babel. This is not a real life developer environment. That would be quite an elaborate setup. It would also leave us with a lot of boiler plate code and libraries that would take us off subject of learning React basics. The goal of this series is to go over the basic syntax of React and get right into coding.
We are going to use `<script>` tags to bring in the React Library, the React DOM library (why), and the Babel library.

```javascript
<head>
  ...
  <!-- REACT LIBRARY -->
  <script src="https://unpkg.com/react@15.5.4/dist/react.js"></script>
  <!-- REACT DOM LIBRARY -->
  <script src="https://unpkg.com/react-dom@15.5.4/dist/react-dom.js"></script>
  <!-- BABEL LIBRARY -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"></script>
  ...
  <title>Time to React!</title>
</head>
```

You are free to use more updated versions of these libraries as they come out. They should not create any breaking changes for the content we are covering.

What are we doing here?
The: HTML `<script>` element is used to embed or reference an executable script. The “src” attribute points to the external script files for the React library, ReactDOM library and Babel library.
This is like if you have an electric razor. It is literally no good to you no matter how fancy the electric razor unless you can plug it into the wall and gain access to electricity. Our React code we will write will be no good to us if our browser can’t plug into these libraries to understand and interpret what we are going.
This is how our application is going to gain the power of React, it is going to be how we insert React into the Dom. The reason that we have React and ReactDOM as two different libraries is because there are use cases such as React Native where rendering to the DOM isn’t needed for mobile development so the library was split for people to make the decision for what they need depending on the project they are working on. Because we will need our React to make it to the DOM we’ll use both scripts.
Babel is how we take advantage of ECMA script beyond ES5 and deal with something called JSX (JavaScript as XML) that we will use in React. We’ll take a deeper look at the magic of Babel in an upcoming lesson :)
Alright, we have completed steps 1 and 2. We have set up our boiler plate code and set up our developer environment.

### 3 - Render React to the DOM

Our next two steps will be to choose our location within DOM that we want to render our React content. And using another script tag for our React content within the body. Generally, as a good separations of concerns practice this would be in its own file then linked to this html document. We’ll do that later in upcoming lessons.
For now, we’ll let this dwell within the body of the html document we are currently in.
Now we are going to look at how simple it is to choose a place on the DOM to render our React content.
We’ll go within the body. And best practice isn’t just to throw React into the body tag to be displayed but to create a separate element, often a div, that you can treat as a root element to insert your React content.

```javascript
<body>
  <div id="app">React has not rendered yet</div>
</body>
```

We’ll create a simple `<div>` element and give it an id of “app”. We are going to be able to target this location to insert our React content much the same way you might use CSS to target an id for styling of your choice.
Any react content will be rendered within the div tags with the id of app. In the meantime we’ll leave some text saying that “React has not rendered yet” If we see this when we preview our page it means that somewhere we missed rendering React.
Now, let’s go ahead and create a script tag within our body where we will create with react for the first time. The syntax we are going to need for our script tag is to add an attribute of “type”. This specifies the media type of the script. Above in our head we used an src attribute that pointed to the external script files for the React library, ReactDOM library and Babel library.
  
```javascript
<body>
  <div id="app">React has not rendered yet</div>
  <script type="text/babel">
  </script>
</body>
```

The “type” of script that we are using we’ll wrap in quotes and set it to `"text/babel"`.
We’ll need this ability to use babel right away as we work with JSX. First, we are going to render React to the DOM. We will use the `ReactDOM.render()` method to do this. This will be a method, and remember a method is just a function attached to an object. This method will take two arguments.

```javascript
<body>
  <div id="app">React has not rendered yet</div>
  <script type="text/babel">
  ReactDOM.render(React What, React Where);
</script>
</body>
```

The first argument is the “what” of react. The second argument is the “where” of the location you want it to be placed in the DOM.
Let’s start by calling our ReactDOM.render() method.
Our first argument is going to be our JSX.

```javascript
<body>
  <div id="app">React has not rendered yet</div>
  <script type="text/babel">
  ReactDOM.render(
    <h1>Hello World</h1>, 
    React Where
  );
</script>
</body>
```

The [official react docs state](https://reactjs.org/docs/introducing-jsx.html): “This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript. JSX produces React “elements”.”

Often times, JSX freaks people out who have been developers for a while because it looks like HTML. At a very early age developers are taught separation of concerns. HTML has its place, CSS has its place and JavaScript has it’s place. JSX seems to blur the lines. You are using what looks like HTML but as Facebook says comes with the full power of JavaScript.

This can freak out veterans so many react tutorials start without JSX which can be quite complex. We won’t do that. Because this course is directed towards those who are very young in their careers you may not bring those red flags when you see this syntax.

And JSX is just really intuitive. You can probably quite easily read this code and see that this is going to be the largest header tag displaying the text “Hello World”. No mystery and pretty straightforward.
Now, let’s look at what our second argument would be.

```javascript
<body>
  <div id="app">React has not rendered yet</div>
  <script type="text/babel">
    ReactDOM.render(
      <h1>Hello World</h1>, 
      document.getElementById("app")
    );
  </script>
</body>
```

This is where we want our react content rendered to the dom. You’ve probably done this quite a few times in the past. We’ll just type in `document.getElementById()`. And we’ll pass into the argument of the id of app. And that is it. We will now target the div with the id of app to insert our react content.

We want to make sure our content is saved. Go ahead and open this up in the browser and you should see “Hello World”. As you can probably guess, using React is not the quickest or best way to create a Hello World app. We aren’t quite seeing the benefits of it yet. But now, we know that everything is working.

Go ahead and open up the console and look at the “elements”. You can do that on a mac with command + shift + j or on a On Windows and Linux: Ctrl + Shift + J

If you click on the head tag we can see our script libraries we included. Then we can go down to body of our document. Let’s click on our div with the id of “app”. And when we do we see our `<h1>` tag with the content “Hello World”.

[View Entire Code Here](https://github.com/robgmerrill/hello-react/blob/master/section-one/index.html)

or

<a href="http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="Watch Video Here" width="240" height="180" border="10" /></a>

### Quick React App Setup
Setting up a react app can be time consuming. A great tool for starting a new react project is create-react-app. 
Get more information about it [here](https://github.com/facebook/create-react-app#readme)

### Recap

So let’s do a quick recap. In our head tag we grabbed the script tags for React, ReactDOM and Babel. These are the tools our browser needs in its meta data to read our React code and JSX in specific.
We then located the position within the DOM that we wanted to insert our React by creating an element div with the id of “app”.
Next, we created a script tag to input our React code. We used the ReactDOM.render() method that takes two arguments. The “what” of the React content, in this case our JSX, and the second argument is the “where” that you want to insert the React content into the DOM. In this case it is the location with the id of “app”.

As an alternative to JSX, you can use ES6 and Javascript's compiler like Babel. [https://babeljs.io/](https://babeljs.io/)

### More Information:

- [React Homepage](https://reactjs.org/)
- [Dan Abramov's Twitter](https://twitter.com/dan_abramov)
- [React Tutorials at Egghead.io](https://egghead.io/browse/frameworks/react)

### Sources

1. ["Developer Survey Results 2017."](https://insights.stackoverflow.com/survey/2017#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-other-technologies) <em>Stack Overflow.</em> Accessed: October 28, 2017.

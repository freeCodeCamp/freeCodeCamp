---
title: Architecture
---

## Architecture

The Elm architecture was the inspiration of the state-of-the-practice architecture in many web applications developed nowadays. It's based on some principles that are inherent to Elm itself, like immutability. The Elm architecture is sometimes referred to as MVU (Model-View-Update). You can read more about the Elm architecture in the [official language guide](https://guide.elm-lang.org/architecture/). Let's explore each of the elements in this definition:

### Model

The Model represents the **whole** state of the application, centralized as a single immutable piece of data. In the TodoMVC sample app, you would find in the Model not only the list of todos, but also the current state of the todo creation form and the view-filtering options.

### View

The View represents the user interface presented in the web browser. In Elm applications, there is a very important aspect of the View: it is a pure function that receives the Model as input.

If you look at the type for the Elm elements in a web application, `Html.Html`, you'll notice it is a parameterized type (you'll usually see something like `Html a` or `Html Msg`). The type parameter here is used to tell the Elm compiler the return type of the event handlers for the elements, if any. We usually call this type Message, and Messages returned from event handlers are dispatched to the Update function much like Redux actions.

### Update

The Update part is another pure function. It receives the current Model and a dispatched Message, returning a new Model as a result. In more complex applications, the Update function can also return Commands, which represent side effects that may later result in more Messages being dispatched.

### How all of this fits together

The three elements mentioned above interact in a predictable way during all of the application's life cycle. The initialization of an Elm application receives as one of its arguments the initial state, which is a value of the Model type. Based on that, the first View render is computed and presented in the web browser. Whenever some user interaction or another side effect results in the dispatch of a Message, the Update function is called. If the resulting Model is different from the previous, the View function is called again.

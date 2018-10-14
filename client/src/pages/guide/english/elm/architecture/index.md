---
title: Architecture
---

## Architecture

The Elm architecture was the inspiration of the state-of-the-practice architecture in many web applications developed nowadays. It's based on some principles that are inherent to Elm itself, like immutability. The Elm architecture is sometimes referred to as MVU (Model-View-Update). Let's explore each of the elements in this definition:

### Model

The Model represents the **whole** state of the application, centralized as a single immutable piece of data. In the TodoMVC sample app, you would find in the Model not only the list of todos, but also the current state of the todo creation form and the view-filtering options.

### View

The View represents the user interface presented in the web browser. In Elm applications, there is a very important aspect of the View: it is a pure function that receives the Model as input.

If you look at the type for the Elm elements in a web application, `Html.Html`, you'll notice it is a parameterized type (you'll usually see something like `Html a` or `Html Msg`). The type parameter here is used to tell the Elm compiler the return type of the event handlers for the elements, if any. We usually call this type `Message`. Messages returned from event handlers are dispatched to the Update function much like Redux actions.

### Update

The Update part is another pure function. It receives the current Model and a dispatched Message, returning a new Model as a result. When the Update function is called as the result of a Message being dispatched, the View function is called again, and if necessary, the application interface is rendered again.

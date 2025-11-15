---
id: 68dd97fbd18ede5ae983e343
title: What Happens When a Form Is Submitted and How Do the Different Form Submissions Work?
challengeType: 19
dashedName: what-happens-when-a-form-is-submitted-and-how-do-the-different-form-submissions-work
---

# --description--

Websites and apps need to collect data and process it, or generate something the user needs such as search results. So, just like text, forms are also a fundamental part of the web.

With forms, users can register and log in to a site, send messages, and search for items. For instance, you get access to the Google search results page by typing your query in the most popular form on the web, the Google search input.

Let's look at what makes up a form, like input fields, the `action` attribute, form methods, and most importantly, what happens when you submit a form.

Forms are embedded on a web page with the `form` element, but to get inputs to show up, you also need the `input` elements, based on your need. Some of those input elements are text, email, password, selection, file, hidden inputs, and more.

To use these input fields, you have to wrap them with the `form` element. Each of the inputs needs a `name` attribute so the server knows what data corresponds to each field.

Here is an example:

```html
<form>
   <input type="text" name="username" />
   <input type="email" name="email" />
   <input type="file" name="profilePicture" />
   <input type="radio" name="gender" />
   <input type="checkbox" name="subscribe" />
   <input type="hidden" name="userId" />
</form>
```

The input fields also need to be validated to ensure the user enters the correct information.

This validation can happen on both the client-side and the server-side. HTML lets you do basic client-side validation with the `required` and `pattern` attributes. Even so, you should also validate server-side for added security, as HTML validation is mostly for user experience and immediate feedback.

The `required` attribute specifies that the input field must be filled out, while the `pattern` attribute lets you enter regular expressions that force the user to type in the information the way you need it.

Here's an example of that for a username field:

```html
<input type="text" name="username" required pattern="[A-Za-z0-9]{3,}" />
```

After the input fields are validated, submission should take place. So what happens when the form is submitted?

First, for submission to happen, the form needs to have an `action` attribute that specifies where the browser should send the values of the input fields to and a `method` attribute that specifies how the form data is submitted. More on the `method` attribute later.

Here's what an action attribute could look like:

```html
<form action="/register">
	<!-- input fields -->
</form>
```

The `method` attribute can either be `GET`, `POST`, `PUT`, `PATCH`, or `DELETE`:

* `GET` retrieves something from the server, for example, search results.
    
* `POST` sends something to the server, for example, login or register information entered through the input fields.
    
* `PUT` modifies something on the server.
    
* `PATCH` partially modifies something on the server.
    
* `DELETE` removes something from the server.
    
Note that HTML doesn't support the `PUT`, `PATCH`, and `DELETE` methods directly, but there are workarounds. If you work with vanilla JavaScript, you can use the Fetch API to specify the method, and in Node.js and Express, you can use the `method-override` package.

Here's what a form making a `GET` request could look like:

```html
<form action="/search" method="GET">
   <input type="text" name="q">
   <button type="submit">Search</button>
</form>
```

And here's what a form making a `POST` request could look like:

```html
<form action="/submit" method="POST">
   <input type="text" name="username" required pattern="[A-Za-z0-9]{3,}" />
   <input type="password" name="password" />
   <button type="submit">Submit</button>
</form>
```

After the `GET` or `POST` request, the server checks for server-side validation and either processes or rejects the input values.

If the validation is successful, the server sends out the requested information or throws an error if the validation is unsuccessful. 

If the validation is successful, the response from the server could be a redirect in case of authentication or search, or a success message confirming the action.

Here's a recap of what happens when a form is submitted:

* The user fills out the form fields.
    
* The browser checks for client-side validation (if any) and proceeds of the validation is successful.
    
* The browser sends the form data to the server based on the action and method attributes.
    
* The server receives the data and processes it (storing it in a database, registering a user, logging in a user, sending out search query, and so on).
    
* If there's a server-side validation, the server rechecks the data before processing.
    
* The server responds with a success message, error, or redirects the user based on the validation state (success or failure).
    
* The user sees feedback based on the server response.

# --questions--

## --text--

How can you perform client-side validation using HTML?

## --answers--

By using the `validate` attribute

### --feedback--

Think about the attributes that help enforce input rules without JavaScript.

---

By using JavaScript only

### --feedback--

Think about the attributes that help enforce input rules without JavaScript.

---

By using the `required` and `pattern` attributes

---

By using server-side validation only

### --feedback--

Think about the attributes that help enforce input rules without JavaScript.

## --video-solution--

3

## --text--

What workaround is available for using the `PUT`, `PATCH`, and `DELETE` methods in an HTML form while working with Node.js or Express?

## --answers--

HTML natively supports these methods

### --feedback--

HTML forms don't support these methods directly, but workarounds exist.

---

By using the Fetch API in JavaScript

### --feedback--

HTML forms don't support these methods directly, but workarounds exist.

---

By using the `method="PUT"` attribute in a form

### --feedback--

HTML forms don't support these methods directly, but workarounds exist.

---

By using the `method-override` package

## --video-solution--

4

## --text--

What is the difference between the `PUT` and `PATCH` HTTP methods?

## --answers--

`PUT` modifies something on the server, while `PATCH` partially modifies it

---

`PATCH` deletes data, while `PUT` updates it

### --feedback--

One updates the whole resource, while the other makes partial changes.

---

`PUT` is used for retrieving data, while `PATCH` is for sending data

### --feedback--

One updates the whole resource, while the other makes partial changes.

---

`PATCH` replaces the entire resource, while `PUT` modifies only parts of it

### --feedback--

One updates the whole resource, while the other makes partial changes.

## --video-solution--

1

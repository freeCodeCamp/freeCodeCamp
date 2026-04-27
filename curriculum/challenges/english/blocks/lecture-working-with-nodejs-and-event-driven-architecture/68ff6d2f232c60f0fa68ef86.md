---
id: 68ff6d2f232c60f0fa68ef86
title: What is Node and What are Some Differences Between the Browser and Node Runtime Environment?
challengeType: 19
dashedName: what-is-node-and-what-are-some-differences-between-the-browser-and-node-runtime-environment
---

# --description--

So far, you have been writing client-side code with JavaScript, code that runs on the client side of a web application, usually a web browser.

Client-side JavaScript can be very powerful, but it does have certain limitations for more complex tasks.

For example:

- It has very restricted access to local files.
- It's not really designed for handling complex application logic.
- And it has potential security concerns. For example, you would not want to expose sensitive information, such as database credentials, to client-side code.
    
Client-side JavaScript has these limitations because it was initially designed to run exclusively on web browsers.

Web browsers provide the environment that is needed to run JavaScript code, including the JavaScript Engine. They also provide access to the Document Object Model (DOM), so you can access HTML elements in your code.

Previously, we could not run JavaScript outside of a browser, but now we can with Node.js.

Node.js is a JavaScript runtime environment. It's officially defined as “an open-source and cross-platform JavaScript runtime environment.”

Let's see what this means:

- Node.js is open source because its code is publicly available and maintained by a large community of developers.
- It's cross-platform because it works on any operating system, including Windows, macOS, and Linux.
- And it's a JavaScript runtime environment because it allows you to run JavaScript code outside of a browser.
    
Node.js is used across a wide range of industries. Developers use it to build web servers and APIs that handle HTTP requests, as well as web and mobile applications.

If you are using or developing a website or web application that interacts with a database or handles complex data, there is a high chance that you will use Node.js behind the scenes at some point.

It's efficient, scalable, and it has a large community of developers and maintainers around the world.

Now that you know what Node.js is, let's see some of the differences between the browser and the Node runtime environment.

The browser environment is primarily designed for front-end web development, so it runs client-side JavaScript. In contrast, the Node runtime environment is primarily designed for back-end web development, so it runs server-side JavaScript. This also determines the APIs that they offer.

For example, from the browser, you can access the DOM API, but there are restrictions for accessing the local file system. In contrast, from the Node runtime environment, you can access almost all system resources, including the file system, but not the DOM.

Both JavaScript environments provide a global object. In the browser JavaScript runtime, this is called `window`. This `window` object provides access to browser-related functionalities, such as access to methods for manipulating the DOM, managing cookies, and handling browser events. In the Node.js environment, this global object is called `global`. The `global` object provides access to Node.js specific functionalities, such as built-in modules for working with local files, networking, and interacting with the operating system.

Finally, another important difference is that you can choose the version of Node.js that you want to use in your server. However, you have no control over the version of the browser environment that your users will use to visit your website.

Node.js has become very important for developers worldwide. It is a powerful, scalable, and versatile tool that has transformed web development by enabling developers to use JavaScript to build both the front-end and the back-end of full-stack applications. This has made the development process more efficient because developers don't need to learn a new programming language just for developing the back-end.

# --questions--

## --text--

Which of the following best describes Node.js?

## --answers--

A JavaScript library used for front-end development.

### --feedback--

Think about where and how JavaScript code is executed when using Node.js.

---

A JavaScript runtime environment that executes server-side JavaScript.

---

A web browser designed for running JavaScript applications.

### --feedback--

Think about where and how JavaScript code is executed when using Node.js.

---

A JavaScript framework for building user interfaces.

### --feedback--

Think about where and how JavaScript code is executed when using Node.js.

## --video-solution--

2

---

## --text--

Which of the following is a key difference between the browser and the Node runtime environment?

## --answers--

Browsers have direct access to the file system, while the Node runtime environment does not.

### --feedback--

Think about the roles and purpose of each environment.

---

The Node runtime environment uses the window object as its global object, while browsers use the global object.

### --feedback--

Think about the roles and purpose of each environment.

---

Browsers are primarily used for front-end development, while the Node runtime environment is primarily used for back-end development.

---

Browsers typically interact with the operating system, while the Node runtime environment interacts with the DOM.

### --feedback--

Think about the roles and purpose of each environment.

## --video-solution--

3

---

## --text--

Which of the following tasks is Node.js commonly used for?

## --answers--

Manipulating the HTML structure of a web page.

### --feedback--

Think about the server-side capabilities of Node.js.

---

Building a web server to handle HTTP requests.

---

Styling web page elements with CSS.

### --feedback--

Think about the server-side capabilities of Node.js.

---

Creating interactive animations within a web browser.

### --feedback--

Think about the server-side capabilities of Node.js.

## --video-solution--

2

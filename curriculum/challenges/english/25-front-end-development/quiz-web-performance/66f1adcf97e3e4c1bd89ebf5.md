---
id: 66f1adcf97e3e4c1bd89ebf5
title: Web Performance Quiz
challengeType: 8
dashedName: quiz-web-performance
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is the key difference between real performance and perceived performance in web development?

#### --distractors--

Real performance focuses on the number of HTTP requests made by the browser, while perceived performance is based on CSS rendering speed.

---

Real performance is only about load times, while perceived performance relates to visual elements like animations and loading indicators.

---

Real performance only includes server-side processing times, while perceived performance is entirely client-side.

#### --answer--

Real performance is how fast content is loaded, while perceived performance is how quickly users believe the page loads.

### --question--

#### --text--

Which metric best indicates how quickly content appears on a web page?

#### --distractors--

Time to Interactive (TTI)

---

Page Load Time (PLT)

---

Last Contentful Paint (LCP)

#### --answer--

First Contentful Paint (FCP)

### --question--

#### --text--

Which of the following is NOT a way to reduce page loading times?

#### --distractors--

Optimizing Media Assets.

---

Leveraging Browser Caching.

---

Minifying and Compress Files.

#### --answer--

Using only JPEG files.

### --question--

#### --text--

What is "time to usable"?

#### --distractors--

It is the interval from when a user requests a page to when they can interact with forms on the page.

---

It is the time it takes for all images and animations to become available and usable. 

---

This is the time it takes for all CSS and JavaScript animations to load on the screen.

#### --answer--

It is the interval from when a user requests a page to when they can meaningfully interact with it.

### --question--

#### --text--

What does First Contentful Paint (FCP) measure?

#### --distractors--

The overall load time for all JavaScript files on the page.

---

The delay before a user can interact with any elements on the page.

---

The time taken for all stylesheets to fully load and apply.

#### --answer--

The time it takes for the first piece of text or image to render.

### --question--

#### --text--

Which of the following is NOT a commonly used performance measurement tool?

#### --distractors--

Chrome DevTools

---

Lighthouse

---

WebPageTest

#### --answer--

WebMeasure

### --question--

#### --text--

What are Performance Web APIs used for?

#### --distractors--

It is used to measure the performance for CSS animations only.

---

It is used to automatically speed up the performance for a web page.

---

It provides a detailed table of performance metrics for the user.

#### --answer--

It lets developers track how efficiently a webpage loads and responds directly from code.

### --question--

#### --text--

Which strategy can effectively enhance perceived performance?

#### --distractors--

Using large images to improve the overall visual quality.

---

Loading CSS styles last to prioritize content rendering.

---

Preloading all scripts to ensure they are ready when needed.

#### --answer--

Displaying a loading skeleton while content is being fetched.

### --question--

#### --text--

Which of the following refers to the time it takes for a request to travel between the browser and the server?

#### --distractors--

rendering

---

INP

---

CDN

#### --answer--

latency

### --question--

#### --text--

How does optimizing CSS impact page performance?

#### --distractors--

It prevents the browser from executing unnecessary JavaScript.

---

It reduces the overall file size of images.

---

It eliminates the need for lazy loading images.

#### --answer--

It speeds up the parsing of HTML.

### --question--

#### --text--

Which of the following shows how long the main thread is blocked by heavy JavaScript tasks?

#### --distractors--

Source order

---

Bounce rate

---

WebPageTest

#### --answer--

Total Blocking Time

### --question--

#### --text--

When measuring Interaction to Next Paint (INP), what is being evaluated?

#### --distractors--

The time it takes for the page to fully load all styles and images after a user interaction.

---

The delay between a user's interaction and the browser's ability to register the next user input.

---

The interval between JavaScript execution and the browser refreshing the page content.

#### --answer--

The time between a user's interaction and the browser responding by rendering the next frame.

### --question--

#### --text--

Which of the following APIs gives you high-precision timestamps (in milliseconds) to measure how long different parts of your site take to load?

#### --distractors--

`performance.delay()`

---

`performance.previous()`

---

`performance.next()`

#### --answer--

`performance.now()`

### --question--

#### --text--

Which of the following APIs gives you a breakdown of every stage of page loading from DNS lookup to `DOMContentLoaded`?

#### --distractors--

Permit Timing API

---

Performance Text API

---

Perform Timing API

#### --answer--

Performance Timing API

### --question--

#### --text--

Which of the following listens for performance events such as layout shifts, long tasks, and user interactions?

#### --distractors--

```js
const observer = new PermitObserve((list) => {  
  list.getEntries().forEach((entry) => {  
    console.log(`Long task detected: ${entry.duration}ms`);  
  });  
});  

observer.observe({ type: "longtask", buffered: true });
```

---

```js
const observer = new PerformObserver((list) => {  
  list.getEntries().forEach((entry) => {  
    console.log(`Long task detected: ${entry.duration}ms`);  
  });  
});  

observer.observe({ type: "longtask", buffered: true });
```

---

```js
const observer = new PermitObserver((list) => {  
  list.getEntries().forEach((entry) => {  
    console.log(`Long task detected: ${entry.duration}ms`);  
  });  
});  

observer.observe({ type: "longtask", buffered: true });
```

#### --answer--

```js
const observer = new PerformanceObserver((list) => {  
  list.getEntries().forEach((entry) => {  
    console.log(`Long task detected: ${entry.duration}ms`);  
  });  
});  

observer.observe({ type: "longtask", buffered: true });
```

### --question--

#### --text--

How does lazy loading images enhance page performance?

#### --distractors--

It ensures all images load immediately for a better user experience.

---

It reduces the size of image files to speed up loading.

---

It preloads images to prevent any loading delays.

#### --answer--

It delays loading non-essential images until they are in view.

### --question--

#### --text--

What is code splitting?

#### --distractors--

It involves splitting your React code into modules that perform only critical tasks

---

It involves splitting your HTML code into modules that perform only non-critical tasks.

---

It involves splitting your CSS code into modules that perform critical and non-critical tasks.

#### --answer--

It involves splitting your JavaScript code into modules that perform critical and non-critical tasks.

### --question--

#### --text--

Which of the following is the correct way to lazy load an image?

#### --distractors--

```html
<img src="placeholder.jpg" lazy="loading">
```

---

```html
<img src="placeholder.jpg" load="lazy">
```

---

```html
<img src="placeholder.jpg" lazy="load">
```

#### --answer--

```html
<img src="placeholder.jpg" loading="lazy">
```

### --question--

#### --text--

Which of the following is NOT a way to improve INP?

#### --distractors--

Reducing the main thread work by breaking up long JavaScript tasks.

---

Optimizing event handlers.

---

Deferring or lazy-loading heavy assets.

#### --answer--

Using only PNG and JPEG images.

### --question--

#### --text--

Why is energy efficiency a crucial aspect of web performance?

#### --distractors--

It enhances the overall visual appeal of the webpage.

---

It minimizes the amount of JavaScript used on a webpage.

---

It decreases the number of CSS files needed and makes your CSS run faster.

#### --answer--

It reduces the load on hardware, conserving energy and improving sustainability.


---
id: 66f1adcf97e3e4c1bd89ebf5
title: Web Performance Quiz
challengeType: 8
dashedName: quiz-web-performance
---

# --description--

Answer all of the questions below correctly to pass the quiz.

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

Largest Contentful Paint (LCP)

#### --answer--

First Contentful Paint (FCP)

### --question--

#### --text--

What best describes the critical rendering path in the browser?

#### --distractors--

The order in which images are loaded into the browser's cache.

---

The way JavaScript is executed before any CSS is applied.

---

The priority level given to different elements in the DOM.

#### --answer--

The sequence of steps a browser follows to fetch, decode, and display HTML, CSS, and JavaScript.

### --question--

#### --text--

Which of the following factors NEGATIVELY impacts a website's perceived performance?

#### --distractors--

Utilizing CSS sprites to combine multiple images.

---

Loading scripts asynchronously to improve loading speed.

---

Using web fonts that preload for immediate use.

#### --answer--

Running long, blocking JavaScript operations that delay rendering.

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

How does reducing the number of critical resources affect web performance?

#### --distractors--

It ensures that all resources are loaded simultaneously.

---

It reduces the overall size of the web page for better performance.

---

It makes the browser load images more quickly but doesn't impact other resources.

#### --answer--

It shortens the critical rendering path, leading to faster page rendering.

### --question--

#### --text--

Which statement best describes Cumulative Layout Shift (CLS)?

#### --distractors--

It measures how quickly the page responds after user interactions.

---

Time spent waiting for JavaScript to execute.

---

The duration between content being painted and the page becoming interactive.

#### --answer--

The unexpected movement of web page elements during loading, affecting layout stability.

### --question--

#### --text--

What strategy can effectively enhance perceived performance?

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

What is the key performance benefit of utilizing a Content Delivery Network (CDN)?

#### --distractors--

It ensures all resources are loaded without delays.

---

It minimizes the use of CSS files, improving speed.

---

It eliminates the need for caching altogether.

#### --answer--

It reduces latency by serving content from geographically closer servers.

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

Which metric assesses the stability of visual content on a web page?

#### --distractors--

First Input Delay (FID)

---

Time to First Byte (TTFB)

---

Largest Contentful Paint (LCP)

#### --answer--

Cumulative Layout Shift (CLS)

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

Which Web API is effective for measuring performance in JavaScript?

#### --distractors--

`window.getPerformaceStatistics()`

---

`document.performance()`

---

`window.performance.now()`

#### --answer--

`performance.now()`

### --question--

#### --text--

What is considered a good practice to enhance JavaScript performance?

#### --distractors--

Placing all JavaScript code in the `<head>` tag for immediate execution.

---

Using `eval()` to dynamically execute JavaScript code.

---

Adding multiple `setTimeout()` calls for handling asynchronous tasks.

#### --answer--

Utilizing event delegation to manage multiple events efficiently.

### --question--

#### --text--

How does the Critical Path Length affect page load times?

#### --distractors--

It increases the amount of data transferred during page load.

---

It complicates the loading process by introducing more JavaScript files.

---

It has no impact on how quickly a page loads.

#### --answer--

A shorter critical path allows the browser to render the page more quickly.

### --question--

#### --text--

In what way does lazy loading images enhance page performance?

#### --distractors--

It ensures all images load immediately for a better user experience.

---

It reduces the size of image files to speed up loading.

---

It preloads images to prevent any loading delays.

#### --answer--

It delays loading non-essential images until they are in view, improving initial load time.

### --question--

#### --text--

Which performance technique effectively reduces latency?

#### --distractors--

Inlining all JavaScript code into HTML for immediate execution.

---

Using larger image resolutions for high-definition displays.

---

Deferring CSS that affects page layout.

#### --answer--

Minimizing DNS lookups by limiting external resource calls.

### --question--

#### --text--

How does reducing render-blocking resources enhance performance?

#### --distractors--

It caches all CSS files for future use, speeding up load times.

---

It enables JavaScript to execute without any delays.

---

It reduces the amount of HTML the browser needs to process.

#### --answer--

It allows the browser to render content sooner, improving time to first paint.

### --question--

#### --text--

What significantly impacts Time to First Byte (TTFB)?

#### --distractors--

The position of CSS files within the HTML document.

---

The number of images on the page.

---

The amount of JavaScript executed on page load.

#### --answer--

The server response time to the initial HTTP request.

### --question--

#### --text--

Why is energy efficiency a crucial aspect of web performance?

#### --distractors--

It enhances the overall visual appeal of the webpage.

---

It minimizes the amount of JavaScript used on a webpage.

---

It decreases the number of CSS files needed.

#### --answer--

It reduces the load on hardware, conserving energy and improving sustainability.


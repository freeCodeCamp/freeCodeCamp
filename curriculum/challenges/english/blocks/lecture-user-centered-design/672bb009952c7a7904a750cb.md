---
id: 672bb009952c7a7904a750cb
title: What Are Best Practices for Designing Infinite Scrolls?
challengeType: 19
dashedName: what-are-best-practices-for-designing-infinite-scrolls
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS and JavaScript that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

Infinite scrolling is a design pattern that loads more content as the user scrolls down the page. Oftentimes, this is used on social media sites like Twitter. For example, if you are logged in and want to see more tweets, you can scroll down and more tweets will load. This is an example of infinite scrolling.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="infinite-scroll">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <div class="post">Post 4</div>
  <div class="post">Post 5</div>
  <div class="post">Post 6</div>
  <div class="post">Post 7</div>
  <div class="post">Post 8</div>
  <div class="post">Post 9</div>
  <div class="post">Post 10</div>
  <!-- More posts will load here as the user scrolls down -->
</div>

<script src="index.js"></script>
```

```css
.infinite-scroll {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
```

```js
// Simulate loading more content as the user scrolls
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePosts();
  }
});

function loadMorePosts() {
  const container = document.querySelector('.infinite-scroll');
  for (let i = 0; i < 3; i++) {
    const post = document.createElement('div');
    post.className = 'post';
    post.textContent = `Post ${container.children.length + 1}`;
    container.appendChild(post);
  }
}
```

:::

Infinite scrolling is also used as a substitute for pagination. Pagination is a design pattern that breaks up content into pages. This is often used when there is a lot of content to display. An example of pagination is when you search for something on Google and you see the search results on multiple pages. With pagination, you have to click on a button to go to the next page. With infinite scrolling, you just keep scrolling down and more content will load.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="pagination">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <!-- More posts will be on the next pages -->
</div>
<div class="pagination-controls">
  <button class="prev" disabled>Previous</button>
  <button class="next">Next</button>
</div>
<script src="index.js"></script>
```

```css
.pagination {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pagination-controls {
  margin-top: 12px;
}

.pagination-controls button {
  padding: 8px 16px;
  margin-right: 8px;
}
```

```js
let currentPage = 1;
const postsPerPage = 3;
const totalPosts = 9; 
const totalPages = Math.ceil(totalPosts / postsPerPage);
const container = document.querySelector('.pagination');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next'); 

function renderPosts() {
  container.innerHTML = '';
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  for (let i = start; i < end && i < totalPosts; i++) {
    const post = document.createElement('div');
    post.className = 'post';
    post.textContent = `Post ${i + 1}`;
    container.appendChild(post);
  }
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPosts();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPosts();
  }
});

renderPosts();
```

:::

As you incorporate infinite scrolling into your design, there are a few best practices to keep in mind. The first consideration is to provide a "Load More" button that loads the next set of results when the user clicks on it. This is a good way to give the user control over when they want to see more content.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="infinite-scroll">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <!-- More posts will load when the user clicks "Load More" -->
</div>
<button class="load-more">Load More</button>
<script src="index.js"></script>
```

```css
.infinite-scroll {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.load-more {
  margin-top: 12px;
  padding: 8px 16px;
}
```

```js
const loadMoreButton = document.querySelector('.load-more');
const container = document.querySelector('.infinite-scroll');   
loadMoreButton.addEventListener('click', () => {
  loadMorePosts();
});

function loadMorePosts() {
  for (let i = 0; i < 3; i++) {
    const post = document.createElement('div');
    post.className = 'post';
    post.textContent = `Post ${container.children.length + 1}`;
    container.appendChild(post);
  }
}
```

:::

Another consideration would be to add a "Back" button. This gives users the ability to go back to the previous page without having to scroll all the way back up. This creates a better user experience and gives them more control over their browsing experience.

Sometimes you will see designs with a "Back to the top" button which leads users back to the top of the page of results. Another consideration is to provide a loading indicator. Users should have a clear indication that more content is being loaded; otherwise, they might think that the page is broken.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="infinite-scroll">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <div class="post">Post 4</div>
  <div class="post">Post 5</div>
  <div class="post">Post 6</div>
  <div class="post">Post 7</div>
  <div class="post">Post 8</div>
  <div class="post">Post 9</div>
  <div class="post">Post 10</div>
  <!-- More posts will load here as the user scrolls down -->
</div>

<div class="loading-indicator" style="display: none;">Loading...</div>

<button id="back-to-top" class="back-to-top">↑ Back to Top</button>

<script src="index.js"></script>

```

```css
.infinite-scroll {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.loading-indicator {
  margin-top: 12px;
  font-weight: bold;
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  padding: 10px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.back-to-top:hover {
  background-color: #0056b3;
}
```

```js
const container = document.querySelector('.infinite-scroll');
const loadingIndicator = document.querySelector('.loading-indicator');
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePosts();
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function loadMorePosts() {
  loadingIndicator.style.display = 'block';
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      const post = document.createElement('div');
      post.className = 'post';
      post.textContent = `Post ${container.children.length + 1}`;
      container.appendChild(post);
    }
    loadingIndicator.style.display = 'none';
  }, 1000);
}
``` 

:::

One of the last considerations would be to keep the footer accessible to the user. If the footer contains important information, then it should be accessible to the user at all times.

In conclusion, infinite scrolling is a great way to display content on your website. However, you should keep in mind the best practices when designing your infinite scroll so that you can provide the best user experience possible.

# --questions--

## --text--

What is infinite scrolling?

## --answers--

A design pattern that changes the scrollbar on the page.

### --feedback--

Review the beginning of the lesson where this concept is introduced.

---

A design pattern that changes the size of the page.

### --feedback--

Review the beginning of the lesson where this concept is introduced.

---

A design pattern to change the background color of the page.

### --feedback--

Review the beginning of the lesson where this concept is introduced.

---

A design pattern that loads more content as the user scrolls down the page

## --video-solution--

4

## --text--

What is the role of a "load more" button in infinite scrolling?

## --answers--

It reloads the page.

### --feedback--

The name implies what it's role is.

---

To give users control over when they want to see more content.

---

It allows users to go back to previously loaded content.

### --feedback--

The name implies what it's role is.

---

It restricts the amount of data that can be loaded.

### --feedback--

The name implies what it's role is.

## --video-solution--

2

## --text--

Why is it important to keep the footer accessible while using an infinite scroll?

## --answers--

It helps make the colors stand out more on the page.

### --feedback--

Think about what information the user should have access to

---

It helps make the page load faster.

### --feedback--

Think about what information the user should have access to

---

It is not important to keep the footer accessible.

### --feedback--

Think about what information the user should have access to

---

So the user can access the links and important information from the footer at all times.

## --video-solution--

4

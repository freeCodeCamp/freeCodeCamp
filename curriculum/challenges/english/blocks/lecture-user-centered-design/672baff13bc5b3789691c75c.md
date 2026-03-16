---
id: 672baff13bc5b3789691c75c
title: What Are Best Practices for Designing Breadcrumbs?
challengeType: 19
dashedName: what-are-best-practices-for-designing-breadcrumbs
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

When it comes to web design, there are many types of navigational aids you can use. Examples include top navigation bars, sidebars, and footers. But if your site is on the more complex side with deeper levels of navigation, you might want to consider using breadcrumbs.

Breadcrumbs are a navigation aid that shows the user where they are in the site's hierarchy. Here is an example of what breadcrumbs look like for a mock-up electronics website:

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="breadcrumbs">
  Home / Electronics / Phones / Smartphone XYZ
</div>
```

```css
.breadcrumbs {
  font-size: 0.9rem;
  color: #555;
  margin: 1rem 0;
}
```

:::

In most websites, breadcrumbs are displayed at the top of the page, showing the user the path they took to get to the current page. Starting from the `Homepage`, the user navigated to the `Electronics` category, then to the `Phones` category, and finally to the `Smartphone XYZ` product. You have probably interacted with breadcrumbs on a website as you were searching for a product or specific piece of information.

The use of breadcrumbs is helpful because it can help users understand where they are in the site's hierarchy and how to navigate back to the previous pages. This is especially useful when a user has come from a search result or an external link and needs to understand the context of the page they are on.

When it comes to designing breadcrumbs, there are a few considerations to keep in mind. The first is to decide on what the separator will be. The separator is the character that separates the different levels of the hierarchy. Common separators include the greater than sign (`>`), right angle quotation marks (`»`) ,and the forward slash (`/`).

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="breadcrumbs">
  Home &gt; Electronics &gt; Phones &gt; Smartphone XYZ
</div>
```

```css
.breadcrumbs {
  font-size: 0.9rem;
  color: #555;
  margin: 1rem 0;
}
```

:::

The second consideration is the placement of the breadcrumbs. Breadcrumbs are typically placed at the top of the page, either above or below the main navigation bar. Users shouldn't have to struggle to find the breadcrumbs, so make sure they are visible and easy to locate. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<nav class="main-nav">
  <a href="#">Home</a>
  <a href="#">Electronics</a>
  <a href="#">Phones</a>
</nav>
<div class="breadcrumbs">
  Home &gt; Electronics &gt; Phones &gt; Smartphone XYZ
</div>
```

```css
.main-nav {
  background-color: #333;
  padding: 1rem;
}

.main-nav a {
  color: white;
  margin-right: 1rem;
  text-decoration: none;
}

.breadcrumbs {
  font-size: 0.9rem;
  color: #555;
  margin: 1rem 0;
}
```

:::

Another consideration is the size of the breadcrumbs. You want to make sure the breadcrumbs are large enough to be easily read, but not so large that they take up too much space on the page. Remember, the breadcrumbs aren't meant to serve as a primary navigation tool, but rather as a secondary navigational aid. In websites where there is a lot of information on a page, users can easily see where they are in the hierarchy and navigate back to previous pages using breadcrumbs.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">
<div class="breadcrumbs">
  Home &gt; Electronics &gt; Phones &gt; Smartphone XYZ
</div>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

```css
.breadcrumbs {
  font-size: 1rem;
  color: #555;
  margin: 1rem 0;
}   

p {
  font-size: 1.2rem;
  line-height: 1.6;
}
```

:::

So when should you use breadcrumbs on your site? If your site is simple and has a shallow hierarchy, breadcrumbs might not be necessary. A shallow hierarchy means that the site has only a few levels of navigation, so breadcrumbs might not add much value. Typically, you will see breadcrumbs on e-commerce sites, news sites, and other sites with a deep hierarchy like technical documentation sites.

# --questions--

## --text--

What are breadcrumbs?

## --answers--

A navigation aid that shows the user where they are in the site's hierarchy.

---

A type of container for images.

### --feedback--

Review the beginning of this lesson for the answer.

---

A navigation aid only found on mobile sites.

### --feedback--

Review the beginning of this lesson for the answer.

---

A type of container for text.

### --feedback--

Review the beginning of this lesson for the answer.

## --video-solution--

1

## --text--

When should you use breadcrumbs on your site?

## --answers--

You should never use breadcrumbs.

### --feedback--

Think about the benefits of breadcrumbs and when they would be most useful.

---

If your site has a deep hierarchy for navigation.

---

If your site is simple and has a shallow hierarchy.

### --feedback--

Think about the benefits of breadcrumbs and when they would be most useful.

---

You should only use them for mobile sites.

### --feedback--

Think about the benefits of breadcrumbs and when they would be most useful.

## --video-solution--

2

## --text--

Which of the following is a common separator for breadcrumbs?

## --answers--

`>>>>`

### --feedback--

Review the middle of this lesson for the answer.

---

`||||`

### --feedback--

Review the middle of this lesson for the answer.

---

`/`

---

`&&&`

### --feedback--

Review the middle of this lesson for the answer.

## --video-solution--

3

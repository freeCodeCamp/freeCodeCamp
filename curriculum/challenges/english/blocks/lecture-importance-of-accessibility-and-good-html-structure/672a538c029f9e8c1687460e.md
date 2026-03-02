---
id: 672a538c029f9e8c1687460e
title: How Does Proper Heading Level Structure Affect Accessibility?
challengeType: 19
dashedName: how-does-proper-heading-level-structure-affect-accessibility
---

# --interactive--

You previously learned about proper heading level structure. Now, you will learn how a good heading structure affects accessibility.

Proper use of headings creates a visual hierarchy for users to navigate and understand your web page. Using a logical heading hierarchy allows screen reader users to understand the structure of your content and navigate your content quickly. Creating appropriate heading text that accurately describes the content that follows helps everyone find the information they need on your site. As an additional benefit, well-formed headings may also improve the SEO of your site.

Here is a basic example:

:::interactive_editor

```html
<h1> Music Store Page</h1>

<h2>Featured Albums</h2>
<p>Check out our featured albums below:</p>
```

:::

Think of headings as the foundation of your site. Without a good foundation, the accessibility of your content will suffer.

Let's look at how you can make your web projects friendly for people who use assistive technologies by using headings correctly.

Headings, ranging from `h1` to `h6`, create a navigational structure for screen reader users. Screen readers can list all headings on a page, allowing users to jump directly to the sections they need. So, correctly arranging headings is important for helping these users avoid unnecessary content and finding the information they are looking for quickly.

:::interactive_editor

```html
<h1>I am an h1 heading</h1>
<h2>I am an h2 heading</h2>
<h3>I am an h3 heading</h3>
<h4>I am an h4 heading</h4>
<h5>I am an h5 heading</h5>
<h6>I am an h6 heading</h6>
```

:::

People with partial sight or cognitive disabilities need to process information quickly and easily to reduce cognitive load.

While proper arrangement of headings is important, it is also necessary to make heading texts clear and descriptive.

Here are some key practices to follow to use headings properly:

- Use headings in a hierarchy that reflects clear organization. For example, the page title should be an `h1`, major sections should be introduced with `h2` headings, subsections with `h3` , and so on, down to `h6`.
- Don't skip from `h1` to `h3`, or from `h2` to `h4`, and so on.
- Use clear and descriptive text that summarizes the content that follows each heading.
- Don't use a heading in isolation – some content must follow the heading.
- Use appropriate headings where necessary instead of formatting text to look like headings.
- Each page should have a single `h1` element representing the main topic or title.

Here's a basic markup that represents how you should use headings on a page:

:::interactive_editor

```html
<!-- Page title -->
<h1>What is HTML</h1>

<!-- First section -->
<section>
  <h2>Introduction to HTML</h2>
  <p>
    HTML stands for HyperText Markup Language. It is the standard language for
    creating web pages.
  </p>
</section>
<!-- Second section -->
<section>
  <h2>History of HTML</h2>
  <p>HTML began to take shape in the early 90s</p>
  <h3>Origins</h3>
  <p>
    HTML was created by Tim Berners-Lee in 1991. It has evolved significantly
    over the years.
  </p>
</section>
```

:::

# --questions--

## --text--

How does proper heading structure help those using screen readers?

## --answers--

It provides visual styling for the content.

### --feedback--

Think about how screen readers assist users in understanding and navigating through the webpage content.

---

It helps screen readers generate a summary of the content.

### --feedback--

Think about how screen readers assist users in understanding and navigating through the webpage content.

---

It allows screen readers to navigate and skip to different sections easily.

---

It improves the loading speed of the webpage.

### --feedback--

Think about how screen readers assist users in understanding and navigating through the webpage content.

## --video-solution--

3

## --text--

Why is it important to use headings properly for users who rely on keyboards?

## --answers--

It improves the visual appeal of the webpage.

### --feedback--

Think about how proper headings can enhance the navigation experience for users who do not use a mouse.

---

It allows users to print the webpage more easily.

### --feedback--

Think about how proper headings can enhance the navigation experience for users who do not use a mouse.

---

It lets users jump between sections without the need to tab through every link.

---

It helps users download the webpage faster.

### --feedback--

Think about how proper headings can enhance the navigation experience for users who do not use a mouse.

## --video-solution--

3

## --text--

Which of these is one of the best practices for using headings on a web page?

## --answers--

Skipping from `h1` to `h3` to save time.

### --feedback--

Think about making sure heading texts are clear for both users and those who use assistive technologies.

---

Using clear and descriptive texts that summarize the following content.

---

Using any heading level in isolation without any following content.

### --feedback--

Think about making sure heading texts are clear for both users and those who use assistive technologies.

---

Using multiple `h1` tags on a single page for emphasis.

### --feedback--

Think about making sure heading texts are clear for both users and those who use assistive technologies.

## --video-solution--

2

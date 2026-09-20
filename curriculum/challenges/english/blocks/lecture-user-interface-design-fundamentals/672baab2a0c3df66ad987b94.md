---
id: 672baab2a0c3df66ad987b94
title: How Does Scale Work in Design?
challengeType: 19
dashedName: how-does-scale-work-in-design
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

The "scale" of something refers to its size. 

When you're looking at scaling in your web design, you're looking at the size relationships between different elements, and how these elements might adapt to different screen sizes.

Using the correct scale for your elements plays an important role in visual hierarchy. Larger elements will draw more attention, which can guide your users through the content in the way that you want.

For example, the visual separation between a heading and a paragraph draws your reader’s attention, but the scale should be appropriate to get an eye-catching text that pulls your reader to that section.

:::interactive_editor

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background-color: #fdfdfd;
    color: #333;
  }

  .section {
    margin-bottom: 40px;
  }

  .big-heading {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .paragraph {
    font-size: 16px;
    max-width: 600px;
    line-height: 1.6;
  }
</style>

<div class="section">
  <div class="big-heading">Discover the Power of Smart Design</div>
  <p class="paragraph">
    Great design isn’t just about colors or fonts — it’s also about scale. 
    A large heading like this one instantly grabs your attention, while the paragraph beneath it provides context and detail.
    Proper scaling creates a clear path for the reader’s eye to follow.
  </p>
</div>
```

:::

Scale doesn't apply just to text, though. It's also important for images. And while the scale of a banner image might make sense for a desktop layout, it might be too large on a mobile layout.

By scaling an image down to a more appropriate ratio, you can keep the visual impact while ensuring the information on the site is visible.

:::interactive_editor

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background-color: #fefefe;
    color: #333;
  }

  .banner {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto 20px auto;
    border-radius: 8px;
  }

  .content {
    max-width: 600px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    .banner {
      max-width: 90%;
    }

    .content {
      font-size: 15px;
    }
  }
</style>

<img 
  src="https://placehold.co/1200x400/png?text=Large+Banner+Image"
  alt="Banner" 
  class="banner"
>

<div class="content">
  <p>
    This banner image looks great on a large screen, but on smaller devices, it scales down automatically.
    That way, it still delivers a strong visual impression without pushing the actual content off the screen.
    Scaling images properly helps maintain balance and accessibility across layouts.
  </p>
</div>
```

:::

Scale is also important for interactivity, and the ability to actually use your website. If the text in a navigation bar is not at an appropriate scale, mobile phone users will have a hard time tapping on the links. 

And if you scale it appropriately, you end up with links that are not only easier to read, but easier to click on for your mobile users.

:::interactive_editor

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    margin: 0;
    background-color: #fafafa;
  }

  .navbar {
    background-color: #004080;
    padding: 15px 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 15px;
    display: inline-block;
    border-radius: 4px;
  }

  .nav-link:hover {
    background-color: #0059b3;
  }

  @media (max-width: 600px) {
    .nav-link {
      font-size: 20px;
      padding: 14px 18px;
    }
  }
</style>

<nav class="navbar">
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="nav-link">About</a>
  <a href="#" class="nav-link">Services</a>
  <a href="#" class="nav-link">Contact</a>
</nav>
```

:::

There are many ways that scale is important in your designs. We've covered the basics, so you should now have a fundamental understanding of its importance.

# --questions--

## --text--

What is the primary purpose of using correct scale in web design?

## --answers--

To make everything the same size.

### --feedback--

Think about how scale affects visual hierarchy and user attention.

---

To guide users through content.

---

To use as much space as possible.

### --feedback--

Think about how scale affects visual hierarchy and user attention.

---

To make text harder to read.

### --feedback--

Think about how scale affects visual hierarchy and user attention.

## --video-solution--

2

## --text--

Why might a large banner image be problematic on a mobile layout?

## --answers--

It loads too slowly.

### --feedback--

Consider how screen real estate differs between desktop and mobile devices.

---

It's not visually appealing.

### --feedback--

Consider how screen real estate differs between desktop and mobile devices.

---

It takes up too much screen space.

---

It's not interactive enough.

### --feedback--

Consider how screen real estate differs between desktop and mobile devices.

## --video-solution--

3

## --text--

What is an important consideration for scaling navigation elements on mobile devices?

## --answers--

Making them as small as possible.

### --feedback--

Think about the physical interaction users have with mobile devices.

---

Ensuring they're easy to tap.

---

Using bright colors.

### --feedback--

Think about the physical interaction users have with mobile devices.

---

Removing them entirely.

### --feedback--

Think about the physical interaction users have with mobile devices.

## --video-solution--

2

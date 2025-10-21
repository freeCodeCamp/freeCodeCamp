---
id: 672baad7bbc4f86762ca173e
title: What Are Best Practices for Working with Images in Your Designs?
challengeType: 19
dashedName: what-are-best-practices-for-working-with-images-in-your-designs
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

Adding images to your websites is a great way to engage your users and increase the visual appeal of your site. But there are a few things to consider when working with images in your designs.

The first thing to consider is creating responsive images. Responsive images are images that scale to fit the size of the screen they are being viewed on. This is important because it ensures that your images look good on all devices, from desktops to mobile phones.

:::interactive_editor

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background-color: #fefefe;
    color: #333;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  p {
    font-size: 16px;
    max-width: 600px;
    margin: 20px auto;
    line-height: 1.6;
  }
</style>

<h1>Responsive Cat Image</h1>

<img 
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
  alt="Two cats peacefully sleeping together."
/>

<p>
  This image automatically scales based on the screen size. Whether you're viewing on a desktop or a mobile phone,
  it adjusts its size without losing proportions, making the design clean and user-friendly on all devices.
</p>
```

:::

Another thing to consider is the resolution for images. Higher quality images with better resolution have more pixels per inch. Pixels are small squares that make up an image.

Pixels per inch, or PPI, is the number of pixels in one inch of an image. The higher the PPI, the better the image quality.

You want to make sure that your images are high quality and look good on all devices. This means that you should use high resolution images that are optimized for the web.

Another thing to consider is the size of your images and how they fit within the spaces in the layout. You want to make sure that your images are the right size and are not too large or too small.

Using large images that are meant to fit in smaller spaces in the design can slow down your website and make it harder for users to load your site. You want to make sure that your images are the right size and are optimized for the web.

When it comes to image placement, you want to think about balance, hierarchy, and alignment to help ensure your images are optimized for the web.

Balance is the distribution of visual weight in a design. You want to make sure there is a good balance between text and images on the site so it creates a harmonious design.

:::interactive_editor

```html
<style>
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 40px 20px;
    background-color: #f9f9f9;
    color: #333;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .text {
    flex: 1 1 400px;
  }

  .text h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .text p {
    font-size: 16px;
    line-height: 1.6;
  }

  .image {
    flex: 1 1 400px;
  }

  .image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
</style>

<div class="container">
  <div class="text">
    <h2>Balanced Layout</h2>
    <p>
      Balance is essential in web design. By evenly distributing visual weight—such as pairing this block of text
      with a complementary image—you create a layout that feels calm, structured, and easy to navigate.
    </p>
  </div>

  <div class="image">
    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Two cats peacefully sleeping together.">
  </div>
</div>
```

:::

Hierarchy is the order in which elements are viewed on a page. You want to make sure that images that align with important content are placed higher than images that are less important.

:::interactive_editor

```html
<style>
  body {
    font-family: sans-serif;
    padding: 30px 20px;
    background-color: #fff;
    color: #222;
    max-width: 800px;
    margin: 0 auto;
  }

  .section {
    margin-bottom: 40px;
  }

  .section img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .section h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .section p {
    font-size: 16px;
    line-height: 1.6;
  }
</style>

<div class="section">
  <img 
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
    alt="Two cats peacefully sleeping together."
  >
  <h2>Our Feline Rescue Mission</h2>
  <p>
    This image supports one of our most important stories — the rescue of 12 stray cats from a storm drain. 
    Placing it at the top ensures visitors connect emotionally with our mission right away.
  </p>
</div>

<div class="section">
  <h2>Upcoming Fundraiser</h2>
  <p>
    Join us for a small fundraising event to support our shelter. It’ll be a fun, casual afternoon with 
    snacks, games, and of course — plenty of cats!
  </p>
  <img 
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
    alt="Two cats peacefully sleeping together."
  >
</div>
```

:::

Alignment is the placement of elements in relation to each other. You want to make sure that your images are aligned with the text and other elements on your site so that it creates a cohesive design.

:::interactive_editor

```html
<style>
  body {
    font-family: sans-serif;
    padding: 40px 20px;
    background-color: #ffffff;
    color: #222;
    max-width: 900px;
    margin: 0 auto;
  }

  .aligned-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }

  .aligned-content img {
    width: 300px;
    height: auto;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .aligned-text {
    flex: 1;
    min-width: 250px;
  }

  .aligned-text h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .aligned-text p {
    font-size: 16px;
    line-height: 1.6;
  }
</style>

<div class="aligned-content">
  <img 
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
    alt="Two cats peacefully sleeping together."
  >

  <div class="aligned-text">
    <h2>Aligned Elements</h2>
    <p>
      In this example, the image is aligned horizontally next to the text block. This creates a visually cohesive layout, 
      where both elements feel like they belong together. Proper alignment like this improves readability and reinforces 
      structure in your design.
    </p>
  </div>
</div>
```

:::

The last thing to consider is accessibility for images. You want to make sure that your images are accessible to all users, including those with visual impairments. This means that you should use alt text for your images so that screen readers can read the text to users who are visually impaired.

# --questions--

## --text--

What is the importance of balance in design when placing images?

## --answers--

To ensure images are the right size.

### --feedback--

Think about how text and images work together in a design.

---

To make images accessible to all users

### --feedback--

Think about how text and images work together in a design.

---

To create a harmonious design by distributing visual weight.

---

To improve the resolution of images.

### --feedback--

Think about how text and images work together in a design.

## --video-solution--

3

## --text--

What is the purpose of using high resolution images in your designs?

## --answers--

To make sure your images have the right color.

### --feedback--

Think about how the final image will look on different devices.

---

To ensure that your images look good on all devices.

---

To make sure that your images are the right size.

### --feedback--

Think about how the final image will look on different devices.

---

To make sure that your images are accessible to all users.

### --feedback--

Think about how the final image will look on different devices.

## --video-solution--

2

## --text--

What is PPI?

## --answers--

The number of pixels per one inch of an image.

---

The number of points per one inch of an image.

### --feedback--

Review the beginning of the lesson where PPI was first introduced.

---

The number of pixels per one centimeter of an image.

### --feedback--

Review the beginning of the lesson where PPI was first introduced.

---

The number picas per one image.

### --feedback--

Review the beginning of the lesson where PPI was first introduced.

## --video-solution--

1

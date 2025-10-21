---
id: 672aa6c9e379285acca5a2aa
title: What Are Common Design Terms to Help You Communicate with Designers?
challengeType: 19
dashedName: what-are-common-design-terms-to-help-you-communicate-with-designers
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

As a developer, you may need to work closely with designers. If you understand basic design terminology, you'll have a shared vocabulary and you'll be able to participate in the design process more actively. This can make your workflow more efficient and result in a better user experience.

So let's dive in. We'll start with the term layout. Layout is how the visual elements are arranged on a page or screen to communicate a message. These elements may include text, images, and white space. The layout is like the blueprint of a design. Designers must consider the placement, size, and hierarchy of each element.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />

<header>
  <div class="container">
    <h1>ShopMate</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Cart (2)</a></li>
      </ul>
    </nav>
  </div>
</header>

<main>
  <section class="hero">
    <h2>Fall Collection 2025</h2>
    <p>Discover the latest trends</p>
    <a href="#" class="btn">Shop Now</a>
  </section>

  <section class="products container">
    <h3>Featured Products</h3>
    <div class="product-grid">
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 1" />
        <h4>Product 1</h4>
        <p>$49.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 2" />
        <h4>Product 2</h4>
        <p>$59.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 3" />
        <h4>Product 3</h4>
        <p>$39.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 4" />
        <h4>Product 4</h4>
        <p>$29.99</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <p>&copy; 2025 ShopMate. All rights reserved.</p>
  </div>
</footer>
```

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: #f9f9f9;
  color: #333;
}

.container{
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header {
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
}

header h1 {
  color: #2c3e50;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
}

.hero {
  background-color: lightgrey;
  text-align: center;
  padding: 4rem 1rem;
  margin-bottom: 2rem;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero .btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.products h3 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: #2c3e50;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.product-card img {
  max-width: 100%;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.product-card h4 {
  margin: 0.5rem 0;
}

.product-card button {
  background: #27ae60;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.product-card button:hover {
  background: #219150;
}

footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
}
```

:::

The term that is closely related to layout is alignment. Alignment is how the elements are placed in relation to one another. Using alignment correctly is helpful for making the design look clean and organized. Designers create visual order by aligning elements along imaginary lines, edges, or a central point.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />

<div class="container">
  <section class="alignment left">
    <h2>Left-Aligned</h2>
    <p>This content is aligned to the left. Left alignment is most common for body text because it follows natural reading flow in left-to-right languages.</p>
  </section>

  <section class="alignment center">
    <h2>Center-Aligned</h2>
    <p>This content is centered. Center alignment is useful for titles, headings, and content that needs to be the focal point.</p>
  </section>

  <section class="alignment right">
    <h2>Right-Aligned</h2>
    <p>This content is aligned to the right. Right alignment can be used for stylistic emphasis or when aligning content against the right edge of a container.</p>
  </section>
</div>
```

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: #f4f4f4;
  color: #333;
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.alignment {
  background: #fff;
  border-left: 4px solid #3498db;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.alignment:hover {
  transform: scale(1.02);
}

.alignment h2 {
  margin-bottom: 0.5rem;
  color: #3498db;
}

.left {
  text-align: left;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}
```

:::

Great. Now let's talk about composition. Composition is the art of arranging elements to create a harmonious design. It determines how elements like images, text, and shapes relate to each other and contribute to the design in an artistic way. While layout mostly focuses on the placement of the elements, composition also considers the artistic impact that this placement will have in the overall design.

Composition is closely related to concepts of balance. Balance is how the visual weight is distributed within a composition. Designers aim to create an equilibrium through symmetrical or asymmetrical arrangements. A balanced design feels harmonious.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<h1>Composition &amp; Balance</h1>

<div class="section symmetrical">
  <div class="box-container">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">A</div>
  </div>
  <div class="description">Symmetrical Balance – Equal weight on both sides.</div>
</div>

<div class="section asymmetrical">
  <div class="box-container">
    <div class="box">A</div>
    <div class="box">C</div>
    <div class="box">B</div>
  </div>
  <div class="description">Asymmetrical Balance – Unequal but still harmonious.</div>
</div>
```

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 40px;
  background: #f4f4f4;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

.section {
  margin-bottom: 60px;
}

.box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.box {
  width: 100px;
  height: 100px;
  background: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 8px;
}

.asymmetrical .box:nth-child(2) {
  transform: scale(1.5);
  background: #e74c3c;
}

.description {
  text-align: center;
  margin-top: 50px;
  font-style: italic;
  color: #333;
}
```

:::

Hierarchy is another important concept that you should know. Hierarchy establishes the order of importance of the elements in a design. It's about making sure the most important information is noticed first. You can implement a visual hierarchy with size, color, contrast, alignment, white space, and even typography.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <div class="headline">Upgrade to Pro</div>
  <div class="subheadline">Get more features and storage</div>
  <div class="body-text">
    The Pro plan offers advanced tools, priority support, and 10x more storage. Perfect for professionals and teams looking to scale their productivity.
  </div>
  <a href="#" class="call-to-action">Start Free Trial</a>
</div>
```

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fefefe;
  margin: 40px;
  line-height: 1.6;
  color: #333;
}

.card {
  max-width: 600px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.headline {
  font-size: 32px;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 10px;
}

.subheadline {
  font-size: 20px;
  color: #555;
  margin-bottom: 20px;
}

.body-text {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.call-to-action {
  display: inline-block;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.call-to-action:hover {
  background-color: #2980b9;
}
```

:::

To create clear distinctions between the elements, you can use contrast. Contrast is helpful for guiding user attention to what you want to emphasize. You can do this through variations in color, size, shape, texture, or any other visual characteristic. Strong contrast is also helpful for improving readability.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <h1>Contrast in Design</h1>
  <p>
    Contrast helps draw attention to important elements. It also makes content easier to read and visually engaging.
  </p>

  <div class="highlight-box">
    This box stands out because of strong color contrast.
  </div>

  <button class="high-contrast-button">Example button</button>

  <p class="low-contrast-text">
    This text is harder to read due to low contrast with the background.
  </p>
</div>
```

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f6f6f6;
  margin: 40px;
  color: #333;
}

.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #111;
}

p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 25px;
}

.highlight-box {
  background-color: #222;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.low-contrast-text {
  color: #999999;
  font-size: 16px;
  margin-top: 30px;
}

.high-contrast-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s ease;
}

.high-contrast-button:hover {
  background-color: #c0392b;
}
```

:::

Another helpful term is white space. White Space, also known as "negative space", is the empty space in a design. It's the area surrounding the elements. You might be surprised to know that white space is not necessarily white. Actually, it can be space in any color or texture. Its purpose is to improve the readability and enhance the visual hierarchy of a design.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <h1>The Power of White Space</h1>
  <p>
    White space (or negative space) is the empty space around elements. It’s not just “blank”—it gives your content room to breathe, improves focus, and adds elegance to the design.
  </p>
  <a href="#" class="button">Learn More</a>
</div>

<div class="no-whitespace">
  <strong>Without white space:</strong> This block has minimal padding, making the content feel cramped, harder to read, and less appealing.
</div>
```

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

.container {
  max-width: 800px;
  margin: 60px auto;
  background-color: #ffffff;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #2c3e50;
}

p {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
}

.button {
  display: inline-block;
  padding: 14px 28px;
  background-color: #27ae60;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.button:hover {
  background-color: #219150;
}

.no-whitespace {
  background-color: #ffffff;
  padding: 10px;
  margin: 60px auto;
  width: 800px;
  box-shadow: 0 0 0 1px #ccc;
  font-size: 16px;
  color: #222;
}
```

:::

These are general design concepts that you will find very often, but you may also find design terms that are more closely related to software development.

The user interface, also known as UI, is how humans interact with computers. A user interface includes the visual and interactive elements that users can see on their screens, like icons, images, text, menus, links, and buttons.

The user experience, also known as UX, is about how users feel when using a product or service. An application with a well-designed user experience is intuitive, easy to use, efficient, accessible, and enjoyable. The user interface plays a key role in making the user experience as easy and enjoyable as possible, so they are very closely related.

These are some of the common terms that you should know to communicate with designers. With this knowledge, now you can take a more active role in the design process.

# --questions--

## --text--

Which design principle refers to the visual weight distribution within a layout?

## --answers--

Alignment

### --feedback--

Think about how the elements in a design are arranged to create a sense of equilibrium with symmetrical or asymmetrical arrangements.

---

Balance

---

Hierarchy

### --feedback--

Think about how the elements in a design are arranged to create a sense of equilibrium with symmetrical or asymmetrical arrangements.

---

Contrast

### --feedback--

Think about how the elements in a design are arranged to create a sense of equilibrium with symmetrical or asymmetrical arrangements.

## --video-solution--

2

## --text--

What is the term for the empty space around the elements in a design?

## --answers--

Layout

### --feedback--

Think about the area that separates these elements.

---

Hierarchy

### --feedback--

Think about the area that separates these elements.

---

White Space

---

Contrast

### --feedback--

Think about the area that separates these elements.

## --video-solution--

3

## --text--

Which design principle establishes the order of importance of the elements in a design?

## --answers--

Alignment

### --feedback--

Think about how the elements are arranged and styled to create a sense of importance.

---

Contrast

### --feedback--

Think about how the elements are arranged and styled to create a sense of importance.

---

Hierarchy

---

Proximity

### --feedback--

Think about how the elements are arranged and styled to create a sense of importance.

## --video-solution--

3

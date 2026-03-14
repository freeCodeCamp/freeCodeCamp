---
id: 671a955b74ab5588735800d1
title: CSS Accessibility Review
challengeType: 31
dashedName: review-css-accessibility
---

# --interactive--

## Color Contrast Tools

- **WebAIM's Color Contrast Checker**: This online tool allows you to input the foreground and background colors of your design and instantly see if they meet the Web Content Accessibility Guidelines (WCAG) standards.
- **TPGi Colour Contrast Analyzer**: This is a free color contrast checker that allows you to check if your websites and apps meet the Web Content Accessibility Guidelines (WCAG) standards. This tool also comes with a Color Blindness Simulator feature which allows you to see what your website or app looks like for people with color vision issues.

## Accessibility Tree

Accessibility tree is a structure used by assistive technologies, such as screen readers, to interpret and interact with the content on a webpage.

## `max()` Function

The `max()` function returns the largest of a set of comma-separated values:

:::interactive_editor

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/9.jpg" alt="A cat sitting on a table">
</body>
```

```css
img {
  width: max(250px, 25vw);
}
```

:::

In the above example, the width of the image will be 250px if the viewport width is less than 1000 pixels. If the viewport width is greater than 1000 pixels, the width of the image will be 25vw. This is because 25vw is equal to 25% of the viewport width.

## Best Practices with CSS and Accessibility

- **`display: none;`**: Using `display: none;` means that screen readers and other assistive technologies won't be able to access this content, as it is not included in the accessibility tree. Therefore, it is important to use this method only when you want to completely remove content from both visual presentation and accessibility.
- **`visibility: hidden;`**: This property and value hides the content visually but keeps it in the document flow, meaning it still occupies space on the page. These elements will also no longer be read by screen readers because they will have been removed from the accessibility tree. 
- **`.sr-only` CSS class**: This is a common technique used to visually hide content while keeping it accessible to screen readers.

:::interactive_editor

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <span>This span element can be read</span>
  <span class="sr-only">This span element can only be read by screen readers</span>
  <p style="display: none">
    This text is hidden with display: none and is NOT accessible to screen readers.
  </p>
  <p style="visibility: hidden">
    This text is hidden with visibility: hidden and is NOT read by screen readers,
    but it still takes up space.
  </p>
</body>

```

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

```

:::

- **`scroll-behavior: smooth;`**: This property and value enables a smooth scrolling behavior.
- **`prefers-reduced-motion` feature**: This is a media feature that can be used to detect the user's animation preference.

:::interactive_editor

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Clicking these links should result in smooth scrolling 
 if the user has not set a preference for reduced motion -->
  <nav>
    <a href="#section1">Section 1</a>
    <a href="#section2">Section 2</a>
    <a href="#section3">Section 3</a>
  </nav>

  <section id="section1">
    <h2>Section 1</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula dui, venenatis quis ligula ac, gravida pellentesque orci. Phasellus feugiat tortor ut vehicula porttitor. Proin vehicula scelerisque purus sit amet porttitor. Suspendisse egestas congue nibh auctor auctor. Pellentesque interdum, urna eget rhoncus tincidunt, mi urna sodales ex, quis tincidunt ante purus et erat. Quisque lacinia sapien a nibh porta semper. Pellentesque vitae enim non elit euismod gravida. Etiam eu orci pulvinar, malesuada est non, molestie ex. Etiam massa ante, malesuada quis lorem ut, aliquet aliquam libero. Etiam arcu nunc, suscipit sit amet leo eu, pharetra viverra nibh.
    </p>
  </section>

  <section id="section2">
    <h2>Section 2</h2>
    <p>Mauris vel arcu enim. Nunc bibendum tincidunt dapibus. Nulla bibendum diam eget rutrum commodo. Quisque congue, erat eu tempus tincidunt, lacus ligula condimentum mi, ut luctus nisl erat at ipsum. In id mi sit amet purus laoreet commodo. Nunc facilisis sem diam, quis gravida nibh vulputate tempor. Praesent quam est, rhoncus ac volutpat non, sollicitudin quis tellus. Integer et velit sit amet ante tristique lobortis id eu nunc. Cras odio magna, malesuada nec eros sit amet, tincidunt tincidunt orci. Nam sit amet quam id urna tempus porttitor. Phasellus felis ligula, egestas non fringilla id, egestas vel erat. Ut semper est non bibendum facilisis. Ut ullamcorper tempor imperdiet.
    </p>
  </section>

  <section id="section3">
    <h2>Section 3</h2>
    <p>Praesent sed finibus lectus, vel ultricies sem. Nam nec suscipit turpis. Duis vehicula posuere magna, sed laoreet leo scelerisque id. Suspendisse iaculis vulputate nisl id porttitor. Praesent aliquam blandit ex, porta ultricies enim fermentum tristique. Morbi ac imperdiet diam, sit amet suscipit massa. Proin sed nisl a ex ultrices interdum. Nullam vitae diam eget odio iaculis tristique.
    </p>
  </section>
</body>

```

```css
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
```

:::

In the above example, smooth scrolling is enabled if the user doesn't have animation preference set on their device.

## Hiding Content with HTML Attributes

- **`aria-hidden` attribute**: Used to hide an element from people using assistive technology such as screen readers. For example, this can be used to hide decorative images that do not provide any meaningful content.
- **`hidden` attribute**: This attribute is supported by most modern browsers and hides content both visually and from the accessibility tree. It can be easily toggled with JavaScript.

:::interactive_editor

```html
<p aria-hidden>This paragraph is visible for sighted users, but is hidden from assistive technology.</p>
<p hidden>This paragraph is hidden from both sighted users and assistive technology.</p>
<p>This is a normal paragraph</p>

```

:::

## Accessibility Issue of the `placeholder` Attribute

Using placeholder text is not great for accessibility. Too often, users confuse the placeholder text with an actual input value - they think there is already a value in the input.

# --assignment--

Review the CSS Accessibility topics and concepts.

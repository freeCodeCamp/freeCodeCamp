---
id: 672bafe4ef812b78696b0e27
title: What Are Best Practices for Designing a Dark Mode Feature?
challengeType: 19
dashedName: what-are-best-practices-for-designing-a-dark-mode-feature
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

Dark mode is a special feature on web applications where you can change the default light color scheme to a dark color scheme. This helps reduce eye strain and improve readability in low-light conditions. When designing your dark mode features, it is important to understand best practices to ensure that your dark mode feature is effective and user-friendly.

Enable the interactive editor and click on the `Toggle Dark Mode` button in the example below to see how dark mode works.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<button id="theme-toggle">Toggle Dark Mode</button>

<div class="content">
  <p>This is a simple dark mode example.</p>
</div>

<script src="index.js"></script>
```

```css
body {
  background: #f5f5f5;
  color: #222;
  font-family: sans-serif;
  transition: background 0.3s, color 0.3s;
}

button {
  margin: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

body.dark {
  background: #121212;
  color: #e0e0e0;
}
```

```js
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

:::

The first consideration is the avoidance of saturated colors in dark mode. Saturated colors are colors that are bright and intense. For example, a bright magenta button against a dark gray background can be too intense and cause eye strain. Instead, you should use desaturated colors in dark mode. Desaturated colors are colors that are less intense, have a lower saturation level, and more comfortable to look at in dark mode. To see the previews, you will need to enable the interactive editor.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<button id="theme-toggle">Toggle Dark Mode</button>

<div class="content">
  <h1>Color Saturation in Dark Mode</h1>
  <p>Compare the two buttons below. The first uses a saturated color, the second is desaturated for better accessibility in dark mode.</p>

  <div class="buttons">
    <button class="saturated">Saturated Button</button>
    <button class="desaturated">Desaturated Button</button>
  </div>
</div>

<script src="index.js"></script>
```

```css
body {
  background-color: #f0f0f0;
  color: #111;
  font-family: sans-serif;
  transition: background 0.3s, color 0.3s;
  padding: 1rem;
}

button {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 1rem;
  transition: background 0.3s, color 0.3s;
}

.buttons button {
  border: none;
}

.saturated {
  background-color: #ff00ff; 
  color: white;
}

.desaturated {
  background-color: #c472b5; 
  color: white;
}

body.dark {
  background-color: #121212;
  color: #e0e0e0;
}

body.dark .saturated {
  background-color: #ff00ff; 
  color: black;
}

body.dark .desaturated {
  background-color: #925f88; 
  color: white;
}
```

```js
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

:::

Another consideration with dark mode is the use of pure black backgrounds with white text. While this high contrast can be effective, it can also be too harsh on the eyes. Instead, consider using a dark gray background with light gray text for a softer contrast. Text will be easier on the eyes and more comfortable to read in dark mode. To see the previews, you will need to enable the interactive editor.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<button id="theme-toggle">Toggle Dark Mode</button>

<div class="content">
  <h1>Dark Mode Contrast Comparison</h1>
  <p>Compare the two sections below. One uses pure black and white, the other uses dark gray and light gray for better readability.</p>

  <div class="dark-mode-examples">
    <div class="box harsh-dark">
      <h2>High Contrast</h2>
      <p>Pure black background with white text. While readable, it can be harsh on the eyes.</p>
    </div>

    <div class="box soft-dark">
      <h2>Soft Contrast</h2>
      <p>Dark gray background with light gray text. Easier to read and more comfortable for long periods.</p>
    </div>
  </div>
</div>

<script src="index.js"></script>
```

```css
body {
  background-color: #f0f0f0;
  color: #111;
  font-family: sans-serif;
  padding: 1rem;
  transition: background 0.3s, color 0.3s;
}

button {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.dark-mode-examples {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.box {
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
  transition: background 0.3s, color 0.3s;
}

.box {
  background-color: #ffffff;
  color: #111;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

body.dark .box.harsh-dark {
  background-color: #000000; 
  color: #ffffff;           
}

body.dark .box.soft-dark {
  background-color: #1e1e1e; 
  color: #cccccc;           
}

body.dark {
  background-color: #121212;
  color: #e0e0e0;
}
```

```js
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

:::

Another consideration is the use of dark mode with the site's brand identity. A brand identity is a set of visual elements that represent a brand, such as the logo, colors, and typography. When implementing dark mode, you should consider how the dark mode feature is consistent with your brand's colors and style. It is fine to have the brand icon and buttons at full saturation, while the surrounding elements are desaturated.

In general, when it comes to design, you always want to be mindful of the user experience and contrast levels. Dark mode is no exception, and by following these best practices, you can create a dark mode feature that is effective and user-friendly.

# --questions--

## --text--

What is dark mode?

## --answers--

A feature that changes the default light color scheme to a dark color scheme.

---

A feature that changes the default dark color scheme to a light color scheme.

### --feedback--

The name of the feature is a clue to its purpose.

---

A feature that changes the default font size to a larger size.

### --feedback--

The name of the feature is a clue to its purpose.

---

A feature that changes the default layout of a web page.

### --feedback--

The name of the feature is a clue to its purpose.

## --video-solution--

1

## --text--

Why is it not a good idea to use pure black backgrounds with white text in dark mode?

## --answers--

Pure black backgrounds can cause security issues.

### --feedback--

Think about the high contrast between pure black and white and how it can affect readability.

---

Pure black backgrounds can cause performance issues.

### --feedback--

Think about the high contrast between pure black and white and how it can affect readability.

---

Pure black backgrounds with white text are too subtle.

### --feedback--

Think about the high contrast between pure black and white and how it can affect readability.

---

Pure black backgrounds with white text can be too harsh on the eyes.

## --video-solution--

4

## --text--

What types of colors are suggested to use in dark mode?

## --answers--

Red colors.

### --feedback--

Think about the intensity of colors and how they can affect readability in dark mode.

---

Desaturated colors.

---

Bright colors.

### --feedback--

Think about the intensity of colors and how they can affect readability in dark mode.

---

Pastel colors.

### --feedback--

Think about the intensity of colors and how they can affect readability in dark mode.

## --video-solution--

2

---
title: Gatsby.js Styling
---

## Gatsby.js Styling

There are so many ways to add styles to your website — and Gatsby supports almost every possible option, through official and community plugins.

NOTE: Gatsby doesn’t prescribe or dictate any single styling approach. Choose what works best for you!

## Layout Components

For sections of your site that you want to share across multiple pages. Creating and using the component as shown below.

```
// src/components/layout.js

import React from "react"

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    {children}
  </div>
)
```

```
// src/pages/index.js

import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>I’m in a layout!</h1>
  </Layout>
)
```

## CSS Modules

CSS Modules are highly recommended for those new to building with Gatsby (and React in general). A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. They are very popular as they let you write CSS like normal but with a lot more safety. The tool automatically makes class and animation names unique so you don’t have to worry about selector name collisions.

Check (CSS Modules homepage here](https://github.com/css-modules/css-modules).

## Typography.js

Typography.js is a JavaScript library that enables you to define and explore the typographic design of your website and define beautiful custom and pre-existing typographic themes. It limits the number of tedious changes you need to make to your website just to change the font.

Learn [how to use Typography.js on your Gatsby site here](https://www.gatsbyjs.org/docs/typography-js/).

## Using CSS-in-JS 

With CSS-in-JS, you avoid all that as CSS selectors are scoped automatically to their component. Styles are tightly coupled with their components. This makes it easier to know how to edit a component’s CSS as there’s never any confusion about how and where CSS is being used.

### Glamor

Check out [walkthrough guide on setting up Glamor on your Gatsby site](https://www.gatsbyjs.org/docs/glamor/)

### Styled components

Check out [walkthrough guide on setting up Styled Components on your Gatsby site](https://www.gatsbyjs.org/docs/styled-components/)

## Creating global styles

In nearly every site, there will be some global styles, such as a reset or typography defaults. Check out the [guide at official Gatsby docs for creating global styles](https://www.gatsbyjs.org/docs/creating-global-styles/).


## PostCSS

PostCSS transforms extended syntaxes and features into modern, browser-friendly CSS. Checkout guide will [show you how to get started with Gatsby and PostCSS](https://www.gatsbyjs.org/docs/post-css/).

### More Information:
Check out the Gatsby.js official docs for styling at [Gatsby Styling](https://www.gatsbyjs.org/docs/styling/). For more information and learn more, visit: [Gatsby.js official site](https://www.gatsbyjs.org/tutorial/)

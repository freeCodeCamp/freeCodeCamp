<img src="https://cdn.freecodecamp.org/platform/universal/fcc_banner_new.png" alt="freeCodeCamp banner">

freeCodeCamp's component library is a collection of reusable React components that can be used in your projects. The components are built with accessibility in mind and are designed to be easy to use and customize.

## Installation

- Run the following command to install the library:

```bash
pnpm install @freecodecamp/ui
```

- Import the library's base stylesheet into your app:

```tsx
// app.tsx
import "@freecodecamp/ui/dist/base.css";
import "./my-app.css"; // Your custom stylesheet should be imported after, in order to override the base.
```

- Use the `getThemingClass` util to get a CSS class for theming, and add the class to the `body` element:

```tsx
import { getThemingClass } from "@freecodecamp/ui";

const MyApp = () => {
	const cls = getThemingClass();

	return <body className={cls}></body>;
};
```

## Docs

To see the components in action, check out the [Storybook](https://freecodecamp.github.io/ui/).

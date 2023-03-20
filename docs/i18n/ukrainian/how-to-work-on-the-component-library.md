Welcome to freeCodeCamp's `ui-components` library. The components are built mostly from scratch with basic HTML elements and [Tailwind CSS](https://tailwindcss.com/).

# How to Work on the Component Library

> [!NOTE]
> 
> freeCodeCamp has been using Bootstrap components in the UI. However, we are moving away from it and building our own component library, which helps standardize our UX/UI patterns and improve accessibility. The project is tracked in [this GitHub issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/44668).

The following steps are recommended when working on a new component:

- Research and planning
- Implement the component
- Display the use cases on Storybook
- Write unit tests

## Researching and planning

Before building a component, you need to research and document on how the existing version behaves and looks, to ensure that the new one has matching styles and supports all the current usages. In order to meet the web accessibility requirements, you should also pay attention to the accessibility aspect of the component, see which HTML elements and ARIA attributes are used under the hood.

Once you have gathered enough information about the component, you can start thinking about the props interface. Ideally, the interface should be as similar to the current version as possible, to ease the adoption later on. Since we are using Bootstrap components, the simplest approach is to mimic [their implementation](https://github.com/react-bootstrap/react-bootstrap/tree/master/src).

We prefer smaller pull requests rather than a large one, because they speed up the review time and reduce cognitive overload for the reviewers. For that reason, you should think about how you would break down the implementation and come up with a delivery plan.

We recommend opening a separate GitHub issue for each component and include all the notes in the issue description. It can be used as a place to host all of your working notes, as well as a way to communicate the approach with the reviewers. We will use the issue thread for further discussion if needed. [The issue for Button component](https://github.com/freeCodeCamp/freeCodeCamp/issues/45357) can be used as a reference.

## Implementing the component

A new component can be created using the following command from the root directory:

```bash
cd tools/ui-components

pnpm run gen-component MyComponent
```

The command will generate a new folder inside the `ui-components` directory, with the following files:

| File name                  | Purpose                                                    |
| -------------------------- | ---------------------------------------------------------- |
| `index.ts`                 | It is used for exporting the component and its types.      |
| `my-component.stories.tsx` | It is used for demoing the component on Storybook.         |
| `my-component.test.tsx`    | It is a test file.                                         |
| `my-component.tsx`         | It is where we implement the component.                    |
| `types.ts`                 | It is where we locate the component's interface and types. |

Each component is different, but in general a component should:

- Support forwarding ref
- Be styled for both light and dark themes
- Be styled internally based on their props (the consumers should not need to restyle the component with the `className` prop)
- Utilize the built-in styling system from Tailwind instead of having custom styles

### Using colors

There are two color "layers" in the component library:

- The base layer, where the color names describe what the colors are, e.g. `gray00`, `blue50`
- The semantic layer, where the color names describe what the colors are for, e.g. `foreground-primary`, `background-danger`

Generally when using colors in a component, you should choose semantic variables over the base ones. There are exceptions, however, specifically when you are styling the component's states such as hover, active, disabled, etc. In these cases, we recommend using the base variables directly instead of creating new semantic variables, since each component can have different styles for their states.

> [!NOTE] Color definition can be found in the [`colors.css` file](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/src/colors.css). A color is only available for use if it is added to the [`tailwind.config.js` file](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/tools/ui-components/tailwind.config.js) under the `colors` property.

### Корисні посилання

- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
- [React Bootstrap v0.33 Docs](https://react-bootstrap-v3.netlify.app)
- [Bootstrap 3.3.7 stylesheet](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.css)
- [React Bootstrap current implementation](https://github.com/react-bootstrap/react-bootstrap/tree/master/src)
- [React Bootstrap current tests](https://github.com/react-bootstrap/react-bootstrap/tree/master/test)

## Displaying the use cases on Storybook

Use cases of the component should be added to the Storybook file (`.stories.tsx`).

To start Storybook, run the following command from the root directory:

```bash
pnpm run storybook
```

The Storybook page is available on [http://localhost:6006](http://localhost:6006).

## Writing unit tests

We use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to write unit tests. The tests should assert that the components behave as expected and are accessible.

To run tests against the component library, run the following command from the root directory:

```bash
pnpm run test-ui-components
```

## Adding packages to the UI-Component library

We restrict adding new packages to the UI Components to help with the project's maintainability. In the rare chance that you think a dependency is needed, please check with the maintainers first and then use the following command to add a package:

```bash
cd tools/ui-components 
pnpm add package_name
```

### Корисні посилання

- [Testing for Accessibility](https://testing-library.com/docs/dom-testing-library/api-accessibility)
- [Order of priority of React Testing Library's queries](https://testing-library.com/docs/queries/about/#priority)
- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

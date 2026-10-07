# gatsby-page-utils

## Usage

```shell
npm install gatsby-page-utils
```

### Example

```js
const {
  createPath,
  ignorePath,
  validatePath,
  watchDirectory,
} = require(`gatsby-page-utils`)

// ...

const pagesDirectory = "/pages"
watchDirectory(
  pagesDirectory,
  "**/*.{js, jsx}",
  addedPath => {
    // Filter out special components that shouldn't be made into
    // pages.
    if (!validatePath(addedPath)) {
      return
    }

    // Filter out anything matching the given ignore patterns and options
    if (ignorePath(addedPath, "*/connexion")) {
      return
    }

    // Create page object
    const createdPath = createPath(addedPath)
    const page = {
      path: createdPath,
      component: systemPath.join(pagesDirectory, addedPath),
    }

    // Add page
    createPage(page)
  },
  removedPath => {
    // Delete the page for the now deleted component.
    const componentPath = systemPath.join(pagesDirectory, removedPath)
    store.getState().pages.forEach(page => {
      if (page.component === componentPath) {
        deletePage({
          path: createPath(removedPath),
          component: componentPath,
        })
      }
    })
  }
)
```

#### watchDirectory

Watch activity on a directory and call functions each time a file is added or removed

| property      | description                                     | type     |
| ------------- | ----------------------------------------------- | -------- |
| path          | Directory path in which pages are stored        | String   |
| glob          | A glob that select files to watch               | String   |
| onNewFile     | A function called each time a new file is added | Function |
| onRemovedFile | A function called each time a file is removed   | Function |

#### createPath

Create a page path from a file path. It returns the page path.

| property | description | type   |
| -------- | ----------- | ------ |
| path     | File path   | String |

#### validatePath

Validate a file path. It verifies that the path doesn't contain specific characters or strings. It returns `true` if the path is valid otherwise it returns `false`.

| property | description | type   |
| -------- | ----------- | ------ |
| path     | File path   | String |

#### ignorePath

Determines if path should be ignored regarding of a ignore pattern passed as parameter. It returns `true` if the passed path should be ignored otherwise it returns `false`.

| property | description                       | type                        |
| -------- | --------------------------------- | --------------------------- |
| path     | File path                         | String                      |
| ignore   | A pattern to match with file path | (Object \| String \| Array) |

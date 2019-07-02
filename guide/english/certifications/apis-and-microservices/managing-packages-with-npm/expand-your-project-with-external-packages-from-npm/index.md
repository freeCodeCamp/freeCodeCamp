---
title: Expand Your Project with External Packages from npm
---
## Expand Your Project with External Packages from npm

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

The `package.json` file in the root directory of your project, among other things, lists all the dependencies that your project needs in order to work, are listed under the `dependencies` key in that file and follow a similar convention as given below:

```json
"dependencies": {
    "express": "^4.16.4",
    "helmet": "^3.14.0"
  },
```

There might be additional peer dependencies or development dependencies that your project might need in case it has to be built or compiled due to a number of reasons currently outside the scope of this challenge. They are listed under the `peerDependecies` and `devDependencies` respectively.

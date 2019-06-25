---
title: Remove a Package from Your Dependencies
---
## Remove a Package from Your Dependencies

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
You should go over to the `package.json` file in your project. Removing a package is as simple as going into your dependencies section and removing the line with the corresponding item. In the following example "express" is removed from `package.json`:

Before
```json
"dependencies": {
    "express": "^4.16.4",
    "helmet": "^3.14.0"
  },
```

After
```json
"dependencies": {
    "express": "^4.16.4",
  },
```
This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/managing-packages-with-npm/remove-a-package-from-your-dependencies/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

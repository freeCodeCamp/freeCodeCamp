---
title: Git hosting
---

## Git hosting

In addition to being a a great platform for sharing code, [github](www.github.com) can also be used for hosting static HTML websites which can be viewed by visiting `username.github.io`. The following steps explain the process using git online client.

**Table of Contents**

- [Setting Up a New Repository](#setup-new-repo)
- [Adding Content to Your Website](#adding-content)
- [Adding a Title and Description to Your Website](#add-title-description)
- [Next-Steps](#next-steps)

### Setting Up a New Repository <a name="setup-new-repo"></a>

- The first step is to make a new public repository called `username.github.io` where `username` is your Github username. Make sure to initialize the repository with a README file. 

- After creating new repostiory, click on the gear icon in the top right side and scroll down to the `GitHub Pages` section.
- Click on `Change Theme`and click on theme of your choice from the top caraousel to see a preview. Once selected,click on `Select Theme`. You can easily change your theme in future by following the above steps.

### Adding Content to Your Website <a name="adding-content"></a>

The next step is to add content to your website by editing the README.md file. Once you have made your changes, scroll to the bottom and click **Commit changes**. 

### Adding a Title and Description to Your Website <a name="add-title-description"></a>

- Open `_config.yml` file by clicking on **Code** tab.
- Add the following lines

```YAML
theme: jekyll-theme-example
title: Hello World! //Sample title
description: My First Website //Sample description
```
below 
```YAML
theme: jekyll-theme-example
```
- Scroll to the bottom and **Commit changes** to save title and description for your website. Make sure to add a Subject and a brief description explaining the changes that you made.

### What's Next <a name="next-steps"></a>

You can use html, css and javascript to make and style a webpage or an entire website instead of using the inbuilt jekyll-themes. Just replace the README.md file with proper website files and folders.

Jekyll is a static website generator which can be used to make reusable templates or layouts which makes managing simple websites easier. You can visit [this](http://jmcglone.com/guides/github-pages/) link to read more creating and using Jekyll templates.

<!--#### More Information:
Please add any articles you think might be helpful to read before writing the article -->

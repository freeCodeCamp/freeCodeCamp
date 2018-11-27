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
- [Public Git Hosting Sites](#public-git-hosting)
- [More Information](#more-info)

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

Although one can setup his/her own Git server but it's easy and more popular to use an external dedicated hosting site like <a href='https://github.com/' target='_blank'>GitHub</a>. Hosting Git repositories on such popular public hosting sites even makes it easier for the open source community to find the project and collaborate with it.

### Public Git Hosting Sites <a name="public-git-hosting"></a>

There are a lot of hosting options for Git repositories. Here's an up-to-date list: [GitHosting](https://git.wiki.kernel.org/index.php/GitHosting)

#### More Information <a name="more-info"></a>

* Git documentation: [Hosted Git](https://git-scm.com/book/en/v1/Git-on-the-Server-Hosted-Git)
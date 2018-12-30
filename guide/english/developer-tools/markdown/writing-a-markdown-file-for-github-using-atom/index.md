---
title: Writing a Markdown File for Github Using Atom
---
Markdown is a way to style text on the web, and GitHub users make use of markdown to provide documentation for their repositories.

From <a href='https://guides.github.com/features/mastering-markdown/' target='_blank' rel='nofollow'>GitHub guides</a>:

> You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.
> 
> You can use Markdown most places around GitHub:  
> - Gist  
> - Comments in Issues and Pull Requests  
> - Files with the .md or .markdown extension
> 
> Markdown files have the extension `.md` and you'll see that a vast number of GitHub repositories have `README.md` files.

A great example is that if you want to write a Wiki file for this repository, it'll need to be a `.md` file. What you're reading right now is a markdown file called `writing-a-markdown-file-using-atom.md`.

Markdown files are easy to write, and you can find a markdown cheat sheet <a href='https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet' target='_blank' rel='nofollow'>here</a>.

## Creating a readme file on GitHub

You can compose a README.md file on GitHub itself:

![screen shot 2016-02-29 at 18 07 19](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9a1d7f226df87df437f616fcaf5b7adcf02c8e87.png)

This gives you the capability to switch between 'Edit new file' and 'Preview' views:

![screen shot 2016-02-29 at 18 06 24](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e0b3ddb69c3f2c32c0c7e73f1b1d196a54f03c21.png)

This is ideal if your readme file is small, and you don't mind switching between the two views.

But what if your `.md` file is not a readme, and you want the luxury of working in a text editor and a live preview of what your text looks like at the same time as you edit it?

## Writing Markdown files with Atom

If you're writing a long or detailed markdown file, it helps to get a live preview of exactly what your markdown looks like, in the same way that you might use live reload capabilities to update your browser if you're working on a project that uses HTML and CSS, for example.

A good way to go about creating a markdown file uses the <a href='https://atom.io/' target='_blank' rel='nofollow'>Atom text editor</a>. You can install and use Atom for free.

Atom, like other text editors, makes use of packages, which are pieces of code that allow you to customize your workflow.  
1\. Firstly, you'll want to install the Atom text editor from <a href='https://atom.io/' target='_blank' rel='nofollow'>here</a>.  
2\. When Atom is installed, open it, and open a new file with a `.md` extension.  
3\. To see your live preview, right click your `.md` file from the explorer on the left, and then select the top option, 'Markdown Preview':

![screen shot 2016-02-29 at 18 17 30](//discourse-user-assets.s3.amazonaws.com/original/2X/e/ea3746446180c0e0ad2bb61f30a6c3ad8bc25c57.png)

Cool! You should now see two panes in Atom. On the left is your text, and on the right is your 'compiled' markdown, ie what it might look like on GitHub:

![screen shot 2016-02-29 at 18 21 38](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a1f27aa8afe060e252f245ced3456f196c85ef1b.png)

Notice that Atom also recognizes what you are working with to be a specific format, ie 'GitHub Markdown':

![screen shot 2016-02-29 at 19 15 43](//discourse-user-assets.s3.amazonaws.com/original/2X/c/cf5b2fc473c32a14a2de302fd88e4c2edde02453.png)

1.  When your markdown file is ready to commit to your GitHub repository, you can go ahead and commit it!

For contributing to the FreeCodeCamp wiki, go to <a href='https://github.com/FreeCodeCamp/freecodecamp/wiki' target='_blank' rel='nofollow'>this page</a> and check out the 'Guides on how to Contribute' section.

For adding a project or files to GitHub, go to <a href='https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/' target='_blank' rel='nofollow'>this page</a>.

**Bonus step:** Atom has a package named <a href='https://atom.io/packages/markdown-preview-plus' target='_blank' rel='nofollow'>Markdown Preview Plus</a>. It does the same as the normal markdown previewer, but the preview file is styled more accurately to the GitHub style. Go ahead and install this package and see what you get.

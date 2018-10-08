# How to work on Guide articles

With your help, we can create a comprehensive reference tool that will help millions of people who are learning to code for years to come. 💛

<!-- TOC -->

- [How to work on Guide articles](#how-to-work-on-guide-articles)
    - [Steps](#steps)
    - [Creating a PR](#creating-a-pr)
        - [Using GitHub.com](#using-githubcom)
        - [Cloning Locally](#cloning-locally)
        - [Running Locally](#running-locally)
    - [Getting PR Accepted](#getting-pr-accepted)
        - [Labels](#labels)
        - [Conflicting/Duplicate Content](#conflictingduplicate-content)
        - [Requesting Changes](#requesting-changes)
        - [Travis CI Build](#travis-ci-build)
        - [Closing](#closing)
        - [Getting Help](#getting-help)
    - [Article Style Guide](#article-style-guide)
        - [Title](#title)
        - [Modularity](#modularity)
        - [Code Blocks](#code-blocks)
        - [Links](#links)
        - [Images](#images)
        - [Attributions](#attributions)
        - [Resources](#resources)
        - [Formatting](#formatting)
    - [Technical Writing](#technical-writing)
        - [Outline](#outline)
        - [Intro](#intro)
        - [Content](#content)
        - [Clarity](#clarity)
        - [Voice](#voice)
            - [Passive](#passive)
            - [Active](#active)
        - [Point of View](#point-of-view)
        - [Abbreviations](#abbreviations)
        - [Proper nouns](#proper-nouns)
        - [Third-Party Tools](#third-party-tools)
- [Reviewing PRs](#reviewing-prs)
    - [Squash and Merge](#squash-and-merge)
    - [Filtering PRs](#filtering-prs)
    - [Templates](#templates)
        - [Thank you](#thank-you)
        - [Thank you and congrats](#thank-you-and-congrats)
        - [Build Error](#build-error)
        - [Syncing Fork](#syncing-fork)
        - [Merge Conflicts](#merge-conflicts)
        - [Duplicate](#duplicate)
        - [Closing](#closing)

<!-- /TOC -->

## Steps

1. 🍴 [Fork this repo](https://github.com/freeCodeCamp/guide#fork-destination-box)
2. 👀️ Follow the contributing guidelines outlined below.
3. 🔧 Make some awesome changes!
4. 👉 [Make a pull request](https://github.com/freeCodeCamp/guide/compare)
5. 🎉 Get your pull request approved - success!

Or just [create an issue](https://github.com/freeCodeCamp/guide/issues) - any little bit of help counts! 😊

## Creating a PR

### Using GitHub.com

Watch the video demonstration or follow the steps below it:

![GIF showing the GitHub interface steps](https://i.imgur.com/0cmxJwN.gif)

1. Go into the **"pages"** folder (located in [`client/src/pages/guide`](/client/src/pages/guide)) and find the article stub you'd like to write or edit.

    > All stubs will be in an index.md file

2. Click the <kbd>Edit this file</kbd> pencil icon and make your changes to the file in GitHub-flavored Markdown.

    > If the icon is greyed out and giving you the warning "You must be on a branch to make or propose changes to this file", then you are likely on another person's tree. At the top left of the page, there is a drop down box which says "Tree: #######". Click on the drop down and change the branch to "master". The pencil icon should now be clickable.

3. Scroll to the bottom of the screen and add a commit message explaining your changes.

4. Then select the radio button option for **"Create a new branch for this commit and start a pull request"** and click <kbd>Propose file changes</kbd>.

5. On the next screen, you can add any other details about your PR, then click <kbd>Create pull request</kbd>.

### Cloning Locally

1. Fork this repository

2. Copy it to your local machine by running the following command:

    ```bash
    git clone https://github.com/YOUR-GITHUB-USERNAME/guide.git
    ```

3. Add a remote upstream so git knows where the official freeCodeCamp guide repository is located by running the following command in the local folder where the repository is stored at:

    ```bash
    git remote add upstream https://github.com/freeCodeCamp/guide.git
    ```

4. Create a new branch for your work with the command `git checkout -b NEW-BRANCH-NAME`.

    > Try to name your branch in a way that describes your article topic, like `fix/article-html`

5. Write your article, commit your changes locally, and push your new branch to GitHub with the command `git push origin NEW-BRANCH-NAME`

6. Go to your repository on GitHub and open a PR

Make sure to maintain your local fork going forward so it stays up-to-date with the freeCodeCamp guide repository.

The next time you want to contribute, checkout your local `master` branch and run the command `git pull --rebase upstream master` before creating a new branch.

This will grab all the changes on the official `master` branch without making an additional commit in your local repository.

### Running Locally

Make sure to have yarn installed (follow these [instructions](https://yarnpkg.com/en/docs/install) if needed).

```bash
# fork repo

# clone down your repo
git clone https://github.com/YOUR-GITHUB-USERNAME/guide.git

# navigate to root folder
cd guide

# install dependencies
yarn install

# run locally
yarn develop
```

In this project, we are using `yarn` because `netlify` builds our site with `yarn`.

## Getting PR Accepted

Here are a few guidelines the reviewers follow when reviewing PRs:

- there is a relevant description and title
- PR respects the [Article style guide](./CONTRIBUTING.md/#article-style-guide)
- we follow general QA tips found in [Moderator guidelines](https://forum.freecodecamp.org/t/freecodecamp-moderator-guidelines/18295)
- as long as a pull request improves or expands the guide, we accept it even if it contains imperfect English or partial content
- older pull requests are reviewed first

### Labels

- **content** is for pull requests that modify the content of articles on the guide (they add a new article or update an existing article)
- **duplicate** is for pull requests that have the same content as another open PR
- **changes requested** is for pull requests that need a change before getting merged
- **stale** is for pull requests with _"changes requested"_ label that doesn't get activity after about 2 weeks and will subsequently be closed.
  - A _stale_ pull request should be closed.
  - Here is [an example](https://github.com/freeCodeCamp/guide/pull/235).

### Conflicting/Duplicate Content

A PR is considered a **duplicate** if it makes changes to the same article as another PR.

In general, a reviewer will:

1. Sort PR from the oldest
2. Search for PRs with similar content
3. Merge from the oldest to the newest

It is very likely there will be merge conflicts with duplicate PRs.

Reviewers will make every effort to resolve these conflicts and merge duplicate PRs.

### Requesting Changes

If a pull request is not perfect, the reviewer may:

- request changes to the contributor and add the *changes requested* label
- fix minor issues and make a commit on top of the PR

### Travis CI Build

All PRs must pass the Travis CI checks before we can merge it.

If a PR breaks the build (a Travis CI check fails and shows a red "X") there are three likely sources.

You will need to fix the issue before we can merge your PR:

1. Your PR creates a new article and it's missing an `index.md` file somewhere.
    - Every folder in `src/pages` needs an `index.md` file in it (and the name has to be `index.md`).
    - Two likely scenarios are
      - you named the new article file something other than `index.md`, or
      - you created both a new folder, then a sub-folder, you wrote the new article in the sub-folder but forget to put a stub `index.md` file in the new folder
2. Your PR creates a new folder and the folder name isn't formatted correctly.
    - Your folder name should be all lowercase and formated in kebab-case (i.e. my-new-folder).
3. The article doesn't have a `title` field at the top.
    - Please refer to [Title](#title) section below under [Article Style Guide](#article-style-guide).

### Closing

We close a pull request

- if an older PR for the same article is merged, and your PR doesn't add new content
- if there is zero/little effort in it (e.g: copy pasting from another source like Wikipedia)
- if there is copied text from a copyrighted source - see [Citation issue](https://github.com/freeCodeCamp/guide/issues/2503)
- if it does not respect the [Article Style Guide](#article-style-guide)
- if it does not respect the [Academic Honesty policy](https://www.freecodecamp.org/academic-honesty)
- if it is stale (if a change is requested and there is no activity for about 2 weeks)

Also, if you're working off a "stub" article, your changes must be substantial enough to replace the stub text.

We won't accept a PR that only adds links to the "More Information:" section.

The repository has a `Normalise.js` script that adds attributes to links, but also checks for "This is a stub..." text via a RegEx.

If found, it will revert the article text back to the generic stub text (and erase your changes).

This is intended behavior, since it allows us to update all stubs if the template stub changed for any reason.

### Getting Help

There's a community of support from a whole team of contributors, whom you can bounce ideas off of and ask for input on your writing.

Stay active in the [contributors chat room](https://gitter.im/freecodecamp/contributors) and ask lots of questions.

## Article Style Guide

We've written the following guide to writing Guide articles to help you get started contributing.

### Title

Article titles should be as short, concise, and to-the-point as possible.

We want campers to quickly find the information they're looking for, and the title should reflect the main theme of the article.

Folder name is used in the URL, so only use dashes -, numbers 0-9, and lowercase letters a-z for it.

However, you can include special characters in the article title.

Here are some examples of properly named titles:

> [`src/pages/html/tables/index.md`](https://github.com/freeCodeCamp/guide/blob/master/src/pages/html/tables/index.md)

```markdown
---
title: Tables
---
```

> [`src/pages/css/borders/index.md`](https://github.com/freeCodeCamp/guide/blob/master/src/pages/css/borders/index.md)

```markdown
---
title: Borders
---
```

> [`src/pages/javascript/loops/for-loop/index.md`](https://github.com/freeCodeCamp/guide/blob/master/src/pages/javascript/loops/for-loop/index.md)

```markdown
---
title: For Loop
---
```

### Modularity

Each article should explain exactly one concept, and that concept should be apparent from the article's title.

We can reference other articles by linking to them inline, or in an "Other Resources" section at the end of the article.

Our goal is to have thousands of articles that cover a broad range of technical topics.

### Code Blocks

Campers will likely use Guide articles as a quick reference to look up syntax. Articles should have simple real-world examples that show common-use cases of that syntax.

GitHub-flavored markdown supports [syntax highlighting in code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting) for many programming languages.

To use it, indicate the language after ```.

For example, the following Markdown

```markdown
    ```html
    <div class='awesome' id='more-awesome'>
      <p>This is text in html</p>
    </div>
    ```
```

will output the following code block with `HTML` syntax highlighting since we indicated the language `html` after the ```.

```html
<div class='awesome' id='more-awesome'>
  <p>This is text in html</p>
</div>
```

The following represents two other examples using JavaScript and CSS syntax highlighting.

```markdown
    ```javascript
    function logTheThings(stuff) {
      console.log(stuff);
    }
    ```

    ```css
    .awesome {
      background-color: #FCCFCC;
    }
    ```
```

Please keep the following recommendations in mind:

- To ensure correct rendering, each codeblock must have a language label. You can find a list of supported languages [here](http://prismjs.com/#languages-list ).
- For codeblocks with no appropriate language, use generic labels like ` ```text `, or ` ```code `.
- You may know about markdown's four-space indentation syntax for writing codeblocks. However, this is currently __not__ supported by our rendering system.

Finally, here are some suggested formatting guidelines when writing code blocks:

- JavaScript statements should end with a `;` semicolon
- Comments made should have a space between the comment characters and the comment themselves
    ```javascript
    // Like this
    ```

### Links

Use Markdown style links in your articles to link to other websites.

```markdown
[freeCodeCamp](https://www.freecodecamp.org/)
```

### Images

For including images, if they aren't already hosted somewhere else on the web, you will need to put them online yourself using a platform like [Imgur](https://imgur.com/) or [Flickr](https://www.flickr.com). You can also host images by committing them to a git repository and pushing it to GitHub. Then you can right-click the image and copy its URL.

We don't allow hosting images directly in the git repository because it would make it far too big (people pulling it to their local system to make changes would end up downloading all the images), and because it is easier to change an image by just changing the URL in an article than by putting the new image in the repository.

To include the image in your article, use the appropriate markdown syntax:

```markdown
![Image Title](https://url-to-image)
```

Then the images should show up when you click the <kcd>Preview</kcd> tab.

You can also add diagrams, graphics, or visualizations as necessary.

You can even embed relevant YouTube videos and interactive [REPL.it](https://repl.it/) code editors.

Don't use emojis or emoticons in the Guide. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

### Attributions

To minimize the potential for plagiarism and maintain integrity in this guide, it is important to give credit where necessary.

Any material quoted, or used directly and unchanged, from source material should be wrapped in quotation marks and be adequately cited. Material that is not a direct quote but is still paraphrased from a different resource should also be cited.

You can create superscript numerals to mark content that is cited using `<sup></sup>` tags.

Like so: <sup>1</sup>

1. freeCodeCamp - Attributions

Then, at the bottom of your article, place a

```markdown
### Sources
```

heading and include all of your citations numbered to correspond with your sources.

An example is highlighted below.

```markdown
Here is some content that should be cited.<sup>1</sup>

And here is even more that should be cited from another source.<sup>2</sup>

### Sources

1. [Doe, John. "Authoring Words." *WikiCoder*. January 1, 1970. Accessed: October 20, 2017](#)
2. [Purdue OWL Staff. "MLA Works Cited: Electronic Sources." *Purdue Online Writing Lab.* October 12, 2017. Accessed: October 20, 2017.](https://owl.english.purdue.edu/owl/resource/747/08/)
```

You can check out the Purdue link above to see how to properly cite web sources (they even show how to cite tweets!).

Typically, an attribution has a structure like the following:

> Author Last Name, Author First Name. "Article Title." *Publication.* Publisher. Date Published. Date Accessed.

If you cannot find an author or published date, which is common, simply omit these.

Use of proper citations will not only keep the guide reputable, but these citations and links will also provide valuable resources should the reader want to learn more about the topic.

Also note that instances of blatant plagiarism will be either removed or have their pull requests declined, and the user will receive a warning.

Please refer to and review freeCodeCamp's [Academic Honesty Policy](https://www.freecodecamp.org/academic-honesty) before contributing.

### Resources

If there are other Guide resources you think campers would benefit from, add them at the bottom in a "Resources" section with a bulleted list.

```markdown
### Resources

- [A New Resource](#link)
```

### Formatting

Use double quotes where applicable.

Format language keywords as code - this is done with the backtick key (located to the left of the "1" key on a US keyboard) in GitHub-flavored markdown. For example, put back ticks around HTML tag names or CSS property names.

Use the Oxford Comma when possible (it is a comma used after the penultimate item in a list of three or more items, before ‘and’ or ‘or’ e.g. an Italian painter, sculptor, and architect). It makes things easier, clearer, and prettier to read.

## Technical Writing

Technical writing, or the literature of science and technology, is hard.

You'll need to take a technical (usually abstract) topic and explain it in a clear, accurate, and objective manner.

You'll likely go through several rounds of proofreading and editing before you're happy with the result.

### Outline

Before you begin writing, create an outline of the topic and think about any coding examples you'll use (if applicable).

This helps to organize your thoughts and make the writing process easier.

### Intro

The introduction paragraph should only be 1-2 sentences long and be a simple explanation of the main topic. It should limit the use of any links to other Guide articles, as they can be distracting.

### Content

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs over a wall of text.

### Clarity

Articles should be written with short, clear sentences, and use as little jargon as necessary.

All jargon should be defined immediately in plain English.

### Voice

Use active voice instead of passive voice. Generally, it's a stronger and more straightforward way to communicate a subject. For example:

#### Passive

The `for` loop in JavaScript is used by programmers to...

#### Active

Programmers use the `for` loop in JavaScript to...

### Point of View

Text should use the second person ("you") to help to give it a conversational tone.

This way, the text and instructions seem to speak directly to the camper reading it.

Try to avoid using the first person ("I", "we", "let's", and "us").

### Abbreviations

If you want to abbreviate a term in your article, write it out fully first, then put the abbreviation in parentheses.

For example, `"In computer science, an abstract syntax tree (AST) is ..."`

### Proper nouns

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in Guide articles.

- JavaScript (capital letters in "J" and "S" and no abbreviations)
- Node.js

Front-end development (adjective form with a dash) is when you working on the front end (noun form with no dash). The same goes with the back end, full stack, and many other compound terms.

### Third-Party Tools

To check for grammar and spelling, we recommend using an app like [Grammarly](https://grammarly.com) or a built in extension/plugin that checks for this within your text editor.

- [VS Code](https://code.visualstudio.com/) - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Sublime Text 3](https://www.sublimetext.com/docs/3/spell_checking.html)

To check your writing style, we recommend the  [Hemingway App](http://www.hemingwayapp.com/).

There’s nothing magical about this simple tool, but it will automatically detect widely agreed-upon style issues:

- passive voice
- unnecessary adverbs
- words that have more common equivalents

The Hemingway App will assign a "grade level" for your writing.

You should aim for a grade level of 6.

Another tool available is the [De-Jargonizer](http://scienceandpublic.com/), originally designed for scientific communication but might help avoid overspecialized wording.

---

# Reviewing PRs

> This section is targeted at reviewers of this repo.

## Squash and Merge

We use the <kcd>Squash and merge</kcd> option when merging the PR which keeps the commit history clean.

![GIF - Squash and merge](https://files.gitter.im/FreeCodeCamp/Contributors/56MQ/9cb8db153d7bb1b3576cd1ffc207e39d.gif)

## Filtering PRs

> PR, Open, Oldest First, Travis CI Build successful, no one assigned, no comments

[`is:pr is:open sort:updated-asc status:success no:assignee comments:0`](https://github.com/freeCodeCamp/guide/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20sort%3Aupdated-asc%20status%3Asuccess%20no%3Aassignee%20comments%3A0)

> PR, Open, Oldest First, Does not have labels: `platform`, `enhancement`, `invalid` or `changes requested`

[`is:pr is:open sort:updated-asc -label:platform -label:enhancement -label:invalid -label:"changes requested"`](https://github.com/freeCodeCamp/guide/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20sort%3Aupdated-asc%20-label%3Aplatform%20-label%3Aenhancement%20-label%3Ainvalid%20-label%3A%22changes%20requested%22).

## Templates

> You can make your own with GitHub's built in [**Saved replies**](https://github.com/settings/replies/) feature or use the ones below.

### Thank you

```markdown
Thank you for your contribution to the page! 👍
We're happy to accept these changes, and look forward to future contributions. 🎉
```

### Thank you and congrats

> For thanking and encouraging first-time contributors.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We're happy to accept these changes, and look forward to future contributions. 📝
```

### Build Error

```markdown
Hey @username

So I'd love to be able to merge your changes but it looks like there is an error with the Travis CI build. ⚠️

Once you resolve these issues, I will be able to review your PR and merge it. 😊

---

> Feel free to reference the [Article Style Guide](https://github.com/freeCodeCamp/guide#article-title) for this repo on formatting an article correctly so your Travis CI build passes. ✅
>
> Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
```

### Syncing Fork

> When PR is not up to date with `master` branch.

``````markdown
Hey @username

So I'd love to be able to merge your changes but it looks like there is an error with the Travis CI build. ⚠️

```bash
Error: ENOTDIR: not a directory, open 'src/pages/java/data-abstraction/index.md'
```

This particular error was not actually caused by your file but was an old error caused by merging faulty code to the `master` branch. It has since been resolved.

To pass the build, you will have to sync the latest changes from the `master` branch of the `freeCodeCamp/guide` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/guide.git

git fetch upstream

git pull upstream master
```

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/guide.git` from above.

Once you sync your fork and pass the build, I will be able to review your PR and merge it. 😊

---

> Feel free to reference the [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
>
> Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
``````

### Merge Conflicts

> When PR has merge conflicts that need to be resolved.¹

```markdown
Hey @username

So I'd love to be able to merge your changes but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, I will be able to review your PR and merge it. 😊

---

> If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️
>
> Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
```
¹ If a first-time-contributor has a merge conflict maintainers will resolve the conflict for them.

### Duplicate

> When PR is repetitive or a duplicate.

```markdown
Hey @username

It seems that similar changes have already been accepted earlier for this article you're editing, sorry about that. 😓

If you feel you have more to add, please feel free to open up a new PR.

Thanks again! 😊

---

> If you have any questions, feel free to reach out through [Gitter](https://gitter.im/FreeCodeCamp/Contributors) or by commenting below. 💬
```

### Closing

> When PR is invalid.

```markdown
Hey @username

You haven't actually added any content so I will be closing this PR and marking it as `invalid`. 😓️

Feel free to open another PR though! 👍
```
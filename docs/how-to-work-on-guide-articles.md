# How to work on Guide articles

With your help, we can create a comprehensive reference tool that will help millions of people who are learning to code for years to come. 💛

You can:

- [Help us by Creating and Editing Guide Articles](#steps-for-creating-and-editing-guide-articles).
- [Help us by reviewing pull requests for Guide Articles]()

## Steps for Creating and Editing Guide Articles

1. 🍴 [Fork this repo](https://github.com/freeCodeCamp/freeCodeCamp#fork-destination-box)
2. 👀️ Follow the contributing guidelines outlined below.
3. 🔧 Make some awesome changes!
4. 📖 Read this [style guide for best practices](/docs/style-guide-for-guide-articles.md).
5. 👉 [Make a pull request](https://github.com/freeCodeCamp/freeCodeCamp/compare)
6. 🎉 Get your pull request approved - success!

Or just [create an issue](https://github.com/freeCodeCamp/freeCodeCamp/issues) - any little bit of help counts! 😊

### [Follow these recommended guidelines from our Style guide for a compelling guide article](/docs/style-guide-for-guide-articles.md)

### Creating a Pull request (PR) to propose changes

There are two ways you can propose a change to the repository, after you edit or add a Guide article:

- [Using the GitHub Web Interface on your browser](#using-the-github-web-interface-on-your-browser).
- [Working on your local machine (_recommended_ for previewing changes)](#working-on-your-local-machine-recommended-for-previewing-changes).

#### Using the GitHub Web Interface on your browser

Watch the video demonstration or follow the steps below it:

![GIF showing the GitHub interface steps](https://cdn-images-1.medium.com/max/1395/1*qnFS6ITMwcpsiZvF5b1pHw.gif)

1. Go into the [**"guide"**](/guide) folder (located in freeCodeCamp repository), select the language you want to contribute to, and find the article stub you'd like to write or edit.

    > All stubs will be in an index.md file

2. Click the <kbd>Edit this file</kbd> pencil icon and make your changes to the file in GitHub-flavored Markdown.

    > If the icon is greyed out and giving you the warning "You must be on a branch to make or propose changes to this file", then you are likely on another person's tree. At the top left of the page, there is a drop down box which says "Tree: #######". Click on the drop down and change the branch to "master". The pencil icon should now be clickable.

3. Scroll to the bottom of the screen and add a commit message explaining your changes.

    (Optional): We highly recommend making a conventional commit message. This is a good practice that you will see on some of the popular Open Source repositories. As a developer, this encourages you to follow standard practices.

    Some examples of conventional commit messages are:

    ```md
    fix: update HTML guide article
    fix: update build scripts for Travis-CI
    feat: add article for JavaScript hoisting
    docs: update contributing guidelines
    ```

    Keep these short, not more than 50 characters. You can always add additional information in the description of the commit message.

    This does not take any additional time than a unconventional message like 'update file' or 'add index.md'

    You can learn more about [why you should use these here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

4. Then select the radio button option for **"Create a new branch for this commit and start a pull request"** and click <kbd>Propose file changes</kbd>.

5. On the next screen, you can add any other details about your PR, then click <kbd>Create pull request</kbd>.

Congratulations 🎉! You have just created a pull request.

#### Working on your local machine (_recommended_ for previewing changes)

You are not required to work on your local machine, unless you would like to preview your edits or work with UI fixes and enhancements. This is also recommended if you run into git issues like merge conflicts, rebasing, etc.

##### Read these guidelines on [How to setup freeCodeCamp locally](/docs/how-to-setup-freecodecamp-locally.md)

### Getting PR Accepted

Here are a few guidelines the reviewers follow when reviewing PRs:

- there is a relevant description and title
- PR respects the [style guide](/docs/style-guide-for-guide-articles.md)
- we follow general QA tips found in [Moderator guidelines](https://forum.freecodecamp.org/t/freecodecamp-moderator-guidelines/18295)
- as long as a pull request improves or expands the guide, we accept it even if it contains imperfect English or partial content
- older pull requests are reviewed first

#### Labels

- **content** is for pull requests that modify the content of articles on the guide (they add a new article or update an existing article)
- **duplicate** is for pull requests that have the same content as another open PR
- **changes requested** is for pull requests that need a change before getting merged
- **stale** is for pull requests with _"changes requested"_ label that doesn't get activity after about 2 weeks and will subsequently be closed.
  - A _stale_ pull request should be closed.
  - Here is [an example](https://github.com/freeCodeCamp/freeCodeCamp/pull/235).

#### Conflicting/Duplicate Content

A PR is considered a **duplicate** if it makes changes to the same article as another PR.

In general, a reviewer will:

1. Sort PR from the oldest
2. Search for PRs with similar content
3. Merge from the oldest to the newest

It is very likely there will be merge conflicts with duplicate PRs.

Reviewers will make every effort to resolve these conflicts and merge duplicate PRs.

#### Requesting Changes

If a pull request is not perfect, the reviewer may:

- request changes to the contributor and add the *changes requested* label
- fix minor issues and make a commit on top of the PR

#### Travis CI Build

All PRs must pass the Travis CI checks before we can merge it.

If a PR breaks the build (a Travis CI check fails and shows a red "X") there are three likely sources.

You will need to fix the issue before we can merge your PR:

1. Your PR creates a new article and it's missing an `index.md` file somewhere.
    - Every folder in `src/pages` needs an `index.md` file in it (and the name has to be `index.md`).
    - Two likely scenarios are
      - you named the new article file something other than `index.md`, or
      - you created both a new folder and a sub-folder, then you wrote the new article in the sub-folder but forgot to put a stub `index.md` file in the new folder
2. Your PR creates a new folder and the folder name isn't formatted correctly.
    - Your folder name should be all lowercase and formatted in kebab-case (i.e. my-new-folder).
3. The article doesn't have a `title` field at the top.
    - Please refer to [Title](#title) section below under [Style guide for writing articles](/docs/style-guide-for-guide-articles.md).

### When do we close pull requests

We close a pull request

- if an older PR for the same article is merged, and your PR doesn't add new content
- if there is zero/little effort in it (e.g: copy pasting from another source like Wikipedia)
- if there is copied text from a copyrighted source - see [Citation issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/2503)
- if it does not respect the [Style guide for writing articles](/docs/style-guide-for-guide-articles.md)
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

---

## Steps for reviewing pull requests for Guide Articles

> This section is targeted at reviewers of this repo.

## Squash and Merge

We use the <kcd>Squash and merge</kcd> option when merging the PR which keeps the commit history clean.

![GIF - Squash and merge](https://files.gitter.im/FreeCodeCamp/Contributors/56MQ/9cb8db153d7bb1b3576cd1ffc207e39d.gif)

### Filtering PRs

> PR, Open, Oldest First, Travis CI Build successful, no one assigned, no comments

[`is:pr is:open sort:updated-asc status:success no:assignee comments:0`](https://github.com/freeCodeCamp/freeCodeCamp/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20sort%3Aupdated-asc%20status%3Asuccess%20no%3Aassignee%20comments%3A0)

> PR, Open, Oldest First, Does not have labels: `platform`, `enhancement`, `invalid` or `changes requested`

[`is:pr is:open sort:updated-asc -label:platform -label:enhancement -label:invalid -label:"changes requested"`](https://github.com/freeCodeCamp/freeCodeCamp/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20sort%3Aupdated-asc%20-label%3Aplatform%20-label%3Aenhancement%20-label%3Ainvalid%20-label%3A%22changes%20requested%22).

### Templates

> You can make your own with GitHub's built in [**Saved replies**](https://github.com/settings/replies/) feature or use the ones below.

#### Thank you

```markdown
Thank you for your contribution to the page! 👍
We're happy to accept these changes, and look forward to future contributions. 🎉
```

#### Thank you and congrats

> For thanking and encouraging first-time contributors.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We're happy to accept these changes, and look forward to future contributions. 📝
```

#### Build Error

```markdown
Hey @username

So I'd love to be able to merge your changes but it looks like there is an error with the Travis CI build. ⚠️

Once you resolve these issues, I will be able to review your PR and merge it. 😊

---

> Feel free to reference the [Style guide for writing articles](https://github.com/freeCodeCamp/freeCodeCamp#article-title) for this repo on formatting an article correctly so your Travis CI build passes. ✅
>
> Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
```

#### Syncing Fork

> When PR is not up to date with `master` branch.

``````markdown
Hey @username

So I'd love to be able to merge your changes but it looks like there is an error with the Travis CI build. ⚠️

```bash
Error: ENOTDIR: not a directory, open 'src/pages/java/data-abstraction/index.md'
```

This particular error was not actually caused by your file but was an old error caused by merging faulty code to the `master` branch. It has since been resolved.

To pass the build, you will have to sync the latest changes from the `master` branch of the `freeCodeCamp/freeCodeCamp` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, I will be able to review your PR and merge it. 😊

---

> Feel free to reference the [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
>
> Also, it's good practice on GitHub to write a brief description of your changes when creating a PR. 📝
``````

#### Merge Conflicts

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

#### Duplicate

> When PR is repetitive or a duplicate.

```markdown
Hey @username

It seems that similar changes have already been accepted earlier for this article you're editing, sorry about that. 😓

If you feel you have more to add, please feel free to open up a new PR.

Thanks again! 😊

---

> If you have any questions, feel free to reach out through [Gitter](https://gitter.im/FreeCodeCamp/Contributors) or by commenting below. 💬
```

#### Closing invalid pull requests

> When PR is invalid.

```markdown
Hey @username

You haven't actually added any content so I will be  invalid pull requests this PR and marking it as `invalid`. 😓️

Feel free to open another PR though! 👍
```

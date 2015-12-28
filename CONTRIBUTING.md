## Code Not Working?
Do not file an issue until you have:

1. Read [Help I've Found a Bug](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Help-I've-Found-a-Bug) wiki page and followed the instructions there.
2. Asked for confirmation in the appropriate [Help Room](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Help-Rooms)
3. Please *do not* open an issue without a 3rd party confirmation of your problem.

## I want to help!
We welcome pull requests from Free Code Camp campers (our students) and seasoned JavaScript developers alike! Follow these steps to contribute:

1.  Check our [public Waffle Board](https://waffle.io/freecodecamp/freecodecamp).
2.  Pick an issue that nobody has claimed and start working on it. If your issue isn't on the board, open an issue. If you think you can fix it yourself, start working on it. Feel free to ask for help in our [General Gitter Chat Room](https://gitter.im/FreeCodeCamp/FreeCodeCamp), or in our [Help Contributors Chat Room](https://gitter.im/FreeCodeCamp/HelpContributors)
3. You can find issues we are seeking assistance on by searching for the [Help Wanted](https://github.com/FreeCodeCamp/FreeCodeCamp/labels/help%20wanted) tag.

## Contribution Guidelines

1.  Fork the project: [How To Fork And Maintain a Local Instance of Free Code Camp](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/How-To-Fork-And-Maintain-a-Local-Instance-of-Free-Code-Camp)
2.  Create a branch specific to the issue or feature you are working on. Push your work to that branch. ([Need help with branching?](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches))
  3.  Name the branch something like `fix/xxx` or `feature/xxx` where `xxx` is a short description of the changes or feature you are attempting to add. For example `fix/email-login` would be a branch where I fix something specific to email login.
4.  You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything doesn't conform to [Free Code Camp's JavaScript Style Guide](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Free-Code-Camp-JavaScript-Style-Guide) (you can find a summary of those rules [here](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/.eslintrc). Please do not ignore any linting errors, as they are meant to **help** you and to ensure a clean and simple code base. Make sure none of your JavaScript is longer than 80 characters per line.
5.  Squash your Commits. Ref: [rebasing](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/git-rebase)

## Create a Pull Request
1. Read our [How to Create a Pull Request for Free Code Camp](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/How-To-Create-A-Pull-Request-for-Free-Code-Camp)
2.  Submit a [pull request](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute) from your branch to Free Code Camp's `staging` branch. 
   - The title (also called the subject) of your PR should be descriptive of your changes. i.e. `fix typo in basic-javascript challenge` 
   - If the PR is meant to fix a specific issue, append to the end of your PR's commit message `closes #1337`. This tells GitHub to close that issue if the PR is merged.
   - Do NOT add issue numbers to the PR's title. i.e. `minor improvements in basic-javascript challenge`

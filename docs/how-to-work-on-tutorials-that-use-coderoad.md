## How the tutorials work
The freeCodeCamp tutorials that use CodeRoad each have their own repo under the freeCodeCamp GitHub organization. They are the ones that start with `learn-`. For example, `https://github.com/freeCodeCamp/learn-bash-by-building-a-boilerplate/`. See a [full list here](https://github.com/orgs/freeCodeCamp/repositories?q=learn&type=&language=&sort=).

Each tutorial repo has a `main` branch and a "version" branch, e.g. `v1.0.0`.

The two main files on the `main` branch are the `TUTORIAL.md` and `coderoad.yaml` files. `TUTORIAL.md` contains all the instructions, hints, and titles, etc for users in the tutorial. `coderoad.yaml` contains instructions for CodeRoad; such as what commands to run and when, what files to watch for changes, and what version branch to use for the steps, among other things.

The "version" branch contains the commits that will be loaded on each step of a tutorial. The commit messages on this branch have to be specific. The first commit needs `INIT` for its message and contains all the files to load before the first lesson. Subsequent commit messages have to match the step number in `TUTORIAL.md` from the `main` branch. For example, the commit will message `10.1` will be loaded when a user goes to step `10.1`. In order to make changes to commits on this branch, you will need to rebase and edit the commit you want changed. This will rewrite the git history, so we cannot accept PR's to this branch. Once a version branch is on the freeCodeCamp repo, it should never change.

> [!WARNING]
>
> Never make or push changes to a version branch that is on one of the freeCodeCamp repos. Always create a new one

## How to contribute

### Prerequisites
Install the [CodeRoad CLI tools](https://www.npmjs.com/package/@coderoad/cli) with `npm install -g @coderoad/cli`

### Working on `main`
You never need to modify the `tutorial.json` file directly. That will be created with the CLI tools.

> [!NOTE]
>
> These changes will use the existing version branch. If they are substantial, feel free to add them to `CHANGELOG.md`. Most of the time, a good commit message should work

**If you want to test your changes, follow all the steps below. If not, you only need to follow the numbered steps:**

1. Create a new branch off of `main`
    - Change the `uri` in `coderoad.yaml` to your fork of the repo
2. Make and commit your changes
3. Run `coderoad build` to recreate the `tutorial.json` file
    - Add and commit the file
    - Push the changes to your fork
    - Merge your branch into `main` on your fork
    - Test your changes by using the `tutorial.json` file on your fork. This can be tested following the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha)
    - After testing, change the `uri` in `coderoad.yaml` back to the freeCodeCamp repo
    - Add and commit the changes
    - Run `coderoad build` again to create a new `tutorial.json` file
4. Commit the changes with `update json` as the message
5. Make a PR

### Working on version branch

> [!WARNING]
>
> Reminder. Never make or push changes to a version branch that is on one of the freeCodeCamp repos. Always create a new one

- Checkout the latest version branch with `git checkout -b vX.X.X upstream/vX.X.X`
- Create a new branch off of that, incrementing the version with `git checkout -b vX.X.Y`
- Make your changes to the version branch. See more info in the [CodeRoad Documentation](https://coderoad.github.io/docs/edit-tutorial) for how to work with tutorials
- Push your new branch to your fork with `git push -u origin vX.X.Y`
- Checkout the `main` branch
- Make changes directly to the `main` branch. Change the `uri` in `coderoad.yaml` to your fork of the repo. This is so you can test it before pushing to the freeCodeCamp repo. Change the version to the new branch in the two spots of that file. Add your changes for the new version to `CHANGELOG.md`
- Commit your changes with the message `test: vX.X.Y - <optional description>`
- Run `coderoad build` to create a new `tutorial.json` file
- Add and commit the file with the message `test: vX.X.Y - update json`
- Push the changes to the `main` branch of your fork. If you have write access to the freeCodeCamp repo, be careful not to push to that
- Test your changes by using the `tutorial.json` file on your fork. This can be tested following the instructions on the [rdb-alpha repo](https://github.com/freeCodeCamp/rdb-alpha)


### Pushing a new version
If you have write access to the freeCodeCamp repo and are pushing your own changes:
- Checkout the new version branch
- Push it to freeCodeCamp - `git push -u upstream vX.X.Y` - It’s necessary to push the new branch before you update `main` to include the new `tutorial.json` file
- Checkout the main branch
- Change the `uri` in `coderoad.yaml` back to the freeCodeCamp repo
- Add and commit the changes with the message, `release vX.X.Y - <optional message>`
- Run `coderoad build` to create the new `tutorial.json` file
- Add and commit the file with the message, `release vX.X.Y - update json`

### Reviewing Changes
Never push changes to an existing live, or previously live, version branch
- View the changelog and the new commits on main of the users fork to see what they changed
- Create a remote to the users fork
- Create a local branch off of their version branch with `git checkout -b v#.#.# remote/v#.#.#`
- If needed, delete your local `main` branch, then create a new one off the users fork `git checkout main remote/main`
- Verify that the version in the two spots of coderoad.yaml matches the branch new branch name
- Run `coderoad build`
- Check your git status. There should be no new changes. This ensures that no changes were made to the version branch after the last time a `tutorial.json` was created
- If needed, test the changes by following the instructions in the `RDBMS-alpha` repo. Use the `file` option with CodeRoad, inputting your local `tutorial.json` file, to load the local version of the tutorial
- If everything looks good, change the uri in coderoad.yaml back to freeCodeCamp’s URL,
- Commit your changes with a message that starts with `release: v#.#.# - <description>` using the version branch 
- Run coderoad build to build a new tutorial.json file
- Commit the new file with the message “update json”
- Checkout the version branch and push it to the freeCodeCamp remote - `git push -u upstream v#.#.#`
- Do not do this before the previous step - Push the `main` branch to the freeCodeCamp remote - `git push -f upstream main`.
- The new changes are in place. Start the project using the tutorial.json file on the freeCodeCamp repo and complete a few steps to make sure it’s working

After you have released a new version, or revert to a previous version, of a tutorial:
- Open the tutorial, using the freeCodeCamp `tutorial.json` file, and go through at least a few lessons to make sure it’s loading properly


### How to revert to a previous version




## Relational Databases Tutorials





### Logs
The `INIT` commit has a variety of files that are used to generate logs. Be it from the terminal, or when entering PSQL commands.
This is how the tests run automatically. Log files are created, with the

Each commit (step) adds a new file with a new test and comments out the previous test


Bash



PostgreSQL



PSQL






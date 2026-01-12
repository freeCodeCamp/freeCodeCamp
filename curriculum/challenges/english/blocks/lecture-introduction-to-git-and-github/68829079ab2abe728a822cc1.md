---
id: 68829079ab2abe728a822cc1
title: How Do You Push a Local Repository to GitHub?
challengeType: 19
dashedName: how-do-you-push-a-local-repository-to-github
---

# --description--

In a previous lesson, you learned how to create a new repository on GitHub. But what if you had an existing project locally that you want to add to GitHub? In this lesson, you will learn how to push existing local repositories to GitHub and pull changes down from remote repositories.

Start by creating a new repository on GitHub without any files. When done correctly, you should be redirected a page that includes the URL needed to clone your repository.

Now navigate to your terminal and select an existing project you wish to add to GitHub. In this lesson, I am choosing a local project called `super-awesome-game` with the following files inside:

```sh
jessicawilkins super-awesome-game >> ls
README.md  index.html script.js  styles.css
```

To setup version control for this project using Git, you will need to run the `git init` command in the project directory. This will initialize an empty Git repository so Git can begin tracking changes for this project. When done correctly you should see a similar output in the terminal:

```sh
jessicawilkins super-awesome-game >> git init
Initialized empty Git repository in /Users/jessicawilkins/workspace/freeCodeCamp/super-awesome-game/.git/
```

When you initialize an empty Git repository to a project, a new `.git` hidden directory will be added. To view the addition of the directory you can run the `ls -a` command which lists all files and directories, including hidden ones:

```sh
jessicawilkins super-awesome-game >> ls -a
.          ..         .git       README.md  index.html script.js  styles.css
```

It is important not to delete that `.git` directory, otherwise all of your Git history will be lost.

Now that the empty Git repository has been initialized, you can run the `git status` command. This command is used to show the current state of your working directory - you will be using this command a lot in your workflow. You should see an output similar to this:

```sh
jessicawilkins super-awesome-game >> git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md
	index.html
	script.js
	styles.css

nothing added to commit but untracked files present (use "git add" to track)
```

`On branch main` means that you are on the `main` branch. A branch in Git is a separate workspace where you can make changes. The `main` branch will often represent the primary or production branch in a real world application. Developer teams will create multiple branches for new features and bug fixes and then merge those changes back into the `main` branch. You will learn more about that process in a future lesson.

`Untracked files` means that Git has detected files that it is currently not tracking.

There are five states that a file can be in:

1. "Untracked": This means that the file is new to the repository, and Git has not "seen" it before.
2. "Modified": This file existed in the previous commit, and has changes that have not been committed.
3. "Ignored": You likely won't see ignored files in Git, but your IDE might have an indicator for them. Ignored files are excluded from Git operations, typically because they are included in the `.gitignore` file.
4. "Deleted": A deleted file is the opposite of an untracked file - it's a file that previously existed, and has been removed.
5. "Renamed": A renamed file is a file where the contents are unchanged, but the name or location of the file was modified. In some cases, a file can be considered renamed even if it has a small amount of changes.

When you have uncommitted changes in your repo, you will need to first "stage" them. A "staging area" is a special file in your `.git` directory that contains information that will go into your next commit. A commit is effectively a snapshot of the current state of your repository.

If you want to stage one file at a time, then you can use the following command:

```sh
git add name-of-file
```

If you want to stage all unstaged changes, then you can use `git add .` The period (`.`) is an alias for the current directory you are in. Some developers will warn against using `git add .` because you might end up staging files that you didn't intend to. If that happens, you can "unstage" them using the following command:

```sh
git reset name-of-file
```

In general though, as long as you are monitoring which files are being added using `git status` before you stage them, you should be fine.

Once you stage your files, then you will need to commit them. You can commit your changes by running the `git commit` command. This will open up your preferred editor of choice you set in the Git configuration. Once the editor is open, you can provide a detailed message of your changes. You can also choose to provide a shorter message by using the `git commit -m` command like this:

```sh
git commit -m "short message goes here"
```

If you are going to use the `-m` flag, you will still want to provide a descriptive message to provide context for the changes. Here are some examples of good messages you might use:

```sh
git commit -m "feat(api): implement JWT-based authentication"
git commit -m "fix(auth): correct token expiration time"
git commit -m "refactor: simplify login flow logic"
```

The `feat(api)` and `fix(auth)` follows the Conventional Commits style which is used to provide context on the types of changes in that commit.

After you have committed your work, and run `git status` again, you should see the following output in the terminal:

```sh
On branch main
nothing to commit, working tree clean
```

To view all of your prior commits for this project you can run the `git log` command. This will list all prior commits with helpful information like the author, date of commit, commit message and commit hash. The commit hash is a long string which serves as a unique identifier for a commit.

Once you are done committing your work, you can now push your changes to GitHub. You will first need to setup the remote connection to your remote repo. You learned about this in the previous lesson, but here is a reminder using SSH:

```sh
git remote add origin git@github.com:your-github-username/name-of-repo.git
```

The last step is to push your changes to GitHub using this command:

```sh
git push -u origin main
```

The `-u` flag is shorthand for `--set-upstream`. It connects your local `main` branch to the remote `main` branch on `origin`. You only need to use it once per new branch. After that, you can simply run `git push` without specifying the branch name.

When done correctly, you should see a similar result in the terminal:

```sh
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 253 bytes | 253.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/jdwilkin4/super-awesome-game.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

You should also see the new changes on your GitHub repo page when you refresh the page.

If you are collaborating with others on a project and need to pull down new changes from the repository, you can use the `git pull` command. You will learn more about working on a team and collaboration in a future lesson.

# --questions--

## --text--

What command would you use to initialize a Git repository in an existing local directory?

## --answers--

`git create`

### --feedback--

This is the basic command that transforms a regular directory into a Git repository.

---

`git start`

### --feedback--

This is the basic command that transforms a regular directory into a Git repository.

---

`git init`

---

`git repository --new`

### --feedback--

This is the basic command that transforms a regular directory into a Git repository.

## --video-solution--

3

## --text--

What does the `git commit -m` command do?

## --answers--

It commits your changes and shows a log of all commit messages you have written so far.

### --feedback--

Refer back to the section discussing commits.

---

It commits your changes and opens an editor for you to write an elaborate message.

### --feedback--

Refer back to the section discussing commits.

---

It commits your changes and omits the message your provides.

### --feedback--

Refer back to the section discussing commits.

---

It commits your changes with a short message you provide.

## --video-solution--

4

## --text--

Which of the following commands is used to push up changes to remote repository?

## --answers--

`git pushing`

### --feedback--

Review the last bit of the lesson.

---

`git pushed`

### --feedback--

Review the last bit of the lesson.

---

`git push`

---

`git pushes`

### --feedback--

Review the last bit of the lesson.

## --video-solution--

3

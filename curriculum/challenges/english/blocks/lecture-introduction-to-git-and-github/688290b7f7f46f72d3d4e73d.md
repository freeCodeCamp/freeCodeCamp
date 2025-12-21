---
id: 688290b7f7f46f72d3d4e73d
title: How Do You Contribute to Other People's Repositories?
challengeType: 19
dashedName: how-do-you-contribute-to-other-peoples-repositories
---

# --description--

You've learned about creating commits and pushing them up to your own repository that you control. You can do the same for other projects that you do not maintain, but there are some extra steps.

First and foremost, you generally won't have "write access" to someone else's project. This means you cannot push commits directly to them. Instead, you'll need to create a copy of the repository to work from. This process is called "forking".

To fork a repository, visit the repository you want to contribute to on GitHub. At the top, you'll see a "Fork" button. Click this to be taken to the UI for creating your fork.

You'll see a similar screen to the one where you created your own repository, but with fewer options. You can choose an owner, either your personal account or an organization you have access to, a new name for the fork, and a new description.

You also have an option to copy only the `main` branch (or the default configured for the repository). This is generally a good idea, unless you need to contribute to a specific feature branch. You'll learn more about branches in a future lesson. For now, leave that box ticked.

Click "Create fork" and your new repository will be created, and you'll automatically be taken to it.

Next, clone it to your local computer just like you would do with your own repository, using SSH or the GitHub CLI.

Now, let's take a look at the remotes your local clone has configured. Open a terminal in the local repository directory and run `git remote -v` to get a full list, it should look something like this:

```sh
origin git@github.com:your-username/your-repo-name.git (fetch)
origin git@github.com:your-username/your-repo-name.git (pull)
```

By cloning a repository from GitHub, Git has automatically configured your fork as the `origin` remote. However, when you're working from a fork, you will often need to update your copy to bring in the changes from the original repository.

To do this, let's add the original repository as another remote. Return to the page where you forked the repository from, click the "Code" button, and grab the SSH URL. Then run the command to create a new upstream remote:

```sh
git remote add upstream git@github.com:original-repo-username/repo-name.git
```

`upstream` is the name of the remote - you can name it something else, but `upstream` tends to be the convention. If you look at your remotes again, you will see your new upstream remote:

```sh
origin git@github.com:your-username/your-repo-name.git (fetch)
origin git@github.com:your-username/your-repo-name.git (pull)
upstream git@github.com:original-repo-username/your-repo-name.git (fetch)
upstream git@github.com:original-repo-username/your-repo-name.git (pull)
```

With the `upstream` remote you'll be able to do things like `git fetch upstream` and `git merge upstream/main` to get the latest changes from the original project into your local fork.

A fork is still a repository, and you create commits and push changes in the same way. However, before diving into that, you should understand that there are certain strategies that you should follow when making changes to someone else's project. You'll learn more about these strategies in upcoming lessons.

Projects which make their source code available to the public, allow you to modify the code, and accept code contributions are called "open source" projects. There are a lot of benefits to open source, such as allowing the community to help you identify and fix bugs, learning from the contributions people make to your work, and fostering a community of developers that you can turn in to a network.

When you make changes to someone's project, you are considered an "open source contributor". Contributing to open source projects can be an excellent preview of what working on a professional developer team is like. And some of the strategies here will help you do just that, and carry over into your first paid role.

And if you ever have questions about how to contribute, most open source projects will have contributing guidelines that contain an overview of everything you need to know. But if you still aren't sure, it never hurts to open an issue on the repository to ask your questions - or, if they have a community space on a platform like Discord, join and ask your questions there.

# --questions--

## --text--

Why do you need to fork a repository when contributing to someone else's project?

## --answers--

To make the code run faster.

### --feedback--

Think about the permissions model for repositories you don't own.

---

Because you generally don't have write access to someone else's repository.

---

To rename the repository.

### --feedback--

Think about the permissions model for repositories you don't own.

---

To completely replace the original repository.

### --feedback--

Think about the permissions model for repositories you don't own.

## --video-solution--

2

## --text--

After forking and cloning a repository, what command would you use to add the original repository as a remote?

## --answers--

`git add upstream [URL]`

### --feedback--

Consider which Git command is used to manage remote repositories.

---

`git clone upstream [URL]`

### --feedback--

Consider which Git command is used to manage remote repositories.

---

`git remote add upstream [URL]`

---

`git push upstream [URL]`

### --feedback--

Consider which Git command is used to manage remote repositories.

## --video-solution--

3

## --text--

What is the conventional name for the remote that points to the original repository you forked from?

## --answers--

`origin`

### --feedback--

Remember the term mentioned in the lesson that is typically used for this purpose.

---

`main`

### --feedback--

Remember the term mentioned in the lesson that is typically used for this purpose.

---

`source`

### --feedback--

Remember the term mentioned in the lesson that is typically used for this purpose.

---

`upstream`

## --video-solution--

4

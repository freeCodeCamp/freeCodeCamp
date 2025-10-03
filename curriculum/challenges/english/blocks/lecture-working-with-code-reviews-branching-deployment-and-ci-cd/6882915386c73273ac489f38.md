---
id: 6882915386c73273ac489f38
title: What Are Some Best Practices for Developing a Git Branching Strategy?
challengeType: 19
dashedName: what-are-some-best-practices-for-developing-a-git-branching-strategy
---

# --description--

We've talked a bit about branches in the previous lessons. You've learned how to create branches, why you shouldn't commit directly to `main`, and similar. But when and why should you actually create branches?

First, let's talk about why you shouldn't just push a bunch of commits to `main`. Your default branch should be reliably stable - that is, at any given time I should be able to pull down your current `main` branch and build, run, and test your application. If you are pushing up partially completed features, or WIP commits, then this may not always be true.

Additionally, it is very common to work on multiple features in tandem. If you're pushing partial work to `main` for multiple features simultaneously, it becomes much more challenging to debug a potential issue since you do not have isolated changes. On top of that, context switching (or changing which tasks you are working on) is nowhere near as clean.

So when should you create a branch? A general rule of thumb is to create a branch for every isolated unit of work. That is, if you are working on a new OAuth feature, that work should be on a dedicated branch. If you then need to fix a bug in your password authentication, that work should be on its own dedicated branch. Need to redesign the user profile page? That's another branch.

Note that you should always create your branches off of `main`. So, if you are working on a branch for your OAuth feature, you would checkout `main` before creating a new branch for your password authentication fix. Otherwise, if you create a branch for the password fix directly from your OAuth branch, you'll end up with the commits from your OAuth work and the history will be muddied.

But how should you name your branches? Well, that's entirely up to you (or the project you are contributing to), but here are a few common conventions:

`scope/description` - where `scope` is something like `feat` or `fix`, and `description` is a very short explanation of the branch's changes. For example: `feat/oauth-support`.

`scope/issue/description` - similar to the previous convention, but including the number associated with the related issue. For example: `fix/25/password-auth`.

`username/scope/description` - For projects where you all work off of branches in the original repository instead of forking it (this is common with private internal repositories), it can be helpful to include your username at the start of the branch. For example: `naomi-lgbt/feat/profile-redesign`.

Let's cover a few other notes about branching strategies.

For long-lived feature work, such as a beta feature that requires significant developer-hours, you may want to use a feature flag to selectively enable the logic rather than a branch. The longer a branch remains unmerged, the more likely you are to encounter conflicts.

You may, however, wish to maintain dedicated branches for deployment environments or releases. For example, the freeCodeCamp repository uses `prod-staging` and `prod-current` to trigger deployments to staging and production servers, respectively. This can free up the team to iterate faster, merging as things are ready and approved without having to trigger a deployment for every merge. Instead, deployments are created by merging the latest `main` into those production branches.

You may also want to maintain "release branches", or branches that represent a major version of your product. This allows you to have a clean state for each major release, so if you need to backport a critical security patch to an earlier release version you can do so without having to include any of the new version's changes.

And finally, you should avoid merging your branches into `main` using the local CLI. Instead, create a pull request with your changes and merge through that flow. This gives you a chance to ensure any tests pass in your CI (which you will learn about in a future lesson), and to double check the diff view to make sure you have included only the changes you want merged.

With these tips, you can start branching your way to success!

# --questions--

## --text--

Why should you avoid committing directly to the `main` branch?

## --answers--

Because Git doesn't allow direct commits to `main`.

### --feedback--

Think about the stability and reliability requirements of the default branch.

---

Because the `main` branch should remain reliably stable at all times.

---

Because commits to `main` are permanently locked and can't be changed.

### --feedback--

Think about the stability and reliability requirements of the default branch.

---

Because `main` branches have slower performance than feature branches.

### --feedback--

Think about the stability and reliability requirements of the default branch.

## --video-solution--

2

## --text--

Which of the following is a best practice when creating a new branch?

## --answers--

Create new branches from your current feature branch.

### --feedback--

Think about keeping branch histories clean and avoiding unintended code inclusion.

---

Always create new branches from `main`.

---

Only create branches for major features.

### --feedback--

Think about keeping branch histories clean and avoiding unintended code inclusion.

---

Limit yourself to one branch per week.

### --feedback--

Think about keeping branch histories clean and avoiding unintended code inclusion.

## --video-solution--

2

## --text--

What is a recommended approach for handling long-lived feature work?

## --answers--

Create one massive branch that contains all related work.

### --feedback--

Consider the potential for merge conflicts with branches that remain unmerged for long periods.

---

Use feature flags rather than long-lived branches.

---

Always merge directly to `main` using the local CLI.

### --feedback--

Consider the potential for merge conflicts with branches that remain unmerged for long periods.

---

Create a new repository for each major feature.

### --feedback--

Consider the potential for merge conflicts with branches that remain unmerged for long periods.

## --video-solution--

2

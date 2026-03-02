---
id: 688290ef85c79973321a23af
title: What Does a Typical Code Review Process Look Like for Projects?
challengeType: 19
dashedName: what-does-a-typical-code-review-process-look-like-for-projects
---

# --description--

In a previous lesson, you learned how to make a pull request to your own repository. You also learned how to merge that pull request. But you could only do that because the repository belongs to you - you have maintainer access to your own repositories, which means you have permission to merge pull requests.

When you contribute to someone else's open source project, however, you typically won't have those permissions. Instead, you'll need to wait for the maintainers to go through the code review process and accept your contribution. They will then handle merging it.

But what does the code review process look like?

The process that maintainers take will vary from person to person, and there may be project-specific approaches. But in general, there are typically three steps to a code review.

The first is to confirm that the CI, or continuous integrations, passes. You'll learn more about this in a future lesson, so for now you can think of them as checks to validate that the code meets style guidelines and passes a test suite.

If the CI fails, maintainers will typically request that you update the pull request to address the failures. These failures should include some sort of report you can look at to see what went wrong, but maintainers may also provide you more specific guidance to resolve the issue.

Once the checks pass, the maintainers will look at your actual code changes. They can analyze the diff view to see what you've modified, added, or deleted. They may ask questions about why you took specific approaches, so it's good to be deliberate and thoughtful when you are preparing conversations.

They may also request you make additional modifications. We'll talk about what that looks like in a bit.

The last step is usually to pull down your changes locally. The maintainers can then run the application with your modifications, test the functionality, and verify nothing is broken or behaving in unexpected ways.

If everything looks good, a maintainer will approve your pull request - sometimes with a "LGTM" comment, which stands for "looks good to me". After your pull request has been approved, it should be merged whenever the maintainers are ready to pull the changes in. Some projects may require more than one approval - freeCodeCamp, for example, requires two.

But what if something is not correct with your pull request? Maintainers can perform a review in which they request changes. These requests can come in a couple of forms.

Sometimes, a maintainer may just leave a "comment" with their request, maybe indicating something you should change or update, but with more freedom of how you implement it.

Or, maintainers may also leave an official "request changes" comment. Typically, a comment like this blocks the pull request from being merged. You'll need to make the desired changes, and then the same maintainer who requested the changes will need to re-review and request more changes or approve your work.

When maintainers have specific changes in mind, they can actually propose changes through GitHub's UI. When they use a direct suggestion like this, GitHub will give you a button to commit the suggestion to your branch directly. However, if there are multiple suggestions like this, you'll want to switch to the files view.

From this view, you can add all of the suggestions (one by one) into a "batch", and commit them all in one go. This is incredibly useful when there are many suggestions, as doing them individually would result in many commits. All of the CI checks would have to run on each and every commit, and this can slow down the process for accepting your PR.

If the requested changes are significant, you will likely want to make the changes locally, commit them to the same branch that you used for the PR, and push them up. GitHub will automatically update your pull request to reflect the new commits.

There are a couple of other notes that we want to cover.

First, remember that maintainers are people too. Open source projects rarely generate enough revenue for maintainers to work on them full time, which means they have to keep a job. It is important to be patient with the review process - don't do things like ping maintainers repeatedly for a re-review, or try to rush them in their review process.

Making contributions can be exciting! But don't rush through the process. Instead, take your time. Make sure to test your changes locally - run any test suites the project may have, run the development server and manually confirm that your changes work, etc. And always follow the contribution guidelines for the specific project you are working on.

If you keep all of that in mind, and put your best effort forward, your contributions should go smoothly and your code review should be a solid approval!

# --questions--

## --text--

What is typically the first step in a code review process?

## --answers--

Looking at the actual code changes.

### --feedback--

Think about what maintainers check before they even look at your code.

---

Confirming that CI (continuous integration) passes.

---

Pulling down the changes locally.

### --feedback--

Think about what maintainers check before they even look at your code.

---

Approving the pull request.

### --feedback--

Think about what maintainers check before they even look at your code.

## --video-solution--

2

## --text--

What does the acronym "LGTM" stand for in code reviews?

## --answers--

Let's Get This Merged.

### --feedback--

This is a common approval phrase mentioned in the lesson.

---

Long-term Goal To Maintain.

### --feedback--

This is a common approval phrase mentioned in the lesson.

---

Looks Good To Me.

---

Let's Go Through More.

### --feedback--

This is a common approval phrase mentioned in the lesson.

## --video-solution--

3

## --text--

When a maintainer proposes specific changes through GitHub's UI, what can you do to efficiently handle multiple suggestions?

## --answers--

You must implement each suggestion manually in your local environment.

### --feedback--

Think about the most efficient way to handle multiple suggestions without creating numerous commits.

---

You can add all suggestions to a "batch" and commit them together.

---

You need to create a new pull request for each suggestion.

### --feedback--

Think about the most efficient way to handle multiple suggestions without creating numerous commits.

---

You must accept each suggestion individually with separate commits.

### --feedback--

Think about the most efficient way to handle multiple suggestions without creating numerous commits.

## --video-solution--

2

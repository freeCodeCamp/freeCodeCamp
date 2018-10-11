<!-- IMPORTANT

Before creating a PR, please make sure to verify the following by marking the checkboxes below as complete.

- [x] Like this!

-->

### Description
<!-- Add a description of the change you are making, this will help reviewers in the QA process. -->





### Pre-Submission Checklist

#### Common mandatory requirements

- [ ] This pull request targets the `master` branch of freeCodeCamp.
- [ ] Branch starts with either `fix/`, `feature/`, or `translate/`
      (e.g. `fix/signin-issue`)
- [ ] Reviewed necessary guidelines in [`CONTRIBUTING.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/CONTRIBUTING.md).

**By submitting this pull request, I have verified the following:**

- [ ] Added descriptive name to pull request. (mandatory)

     Your PR should NOT be called `Update index.md`, since it does not help the maintainer understand what has been changed.

     Good Guide PR title examples:

     ```txt
     fix(guide): Git - edit Git Commit article
     feat(guide): PHP - create PHP section and add Data Structures article
     ```

     Good Coding challenge PR title examples:

     ```txt
     fix(coding): add tests to Basic HTML challenge
     fix(coding): update instructions to CSS Grid challenge
     ```
        
     Good Learning platform PR title examples:

     ```txt
     fix(platform): fixed sign in api
     fix(platform): removed css from editor
     ```

#### This change is for the Learning platform (UI, logic, etc.) or Coding Challenges, and:

- [ ] I tested my changes by running freeCodeCamp locally.
- [ ] All new and existing tests pass the command `npm test`.

If your pull request touches any files that belong to the api-server or the client's logic, even if its a small typo change, css change, etc. You should build this locally. Your PR may not be accepted, if you did not meet these mandatory requirement.

#### This change is for Guide Articles, and:

- [ ] I confirm no **plagiarized**, **duplicate**, or **repetitive content** that has been directly copied from another source.
- [ ] I am adding only `https` links to external sources.
- [ ] I am not adding short links instead of full URLs to webpages.

### Issues Closures

- [ ] Addressed currently open issue. (replace XXXXX with an issue no in next line)

Closes #XXXXX

**(Optional) Additional Context and Screenshots:**
<!-- Add additional context and information below -->

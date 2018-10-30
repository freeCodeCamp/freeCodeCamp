# Contributing to node-bunyan

Thanks for using node-bunyan and for considering contributing to it! Or perhaps
you are just here to get a sniff for what is going on with node-bunyan
development.


## How you can help

If you want to help me here, great! Thank you! Some ideas:

- Do you have experience with and/or recommendations for a good automated
  testing service? Ideally I'd like support for Mac, Linux, SmartOS, and maybe
  Windows. Also, support for node.js versions 0.10 up to whatever the current
  latest is. Are those too tall an order? What's more, Bunyan is meant to work
  (at least partially) in the browser. Is there a good service for that?
  Please discuss on [issue #342](https://github.com/trentm/node-bunyan/issues/342).

- Fielding issues labelled with "[Type-Question][Type-Question]", if you are familiar
  with Bunyan and know how to answer them, would be great.

- If you want to dive into code, but aren't *that* familiar with node-bunyan,
  then [issues labelled with Experience-Easy][Experience-Easy] are a good
  place to start.

- [Once I've made a once over
  triaging](https://github.com/trentm/node-bunyan/issues/335) and consolodating
  issues and PRs, volunteering for issues in a particular
  [component](#component) with which you have familiarity would be great.

[Type-Question]: https://github.com/trentm/node-bunyan/issues?q=is%3Aopen+is%3Aissue+label%3AType-Question


## Trent's Biased Rules for Code

In the hope that it makes it easier to get PRs into Bunyan, here is my biased
list of what I typically want. Submitting a PR without all of these is
*totally fine*! The only side-effect is that it may take longer for me to
provide feedback on it and merge it. I'll politely request missing pieces.


- Please follow existing code style. Contributed code must pass `make check`.
  (Note: I intended to [change to eslint
  soon](https://github.com/trentm/node-bunyan/issues/341), so currently `make
  check` might be a moving target.)

- Any user visible change in behaviour should almost certainly include an
  update to the docs. Currently the "docs" is the README.md.

- Adding a test case for code changes is **stronly recommended**, else I
  can't easily promise to not break your fix/feature later. If you don't
  grok the test suite, please ask. We can use it to form the basis for a
  "test/README.md".

- Typically a code change should have an associated issue or PR. This allows
  addition of follow-up issues, discussion, test data, etc. to be associated
  with the commit. Just using GitHub pull requests makes this easy.

- All but the most trivial code changes should have an addition to the
  [changelog](./CHANGES.md). The audience for the changelog is *Bunyan users*.
  However, because rebasing longer-lived PRs against master is a pain
  with a change to CHANGES.md, please **do not include a CHANGES.md change
  in your PR. Instead suggest a CHANGES.md addition in a comment on the
  PR.**

- Good commit messages, please:
    - The first line should be a succinct summary of the issue or fix. A
      good candidate is to just cut 'n paste the issue title, if there is one.
    - If the commit is for a particular issue/PR (see previous rule), please
      list the issue number in the commit message. E.g. "Fixes #123" or "Related
      to #234".
    - The audience for commit messages is *Bunyan developers*.


## Pull Request Lifecycle

(Language adapted from
[terraform](https://github.com/hashicorp/terraform/blob/master/CONTRIBUTING.md).)

- You are welcome to submit your pull request for commentary or review before it
  is fully completed. Please prefix the title of your pull request with "[WIP]"
  to indicate this. It's also a good idea to include specific questions or items
  you'd like feedback on.

- Once you believe your pull request is ready to be merged, you can remove any
  "[WIP]" prefix from the title and a core team member will review. See
  Trent's Biased Rules above to help ensure that your contribution will be
  merged quickly.

- Trent or, if things go well, a node-bunyan maintainer will look over your
  contribution and either provide comments letting you know if there is anything
  left to do. Please be patient. Unfortunately, I'm not able to carve out
  a *lot* of time for Bunyan development and maintenance.

- Once all outstanding comments and checklist items have been addressed, your
  contribution will be merged. Merged PRs will be included in the next
  node-bunyan release.

- In some cases, we might decide that a PR should be closed. We'll make sure to
  provide clear reasoning when this happens.


## Issue labels

The point of issue labeling for node-bunyan is to help answer "what should be
worked on now? what can be left for later?" I don't want issue labelling to
become a burden for anyone, so (a) don't feel obliged to add them yourself and
(b) I'm happy to reevaluate their usage.

Bunyan shall have categories of [issue
labels](https://github.com/trentm/node-bunyan/labels) named "$category-$value".
An issue should have max *one* label from each set. Users of Google Code's
dearly departed issue tracker may remember this kind of thing. This is a
poorman's version of structured issue tracker metadata.

I'm inclined to *not* do priorities right now. *Possibly* we'll use GitHub
milestones to basically set targets for upcoming releases. But otherwise my
sense is that for smaller OSS projects, assigning prios will get in the way.
If people would think it helpful, I'd consider "Difficulty-" or "Experience-"
categories (a la Rust's "E-" labels) to mark easier and intermediate tasks
that someone interested but maybe not very familiar with Bunyan might want
to tackle.

For now, here are the various labels and their purpose:

### Meta

- needstriage: Temporary label to help me do a single triage pass through all
  current open issues and PRs.
  See [#335](https://github.com/trentm/node-bunyan/issues/335)
  where I'm working through this.

### Type

Color: green

- Type-Unknown: If it is still unclear or undecided if an issue is an intended
  feature (perhaps arguing for better docs or examples to avoid confusion) or a
  bug, I will use this category.
- Type-Question: Asking a question on Bunyan usage, about the project, etc.
- Type-Bug: A bug in Bunyan's behaviour.
- Type-Improvement: A new feature or other improvement.
- Type-Doc: Issues with Bunyan's documentation.
- Type-Task: A project task to be done.

TODO: consider Type-Unknown for the "unclear if bug or feature" tickets.

### Component

Color: blue

- Component-Project: Project meta stuff like testing, linting, build, install,
  etc.
- Component-CLI: The `bunyan` command-line tool.
- Component-Lib: catch-all for other library stuff
    - Component-LibRotation: The bunyan library's log rotation support.
    - Component-LibBrowser: Bunyan's handling/support for running in the browser.
    - Component-LibFlush: A separate component for collecting the tickets related
      to closing/flushing bunyan streams on process shutdown.

The point of components is to find like issues to help with reference, search
and resolving them. If no component fits an issue/PR, then don't add a label.

### Resolution

Color: red

- Resolution-WontFix
- Resolution-Duplicate
- Resolution-Fixed: Also used to indicate "doc written", "question answered",
  "feature implemented".
- Resolution-CannotRepro: After some reasonable attempt by maintainers to
  reproduce a bug report, I want it to be non-controversial to close it
  and mark it with this. If given more info by someone able to repro, we
  can happy re-open issues.

### Experience

Color: yellow

- Experience-Easy: Relatively little experience with node-bunyan should be
  required to complete this issue.
- Experience-NeedsTest: Typically added to an issue or PR that needs a test
  case. Someone familiar enough with node-bunyan's test suite could tackle this.
- Experience-Hard: At a guess, this is a thorny issue that requires known
  node-bunyan well, knowing node.js well, requires design review or all of
  these.

One of the "Experience-\*" labels can optionally be put on an issue or PR to
indicate what kind of experience a contributor would need with node-bunyan
(and/or node.js) to complete it. For example, if you're looking for somewhere to
start, check out the [Experience-Easy][Experience-Easy] tag. This category idea
is borrowed from [rust's E-\* labels][rust-issue-triage].

[Experience-Easy]: https://github.com/trentm/node-bunyan/issues?q=is%3Aopen+is%3Aissue+label%3AExperience-Easy
[rust-issue-triage]: https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md#issue-triage


## Acknowledgements

Anything good about this document is thanks to inspiration from
[rust](https://github.com/rust-lang/rust/blob/master/CONTRIBUTING.md) and, more
recently
[terraform](https://github.com/hashicorp/terraform/blob/master/CONTRIBUTING.md).
Anything bad about it, is my fault.

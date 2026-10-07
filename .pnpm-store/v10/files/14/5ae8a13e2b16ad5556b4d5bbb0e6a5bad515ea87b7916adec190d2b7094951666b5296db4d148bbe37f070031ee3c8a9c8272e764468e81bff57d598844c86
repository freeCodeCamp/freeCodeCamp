# Contributing

Interested in contributing? Great! Here are some suggestions to make it a good
experience:

Start by [opening an issue](https://github.com/DavidAnson/markdownlint/issues),
whether to identify a problem or outline a change. That issue should be used to
discuss the situation and agree on a plan of action before writing code or
sending a pull request. Maybe the problem isn't really a problem, or maybe there
are more things to consider. If so, it's best to realize that before spending
time and effort writing code that may not get used.

Match the coding style of the files you edit. Although everyone has their own
preferences and opinions, a pull request is not the right forum to debate them.

Do not add new [`dependencies` to `package.json`][dependencies]. The Markdown
parser [`micromark`][micromark] (and its extensions) is this project's only
dependency.

Package versions for `dependencies` and `devDependencies` should be specified
exactly (also known as "pinning"). The short explanation is that doing otherwise
eventually leads to inconsistent behavior and broken functionality. (See [Why I
pin dependency versions in Node.js packages][version-pinning] for a longer
explanation.)

If developing a new rule, start by creating a [custom rule][custom-rules] in its
own project. Once written, published, and tested in real world scenarios, open
an issue to consider adding it to this project. For rule ideas, see [issues
tagged with the `new rule` label][new-rule].

Add tests for all new/changed functionality. Test positive and negative
scenarios. Try to break the new code now, or else it will get broken later.

Run tests before sending a pull request via `npm test` in the [usual
manner][npm-scripts]. Tests should all pass on all platforms. The test runner is
[AVA][ava] and test cases are located in `test/markdownlint-test*.js`. When
running tests, `test/*.md` files are enumerated, linted, and fail if any
violations are missing a corresponding `{MD###}` marker in the test file. For
example, the line `### Heading {MD001}` is expected to trigger the rule `MD001`.
For cases where the marker text can not be present on the same line, the syntax
`{MD###:#}` can be used to include a line number. If `some-test.md` needs custom
configuration, a `some-test.json` is used to provide a custom `options.config`
for that scenario. Tests run by `markdownlint-test-scenarios.js` use [AVA's
snapshot feature][ava-snapshots]. To update snapshots (for example, after
modifying a test file), run `npm run update-snapshots` and include the updated
files with the pull request.

Lint before sending a pull request by running `npm run lint`. There should be no
issues.

Run a full continuous integration pass before sending a pull request via `npm
run ci`. Code coverage should always be 100%. As part of a continuous
integration run, generated files may get updated and fail the run - commit them
to the repository and rerun continuous integration.

Pull requests should contain a single commit. If necessary, squash multiple
commits before creating the pull request and when making changes. (See [Git
Tools - Rewriting History][rewriting-history] for details.)

Open pull requests against the `next` branch. That's where the latest changes
are staged for the next release. Include the text "(fixes #??)" at the end of
the commit message so the pull request will be associated with the relevant
issue. End commit messages with a period (`.`). Once accepted, the tag `fixed in
next` will be added to the issue. When the commit is merged to the main branch
during the release process, the issue will be closed automatically. (See
[Closing issues using keywords][closing-keywords] for details.)

Please refrain from using slang or meaningless placeholder words. Sample content
can be "text", "code", "heading", or the like. Sample URLs should use
[example.com][example-com] which is safe for this purpose. Profanity is not
allowed.

In order to maintain the permissive MIT license this project uses, all
contributions must be your own and released under that license. Code you add
should be an original work and should not be copied from elsewhere. Taking code
from a different project, Stack Overflow, or the like is not allowed. The use of
tools such as GitHub Copilot, ChatGPT, LLMs (large language models), etc. that
incorporate code from other projects is not allowed.

Thank you!

[ava]: https://github.com/avajs/ava
[ava-snapshots]: https://github.com/avajs/ava/blob/main/docs/04-snapshot-testing.md
[closing-keywords]: https://help.github.com/articles/closing-issues-using-keywords/
[custom-rules]: doc/CustomRules.md
[dependencies]: https://docs.npmjs.com/cli/v11/configuring-npm/package-json#dependencies
[example-com]: https://en.wikipedia.org/wiki/Example.com
[micromark]: https://www.npmjs.com/package/micromark
[new-rule]: https://github.com/DavidAnson/markdownlint/labels/new%20rule
[npm-scripts]: https://docs.npmjs.com/misc/scripts
[rewriting-history]: https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History
[version-pinning]: https://dlaa.me/blog/post/versionpinning

# How to contribute

- [Getting help](#getting-help)
- [Submitting bug reports](#submitting-bug-reports)
- [Contributing code](#contributing-code)

## Getting help

Community discussion, questions, and informal bug reporting is done on the
[discuss.CodeMirror forum](http://discuss.codemirror.net).

## Submitting bug reports

The preferred way to report bugs is to use the
[GitHub issue tracker](http://github.com/codemirror/CodeMirror/issues). Before
reporting a bug, read these pointers.

**Note:** The issue tracker is for *bugs*, not requests for help. Questions
should be asked on the
[discuss.CodeMirror forum](http://discuss.codemirror.net) instead.

### Reporting bugs effectively

- CodeMirror is maintained by volunteers. They don't owe you anything, so be
  polite. Reports with an indignant or belligerent tone tend to be moved to the
  bottom of the pile.

- Include information about **the browser in which the problem occurred**. Even
  if you tested several browsers, and the problem occurred in all of them,
  mention this fact in the bug report. Also include browser version numbers and
  the operating system that you're on.

- Mention which release of CodeMirror you're using. Preferably, try also with
  the current development snapshot, to ensure the problem has not already been
  fixed.

- Mention very precisely what went wrong. "X is broken" is not a good bug
  report. What did you expect to happen? What happened instead? Describe the
  exact steps a maintainer has to take to make the problem occur. We can not
  fix something that we can not observe.

- If the problem can not be reproduced in any of the demos included in the
  CodeMirror distribution, please provide an HTML document that demonstrates
  the problem. The best way to do this is to go to
  [jsbin.com](http://jsbin.com/ihunin/edit), enter it there, press save, and
  include the resulting link in your bug report.

## Contributing code

- Make sure you have a [GitHub Account](https://github.com/signup/free)
- Fork [CodeMirror](https://github.com/codemirror/CodeMirror/)
  ([how to fork a repo](https://help.github.com/articles/fork-a-repo))
- Make your changes
- If your changes are easy to test or likely to regress, add tests.
  Tests for the core go into `test/test.js`, some modes have their own
  test suite under `mode/XXX/test.js`. Feel free to add new test
  suites to modes that don't have one yet (be sure to link the new
  tests into `test/index.html`).
- Follow the general code style of the rest of the project (see
  below). Run `bin/lint` to verify that the linter is happy.
- Make sure all tests pass. Visit `test/index.html` in your browser to
  run them.
- Submit a pull request
([how to create a pull request](https://help.github.com/articles/fork-a-repo)).
  Don't put more than one feature/fix in a single pull request.

By contributing code to CodeMirror you

 - agree to license the contributed code under CodeMirror's [MIT
   license](http://codemirror.net/LICENSE).

 - confirm that you have the right to contribute and license the code
   in question. (Either you hold all rights on the code, or the rights
   holder has explicitly granted the right to use it like this,
   through a compatible open source license or through a direct
   agreement with you.)

### Coding standards

- 2 spaces per indentation level, no tabs.

- Note that the linter (`bin/lint`) which is run after each commit
  complains about unused variables and functions. Prefix their names
  with an underscore to muffle it.

- CodeMirror does *not* follow JSHint or JSLint prescribed style.
  Patches that try to 'fix' code to pass one of these linters will be
  unceremoniously discarded.

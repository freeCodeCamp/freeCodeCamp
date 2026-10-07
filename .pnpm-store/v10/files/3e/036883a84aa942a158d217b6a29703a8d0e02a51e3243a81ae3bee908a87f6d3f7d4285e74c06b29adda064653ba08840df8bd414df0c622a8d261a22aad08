# How to Contribute

## Pull Requests

We also accept [pull requests][pull-request]!

Generally we like to see pull requests that

- Maintain the existing code style
- Are focused on a single change (i.e. avoid large refactoring or style adjustments in untouched code if not the primary goal of the pull request)
- Have [good commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- Have tests
- Don't decrease the current code coverage (see coverage/lcov-report/index.html)

## Building

```
yarn
yarn test
```

Running `yarn test -- dev` will watch for tests within Node and `karma start` may be used for manual testing in browsers.

If you notice any problems, please report them to the GitHub issue tracker at
[http://github.com/kpdecker/jsdiff/issues](http://github.com/kpdecker/jsdiff/issues).

## Releasing

A full release may be completed with the following:

```
yarn clean
yarn grunt
yarn grunt uglify
yarn publish
```

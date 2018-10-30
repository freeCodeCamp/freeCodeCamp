# How to Contribute

## Reporting Issues

Please see our [FAQ](https://github.com/wycats/handlebars.js/blob/master/FAQ.md) for common issues that people run into.

Should you run into other issues with the project, please don't hesitate to let us know by filing an [issue][issue]! In general we are going to ask for an example of the problem failing, which can be as simple as a jsfiddle/jsbin/etc. We've put together a jsfiddle [template][jsfiddle] to ease this. (We will keep this link up to date as new releases occur, so feel free to check back here)

Pull requests containing only failing thats demonstrating the issue are welcomed and this also helps ensure that your issue won't regress in the future once it's fixed.

Documentation issues on the handlebarsjs.com site should be reported on [handlebars-site](https://github.com/wycats/handlebars-site).

## Pull Requests

We also accept [pull requests][pull-request]!

Generally we like to see pull requests that
- Maintain the existing code style
- Are focused on a single change (i.e. avoid large refactoring or style adjustments in untouched code if not the primary goal of the pull request)
- Have [good commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- Have tests
- Don't significantly decrease the current code coverage (see coverage/lcov-report/index.html)

## Building

To build Handlebars.js you'll need a few things installed.

* Node.js
* [Grunt](http://gruntjs.com/getting-started)

Before building, you need to make sure that the Git submodule `spec/mustache` is included (i.e. the directory `spec/mustache` should not be empty). To include it, if using Git version 1.6.5 or newer, use `git clone --recursive` rather than `git clone`. Or, if you already cloned without `--recursive`, use `git submodule update --init`.

Project dependencies may be installed via `npm install`.

To build Handlebars.js from scratch, you'll want to run `grunt`
in the root of the project. That will build Handlebars and output the
results to the dist/ folder. To re-run tests, run `grunt test` or `npm test`.
You can also run our set of benchmarks with `grunt bench`.

The `grunt dev` implements watching for tests and allows for in browser testing at `http://localhost:9999/spec/`.

If you notice any problems, please report them to the GitHub issue tracker at
[http://github.com/wycats/handlebars.js/issues](http://github.com/wycats/handlebars.js/issues).

## Ember testing

The current ember distribution should be tested as part of the handlebars release process. This requires building the `handlebars-source` gem locally and then executing the ember test script.

```sh
npm link
grunt build release
cp dist/*.js $emberRepoDir/bower_components/handlebars/

cd $emberRepoDir
npm link handlebars
npm test
```

## Releasing

Handlebars utilizes the [release yeoman generator][generator-release] to perform most release tasks.

A full release may be completed with the following:

```
yo release
npm publish
yo release:publish components handlebars.js dist/components/

cd dist/components/
gem build handlebars-source.gemspec
gem push handlebars-source-*.gem
```

After this point the handlebars site needs to be updated to point to the new version numbers. The jsfiddle link should be updated to point to the most recent distribution for all instances in our documentation.

[generator-release]: https://github.com/walmartlabs/generator-release
[pull-request]: https://github.com/wycats/handlebars.js/pull/new/master
[issue]: https://github.com/wycats/handlebars.js/issues/new
[jsfiddle]: http://jsfiddle.net/9D88g/46/

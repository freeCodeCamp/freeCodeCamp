---
title: Continuous Integration
---
## Continuous Integration

At its most basic, continuous integration (CI) is an agile development methodology in which developers regularly merge their code directly to the main source, usually a remote `master` branch. In order to ensure that no breaking changes are introduced, a full test suite is run on every potentiual build to regression test the new code, i.e. test that the new code does not break existing, working features.

This approach requires good test coverage of the code base, meaning that a majority, if not all, of the code has tests which ensure its features are fully functional. Ideally continuous integration would be practiced together with full <a href='https://guide.freecodecamp.org/agile/test-driven-development' target='_blank' rel='nofollow'>Test-Driven Development</a>.

### Main Steps

The following basic steps are necessary to do the most standard current approach to continuous integration.

1. Maintain a central repo and an active `master` branch.

There has to be a code repository for everyone to merge into and pull changes from. This can be on Github or any number of code-storage services.

2. Automate the build.

Using NPM scripts or more complex build tools like Yarn, Grunt, Webpack, or <a href='https://guide.freecodecamp.org/developer-tools/gulp' target='_blank' rel='nofollow'>Gulp</a>, automate the build so that a single command can build a fully functional version of the product, ready to be deployed in a production environment. Better yet, include deployment as part of the automated build!

3. Make the build run all the tests.

In order to check that nothing in the new code breaks existing functionality, the full test suite needs to be run and the build needs to fail if any tests within it fail.

4. Everyone has to merge changes to `master` every day.

5. Every merge into `master` has to be built and fully tested.

### Best Practices

There are further best practices that make the best use of what CI has to offer and the challenges it presents, such as:

1. Keep the build fast, so that lots of developer time isn't wasted waiting for a build.

2. Test the build in a full clone of the production environment.

If you have, for example, an app deployed on something like Heroku or Digital Ocean, have a separate test deployment there that you can deploy test builds to, to make sure they work not just in tests but in a real production environment. This test environment should be functionally identical to the actual production environment, in order to ensure the test is accurate.

3. Make it easy to stay up to date.

Coders should pull regularly from the `master` branch to keep integrating their code with the changes from their team. The repo should also be made available to stakeholders like product managers, company executives, or sometimes key clients, so that everyone is easily able to see progress.

4. Keep records of builds, so that everyone can see the results of any given build, whether it succeeded or failed, and who or what introduced new changes.

5. Automate deployment.

Keep your app fully up-to-date with any new changes by automating deployment in the production environment as the final stage of the build process, once all tests have passed and the test deployment in the production environment clone has succeeded.

### CI Services

Lots of services exists to handle the process of continuous integration for you, which can make it a lot easier to establish a solid CI pipeline, or build process. When evaluating these, take into account factors like budget, build speed, and what kind of project you're working on. Some services, like <a href='https://travis-ci.org' target='_blank' rel='nofollow'>Travis CI</a> offer free services for open-source projects, which can make them an easy choice for projects like that, but they might have slower builds than other services, like <a href='https://circleci.com/' target='_blank' rel='nofollow'>Circle CI</a> or <a href='https://codeship.com/' target='_blank' rel='nofollow'>Codeship</a>, to name just a few.

#### More Information:
The Wikipedia entry on <a href='https://en.wikipedia.org/wiki/Continuous_integration' target='_blank' rel='nofollow'>Continuous Integration</a>.


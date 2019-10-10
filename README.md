![freeCodeCamp.org Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)
[![Open Source Helpers](https://www.codetriage.com/freecodecamp/freecodecamp/badges/users.svg)](https://www.codetriage.com/freecodecamp/freecodecamp)
[![Setup Automated](https://img.shields.io/badge/setup-automated-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

## freeCodeCamp.org's open source codebase and curriculum

[freeCodeCamp.org](https://www.freecodecamp.org) is a friendly community where you can learn to code for free. It is run by a [donor-supported 501(c)(3) nonprofit](https://donate.freecodecamp.org) with the goal of helping millions of busy adults transition into tech. Our community has already helped more than 10,000 people get their first developer job.

Our full-stack web development curriculum is completely free and self-paced. We have thousands of interactive coding challenges to help you expand your skills.

## Table of Contents

* [Certifications](#certifications)
* [The Learning Platform](#the-learning-platform)
* [Reporting Bugs and Issues](#reporting-bugs-and-issues)
* [Reporting Security Issues](#reporting-security-issues)
* [Contributing](#contributing)
* [Platform, Build and Deployment Status](#platform-build-and-deployment-status)
* [License](#license)


### Certifications

freeCodeCamp.org offers several free developer certifications. Each of these certifications involves building 5 required web app projects, along with hundreds of optional coding challenges to help you prepare for those projects. We estimate that each certification will take a beginning programmer around 300 hours to earn.

Each of these 30 projects in the freeCodeCamp.org curriculum has its own agile user stories and automated tests. These help you build up your project incrementally and ensure you've fulfilled all the user stories before you submit it.

You can pull in these test suites through [freeCodeCamp's CDN](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js). This means you can build these projects on websites like CodePen and Glitch - or even on your local computer's development environment.

Once you’ve earned a certification, you will always have it. You will always be able to link to it from your LinkedIn or résumé. And when your prospective employers or freelance clients click that link, they’ll see a verified certification specific to you.

The one exception to this is in the event that we discover violations of our [Academic Honesty Policy](https://www.freecodecamp.org/academic-honesty). When we catch people unambiguously plagiarizing (submitting other people's code or projects as their own without citation), we do what all rigorous institutions of learning should do - we revoke their certifications and ban those people.

Here are our six core certifications:

#### 1. Responsive Web Design Certification

- [Basic HTML and HTML5](https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5)
- [Basic CSS](https://learn.freecodecamp.org/responsive-web-design/basic-css)
- [Applied Visual Design](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design)
- [Applied Accessibility](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility)
- [Responsive Web Design Principles](https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-principles)
- [CSS Flexbox](https://learn.freecodecamp.org/responsive-web-design/css-flexbox)
- [CSS Grid](https://learn.freecodecamp.org/responsive-web-design/css-grid)
  <br />
  <br />
  **Projects**: Tribute Page, Survey Form, Product Landing Page, Technical Documentation Page, Personal Portfolio Webpage

#### 2. JavaScript Algorithms and Data Structures Certification

- [Basic JavaScript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript)
- [ES6](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6)
- [Regular Expressions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions)
- [Debugging](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging)
- [Basic Data Structures](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures)
- [Algorithm Scripting](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting)
- [Object Oriented Programming](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming)
- [Functional Programming](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming)
- [Intermediate Algorithm Scripting](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting)
  <br />
  <br />
  **Projects**: Palindrome Checker, Roman Numeral Converter, Caesar's Cipher, Telephone Number Validator, Cash Register

#### 3. Front End Libraries Certification

- [Bootstrap](https://learn.freecodecamp.org/front-end-libraries/bootstrap)
- [jQuery](https://learn.freecodecamp.org/front-end-libraries/jquery)
- [Sass](https://learn.freecodecamp.org/front-end-libraries/sass)
- [React](https://learn.freecodecamp.org/front-end-libraries/react)
- [Redux](https://learn.freecodecamp.org/front-end-libraries/redux)
- [React and Redux](https://learn.freecodecamp.org/front-end-libraries/react-and-redux)
  <br />
  <br />
  **Projects**: Random Quote Machine, Markdown Previewer, Drum Machine, JavaScript Calculator, Pomodoro Clock

#### 4. Data Visualization Certification

- [Data Visualization with D3](https://learn.freecodecamp.org/data-visualization/data-visualization-with-d3)
- [JSON APIs and Ajax](https://learn.freecodecamp.org/data-visualization/json-apis-and-ajax)
  <br />
  <br />
  **Projects**: Bar Chart, Scatterplot Graph, Heat Map, Choropleth Map, Treemap Diagram

#### 5. APIs and Microservices Certification

- [Managing Packages with Npm](https://learn.freecodecamp.org/apis-and-microservices/managing-packages-with-npm)
- [Basic Node and Express](https://learn.freecodecamp.org/apis-and-microservices/basic-node-and-express)
- [MongoDB and Mongoose](https://learn.freecodecamp.org/apis-and-microservices/mongodb-and-mongoose)
  <br />
  <br />
  **Projects**: Timestamp Microservice, Request Header Parser, URL Shortener, Exercise Tracker, File Metadata Microservice

#### 6. Information Security and Quality Assurance Certification

- [Information Security with HelmetJS](https://learn.freecodecamp.org/information-security-and-quality-assurance/information-security-with-helmetjs)
- [Quality Assurance and Testing with Chai](https://learn.freecodecamp.org/information-security-and-quality-assurance/quality-assurance-and-testing-with-chai)
- [Advanced Node and Express](https://learn.freecodecamp.org/information-security-and-quality-assurance/advanced-node-and-express)
  <br />
  <br />
  **Projects**: Metric-Imperial Converter, Issue Tracker, Personal Library, Stock Price Checker, Anonymous Message Board

#### Full Stack Development Certification

Once you have earned all 6 of these certifications, you'll be able to claim your freeCodeCamp.org Full Stack Development Certification. This final distinction signifies that you’ve completed around 1,800 hours of coding with a wide range of web development tools.

#### Legacy Certifications

We also have 3 legacy certifications from our 2015 curriculum, which are still available. All of the required projects for these legacy certifications will remain available on freeCodeCamp.org.

- Legacy Front End Development Certification
- Legacy Data Visualization Certification
- Legacy Back End Development Certification

### The Learning Platform

This code is running live at [freeCodeCamp.org](https://www.freecodecamp.org).

Our community also has:

- A [forum](https://www.freecodecamp.org/forum) where you can usually get programming help or project feedback within hours.
- A [YouTube channel](https://youtube.com/freecodecamp) with free courses on Python, SQL, Android, and a wide variety of other technologies.
- A [podcast](https://podcast.freecodecamp.org/) with technology insights and inspiring stories from developers.
- A comprehensive [guide to thousands of programming topics](https://guide.freecodecamp.org/)
- A [Developer News](https://www.freecodecamp.org/news) publication, a free, open source, no-ads place to cross-post your blog articles.

> ### [Join our community here](https://www.freecodecamp.org/signin).

### Reporting Bugs and Issues

If you think you've found a bug, first read the [how to report a bug](https://www.freecodecamp.org/forum/t/how-to-report-a-bug/19543) article and follow its instructions.

If you're confident it's a new bug, and have confirmed that someone else is facing the same issue, go ahead and create a new GitHub issue. Be sure to include as much information as possible so we can reproduce the bug.

### Reporting Security Issues

If you think you have found a vulnerability, please report responsibly. Don't create GitHub issues for security issues. Instead, please send an email to `security@freecodecamp.org` and we'll look into it immediately.

### Contributing

> ### [Please follow these steps to contribute.](CONTRIBUTING.md)

### Platform, Build and Deployment Status

The general platform status for all our applications is available at [`status.freecodecamp.org`](https://status.freecodecamp.org). The build and deployment status for the code is available in [our DevOps Guide](/docs/devops.md).

### Vidhis Testing purpose

This is for the general testing to check output

### License

Copyright © 2019 freeCodeCamp.org

The content of this repository is bound by the following licenses:

- The computer software is licensed under the [BSD-3-Clause](LICENSE.md) license.
- The learning resources in the [`/curriculum`](/curriculum) directory including their subdirectories thereon are licensed under the [CC-BY-SA-4.0](/curriculum/LICENSE.md) license.

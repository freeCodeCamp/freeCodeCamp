# How to work on coding challenges

### Changing on GitHub

Each challenge is stored in its own markdown file. That makes it easy to edit challenges right from within GitHub.

You can make a change without having anything running on your local system.

After you find the file you want to modify within the GitHub interface, click the pencil icon to start editing the file. This will automatically create a fork of the project, if you don't have one already.

You can also clone the project and edit locally on your computer. For help with that, read the main [contributing guide](/CONTRIBUTING.md).

### Challenge Template

Here is a template of what the challenge markdown files look like.

````md
---
id: Unique identifier (alphanumerical, MongoDB _id)
title: Challenge Title
challengeType: 0
guideUrl: 'url of guide article'
videoUrl: 'url of video explanation'
---

## Description
<section id='description'>
A Description of the challenge and what is required to pass
</section>

## Instructions
<section id='instructions'>
Instructions about what exactly needs to be done.
</section>
## Tests
<section id='tests'>

``` yml
- text: Should return "foo".
  testString: 'A stringified function using Chai asserts'
```

</section>

<div id='js-seed'>

```js
Code displayed in the editor by default.
```

</div>

### Before Test
<div id='js-setup'>

```js
Test setup code.
```

</div>

</section>

### After Test
<div id='js-teardown'>

```js
Test tear down code.
```

</div>

</section>

## Solution
<section id='solution'>

```js
Challenge solution code.
```

</section>
````

### Useful Links

Creating and Editing Challenges:

1. [Challenge Style Guide](style-guide-for-curriculum-challenges.md) - how to create and format challenges

2. [Challenge types](https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js) - what the numeric challenge type values mean (enum).

3. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests ](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - a video following [Ethan Arrowood](https://twitter.com/ArrowoodTech) as he contributes to the old version of the curriculum

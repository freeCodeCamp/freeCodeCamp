# How to work on coding challenges

### Changing on GitHub

Each challenge is stored in its own markdown file. That makes it easy to edit challenges right from within GitHub.

You can make a change without having anything running on your local system.

After you find the file you want to modify within the GitHub interface, click the pencil icon to start editing the file. This will automatically create a fork of the project, if you don't have one already.

You can also clone the project and edit locally on your computer. For help with that, read the main [contributing guide](/CONTRIBUTING.md).

### Challenge Template

Below is a template of what the challenge markdown files look like.

**Notes:**

1. In the below sections, examples of `{ext}` are:
    * `html` - HTML/CSS
    * `js` - JavaScript
    * `jsx` - JSX

2. For the `Tests` section below, `text` and `testString` should be valid YAML strings. `testString` can be a stringified function or expression possibly using Chai asserts.

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Challenge Title
challengeType: 0
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
tests:
  - text: Should return "foo"
    testString: 'A stringified function possibly using Chai asserts'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Code displayed in the editor by default.  

This is a required section for the challenge.
```

</div>

### Before Test
<div id='{ext}-setup'>

```{ext}
Optional Test setup code.
```

</div>

### After Test
<div id='{ext}-teardown'>

```{ext}
Optional Test tear down code.
```

</div>

</section>

## Solution
<section id='solution'>

```{ext}
// solution required
```

</section>
````

### Useful Links

Creating and Editing Challenges:

1. [Challenge Style Guide](style-guide-for-curriculum-challenges.md) - how to create and format challenges

2. [Challenge types](https://github.com/freeCodeCamp/learn/blob/a5cb25704168aa37f59a582f0bb5a19b7bd89b46/utils/challengeTypes.js) - what the numeric challenge type values mean (enum).

3. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests ](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - a video following [Ethan Arrowood](https://twitter.com/ArrowoodTech) as he contributes to the old version of the curriculum

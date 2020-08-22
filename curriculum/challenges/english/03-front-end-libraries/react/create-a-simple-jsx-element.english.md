---
id: 587d7dbc367417b2b2512bb1
title: Create a Simple JSX Element
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301390
---

## Description
<section id='description'>
<strong>Intro:</strong> React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.
React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. This has several benefits. It lets you use the full programmatic power of JavaScript within HTML, and helps to keep your code readable. For the most part, JSX is similar to the HTML that you have already learned, however there are a few key differences that will be covered throughout these challenges.
For instance, because JSX is a syntactic extension of JavaScript, you can actually write JavaScript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: <code>{ 'this is treated as JavaScript code' }</code>. Keep this in mind, since it's used in several future challenges.
However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process. For your convenience, it's already added behind the scenes for these challenges. If you happen to write syntactically invalid JSX, you will see the first test in these challenges fail.
It's worth noting that under the hood the challenges are calling <code>ReactDOM.render(JSX, document.getElementById('root'))</code>. This function call is what places your JSX into React's own lightweight representation of the DOM. React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.
</section>

## Instructions
<section id='instructions'>
<strong>Instructions:</strong> The current code uses JSX to assign a <code>div</code> element to the constant <code>JSX</code>. Replace the <code>div</code> with an <code>h1</code> element and add the text <code>Hello JSX!</code> inside it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The constant <code>JSX</code> should return an <code>h1</code> element.
    testString: assert(JSX.type === 'h1');
  - text: The <code>h1</code> tag should include the text <code>Hello JSX!</code>
    testString: assert(Enzyme.shallow(JSX).contains('Hello JSX!'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

const JSX = <div></div>;

```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(JSX, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
const JSX = <h1>Hello JSX!</h1>;
```

</section>

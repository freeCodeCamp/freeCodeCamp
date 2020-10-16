---
id: 587d7dab367417b2b2512b6d
title: Apply Functional Programming to Convert Strings to URL Slugs
challengeType: 1
forumTopicId: 301227
---

## Description
<section id='description'>
The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about <code>reduce</code>, which is a powerful method used to reduce problems to simpler forms. From computing averages to sorting, any array operation can be achieved by applying it. Recall that <code>map</code> and <code>filter</code> are special cases of <code>reduce</code>.
Let's combine what we've learned to solve a practical problem.
Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes. For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the title string in it (".../stop-using-reduce"). You may have already noticed this on the freeCodeCamp site.
</section>

## Instructions
<section id='instructions'>
Fill in the <code>urlSlug</code> function so it converts a string <code>title</code> and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use <code>replace</code>. Here are the requirements:
The input is a string with spaces and title-cased words
The output is a string with the spaces between words replaced by a hyphen (<code>-</code>)
The output should be all lower-cased letters
The output should not have any spaces
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should not use the <code>replace</code> method for this challenge.
    testString: assert(!code.match(/\.?[\s\S]*?replace/g));
  - text: <code>urlSlug("Winter Is Coming")</code> should return <code>"winter-is-coming"</code>.
    testString: assert(urlSlug("Winter Is Coming") === "winter-is-coming");
  - text: <code>urlSlug(" Winter Is  Coming")</code> should return <code>"winter-is-coming"</code>.
    testString: assert(urlSlug(" Winter Is  Coming") === "winter-is-coming");
  - text: <code>urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")</code> should return <code>"a-mind-needs-books-like-a-sword-needs-a-whetstone"</code>.
    testString: assert(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") === "a-mind-needs-books-like-a-sword-needs-a-whetstone");
  - text: <code>urlSlug("Hold The Door")</code> should return <code>"hold-the-door"</code>.
    testString: assert(urlSlug("Hold The Door") === "hold-the-door");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
// Only change code below this line
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
```

</section>

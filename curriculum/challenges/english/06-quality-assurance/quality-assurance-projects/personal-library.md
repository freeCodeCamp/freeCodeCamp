---
id: 587d824a367417b2b2512c43
title: Personal Library
challengeType: 4
forumTopicId: 301571
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href="https://personal-library.freecodecamp.rocks/" target="_blank">https://personal-library.freecodecamp.rocks/</a>.
Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but must be publicly visible for our testing.
Start this project on Repl.it using <a href="https://repl.it/github/freeCodeCamp/boilerplate-project-library/">this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-library/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: I can provide my own project, not the example URL.
    testString: |
      getUserInput => {
        assert(!/.*\/personal-library\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: I can post a title to /api/books to add a book and returned will be the object with the title and a unique _id.
    testString: ''
  - text: I can get /api/books to retrieve an array of all books containing title, _id, and commentcount.
    testString: ''
  - text: I can get /api/books/{id} to retrieve a single object of a book containing _title, _id, & an array of comments (empty array if no comments present).
    testString: ''
  - text: I can post a comment to /api/books/{id} to add a comment to a book and returned will be the books object similar to get /api/books/{id} including the new comment.
    testString: ''
  - text: I can delete /api/books/{_id} to delete a book from the collection. Returned will be 'delete successful' if successful.
    testString: ''
  - text: If I try to request a book that doesn't exist I will be returned 'no book exists'.
    testString: ''
  - text: I can send a delete request to /api/books to delete all books in the database. Returned will be 'complete delete successful' if successful.
    testString: ''
  - text: All 6 functional tests required are complete and passing.
    testString: ''

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>

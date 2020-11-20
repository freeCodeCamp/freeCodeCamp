---
id: 587d824a367417b2b2512c43
title: Personal Library
challengeType: 4
forumTopicId: 301571
---

## Description
<section id='description'>

Build a full stack JavaScript app that is functionally similar to [this site](https://personal-library.freecodecamp.rocks/). Working on this project will involve you writing your code using one of the following methods:

- Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-library) and complete your project locally.
- Use [our repl.it starter project](https://repl.it/github/freeCodeCamp/boilerplate-project-library) to complete your project.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your project's source code in the `GitHub Link` field.

</section>

## Instructions
<section id='instructions'>

1. Add your MongoDB connection string to `.env` without quotes as `DB`  
   Example: `DB=mongodb://admin:pass@1234.mlab.com:1234/fccpersonallib`
2. In your `.env` file set `NODE_ENV` to `test`, without quotes
3. You need to create all routes within `routes/api.js`
4. You will create all functional tests in `tests/2_functional-tests.js`

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You can provide your own project, not the example URL.
    testString: |
      getUserInput => {
        assert(!/.*\/personal-library\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: You can send a <b>POST</b> request to <code>/api/books</code> with <code>title</code> as part of the form data to add a book.  The returned response will be an object with the <code>title</code> and a unique <code>_id</code> as keys.  If <code>title</code> is not included in the request, the returned response should be the string <code>missing required field title</code>.
    testString: "async getUserInput => {
       try {
         let data1 = await $.post(getUserInput('url') + '/api/books', { 'title': 'Faux Book 1' });
         assert.isObject(data1);
         assert.property(data1,'title');
         assert.equal(data1.title, 'Faux Book 1');
         assert.property(data1,'_id');
         let data2 = await $.post(getUserInput('url') + '/api/books');
         assert.isString(data2);
         assert.equal(data2, 'missing required field title');
       } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: You can send a <b>GET</b> request to <code>/api/books</code> and receive a JSON response representing all the books. The JSON response will be an array of objects with each object (book) containing <code>title</code>, <code>_id</code>, and <code>commentcount</code> properties.
    testString: "async getUserInput => {
       try {
         let url = getUserInput('url') + '/api/books';
         let a = $.post(url, { 'title': 'Faux Book A' });
         let b = $.post(url, { 'title': 'Faux Book B' });
         let c = $.post(url, { 'title': 'Faux Book C' });
         Promise.all([a,b,c]).then(async () => {
           let data = await $.get(url);
           assert.isArray(data);
           assert.isAtLeast(data.length,3);
           data.forEach((book) => {
             assert.isObject(book);
             assert.property(book, 'title');
             assert.isString(book.title);
             assert.property(book, '_id');
             assert.property(book, 'commentcount');
             assert.isNumber(book.commentcount);
           });
         });
       } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: You can send a <b>GET</b> request to <code>/api/books/{_id}</code> to retrieve a single object of a book containing the properties <code>title</code>, <code>_id</code>, and a <code>comments</code> array (empty array if no comments present). If no book is found, return the string <code>no book exists</code>.
    testString: "async getUserInput => {
       try {
         let url = getUserInput('url') + '/api/books';
         let noBook = await $.get(url + '/5f665eb46e296f6b9b6a504d');
         assert.isString(noBook);
         assert.equal(noBook, 'no book exists');
         let sampleBook = await $.post(url, { 'title': 'Faux Book Alpha' });
         assert.isObject(sampleBook);
         let bookId = sampleBook._id;
         let bookQuery = await $.get(url + '/' + bookId);
         assert.isObject(bookQuery);
         assert.property(bookQuery, 'title');
         assert.equal(bookQuery.title, 'Faux Book Alpha' );
         assert.property(bookQuery, 'comments');
         assert.isArray(bookQuery.comments);
       } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: You can send a <b>POST</b> request containing <code>comment</code> as the form body data to <code>/api/books/{_id}</code> to add a comment to a book. The returned response will be the books object similar to <b>GET</b> <code>/api/books/{_id}</code> request in an earlier test. If <code>comment</code> is not included in the request, return the string <code>missing required field comment</code>`. If no book is found, return the string <code>no book exists</code>.
    testString: "async getUserInput => {
       try {
         let url = getUserInput('url') + '/api/books';       
         let commentTarget = await $.post(url, { 'title': 'Notable Book' });
         assert.isObject(commentTarget);
         let bookId = commentTarget._id;
         let bookCom1 = await $.post(url + '/' + bookId, {'comment': 'This book is fab!'});
         let bookCom2 = await $.post(url + '/' + bookId, {'comment': 'I did not care for it'});
         assert.isObject(bookCom2);
         assert.property(bookCom2,'_id');
         assert.property(bookCom2,'title');
         assert.property(bookCom2,'comments');
         assert.lengthOf(bookCom2.comments, 2);
         bookCom2.comments.forEach((comment) => {
           assert.isString(comment);
           assert.oneOf(comment, ['This book is fab!','I did not care for it']);
         });     
         let commentErr = await $.post(url + '/' + bookId);
         assert.isString(commentErr);
         assert.equal(commentErr, 'missing required field comment');
         let failingComment = await $.post(url + '/5f665eb46e296f6b9b6a504d', { 'comment': 'Never Seen Comment' });
         assert.isString(failingComment);
         assert.equal(failingComment, 'no book exists');
       } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: You can send a <b>DELETE</b> request to <code>/api/books/{_id}</code> to delete a book from the collection. The returned response will be the string <code>delete successful</code> if successful. If no book is found, return the string <code>no book exists</code>.
    testString: "async getUserInput => {
       try {
        let url = getUserInput('url') + '/api/books';
        let deleteTarget = await $.post(url, { 'title': 'Deletable Book' });
        assert.isObject(deleteTarget);
        let bookId = deleteTarget._id;
        let doDelete = await $.ajax({url: url + '/' + bookId, type: 'DELETE'});
        assert.isString(doDelete);
        assert.equal(doDelete, 'delete successful');
        let failingDelete = await $.ajax({url: url + '/5f665eb46e296f6b9b6a504d', type: 'DELETE'});
        assert.isString(failingDelete);
        assert.equal(failingDelete, 'no book exists');
       } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: You can send a <b>DELETE</b> request to <code>/api/books</code> to delete all books in the database. The returned response will be the string <code>'complete delete successful</code> if successful.
    testString: "async getUserInput => {
       try {
        const deleteAll = await $.ajax({ url: getUserInput('url') + '/api/books', type: 'DELETE' });
        assert.isString(deleteAll);
        assert.equal(deleteAll, 'complete delete successful');
       } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"
  - text: All 10 functional tests required are complete and passing.
    testString: "async getUserInput => {
       try {
          const getTests = await $.get(getUserInput('url') + '/_api/get-tests' );
          assert.isArray(getTests);
          assert.isAtLeast(getTests.length, 10, 'At least 10 tests passed');
          getTests.forEach(test => {
            assert.equal(test.state, 'passed', 'Test in Passed State');
            assert.isAtLeast(test.assertions.length, 1, 'At least one assertion per test');
          });
       } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }"
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

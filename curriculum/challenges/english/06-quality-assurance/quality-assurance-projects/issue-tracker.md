---
id: 587d8249367417b2b2512c42
title: Issue Tracker
challengeType: 4
forumTopicId: 301569
---

## Description
<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href="https://issue-tracker.freecodecamp.rocks/" target="_blank">https://issue-tracker.freecodecamp.rocks/</a>.
Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Repl.it using <a href="https://repl.it/github/freeCodeCamp/boilerplate-project-issuetracker">this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-issuetracker/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
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
        assert(!/.*\/issue-tracker\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: I can POST /api/issues/{projectname} with form data containing required issue_title, issue_text, created_by, and optional assigned_to and status_text.
    testString: 'async getUserInput => {
      try {
         let test_data = {
           issue_title: "Faux Issue Title",
           issue_text: "Functional Test - Required Fields Only",
           created_by: "fCC",
         };
         const data = await $.post(getUserInput("url") + "/api/issues/fcc-project", test_data);
         assert.isObject(data);
         assert.nestedInclude(data, test_data);
       } catch(err) {
         throw new Error(err.responseText || err.message);
       }
    }'
  - text: 'If I POST to /api/issues/{projectname} without the required fields I get an error ''required fields missing: '' + &lt;comma seperated list of missing fields&gt;'
    testString: 'async getUserInput => {
      try {
        let test_data = {
          created_by: "fCC",
        };
        const data = await $.post(getUserInput("url") + "/api/issues/fcc-project", { created_by: "fCC" });
        assert.isString(data);
        assert.equal(data, "required fields missing: issue_title,issue_text");
      } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }'
  - text: The object saved (and returned) will include all of those fields (blank for optional no input) and also include created_on(date/time), updated_on(date/time), open(boolean, true for open, false for closed), and _id.
    testString: 'async getUserInput => { 
      try {
        let test_data = {
          issue_title: "Faux Issue Title 2",
          issue_text: "Functional Test - Every field filled in",
          created_by: "fCC",
          assigned_to: "Chai and Mocha",
          status_text: "In QA"
        };
        const data = await $.post(getUserInput("url") + "/api/issues/fcc-project", test_data);
        assert.isObject(data);
        assert.nestedInclude(data, test_data);
        assert.property(data, "created_on");
        assert.isNumber(Date.parse(data.created_on));
        assert.property(data, "updated_on");
        assert.isNumber(Date.parse(data.updated_on));
        assert.property(data, "open");
        assert.isBoolean(data.open);
        assert.property(data, "_id");
        } catch(err) {
          throw new Error(err.responseText || err.message);
        }
      }'
  - text: I can PUT /api/issues/{projectname} with an _id and any fields in the object with a value to object said object. Returned will be 'successfully updated' or 'could not update '+id. This should always update updated_on. If no fields are sent return 'no updated field sent'.
    testString: 'async getUserInput => { 
      try {
        let initialData = {
          issue_title: "Issue to be Updated",
          issue_text: "Functional Test - Put target",
          created_by: "fCC"
        };
        const url = getUserInput("url") + "/api/issues/fcc-project";
        const itemToUpdate = await $.post(url, initialData);
        const updateSucccess = await $.ajax({url: url, type: "PUT", data: { "_id": itemToUpdate._id, issue_text: "New Issue Text" }});
        assert.equal(updateSucccess, "successfully updated", "Expected Proper Update");
        const badUpdate = await $.ajax({url: url, type: "PUT", data: {"_id": itemToUpdate._id}});
        assert.equal(badUpdate, "no updated field sent", "Expected bad update due to lack of fields");
        const badIdUpdate = await $.ajax({url: url, type: "PUT", data: {"_id": "5f665eb46e296f6b9b6a504d", issue_text: "New Issue Text" }});
        assert.equal(badIdUpdate, "could not update 5f665eb46e296f6b9b6a504d");
      } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }'
  - text: If I PUT /api/issues/{projectname} without an _id, I get back '_id error'.
    testString: 'async getUserInput => { 
      try {
        const url = getUserInput("url") + "/api/issues/fcc-project";
        const badUpdate = await $.ajax({url: url, type: "PUT"});
        assert.equal(badUpdate, "_id error");
      } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }'
  - text: 'I can DELETE /api/issues/{projectname} with a id to completely delete an issue. If no _id is sent return ''_id error'', success: ''deleted ''+id, failed: ''could not delete ''+id.'
    testString: 'async getUserInput => { 
      try {
        let initialData = {
          issue_title: "Issue to be Deleted",
          issue_text: "Functional Test - Delete target",
          created_by: "fCC"
        };
        const url = getUserInput("url") + "/api/issues/fcc-project";
        const itemToDelete = await $.post(url, initialData);
        assert.isObject(itemToDelete);
        const deleteSuccess = await $.ajax({url: url, type: "DELETE", data: { "_id": itemToDelete._id}});
        assert.equal(deleteSuccess, "deleted " + itemToDelete._id);
        const noId = await $.ajax({url: url, type: "DELETE"});
        assert.equal(noId, "_id error");
        const badIdDelete = await $.ajax({url: url, type: "DELETE", data: {"_id": "5f665eb46e296f6b9b6a504d", issue_text: "New Issue Text" }});
        assert.equal(badIdDelete, "could not delete 5f665eb46e296f6b9b6a504d");
      } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }'
  - text: I can GET /api/issues/{projectname} for an array of all issues on that specific project with all the information for each issue as was returned when posted.
    testString: 'async getUserInput => { 
      try {
        let test_data = {
          issue_text: "Get Issues Test",
          created_by: "fCC"
        };
        const url = getUserInput("url") + "/api/issues/get_issues_test_" + Date.now().toString().substring(7);
        const data1 = await $.post(url, Object.assign(test_data, {issue_title: "Faux Issue 1"}));
        assert.isObject(data1);
        const data2 = await $.post(url, Object.assign(test_data, {issue_title: "Faux Issue 2"}));
        assert.isObject(data2);
        const data3 = await $.post(url, Object.assign(test_data, {issue_title: "Faux Issue 3"}));
        assert.isObject(data3);
        const getIssues = await $.get(url);
        assert.isArray(getIssues);
        assert.lengthOf(getIssues, 3);
        let re = new RegExp("Faux Issue \\d");
        assert.match(getIssues[0].issue_title,re);
        assert.match(getIssues[1].issue_title,re);
        assert.match(getIssues[2].issue_title,re);
      } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }'
  - text: I can filter my get request by also passing along any field and value in the query(ie. /api/issues/{project}?open=false). I can pass along as many fields/values as I want.
    testString: 'async getUserInput => { 
      try {
        let test_data = {
          issue_title: "To be Filtered",
          issue_text: "Filter Issues Test"
        };
        const url = getUserInput("url") + "/api/issues/get_issues_test_" + Date.now().toString().substring(7);
        const data1 = await $.post(url, Object.assign(test_data, {created_by: "Alice", assigned_to: "Bob"}));
        const data2 = await $.post(url, Object.assign(test_data, {created_by: "Alice", assigned_to: "Bob"}));
        const data3 = await $.post(url, Object.assign(test_data, {created_by: "Alice", assigned_to: "Eric"}));
        const data4 = await $.post(url, Object.assign(test_data, {created_by: "Carol", assigned_to: "Eric"}));
        const getSingle = await $.get(url + "?created_by=Alice");
        assert.isArray(getSingle);
        assert.lengthOf(getSingle, 3);
        const getMultiple = await $.get(url + "?created_by=Alice&assigned_to=Bob");
        assert.isArray(getMultiple);
        assert.lengthOf(getMultiple, 2);
      } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }'
  - text: All 11 functional tests are complete and passing.
    testString: 'async getUserInput => { 
      try {
        const getTests = await $.get(getUserInput("url") + "/_api/get-tests" );
        assert.isArray(getTests);
        assert.isAtLeast(getTests.length, 11, "At least 11 tests passed");
        getTests.forEach(test => {
          assert.equal(test.state, "passed", "Test in Passed State");
          assert.isAtLeast(test.assertions.length, 1, "At least one assertion per test");
        });
      } catch(err) {
        throw new Error(err.responseText || err.message);
      }
    }'
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

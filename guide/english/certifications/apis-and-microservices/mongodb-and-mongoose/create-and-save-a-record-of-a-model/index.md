---
title: Create and Save a Record of a Model
---
## Create and Save a Record of a Model

The stub is already provided in the function: createAndSavePerson.

Now you have model so you create the object of person from Person.

If you have worked with MVC before in any other framework then you already know that saving a model object saves an entry for you in the database (in MongoDB case the document will be inserted).

Make sure to call save() as in the example.
person.save(function(err,data){
  if (err)
  {
  //your code
  }
  else
  {
  //your code on success
  }

});
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

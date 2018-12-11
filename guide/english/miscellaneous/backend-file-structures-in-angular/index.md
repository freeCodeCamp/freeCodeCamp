---
title: Backend File Structures in Angular
---
Your app's backend api that interacts with your database is located in **/server/api**  
Let's take a look at **/server/api/thing**:

1.  **index.js**: this file routes the $http API requests made from your app's front-end to the appropriate function in **thing.controller.js**
2.  **thing.controller.js**: Here is where we actually deal with the database! Take a minute to look through here and figure out what's going on. These functions will: return all items in a collection, return a single item from a collection when passed its id, post an item to a collection, update an item in the collection (this doesn't really work as intended out of the box, we're going to fix that in a minute), and of course, delete an item from the collection.
3.  **thing.model.js**: Here, the actual structure of a _thing_ object is defined. You can add or remove any fields you want from the _thing_ model, and as long as they're syntactically correct they won't break anything, even if there are _things_ with different schemas in your database already. But! You don't just have to edit the _thing_ model to make a new type of collection, because generator-angular-fullstack can do it for you!
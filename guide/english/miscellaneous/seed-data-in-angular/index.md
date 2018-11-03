---
title: Seed Data in Angular
---
The _things_ that show up on your app's main view are part of some seed data that is added to your database (including your test and admin users) every time you restart your app (by running `grunt serve` in the command line). This data is defined in **/server/config/seed.js**.

You can add, remove, or change data in this file, and it will be written to your database, overwriting any duplicates the next time you run `grunt serve`. If an object defined in **seed.js** is overwritten, the database will assign a new _._id_ property to it (we'll cover _._id_ properties in the next section), which may give you some issues later on in testing. To avoid this, you can turn off seeding by setting `seedDB: false` in **/server/config/environment/development.js**.
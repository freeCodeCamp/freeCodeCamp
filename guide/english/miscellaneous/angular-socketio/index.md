---
title: Angular Socketio
---
If you've gotten to the Stock Charting Back End Project you may have noticed that the bonus criteria is to have your stock list live update across clients. This can be accomplished with SocketIO, but that's not all SocketIO can do. Remember earlier, I mentioned that when using _$http.post_ you had to update your local array with the database's version of the item you were posting? SocketIO keeps a user's browser environment synced with your database in realtime. This has two practical upshots:

1.  You no longer have to manually update your local data with database data; it is all managed automatically
2.  You can push database changes live to users on different machines all at the same time

Even better, if you just include SocketIO when prompted during the yeoman angular-fullstack setup, there is absolutely no work involved to include it. It works out of the box, has a working demo on the **main/** route, and you can learn how to use it yourself by simply looking at how they include it in **main.controller.js** (so I won't go any further into detail).
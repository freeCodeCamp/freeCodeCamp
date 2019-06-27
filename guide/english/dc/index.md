---
title: dc.js
---

dc.js is a javascript library for creating data visualization on browser. To create specific charts the corresponding methods are called.
It internally uses croassfilter.js and d3.js and its own style sheet.


#### Set-up 
The dc.js library is set up in a html file. Before including dc.js in html, <a href='https://github.com/freeCodeCamp/freeCodeCamp/tree/master/guide/english/d3' target='_blank' rel='nofollow'>d3.js</a>, <a href='https://github.com/crossfilter/crossfilter' target='_blank' rel='nofollow'>crossfilter.js</a> have to be included in it.
Then dc.js javascript code and its styles need to be included as shown below,

 ```html
<!DOCTYPE html>
<html>
  <head>
    <title>dc.js setup</title>
    <script src="https://d3js.org/d3.v3.js"></script>
    <script src="https://unpkg.com/crossfilter2@1.4.6/crossfilter.js"></script>
    <script src="http://unpkg.com/dc@3/dc.js"></script>
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/dc@3/dc.css"/>
  </head>
  <body>
  </body>
</html>
 ```
 
#### More information
* <a href='https://github.com/dc-js/dc.js' target='_blank' rel='nofollow'>Github page</a>
* <a href='http://dc-js.github.io/dc.js/examples/' target='_blank' rel='nofollow'>Example Charts using dc.js</a>

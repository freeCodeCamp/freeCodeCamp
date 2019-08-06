---
title: Crossfilter
---
<a href='http://square.github.io/crossfilter/' target='_blank' rel='nofollow'>Crossfilter</a> is a javascript library for exploring large multivariate data sets in the browser. To put in simple words, it is used for slicing and dicing of data before passing the data to some other javascript component in the browser.

For example, suppose you have a time series data, then with crossfilter you can use this data to plot a graph with filtering feature. i.e. First you plot the graph with hour level granularity then suppose if you want day level granularity it can be achieved easily by using features in crossfilter.

#### Set-up 
The crossfilter library is set up in a html file. To set up, just include the library in the html *script* tag as shown below,

 ```html
<!DOCTYPE html>
<html>
  <head>
    <title>Crossfilter</title>
    <script src="https://unpkg.com/crossfilter2@1.4.6/crossfilter.js"></script>
  </head>

  <body>
  </body>
</html>
 ```
Here we have used the CDN links. If you wish to download and maintain the crossfilter library code along with your html files you can directly include the relative path.

#### More information
* <a href='https://github.com/crossfilter/crossfilter' target='_blank' rel='nofollow'>Crossfilter Github page</a>
* <a href='https://github.com/crossfilter/crossfilter/wiki' target='_blank' rel='nofollow'>Crossfilter wiki page</a>

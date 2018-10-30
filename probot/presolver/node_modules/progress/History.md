### 1.1.7 / 2014-06-30

 * fixed a bug that occurs when a progress bar attempts to draw itself
   on a console with very few columns

### 1.1.6 / 2014-06-16

 * now prevents progress bar from exceeding TTY width by limiting its width to
   the with of the TTY

### 1.1.5 / 2014-03-25

 * updated documentation and various other repo maintenance
 * updated makefile to run examples with `make`
 * removed dependency on readline module

### 1.1.4 / 2014-03-14

 * now supports streams, for example output progress bar to stderr, while piping
   stdout
 * increases performance and flicker by remembering the last drawn progress bar

### 1.1.3 / 2013-12-31

 * fixes a bug where bar would bug when initializing
 * allows to pass updated tokens when ticking or updating the bar
 * fixes a bug where the bar would throw if skipping to far

### 1.1.2 / 2013-10-17

 * lets you pass an `fmt` and a `total` instead of an options object

### 1.1.0 / 2013-09-18

 * eta and elapsed tokens default to 0.0 instead of ?.?
 * better JSDocs
 * added back and forth example
 * added method to update the progress bar to a specific percentage
 * added an option to hide the bar on completion

### 1.0.1 / 2013-08-07

 * on os x readline now works, reverting the terminal hack

### 1.0.0 / 2013-06-18

  * remove .version
  * merge pull request #15 from davglass/readline-osx
  * on OSX revert back to terminal hack to avoid a readline bug

### 0.1.0 / 2012-09-19

  * fixed logic bug that caused bar to jump one extra space at the end [davglass]
  * working with readline impl, even on Windows [davglass]
  * using readline instead of the \r hack [davglass]

### 0.0.5 / 2012-08-07

  * add ability to tick by zero chunks - tick(0)
  * fix ETA. Closes #4 [lwille]

### 0.0.4 / 2011-11-14

  * allow more recent versions of node

### 0.0.3 / 2011-04-20

  * changed; erase the line when complete

### 0.0.2 / 2011-04-20

  * added custom tokens support
  * fixed; clear line before writing

### 0.0.1 / 2010-01-03

  * initial release

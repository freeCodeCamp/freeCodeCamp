---
title: RegExp prototype exec
---

## RegExp prototype exec

The **`exec()`** method executes a search for a match in a specified string. Returns a result array, or [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values.").

If you are executing a match simply to find true or false, use the [`RegExp.prototype.test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.") method or the [`String.prototype.search()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search "The search() method executes a search for a match between a regular expression and this String object.") method.

### Syntax

	regexObj.exec(str)

### Parameters

`str`

The string against which to match the regular expression.

### Return value

If the match succeeds, the `exec()` method returns an array and updates properties of the regular expression object. The returned array has the matched text as the first item, and then one item for each capturing parenthesis that matched containing the text that was captured.

If the match fails, the `exec()` method returns [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values.").

### Description

Consider the following example:

    // Match "quick brown" followed by "jumps", ignoring characters in between
    // Remember "brown" and "jumps"
    // Ignore case
    var re = /quick\s(brown).+?(jumps)/ig;
    var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');

The following table shows the results for this script:

### Examples

#### Finding successive matches

If your regular expression uses the "`g`" flag, you can use the `exec()` method multiple times to find successive matches in the same string. When you do so, the search starts at the substring of `str` specified by the regular expression's [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "The lastIndex is a read/write integer property of regular expression instances that specifies the index at which to start the next match.") property ([`test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.") will also advance the [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "The lastIndex is a read/write integer property of regular expression instances that specifies the index at which to start the next match.") property). For example, assume you have this script:

    var myRe = /ab*/g;
    var str = 'abbcdefabh';
    var myArray;
    while ((myArray = myRe.exec(str)) !== null) {
      var msg = 'Found ' + myArray[0] + '. ';
      msg += 'Next match starts at ' + myRe.lastIndex;
      console.log(msg);
    }

This script displays the following text:

    Found abb. Next match starts at 3
    Found ab. Next match starts at 9

Note: Do not place the regular expression literal (or [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "The RegExp constructor creates a regular expression object for matching text with a pattern.") constructor) within the `while` condition or it will create an infinite loop if there is a match due to the [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "The lastIndex is a read/write integer property of regular expression instances that specifies the index at which to start the next match.") property being reset upon each iteration. Also be sure that the global flag is set or a loop will occur here also.

#### Using `exec()` with `RegExp` literals

You can also use `exec()` without creating a [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "The RegExp constructor creates a regular expression object for matching text with a pattern.") object:

    var matches = /(hello \S+)/.exec('This is a hello world!');
    console.log(matches[1]);

This will log a message containing 'hello world!'.

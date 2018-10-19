---
title: Specify Only the Lower Number of Matches
---
The Problem
Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.

Solution
let haStr = "Hazzzzah";
let haRegex = /Haz{4,30}ah/; // Change this line
let result = haRegex.test(haStr);

## Specify Only the Lower Number of Matches

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/javascript-algorithms-and-data-structures/regular-expressions/specify-only-the-lower-number-of-matches/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

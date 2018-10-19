---
title: Writing Good Git Commit Messages
---
1.  Separate subject from body with a blank line
2.  Limit the subject line to 50 characters
3.  Capitalize the subject line
4.  Do not end the subject line with a period
5.  Use the imperative mood in the subject line
6.  Wrap the body at 72 characters
7.  Use the body to explain what and why vs. how

**A properly formed git commit subject line should always be able to complete the following sentence:**

> If applied, this commit will _`<<your subject line here>>`_

**For example:**

*   If applied, this commit will **_Refactor subsystem X for readability_**
*   If applied, this commit will **_Update getting started documentation_**
*   If applied, this commit will **_Remove deprecated methods_**
*   If applied, this commit will **_Release version 1.0.0_**
*   If applied, this commit will **_Merge pull request <span class="hashtag">#123</span> from user/branch_**

**Notice how this doesn't work for the other non-imperative forms:**

*   If applied, this commit will _<span class="bbcode-s">fixed bug with Y</span>_
*   If applied, this commit will _<span class="bbcode-s">changing behavior of X</span>_
*   If applied, this commit will _<span class="bbcode-s">more fixes for broken stuff</span>_
*   If applied, this commit will _<span class="bbcode-s">sweet new API methods</span>_

**Remember:** _Use of the imperative is important only in the subject line. You can relax this restriction when you're writing the body._

**Reference:** <a href='http://chris.beams.io/posts/git-commit' target='_blank' rel='nofollow'>http://chris.beams.io/posts/git-commit</a>
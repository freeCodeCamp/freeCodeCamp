---
title: Free Code Camp Infinite Loop Protection
---
The Free Code Camp code runner has a built in Infinite Loop Protect feature, leveraged from <a href='https://github.com/jsbin/loop-protect' target='_blank' rel='nofollow'>JSBin's Loop Protect</a>. The loop protect injects some code into user created loops to allow a safe exit if more than ~500ms has passed without exiting the loop. Loop protect will catch many, but not all infinite loop issues. If you see this message:

`Error: Potential infinite loop at line X`

It means you have been protected from an infinite loop.

**Note:** Loop Protect cannot detect infinite recursion.

## Disable Loop Protect

In some cases - a slow computer or a long loop - you may get an incorrect loop protect. In order to disable loop protect, add the following comment over the line the loop protection message lists:

`//noprotect`

**Warning:** Disabling loop protect means you may potentially allow your code to go into an infinite loop, causing your browser to be unresponsive.

## Recovering Unresponsive Code

If you have erred and incorrectly disabled loop protection and now have an unresponsive solution, you can disable Code Auto-Run.

By default, the Free Code Camp site automatically loads and runs your last recorded solution. If you have accidentally created an infinite loop or other irrecoverable error or simply don't trust the code, you can disable code auto-run by putting the following in your URL: run=disabled

Example:

    URL: http://www.freecodecamp.com/challenges/Algorithm-meet-Algorithm#?solution=function%20meetBonfire(argument)

    No-Run URL: http://www.freecodecamp.com/challenges/Algorithm-meet-Algorithm#?run=disabled&solution=function%20meetBonfire(argument)
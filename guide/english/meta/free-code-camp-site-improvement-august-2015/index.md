---
title: Free Code Camp Site Improvement August 2015
---
## Sunday's Improvements

*   replaced our getting-started videos with a simple 10-minute process (using GIFs instead of videos)
*   doubled the number of our HTML5 and Bootstrap challenges
*   replaced Codecademy's JavaScript and jQuery challenges with our own challenges
*   added our own Object-oriented Programming and Functional Programming challenges
*   added two new Front End Project front end challenges (Personal Portfolio and Simon game), and moved our Front End Projects to much earlier in our curriculum
*   completely replaced our Field Guide with a searchable, and easily-editable open-source wiki
*   made it so your Algorithm code is stored in your browser, so if you leave the page, your code will be there when you come back
*   simplified our portfolio pages. You can now click a single button to mirror your Free Code Camp profile with your GitHub profile. Algorithm solutions are no longer shown here, but they'll eventually be accessible through our API.
*   fixed some issues with Brownie Points and Streaks
*   improved our Camper News page by removing the (mostly unused) comments and adding one-click upvoting
*   added a Creative Commons license to literally all of our images and text
*   thanks to Loopback, everything is now an API, and we will soon publish cool ways to interact with Free Code Camp's (non-sensitive) data

## FAQ

### The challenge I was most recently doing disappeared.

You can just keep going. If you have time to go back and try our new challenges, they should be a quick review for you. Otherwise, keep moving forward.

### Why are you deploying all these improvements at once?

We've been working on some of the features for months on our Staging branch. Most of them were held up by a single task: our transition to <a href='http://loopback.io/' target='_blank' rel='nofollow'>Loopback</a>. [@BerkeleyTrue](/users/berkeleytrue) started working on this back in March.

### Was deploying everything at once necessary?

Probably not. Going forward, we will deploy new code several times a day (as we did prior to the Loopback feature). We plan to start using a <a href='https://en.wikipedia.org/wiki/Continuous_integration' target='_blank' rel='nofollow'>continuous integration</a> and other agile best practices as we reduce our <a href='https://en.wikipedia.org/wiki/Technical_debt' target='_blank' rel='nofollow'>technical debt</a>.
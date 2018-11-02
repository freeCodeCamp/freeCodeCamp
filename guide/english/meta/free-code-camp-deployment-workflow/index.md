---
title: Free Code Camp Deployment Workflow
---
1.  All code is written and pushed to a branch on the developers' own fork of Free Code Camp.
2.  Developers create pull requests, pulling code from their branch to Free Code Camp's staging branch.
3.  Someone other than the person who submitted the pull request QA's the pull request and accepts it if everything is perfect. Otherwise they close the pull request with an explanation of why it isn't perfect, and the developer opens another pull request once they've fixed things.
4.  Master is deployed to freecodecamp.com periodically.

## Notes:

*   This is subject to change once we get better test coverage and continuous integration working.
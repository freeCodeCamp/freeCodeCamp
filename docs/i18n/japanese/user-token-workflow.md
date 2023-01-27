# How the User Token Workflow Works

User tokens are used to identify users to third parties so challenges completed using those services can be saved to a user's account.

## How they are created

At the moment, the tokens are only used to submit the Relational Database challenges. A token gets created when a signed-in user clicks the "Click here to start the course" or "Click here to start the project" buttons to start one of the Relational Database courses or projects.

## When they get deleted

A user token will be deleted when a user signs out of freeCodeCamp, resets their progress, deletes their account, or manually deletes the token using the widget on the settings page.

## How they work

Tokens are stored in a `UserToken` collection in the database. Each record has a unique `_id`, which is the token, and a `user_id` that links to the user's account from the `user` collection. The token is encoded using JWT and sent to the client when it's created. That encoded token is then given to third-party services that need it and sent to our API by them when a challenge is completed. When our API gets it, it is decoded so we can identify the user submitting a challenge and save the completed challenge to their `completedChallenges`.

Script to seed the daily challenges.

To run:

Copy the `sample.env` to `.env`,
Make sure dependencies are installed,
Run the main client with upcoming changes shown - this is so the script can get the challenges from GraphQL,
Run `pnpm seed` to seed the challenges from the "Dev Playground" superblock to a `DailyCodingChallenges` collection in the `freecodecamp` database.

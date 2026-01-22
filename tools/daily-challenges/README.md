Script to seed the daily challenges. Used to seed challenges for local or production databases.

To run:

Copy the `sample.env` to `.env`,
Make sure dependencies are installed,
Run the main client with upcoming changes shown - this is so the script can get the challenges from GraphQL,
`cd tools/daily-challenges` to go into the `daily-challenges` folder,
Run `pnpm seed-daily-challenges` to seed the challenges from the "Dev Playground" superblock to a `DailyCodingChallenges` collection in the `freecodecamp` database.

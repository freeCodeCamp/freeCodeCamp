# freeCodeCamp Contributor Guide

Welcome to the freeCodeCamp codebase! Here are some tips to help you get started.

## Project Structure

- **api/**: The Node.js/Fastify backend server.
- **client/**: The React/Gatsby frontend application.
- **curriculum/**: The coding challenges and learning materials.
- **config/**: Configuration files.
- **tools/**: Helper scripts and developer tools.

## Setup Status

1.  **.env Configuration**: Setup complete (copied from `sample.env`).
2.  **Dependencies**: Installed via `pnpm install`.
3.  **Database**: MongoDB started locally in (`./mongodb_data`).
4.  **Seeding**: Currently running `pnpm run seed` to populate the database.

## Running the App

Once the seeding is complete, you can start the development server:

```bash
pnpm run develop
```

This will start both the API and the Client.

- Client: `http://localhost:8000`
- API: `http://localhost:3000` (or similar)

## How to Contribute

1.  **Find an Issue**: Look for issues labeled "help wanted" or "first timers only" on the [GitHub repository](https://github.com/freeCodeCamp/freeCodeCamp/issues).
2.  **Working on Challenges**:
    - Challenges are located in the `curriculum/challenges` directory.
    - You can use the Challenge Editor: `npm run challenge-editor` (see `package.json`).
3.  **Working on Code**:
    - If working on the frontend, check the `client` directory.
    - If working on the backend, check the `api` directory.
4.  **Testing**:
    - Run tests using `pnpm test`.
    - Specific tests: `pnpm run test-client`, `pnpm run test-api`.

## Important Links

- [Contribution Guide](https://contribute.freecodecamp.org)
- [GitHub Repository](https://github.com/freeCodeCamp/freeCodeCamp)

Happy Coding!

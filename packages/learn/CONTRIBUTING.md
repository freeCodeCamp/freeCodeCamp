# Contributing

Prerequisites | Minimum Version
|---|---|
node | ^8.11.x
[yarn](https://yarnpkg.com/en/) | ^1.3.0
[freeCodeCamp](https://github.com/freecodecamp/freecodecamp) | Running Locally

[freeCodeCamp/freeCodeCamp](https://github.com/freecodecamp/freecodecamp) currently holds the backend code for learn. The development process relies on this backend. You will see a message like below if you attemp to run `Learn` locally without it:

```sh
error UNHANDLED EXCEPTION

  Error: connect ECONNREFUSED 127.0.0.1:3000

error Command failed with exit code 1.
```

1. Fork the repo
2. Clone locally
3. `yarn install`
4. `git checkout -b <your-branch-name>`
5. `yarn develop` (Be sure you have `freeCodeCamp` running locally as well)
6. Make your changes
7. Make a PR
8. Bask in the glory of your accomplishments

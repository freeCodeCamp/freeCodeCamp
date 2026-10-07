<h1 align="center">Fastify</h1>

## Benchmarking
Benchmarking is important if you want to measure how a change can affect your
application's performance. We provide a simple way to benchmark your
application from the point of view of a user and contributor. The setup allows
you to automate benchmarks in different branches and on different Node.js
versions.

The modules we will use:
- [Autocannon](https://github.com/mcollina/autocannon): An HTTP/1.1 benchmarking
  tool written in node.
- [Branch-comparer](https://github.com/StarpTech/branch-comparer): Checkout
  multiple git branches, execute scripts, and log the results.
- [Concurrently](https://github.com/open-cli-tools/concurrently): Run commands
  concurrently.
- [Npx](https://github.com/npm/npx): NPM package runner used to run scripts
  against different Node.js Versions and execute local binaries. Shipped with
  npm@5.2.0.

## Simple

### Run the test in the current branch
```sh
npm run benchmark
```

### Run the test against different Node.js versions ✨
```sh
npx -p node@10 -- npm run benchmark
```

## Advanced

### Run the test in different branches
```sh
branchcmp --rounds 2 --script "npm run benchmark"
```

### Run the test in different branches against different Node.js versions ✨
```sh
branchcmp --rounds 2 --script "npm run benchmark"
```

### Compare current branch with main (Gitflow)
```sh
branchcmp --rounds 2 --gitflow --script "npm run benchmark"
```
or
```sh
npm run bench
```

### Run different examples

<!-- markdownlint-disable -->
```sh
branchcmp --rounds 2 -s "node ./node_modules/concurrently -k -s first \"node ./examples/asyncawait.js\" \"node ./node_modules/autocannon -c 100 -d 5 -p 10 localhost:3000/\""
```
<!-- markdownlint-enable -->

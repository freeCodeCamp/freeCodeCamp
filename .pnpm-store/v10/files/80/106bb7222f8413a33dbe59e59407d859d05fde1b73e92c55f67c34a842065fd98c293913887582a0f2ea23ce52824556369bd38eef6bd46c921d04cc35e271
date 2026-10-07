# dotenv-cli

## Installing

NPM
```bash
$ npm install -g dotenv-cli
```

Yarn
```bash
$ yarn global add dotenv-cli
```

pnpm
```bash
pnpm add -g dotenv-cli
```

## Usage

```bash
$ dotenv -- <command with arguments>
```

This will load the variables from the .env file in the current working directory and then run the command (using the new set of environment variables).

Alternatively, if you do not need to pass arguments to the command, you can use the shorthand:

```bash
$ dotenv <command>
```

### Custom .env files
Another .env file could be specified using the -e flag (this will replace loading `.env` file):
```bash
$ dotenv -e .env2 -- <command with arguments>
```

Multiple .env files can be specified, and will be processed in order:
```bash
$ dotenv -e .env3 -e .env4 -- <command with arguments>
```

### Cascading env variables
Some applications load from `.env`, `.env.development`, `.env.local`, and `.env.development.local`
(see [#37](https://github.com/entropitor/dotenv-cli/issues/37) for more information).
`dotenv-cli` supports this using the `-c` flag for just `.env` and `.env.local` and `-c development` for the ones above.
The `-c` flag can be used together with the `-e` flag. The following example will cascade env files located one folder up in the directory tree (`../.env` followed by `../.env.local`):
```bash
dotenv -e ../.env -c 
```

### Setting variable from command line
It is possible to set variable directly from command line using the -v flag:
```bash
$ dotenv -v VARIABLE=somevalue -- <command with arguments>
```

Multiple variables can be specified:
```bash
$ dotenv -v VARIABLE1=somevalue1 -v VARIABLE2=somevalue2 -- <command with arguments>
```

Variables set up from command line have higher priority than from env files.

> Purpose of this is that standard approach `VARIABLE=somevalue <command with arguments>` doesn't work on Windows. The -v flag works on all the platforms.

### Check env variable
If you want to check the value of an environment variable, use the `-p` flag
```bash
$ dotenv -p NODE_ENV
```

### Flags to the underlying command
If you want to pass flags to the inner command use `--` after all the flags to `dotenv-cli`. 

E.g. the following command without dotenv-cli:
```bash
mvn exec:java -Dexec.args="-g -f"
```

will become the following command with dotenv-cli:
```bash
$ dotenv -- mvn exec:java -Dexec.args="-g -f"
``` 
or in case the env file is at `.my-env`
```bash
$ dotenv -e .my-env -- mvn exec:java -Dexec.args="-g -f"
``` 

### Variable expansion
We support expanding env variables inside .env files (See [dotenv-expand](https://github.com/motdotla/dotenv-expand) npm package for more information)

For example:
```
IP=127.0.0.1
PORT=1234
APP_URL=http://${IP}:${PORT}
```
Using the above example `.env` file, `process.env.APP_URL` would be `http://127.0.0.1:1234`.

#### Disabling variable expansion
If your `.env` variables include values that should not be expanded (e.g. `PASSWORD="pas$word"`), you can pass flag `--no-expand` to `dotenv-cli` to disable variable expansion.

For example:
```bash
dotenv --no-expand <command>
```

### Variable expansion in the command

If your `.env` file looks like:

```
SAY_HI=hello!
```

you might expect `dotenv echo "$SAY_HI"` to display `hello!`. In fact, this is not what happens: your shell will first interpret your command before passing it to `dotenv-cli`, so if `SAY_HI` envvar is set to `""`, the command will be expanded into `dotenv echo`: that's why `dotenv-cli` cannot make the expansion you expect.

#### Possible solutions

1. Bash and escape

One possible way to get the desired result is:

```
$ dotenv -- bash -c 'echo "$SAY_HI"'
```

In bash, everything between `'` is not interpreted but passed as is. Since `$SAY_HI` is inside `''` brackets, it's passed as a string literal.

Therefore, `dotenv-cli` will start a child process `bash -c 'echo "$SAY_HI"'` with the env variable `SAY_HI` set correctly which means bash will run `echo "$SAY_HI"` in the right environment which will print correctly `hello`

2. Subscript encapsulation

Another solution is simply to encapsulate your script in another subscript.

Example here with npm scripts in a package.json

```json
{
  "scripts": {
    "_print-stuff": "echo $STUFF",
    "print-stuff": "dotenv -- npm run _print-stuff",
  }
}
```

This example is used in a project setting (has a package.json).  Should always install locally `npm install -D dotenv-cli`

### Debugging

You can add the `--debug` flag to output the `.env` files that would be processed and exit.

### Override

Override any environment variables that have already been set on your machine with values from your .env file.

```bash
dotenv -e .env.test -o -- jest
```

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

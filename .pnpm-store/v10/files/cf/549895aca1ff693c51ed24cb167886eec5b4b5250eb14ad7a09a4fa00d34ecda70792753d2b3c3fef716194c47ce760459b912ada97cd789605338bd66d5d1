# marked(1) -- a javascript markdown parser

## SYNOPSIS

`marked` [`-o` <output file>] [`-i` <input file>] [`-s` <markdown string>] [`-c` <config file>] [`--help`] [`--version`] [`--tokens`] [`--no-clobber`] [`--pedantic`] [`--gfm`] [`--breaks`] [`--no-etc...`] [`--silent`] [filename]

## DESCRIPTION

marked is a full-featured javascript markdown parser, built for speed.
It also includes multiple GFM features.

## EXAMPLES

```sh
cat in.md | marked > out.html
```

```sh
echo "hello *world*" | marked
```

```sh
marked -o out.html -i in.md --gfm
```

```sh
marked --output="hello world.html" -i in.md --no-breaks
```

## OPTIONS

* -o, --output [output file]
Specify file output. If none is specified, write to stdout.

* -i, --input [input file]
Specify file input, otherwise use last argument as input file.
If no input file is specified, read from stdin.

* -s, --string [markdown string]
Specify string input instead of a file.

* -c, --config [config file]
Specify config file to use instead of the default `~/.marked.json` or `~/.marked.js` or `~/.marked/index.js`.

* -t, --tokens
Output a token list instead of html.

* -n, --no-clobber
Do not overwrite `output` if it exists.

* --pedantic
Conform to obscure parts of markdown.pl as much as possible.
Don't fix original markdown bugs.

* --gfm
Enable github flavored markdown.

* --breaks
Enable GFM line breaks. Only works with the gfm option.

* --no-breaks, -no-etc...
The inverse of any of the marked options above.

* --silent
Silence error output.

* -h, --help
Display help information.

## CONFIGURATION

For configuring and running programmatically.

Example

```js
import { Marked } from 'marked';
const marked = new Marked({ gfm: true });
marked.parse('*foo*');
```

## BUGS

Please report any bugs to <https://github.com/markedjs/marked>.

## LICENSE

Copyright (c) 2011-2014, Christopher Jeffrey (MIT License).

## SEE ALSO

markdown(1), nodejs(1)

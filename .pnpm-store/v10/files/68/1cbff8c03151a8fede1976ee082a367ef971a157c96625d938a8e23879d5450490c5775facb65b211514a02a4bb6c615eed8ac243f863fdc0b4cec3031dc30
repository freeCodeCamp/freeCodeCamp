# strip-final-newline

> Strip the final [newline character](https://en.wikipedia.org/wiki/Newline) from a string/buffer

Can be useful when parsing the output of, for example, `ChildProcess#execFile`, as [binaries usually output a newline at the end](https://stackoverflow.com/questions/729692/why-should-text-files-end-with-a-newline). Normally, you would use `stdout.trim()`, but that would also remove newlines at the start and whitespace.

## Install

```
$ npm install strip-final-newline
```

## Usage

```js
import stripFinalNewline from 'strip-final-newline';

stripFinalNewline('foo\nbar\n\n');
//=> 'foo\nbar\n'

stripFinalNewline(Buffer.from('foo\nbar\n\n')).toString();
//=> 'foo\nbar\n'
```

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-strip-eof?utm_source=npm-strip-eof&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>

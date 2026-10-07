.Dd August 9, 2013
.Dt cssesc 1
.Sh NAME
.Nm cssesc
.Nd escape text for use in CSS string literals or identifiers
.Sh SYNOPSIS
.Nm
.Op Fl i | -identifier Ar string
.br
.Op Fl s | -single-quotes Ar string
.br
.Op Fl d | -double-quotes Ar string
.br
.Op Fl w | -wrap Ar string
.br
.Op Fl e | -escape-everything Ar string
.br
.Op Fl v | -version
.br
.Op Fl h | -help
.Sh DESCRIPTION
.Nm
escapes strings for use in CSS string literals or identifiers while generating the shortest possible valid ASCII-only output.
.Sh OPTIONS
.Bl -ohang -offset
.It Sy "-s, --single-quotes"
Escape any occurences of ' in the input string as \\', so that the output can be used in a CSS string literal wrapped in single quotes.
.It Sy "-d, --double-quotes"
Escape any occurences of " in the input string as \\", so that the output can be used in a CSS string literal wrapped in double quotes.
.It Sy "-w, --wrap"
Make sure the output is a valid CSS string literal wrapped in quotes. The type of quotes can be specified using the
.Ar -s | --single-quotes
or
.Ar -d | --double-quotes
settings.
.It Sy "-e, --escape-everything"
Escape all the symbols in the output, even printable ASCII symbols.
.It Sy "-v, --version"
Print cssesc's version.
.It Sy "-h, --help"
Show the help screen.
.El
.Sh EXIT STATUS
The
.Nm cssesc
utility exits with one of the following values:
.Pp
.Bl -tag -width flag -compact
.It Li 0
.Nm
successfully escaped the given text and printed the result.
.It Li 1
.Nm
wasn't instructed to escape anything (for example, the
.Ar --help
flag was set); or, an error occurred.
.El
.Sh EXAMPLES
.Bl -ohang -offset
.It Sy "cssesc 'foo bar baz'"
Print an escaped version of the given text.
.It Sy echo\ 'foo bar baz'\ |\ cssesc
Print an escaped version of the text that gets piped in.
.El
.Sh BUGS
cssesc's bug tracker is located at <https://github.com/mathiasbynens/cssesc/issues>.
.Sh AUTHOR
Mathias Bynens <https://mathiasbynens.be/>
.Sh WWW
<https://mths.be/cssesc>

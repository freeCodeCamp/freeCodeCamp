.TH sshpk\-verify 1 "Jan 2016" sshpk "sshpk Commands"
.SH NAME
.PP
sshpk\-verify \- verify a signature on data using an SSH key
.SH SYNOPSYS
.PP
\fB\fCsshpk\-verify\fR \-i KEYPATH \-s SIGNATURE [OPTION...]
.SH DESCRIPTION
.PP
Takes in arbitrary bytes and a Base64\-encoded signature, and verifies that the
signature was produced by the private half of the given SSH public key.
.SH EXAMPLES
.PP
.RS
.nf
$ printf 'foo' | sshpk\-verify \-i ~/.ssh/id_ecdsa \-s MEUCIQCYp...
OK
$ printf 'foo' | sshpk\-verify \-i ~/.ssh/id_ecdsa \-s GARBAGE...
NOT OK
.fi
.RE
.SH EXIT STATUS
.TP
\fB\fC0\fR
Signature validates and matches the key.
.TP
\fB\fC1\fR
Signature is parseable and the correct length but does not match the key or
otherwise is invalid.
.TP
\fB\fC2\fR
The signature or key could not be parsed.
.TP
\fB\fC3\fR
Invalid commandline options were supplied.
.SH OPTIONS
.TP
\fB\fC\-v, \-\-verbose\fR
Print extra information about the key and signature to stderr when verifying.
.TP
\fB\fC\-i KEY, \-\-identity=KEY\fR
Select the key to be used for verification. \fB\fCKEY\fR must be a relative or
absolute filesystem path to the key file. Any format supported by the \fB\fCsshpk\fR
library is supported, including OpenSSH formats and standard PEM PKCS.
.TP
\fB\fC\-s BASE64, \-\-signature=BASE64\fR
Supplies the base64\-encoded signature to be verified.
.TP
\fB\fC\-f PATH, \-\-file=PATH\fR
Input file to verify instead of stdin.
.TP
\fB\fC\-H HASH, \-\-hash=HASH\fR
Set the hash algorithm to be used for signing. This should be one of \fB\fCsha1\fR,
\fB\fCsha256\fR or \fB\fCsha512\fR\&. Some key types may place restrictions on which hash
algorithms may be used (e.g. ED25519 keys can only use SHA\-512).
.TP
\fB\fC\-t FORMAT, \-\-format=FORMAT\fR
Choose the signature format to use, from \fB\fCasn1\fR, \fB\fCssh\fR or \fB\fCraw\fR (only for
ED25519 signatures). The \fB\fCasn1\fR format is the default, as it is the format
used with TLS and typically the standard in most non\-SSH libraries (e.g.
OpenSSL). The \fB\fCssh\fR format is used in the SSH protocol and by the ssh\-agent.
.SH SEE ALSO
.PP
.BR sshpk-sign (1)
.SH BUGS
.PP
Report bugs at Github
\[la]https://github.com/arekinath/node-sshpk/issues\[ra]

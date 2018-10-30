Port of the OpenBSD `bcrypt_pbkdf` function to pure Javascript. `npm`-ified
version of [Devi Mandiri's port](https://github.com/devi/tmp/blob/master/js/bcrypt_pbkdf.js),
with some minor performance improvements. The code is copied verbatim (and
un-styled) from Devi's work.

This product includes software developed by Niels Provos.

## API

### `bcrypt_pbkdf.pbkdf(pass, passlen, salt, saltlen, key, keylen, rounds)`

Derive a cryptographic key of arbitrary length from a given password and salt,
using the OpenBSD `bcrypt_pbkdf` function. This is a combination of Blowfish and
SHA-512.

See [this article](http://www.tedunangst.com/flak/post/bcrypt-pbkdf) for
further information.

Parameters:

 * `pass`, a Uint8Array of length `passlen`
 * `passlen`, an integer Number
 * `salt`, a Uint8Array of length `saltlen`
 * `saltlen`, an integer Number
 * `key`, a Uint8Array of length `keylen`, will be filled with output
 * `keylen`, an integer Number
 * `rounds`, an integer Number, number of rounds of the PBKDF to run

### `bcrypt_pbkdf.hash(sha2pass, sha2salt, out)`

Calculate a Blowfish hash, given SHA2-512 output of a password and salt. Used as
part of the inner round function in the PBKDF.

Parameters:

 * `sha2pass`, a Uint8Array of length 64
 * `sha2salt`, a Uint8Array of length 64
 * `out`, a Uint8Array of length 32, will be filled with output

## License

This source form is a 1:1 port from the OpenBSD `blowfish.c` and `bcrypt_pbkdf.c`.
As a result, it retains the original copyright and license. The two files are
under slightly different (but compatible) licenses, and are here combined in
one file. For each of the full license texts see `LICENSE`.

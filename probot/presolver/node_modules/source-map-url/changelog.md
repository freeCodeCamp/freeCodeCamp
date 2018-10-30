### Version 0.4.0 (2015-11-12) ###

- Changed: sourceMappingURL comments used to be matched only when placed at
  the end of the script. However, since several commonly used JavaScript
  libraries do not follow this convention and all popular web browsers accept
  non-trailing comments, this has been revised.

  So now non-trailing SourceMappingURL comments are matched as well.


### Version 0.3.0 (2014-08-16) ###

- Changed: sourceMappingURL comments used to be matched only if they appeared
  on their own line. However, the spec only says:

  > The generated code may include a line at the end of the source, with the following form:
  >
  >     //# sourceMappingURL=<url>

  So now they are matched also when they appear on the same line as code.

- Removed: The `.set()` method. I couldn’t decide how it should work
  considering the above change. Moreover, it was unnecessarily complex (and
  would have gotten worse) for very little gain. It is much easier to run
  `.remove()` if needed, and then simply `code += "\n//# sourceMappingURL=" +
  url` (using the appropriate comment syntax and newline). KISS.

- Changed: The `.insertBefore()` method now always inserts the string exactly
  before the sourceMappingURL comment; not before the newline before the
  comment (if any). Moreover, it does not ensure that the comment will be on a
  new line anymore. This is up to the caller. KISS.

- Changed: The `.remove()` method no longer removes the newline before the
  sourceMappingURL (if any).

- Changed: Renamed `.get()` to `.getFrom()`.
- Changed: Renamed `.remove()` to `.removeFrom()`.

- Added: The `.existsIn()` method.


### Version 0.2.0 (2014-02-23) ###

- Changed: A space is no longer inserted before the closing comment syntax. If
  such a space is desired, it needs to be put in the closing comment syntax
  itself (such as `["/*", " */"]` instead of `["/*", "*/"]`). (Backwards
  incompatible change.)


### Version 0.1.0 (2014-02-22) ###

- Initial release.

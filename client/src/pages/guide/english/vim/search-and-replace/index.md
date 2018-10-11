---
title: Search and Replace
---

# Searching and Replacing in Vim

Search and replace in vim will search for all instances of a given text pattern and replace it with a string.

### Command Keys
The commands used for search and replace:
- `:substitute`
- `:s` (short abbreviated form of substitute)

### Command Structure
The structure used for search and replace:

`:[range]` `s`/`[pattern]`/`[string]`/`[flags]` `[count]`

where...
- `[range]` indicates the lines to search (e.g. `1`: first line, `$`: last line, `%`: all lines).
- `[pattern]` is the text pattern to be searched.
- `[string]` is the string that will replace the text pattern.
- `[flags]` turn on additional search and replace options (e.g. `c`: confirm substitution, `g`: replace all occurences in each line, `i`: ignore case).
- `[count]` replaces in `[count]` lines starting from the last line in `[range]` (or current line if `[range]` omitted).

### Common Examples
Some common search and replace examples are listed below:
- `:s/foo/bar/`	Change the first 'foo' to 'bar' in the current line.
- `:s/foo/bar/g`	Change each 'foo' to 'bar' in the current line.
- `:%s/foo/bar/g`	Change each 'foo' to 'bar' in all the lines.
- `:13s/foo/bar/g` Change each 'foo' to 'bar' in line 13.
- `:%s/foo/bar/cgi` Change every 'foo' to 'bar' in all lines.

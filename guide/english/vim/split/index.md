---
title: Split
---

# Opening Files in Vim with Split

In Vim, files can be opened or `split` horizontally and vertically to create an additional window or viewport for a given file.

### Command Keys

The commands for creating a horizontal split:

:`[N]split` `[file]`

:`[N]sp` `[file]`

where `sp` is the short abbreviation for `split`.

The commands for creating a vertical split:

:`[N]vsplit` `[file]`

:`[N]vs` `[file]`

where `vs` is the short abbreviation for `vsplit` and...

- `[N]` is the height (defaults to half current window).
- `[file]` is the file to open in the new split window (current file used if none given).

### Examples

Some examples of using split in Vim:
- :`sp` Split the current window into equal horizontal windows for the current file.
- :`10sp` Split the current window creating a new window with height 10 for the current file.
- :`sp` `index.html` Split the current window into equal horizontal windows and open `index.html` in the new window.
- :`vs` `main.css` Split the current window into equal vertical windows and open `main.css` in the new window.

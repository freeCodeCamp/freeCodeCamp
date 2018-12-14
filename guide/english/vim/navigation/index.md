---
title: Navigation
---

## Vim Navigation

### Basic movement

There are many ways to move the cursor in Vim, but these basic movements will allow
new users to get comfortable using normal mode for file navigation. 

* In normal mode, the keys `h`, `j`, `k` , `l` correspond to moving the cursor
one character left, down, up, and right, respectively. 

* To navigate one word at a time, the keys `w`, and `b` will move the cursor to
the beginning of the next word, or the beginning of the previous word. The `e`
key will move the cursor to the end of the current word.

* To move to the beginning of the current line, type `0`, and to move to the end
of the current line, type `$`.

* Finally, to move to the first line in the file, type `gg`, and to move to the
last line in the file, type `G`.

In summary: 

```vim
h   moves one character left
j   moves one row down
k   moves one row up
l   moves one character right

w   moves to the beginning of the next word
b   moves to the beginning of the previous word
e   moves to the end of the current word

0   moves to the beginning of the current line
$   moves to the end of the current line
:n  moves to line n (ex. :23 moves to line 23) can also use nG
^   moves to the first non blank character of the line.

ZZ  moves to the center of the line you are on
H   moves to the top of the screen
M   moves to the middle of the screen
L   moves to the bottom of the screen

gg  moves to the first line in the file
G   moves to the last line in the file
```


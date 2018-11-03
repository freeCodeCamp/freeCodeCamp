---
title: Motions
---

# Vim Basic Motions

### Cursors motions

First in VIM we can use the arrow keys if we like to move around the text file, but it is not the best way to do so,
and we lost the advantage of combine commands that VIM provides.

Instead of that the default and best way to move throught the text is using the keys `h`(left), `j`(down), `k`(up) and `l`(right).

```
     ^ 
     |
     k
<- h   l ->
     j
     |
     v
```
The advantage in use this keys instead of the arrow keys, is you can combine motions with other commands, like:


  - `d2j` -> delete 2 lines down
  - `y10k` -> copy 10 lines up
  - `10l` -> move 10 caracters right
  - `2h`  -> move 2 characters left
 
### Words Motions

A word consists of a sequence of letters, digits and underscores, or a
sequence of other non-blank characters, separated with white space (spaces,
tabs, end of line).  An empty line is also considered to be a word.

It is possible move throught words with this commnads:

  - `w` -> move to next word
  - `W` -> move to next **WORD*** 
  - `e` -> move to the end of the next word
  - `E` -> move to the end of the next **WORD**
  - `b` -> move to previous word 
  - `B` -> move to previous **WORD**
  - `ge` -> move to the end of previous word
  - `gE` -> move to the end of previous **WORD**
  
*A **WORD** consists of a sequence of non-blank characters, separated with white
space.  An empty line is also considered to be a **WORD**, ie: `quux(foo,` `bar,` `foo);`

With this motions combined with other commands you can do things like:

- `dw` -> delete the word
- `5e` -> move to the end of the 5th word from here

### Search motions

Another way to move throught the position you like, is using the search motions, the search motions consists in the 
motion + a character to search
  
  - `fx` -> move to the next `x`
  - `tx` -> move to first position before the next `x`
  - `;` -> next x
  - `Fx` -> move to the previous `x`
  - `Tx` -> move to first position after the previous `x`
  - `,` -> previous x
  
### Begin and End of lines
  
  You can also move to begin or end of line with VIM, with this commands:
  
   - `0` -> Begin of the line
   - `^` -> First non-blank character of the line
   - `$` -> End of the line
   
### File motions

In VIM you can move throught the file using this commands:

 - `gg` -> move to the first line of the file
 - `G` -> move to the last line of the file
 - `<ctrl> + f` -> move one page down
 - `<ctrl> + b` -> move one page up
 - `/text` -> find `text`
 - `n` -> move to the next occurrence of the `text` (previous command)
 - `?text` -> find previous `text` 
 - `N` -> move to the previous occurrence of `text`
 - `{` -> move one paragraph up
 - `}` -> move one paragraph down
 - `(` -> move one sentence up
 - `)` -> move one sentece down
 - `#` -> find word under cursor up
 - `*` -> find word under cursor down
 
 
  


---
title: Macros
---

## Macros

Recording macros is a way to make some repetitive tasks automatically in VIM.

### Recording Macros

Macros use one of the VIM registers to be storage, each register is identified by a letter `a` to `z`.

To start a Macro, in Normal Mode, press:

```vim
q<REGISTER LETTER>
```
Example: `qq` starts a macro in the register `q`, `qs` starts the macro in the register `s`

At this point you will see in VIM bottom line `recording @q`, this means everything you type now will be registered in the macro.

To stop recording the macro, press `<ESC>` to go back to NORMAL mode, and `q` to quit the macro.

To execute the macro you record, press `@` and the register `q`.

#### The complete process looks like this:
- `qq` -> start record the macro in register `q`
- `...` -> the series of commands you want to record
- `<ESC>q` -> go back to NORMAL mode and quit the macro record
- `@q` -> execute the macro, starting from the line you current are
- `@@` -> execute the macro again

### More Info

You can find more information about macros in the VIM Tips Wiki: 
http://vim.wikia.com/wiki/Macros

---
id: 6568bc85c5beadca3e0f6eb1
title: Крок 27
challengeType: 20
dashedName: step-27
---

# --description--

After the outer loop completes for all rows, return the final `board_string`. This string contains the complete visual representation of the sudoku board in ASCII art style, including borders and separators.

# --hints--

You should return the `board_string` variable at the end of the outer `for` loop.

```js
const tCode = code.replace(/\r/g, '');
const str = __helpers.python.getDef(tCode, "__str__");
const {function_body} = str;
const indent = function_body.match(/ +/)[0];
const returnStatement = `${indent}return board_string`;
assert.match(code, new RegExp(returnStatement));
```

# --seed--

## --seed-contents--

```py
class Board:
    def __init__(self, board):
        self.board = board

    def __str__(self):
        upper_lines = f'\n╔═══{"╤═══"*2}{"╦═══"}{"╤═══"*2}{"╦═══"}{"╤═══"*2}╗\n'
        middle_lines = f'╟───{"┼───"*2}{"╫───"}{"┼───"*2}{"╫───"}{"┼───"*2}╢\n'
        lower_lines = f'╚═══{"╧═══"*2}{"╩═══"}{"╧═══"*2}{"╩═══"}{"╧═══"*2}╝\n'
        board_string = upper_lines
--fcc-editable-region--
        for index, line in enumerate(self.board):
            row_list = []
            for square_no, part in enumerate([line[:3], line[3:6], line[6:]], start=1):
                row_square = '|'.join(str(item) for item in part)
                row_list.extend(row_square)
                if square_no != 3:
                    row_list.append('║')

            row = f'║ {" ".join(row_list)} ║\n'
            row_empty = row.replace('0', ' ')
            board_string += row_empty

            if index < 8:
                if index % 3 == 2:
                    board_string += f'╠═══{"╪═══"*2}{"╬═══"}{"╪═══"*2}{"╬═══"}{"╪═══"*2}╣\n'
                else:
                    board_string += middle_lines
            else:
                board_string += lower_lines

--fcc-editable-region--
```

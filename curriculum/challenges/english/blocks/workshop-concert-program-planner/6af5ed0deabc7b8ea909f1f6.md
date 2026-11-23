---
id: 6af5ed0deabc7b8ea909f1f6
title: Step 14
challengeType: 20
dashedName: step-14
---

# --description--

The concert will have an intermission halfway through. Before you work on it, remove the two `print()` calls of `find_piece` to keep the terminal clean.

You can slice a list the same way you slice a string, with the syntax `my_list[start:end]`. The result is a new list.

Create a variable named `half` and assign it the length of `pieces` floor divided by `2`. Then, create a variable named `before_intermission` and assign it a slice of `pieces` from the beginning up to, but not including, the index `half`.

Finally, use an f-string to print `Before intermission:` followed by a space and `before_intermission`.

# --hints--

You should remove the two `print()` calls of `find_piece`.

```js
({ test: () => runPython(`
assert not _Node(_code).has_call("print(find_piece('Serenade for Strings', pieces))")
assert not _Node(_code).has_call("print(find_piece('Stabat Mater', pieces))")
`) });
```

You should have a variable named `half`.

```js
({ test: () => runPython(`
assert _Node(_code).has_variable("half")
`) });
```

You should assign `len(pieces) // 2` to `half`.

```js
({ test: () => runPython(`
assert _Node(_code).find_variable("half").is_equivalent("half = len(pieces) // 2")
`) });
```

You should have a variable named `before_intermission`.

```js
({ test: () => runPython(`
assert _Node(_code).has_variable("before_intermission")
`) });
```

You should assign `pieces[:half]` to `before_intermission`.

```js
({ test: () => runPython(`
assert any(
  _Node(_code).find_variable("before_intermission").is_equivalent(code)
  for code in ["before_intermission = pieces[:half]", "before_intermission = pieces[0:half]"]
)
`) });
```

You should print `f'Before intermission: {before_intermission}'`.

```js
({ test: () => runPython(`
assert _Node(_code).has_call("print(f'Before intermission: {before_intermission}')")
`) });
```

# --seed--

## --seed-contents--

```py
pieces = ['Carnival Overture', 'Song to the Moon', 'Silent Woods']

pieces.append('Slavonic Dance No. 8')
pieces.insert(3, 'Slavonic Dance No. 1')
extra_pieces = ['Serenade for Strings', 'Cello Concerto in B Minor']
pieces.extend(extra_pieces)
pieces.remove('Song to the Moon')
removed_piece = pieces.pop()

pieces[1] = 'Romance for Violin'
print(pieces)


def find_piece(piece, program):
    if piece in program:
        return f'{piece} is piece number {program.index(piece) + 1}.'
    return f'{piece} is not in the program.'



--fcc-editable-region--
print(find_piece('Serenade for Strings', pieces))
print(find_piece('Stabat Mater', pieces))

--fcc-editable-region--
```

---
id: 6af5ed0beae849400fb2f9fb
title: Step 12
challengeType: 20
dashedName: step-12
---

# --description--

Next, you'll write a function to look up a piece in the program.

Just like you used the `in` operator to check if a string contains a substring, you can use it to check if an item is in a list. The `index()` method returns the index of the first occurrence of an item.

Define a function named `find_piece` with two parameters, `piece` and `program`. Inside it, use an `if` statement to check if `piece` is in `program`. If it is, return an f-string that shows the position of `piece` in the program, counting from `1`. To get the position, add `1` to the index of `piece`.

For example, `find_piece('Slavonic Dance No. 8', pieces)` should return `Slavonic Dance No. 8 is piece number 4.`

# --hints--

You should define a function named `find_piece` with two parameters, `piece` and `program`.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("find_piece").has_args("piece, program")
`) });
```

Your `find_piece` function should have an `if` statement that checks if `piece` is in `program`.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("find_piece").find_ifs()[0].find_conditions()[0].is_equivalent("piece in program")
`) });
```

Your `if` statement should return `f'{piece} is piece number {program.index(piece) + 1}.'`.

```js
({ test: () => runPython(`
body = _Node(_code).find_function("find_piece").find_ifs()[0].find_bodies()[0]
assert any(
  body.is_equivalent(code)
  for code in [
    "return f'{piece} is piece number {program.index(piece) + 1}.'",
    "return f'{piece} is piece number {1 + program.index(piece)}.'"
  ]
)
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


--fcc-editable-region--

--fcc-editable-region--
```

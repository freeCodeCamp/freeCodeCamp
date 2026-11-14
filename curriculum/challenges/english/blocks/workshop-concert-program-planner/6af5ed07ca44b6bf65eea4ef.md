---
id: 6af5ed07ca44b6bf65eea4ef
title: Step 7
challengeType: 20
dashedName: step-7
---

# --description--

The `extend()` method adds all the items of another list to the end of a list. If you used `append()` instead, the whole list would be added as a single item, creating a nested list.

Create a variable named `extra_pieces` and assign it a list containing the strings `Serenade for Strings` and `Cello Concerto in B Minor`, in this order. Then, use `extend()` to add the items of `extra_pieces` to the end of `pieces`.

# --hints--

You should have a variable named `extra_pieces`.

```js
({ test: () => runPython(`
assert _Node(_code).has_variable("extra_pieces")
`) });
```

You should assign `extra_pieces` a list containing the strings `Serenade for Strings` and `Cello Concerto in B Minor`, in this order.

```js
({ test: () => runPython(`
assert _Node(_code).find_variable("extra_pieces").is_equivalent("extra_pieces = ['Serenade for Strings', 'Cello Concerto in B Minor']")
`) });
```

You should call `pieces.extend()` with `extra_pieces` as the argument.

```js
({ test: () => runPython(`
assert _Node(_code).has_stmt("pieces.extend(extra_pieces)")
`) });
```

# --seed--

## --seed-contents--

```py
pieces = ['Carnival Overture', 'Song to the Moon', 'Silent Woods']
print(f'Opening piece: {pieces[0]}')
print(f'Closing piece: {pieces[-1]}')
print(f'Number of pieces: {len(pieces)}')

pieces.append('Slavonic Dance No. 8')
pieces.insert(3, 'Slavonic Dance No. 1')
--fcc-editable-region--

--fcc-editable-region--
print(pieces)
```

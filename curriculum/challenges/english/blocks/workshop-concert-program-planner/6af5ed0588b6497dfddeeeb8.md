---
id: 6af5ed0588b6497dfddeeeb8
title: Step 5
challengeType: 20
dashedName: step-5
---

# --description--

Lists are mutable, which means you can change them after you create them.

The `append()` method adds an item to the end of a list. It modifies the list in place, so you don't need to reassign the result to the variable:

```py
fruits = ['apple', 'banana', 'cherry']
fruits.append('date')
print(fruits) # ['apple', 'banana', 'cherry', 'date']
```

The conductor wants to end the concert with a lively piece. Use `append()` to add the string `Slavonic Dance No. 8` to the end of `pieces`. Then, print `pieces` to see the updated list.

# --hints--

You should call `pieces.append()` with the string `Slavonic Dance No. 8`.

```js
({ test: () => runPython(`
assert _Node(_code).has_stmt("pieces.append('Slavonic Dance No. 8')")
`) });
```

You should print `pieces` after calling `pieces.append()`.

```js
({ test: () => runPython(`
assert _Node(_code).is_ordered("pieces.append('Slavonic Dance No. 8')", "print(pieces)")
`) });
```

# --seed--

## --seed-contents--

```py
pieces = ['Carnival Overture', 'Song to the Moon', 'Silent Woods']
print(f'Opening piece: {pieces[0]}')
print(f'Closing piece: {pieces[-1]}')
print(f'Number of pieces: {len(pieces)}')

--fcc-editable-region--

--fcc-editable-region--
```

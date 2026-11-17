---
id: 6af5ed0a4cff454a5badb566
title: Step 10
challengeType: 20
dashedName: step-10
---

# --description--

The guest violinist has asked to play a different piece instead of `Silent Woods`, which is now at index `1`.

Since lists are mutable, you can replace an item by assigning a new value to its index:

```py
fruits = ['apple', 'banana', 'cherry']
fruits[0] = 'apricot'
print(fruits) # ['apricot', 'banana', 'cherry']
```

Replace the item at index `1` of `pieces` with the string `Romance for Violin`.

# --hints--

You should assign the string `Romance for Violin` to `pieces[1]`.

```js
({ test: () => runPython(`
assert _Node(_code).has_stmt("pieces[1] = 'Romance for Violin'")
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
extra_pieces = ['Serenade for Strings', 'Cello Concerto in B Minor']
pieces.extend(extra_pieces)
pieces.remove('Song to the Moon')
removed_piece = pieces.pop()
print(f'Removed from the program: {removed_piece}')

--fcc-editable-region--

--fcc-editable-region--
print(pieces)
```

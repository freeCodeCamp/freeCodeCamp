---
id: 6ae36d9cf4a2e6de82f4ebc1
title: Step 9
challengeType: 20
dashedName: step-9
---

# --description--

The console shows every node of the graph, but only those with a value of `1` are neighbors of `current`.

Replace the `print` call inside your `for` loop with an `if` statement that checks if `is_connected` is truthy. Inside it, print the string `Neighbor:` followed by a space and the value of `neighbor`.

# --hints--

You should not have `print(neighbor, is_connected)` in your code.

```js
({
  test: () =>
    runPython(`
    assert not _Node(_code).find_function("bfs").find_whiles()[0].find_for_loops()[0].has_call("print(neighbor, is_connected)")
  `)
})
```

You should have an `if` statement inside your `for` loop that checks if `is_connected` is truthy.

```js
({
  test: () =>
    runPython(`
    assert _Node(_code).find_function("bfs").find_whiles()[0].find_for_loops()[0].find_ifs()[0].find_conditions()[0].is_equivalent("is_connected")
  `)
})
```

Inside your `if` statement, you should print the string `Neighbor:` followed by a space and the value of `neighbor`.

```js
({
  test: () =>
    runPython(`
    _print = _Node(_code).find_function("bfs").find_whiles()[0].find_for_loops()[0].find_ifs()[0].find_bodies()[0]
    assert _print.is_equivalent("print('Neighbor:', neighbor)") or _print.is_equivalent("print(f'Neighbor: {neighbor}')")
  `)
})
```

# --seed--

## --seed-contents--

```py
def bfs(graph, root):
    distances = {}
    for node in range(len(graph)):
        distances[node] = float('inf')
    distances[root] = 0
    queue = [root]

    while queue:
        current = queue.pop(0)
        print('Visiting', current)

        for neighbor, is_connected in enumerate(graph[current]):
--fcc-editable-region--
            print(neighbor, is_connected)
--fcc-editable-region--

    return distances


graph = [
    [0, 1, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0]
]

print(bfs(graph, 0))
```

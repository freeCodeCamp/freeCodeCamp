---
id: 6ae36d9d57ddbc0d31dafcc8
title: Step 10
challengeType: 20
dashedName: step-10
---

# --description--

Each neighbor of `current` is one edge further from `root` than `current` is.

Inside your `if` statement, after the `print` call, set the distance of `neighbor` to the distance of `current` plus `1`.

The console now shows that nodes `1` and `2` are at a distance of `1` from node `0`.

# --hints--

Inside your `if` statement, you should set the distance of `neighbor` to the distance of `current` plus `1`.

```js
({
  test: () =>
    runPython(`
    assert _Node(_code).find_function("bfs").find_whiles()[0].find_for_loops()[0].find_ifs()[0].find_bodies()[0][1].is_equivalent("distances[neighbor] = distances[current] + 1")
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
            if is_connected:
                print('Neighbor:', neighbor)
--fcc-editable-region--
                
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

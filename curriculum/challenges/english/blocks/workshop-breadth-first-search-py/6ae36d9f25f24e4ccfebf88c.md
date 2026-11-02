---
id: 6ae36d9f25f24e4ccfebf88c
title: Step 12
challengeType: 20
dashedName: step-12
---

# --description--

Now the neighbors of `current` need to be visited too. Inside your `if` statement, after setting the distance of `neighbor`, add `neighbor` to the end of `queue`.

The console shows the whole search: the nodes are visited level by level, and node `3` is reached from node `1`, so it is skipped when node `2` is visited. Node `5` is never visited, so its distance stays `inf`.

# --hints--

Inside your `if` statement, you should append `neighbor` to `queue`.

```js
({
  test: () =>
    runPython(`
    assert _Node(_code).find_function("bfs").find_whiles()[0].find_for_loops()[0].find_ifs()[0].find_bodies()[0][2].is_equivalent("queue.append(neighbor)")
  `)
})
```

`bfs(graph, 0)` should return `{0: 0, 1: 1, 2: 1, 3: 2, 4: 3, 5: float('inf')}`.

```js
({
  test: () =>
    runPython(`
    assert bfs([[0, 1, 1, 0, 0, 0], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 0], [0, 1, 1, 0, 1, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0]], 0) == {0: 0, 1: 1, 2: 1, 3: 2, 4: 3, 5: float('inf')}
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
            if is_connected and distances[neighbor] == float('inf'):
                print('Neighbor:', neighbor)
                distances[neighbor] = distances[current] + 1
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

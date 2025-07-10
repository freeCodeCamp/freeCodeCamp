---
id: 686fdcfe055bcda9f651dd2e
title: Build an Adjacency List to Matrix Converter
challengeType: 27
dashedName: build-an-adjacency-list-to-matrix-converter
---

# --description--

In this lab, you will build a function that converts an adjacency list representation of a graph into an adjacency matrix. An adjacency list is a dictionary where each key represents a node, and the corresponding value is a list of nodes that the key node is connected to. An adjacency matrix is a 2D array where the entry at position `[i][j]` is 1 if there's an edge from node `i` to node `j`, and 0 otherwise.

For example, given the adjacency list:

```py
{
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [2]
}
```

The corresponding adjacency matrix would be:

```py
[
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 1],
    [0, 0, 1, 0]
]
```

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define a function named `adjacency_list_to_matrix` to convert an adjacency list to an adjacency matrix.
2. The function should take a dictionary representing the adjacency list of an unweighted (either undirected or directed) graph as its argument.
3. The function should:
   - Convert the adjacency list to an adjacency matrix.
   - Print each row in the adjacency matrix.
   - Return the adjacency matrix.

For example, `adjacency_list_to_matrix({0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2]})` should print:

```md
[0, 0, 1, 0]
[0, 0, 1, 1]
[1, 1, 0, 1]
[0, 1, 1, 0]
```

and return `[[0, 0, 1, 0], [0, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0]]`.


# --hints--

You should define a function named `adjacency_list_to_matrix`.

```js
({ 
    test: () => assert(runPython(`
    _Node(_code).has_function("adjacency_list_to_matrix")
    `)) 
})
```

The `adjacency_list_to_matrix` function should take one parameter.

```js
({ test: () => assert(runPython(`
    import inspect 
    sig = inspect.signature(adjacency_list_to_matrix)
    len(sig.parameters) == 1
  `))
})
```

The function should take a dictionary as its argument.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [1], 1: [0]}
        result = adjacency_list_to_matrix(adj_list)
        assert isinstance(result, list)
        
        # Test with different dictionary structures
        adj_list2 = {0: [], 1: [], 2: []}
        result2 = adjacency_list_to_matrix(adj_list2)
        assert isinstance(result2, list)
    `) 
})
```

The function should correctly determine the number of nodes from the adjacency list.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [1], 1: [0], 2: []}
        result = adjacency_list_to_matrix(adj_list)
        assert len(result) == 3
        assert len(result[0]) == 3
    `) 
})
```

The function should correctly set matrix values to 1 for existing edges.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [1], 1: [0]}
        result = adjacency_list_to_matrix(adj_list)
        assert result[0][1] == 1
        assert result[1][0] == 1
        assert result[0][0] == 0
        assert result[1][1] == 0
    `) 
})
```

The function should print each row of the matrix.

```js
({ 
    test: () => runPython(`
        import io
        import sys
        
        captured_output = io.StringIO()
        sys.stdout = captured_output
        
        adj_list = {0: [1], 1: []}
        adjacency_list_to_matrix(adj_list)
        
        sys.stdout = sys.__stdout__
        output = captured_output.getvalue()
        
        assert "[0, 1]" in output
        assert "[0, 0]" in output
    `) 
})
```

The function should return the adjacency matrix.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [1], 1: []}
        result = adjacency_list_to_matrix(adj_list)
        assert result == [[0, 1], [0, 0]]
    `) 
})
```

When given the adjacency list `{0: [1, 2], 1: [2], 2: [0, 3], 3: [2]}`, the function should return `[[0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 1], [0, 0, 1, 0]]`.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [1, 2], 1: [2], 2: [0, 3], 3: [2]}
        result = adjacency_list_to_matrix(adj_list)
        expected = [[0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 1], [0, 0, 1, 0]]
        assert result == expected
    `) 
})
```

When given the adjacency list `{0: [1], 1: [0]}`, the function should return `[[0, 1], [1, 0]]`.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [1], 1: [0]}
        result = adjacency_list_to_matrix(adj_list)
        expected = [[0, 1], [1, 0]]
        assert result == expected
    `) 
})
```

When given the adjacency list `{0: [], 1: [], 2: []}`, the function should return `[[0, 0, 0], [0, 0, 0], [0, 0, 0]]`.

```js
({ 
    test: () => runPython(`
        adj_list = {0: [], 1: [], 2: []}
        result = adjacency_list_to_matrix(adj_list)
        expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
        assert result == expected
    `) 
})
```

# --seed--

## --seed-contents--

```py

```

# --solutions--

```py
def adjacency_list_to_matrix(adj_list):
    n = len(adj_list)
    
    adj_matrix = [[0] * n for _ in range(n)]

    for src_node, neighbors in adj_list.items(): 
        for dest_node in neighbors:
            adj_matrix[src_node][dest_node] = 1

    for row in adj_matrix:
        print(row)

    return adj_matrix

adj_list = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [2]
}

matrix = adjacency_list_to_matrix(adj_list)
```

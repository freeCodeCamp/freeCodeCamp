---
id: 67f41242431cbf3db8ca79c7
title: Python References and Mutability
challengeType: 20
dashedName: python-references-visualized
---

# --description--

In Python, variables are references to objects in memory. When you assign a variable to another, you are copying the reference, not the object itself.

This challenge uses `memory_graph` to visualize these relationships. The output below shows the "DOT source" of the object graph. While the syntax (digraph, node, etc.) is technical, the connections (`->`) represent references between variables and data.

Run the code to see how `a` and `b` point to the same list.

# --instructions--

Observe the output. Notice how `b.append(4)` also affects `a`?

# --hints--

You should run the code to verify the graph output.
```js
assert.match(code, /memory_graph\.create_graph/)
```

The output should contain a directed graph definition.
```js
// This matches standard DOT syntax for a directed graph
assert.match(code, /digraph\s+memory_graph\s+{/)
```

# --seed--

## --seed-contents--

```py
import memory_graph

a = [1, 2, 3]
b = a
b.append(4)

# Generate and print the graph data (DOT source)
try:
    graph_data = memory_graph.create_graph(locals())
    print(graph_data)
except ImportError:
    print("Warning: memory_graph not available. Visualization skipped.")
except Exception as e:
    print(f"Error generating graph: {e}")
```

# --solutions--

```py
import memory_graph

a = [1, 2, 3]
b = a
b.append(4)

try:
    graph_data = memory_graph.create_graph(locals())
    print(graph_data)
except:
    pass
```

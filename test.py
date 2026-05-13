import memory_graph

data = {
    "numbers": [1, 2, 3],
    "alias": None
}
data["alias"] = data["numbers"]

# This time, we don't 'render' to a file. 
# We get the 'graphviz' object and output it as an SVG string.
graph_data = memory_graph.rewrite_to_node(data)
svg_output = graph_data.graphviz_dot()

print("--- RAW DOT DATA BELOW ---")
print(svg_output)
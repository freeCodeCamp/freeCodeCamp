"use strict";

module.exports = tarjan;

// Adapted from https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm#The_algorithm_in_pseudocode

function tarjan(graph) {
  const indices = new Map();
  const lowlinks = new Map();
  const onStack = new Set();
  const stack = [];
  const scc = [];
  let idx = 0;

  function strongConnect(v) {
    indices.set(v, idx);
    lowlinks.set(v, idx);
    idx++;
    stack.push(v);
    onStack.add(v);

    const deps = graph.get(v);
    for (const dep of deps) {
      if (!indices.has(dep)) {
        strongConnect(dep);
        lowlinks.set(v, Math.min(lowlinks.get(v), lowlinks.get(dep)));
      } else if (onStack.has(dep)) {
        lowlinks.set(v, Math.min(lowlinks.get(v), indices.get(dep)));
      }
    }

    if (lowlinks.get(v) === indices.get(v)) {
      const vertices = new Set();
      let w = null;
      while (v !== w) {
        w = stack.pop();
        onStack.delete(w);
        vertices.add(w);
      }
      scc.push(vertices);
    }
  }

  for (const v of graph.keys()) {
    if (!indices.has(v)) {
      strongConnect(v);
    }
  }

  return scc;
}

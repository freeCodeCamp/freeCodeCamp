const PERMANENT_MARKER = 2;
const TEMPORARY_MARKER = 1;

function createError(node, graph) {
  const er = new Error("Nondeterministic import's order");

  const related = graph[node];
  const relatedNode = related.find(
    (relatedNode) => graph[relatedNode].indexOf(node) > -1
  );

  er.nodes = [node, relatedNode];

  return er;
}

function walkGraph(node, graph, state, result, strict) {
  if (state[node] === PERMANENT_MARKER) {
    return;
  }

  if (state[node] === TEMPORARY_MARKER) {
    if (strict) {
      return createError(node, graph);
    }

    return;
  }

  state[node] = TEMPORARY_MARKER;

  const children = graph[node];
  const length = children.length;

  for (let i = 0; i < length; ++i) {
    const error = walkGraph(children[i], graph, state, result, strict);

    if (error instanceof Error) {
      return error;
    }
  }

  state[node] = PERMANENT_MARKER;

  result.push(node);
}

function topologicalSort(graph, strict) {
  const result = [];
  const state = {};

  const nodes = Object.keys(graph);
  const length = nodes.length;

  for (let i = 0; i < length; ++i) {
    const er = walkGraph(nodes[i], graph, state, result, strict);

    if (er instanceof Error) {
      return er;
    }
  }

  return result;
}

module.exports = topologicalSort;

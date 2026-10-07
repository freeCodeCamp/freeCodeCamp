require('@parcel/babel-register');
const {parentPort} = require('worker_threads');
const {
  default: AdjacencyList,
  NodeTypeMap,
  EdgeTypeMap,
} = require('../../src/AdjacencyList');

parentPort.once('message', (serialized) => {
  let graph = AdjacencyList.deserialize(serialized);
  serialized.nodes.forEach((v, i) => {
    if (i < NodeTypeMap.HEADER_SIZE) return;
    serialized.nodes[i] = v * 2;
  });
  serialized.edges.forEach((v, i) => {
    if (i < EdgeTypeMap.HEADER_SIZE) return;
    serialized.edges[i] = v * 2;
  });
  parentPort.postMessage(graph.serialize());
});

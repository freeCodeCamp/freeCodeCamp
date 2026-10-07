# Dependency Graph Changelog

## 0.11.0 (March 5, 2021)

- Add `entryNodes` method that returns the nodes that nothing depends on - thanks [amcdnl](https://github.com/amcdnl)!

## 0.10.0 (January 9, 2021)

- Add `directDependenciesOf` and `directDependantsOf` methods for retrieving direct dependency information. (Fixes #40)
- Add aliases `dependentsOf` and `directDependentsOf`.

## 0.9.0 (February 10, 2020)

- Rewrite the topological sort DFS to be more efficient (and work!) on large graphs.
  - No longer uses recursion to avoid stack overflows with large/deep graphs
  - No longer is accidentally `O(N^2)` (thanks [willtennien](https://github.com/willtennien) for pointing this out!)

## 0.8.1 (December 3, 2019)

- Ensure all nodes are included in overallOrder when cycles are allowed. (Fixes #33)

## 0.8.0 (December 11, 2018)

- Add a `DepGraphCycleError` with cyclePath property - thanks [jhugman](https://github.com/jhugman)!

## 0.7.2 (August 30, 2018)

- Make constructor parameter optional in Typescript definition. (Fixes #26)

## 0.7.1 (June 5, 2018)

- Fix Typescript definition to include the new constructor arguments added in `0.7.0` - thanks [tbranyen](https://github.com/tbranyen)!

## 0.7.0 (January 17, 2018)

- Allow circular dependencies by passing in `{circular: true}` into the constructor - thanks [tbranyen](https://github.com/tbranyen)!

## 0.6.0 (October 22, 2017)

- Add a `size` method that will return the number of nodes in the graph.
- Add a `clone` method that will clone the graph. Any custom node data will only be shallow-copied. (Fixes #14)

## 0.5.2 (October 22, 2017)

- Add missing parameter in TypeScript definition. (Fixes #19)

## 0.5.1 (October 7, 2017)

- Now exposes Typescript type definition - thanks [vangorra](https://github.com/vangorra)!

## 0.5.0 (April 26, 2016)

- Add optional data parameter for the addNode method. (Fixes #12)
- Add methods getNodeData and setNodeData to manipulate the data associated with a node name. (Fixes #12)
- Change the hasNode method to be able to cope with falsy node data. (Fixes #12)

## 0.4.1 (Sept 3, 2015)

- Check all nodes for potential cycles when calculating overall order. (Fixes #8)

## 0.4.0 (Aug 1, 2015)

- Better error messages
  - When a cycle is detected, the error message will now include the cycle in it. E.g `Dependency Cycle Found: a -> b -> c -> a` (Fixes #7)
  - When calling `addDependency` if one of the nodes does not exist, the error will say which one it was (instead of saying that "one" of the two nodes did not exist and making you manually determine which one)
- Calling `overallOrder` on an empty graph will no longer throw an error about a dependency cycle. It will return an empty array.

## 0.3.0 (July 24, 2015)

- Fix issue where if you call `addNode` twice with the same name, it would clear all edges for that node. Now it will do nothing if a node with the specified name already exists. (Fixes #3)

## 0.2.1 (July 3, 2015)

- Fixed removeNode leaving references in outgoingEdges and reference to non-existent var edges - thanks [juhoha](https://github.com/juhoha)! (Fixes #2)

## 0.2.0 (May 1, 2015)

- Removed dependency on Underscore - thanks [myndzi](https://github.com/myndzi)! (Fixes #1)

## 0.1.0 (May 18, 2013)

- Initial Release - extracted out of asset-smasher

/**
 * @experimental
 * @since 3.18.0
 */

import * as Data from "./Data.js"
import * as Equal from "./Equal.js"
import { dual } from "./Function.js"
import * as Hash from "./Hash.js"
import type { Inspectable } from "./Inspectable.js"
import { format, NodeInspectSymbol } from "./Inspectable.js"
import * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import { pipeArguments } from "./Pipeable.js"
import type { Mutable } from "./Types.js"

/**
 * Unique identifier for Graph instances.
 *
 * @since 3.18.0
 * @category symbol
 */
export const TypeId: "~effect/Graph" = "~effect/Graph" as const

/**
 * Type identifier for Graph instances.
 *
 * @since 3.18.0
 * @category symbol
 */
export type TypeId = typeof TypeId

/**
 * Node index for node identification using plain numbers.
 *
 * @since 3.18.0
 * @category models
 */
export type NodeIndex = number

/**
 * Edge index for edge identification using plain numbers.
 *
 * @since 3.18.0
 * @category models
 */
export type EdgeIndex = number

/**
 * Edge data containing source, target, and user data.
 *
 * @since 3.18.0
 * @category models
 */
export class Edge<E> extends Data.Class<{
  readonly source: NodeIndex
  readonly target: NodeIndex
  readonly data: E
}> {}

/**
 * Graph type for distinguishing directed and undirected graphs.
 *
 * @since 3.18.0
 * @category models
 */
export type Kind = "directed" | "undirected"

/**
 * Graph prototype interface.
 *
 * @since 3.18.0
 * @category models
 */
export interface Proto<out N, out E> extends Iterable<readonly [NodeIndex, N]>, Equal.Equal, Pipeable, Inspectable {
  readonly [TypeId]: TypeId
  readonly nodes: Map<NodeIndex, N>
  readonly edges: Map<EdgeIndex, Edge<E>>
  readonly adjacency: Map<NodeIndex, Array<EdgeIndex>>
  readonly reverseAdjacency: Map<NodeIndex, Array<EdgeIndex>>
  nextNodeIndex: NodeIndex
  nextEdgeIndex: EdgeIndex
  isAcyclic: Option.Option<boolean>
}

/**
 * Immutable graph interface.
 *
 * @since 3.18.0
 * @category models
 */
export interface Graph<out N, out E, T extends Kind = "directed"> extends Proto<N, E> {
  readonly type: T
  readonly mutable: false
}

/**
 * Mutable graph interface.
 *
 * @since 3.18.0
 * @category models
 */
export interface MutableGraph<out N, out E, T extends Kind = "directed"> extends Proto<N, E> {
  readonly type: T
  readonly mutable: true
}

/**
 * Directed graph type alias.
 *
 * @since 3.18.0
 * @category models
 */
export type DirectedGraph<N, E> = Graph<N, E, "directed">

/**
 * Undirected graph type alias.
 *
 * @since 3.18.0
 * @category models
 */
export type UndirectedGraph<N, E> = Graph<N, E, "undirected">

/**
 * Mutable directed graph type alias.
 *
 * @since 3.18.0
 * @category models
 */
export type MutableDirectedGraph<N, E> = MutableGraph<N, E, "directed">

/**
 * Mutable undirected graph type alias.
 *
 * @since 3.18.0
 * @category models
 */
export type MutableUndirectedGraph<N, E> = MutableGraph<N, E, "undirected">

// =============================================================================
// Proto Objects
// =============================================================================

/** @internal */
const ProtoGraph = {
  [TypeId]: TypeId,
  [Symbol.iterator](this: Graph<any, any>) {
    return this.nodes[Symbol.iterator]()
  },
  [NodeInspectSymbol](this: Graph<any, any>) {
    return this.toJSON()
  },
  [Equal.symbol](this: Graph<any, any>, that: Equal.Equal): boolean {
    if (isGraph(that)) {
      if (
        this.nodes.size !== that.nodes.size ||
        this.edges.size !== that.edges.size ||
        this.type !== that.type
      ) {
        return false
      }
      // Compare nodes
      for (const [nodeIndex, nodeData] of this.nodes) {
        if (!that.nodes.has(nodeIndex)) {
          return false
        }
        const otherNodeData = that.nodes.get(nodeIndex)!
        if (!Equal.equals(nodeData, otherNodeData)) {
          return false
        }
      }
      // Compare edges
      for (const [edgeIndex, edgeData] of this.edges) {
        if (!that.edges.has(edgeIndex)) {
          return false
        }
        const otherEdge = that.edges.get(edgeIndex)!
        if (!Equal.equals(edgeData, otherEdge)) {
          return false
        }
      }
      return true
    }
    return false
  },
  [Hash.symbol](this: Graph<any, any>): number {
    let hash = Hash.string("Graph")
    hash = hash ^ Hash.string(this.type)
    hash = hash ^ Hash.number(this.nodes.size)
    hash = hash ^ Hash.number(this.edges.size)
    for (const [nodeIndex, nodeData] of this.nodes) {
      hash = hash ^ (Hash.hash(nodeIndex) + Hash.hash(nodeData))
    }
    for (const [edgeIndex, edgeData] of this.edges) {
      hash = hash ^ (Hash.hash(edgeIndex) + Hash.hash(edgeData))
    }
    return hash
  },
  toJSON(this: Graph<any, any>) {
    return {
      _id: "Graph",
      nodeCount: this.nodes.size,
      edgeCount: this.edges.size,
      type: this.type
    }
  },
  toString(this: Graph<any, any>) {
    return format(this)
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

// =============================================================================
// Errors
// =============================================================================

/**
 * Error thrown when a graph operation fails.
 *
 * @since 3.18.0
 * @category errors
 */
export class GraphError extends Data.TaggedError("GraphError")<{
  readonly message: string
}> {}

/** @internal */
const missingNode = (node: number) => new GraphError({ message: `Node ${node} does not exist` })

// =============================================================================
// Constructors
// =============================================================================

/** @internal */
export const isGraph = (u: unknown): u is Graph<unknown, unknown> => typeof u === "object" && u !== null && TypeId in u

/**
 * Creates a directed graph, optionally with initial mutations.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * // Directed graph with initial nodes and edges
 * const graph = Graph.directed<string, string>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, "A->B")
 *   Graph.addEdge(mutable, b, c, "B->C")
 * })
 * ```
 *
 * @since 3.18.0
 * @category constructors
 */
export const directed = <N, E>(mutate?: (mutable: MutableDirectedGraph<N, E>) => void): DirectedGraph<N, E> => {
  const graph: Mutable<DirectedGraph<N, E>> = Object.create(ProtoGraph)
  graph.type = "directed"
  graph.nodes = new Map()
  graph.edges = new Map()
  graph.adjacency = new Map()
  graph.reverseAdjacency = new Map()
  graph.nextNodeIndex = 0
  graph.nextEdgeIndex = 0
  graph.isAcyclic = Option.some(true)
  graph.mutable = false

  if (mutate) {
    const mutable = beginMutation(graph as DirectedGraph<N, E>)
    mutate(mutable as MutableDirectedGraph<N, E>)
    return endMutation(mutable)
  }

  return graph
}

/**
 * Creates an undirected graph, optionally with initial mutations.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * // Undirected graph with initial nodes and edges
 * const graph = Graph.undirected<string, string>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, "A-B")
 *   Graph.addEdge(mutable, b, c, "B-C")
 * })
 * ```
 *
 * @since 3.18.0
 * @category constructors
 */
export const undirected = <N, E>(mutate?: (mutable: MutableUndirectedGraph<N, E>) => void): UndirectedGraph<N, E> => {
  const graph: Mutable<UndirectedGraph<N, E>> = Object.create(ProtoGraph)
  graph.type = "undirected"
  graph.nodes = new Map()
  graph.edges = new Map()
  graph.adjacency = new Map()
  graph.reverseAdjacency = new Map()
  graph.nextNodeIndex = 0
  graph.nextEdgeIndex = 0
  graph.isAcyclic = Option.some(true)
  graph.mutable = false

  if (mutate) {
    const mutable = beginMutation(graph)
    mutate(mutable as MutableUndirectedGraph<N, E>)
    return endMutation(mutable)
  }

  return graph
}

// =============================================================================
// Scoped Mutable API
// =============================================================================

/**
 * Creates a mutable scope for safe graph mutations by copying the data structure.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>()
 * const mutable = Graph.beginMutation(graph)
 * // Now mutable can be safely modified without affecting original graph
 * ```
 *
 * @since 3.18.0
 * @category mutations
 */
export const beginMutation = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T>
): MutableGraph<N, E, T> => {
  // Copy adjacency maps with deep cloned arrays
  const adjacency = new Map<NodeIndex, Array<EdgeIndex>>()
  const reverseAdjacency = new Map<NodeIndex, Array<EdgeIndex>>()

  for (const [nodeIndex, edges] of graph.adjacency) {
    adjacency.set(nodeIndex, [...edges])
  }

  for (const [nodeIndex, edges] of graph.reverseAdjacency) {
    reverseAdjacency.set(nodeIndex, [...edges])
  }

  const mutable: Mutable<MutableGraph<N, E, T>> = Object.create(ProtoGraph)
  mutable.type = graph.type
  mutable.nodes = new Map(graph.nodes)
  mutable.edges = new Map(graph.edges)
  mutable.adjacency = adjacency
  mutable.reverseAdjacency = reverseAdjacency
  mutable.nextNodeIndex = graph.nextNodeIndex
  mutable.nextEdgeIndex = graph.nextEdgeIndex
  mutable.isAcyclic = graph.isAcyclic
  mutable.mutable = true

  return mutable
}

/**
 * Converts a mutable graph back to an immutable graph, ending the mutation scope.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>()
 * const mutable = Graph.beginMutation(graph)
 * // ... perform mutations on mutable ...
 * const newGraph = Graph.endMutation(mutable)
 * ```
 *
 * @since 3.18.0
 * @category mutations
 */
export const endMutation = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>
): Graph<N, E, T> => {
  const graph: Mutable<Graph<N, E, T>> = Object.create(ProtoGraph)
  graph.type = mutable.type
  graph.nodes = new Map(mutable.nodes)
  graph.edges = new Map(mutable.edges)
  graph.adjacency = mutable.adjacency
  graph.reverseAdjacency = mutable.reverseAdjacency
  graph.nextNodeIndex = mutable.nextNodeIndex
  graph.nextEdgeIndex = mutable.nextEdgeIndex
  graph.isAcyclic = mutable.isAcyclic
  graph.mutable = false

  return graph
}

/**
 * Performs scoped mutations on a graph, automatically managing the mutation lifecycle.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>()
 * const newGraph = Graph.mutate(graph, (mutable) => {
 *   // Safe mutations go here
 *   // mutable gets automatically converted back to immutable
 * })
 * ```
 *
 * @since 3.18.0
 * @category mutations
 */
export const mutate: {
  /**
   * Performs scoped mutations on a graph, automatically managing the mutation lifecycle.
   *
   * @example
   * ```ts
   * import { Graph } from "effect"
   *
   * const graph = Graph.directed<string, number>()
   * const newGraph = Graph.mutate(graph, (mutable) => {
   *   // Safe mutations go here
   *   // mutable gets automatically converted back to immutable
   * })
   * ```
   *
   * @since 3.18.0
   * @category mutations
   */
  <N, E, T extends Kind = "directed">(f: (mutable: MutableGraph<N, E, T>) => void): (graph: Graph<N, E, T>) => Graph<N, E, T>
  /**
   * Performs scoped mutations on a graph, automatically managing the mutation lifecycle.
   *
   * @example
   * ```ts
   * import { Graph } from "effect"
   *
   * const graph = Graph.directed<string, number>()
   * const newGraph = Graph.mutate(graph, (mutable) => {
   *   // Safe mutations go here
   *   // mutable gets automatically converted back to immutable
   * })
   * ```
   *
   * @since 3.18.0
   * @category mutations
   */
  <N, E, T extends Kind = "directed">(graph: Graph<N, E, T>, f: (mutable: MutableGraph<N, E, T>) => void): Graph<N, E, T>
} = dual(2, <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T>,
  f: (mutable: MutableGraph<N, E, T>) => void
): Graph<N, E, T> => {
  const mutable = beginMutation(graph)
  f(mutable)
  return endMutation(mutable)
})

// =============================================================================
// Basic Node Operations
// =============================================================================

/**
 * Adds a new node to a mutable graph and returns its index.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const result = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   console.log(nodeA) // NodeIndex with value 0
 *   console.log(nodeB) // NodeIndex with value 1
 * })
 * ```
 *
 * @since 3.18.0
 * @category mutations
 */
export const addNode = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  data: N
): NodeIndex => {
  const nodeIndex = mutable.nextNodeIndex

  // Add node data
  mutable.nodes.set(nodeIndex, data)

  // Initialize empty adjacency lists
  mutable.adjacency.set(nodeIndex, [])
  mutable.reverseAdjacency.set(nodeIndex, [])

  // Update graph allocators
  mutable.nextNodeIndex = mutable.nextNodeIndex + 1

  return nodeIndex
}

/**
 * Gets the data associated with a node index, if it exists.
 *
 * @example
 * ```ts
 * import { Graph, Option } from "effect"
 *
 * const graph = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   Graph.addNode(mutable, "Node A")
 * })
 *
 * const nodeIndex = 0
 * const nodeData = Graph.getNode(graph, nodeIndex)
 *
 * if (Option.isSome(nodeData)) {
 *   console.log(nodeData.value) // "Node A"
 * }
 * ```
 *
 * @since 3.18.0
 * @category getters
 */
export const getNode = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  nodeIndex: NodeIndex
): Option.Option<N> => graph.nodes.has(nodeIndex) ? Option.some(graph.nodes.get(nodeIndex)!) : Option.none()

/**
 * Checks if a node with the given index exists in the graph.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   Graph.addNode(mutable, "Node A")
 * })
 *
 * const nodeIndex = 0
 * const exists = Graph.hasNode(graph, nodeIndex)
 * console.log(exists) // true
 *
 * const nonExistentIndex = 999
 * const notExists = Graph.hasNode(graph, nonExistentIndex)
 * console.log(notExists) // false
 * ```
 *
 * @since 3.18.0
 * @category getters
 */
export const hasNode = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  nodeIndex: NodeIndex
): boolean => graph.nodes.has(nodeIndex)

/**
 * Returns the number of nodes in the graph.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const emptyGraph = Graph.directed<string, number>()
 * console.log(Graph.nodeCount(emptyGraph)) // 0
 *
 * const graphWithNodes = Graph.mutate(emptyGraph, (mutable) => {
 *   Graph.addNode(mutable, "Node A")
 *   Graph.addNode(mutable, "Node B")
 *   Graph.addNode(mutable, "Node C")
 * })
 *
 * console.log(Graph.nodeCount(graphWithNodes)) // 3
 * ```
 *
 * @since 3.18.0
 * @category getters
 */
export const nodeCount = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>
): number => graph.nodes.size

/**
 * Finds the first node that matches the given predicate.
 *
 * @example
 * ```ts
 * import { Graph, Option } from "effect"
 *
 * const graph = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   Graph.addNode(mutable, "Node A")
 *   Graph.addNode(mutable, "Node B")
 *   Graph.addNode(mutable, "Node C")
 * })
 *
 * const result = Graph.findNode(graph, (data) => data.startsWith("Node B"))
 * console.log(result) // Option.some(1)
 *
 * const notFound = Graph.findNode(graph, (data) => data === "Node D")
 * console.log(notFound) // Option.none()
 * ```
 *
 * @since 3.18.0
 * @category getters
 */
export const findNode = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  predicate: (data: N) => boolean
): Option.Option<NodeIndex> => {
  for (const [index, data] of graph.nodes) {
    if (predicate(data)) {
      return Option.some(index)
    }
  }
  return Option.none()
}

/**
 * Finds all nodes that match the given predicate.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   Graph.addNode(mutable, "Start A")
 *   Graph.addNode(mutable, "Node B")
 *   Graph.addNode(mutable, "Start C")
 * })
 *
 * const result = Graph.findNodes(graph, (data) => data.startsWith("Start"))
 * console.log(result) // [0, 2]
 *
 * const empty = Graph.findNodes(graph, (data) => data === "Not Found")
 * console.log(empty) // []
 * ```
 *
 * @since 3.18.0
 * @category getters
 */
export const findNodes = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  predicate: (data: N) => boolean
): Array<NodeIndex> => {
  const results: Array<NodeIndex> = []
  for (const [index, data] of graph.nodes) {
    if (predicate(data)) {
      results.push(index)
    }
  }
  return results
}

/**
 * Finds the first edge that matches the given predicate.
 *
 * @example
 * ```ts
 * import { Graph, Option } from "effect"
 *
 * const graph = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   const nodeC = Graph.addNode(mutable, "Node C")
 *   Graph.addEdge(mutable, nodeA, nodeB, 10)
 *   Graph.addEdge(mutable, nodeB, nodeC, 20)
 * })
 *
 * const result = Graph.findEdge(graph, (data) => data > 15)
 * console.log(result) // Option.some(1)
 *
 * const notFound = Graph.findEdge(graph, (data) => data > 100)
 * console.log(notFound) // Option.none()
 * ```
 *
 * @since 3.18.0
 * @category getters
 */
export const findEdge = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  predicate: (data: E, source: NodeIndex, target: NodeIndex) => boolean
): Option.Option<EdgeIndex> => {
  for (const [edgeIndex, edgeData] of graph.edges) {
    if (predicate(edgeData.data, edgeData.source, edgeData.target)) {
      return Option.some(edgeIndex)
    }
  }
  return Option.none()
}

/**
 * Finds all edges that match the given predicate.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   const nodeC = Graph.addNode(mutable, "Node C")
 *   Graph.addEdge(mutable, nodeA, nodeB, 10)
 *   Graph.addEdge(mutable, nodeB, nodeC, 20)
 *   Graph.addEdge(mutable, nodeC, nodeA, 30)
 * })
 *
 * const result = Graph.findEdges(graph, (data) => data >= 20)
 * console.log(result) // [1, 2]
 *
 * const empty = Graph.findEdges(graph, (data) => data > 100)
 * console.log(empty) // []
 * ```
 *
 * @since 3.18.0
 * @category getters
 */
export const findEdges = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  predicate: (data: E, source: NodeIndex, target: NodeIndex) => boolean
): Array<EdgeIndex> => {
  const results: Array<EdgeIndex> = []
  for (const [edgeIndex, edgeData] of graph.edges) {
    if (predicate(edgeData.data, edgeData.source, edgeData.target)) {
      results.push(edgeIndex)
    }
  }
  return results
}

/**
 * Updates a single node's data by applying a transformation function.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   Graph.addNode(mutable, "Node A")
 *   Graph.addNode(mutable, "Node B")
 *   Graph.updateNode(mutable, 0, (data) => data.toUpperCase())
 * })
 *
 * const nodeData = Graph.getNode(graph, 0)
 * console.log(nodeData) // Option.some("NODE A")
 * ```
 *
 * @since 3.18.0
 * @category transformations
 */
export const updateNode = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  index: NodeIndex,
  f: (data: N) => N
): void => {
  if (!mutable.nodes.has(index)) {
    return
  }

  const currentData = mutable.nodes.get(index)!
  const newData = f(currentData)
  mutable.nodes.set(index, newData)
}

/**
 * Updates a single edge's data by applying a transformation function.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const result = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   const edgeIndex = Graph.addEdge(mutable, nodeA, nodeB, 10)
 *   Graph.updateEdge(mutable, edgeIndex, (data) => data * 2)
 * })
 *
 * const edgeData = Graph.getEdge(result, 0)
 * console.log(edgeData) // Option.some({ source: 0, target: 1, data: 20 })
 * ```
 *
 * @since 3.18.0
 * @category mutations
 */
export const updateEdge = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  edgeIndex: EdgeIndex,
  f: (data: E) => E
): void => {
  if (!mutable.edges.has(edgeIndex)) {
    return
  }

  const currentEdge = mutable.edges.get(edgeIndex)!
  const newData = f(currentEdge.data)
  mutable.edges.set(edgeIndex, {
    ...currentEdge,
    data: newData
  })
}

/**
 * Creates a new graph with transformed node data using the provided mapping function.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   Graph.addNode(mutable, "node a")
 *   Graph.addNode(mutable, "node b")
 *   Graph.addNode(mutable, "node c")
 *   Graph.mapNodes(mutable, (data) => data.toUpperCase())
 * })
 *
 * const nodeData = Graph.getNode(graph, 0)
 * console.log(nodeData) // Option.some("NODE A")
 * ```
 *
 * @since 3.18.0
 * @category transformations
 */
export const mapNodes = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  f: (data: N) => N
): void => {
  // Transform existing node data in place
  for (const [index, data] of mutable.nodes) {
    const newData = f(data)
    mutable.nodes.set(index, newData)
  }
}

/**
 * Transforms all edge data in a mutable graph using the provided mapping function.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, 10)
 *   Graph.addEdge(mutable, b, c, 20)
 *   Graph.mapEdges(mutable, (data) => data * 2)
 * })
 *
 * const edgeData = Graph.getEdge(graph, 0)
 * console.log(edgeData) // Option.some({ source: 0, target: 1, data: 20 })
 * ```
 *
 * @since 3.18.0
 * @category transformations
 */
export const mapEdges = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  f: (data: E) => E
): void => {
  // Transform existing edge data in place
  for (const [index, edgeData] of mutable.edges) {
    const newData = f(edgeData.data)
    mutable.edges.set(index, {
      ...edgeData,
      data: newData
    })
  }
}

/**
 * Reverses all edge directions in a mutable graph by swapping source and target nodes.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, 1)  // A -> B
 *   Graph.addEdge(mutable, b, c, 2)  // B -> C
 *   Graph.reverse(mutable)           // Now B -> A, C -> B
 * })
 *
 * const edge0 = Graph.getEdge(graph, 0)
 * console.log(edge0) // Option.some({ source: 1, target: 0, data: 1 }) - B -> A
 * ```
 *
 * @since 3.18.0
 * @category transformations
 */
export const reverse = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>
): void => {
  // Reverse all edges by swapping source and target
  for (const [index, edgeData] of mutable.edges) {
    mutable.edges.set(index, {
      source: edgeData.target,
      target: edgeData.source,
      data: edgeData.data
    })
  }

  // Clear and rebuild adjacency lists with reversed directions
  mutable.adjacency.clear()
  mutable.reverseAdjacency.clear()

  // Rebuild adjacency lists with reversed directions
  for (const [edgeIndex, edgeData] of mutable.edges) {
    // Add to forward adjacency (source -> target)
    const sourceEdges = mutable.adjacency.get(edgeData.source) || []
    sourceEdges.push(edgeIndex)
    mutable.adjacency.set(edgeData.source, sourceEdges)

    // Add to reverse adjacency (target <- source)
    const targetEdges = mutable.reverseAdjacency.get(edgeData.target) || []
    targetEdges.push(edgeIndex)
    mutable.reverseAdjacency.set(edgeData.target, targetEdges)
  }

  // Invalidate cycle flag since edge directions changed
  mutable.isAcyclic = Option.none()
}

/**
 * Filters and optionally transforms nodes in a mutable graph using a predicate function.
 * Nodes that return Option.none are removed along with all their connected edges.
 *
 * @example
 * ```ts
 * import { Graph, Option } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "active")
 *   const b = Graph.addNode(mutable, "inactive")
 *   const c = Graph.addNode(mutable, "active")
 *   Graph.addEdge(mutable, a, b, 1)
 *   Graph.addEdge(mutable, b, c, 2)
 *
 *   // Keep only "active" nodes and transform to uppercase
 *   Graph.filterMapNodes(mutable, (data) =>
 *     data === "active" ? Option.some(data.toUpperCase()) : Option.none()
 *   )
 * })
 *
 * console.log(Graph.nodeCount(graph)) // 2 (only "active" nodes remain)
 * ```
 *
 * @since 3.18.0
 * @category transformations
 */
export const filterMapNodes = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  f: (data: N) => Option.Option<N>
): void => {
  const nodesToRemove: Array<NodeIndex> = []

  // First pass: identify nodes to remove and transform data for nodes to keep
  for (const [index, data] of mutable.nodes) {
    const result = f(data)
    if (Option.isSome(result)) {
      // Transform node data
      mutable.nodes.set(index, result.value)
    } else {
      // Mark for removal
      nodesToRemove.push(index)
    }
  }

  // Second pass: remove filtered out nodes and their edges
  for (const nodeIndex of nodesToRemove) {
    removeNode(mutable, nodeIndex)
  }
}

/**
 * Filters and optionally transforms edges in a mutable graph using a predicate function.
 * Edges that return Option.none are removed from the graph.
 *
 * @example
 * ```ts
 * import { Graph, Option } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, 5)
 *   Graph.addEdge(mutable, b, c, 15)
 *   Graph.addEdge(mutable, c, a, 25)
 *
 *   // Keep only edges with weight >= 10 and double their weight
 *   Graph.filterMapEdges(mutable, (data) =>
 *     data >= 10 ? Option.some(data * 2) : Option.none()
 *   )
 * })
 *
 * console.log(Graph.edgeCount(graph)) // 2 (edges with weight 5 removed)
 * ```
 *
 * @since 3.18.0
 * @category transformations
 */
export const filterMapEdges = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  f: (data: E) => Option.Option<E>
): void => {
  const edgesToRemove: Array<EdgeIndex> = []

  // First pass: identify edges to remove and transform data for edges to keep
  for (const [index, edgeData] of mutable.edges) {
    const result = f(edgeData.data)
    if (Option.isSome(result)) {
      // Transform edge data
      mutable.edges.set(index, {
        ...edgeData,
        data: result.value
      })
    } else {
      // Mark for removal
      edgesToRemove.push(index)
    }
  }

  // Second pass: remove filtered out edges
  for (const edgeIndex of edgesToRemove) {
    removeEdge(mutable, edgeIndex)
  }
}

/**
 * Filters nodes by removing those that don't match the predicate.
 * This function modifies the mutable graph in place.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   Graph.addNode(mutable, "active")
 *   Graph.addNode(mutable, "inactive")
 *   Graph.addNode(mutable, "pending")
 *   Graph.addNode(mutable, "active")
 *
 *   // Keep only "active" nodes
 *   Graph.filterNodes(mutable, (data) => data === "active")
 * })
 *
 * console.log(Graph.nodeCount(graph)) // 2 (only "active" nodes remain)
 * ```
 *
 * @since 3.18.0
 * @category transformations
 */
export const filterNodes = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  predicate: (data: N) => boolean
): void => {
  const nodesToRemove: Array<NodeIndex> = []

  // Identify nodes to remove
  for (const [index, data] of mutable.nodes) {
    if (!predicate(data)) {
      nodesToRemove.push(index)
    }
  }

  // Remove filtered out nodes (this also removes connected edges)
  for (const nodeIndex of nodesToRemove) {
    removeNode(mutable, nodeIndex)
  }
}

/**
 * Filters edges by removing those that don't match the predicate.
 * This function modifies the mutable graph in place.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *
 *   Graph.addEdge(mutable, a, b, 5)
 *   Graph.addEdge(mutable, b, c, 15)
 *   Graph.addEdge(mutable, c, a, 25)
 *
 *   // Keep only edges with weight >= 10
 *   Graph.filterEdges(mutable, (data) => data >= 10)
 * })
 *
 * console.log(Graph.edgeCount(graph)) // 2 (edge with weight 5 removed)
 * ```
 *
 * @since 3.18.0
 * @category transformations
 */
export const filterEdges = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  predicate: (data: E) => boolean
): void => {
  const edgesToRemove: Array<EdgeIndex> = []

  // Identify edges to remove
  for (const [index, edgeData] of mutable.edges) {
    if (!predicate(edgeData.data)) {
      edgesToRemove.push(index)
    }
  }

  // Remove filtered out edges
  for (const edgeIndex of edgesToRemove) {
    removeEdge(mutable, edgeIndex)
  }
}

// =============================================================================
// Cycle Flag Management (Internal)
// =============================================================================

/** @internal */
const invalidateCycleFlagOnRemoval = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>
): void => {
  // Only invalidate if the graph had cycles (removing edges/nodes cannot introduce cycles in acyclic graphs)
  // If already unknown (null) or acyclic (true), no need to change
  if (Option.isSome(mutable.isAcyclic) && mutable.isAcyclic.value === false) {
    mutable.isAcyclic = Option.none()
  }
}

/** @internal */
const invalidateCycleFlagOnAddition = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>
): void => {
  // Only invalidate if the graph was acyclic (adding edges cannot remove cycles from cyclic graphs)
  // If already unknown (null) or cyclic (false), no need to change
  if (Option.isSome(mutable.isAcyclic) && mutable.isAcyclic.value === true) {
    mutable.isAcyclic = Option.none()
  }
}

// =============================================================================
// Edge Operations
// =============================================================================

/**
 * Adds a new edge to a mutable graph and returns its index.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const result = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   const edge = Graph.addEdge(mutable, nodeA, nodeB, 42)
 *   console.log(edge) // EdgeIndex with value 0
 * })
 * ```
 *
 * @since 3.18.0
 * @category mutations
 */
export const addEdge = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  source: NodeIndex,
  target: NodeIndex,
  data: E
): EdgeIndex => {
  // Validate that both nodes exist
  if (!mutable.nodes.has(source)) {
    throw missingNode(source)
  }
  if (!mutable.nodes.has(target)) {
    throw missingNode(target)
  }

  const edgeIndex = mutable.nextEdgeIndex

  // Create edge data
  const edgeData = new Edge({ source, target, data })
  mutable.edges.set(edgeIndex, edgeData)

  // Update adjacency lists
  const sourceAdjacency = mutable.adjacency.get(source)
  if (sourceAdjacency !== undefined) {
    sourceAdjacency.push(edgeIndex)
  }

  const targetReverseAdjacency = mutable.reverseAdjacency.get(target)
  if (targetReverseAdjacency !== undefined) {
    targetReverseAdjacency.push(edgeIndex)
  }

  // For undirected graphs, add reverse connections
  if (mutable.type === "undirected") {
    const targetAdjacency = mutable.adjacency.get(target)
    if (targetAdjacency !== undefined) {
      targetAdjacency.push(edgeIndex)
    }

    const sourceReverseAdjacency = mutable.reverseAdjacency.get(source)
    if (sourceReverseAdjacency !== undefined) {
      sourceReverseAdjacency.push(edgeIndex)
    }
  }

  // Update allocators
  mutable.nextEdgeIndex = mutable.nextEdgeIndex + 1

  // Only invalidate cycle flag if the graph was acyclic
  // Adding edges cannot remove cycles from cyclic graphs
  invalidateCycleFlagOnAddition(mutable)

  return edgeIndex
}

/**
 * Removes a node and all its incident edges from a mutable graph.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const result = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   Graph.addEdge(mutable, nodeA, nodeB, 42)
 *
 *   // Remove nodeA and all edges connected to it
 *   Graph.removeNode(mutable, nodeA)
 * })
 * ```
 *
 * @since 3.18.0
 * @category mutations
 */
export const removeNode = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  nodeIndex: NodeIndex
): void => {
  // Check if node exists
  if (!mutable.nodes.has(nodeIndex)) {
    return // Node doesn't exist, nothing to remove
  }

  // Collect all incident edges for removal
  const edgesToRemove: Array<EdgeIndex> = []

  // Get outgoing edges
  const outgoingEdges = mutable.adjacency.get(nodeIndex)
  if (outgoingEdges !== undefined) {
    for (const edge of outgoingEdges) {
      edgesToRemove.push(edge)
    }
  }

  // Get incoming edges
  const incomingEdges = mutable.reverseAdjacency.get(nodeIndex)
  if (incomingEdges !== undefined) {
    for (const edge of incomingEdges) {
      edgesToRemove.push(edge)
    }
  }

  // Remove all incident edges
  for (const edgeIndex of edgesToRemove) {
    removeEdgeInternal(mutable, edgeIndex)
  }

  // Remove the node itself
  mutable.nodes.delete(nodeIndex)
  mutable.adjacency.delete(nodeIndex)
  mutable.reverseAdjacency.delete(nodeIndex)

  // Only invalidate cycle flag if the graph wasn't already known to be acyclic
  // Removing nodes cannot introduce cycles in an acyclic graph
  invalidateCycleFlagOnRemoval(mutable)
}

/**
 * Removes an edge from a mutable graph.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const result = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   const edge = Graph.addEdge(mutable, nodeA, nodeB, 42)
 *
 *   // Remove the edge
 *   Graph.removeEdge(mutable, edge)
 * })
 * ```
 *
 * @since 3.18.0
 * @category mutations
 */
export const removeEdge = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  edgeIndex: EdgeIndex
): void => {
  const wasRemoved = removeEdgeInternal(mutable, edgeIndex)

  // Only invalidate cycle flag if an edge was actually removed
  // and only if the graph wasn't already known to be acyclic
  if (wasRemoved) {
    invalidateCycleFlagOnRemoval(mutable)
  }
}

/** @internal */
const removeEdgeInternal = <N, E, T extends Kind = "directed">(
  mutable: MutableGraph<N, E, T>,
  edgeIndex: EdgeIndex
): boolean => {
  // Get edge data
  const edge = mutable.edges.get(edgeIndex)
  if (edge === undefined) {
    return false // Edge doesn't exist, no mutation occurred
  }

  const { source, target } = edge

  // Remove from adjacency lists
  const sourceAdjacency = mutable.adjacency.get(source)
  if (sourceAdjacency !== undefined) {
    const index = sourceAdjacency.indexOf(edgeIndex)
    if (index !== -1) {
      sourceAdjacency.splice(index, 1)
    }
  }

  const targetReverseAdjacency = mutable.reverseAdjacency.get(target)
  if (targetReverseAdjacency !== undefined) {
    const index = targetReverseAdjacency.indexOf(edgeIndex)
    if (index !== -1) {
      targetReverseAdjacency.splice(index, 1)
    }
  }

  // For undirected graphs, remove reverse connections
  if (mutable.type === "undirected") {
    const targetAdjacency = mutable.adjacency.get(target)
    if (targetAdjacency !== undefined) {
      const index = targetAdjacency.indexOf(edgeIndex)
      if (index !== -1) {
        targetAdjacency.splice(index, 1)
      }
    }

    const sourceReverseAdjacency = mutable.reverseAdjacency.get(source)
    if (sourceReverseAdjacency !== undefined) {
      const index = sourceReverseAdjacency.indexOf(edgeIndex)
      if (index !== -1) {
        sourceReverseAdjacency.splice(index, 1)
      }
    }
  }

  // Remove edge data
  mutable.edges.delete(edgeIndex)

  return true // Edge was successfully removed
}

// =============================================================================
// Edge Query Operations
// =============================================================================

/**
 * Gets the edge data associated with an edge index, if it exists.
 *
 * @example
 * ```ts
 * import { Graph, Option } from "effect"
 *
 * const graph = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   Graph.addEdge(mutable, nodeA, nodeB, 42)
 * })
 *
 * const edgeIndex = 0
 * const edgeData = Graph.getEdge(graph, edgeIndex)
 *
 * if (Option.isSome(edgeData)) {
 *   console.log(edgeData.value.data) // 42
 *   console.log(edgeData.value.source) // NodeIndex(0)
 *   console.log(edgeData.value.target) // NodeIndex(1)
 * }
 * ```
 *
 * @since 3.18.0
 * @category getters
 */
export const getEdge = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  edgeIndex: EdgeIndex
): Option.Option<Edge<E>> => graph.edges.has(edgeIndex) ? Option.some(graph.edges.get(edgeIndex)!) : Option.none()

/**
 * Checks if an edge exists between two nodes in the graph.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   const nodeC = Graph.addNode(mutable, "Node C")
 *   Graph.addEdge(mutable, nodeA, nodeB, 42)
 * })
 *
 * const nodeA = 0
 * const nodeB = 1
 * const nodeC = 2
 *
 * const hasAB = Graph.hasEdge(graph, nodeA, nodeB)
 * console.log(hasAB) // true
 *
 * const hasAC = Graph.hasEdge(graph, nodeA, nodeC)
 * console.log(hasAC) // false
 * ```
 *
 * @since 3.18.0
 * @category getters
 */
export const hasEdge = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  source: NodeIndex,
  target: NodeIndex
): boolean => {
  const adjacencyList = graph.adjacency.get(source)
  if (adjacencyList === undefined) {
    return false
  }

  // Check if any edge in the adjacency list connects to the target
  for (const edgeIndex of adjacencyList) {
    const edge = graph.edges.get(edgeIndex)
    if (edge !== undefined && edge.target === target) {
      return true
    }
  }

  return false
}

/**
 * Returns the number of edges in the graph.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const emptyGraph = Graph.directed<string, number>()
 * console.log(Graph.edgeCount(emptyGraph)) // 0
 *
 * const graphWithEdges = Graph.mutate(emptyGraph, (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   const nodeC = Graph.addNode(mutable, "Node C")
 *   Graph.addEdge(mutable, nodeA, nodeB, 1)
 *   Graph.addEdge(mutable, nodeB, nodeC, 2)
 *   Graph.addEdge(mutable, nodeC, nodeA, 3)
 * })
 *
 * console.log(Graph.edgeCount(graphWithEdges)) // 3
 * ```
 *
 * @since 3.18.0
 * @category getters
 */
export const edgeCount = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>
): number => graph.edges.size

/**
 * Returns the neighboring nodes (targets of outgoing edges) for a given node.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   const nodeC = Graph.addNode(mutable, "Node C")
 *   Graph.addEdge(mutable, nodeA, nodeB, 1)
 *   Graph.addEdge(mutable, nodeA, nodeC, 2)
 * })
 *
 * const nodeA = 0
 * const nodeB = 1
 * const nodeC = 2
 *
 * const neighborsA = Graph.neighbors(graph, nodeA)
 * console.log(neighborsA) // [NodeIndex(1), NodeIndex(2)]
 *
 * const neighborsB = Graph.neighbors(graph, nodeB)
 * console.log(neighborsB) // []
 * ```
 *
 * @since 3.18.0
 * @category getters
 */
export const neighbors = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  nodeIndex: NodeIndex
): Array<NodeIndex> => {
  // For undirected graphs, use the specialized helper that returns the other endpoint
  if (graph.type === "undirected") {
    return getUndirectedNeighbors(graph as any, nodeIndex)
  }

  const adjacencyList = graph.adjacency.get(nodeIndex)
  if (adjacencyList === undefined) {
    return []
  }

  const result: Array<NodeIndex> = []
  for (const edgeIndex of adjacencyList) {
    const edge = graph.edges.get(edgeIndex)
    if (edge !== undefined) {
      result.push(edge.target)
    }
  }

  return result
}

/**
 * Get neighbors of a node in a specific direction for bidirectional traversal.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, string>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   Graph.addEdge(mutable, a, b, "A->B")
 * })
 *
 * const nodeA = 0
 * const nodeB = 1
 *
 * // Get outgoing neighbors (nodes that nodeA points to)
 * const outgoing = Graph.neighborsDirected(graph, nodeA, "outgoing")
 *
 * // Get incoming neighbors (nodes that point to nodeB)
 * const incoming = Graph.neighborsDirected(graph, nodeB, "incoming")
 * ```
 *
 * @since 3.18.0
 * @category queries
 */
export const neighborsDirected = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  nodeIndex: NodeIndex,
  direction: Direction
): Array<NodeIndex> => {
  const adjacencyMap = direction === "incoming"
    ? graph.reverseAdjacency
    : graph.adjacency

  const adjacencyList = adjacencyMap.get(nodeIndex)
  if (adjacencyList === undefined) {
    return []
  }

  const result: Array<NodeIndex> = []
  for (const edgeIndex of adjacencyList) {
    const edge = graph.edges.get(edgeIndex)
    if (edge !== undefined) {
      // For incoming direction, we want the source node instead of target
      const neighborNode = direction === "incoming"
        ? edge.source
        : edge.target
      result.push(neighborNode)
    }
  }

  return result
}

// =============================================================================
// GraphViz Export
// =============================================================================

/**
 * Configuration options for GraphViz DOT format generation from graphs.
 *
 * @since 3.18.0
 * @category models
 */
export interface GraphVizOptions<N, E> {
  readonly nodeLabel?: (data: N) => string
  readonly edgeLabel?: (data: E) => string
  readonly graphName?: string
}

/**
 * Exports a graph to GraphViz DOT format for visualization.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const nodeA = Graph.addNode(mutable, "Node A")
 *   const nodeB = Graph.addNode(mutable, "Node B")
 *   const nodeC = Graph.addNode(mutable, "Node C")
 *   Graph.addEdge(mutable, nodeA, nodeB, 1)
 *   Graph.addEdge(mutable, nodeB, nodeC, 2)
 *   Graph.addEdge(mutable, nodeC, nodeA, 3)
 * })
 *
 * const dot = Graph.toGraphViz(graph)
 * console.log(dot)
 * // digraph G {
 * //   "0" [label="Node A"];
 * //   "1" [label="Node B"];
 * //   "2" [label="Node C"];
 * //   "0" -> "1" [label="1"];
 * //   "1" -> "2" [label="2"];
 * //   "2" -> "0" [label="3"];
 * // }
 * ```
 *
 * @since 3.18.0
 * @category utils
 */
export const toGraphViz = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  options?: GraphVizOptions<N, E>
): string => {
  const {
    edgeLabel = (data: E) => String(data),
    graphName = "G",
    nodeLabel = (data: N) => String(data)
  } = options ?? {}

  const isDirected = graph.type === "directed"
  const graphType = isDirected ? "digraph" : "graph"
  const edgeOperator = isDirected ? "->" : "--"

  const lines: Array<string> = []
  lines.push(`${graphType} ${graphName} {`)

  // Add nodes
  for (const [nodeIndex, nodeData] of graph.nodes) {
    const label = nodeLabel(nodeData).replace(/"/g, "\\\"")
    lines.push(`  "${nodeIndex}" [label="${label}"];`)
  }

  // Add edges
  for (const [, edgeData] of graph.edges) {
    const label = edgeLabel(edgeData.data).replace(/"/g, "\\\"")
    lines.push(`  "${edgeData.source}" ${edgeOperator} "${edgeData.target}" [label="${label}"];`)
  }

  lines.push("}")
  return lines.join("\n")
}

// =============================================================================
// Mermaid Export
// =============================================================================

/**
 * Mermaid node shape types.
 *
 * @since 3.18.0
 * @category models
 */
export type MermaidNodeShape =
  | "rectangle"
  | "rounded"
  | "circle"
  | "diamond"
  | "hexagon"
  | "stadium"
  | "subroutine"
  | "cylindrical"

/**
 * Mermaid diagram direction types.
 *
 * @since 3.18.0
 * @category models
 */
export type MermaidDirection = "TB" | "TD" | "BT" | "LR" | "RL"

/**
 * Mermaid diagram type.
 *
 * @since 3.18.0
 * @category models
 */
export type MermaidDiagramType = "flowchart" | "graph"

/**
 * Configuration options for Mermaid diagram generation.
 *
 * @since 3.18.0
 * @category models
 */
export interface MermaidOptions<N, E> {
  readonly nodeLabel?: (data: N) => string
  readonly edgeLabel?: (data: E) => string
  readonly diagramType?: MermaidDiagramType
  readonly direction?: MermaidDirection
  readonly nodeShape?: (data: N) => MermaidNodeShape
}

/** @internal */
const escapeMermaidLabel = (label: string): string => {
  // Escape special characters for Mermaid using HTML entity codes
  // According to: https://mermaid.js.org/syntax/flowchart.html#special-characters-that-break-syntax
  return label
    .replace(/#/g, "#35;")
    .replace(/"/g, "#quot;")
    .replace(/</g, "#lt;")
    .replace(/>/g, "#gt;")
    .replace(/&/g, "#amp;")
    .replace(/\[/g, "#91;")
    .replace(/\]/g, "#93;")
    .replace(/\{/g, "#123;")
    .replace(/\}/g, "#125;")
    .replace(/\(/g, "#40;")
    .replace(/\)/g, "#41;")
    .replace(/\|/g, "#124;")
    .replace(/\\/g, "#92;")
    .replace(/\n/g, "<br/>");
}

/** @internal */
const formatMermaidNode = (nodeId: string, label: string, shape: MermaidNodeShape): string => {
  switch (shape) {
    case "rectangle":
      return `${nodeId}["${label}"]`
    case "rounded":
      return `${nodeId}("${label}")`
    case "circle":
      return `${nodeId}(("${label}"))`
    case "diamond":
      return `${nodeId}{"${label}"}`
    case "hexagon":
      return `${nodeId}{{"${label}"}}`
    case "stadium":
      return `${nodeId}(["${label}"])`
    case "subroutine":
      return `${nodeId}[["${label}"]]`
    case "cylindrical":
      return `${nodeId}[("${label}")]`
  }
}

/**
 * Exports a graph to Mermaid diagram format for visualization.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.mutate(Graph.directed<string, number>(), (mutable) => {
 *   const app = Graph.addNode(mutable, "App")
 *   const db = Graph.addNode(mutable, "Database")
 *   const cache = Graph.addNode(mutable, "Cache")
 *   Graph.addEdge(mutable, app, db, 1)
 *   Graph.addEdge(mutable, app, cache, 2)
 * })
 *
 * const mermaid = Graph.toMermaid(graph)
 * console.log(mermaid)
 * // flowchart TD
 * //   0["App"]
 * //   1["Database"]
 * //   2["Cache"]
 * //   0 -->|"1"| 1
 * //   0 -->|"2"| 2
 * ```
 *
 * @since 3.18.0
 * @category utils
 */
export const toMermaid = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  options?: MermaidOptions<N, E>
): string => {
  // Extract and validate options with defaults
  const {
    diagramType,
    direction = "TD",
    edgeLabel = (data: E) => String(data),
    nodeLabel = (data: N) => String(data),
    nodeShape = () => "rectangle" as const
  } = options ?? {}

  // Auto-detect diagram type if not specified
  const finalDiagramType = diagramType ??
    (graph.type === "directed" ? "flowchart" : "graph")

  // Generate diagram header
  const lines: Array<string> = []
  lines.push(`${finalDiagramType} ${direction}`)

  // Add nodes
  for (const [nodeIndex, nodeData] of graph.nodes) {
    const nodeId = String(nodeIndex)
    const label = escapeMermaidLabel(nodeLabel(nodeData))
    const shape = nodeShape(nodeData)
    const formattedNode = formatMermaidNode(nodeId, label, shape)
    lines.push(`  ${formattedNode}`)
  }

  // Add edges
  const edgeOperator = finalDiagramType === "flowchart" ? "-->" : "---"
  for (const [, edgeData] of graph.edges) {
    const sourceId = String(edgeData.source)
    const targetId = String(edgeData.target)
    const label = escapeMermaidLabel(edgeLabel(edgeData.data))

    if (label) {
      lines.push(`  ${sourceId} ${edgeOperator}|"${label}"| ${targetId}`)
    } else {
      lines.push(`  ${sourceId} ${edgeOperator} ${targetId}`)
    }
  }

  return lines.join("\n")
}

// =============================================================================
// Direction Types for Bidirectional Traversal
// =============================================================================

/**
 * Direction for graph traversal, indicating which edges to follow.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, string>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   Graph.addEdge(mutable, a, b, "A->B")
 * })
 *
 * // Follow outgoing edges (normal direction)
 * const outgoingNodes = Array.from(Graph.indices(Graph.dfs(graph, { start: [0], direction: "outgoing" })))
 *
 * // Follow incoming edges (reverse direction)
 * const incomingNodes = Array.from(Graph.indices(Graph.dfs(graph, { start: [1], direction: "incoming" })))
 * ```
 *
 * @since 3.18.0
 * @category models
 */
export type Direction = "outgoing" | "incoming"

// =============================================================================

// =============================================================================
// Graph Structure Analysis Algorithms (Phase 5A)
// =============================================================================

/**
 * Checks if the graph is acyclic (contains no cycles).
 *
 * Uses depth-first search to detect back edges, which indicate cycles.
 * For directed graphs, any back edge creates a cycle. For undirected graphs,
 * a back edge that doesn't go to the immediate parent creates a cycle.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * // Acyclic directed graph (DAG)
 * const dag = Graph.directed<string, string>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, "A->B")
 *   Graph.addEdge(mutable, b, c, "B->C")
 * })
 * console.log(Graph.isAcyclic(dag)) // true
 *
 * // Cyclic directed graph
 * const cyclic = Graph.directed<string, string>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   Graph.addEdge(mutable, a, b, "A->B")
 *   Graph.addEdge(mutable, b, a, "B->A") // Creates cycle
 * })
 * console.log(Graph.isAcyclic(cyclic)) // false
 * ```
 *
 * @since 3.18.0
 * @category algorithms
 */
export const isAcyclic = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>
): boolean => {
  // Use existing cycle flag if available
  if (Option.isSome(graph.isAcyclic)) {
    return graph.isAcyclic.value
  }

  // Stack-safe DFS cycle detection using iterative approach
  const visited = new Set<NodeIndex>()
  const recursionStack = new Set<NodeIndex>()

  // Stack entry: [node, neighbors, neighborIndex, isFirstVisit]
  type DfsStackEntry = [NodeIndex, Array<NodeIndex>, number, boolean]

  // Get all nodes to handle disconnected components
  for (const startNode of graph.nodes.keys()) {
    if (visited.has(startNode)) {
      continue // Already processed this component
    }

    // Iterative DFS with explicit stack
    const stack: Array<DfsStackEntry> = [[startNode, [], 0, true]]

    while (stack.length > 0) {
      const [node, neighbors, neighborIndex, isFirstVisit] = stack[stack.length - 1]

      // First visit to this node
      if (isFirstVisit) {
        if (recursionStack.has(node)) {
          // Back edge found - cycle detected
          graph.isAcyclic = Option.some(false)
          return false
        }

        if (visited.has(node)) {
          stack.pop()
          continue
        }

        visited.add(node)
        recursionStack.add(node)

        // Get neighbors for this node
        const nodeNeighbors = Array.from(neighborsDirected(graph, node, "outgoing"))
        stack[stack.length - 1] = [node, nodeNeighbors, 0, false]
        continue
      }

      // Process next neighbor
      if (neighborIndex < neighbors.length) {
        const neighbor = neighbors[neighborIndex]
        stack[stack.length - 1] = [node, neighbors, neighborIndex + 1, false]

        if (recursionStack.has(neighbor)) {
          // Back edge found - cycle detected
          graph.isAcyclic = Option.some(false)
          return false
        }

        if (!visited.has(neighbor)) {
          stack.push([neighbor, [], 0, true])
        }
      } else {
        // Done with this node - backtrack
        recursionStack.delete(node)
        stack.pop()
      }
    }
  }

  // Cache the result
  graph.isAcyclic = Option.some(true)
  return true
}

/**
 * Checks if an undirected graph is bipartite.
 *
 * A bipartite graph is one whose vertices can be divided into two disjoint sets
 * such that no two vertices within the same set are adjacent. Uses BFS coloring
 * to determine bipartiteness.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * // Bipartite graph (alternating coloring possible)
 * const bipartite = Graph.undirected<string, string>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   const d = Graph.addNode(mutable, "D")
 *   Graph.addEdge(mutable, a, b, "edge") // Set 1: {A, C}, Set 2: {B, D}
 *   Graph.addEdge(mutable, b, c, "edge")
 *   Graph.addEdge(mutable, c, d, "edge")
 * })
 * console.log(Graph.isBipartite(bipartite)) // true
 *
 * // Non-bipartite graph (odd cycle)
 * const triangle = Graph.undirected<string, string>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, "edge")
 *   Graph.addEdge(mutable, b, c, "edge")
 *   Graph.addEdge(mutable, c, a, "edge") // Triangle (3-cycle)
 * })
 * console.log(Graph.isBipartite(triangle)) // false
 * ```
 *
 * @since 3.18.0
 * @category algorithms
 */
export const isBipartite = <N, E>(
  graph: Graph<N, E, "undirected"> | MutableGraph<N, E, "undirected">
): boolean => {
  const coloring = new Map<NodeIndex, 0 | 1>()
  const discovered = new Set<NodeIndex>()
  let isBipartiteGraph = true

  // Get all nodes to handle disconnected components
  for (const startNode of graph.nodes.keys()) {
    if (!discovered.has(startNode)) {
      // Start BFS coloring from this component
      const queue: Array<NodeIndex> = [startNode]
      coloring.set(startNode, 0) // Color start node with 0
      discovered.add(startNode)

      while (queue.length > 0 && isBipartiteGraph) {
        const current = queue.shift()!
        const currentColor = coloring.get(current)!
        const neighborColor: 0 | 1 = currentColor === 0 ? 1 : 0

        // Get all neighbors for undirected graph
        const nodeNeighbors = getUndirectedNeighbors(graph, current)
        for (const neighbor of nodeNeighbors) {
          if (!discovered.has(neighbor)) {
            // Color unvisited neighbor with opposite color
            coloring.set(neighbor, neighborColor)
            discovered.add(neighbor)
            queue.push(neighbor)
          } else {
            // Check if neighbor has the same color (conflict)
            if (coloring.get(neighbor) === currentColor) {
              isBipartiteGraph = false
              break
            }
          }
        }
      }

      // Early exit if not bipartite
      if (!isBipartiteGraph) {
        break
      }
    }
  }

  return isBipartiteGraph
}

/**
 * Get neighbors for undirected graphs by checking both adjacency and reverse adjacency.
 * For undirected graphs, we need to find the other endpoint of each edge incident to the node.
 */
const getUndirectedNeighbors = <N, E>(
  graph: Graph<N, E, "undirected"> | MutableGraph<N, E, "undirected">,
  nodeIndex: NodeIndex
): Array<NodeIndex> => {
  const neighbors = new Set<NodeIndex>()

  // Check edges where this node is the source
  const adjacencyList = graph.adjacency.get(nodeIndex)
  if (adjacencyList !== undefined) {
    for (const edgeIndex of adjacencyList) {
      const edge = graph.edges.get(edgeIndex)
      if (edge !== undefined) {
        // For undirected graphs, the neighbor is the other endpoint
        const otherNode = edge.source === nodeIndex ? edge.target : edge.source
        neighbors.add(otherNode)
      }
    }
  }

  return Array.from(neighbors)
}

/**
 * Find connected components in an undirected graph.
 * Each component is represented as an array of node indices.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.undirected<string, string>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   const d = Graph.addNode(mutable, "D")
 *   Graph.addEdge(mutable, a, b, "edge") // Component 1: A-B
 *   Graph.addEdge(mutable, c, d, "edge") // Component 2: C-D
 * })
 *
 * const components = Graph.connectedComponents(graph)
 * console.log(components) // [[0, 1], [2, 3]]
 * ```
 *
 * @since 3.18.0
 * @category algorithms
 */
export const connectedComponents = <N, E>(
  graph: Graph<N, E, "undirected"> | MutableGraph<N, E, "undirected">
): Array<Array<NodeIndex>> => {
  const visited = new Set<NodeIndex>()
  const components: Array<Array<NodeIndex>> = []
  for (const startNode of graph.nodes.keys()) {
    if (!visited.has(startNode)) {
      // DFS to find all nodes in this component
      const component: Array<NodeIndex> = []
      const stack: Array<NodeIndex> = [startNode]

      while (stack.length > 0) {
        const current = stack.pop()!
        if (!visited.has(current)) {
          visited.add(current)
          component.push(current)

          // Add all unvisited neighbors to stack
          const nodeNeighbors = getUndirectedNeighbors(graph, current)
          for (const neighbor of nodeNeighbors) {
            if (!visited.has(neighbor)) {
              stack.push(neighbor)
            }
          }
        }
      }

      components.push(component)
    }
  }

  return components
}

/**
 * Find strongly connected components in a directed graph using Kosaraju's algorithm.
 * Each SCC is represented as an array of node indices.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, string>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, "A->B")
 *   Graph.addEdge(mutable, b, c, "B->C")
 *   Graph.addEdge(mutable, c, a, "C->A") // Creates SCC: A-B-C
 * })
 *
 * const sccs = Graph.stronglyConnectedComponents(graph)
 * console.log(sccs) // [[0, 1, 2]]
 * ```
 *
 * @since 3.18.0
 * @category algorithms
 */
export const stronglyConnectedComponents = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>
): Array<Array<NodeIndex>> => {
  const visited = new Set<NodeIndex>()
  const finishOrder: Array<NodeIndex> = []
  // Iterate directly over node keys

  // Step 1: Stack-safe DFS on original graph to get finish times
  // Stack entry: [node, neighbors, neighborIndex, isFirstVisit]
  type DfsStackEntry = [NodeIndex, Array<NodeIndex>, number, boolean]

  for (const startNode of graph.nodes.keys()) {
    if (visited.has(startNode)) {
      continue
    }

    const stack: Array<DfsStackEntry> = [[startNode, [], 0, true]]

    while (stack.length > 0) {
      const [node, nodeNeighbors, neighborIndex, isFirstVisit] = stack[stack.length - 1]

      if (isFirstVisit) {
        if (visited.has(node)) {
          stack.pop()
          continue
        }

        visited.add(node)
        const nodeNeighborsList = neighbors(graph, node)
        stack[stack.length - 1] = [node, nodeNeighborsList, 0, false]
        continue
      }

      // Process next neighbor
      if (neighborIndex < nodeNeighbors.length) {
        const neighbor = nodeNeighbors[neighborIndex]
        stack[stack.length - 1] = [node, nodeNeighbors, neighborIndex + 1, false]

        if (!visited.has(neighbor)) {
          stack.push([neighbor, [], 0, true])
        }
      } else {
        // Done with this node - add to finish order (post-order)
        finishOrder.push(node)
        stack.pop()
      }
    }
  }

  // Step 2: Stack-safe DFS on transpose graph in reverse finish order
  visited.clear()
  const sccs: Array<Array<NodeIndex>> = []

  for (let i = finishOrder.length - 1; i >= 0; i--) {
    const startNode = finishOrder[i]
    if (visited.has(startNode)) {
      continue
    }

    const scc: Array<NodeIndex> = []
    const stack: Array<NodeIndex> = [startNode]

    while (stack.length > 0) {
      const node = stack.pop()!

      if (visited.has(node)) {
        continue
      }

      visited.add(node)
      scc.push(node)

      // Use reverse adjacency (transpose graph)
      const reverseAdjacency = graph.reverseAdjacency.get(node)
      if (reverseAdjacency !== undefined) {
        for (const edgeIndex of reverseAdjacency) {
          const edge = graph.edges.get(edgeIndex)
          if (edge !== undefined) {
            const predecessor = edge.source
            if (!visited.has(predecessor)) {
              stack.push(predecessor)
            }
          }
        }
      }
    }

    sccs.push(scc)
  }

  return sccs
}

// =============================================================================
// Path Finding Algorithms (Phase 5B)
// =============================================================================

/**
 * Result of a shortest path computation containing the path and total distance.
 *
 * @since 3.18.0
 * @category models
 */
export interface PathResult<E> {
  readonly path: Array<NodeIndex>
  readonly distance: number
  readonly costs: Array<E>
}

/**
 * Configuration for Dijkstra's algorithm.
 *
 * @since 3.18.0
 * @category models
 */
export interface DijkstraConfig<E> {
  source: NodeIndex
  target: NodeIndex
  cost: (edgeData: E) => number
}

/**
 * Configuration for A* algorithm.
 *
 * @since 3.18.0
 * @category models
 */
export interface AstarConfig<E, N> {
  source: NodeIndex
  target: NodeIndex
  cost: (edgeData: E) => number
  heuristic: (sourceNodeData: N, targetNodeData: N) => number
}

/**
 * Configuration for Bellman-Ford algorithm.
 *
 * @since 3.18.0
 * @category models
 */
export interface BellmanFordConfig<E> {
  source: NodeIndex
  target: NodeIndex
  cost: (edgeData: E) => number
}

/**
 * Find the shortest path between two nodes using Dijkstra's algorithm.
 *
 * Dijkstra's algorithm works with non-negative edge weights and finds the shortest
 * path from a source node to a target node in O((V + E) log V) time complexity.
 *
 * @example
 * ```ts
 * import { Graph, Option } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, 5)
 *   Graph.addEdge(mutable, a, c, 10)
 *   Graph.addEdge(mutable, b, c, 2)
 * })
 *
 * const result = Graph.dijkstra(graph, { source: 0, target: 2, cost: (edgeData) => edgeData })
 * if (Option.isSome(result)) {
 *   console.log(result.value.path) // [0, 1, 2] - shortest path A->B->C
 *   console.log(result.value.distance) // 7 - total distance
 * }
 * ```
 *
 * @since 3.18.0
 * @category algorithms
 */
export const dijkstra = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  config: DijkstraConfig<E>
): Option.Option<PathResult<E>> => {
  const { cost, source, target } = config
  // Validate that source and target nodes exist
  if (!graph.nodes.has(source)) {
    throw missingNode(source)
  }
  if (!graph.nodes.has(target)) {
    throw missingNode(target)
  }

  // Early return if source equals target
  if (source === target) {
    return Option.some({
      path: [source],
      distance: 0,
      costs: []
    })
  }

  // Distance tracking and priority queue simulation
  const distances = new Map<NodeIndex, number>()
  const previous = new Map<NodeIndex, { node: NodeIndex; edgeData: E } | null>()
  const visited = new Set<NodeIndex>()

  // Initialize distances
  // Iterate directly over node keys
  for (const node of graph.nodes.keys()) {
    distances.set(node, node === source ? 0 : Infinity)
    previous.set(node, null)
  }

  // Simple priority queue using array (can be optimized with proper heap)
  const priorityQueue: Array<{ node: NodeIndex; distance: number }> = [
    { node: source, distance: 0 }
  ]

  while (priorityQueue.length > 0) {
    // Find minimum distance node (priority queue extract-min)
    let minIndex = 0
    for (let i = 1; i < priorityQueue.length; i++) {
      if (priorityQueue[i].distance < priorityQueue[minIndex].distance) {
        minIndex = i
      }
    }

    const current = priorityQueue.splice(minIndex, 1)[0]
    const currentNode = current.node

    // Skip if already visited (can happen with duplicate entries)
    if (visited.has(currentNode)) {
      continue
    }

    visited.add(currentNode)

    // Early termination if we reached the target
    if (currentNode === target) {
      break
    }

    // Get current distance
    const currentDistance = distances.get(currentNode)!

    // Examine all outgoing edges
    const adjacencyList = graph.adjacency.get(currentNode)
    if (adjacencyList !== undefined) {
      for (const edgeIndex of adjacencyList) {
        const edge = graph.edges.get(edgeIndex)
        if (edge !== undefined) {
          const neighbor = edge.target
          const weight = cost(edge.data)

          // Validate non-negative weights
          if (weight < 0) {
            throw new Error(`Dijkstra's algorithm requires non-negative edge weights, found ${weight}`)
          }

          const newDistance = currentDistance + weight
          const neighborDistance = distances.get(neighbor)!

          // Relaxation step
          if (newDistance < neighborDistance) {
            distances.set(neighbor, newDistance)
            previous.set(neighbor, { node: currentNode, edgeData: edge.data })

            // Add to priority queue if not visited
            if (!visited.has(neighbor)) {
              priorityQueue.push({ node: neighbor, distance: newDistance })
            }
          }
        }
      }
    }
  }

  // Check if target is reachable
  const targetDistance = distances.get(target)!
  if (targetDistance === Infinity) {
    return Option.none() // No path exists
  }

  // Reconstruct path
  const path: Array<NodeIndex> = []
  const costs: Array<E> = []
  let currentNode: NodeIndex | null = target

  while (currentNode !== null) {
    path.unshift(currentNode)
    const prev: { node: NodeIndex; edgeData: E } | null = previous.get(currentNode)!
    if (prev !== null) {
      costs.unshift(prev.edgeData)
      currentNode = prev.node
    } else {
      currentNode = null
    }
  }

  return Option.some({
    path,
    distance: targetDistance,
    costs
  })
}

/**
 * Result of all-pairs shortest path computation.
 *
 * @since 3.18.0
 * @category models
 */
export interface AllPairsResult<E> {
  readonly distances: Map<NodeIndex, Map<NodeIndex, number>>
  readonly paths: Map<NodeIndex, Map<NodeIndex, Array<NodeIndex> | null>>
  readonly costs: Map<NodeIndex, Map<NodeIndex, Array<E>>>
}

/**
 * Find shortest paths between all pairs of nodes using Floyd-Warshall algorithm.
 *
 * Floyd-Warshall algorithm computes shortest paths between all pairs of nodes in O(V³) time.
 * It can handle negative edge weights and detect negative cycles.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, 3)
 *   Graph.addEdge(mutable, b, c, 2)
 *   Graph.addEdge(mutable, a, c, 7)
 * })
 *
 * const result = Graph.floydWarshall(graph, (edgeData) => edgeData)
 * const distanceAToC = result.distances.get(0)?.get(2) // 5 (A->B->C)
 * const pathAToC = result.paths.get(0)?.get(2) // [0, 1, 2]
 * ```
 *
 * @since 3.18.0
 * @category algorithms
 */
export const floydWarshall = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  cost: (edgeData: E) => number
): AllPairsResult<E> => {
  // Get all nodes for Floyd-Warshall algorithm (needs array for nested iteration)
  const allNodes = Array.from(graph.nodes.keys())

  // Initialize distance matrix
  const dist = new Map<NodeIndex, Map<NodeIndex, number>>()
  const next = new Map<NodeIndex, Map<NodeIndex, NodeIndex | null>>()
  const edgeMatrix = new Map<NodeIndex, Map<NodeIndex, E | null>>()

  // Initialize with infinity for all pairs
  for (const i of allNodes) {
    dist.set(i, new Map())
    next.set(i, new Map())
    edgeMatrix.set(i, new Map())

    for (const j of allNodes) {
      dist.get(i)!.set(j, i === j ? 0 : Infinity)
      next.get(i)!.set(j, null)
      edgeMatrix.get(i)!.set(j, null)
    }
  }

  // Set edge weights
  for (const [, edgeData] of graph.edges) {
    const weight = cost(edgeData.data)
    const i = edgeData.source
    const j = edgeData.target

    // Use minimum weight if multiple edges exist
    const currentWeight = dist.get(i)!.get(j)!
    if (weight < currentWeight) {
      dist.get(i)!.set(j, weight)
      next.get(i)!.set(j, j)
      edgeMatrix.get(i)!.set(j, edgeData.data)
    }
  }

  // Floyd-Warshall main loop
  for (const k of allNodes) {
    for (const i of allNodes) {
      for (const j of allNodes) {
        const distIK = dist.get(i)!.get(k)!
        const distKJ = dist.get(k)!.get(j)!
        const distIJ = dist.get(i)!.get(j)!

        if (distIK !== Infinity && distKJ !== Infinity && distIK + distKJ < distIJ) {
          dist.get(i)!.set(j, distIK + distKJ)
          next.get(i)!.set(j, next.get(i)!.get(k)!)
        }
      }
    }
  }

  // Check for negative cycles
  for (const i of allNodes) {
    if (dist.get(i)!.get(i)! < 0) {
      throw new Error(`Negative cycle detected involving node ${i}`)
    }
  }

  // Build result paths and edge weights
  const paths = new Map<NodeIndex, Map<NodeIndex, Array<NodeIndex> | null>>()
  const resultCosts = new Map<NodeIndex, Map<NodeIndex, Array<E>>>()

  for (const i of allNodes) {
    paths.set(i, new Map())
    resultCosts.set(i, new Map())

    for (const j of allNodes) {
      if (i === j) {
        paths.get(i)!.set(j, [i])
        resultCosts.get(i)!.set(j, [])
      } else if (dist.get(i)!.get(j)! === Infinity) {
        paths.get(i)!.set(j, null)
        resultCosts.get(i)!.set(j, [])
      } else {
        // Reconstruct path iteratively
        const path: Array<NodeIndex> = []
        const weights: Array<E> = []
        let current = i

        path.push(current)
        while (current !== j) {
          const nextNode = next.get(current)!.get(j)!
          if (nextNode === null) break

          const edgeData = edgeMatrix.get(current)!.get(nextNode)!
          if (edgeData !== null) {
            weights.push(edgeData)
          }

          current = nextNode
          path.push(current)
        }

        paths.get(i)!.set(j, path)
        resultCosts.get(i)!.set(j, weights)
      }
    }
  }

  return {
    distances: dist,
    paths,
    costs: resultCosts
  }
}

/**
 * Find the shortest path between two nodes using A* pathfinding algorithm.
 *
 * A* is an extension of Dijkstra's algorithm that uses a heuristic function to guide
 * the search towards the target, potentially finding paths faster than Dijkstra's.
 * The heuristic must be admissible (never overestimate the actual cost).
 *
 * @example
 * ```ts
 * import { Graph, Option } from "effect"
 *
 * const graph = Graph.directed<{x: number, y: number}, number>((mutable) => {
 *   const a = Graph.addNode(mutable, {x: 0, y: 0})
 *   const b = Graph.addNode(mutable, {x: 1, y: 0})
 *   const c = Graph.addNode(mutable, {x: 2, y: 0})
 *   Graph.addEdge(mutable, a, b, 1)
 *   Graph.addEdge(mutable, b, c, 1)
 * })
 *
 * // Manhattan distance heuristic
 * const heuristic = (nodeData: {x: number, y: number}, targetData: {x: number, y: number}) =>
 *   Math.abs(nodeData.x - targetData.x) + Math.abs(nodeData.y - targetData.y)
 *
 * const result = Graph.astar(graph, { source: 0, target: 2, cost: (edgeData) => edgeData, heuristic })
 * if (Option.isSome(result)) {
 *   console.log(result.value.path) // [0, 1, 2] - shortest path
 *   console.log(result.value.distance) // 2 - total distance
 * }
 * ```
 *
 * @since 3.18.0
 * @category algorithms
 */
export const astar = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  config: AstarConfig<E, N>
): Option.Option<PathResult<E>> => {
  const { cost, heuristic, source, target } = config
  // Validate that source and target nodes exist
  if (!graph.nodes.has(source)) {
    throw missingNode(source)
  }
  if (!graph.nodes.has(target)) {
    throw missingNode(target)
  }

  // Early return if source equals target
  if (source === target) {
    return Option.some({
      path: [source],
      distance: 0,
      costs: []
    })
  }

  // Get target node data for heuristic calculations
  const targetNodeData = graph.nodes.get(target)
  if (targetNodeData === undefined) {
    throw new Error(`Target node ${target} data not found`)
  }

  // Distance tracking (g-score) and f-score (g + h)
  const gScore = new Map<NodeIndex, number>()
  const fScore = new Map<NodeIndex, number>()
  const previous = new Map<NodeIndex, { node: NodeIndex; edgeData: E } | null>()
  const visited = new Set<NodeIndex>()

  // Initialize scores
  // Iterate directly over node keys
  for (const node of graph.nodes.keys()) {
    gScore.set(node, node === source ? 0 : Infinity)
    fScore.set(node, Infinity)
    previous.set(node, null)
  }

  // Calculate initial f-score for source
  const sourceNodeData = graph.nodes.get(source)
  if (sourceNodeData !== undefined) {
    const h = heuristic(sourceNodeData, targetNodeData)
    fScore.set(source, h)
  }

  // Priority queue using f-score (total estimated cost)
  const openSet: Array<{ node: NodeIndex; fScore: number }> = [
    { node: source, fScore: fScore.get(source)! }
  ]

  while (openSet.length > 0) {
    // Find node with lowest f-score
    let minIndex = 0
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].fScore < openSet[minIndex].fScore) {
        minIndex = i
      }
    }

    const current = openSet.splice(minIndex, 1)[0]
    const currentNode = current.node

    // Skip if already visited
    if (visited.has(currentNode)) {
      continue
    }

    visited.add(currentNode)

    // Early termination if we reached the target
    if (currentNode === target) {
      break
    }

    // Get current g-score
    const currentGScore = gScore.get(currentNode)!

    // Examine all outgoing edges
    const adjacencyList = graph.adjacency.get(currentNode)
    if (adjacencyList !== undefined) {
      for (const edgeIndex of adjacencyList) {
        const edge = graph.edges.get(edgeIndex)
        if (edge !== undefined) {
          const neighbor = edge.target
          const weight = cost(edge.data)

          // Validate non-negative weights
          if (weight < 0) {
            throw new Error(`A* algorithm requires non-negative edge weights, found ${weight}`)
          }

          const tentativeGScore = currentGScore + weight
          const neighborGScore = gScore.get(neighbor)!

          // If this path to neighbor is better than any previous one
          if (tentativeGScore < neighborGScore) {
            // Update g-score and previous
            gScore.set(neighbor, tentativeGScore)
            previous.set(neighbor, { node: currentNode, edgeData: edge.data })

            // Calculate f-score using heuristic
            const neighborNodeData = graph.nodes.get(neighbor)
            if (neighborNodeData !== undefined) {
              const h = heuristic(neighborNodeData, targetNodeData)
              const f = tentativeGScore + h
              fScore.set(neighbor, f)

              // Add to open set if not visited
              if (!visited.has(neighbor)) {
                openSet.push({ node: neighbor, fScore: f })
              }
            }
          }
        }
      }
    }
  }

  // Check if target is reachable
  const targetGScore = gScore.get(target)!
  if (targetGScore === Infinity) {
    return Option.none() // No path exists
  }

  // Reconstruct path
  const path: Array<NodeIndex> = []
  const costs: Array<E> = []
  let currentNode: NodeIndex | null = target

  while (currentNode !== null) {
    path.unshift(currentNode)
    const prev: { node: NodeIndex; edgeData: E } | null = previous.get(currentNode)!
    if (prev !== null) {
      costs.unshift(prev.edgeData)
      currentNode = prev.node
    } else {
      currentNode = null
    }
  }

  return Option.some({
    path,
    distance: targetGScore,
    costs
  })
}

/**
 * Find the shortest path between two nodes using Bellman-Ford algorithm.
 *
 * Bellman-Ford algorithm can handle negative edge weights and detects negative cycles.
 * It has O(VE) time complexity, slower than Dijkstra's but more versatile.
 * Returns Option.none() if a negative cycle is detected that affects the path.
 *
 * @example
 * ```ts
 * import { Graph, Option } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, -1)  // Negative weight allowed
 *   Graph.addEdge(mutable, b, c, 3)
 *   Graph.addEdge(mutable, a, c, 5)
 * })
 *
 * const result = Graph.bellmanFord(graph, { source: 0, target: 2, cost: (edgeData) => edgeData })
 * if (Option.isSome(result)) {
 *   console.log(result.value.path) // [0, 1, 2] - shortest path A->B->C
 *   console.log(result.value.distance) // 2 - total distance
 * }
 * ```
 *
 * @since 3.18.0
 * @category algorithms
 */
export const bellmanFord = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  config: BellmanFordConfig<E>
): Option.Option<PathResult<E>> => {
  const { cost, source, target } = config
  // Validate that source and target nodes exist
  if (!graph.nodes.has(source)) {
    throw missingNode(source)
  }
  if (!graph.nodes.has(target)) {
    throw missingNode(target)
  }

  // Early return if source equals target
  if (source === target) {
    return Option.some({
      path: [source],
      distance: 0,
      costs: []
    })
  }

  // Initialize distances and predecessors
  const distances = new Map<NodeIndex, number>()
  const previous = new Map<NodeIndex, { node: NodeIndex; edgeData: E } | null>()
  // Iterate directly over node keys

  for (const node of graph.nodes.keys()) {
    distances.set(node, node === source ? 0 : Infinity)
    previous.set(node, null)
  }

  // Collect all edges for relaxation
  const edges: Array<{ source: NodeIndex; target: NodeIndex; weight: number; edgeData: E }> = []
  for (const [, edgeData] of graph.edges) {
    const weight = cost(edgeData.data)
    edges.push({
      source: edgeData.source,
      target: edgeData.target,
      weight,
      edgeData: edgeData.data
    })
  }

  // Relax edges up to V-1 times
  const nodeCount = graph.nodes.size
  for (let i = 0; i < nodeCount - 1; i++) {
    let hasUpdate = false

    for (const edge of edges) {
      const sourceDistance = distances.get(edge.source)!
      const targetDistance = distances.get(edge.target)!

      // Relaxation step
      if (sourceDistance !== Infinity && sourceDistance + edge.weight < targetDistance) {
        distances.set(edge.target, sourceDistance + edge.weight)
        previous.set(edge.target, { node: edge.source, edgeData: edge.edgeData })
        hasUpdate = true
      }
    }

    // Early termination if no updates
    if (!hasUpdate) {
      break
    }
  }

  // Check for negative cycles
  for (const edge of edges) {
    const sourceDistance = distances.get(edge.source)!
    const targetDistance = distances.get(edge.target)!

    if (sourceDistance !== Infinity && sourceDistance + edge.weight < targetDistance) {
      // Negative cycle detected - check if it affects the path to target
      const affectedNodes = new Set<NodeIndex>()
      const queue = [edge.target]

      while (queue.length > 0) {
        const node = queue.shift()!
        if (affectedNodes.has(node)) continue
        affectedNodes.add(node)

        // Add all nodes reachable from this node
        const adjacencyList = graph.adjacency.get(node)
        if (adjacencyList !== undefined) {
          for (const edgeIndex of adjacencyList) {
            const edge = graph.edges.get(edgeIndex)
            if (edge !== undefined) {
              queue.push(edge.target)
            }
          }
        }
      }

      // If target is affected by negative cycle, return null
      if (affectedNodes.has(target)) {
        return Option.none()
      }
    }
  }

  // Check if target is reachable
  const targetDistance = distances.get(target)!
  if (targetDistance === Infinity) {
    return Option.none() // No path exists
  }

  // Reconstruct path
  const path: Array<NodeIndex> = []
  const costs: Array<E> = []
  let currentNode: NodeIndex | null = target

  while (currentNode !== null) {
    path.unshift(currentNode)
    const prev: { node: NodeIndex; edgeData: E } | null = previous.get(currentNode)!
    if (prev !== null) {
      costs.unshift(prev.edgeData)
      currentNode = prev.node
    } else {
      currentNode = null
    }
  }

  return Option.some({
    path,
    distance: targetDistance,
    costs
  })
}

/**
 * Concrete class for iterables that produce [NodeIndex, NodeData] tuples.
 *
 * This class provides a common abstraction for all iterables that return node data,
 * including traversal iterators (DFS, BFS, etc.) and element iterators (nodes, externals).
 * It uses a mapEntry function pattern for flexible iteration and transformation.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   Graph.addEdge(mutable, a, b, 1)
 * })
 *
 * // Both traversal and element iterators return NodeWalker
 * const dfsNodes: Graph.NodeWalker<string> = Graph.dfs(graph, { start: [0] })
 * const allNodes: Graph.NodeWalker<string> = Graph.nodes(graph)
 *
 * // Common interface for working with node iterables
 * function processNodes<N>(nodeIterable: Graph.NodeWalker<N>): Array<number> {
 *   return Array.from(Graph.indices(nodeIterable))
 * }
 *
 * // Access node data using values() or entries()
 * const nodeData = Array.from(Graph.values(dfsNodes)) // ["A", "B"]
 * const nodeEntries = Array.from(Graph.entries(allNodes)) // [[0, "A"], [1, "B"]]
 * ```
 *
 * @since 3.18.0
 * @category models
 */
export class Walker<T, N> implements Iterable<[T, N]> {
  /**
   * @since 3.18.0
   */
  // @ts-ignore
  readonly [Symbol.iterator]: () => Iterator<[T, N]>

  /**
   * Visits each element and maps it to a value using the provided function.
   *
   * Takes a function that receives the index and data,
   * and returns an iterable of the mapped values. Skips elements that
   * no longer exist in the graph.
   *
   * @example
   * ```ts
   * import { Graph } from "effect"
   *
   * const graph = Graph.directed<string, number>((mutable) => {
   *   const a = Graph.addNode(mutable, "A")
   *   const b = Graph.addNode(mutable, "B")
   *   Graph.addEdge(mutable, a, b, 1)
   * })
   *
   * const dfs = Graph.dfs(graph, { start: [0] })
   *
   * // Map to just the node data
   * const values = Array.from(dfs.visit((index, data) => data))
   * console.log(values) // ["A", "B"]
   *
   * // Map to custom objects
   * const custom = Array.from(dfs.visit((index, data) => ({ id: index, name: data })))
   * console.log(custom) // [{ id: 0, name: "A" }, { id: 1, name: "B" }]
   * ```
   *
   * @since 3.18.0
   * @category iterators
   */
  readonly visit: <U>(f: (index: T, data: N) => U) => Iterable<U>

  constructor(
    /**
     * Visits each element and maps it to a value using the provided function.
     *
     * Takes a function that receives the index and data,
     * and returns an iterable of the mapped values. Skips elements that
     * no longer exist in the graph.
     *
     * @example
     * ```ts
     * import { Graph } from "effect"
     *
     * const graph = Graph.directed<string, number>((mutable) => {
     *   const a = Graph.addNode(mutable, "A")
     *   const b = Graph.addNode(mutable, "B")
     *   Graph.addEdge(mutable, a, b, 1)
     * })
     *
     * const dfs = Graph.dfs(graph, { start: [0] })
     *
     * // Map to just the node data
     * const values = Array.from(dfs.visit((index, data) => data))
     * console.log(values) // ["A", "B"]
     *
     * // Map to custom objects
     * const custom = Array.from(dfs.visit((index, data) => ({ id: index, name: data })))
     * console.log(custom) // [{ id: 0, name: "A" }, { id: 1, name: "B" }]
     * ```
     *
     * @since 3.18.0
     * @category iterators
     */
    visit: <U>(f: (index: T, data: N) => U) => Iterable<U>
  ) {
    this.visit = visit
    this[Symbol.iterator] = visit((index, data) => [index, data] as [T, N])[Symbol.iterator]
  }
}

/**
 * Type alias for node iteration using Walker.
 * NodeWalker is represented as Walker<NodeIndex, N>.
 *
 * @since 3.18.0
 * @category models
 */
export type NodeWalker<N> = Walker<NodeIndex, N>

/**
 * Type alias for edge iteration using Walker.
 * EdgeWalker is represented as Walker<EdgeIndex, Edge<E>>.
 *
 * @since 3.18.0
 * @category models
 */
export type EdgeWalker<E> = Walker<EdgeIndex, Edge<E>>

/**
 * Returns an iterator over the indices in the walker.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   Graph.addEdge(mutable, a, b, 1)
 * })
 *
 * const dfs = Graph.dfs(graph, { start: [0] })
 * const indices = Array.from(Graph.indices(dfs))
 * console.log(indices) // [0, 1]
 * ```
 *
 * @since 3.18.0
 * @category utilities
 */
export const indices = <T, N>(walker: Walker<T, N>): Iterable<T> => walker.visit((index, _) => index)

/**
 * Returns an iterator over the values (data) in the walker.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   Graph.addEdge(mutable, a, b, 1)
 * })
 *
 * const dfs = Graph.dfs(graph, { start: [0] })
 * const values = Array.from(Graph.values(dfs))
 * console.log(values) // ["A", "B"]
 * ```
 *
 * @since 3.18.0
 * @category utilities
 */
export const values = <T, N>(walker: Walker<T, N>): Iterable<N> => walker.visit((_, data) => data)

/**
 * Returns an iterator over [index, data] entries in the walker.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   Graph.addEdge(mutable, a, b, 1)
 * })
 *
 * const dfs = Graph.dfs(graph, { start: [0] })
 * const entries = Array.from(Graph.entries(dfs))
 * console.log(entries) // [[0, "A"], [1, "B"]]
 * ```
 *
 * @since 3.18.0
 * @category utilities
 */
export const entries = <T, N>(walker: Walker<T, N>): Iterable<[T, N]> =>
  walker.visit((index, data) => [index, data] as [T, N])

/**
 * Configuration for graph search iterators.
 *
 * @since 3.18.0
 * @category models
 */
export interface SearchConfig {
  readonly start?: Array<NodeIndex>
  readonly direction?: Direction
}

/**
 * Creates a new DFS iterator with optional configuration.
 *
 * The iterator maintains a stack of nodes to visit and tracks discovered nodes.
 * It provides lazy evaluation of the depth-first search.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, 1)
 *   Graph.addEdge(mutable, b, c, 1)
 * })
 *
 * // Start from a specific node
 * const dfs1 = Graph.dfs(graph, { start: [0] })
 * for (const nodeIndex of Graph.indices(dfs1)) {
 *   console.log(nodeIndex) // Traverses in DFS order: 0, 1, 2
 * }
 *
 * // Empty iterator (no starting nodes)
 * const dfs2 = Graph.dfs(graph)
 * // Can be used programmatically
 * ```
 *
 * @since 3.18.0
 * @category iterators
 */
export const dfs = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  config: SearchConfig = {}
): NodeWalker<N> => {
  const start = config.start ?? []
  const direction = config.direction ?? "outgoing"

  // Validate that all start nodes exist
  for (const nodeIndex of start) {
    if (!hasNode(graph, nodeIndex)) {
      throw missingNode(nodeIndex)
    }
  }

  return new Walker((f) => ({
    [Symbol.iterator]: () => {
      const stack = [...start]
      const discovered = new Set<NodeIndex>()

      const nextMapped = () => {
        while (stack.length > 0) {
          const current = stack.pop()!

          if (discovered.has(current)) {
            continue
          }

          discovered.add(current)

          const nodeDataOption = graph.nodes.get(current)
          if (nodeDataOption === undefined) {
            continue
          }

          const neighbors = neighborsDirected(graph, current, direction)
          for (let i = neighbors.length - 1; i >= 0; i--) {
            const neighbor = neighbors[i]
            if (!discovered.has(neighbor)) {
              stack.push(neighbor)
            }
          }

          return { done: false, value: f(current, nodeDataOption) }
        }

        return { done: true, value: undefined } as const
      }

      return { next: nextMapped }
    }
  }))
}

/**
 * Creates a new BFS iterator with optional configuration.
 *
 * The iterator maintains a queue of nodes to visit and tracks discovered nodes.
 * It provides lazy evaluation of the breadth-first search.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, 1)
 *   Graph.addEdge(mutable, b, c, 1)
 * })
 *
 * // Start from a specific node
 * const bfs1 = Graph.bfs(graph, { start: [0] })
 * for (const nodeIndex of Graph.indices(bfs1)) {
 *   console.log(nodeIndex) // Traverses in BFS order: 0, 1, 2
 * }
 *
 * // Empty iterator (no starting nodes)
 * const bfs2 = Graph.bfs(graph)
 * // Can be used programmatically
 * ```
 *
 * @since 3.18.0
 * @category iterators
 */
export const bfs = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  config: SearchConfig = {}
): NodeWalker<N> => {
  const start = config.start ?? []
  const direction = config.direction ?? "outgoing"

  // Validate that all start nodes exist
  for (const nodeIndex of start) {
    if (!hasNode(graph, nodeIndex)) {
      throw missingNode(nodeIndex)
    }
  }

  return new Walker((f) => ({
    [Symbol.iterator]: () => {
      const queue = [...start]
      const discovered = new Set<NodeIndex>()

      const nextMapped = () => {
        while (queue.length > 0) {
          const current = queue.shift()!

          if (!discovered.has(current)) {
            discovered.add(current)

            const neighbors = neighborsDirected(graph, current, direction)
            for (const neighbor of neighbors) {
              if (!discovered.has(neighbor)) {
                queue.push(neighbor)
              }
            }

            const nodeData = getNode(graph, current)
            if (Option.isSome(nodeData)) {
              return { done: false, value: f(current, nodeData.value) }
            }
            return nextMapped()
          }
        }

        return { done: true, value: undefined } as const
      }

      return { next: nextMapped }
    }
  }))
}

/**
 * Configuration options for topological sort iterator.
 *
 * @since 3.18.0
 * @category models
 */
export interface TopoConfig {
  readonly initials?: Array<NodeIndex>
}

/**
 * Creates a new topological sort iterator with optional configuration.
 *
 * The iterator uses Kahn's algorithm to lazily produce nodes in topological order.
 * Throws an error if the graph contains cycles.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, 1)
 *   Graph.addEdge(mutable, b, c, 1)
 * })
 *
 * // Standard topological sort
 * const topo1 = Graph.topo(graph)
 * for (const nodeIndex of Graph.indices(topo1)) {
 *   console.log(nodeIndex) // 0, 1, 2 (topological order)
 * }
 *
 * // With initial nodes
 * const topo2 = Graph.topo(graph, { initials: [0] })
 *
 * // Throws error for cyclic graph
 * const cyclicGraph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   Graph.addEdge(mutable, a, b, 1)
 *   Graph.addEdge(mutable, b, a, 2) // Creates cycle
 * })
 *
 * try {
 *   Graph.topo(cyclicGraph) // Throws: "Cannot perform topological sort on cyclic graph"
 * } catch (error) {
 *   console.log((error as Error).message)
 * }
 * ```
 *
 * @since 3.18.0
 * @category iterators
 */
export const topo = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  config: TopoConfig = {}
): NodeWalker<N> => {
  // Check if graph is acyclic first
  if (!isAcyclic(graph)) {
    throw new Error("Cannot perform topological sort on cyclic graph")
  }

  const initials = config.initials ?? []

  // Validate that all initial nodes exist
  for (const nodeIndex of initials) {
    if (!hasNode(graph, nodeIndex)) {
      throw missingNode(nodeIndex)
    }
  }

  return new Walker((f) => ({
    [Symbol.iterator]: () => {
      const inDegree = new Map<NodeIndex, number>()
      const remaining = new Set<NodeIndex>()
      const queue = [...initials]

      // Initialize in-degree counts
      for (const [nodeIndex] of graph.nodes) {
        inDegree.set(nodeIndex, 0)
        remaining.add(nodeIndex)
      }

      // Calculate in-degrees
      for (const [, edgeData] of graph.edges) {
        const currentInDegree = inDegree.get(edgeData.target) || 0
        inDegree.set(edgeData.target, currentInDegree + 1)
      }

      // Add nodes with zero in-degree to queue if no initials provided
      if (initials.length === 0) {
        for (const [nodeIndex, degree] of inDegree) {
          if (degree === 0) {
            queue.push(nodeIndex)
          }
        }
      }

      const nextMapped = () => {
        while (queue.length > 0) {
          const current = queue.shift()!

          if (remaining.has(current)) {
            remaining.delete(current)

            // Process outgoing edges, reducing in-degree of targets
            const neighbors = neighborsDirected(graph, current, "outgoing")
            for (const neighbor of neighbors) {
              if (remaining.has(neighbor)) {
                const currentInDegree = inDegree.get(neighbor) || 0
                const newInDegree = currentInDegree - 1
                inDegree.set(neighbor, newInDegree)

                // If in-degree becomes 0, add to queue
                if (newInDegree === 0) {
                  queue.push(neighbor)
                }
              }
            }

            const nodeData = getNode(graph, current)
            if (Option.isSome(nodeData)) {
              return { done: false, value: f(current, nodeData.value) }
            }
            return nextMapped()
          }
        }

        return { done: true, value: undefined } as const
      }

      return { next: nextMapped }
    }
  }))
}

/**
 * Creates a new DFS postorder iterator with optional configuration.
 *
 * The iterator maintains a stack with visit state tracking and emits nodes
 * in postorder (after all descendants have been processed). Essential for
 * dependency resolution and tree destruction algorithms.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const root = Graph.addNode(mutable, "root")
 *   const child1 = Graph.addNode(mutable, "child1")
 *   const child2 = Graph.addNode(mutable, "child2")
 *   Graph.addEdge(mutable, root, child1, 1)
 *   Graph.addEdge(mutable, root, child2, 1)
 * })
 *
 * // Postorder: children before parents
 * const postOrder = Graph.dfsPostOrder(graph, { start: [0] })
 * for (const node of postOrder) {
 *   console.log(node) // 1, 2, 0
 * }
 * ```
 *
 * @since 3.18.0
 * @category iterators
 */
export const dfsPostOrder = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  config: SearchConfig = {}
): NodeWalker<N> => {
  const start = config.start ?? []
  const direction = config.direction ?? "outgoing"

  // Validate that all start nodes exist
  for (const nodeIndex of start) {
    if (!hasNode(graph, nodeIndex)) {
      throw missingNode(nodeIndex)
    }
  }

  return new Walker((f) => ({
    [Symbol.iterator]: () => {
      const stack: Array<{ node: NodeIndex; visitedChildren: boolean }> = []
      const discovered = new Set<NodeIndex>()
      const finished = new Set<NodeIndex>()

      // Initialize stack with start nodes
      for (let i = start.length - 1; i >= 0; i--) {
        stack.push({ node: start[i], visitedChildren: false })
      }

      const nextMapped = () => {
        while (stack.length > 0) {
          const current = stack[stack.length - 1]

          if (!discovered.has(current.node)) {
            discovered.add(current.node)
            current.visitedChildren = false
          }

          if (!current.visitedChildren) {
            current.visitedChildren = true
            const neighbors = neighborsDirected(graph, current.node, direction)

            for (let i = neighbors.length - 1; i >= 0; i--) {
              const neighbor = neighbors[i]
              if (!discovered.has(neighbor) && !finished.has(neighbor)) {
                stack.push({ node: neighbor, visitedChildren: false })
              }
            }
          } else {
            const nodeToEmit = stack.pop()!.node

            if (!finished.has(nodeToEmit)) {
              finished.add(nodeToEmit)

              const nodeData = getNode(graph, nodeToEmit)
              if (Option.isSome(nodeData)) {
                return { done: false, value: f(nodeToEmit, nodeData.value) }
              }
              return nextMapped()
            }
          }
        }

        return { done: true, value: undefined } as const
      }

      return { next: nextMapped }
    }
  }))
}

/**
 * Creates an iterator over all node indices in the graph.
 *
 * The iterator produces node indices in the order they were added to the graph.
 * This provides access to all nodes regardless of connectivity.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, 1)
 * })
 *
 * const indices = Array.from(Graph.indices(Graph.nodes(graph)))
 * console.log(indices) // [0, 1, 2]
 * ```
 *
 * @since 3.18.0
 * @category iterators
 */
export const nodes = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>
): NodeWalker<N> =>
  new Walker((f) => ({
    [Symbol.iterator]() {
      const nodeMap = graph.nodes
      const iterator = nodeMap.entries()

      return {
        next() {
          const result = iterator.next()
          if (result.done) {
            return { done: true, value: undefined }
          }
          const [nodeIndex, nodeData] = result.value
          return { done: false, value: f(nodeIndex, nodeData) }
        }
      }
    }
  }))

/**
 * Creates an iterator over all edge indices in the graph.
 *
 * The iterator produces edge indices in the order they were added to the graph.
 * This provides access to all edges regardless of connectivity.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const a = Graph.addNode(mutable, "A")
 *   const b = Graph.addNode(mutable, "B")
 *   const c = Graph.addNode(mutable, "C")
 *   Graph.addEdge(mutable, a, b, 1)
 *   Graph.addEdge(mutable, b, c, 2)
 * })
 *
 * const indices = Array.from(Graph.indices(Graph.edges(graph)))
 * console.log(indices) // [0, 1]
 * ```
 *
 * @since 3.18.0
 * @category iterators
 */
export const edges = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>
): EdgeWalker<E> =>
  new Walker((f) => ({
    [Symbol.iterator]() {
      const edgeMap = graph.edges
      const iterator = edgeMap.entries()

      return {
        next() {
          const result = iterator.next()
          if (result.done) {
            return { done: true, value: undefined }
          }
          const [edgeIndex, edgeData] = result.value
          return { done: false, value: f(edgeIndex, edgeData) }
        }
      }
    }
  }))

/**
 * Configuration for externals iterator.
 *
 * @since 3.18.0
 * @category models
 */
export interface ExternalsConfig {
  readonly direction?: Direction
}

/**
 * Creates an iterator over external nodes (nodes without edges in specified direction).
 *
 * External nodes are nodes that have no outgoing edges (direction="outgoing") or
 * no incoming edges (direction="incoming"). These are useful for finding
 * sources, sinks, or isolated nodes.
 *
 * @example
 * ```ts
 * import { Graph } from "effect"
 *
 * const graph = Graph.directed<string, number>((mutable) => {
 *   const source = Graph.addNode(mutable, "source")     // 0 - no incoming
 *   const middle = Graph.addNode(mutable, "middle")     // 1 - has both
 *   const sink = Graph.addNode(mutable, "sink")         // 2 - no outgoing
 *   const isolated = Graph.addNode(mutable, "isolated") // 3 - no edges
 *
 *   Graph.addEdge(mutable, source, middle, 1)
 *   Graph.addEdge(mutable, middle, sink, 2)
 * })
 *
 * // Nodes with no outgoing edges (sinks + isolated)
 * const sinks = Array.from(Graph.indices(Graph.externals(graph, { direction: "outgoing" })))
 * console.log(sinks) // [2, 3]
 *
 * // Nodes with no incoming edges (sources + isolated)
 * const sources = Array.from(Graph.indices(Graph.externals(graph, { direction: "incoming" })))
 * console.log(sources) // [0, 3]
 * ```
 *
 * @since 3.18.0
 * @category iterators
 */
export const externals = <N, E, T extends Kind = "directed">(
  graph: Graph<N, E, T> | MutableGraph<N, E, T>,
  config: ExternalsConfig = {}
): NodeWalker<N> => {
  const direction = config.direction ?? "outgoing"

  return new Walker((f) => ({
    [Symbol.iterator]: () => {
      const nodeMap = graph.nodes
      const adjacencyMap = direction === "incoming"
        ? graph.reverseAdjacency
        : graph.adjacency

      const nodeIterator = nodeMap.entries()

      const nextMapped = () => {
        let current = nodeIterator.next()
        while (!current.done) {
          const [nodeIndex, nodeData] = current.value
          const adjacencyList = adjacencyMap.get(nodeIndex)

          // Node is external if it has no edges in the specified direction
          if (adjacencyList === undefined || adjacencyList.length === 0) {
            return { done: false, value: f(nodeIndex, nodeData) }
          }
          current = nodeIterator.next()
        }

        return { done: true, value: undefined } as const
      }

      return { next: nextMapped }
    }
  }))
}

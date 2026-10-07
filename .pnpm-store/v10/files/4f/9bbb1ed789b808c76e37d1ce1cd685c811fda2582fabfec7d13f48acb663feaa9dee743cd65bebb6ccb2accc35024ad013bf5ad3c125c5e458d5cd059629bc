/**
 * @experimental
 * @since 3.18.0
 */
import * as Data from "./Data.js";
import * as Equal from "./Equal.js";
import type { Inspectable } from "./Inspectable.js";
import * as Option from "./Option.js";
import type { Pipeable } from "./Pipeable.js";
/**
 * Unique identifier for Graph instances.
 *
 * @since 3.18.0
 * @category symbol
 */
export declare const TypeId: "~effect/Graph";
/**
 * Type identifier for Graph instances.
 *
 * @since 3.18.0
 * @category symbol
 */
export type TypeId = typeof TypeId;
/**
 * Node index for node identification using plain numbers.
 *
 * @since 3.18.0
 * @category models
 */
export type NodeIndex = number;
/**
 * Edge index for edge identification using plain numbers.
 *
 * @since 3.18.0
 * @category models
 */
export type EdgeIndex = number;
/**
 * Edge data containing source, target, and user data.
 *
 * @since 3.18.0
 * @category models
 */
export declare class Edge<E> extends Data.Class<{
    readonly source: NodeIndex;
    readonly target: NodeIndex;
    readonly data: E;
}> {
}
/**
 * Graph type for distinguishing directed and undirected graphs.
 *
 * @since 3.18.0
 * @category models
 */
export type Kind = "directed" | "undirected";
/**
 * Graph prototype interface.
 *
 * @since 3.18.0
 * @category models
 */
export interface Proto<out N, out E> extends Iterable<readonly [NodeIndex, N]>, Equal.Equal, Pipeable, Inspectable {
    readonly [TypeId]: TypeId;
    readonly nodes: Map<NodeIndex, N>;
    readonly edges: Map<EdgeIndex, Edge<E>>;
    readonly adjacency: Map<NodeIndex, Array<EdgeIndex>>;
    readonly reverseAdjacency: Map<NodeIndex, Array<EdgeIndex>>;
    nextNodeIndex: NodeIndex;
    nextEdgeIndex: EdgeIndex;
    isAcyclic: Option.Option<boolean>;
}
/**
 * Immutable graph interface.
 *
 * @since 3.18.0
 * @category models
 */
export interface Graph<out N, out E, T extends Kind = "directed"> extends Proto<N, E> {
    readonly type: T;
    readonly mutable: false;
}
/**
 * Mutable graph interface.
 *
 * @since 3.18.0
 * @category models
 */
export interface MutableGraph<out N, out E, T extends Kind = "directed"> extends Proto<N, E> {
    readonly type: T;
    readonly mutable: true;
}
/**
 * Directed graph type alias.
 *
 * @since 3.18.0
 * @category models
 */
export type DirectedGraph<N, E> = Graph<N, E, "directed">;
/**
 * Undirected graph type alias.
 *
 * @since 3.18.0
 * @category models
 */
export type UndirectedGraph<N, E> = Graph<N, E, "undirected">;
/**
 * Mutable directed graph type alias.
 *
 * @since 3.18.0
 * @category models
 */
export type MutableDirectedGraph<N, E> = MutableGraph<N, E, "directed">;
/**
 * Mutable undirected graph type alias.
 *
 * @since 3.18.0
 * @category models
 */
export type MutableUndirectedGraph<N, E> = MutableGraph<N, E, "undirected">;
declare const GraphError_base: new <A extends Record<string, any> = {}>(args: import("./Types.js").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => import("./Cause.js").YieldableError & {
    readonly _tag: "GraphError";
} & Readonly<A>;
/**
 * Error thrown when a graph operation fails.
 *
 * @since 3.18.0
 * @category errors
 */
export declare class GraphError extends GraphError_base<{
    readonly message: string;
}> {
}
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
export declare const directed: <N, E>(mutate?: (mutable: MutableDirectedGraph<N, E>) => void) => DirectedGraph<N, E>;
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
export declare const undirected: <N, E>(mutate?: (mutable: MutableUndirectedGraph<N, E>) => void) => UndirectedGraph<N, E>;
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
export declare const beginMutation: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T>) => MutableGraph<N, E, T>;
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
export declare const endMutation: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>) => Graph<N, E, T>;
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
export declare const mutate: {
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
    <N, E, T extends Kind = "directed">(f: (mutable: MutableGraph<N, E, T>) => void): (graph: Graph<N, E, T>) => Graph<N, E, T>;
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
    <N, E, T extends Kind = "directed">(graph: Graph<N, E, T>, f: (mutable: MutableGraph<N, E, T>) => void): Graph<N, E, T>;
};
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
export declare const addNode: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, data: N) => NodeIndex;
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
export declare const getNode: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, nodeIndex: NodeIndex) => Option.Option<N>;
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
export declare const hasNode: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, nodeIndex: NodeIndex) => boolean;
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
export declare const nodeCount: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>) => number;
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
export declare const findNode: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, predicate: (data: N) => boolean) => Option.Option<NodeIndex>;
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
export declare const findNodes: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, predicate: (data: N) => boolean) => Array<NodeIndex>;
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
export declare const findEdge: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, predicate: (data: E, source: NodeIndex, target: NodeIndex) => boolean) => Option.Option<EdgeIndex>;
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
export declare const findEdges: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, predicate: (data: E, source: NodeIndex, target: NodeIndex) => boolean) => Array<EdgeIndex>;
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
export declare const updateNode: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, index: NodeIndex, f: (data: N) => N) => void;
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
export declare const updateEdge: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, edgeIndex: EdgeIndex, f: (data: E) => E) => void;
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
export declare const mapNodes: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, f: (data: N) => N) => void;
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
export declare const mapEdges: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, f: (data: E) => E) => void;
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
export declare const reverse: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>) => void;
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
export declare const filterMapNodes: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, f: (data: N) => Option.Option<N>) => void;
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
export declare const filterMapEdges: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, f: (data: E) => Option.Option<E>) => void;
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
export declare const filterNodes: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, predicate: (data: N) => boolean) => void;
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
export declare const filterEdges: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, predicate: (data: E) => boolean) => void;
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
export declare const addEdge: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, source: NodeIndex, target: NodeIndex, data: E) => EdgeIndex;
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
export declare const removeNode: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, nodeIndex: NodeIndex) => void;
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
export declare const removeEdge: <N, E, T extends Kind = "directed">(mutable: MutableGraph<N, E, T>, edgeIndex: EdgeIndex) => void;
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
export declare const getEdge: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, edgeIndex: EdgeIndex) => Option.Option<Edge<E>>;
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
export declare const hasEdge: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, source: NodeIndex, target: NodeIndex) => boolean;
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
export declare const edgeCount: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>) => number;
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
export declare const neighbors: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, nodeIndex: NodeIndex) => Array<NodeIndex>;
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
export declare const neighborsDirected: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, nodeIndex: NodeIndex, direction: Direction) => Array<NodeIndex>;
/**
 * Configuration options for GraphViz DOT format generation from graphs.
 *
 * @since 3.18.0
 * @category models
 */
export interface GraphVizOptions<N, E> {
    readonly nodeLabel?: (data: N) => string;
    readonly edgeLabel?: (data: E) => string;
    readonly graphName?: string;
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
export declare const toGraphViz: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, options?: GraphVizOptions<N, E>) => string;
/**
 * Mermaid node shape types.
 *
 * @since 3.18.0
 * @category models
 */
export type MermaidNodeShape = "rectangle" | "rounded" | "circle" | "diamond" | "hexagon" | "stadium" | "subroutine" | "cylindrical";
/**
 * Mermaid diagram direction types.
 *
 * @since 3.18.0
 * @category models
 */
export type MermaidDirection = "TB" | "TD" | "BT" | "LR" | "RL";
/**
 * Mermaid diagram type.
 *
 * @since 3.18.0
 * @category models
 */
export type MermaidDiagramType = "flowchart" | "graph";
/**
 * Configuration options for Mermaid diagram generation.
 *
 * @since 3.18.0
 * @category models
 */
export interface MermaidOptions<N, E> {
    readonly nodeLabel?: (data: N) => string;
    readonly edgeLabel?: (data: E) => string;
    readonly diagramType?: MermaidDiagramType;
    readonly direction?: MermaidDirection;
    readonly nodeShape?: (data: N) => MermaidNodeShape;
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
export declare const toMermaid: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, options?: MermaidOptions<N, E>) => string;
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
export type Direction = "outgoing" | "incoming";
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
export declare const isAcyclic: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>) => boolean;
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
export declare const isBipartite: <N, E>(graph: Graph<N, E, "undirected"> | MutableGraph<N, E, "undirected">) => boolean;
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
export declare const connectedComponents: <N, E>(graph: Graph<N, E, "undirected"> | MutableGraph<N, E, "undirected">) => Array<Array<NodeIndex>>;
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
export declare const stronglyConnectedComponents: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>) => Array<Array<NodeIndex>>;
/**
 * Result of a shortest path computation containing the path and total distance.
 *
 * @since 3.18.0
 * @category models
 */
export interface PathResult<E> {
    readonly path: Array<NodeIndex>;
    readonly distance: number;
    readonly costs: Array<E>;
}
/**
 * Configuration for Dijkstra's algorithm.
 *
 * @since 3.18.0
 * @category models
 */
export interface DijkstraConfig<E> {
    source: NodeIndex;
    target: NodeIndex;
    cost: (edgeData: E) => number;
}
/**
 * Configuration for A* algorithm.
 *
 * @since 3.18.0
 * @category models
 */
export interface AstarConfig<E, N> {
    source: NodeIndex;
    target: NodeIndex;
    cost: (edgeData: E) => number;
    heuristic: (sourceNodeData: N, targetNodeData: N) => number;
}
/**
 * Configuration for Bellman-Ford algorithm.
 *
 * @since 3.18.0
 * @category models
 */
export interface BellmanFordConfig<E> {
    source: NodeIndex;
    target: NodeIndex;
    cost: (edgeData: E) => number;
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
export declare const dijkstra: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, config: DijkstraConfig<E>) => Option.Option<PathResult<E>>;
/**
 * Result of all-pairs shortest path computation.
 *
 * @since 3.18.0
 * @category models
 */
export interface AllPairsResult<E> {
    readonly distances: Map<NodeIndex, Map<NodeIndex, number>>;
    readonly paths: Map<NodeIndex, Map<NodeIndex, Array<NodeIndex> | null>>;
    readonly costs: Map<NodeIndex, Map<NodeIndex, Array<E>>>;
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
export declare const floydWarshall: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, cost: (edgeData: E) => number) => AllPairsResult<E>;
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
export declare const astar: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, config: AstarConfig<E, N>) => Option.Option<PathResult<E>>;
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
export declare const bellmanFord: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, config: BellmanFordConfig<E>) => Option.Option<PathResult<E>>;
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
export declare class Walker<T, N> implements Iterable<[T, N]> {
    /**
     * @since 3.18.0
     */
    readonly [Symbol.iterator]: () => Iterator<[T, N]>;
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
    readonly visit: <U>(f: (index: T, data: N) => U) => Iterable<U>;
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
    visit: <U>(f: (index: T, data: N) => U) => Iterable<U>);
}
/**
 * Type alias for node iteration using Walker.
 * NodeWalker is represented as Walker<NodeIndex, N>.
 *
 * @since 3.18.0
 * @category models
 */
export type NodeWalker<N> = Walker<NodeIndex, N>;
/**
 * Type alias for edge iteration using Walker.
 * EdgeWalker is represented as Walker<EdgeIndex, Edge<E>>.
 *
 * @since 3.18.0
 * @category models
 */
export type EdgeWalker<E> = Walker<EdgeIndex, Edge<E>>;
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
export declare const indices: <T, N>(walker: Walker<T, N>) => Iterable<T>;
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
export declare const values: <T, N>(walker: Walker<T, N>) => Iterable<N>;
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
export declare const entries: <T, N>(walker: Walker<T, N>) => Iterable<[T, N]>;
/**
 * Configuration for graph search iterators.
 *
 * @since 3.18.0
 * @category models
 */
export interface SearchConfig {
    readonly start?: Array<NodeIndex>;
    readonly direction?: Direction;
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
export declare const dfs: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, config?: SearchConfig) => NodeWalker<N>;
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
export declare const bfs: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, config?: SearchConfig) => NodeWalker<N>;
/**
 * Configuration options for topological sort iterator.
 *
 * @since 3.18.0
 * @category models
 */
export interface TopoConfig {
    readonly initials?: Array<NodeIndex>;
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
export declare const topo: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, config?: TopoConfig) => NodeWalker<N>;
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
export declare const dfsPostOrder: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, config?: SearchConfig) => NodeWalker<N>;
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
export declare const nodes: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>) => NodeWalker<N>;
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
export declare const edges: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>) => EdgeWalker<E>;
/**
 * Configuration for externals iterator.
 *
 * @since 3.18.0
 * @category models
 */
export interface ExternalsConfig {
    readonly direction?: Direction;
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
export declare const externals: <N, E, T extends Kind = "directed">(graph: Graph<N, E, T> | MutableGraph<N, E, T>, config?: ExternalsConfig) => NodeWalker<N>;
export {};
//# sourceMappingURL=Graph.d.ts.map
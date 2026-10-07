// @flow strict-local

// forcing NodeId to be opaque as it should only be created once
export opaque type NodeId = number;
export function toNodeId(x: number): NodeId {
  return x;
}
export function fromNodeId(x: NodeId): number {
  return x;
}

export type ContentKey = string;

export type Edge<TEdgeType: number> = {|
  from: NodeId,
  to: NodeId,
  type: TEdgeType,
|};

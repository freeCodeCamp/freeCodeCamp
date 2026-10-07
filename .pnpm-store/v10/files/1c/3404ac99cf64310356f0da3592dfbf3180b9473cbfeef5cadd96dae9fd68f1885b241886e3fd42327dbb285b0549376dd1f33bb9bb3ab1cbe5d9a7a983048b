// @flow
import type {Child} from './child';

// This file is imported by both the WorkerFarm and child implementation.
// When a worker is inited, it sets the state in this file.
// This way, WorkerFarm can access the state without directly importing the child code.
export let child: ?Child = null;
export function setChild(c: Child) {
  child = c;
}

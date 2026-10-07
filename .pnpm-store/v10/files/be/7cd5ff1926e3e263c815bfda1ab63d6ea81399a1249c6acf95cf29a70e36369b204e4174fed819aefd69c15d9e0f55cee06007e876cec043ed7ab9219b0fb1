import type { ExecutionStatus } from './ExecutionStatus.js';
/**
 * Summary of the execution process
 * @remarks Since 1.9.0
 * @public
 */
export interface ExecutionTree<Ts> {
    /**
     * Status of the property
     * @remarks Since 1.9.0
     */
    status: ExecutionStatus;
    /**
     * Generated value
     * @remarks Since 1.9.0
     */
    value: Ts;
    /**
     * Values derived from this value
     * @remarks Since 1.9.0
     */
    children: ExecutionTree<Ts>[];
}

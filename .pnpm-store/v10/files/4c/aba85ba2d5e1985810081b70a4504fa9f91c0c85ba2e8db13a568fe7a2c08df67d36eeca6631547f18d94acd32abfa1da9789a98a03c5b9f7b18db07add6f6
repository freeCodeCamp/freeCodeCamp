// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Compare } from '../../type/index.mjs';
// ------------------------------------------------------------------
// DeterministicCompare
//
// Provides a deterministic tie-break for schemas. This is used when
// schemas are structurally disjoint or mutually inclusive. While
// JSON serialization incurs a performance overhead, it serves as a
// reliable mechanism to ensure stable ordering and preserves the
// alphabetical alignment of named constants.
//
// ------------------------------------------------------------------
function DeterministicCompare(left, right) {
    return JSON.stringify(left).localeCompare(JSON.stringify(right));
}
// ------------------------------------------------------------------
// UnionPrioritySort
//
// Performs a deterministic sort on Union members. By default, this
// function ensures that narrow (more specific) types precede broader
// types in the resulting array. The order can be reversed by setting
// the order property to -1 which will reverse unions from broader
// to more narrow.
//
// ------------------------------------------------------------------
/** Deterministically sorts schemas by structural relationship (narrow to broad) */
export function UnionPrioritySort(types, order = 1) {
    return types.sort((left, right) => {
        const result = Compare(left, right);
        return (Guard.IsEqual(result, 'disjoint') ? DeterministicCompare(left, right) :
            Guard.IsEqual(result, 'right-inside') ? 1 :
                Guard.IsEqual(result, 'left-inside') ? -1 :
                    DeterministicCompare(left, right)) * order;
    });
}

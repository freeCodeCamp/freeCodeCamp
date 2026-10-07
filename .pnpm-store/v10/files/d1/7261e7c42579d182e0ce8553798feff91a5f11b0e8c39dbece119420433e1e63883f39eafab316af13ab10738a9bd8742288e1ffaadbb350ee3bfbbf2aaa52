import { IRunQueryArgs } from "../../types";
interface ISelectIndexArgs {
    filter: IRunQueryArgs["queryArgs"]["filter"];
    sort: IRunQueryArgs["queryArgs"]["sort"];
    maxFields?: number;
}
type IndexField = [fieldName: string, orderDirection: number];
/**
 * Suggest index fields for this combination of filter and sort.
 *
 * Prioritizes sort fields over filter fields when can't use index
 * for both because sorting is expensive both CPU and memory-wise.
 */
export declare function suggestIndex({ filter, sort, maxFields, }: ISelectIndexArgs): Array<IndexField>;
export {};

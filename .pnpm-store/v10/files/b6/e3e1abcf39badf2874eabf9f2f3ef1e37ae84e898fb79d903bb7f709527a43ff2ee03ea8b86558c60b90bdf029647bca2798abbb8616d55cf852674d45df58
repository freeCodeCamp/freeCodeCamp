import { Node } from "../../../index";
export interface ITypeConflictExample {
    value: unknown;
    type: string;
    parent?: Node;
    arrayTypes?: Array<string>;
}
interface ITypeConflict {
    value: unknown;
    description?: string;
}
declare class TypeConflictEntry {
    selector: string;
    types: Map<string, ITypeConflict>;
    constructor(selector: string);
    addExample({ value, type, parent }: ITypeConflictExample): void;
    printEntry(): void;
}
declare class TypeConflictReporter {
    entries: Map<string, TypeConflictEntry>;
    constructor();
    clearConflicts(): void;
    getEntryFromSelector(selector: string): TypeConflictEntry;
    addConflict(selector: string, examples: Array<ITypeConflictExample>): void;
    printConflicts(): void;
    getConflicts(): Array<TypeConflictEntry>;
}
export { TypeConflictReporter, TypeConflictEntry };

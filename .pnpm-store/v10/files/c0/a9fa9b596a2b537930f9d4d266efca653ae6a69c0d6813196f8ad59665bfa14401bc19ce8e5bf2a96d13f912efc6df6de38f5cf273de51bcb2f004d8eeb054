import type { FunctionPropertyNames, FMember } from './types';
import type * as fs from 'fs';
type FS = typeof fs;
export declare function splitTwoLevels<FSObject>(functionName: FMember): [FunctionPropertyNames<FSObject> & string] | [FunctionPropertyNames<FSObject> & string, string];
export declare function indexFs<FSObject extends FS | FS['promises']>(fs: FSObject, member: FMember): {
    objectToPatch: any;
    functionNameToPatch: string;
};
export {};
//# sourceMappingURL=utils.d.ts.map
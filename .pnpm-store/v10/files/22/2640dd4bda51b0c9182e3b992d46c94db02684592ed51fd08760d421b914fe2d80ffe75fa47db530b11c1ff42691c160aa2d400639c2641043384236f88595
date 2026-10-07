import { Emitter } from "../util/Emitter.js";
export class BaseContext extends Emitter {
    constructor() {
        super(...arguments);
        this.isOffline = false;
    }
    /*
     * This is a placeholder so that JSON.stringify does not throw an error
     * This matches what JSON.stringify(audioContext) returns on a native
     * audioContext instance.
     */
    toJSON() {
        return {};
    }
}
//# sourceMappingURL=BaseContext.js.map
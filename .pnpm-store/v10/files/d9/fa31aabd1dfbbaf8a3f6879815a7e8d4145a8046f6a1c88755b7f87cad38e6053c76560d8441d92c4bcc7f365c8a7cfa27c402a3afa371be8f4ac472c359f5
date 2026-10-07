
/**
 * A `Namespace` refers to a space of nameable things like macros or lengths,
 * which can be `set` either globally or local to a nested group, using an
 * undo stack similar to how TeX implements this functionality.
 * Performance-wise, `get` and local `set` take constant time, while global
 * `set` takes time proportional to the depth of group nesting.
 */

import ParseError from "./ParseError";
export type Mapping<Value> = Record<string, Value>;

export default class Namespace<Value> {
    current: Mapping<Value>;
    builtins: Mapping<Value>;
    undefStack: Mapping<Value | null | undefined>[];

    /**
     * Both arguments are optional.  The first argument is an object of
     * built-in mappings which never change.  The second argument is an object
     * of initial (global-level) mappings, which will constantly change
     * according to any global/top-level `set`s done.
     */
    constructor(builtins: Mapping<Value> = {},
                globalMacros: Mapping<Value> = {}) {
        this.current = globalMacros;
        this.builtins = builtins;
        this.undefStack = [];
    }

    /**
     * Start a new nested group, affecting future local `set`s.
     */
    beginGroup() {
        this.undefStack.push({});
    }

    /**
     * End current nested group, restoring values before the group began.
     */
    endGroup() {
        if (this.undefStack.length === 0) {
            throw new ParseError("Unbalanced namespace destruction: attempt " +
                "to pop global namespace; please report this as a bug");
        }
        const undefs = this.undefStack.pop();
        for (const undef in undefs) {
            if (undefs.hasOwnProperty(undef)) {
                if (undefs[undef] == null) {
                    delete this.current[undef];
                } else {
                    this.current[undef] = undefs[undef];
                }
            }
        }
    }

    /**
     * Ends all currently nested groups (if any), restoring values before the
     * groups began.  Useful in case of an error in the middle of parsing.
     */
    endGroups() {
        while (this.undefStack.length > 0) {
            this.endGroup();
        }
    }

    /**
     * Detect whether `name` has a definition.  Equivalent to
     * `get(name) != null`.
     */
    has(name: string): boolean {
        return this.current.hasOwnProperty(name) ||
               this.builtins.hasOwnProperty(name);
    }

    /**
     * Get the current value of a name, or `undefined` if there is no value.
     *
     * Note: Do not use `if (namespace.get(...))` to detect whether a macro
     * is defined, as the definition may be the empty string which evaluates
     * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
     * `if (namespace.has(...))`.
     */
    get(name: string): Value | null | undefined {
        if (this.current.hasOwnProperty(name)) {
            return this.current[name];
        } else {
            return this.builtins[name];
        }
    }

    /**
     * Set the current value of a name, and optionally set it globally too.
     * Local set() sets the current value and (when appropriate) adds an undo
     * operation to the undo stack.  Global set() may change the undo
     * operation at every level, so takes time linear in their number.
     * A value of undefined means to delete existing definitions.
     */
    set(name: string, value: Value | null | undefined, global: boolean = false) {
        if (global) {
            // Global set is equivalent to setting in all groups.  Simulate this
            // by destroying any undos currently scheduled for this name,
            // and adding an undo with the *new* value (in case it later gets
            // locally reset within this environment).
            for (let i = 0; i < this.undefStack.length; i++) {
                delete this.undefStack[i][name];
            }
            if (this.undefStack.length > 0) {
                this.undefStack[this.undefStack.length - 1][name] = value;
            }
        } else {
            // Undo this set at end of this group (possibly to `undefined`),
            // unless an undo is already in place, in which case that older
            // value is the correct one.
            const top = this.undefStack[this.undefStack.length - 1];
            if (top && !top.hasOwnProperty(name)) {
                top[name] = this.current[name];
            }
        }
        if (value == null) {
            delete this.current[name];
        } else {
            this.current[name] = value;
        }
    }
}

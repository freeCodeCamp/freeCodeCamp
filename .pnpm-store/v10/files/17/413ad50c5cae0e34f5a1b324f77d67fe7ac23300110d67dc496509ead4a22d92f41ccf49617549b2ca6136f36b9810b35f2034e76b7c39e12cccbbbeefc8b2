/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class HierarchicalKind {
    static { this.sep = '.'; }
    static { this.None = new HierarchicalKind('@@none@@'); } // Special kind that matches nothing
    static { this.Empty = new HierarchicalKind(''); }
    constructor(value) {
        this.value = value;
    }
    equals(other) {
        return this.value === other.value;
    }
    contains(other) {
        return this.equals(other) || this.value === '' || other.value.startsWith(this.value + HierarchicalKind.sep);
    }
    intersects(other) {
        return this.contains(other) || other.contains(this);
    }
    append(...parts) {
        return new HierarchicalKind((this.value ? [this.value, ...parts] : parts).join(HierarchicalKind.sep));
    }
}

export { HierarchicalKind };

/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
var Container;
(function (Container) {
    Container[Container["Object"] = 0] = "Object";
    Container[Container["Array"] = 1] = "Array";
})(Container || (Container = {}));
class PropertyTree {
    constructor(propertyName, beginningLineNumber) {
        this.propertyName = propertyName ?? '';
        this.beginningLineNumber = beginningLineNumber;
        this.childrenProperties = [];
        this.lastProperty = false;
        this.noKeyName = false;
    }
    addChildProperty(childProperty) {
        childProperty.parent = this;
        if (this.childrenProperties.length > 0) {
            let insertionIndex = 0;
            if (childProperty.noKeyName) {
                insertionIndex = this.childrenProperties.length;
            }
            else {
                insertionIndex = binarySearchOnPropertyArray(this.childrenProperties, childProperty, compareProperties);
            }
            if (insertionIndex < 0) {
                insertionIndex = (insertionIndex * -1) - 1;
            }
            this.childrenProperties.splice(insertionIndex, 0, childProperty);
        }
        else {
            this.childrenProperties.push(childProperty);
        }
        return childProperty;
    }
}
function compareProperties(propertyTree1, propertyTree2) {
    const propertyName1 = propertyTree1.propertyName.toLowerCase();
    const propertyName2 = propertyTree2.propertyName.toLowerCase();
    if (propertyName1 < propertyName2) {
        return -1;
    }
    else if (propertyName1 > propertyName2) {
        return 1;
    }
    return 0;
}
function binarySearchOnPropertyArray(propertyTreeArray, propertyTree, compare_fn) {
    const propertyName = propertyTree.propertyName.toLowerCase();
    const firstPropertyInArrayName = propertyTreeArray[0].propertyName.toLowerCase();
    const lastPropertyInArrayName = propertyTreeArray[propertyTreeArray.length - 1].propertyName.toLowerCase();
    if (propertyName < firstPropertyInArrayName) {
        return 0;
    }
    if (propertyName > lastPropertyInArrayName) {
        return propertyTreeArray.length;
    }
    let m = 0;
    let n = propertyTreeArray.length - 1;
    while (m <= n) {
        let k = (n + m) >> 1;
        let cmp = compare_fn(propertyTree, propertyTreeArray[k]);
        if (cmp > 0) {
            m = k + 1;
        }
        else if (cmp < 0) {
            n = k - 1;
        }
        else {
            return k;
        }
    }
    return -m - 1;
}

export { Container, PropertyTree };

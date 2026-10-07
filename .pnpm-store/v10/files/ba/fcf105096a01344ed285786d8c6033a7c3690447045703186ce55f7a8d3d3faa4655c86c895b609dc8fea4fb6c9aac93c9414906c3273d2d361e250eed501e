/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var HorizontalGuidesState;
(function (HorizontalGuidesState) {
    HorizontalGuidesState[HorizontalGuidesState["Disabled"] = 0] = "Disabled";
    HorizontalGuidesState[HorizontalGuidesState["EnabledForActive"] = 1] = "EnabledForActive";
    HorizontalGuidesState[HorizontalGuidesState["Enabled"] = 2] = "Enabled";
})(HorizontalGuidesState || (HorizontalGuidesState = {}));
class IndentGuide {
    constructor(visibleColumn, column, className, 
    /**
     * If set, this indent guide is a horizontal guide (no vertical part).
     * It starts at visibleColumn and continues until endColumn.
    */
    horizontalLine, 
    /**
     * If set (!= -1), only show this guide for wrapped lines that don't contain this model column, but are after it.
    */
    forWrappedLinesAfterColumn, forWrappedLinesBeforeOrAtColumn) {
        this.visibleColumn = visibleColumn;
        this.column = column;
        this.className = className;
        this.horizontalLine = horizontalLine;
        this.forWrappedLinesAfterColumn = forWrappedLinesAfterColumn;
        this.forWrappedLinesBeforeOrAtColumn = forWrappedLinesBeforeOrAtColumn;
        if ((visibleColumn !== -1) === (column !== -1)) {
            throw new Error();
        }
    }
}
class IndentGuideHorizontalLine {
    constructor(top, endColumn) {
        this.top = top;
        this.endColumn = endColumn;
    }
}

export { HorizontalGuidesState, IndentGuide, IndentGuideHorizontalLine };

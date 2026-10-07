"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRangeConfig = void 0;
const utils_1 = require("./utils");
const makeRangeConfig = (spanningCellConfig, columnsConfig) => {
    var _a;
    const { topLeft, bottomRight } = (0, utils_1.calculateRangeCoordinate)(spanningCellConfig);
    const cellConfig = {
        ...columnsConfig[topLeft.col],
        ...spanningCellConfig,
        paddingRight: (_a = spanningCellConfig.paddingRight) !== null && _a !== void 0 ? _a : columnsConfig[bottomRight.col].paddingRight,
    };
    return { ...cellConfig,
        bottomRight,
        topLeft };
};
exports.makeRangeConfig = makeRangeConfig;
//# sourceMappingURL=makeRangeConfig.js.map
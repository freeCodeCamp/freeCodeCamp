"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStreamConfig = void 0;
const utils_1 = require("./utils");
const validateConfig_1 = require("./validateConfig");
/**
 * Creates a configuration for every column using default
 * values for the missing configuration properties.
 */
const makeColumnsConfig = (columnCount, columns = {}, columnDefault) => {
    return Array.from({ length: columnCount }).map((_, index) => {
        return {
            alignment: 'left',
            paddingLeft: 1,
            paddingRight: 1,
            truncate: Number.POSITIVE_INFINITY,
            verticalAlignment: 'top',
            wrapWord: false,
            ...columnDefault,
            ...columns[index],
        };
    });
};
/**
 * Makes a new configuration object out of the userConfig object
 * using default values for the missing configuration properties.
 */
const makeStreamConfig = (config) => {
    (0, validateConfig_1.validateConfig)('streamConfig.json', config);
    if (config.columnDefault.width === undefined) {
        throw new Error('Must provide config.columnDefault.width when creating a stream.');
    }
    return {
        drawVerticalLine: () => {
            return true;
        },
        ...config,
        border: (0, utils_1.makeBorderConfig)(config.border),
        columns: makeColumnsConfig(config.columnCount, config.columns, config.columnDefault),
    };
};
exports.makeStreamConfig = makeStreamConfig;
//# sourceMappingURL=makeStreamConfig.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveExternalModuleAndFn = void 0;
const tslib_1 = require("tslib");
const module_1 = require("module");
const process_1 = require("process");
const changeCaseAll = tslib_1.__importStar(require("change-case-all"));
function resolveExternalModuleAndFn(pointer) {
    if (typeof pointer === 'function') {
        return pointer;
    }
    // eslint-disable-next-line prefer-const
    let [moduleName, functionName] = pointer.split('#');
    // Temp workaround until v2
    if (moduleName === 'change-case') {
        moduleName = 'change-case-all';
    }
    let loadedModule;
    if (moduleName === 'change-case-all') {
        loadedModule = changeCaseAll;
    }
    else {
        // we have to use a path to a filename here (it does not need to exist.)
        // https://github.com/dotansimha/graphql-code-generator/issues/6553
        const cwdRequire = (0, module_1.createRequire)((0, process_1.cwd)() + '/index.js');
        loadedModule = cwdRequire(moduleName);
        if (!(functionName in loadedModule) && typeof loadedModule !== 'function') {
            throw new Error(`${functionName} couldn't be found in module ${moduleName}!`);
        }
    }
    return loadedModule[functionName] || loadedModule;
}
exports.resolveExternalModuleAndFn = resolveExternalModuleAndFn;

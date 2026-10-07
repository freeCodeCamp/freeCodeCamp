"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular-devkit/schematics");
var tasks_1 = require("@angular-devkit/schematics/tasks");
var rxjsCompatVersion = '^6.0.0-rc.0';
function rxjsV6MigrationSchematic(_options) {
    return function (tree, context) {
        var pkgPath = '/package.json';
        var buffer = tree.read(pkgPath);
        if (buffer == null) {
            throw new schematics_1.SchematicsException('Could not read package.json');
        }
        var content = buffer.toString();
        var pkg = JSON.parse(content);
        if (pkg === null || typeof pkg !== 'object' || Array.isArray(pkg)) {
            throw new schematics_1.SchematicsException('Error reading package.json');
        }
        if (!pkg.dependencies) {
            pkg.dependencies = {};
        }
        pkg.dependencies['rxjs-compat'] = rxjsCompatVersion;
        tree.overwrite(pkgPath, JSON.stringify(pkg, null, 2));
        context.addTask(new tasks_1.NodePackageInstallTask());
        return tree;
    };
}
exports.rxjsV6MigrationSchematic = rxjsV6MigrationSchematic;
//# sourceMappingURL=index.js.map
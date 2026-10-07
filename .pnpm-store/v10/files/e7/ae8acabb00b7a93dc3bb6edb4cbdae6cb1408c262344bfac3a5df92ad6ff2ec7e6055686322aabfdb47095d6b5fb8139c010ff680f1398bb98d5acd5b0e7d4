"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDeclaredInPackageDeclarationFile = typeDeclaredInPackageDeclarationFile;
const ts = __importStar(require("typescript"));
function findParentModuleDeclaration(node) {
    switch (node.kind) {
        case ts.SyntaxKind.ModuleDeclaration:
            // "namespace x {...}" should be ignored here
            if (node.flags & ts.NodeFlags.Namespace) {
                break;
            }
            return ts.isStringLiteral(node.name)
                ? node
                : undefined;
        case ts.SyntaxKind.SourceFile:
            return undefined;
    }
    return findParentModuleDeclaration(node.parent);
}
function typeDeclaredInDeclareModule(packageName, declarations) {
    return declarations.some(declaration => findParentModuleDeclaration(declaration)?.name.text === packageName);
}
/**
 * Whether `packagePath` is `packageName` itself or something inside it, comparing
 * whole path components: `semver` covers `semver` and `semver/classes/semver.d.ts`,
 * but not `semver-compare` or `my-semver`.
 */
function pathIsInPackage(packagePath, packageName) {
    return (packagePath === packageName || packagePath.startsWith(`${packageName}/`));
}
function typeDeclaredInDeclarationFile(packageName, declarationFiles, program) {
    // Handle scoped packages: if the name starts with @, remove it and replace / with __
    const typesPackageName = packageName.replace(/^@([^/]+)\//, '$1__');
    return declarationFiles.some(declaration => {
        // A package id name is a path within the package, such as
        // `typescript/lib/typescript.d.ts` or `@types/semver/classes/semver.d.ts`.
        const packageIdName = program.sourceFileToPackageName.get(declaration.path);
        if (packageIdName == null) {
            return false;
        }
        return ((pathIsInPackage(packageIdName, packageName) ||
            pathIsInPackage(packageIdName.replace(/^@types\//, ''), typesPackageName)) &&
            program.isSourceFileFromExternalLibrary(declaration));
    });
}
function typeDeclaredInPackageDeclarationFile(packageName, declarations, declarationFiles, program) {
    return (typeDeclaredInDeclareModule(packageName, declarations) ||
        typeDeclaredInDeclarationFile(packageName, declarationFiles, program));
}
//# sourceMappingURL=typeDeclaredInPackageDeclarationFile.js.map